#!/usr/bin/env node
'use strict';

/**
 * icons/icon.svg → favicon.ico (16·32·48 PNG 항목을 담은 ICO).
 * 브라우저·검색 로봇이 자동으로 찾는 /favicon.ico 가 없으면 네이버 서치어드바이저에 수집 실패가 잡힌다(README 6-1b).
 * Node 내장 모듈 + 이미 설치된 playwright 만 쓴다(package.json 에 더하지 않는다). 실행: node scripts/favicon.js
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const root = path.resolve(__dirname, '..');
  const svg = fs.readFileSync(path.join(root, 'icons/icon.svg'), 'utf8');
  const b = await chromium.launch();
  const pngs = [];
  for (const size of [16, 32, 48]) {
    const page = await b.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
    await page.setContent(`<html><body style="margin:0;background:transparent">${svg.replace('<svg', `<svg width="${size}" height="${size}"`)}</body></html>`);
    pngs.push({ size, buf: await page.screenshot({ omitBackground: true, type: 'png' }) });
    await page.close();
  }
  await b.close();
  const n = pngs.length;
  const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(n, 4);
  const dir = Buffer.alloc(16 * n);
  let off = 6 + 16 * n;
  pngs.forEach((p, i) => {
    const o = i * 16;
    dir.writeUInt8(p.size === 256 ? 0 : p.size, o); dir.writeUInt8(p.size === 256 ? 0 : p.size, o + 1);
    dir.writeUInt8(0, o + 2); dir.writeUInt8(0, o + 3); dir.writeUInt16LE(1, o + 4); dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(p.buf.length, o + 8); dir.writeUInt32LE(off, o + 12); off += p.buf.length;
  });
  fs.writeFileSync(path.join(root, 'favicon.ico'), Buffer.concat([header, dir, ...pngs.map((p) => p.buf)]));
  console.log('favicon.ico', off, 'bytes');
})();

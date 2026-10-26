# 작업 안내 (사람과 AI 공용)

이 저장소의 설명은 전부 `README.md` 에 있다. 이 파일은 작업 전에 반드시 지킬 것만 모은 색인이다.

- **의존성을 추가하지 않는다.** `package.json` 에 dependencies 가 0개인 것이 이 프로젝트의 자산이다. 스크립트는 Node 내장 모듈만 쓴다. three.js 는 `vendor/` 에 고정(README 6-4).
- **데이터는 `data/*.json`, 규칙은 `npm run validate`.** 항목·국가·카테고리 추가는 README 3절. 위키백과 문장을 옮기지 않는다(CC BY-SA 전염, README 8절) — 사실만 가져오고 `description` 은 직접 쓴다.
- **배포는 빌드 결과를 커밋하는 방식.** 데이터나 코드를 바꾸면 `npm run build` 로 `data/bundle.js`·`p/`·`sitemap.xml`·`sw.js` 스탬프를 갱신해 **같은 커밋**에 넣는다. 안 넣으면 사이트는 옛 데이터를 보여 준다.
- 외부 요청 금지(폰트·스크립트·분석 도구). 전부 저장소 안에 있어야 오프라인 PWA 가 유지된다.
- 문구·이름에 개인 실명·소속을 넣지 않는다. 표시명은 '아기토끼 시로' 또는 '이시로스튜디오'.
- 릴리스: `CHANGELOG.md` 맨 위 한 줄 + `vX.Y.Z` 태그(Releases 에서).
- 운영(배포 확인·되돌리기·점검)은 README 9절.

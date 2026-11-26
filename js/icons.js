/* ------------------------------------------------------------------
   아이콘 — 탭 6개 · 시대 6개 · 카테고리 17개.

   전부 24×24 선 아이콘(선 굵기 1.7, 둥근 끝)이고 색은 currentColor 를 받아
   라이트·다크 테마와 카테고리 색을 그대로 탄다. 이미지 파일이 아니라 코드에
   들어 있어 오프라인에서도 추가 요청이 없다.

   식별자는 data/index.json 의 id 와 같다(시대 era.id, 카테고리 dataset.id).
   새 카테고리를 데이터에 넣었는데 여기 그림이 없으면 글자만 나온다 — 깨지지 않는다.
   그릴 때 지키는 것: 18px 에서도 읽히게 선은 7개 안쪽, 비슷한 소재(지붕·책·탑)는
   윤곽을 서로 다르게.  토끼 요소는 연표 탭의 위쪽 점(시로 귀)에만 있다.
   ------------------------------------------------------------------ */
(function (global) {
  'use strict';

  var HEAD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';

  // 탭 — 연표(시간축과 시로 귀 점) · 퀴즈(물음표 카드) · 갈림길(갈라지는 궤도) · 카테고리(네 칸) · 검색(돋보기) · 설정(톱니)
  var TAB = {
    timeline: '<line x1="12" y1="10.5" x2="12" y2="21.5"/>' +
      '<circle cx="12" cy="8.5" r="2.4" fill="currentColor"/>' +
      '<path d="M10.3 6.6L8.8 2.6M13.7 6.6l1.5-4" stroke-width="2.2"/>' +
      '<circle cx="12" cy="16.5" r="2"/><line x1="5" y1="16.5" x2="10" y2="16.5"/>',
    quiz: '<rect x="4" y="3" width="16" height="18" rx="2"/>' +
      '<path d="M9.6 9.2a2.4 2.4 0 0 1 4.8 0c0 1.7-2.4 2-2.4 4"/>' +
      '<circle cx="12" cy="16.6" r=".6" fill="currentColor"/>',
    branch: '<path d="M7 3v18"/><path d="M7 13c4 0 5-4 10-4"/>' +
      '<circle cx="17" cy="9" r="2"/><circle cx="7" cy="18" r="2"/>',
    category: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2"/>' +
      '<rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2"/>',
    search: '<circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="20.5" y2="20.5"/>',
    info: '<circle cx="12" cy="12" r="3.2"/>' +
      '<path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.6 5.6l1.9 1.9M16.5 16.5l1.9 1.9M5.6 18.4l1.9-1.9M16.5 7.5l1.9-1.9"/>'
  };

  // 시대 — 모닥불 · 피라미드 둘 · 성탑(깃발) · 범선 · 톱니(살 6개) · 위성과 궤도
  var ERA = {
    prehistory: '<path d="M12 4c2.5 3 4 5.2 4 7.5a4 4 0 0 1-8 0C8 9.2 9.5 7 12 4z"/>' +
      '<line x1="6" y1="19" x2="18" y2="17"/><line x1="6" y1="17" x2="18" y2="19"/>',
    ancient: '<path d="M2.5 19L10 5l6 11"/><path d="M12.5 19l5.5-8 4 8"/><line x1="2" y1="19" x2="22" y2="19"/>',
    medieval: '<path d="M8 21V7h8v14"/><path d="M8 7V4.5h2v1.5h4V4.5h2V7"/>' +
      '<path d="M12 4.5V1.5l3.5 1.2L12 4"/><line x1="5" y1="21" x2="19" y2="21"/>',
    earlymodern: '<path d="M4 16h16l-2 4H6l-2-4z"/><path d="M12 4v12"/>' +
      '<path d="M12 5l6 9h-6"/><path d="M12 7l-5 7h5"/>',
    modern: '<circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.4"/>' +
      '<path d="M12 7.5V4.5M12 16.5v3M15.9 9.75l2.6-1.5M8.1 14.25l-2.6 1.5M15.9 14.25l2.6 1.5M8.1 9.75l-2.6-1.5"/>',
    contemporary: '<rect x="10" y="10" width="4" height="4" transform="rotate(-45 12 12)"/>' +
      '<line x1="6.5" y1="6.5" x2="9" y2="9"/><line x1="15" y1="15" x2="17.5" y2="17.5"/>' +
      '<path d="M4 18a14 14 0 0 1 14-14"/>'
  };

  // 카테고리 — 왕관 · 기와집 · 성문 · 도리이 · 원자 · 음표 · 장구 · 팔레트 · 붓과 벼루 · 촛불 ·
  //            부엉이 · 두루마리 · 펼친 책 · 선장본 · 전구 · 엽전 · 기둥
  var CATEGORY = {
    world: '<path d="M4 17l-1-9 5 4 4-6 4 6 5-4-1 9H4z"/><line x1="4" y1="20" x2="20" y2="20"/>',
    korea: '<path d="M2.5 9.5C5 12.5 8.5 11.5 12 5c3.5 6.5 7 7.5 9.5 4.5"/>' +
      '<path d="M8 12.5V18M16 12.5V18"/><path d="M4.5 18h15"/><path d="M6 21h12"/>',
    china: '<path d="M3 21V10h18v11"/><path d="M9 21v-5a3 3 0 0 1 6 0v5"/>' +
      '<path d="M2 10h20"/><path d="M8 10V5.5h8V10"/>',
    japan: '<path d="M2.5 6.5C6 8 18 8 21.5 6.5"/><line x1="4.5" y1="11.5" x2="19.5" y2="11.5"/>' +
      '<line x1="7.5" y1="7.6" x2="7.5" y2="21"/><line x1="16.5" y1="7.6" x2="16.5" y2="21"/>',
    science: '<circle cx="12" cy="12" r="1.5" fill="currentColor"/>' +
      '<ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)"/>' +
      '<ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-30 12 12)"/>',
    'music-west': '<path d="M9 17V6l10-2v11"/><circle cx="6.5" cy="17" r="2.5"/><circle cx="16.5" cy="15" r="2.5"/>',
    'music-east': '<ellipse cx="5" cy="12" rx="2.2" ry="5.5"/><ellipse cx="19" cy="12" rx="2.2" ry="5.5"/>' +
      '<path d="M7 7.5C10 9 14 9 17 7.5M7 16.5c3-1.5 7-1.5 10 0"/>',
    'art-west': '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2.5-1 2.5-2.2 0-.6-.2-1.1-.6-1.5-.4-.4-.6-.9-.6-1.5 0-1.2 1-2.2 2.2-2.2H18a3 3 0 0 0 3-3A8.6 8.6 0 0 0 12 3z"/>' +
      '<circle cx="8.5" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="7.5" r="1" fill="currentColor"/><circle cx="15.5" cy="10" r="1" fill="currentColor"/>',
    'art-east': '<path d="M18 4L9 13"/><path d="M9 13c-2 0-3.5 1.5-4 4 2.5-.5 4-2 4-4z"/><ellipse cx="14" cy="18" rx="6" ry="2.5"/>',
    religion: '<path d="M12 4c1.2 1.8 2 3 2 4.2a2 2 0 0 1-4 0C10 7 10.8 5.8 12 4z"/>' +
      '<rect x="9" y="12" width="6" height="8" rx="1"/><line x1="7" y1="20" x2="17" y2="20"/>',
    'philosophy-west': '<path d="M7 5l2 2h6l2-2v9a5 5 0 0 1-10 0V5z"/>' +
      '<circle cx="9.9" cy="11.2" r="1.9"/><circle cx="14.1" cy="11.2" r="1.9"/>',
    'philosophy-east': '<rect x="2.5" y="5" width="3" height="14" rx="1.5"/><rect x="18.5" y="5" width="3" height="14" rx="1.5"/>' +
      '<path d="M5.5 7h13M5.5 17h13"/><path d="M9 11h6M9 13.5h4"/>',
    'literature-west': '<path d="M12 6c-2.5-1.5-5.5-1.5-8 0v12c2.5-1.5 5.5-1.5 8 0"/>' +
      '<path d="M12 6c2.5-1.5 5.5-1.5 8 0v12c-2.5-1.5-5.5-1.5-8 0"/><line x1="12" y1="6" x2="12" y2="18"/>',
    'literature-east': '<rect x="5" y="3.5" width="14" height="17" rx="1"/>' +
      '<path d="M8 3.5v17"/><path d="M6.5 7.5h1.5M6.5 12h1.5M6.5 16.5h1.5"/><path d="M12 7v8M15.5 7v6"/>',
    technology: '<path d="M8.5 15.5a5.5 5.5 0 1 1 7 0c-.9.8-1.5 1.5-1.5 2.5h-4c0-1-.6-1.7-1.5-2.5z"/>' +
      '<path d="M10 20.5h4"/>',
    economy: '<circle cx="12" cy="12" r="8"/><rect x="9.5" y="9.5" width="5" height="5"/>',
    coffee: '<path d="M5 9h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V9z"/><path d="M16 10.5h1.5a2.25 2.25 0 0 1 0 4.5H16"/>' +
      '<path d="M8.5 3.5c-.8 1-.8 2 0 3M11.5 3.5c-.8 1-.8 2 0 3"/>',
    hamburger: '<path d="M5 10a7 7 0 0 1 14 0H5z"/><path d="M4.5 13.5h15"/><path d="M5.5 17a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1h-13v1z"/>' +
      '<path d="M9 7.5h.01M12 6.5h.01M15 7.5h.01"/>',
    architecture: '<line x1="5" y1="5" x2="19" y2="5"/><line x1="5" y1="19" x2="19" y2="19"/>' +
      '<line x1="8" y1="5" x2="8" y2="19"/><line x1="12" y1="5" x2="12" y2="19"/><line x1="16" y1="5" x2="16" y2="19"/>'
  };

  var SETS = { tab: TAB, era: ERA, category: CATEGORY };

  /** 아이콘 SVG 문자열. 없는 id 면 빈 문자열 — 호출하는 쪽은 그냥 글자만 보여 준다. */
  function svg(set, id) {
    var body = SETS[set] && SETS[set][id];
    return body ? HEAD + body + '</svg>' : '';
  }

  global.ICONS = { svg: svg, sets: SETS };
})(window);

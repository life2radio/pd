// PD 스튜디오 Service Worker
// 목적: 브라우저가 이 사이트를 PWA로 인식 → beforeinstallprompt 이벤트 발생 가능 → 한 번 탭으로 설치
// 캐싱은 의도적으로 안 함 (앱 본체는 외부 claude.ai에 있고, 이 페이지는 단순 redirect 게이트라서)

const SW_VERSION = 'v1';

self.addEventListener('install', (event) => {
  // 새 SW 즉시 활성화 (대기 안 함)
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // 모든 탭에 즉시 적용
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 통과 — 캐시 없이 네트워크 그대로
  // (SW 존재 자체가 PWA 인식 조건. fetch 핸들러는 비어도 OK이지만 일부 브라우저 호환을 위해 등록)
});

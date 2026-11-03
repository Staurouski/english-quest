/* Start-up: theme, first screen, and a nudge for browsers that load voices late. */
(function (EQ) {
  'use strict';
  EQ.game.applyTheme();
  const first = (location.hash || '').replace('#', '');
  EQ.go(['map', 'games', 'shop', 'words', 'album'].indexOf(first) >= 0 ? first : 'home');
  // Safari/Chrome only allow sound after the first click; warm up the audio engine then.
  document.addEventListener('click', function once() { EQ.sfx.tap(); document.removeEventListener('click', once); });
})(window.EQ);

(function(ft) {
  typeof define == "function" && define.amd ? define(ft) : ft()
}
)(function() {
  "use strict";
  var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function br(G) {
      return G && G.__esModule && Object.prototype.hasOwnProperty.call(G, "default") ? G.default : G
  }
  var rn = {}
    , Ar = {
      get exports() {
          return rn
      },
      set exports(G) {
          rn = G
      }
  };
  (function(G, k) {
      (function(f, r) {
          G.exports = r()
      }
      )(typeof self < "u" ? self : ft, function() {
          return function(a) {
              var f = {};
              function r(l) {
                  if (f[l])
                      return f[l].exports;
                  var s = f[l] = {
                      i: l,
                      l: !1,
                      exports: {}
                  };
                  return a[l].call(s.exports, s, s.exports, r),
                  s.l = !0,
                  s.exports
              }
              return r.m = a,
              r.c = f,
              r.d = function(l, s, u) {
                  r.o(l, s) || Object.defineProperty(l, s, {
                      configurable: !1,
                      enumerable: !0,
                      get: u
                  })
              }
              ,
              r.r = function(l) {
                  Object.defineProperty(l, "__esModule", {
                      value: !0
                  })
              }
              ,
              r.n = function(l) {
                  var s = l && l.__esModule ? function() {
                      return l.default
                  }
                  : function() {
                      return l
                  }
                  ;
                  return r.d(s, "a", s),
                  s
              }
              ,
              r.o = function(l, s) {
                  return Object.prototype.hasOwnProperty.call(l, s)
              }
              ,
              r.p = "",
              r(r.s = 0)
          }({
              "./dist/icons.json": function(a) {
                  a.exports = {
                      activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                      airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                      "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                      "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                      "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                      "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                      "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                      "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                      "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                      anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                      aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                      archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                      "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                      "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                      "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                      "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                      "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                      "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                      "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                      "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                      "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                      "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                      "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                      "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                      "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                      award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                      "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                      "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                      "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                      battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                      "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                      bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                      bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                      bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                      "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                      book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                      bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                      box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                      briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                      calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                      "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                      camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                      cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                      "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                      "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                      check: '<polyline points="20 6 9 17 4 12"></polyline>',
                      "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                      "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                      "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                      "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                      "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                      "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                      "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                      "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                      chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                      circle: '<circle cx="12" cy="12" r="10"></circle>',
                      clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                      clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                      "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                      "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                      "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                      "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                      "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                      cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                      code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                      codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                      codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                      coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                      columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                      command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                      compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                      copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                      "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                      "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                      "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                      "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                      "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                      "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                      "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                      "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                      cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                      "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                      crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                      crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                      database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                      delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                      disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                      "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                      "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                      divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                      "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                      "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                      download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                      dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                      droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                      "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                      "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                      edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                      "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                      "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                      eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                      facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                      "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                      feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                      figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                      "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                      "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                      "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                      file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                      film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                      filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                      flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                      "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                      "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                      folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                      framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                      frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                      gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                      "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                      "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                      "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                      "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                      github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                      gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                      globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                      grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                      "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                      hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                      headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                      heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                      "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                      hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                      home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                      image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                      inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                      info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                      instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                      italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                      key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                      layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                      layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                      "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                      "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                      link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                      linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                      list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                      loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                      lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                      "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                      "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                      mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                      "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                      map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                      "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                      maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                      meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                      menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                      "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                      "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                      "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                      mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                      "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                      minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                      "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                      "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                      minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                      monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                      moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                      "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                      "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                      "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                      move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                      music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                      "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                      navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                      octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                      package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                      paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                      "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                      pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                      "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                      percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                      "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                      "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                      "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                      "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                      "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                      "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                      "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                      "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                      play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                      "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                      "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                      plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                      pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                      power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                      printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                      radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                      "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                      "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                      repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                      rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                      "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                      "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                      rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                      save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                      scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                      search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                      send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                      server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                      settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                      "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                      share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                      "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                      "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                      "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                      shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                      sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                      "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                      "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                      slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                      slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                      sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                      smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                      smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                      speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                      square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                      star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                      "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                      sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                      sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                      sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                      table: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',
                      tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                      tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                      target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                      terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                      thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                      "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                      "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                      "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                      "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                      tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                      "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                      trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                      trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                      "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                      "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                      triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                      truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                      tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                      twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                      twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                      type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                      umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                      underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                      unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                      "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                      upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                      "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                      "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                      "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                      "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                      user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                      users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                      "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                      video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                      voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                      "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                      "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                      "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                      volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                      watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                      "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                      wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                      wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                      "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                      "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                      "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                      x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                      youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                      "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                      zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                      "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                      "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
                  }
              },
              "./node_modules/classnames/dedupe.js": function(a, f, r) {
                  var l, s;
                  /*!
Copyright (c) 2016 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/
                  (function() {
                      var u = function() {
                          function h() {}
                          h.prototype = Object.create(null);
                          function p(T, j) {
                              for (var S = j.length, N = 0; N < S; ++N)
                                  v(T, j[N])
                          }
                          var g = {}.hasOwnProperty;
                          function m(T, j) {
                              T[j] = !0
                          }
                          function E(T, j) {
                              for (var S in j)
                                  g.call(j, S) && (T[S] = !!j[S])
                          }
                          var w = /\s+/;
                          function _(T, j) {
                              for (var S = j.split(w), N = S.length, B = 0; B < N; ++B)
                                  T[S[B]] = !0
                          }
                          function v(T, j) {
                              if (j) {
                                  var S = typeof j;
                                  S === "string" ? _(T, j) : Array.isArray(j) ? p(T, j) : S === "object" ? E(T, j) : S === "number" && m(T, j)
                              }
                          }
                          function O() {
                              for (var T = arguments.length, j = Array(T), S = 0; S < T; S++)
                                  j[S] = arguments[S];
                              var N = new h;
                              p(N, j);
                              var B = [];
                              for (var L in N)
                                  N[L] && B.push(L);
                              return B.join(" ")
                          }
                          return O
                      }();
                      typeof a < "u" && a.exports ? a.exports = u : (l = [],
                      s = function() {
                          return u
                      }
                      .apply(f, l),
                      s !== void 0 && (a.exports = s))
                  }
                  )()
              },
              "./node_modules/core-js/es/array/from.js": function(a, f, r) {
                  r("./node_modules/core-js/modules/es.string.iterator.js"),
                  r("./node_modules/core-js/modules/es.array.from.js");
                  var l = r("./node_modules/core-js/internals/path.js");
                  a.exports = l.Array.from
              },
              "./node_modules/core-js/internals/a-function.js": function(a, f) {
                  a.exports = function(r) {
                      if (typeof r != "function")
                          throw TypeError(String(r) + " is not a function");
                      return r
                  }
              },
              "./node_modules/core-js/internals/an-object.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/is-object.js");
                  a.exports = function(s) {
                      if (!l(s))
                          throw TypeError(String(s) + " is not an object");
                      return s
                  }
              },
              "./node_modules/core-js/internals/array-from.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/bind-context.js")
                    , s = r("./node_modules/core-js/internals/to-object.js")
                    , u = r("./node_modules/core-js/internals/call-with-safe-iteration-closing.js")
                    , h = r("./node_modules/core-js/internals/is-array-iterator-method.js")
                    , p = r("./node_modules/core-js/internals/to-length.js")
                    , g = r("./node_modules/core-js/internals/create-property.js")
                    , m = r("./node_modules/core-js/internals/get-iterator-method.js");
                  a.exports = function(w) {
                      var _ = s(w), v = typeof this == "function" ? this : Array, O = arguments.length, T = O > 1 ? arguments[1] : void 0, j = T !== void 0, S = 0, N = m(_), B, L, $, z;
                      if (j && (T = l(T, O > 2 ? arguments[2] : void 0, 2)),
                      N != null && !(v == Array && h(N)))
                          for (z = N.call(_),
                          L = new v; !($ = z.next()).done; S++)
                              g(L, S, j ? u(z, T, [$.value, S], !0) : $.value);
                      else
                          for (B = p(_.length),
                          L = new v(B); B > S; S++)
                              g(L, S, j ? T(_[S], S) : _[S]);
                      return L.length = S,
                      L
                  }
              },
              "./node_modules/core-js/internals/array-includes.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/to-indexed-object.js")
                    , s = r("./node_modules/core-js/internals/to-length.js")
                    , u = r("./node_modules/core-js/internals/to-absolute-index.js");
                  a.exports = function(h) {
                      return function(p, g, m) {
                          var E = l(p), w = s(E.length), _ = u(m, w), v;
                          if (h && g != g) {
                              for (; w > _; )
                                  if (v = E[_++],
                                  v != v)
                                      return !0
                          } else
                              for (; w > _; _++)
                                  if ((h || _ in E) && E[_] === g)
                                      return h || _ || 0;
                          return !h && -1
                      }
                  }
              },
              "./node_modules/core-js/internals/bind-context.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/a-function.js");
                  a.exports = function(s, u, h) {
                      if (l(s),
                      u === void 0)
                          return s;
                      switch (h) {
                      case 0:
                          return function() {
                              return s.call(u)
                          }
                          ;
                      case 1:
                          return function(p) {
                              return s.call(u, p)
                          }
                          ;
                      case 2:
                          return function(p, g) {
                              return s.call(u, p, g)
                          }
                          ;
                      case 3:
                          return function(p, g, m) {
                              return s.call(u, p, g, m)
                          }
                      }
                      return function() {
                          return s.apply(u, arguments)
                      }
                  }
              },
              "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/an-object.js");
                  a.exports = function(s, u, h, p) {
                      try {
                          return p ? u(l(h)[0], h[1]) : u(h)
                      } catch (m) {
                          var g = s.return;
                          throw g !== void 0 && l(g.call(s)),
                          m
                      }
                  }
              },
              "./node_modules/core-js/internals/check-correctness-of-iteration.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/well-known-symbol.js")
                    , s = l("iterator")
                    , u = !1;
                  try {
                      var h = 0
                        , p = {
                          next: function() {
                              return {
                                  done: !!h++
                              }
                          },
                          return: function() {
                              u = !0
                          }
                      };
                      p[s] = function() {
                          return this
                      }
                      ,
                      Array.from(p, function() {
                          throw 2
                      })
                  } catch {}
                  a.exports = function(g, m) {
                      if (!m && !u)
                          return !1;
                      var E = !1;
                      try {
                          var w = {};
                          w[s] = function() {
                              return {
                                  next: function() {
                                      return {
                                          done: E = !0
                                      }
                                  }
                              }
                          }
                          ,
                          g(w)
                      } catch {}
                      return E
                  }
              },
              "./node_modules/core-js/internals/classof-raw.js": function(a, f) {
                  var r = {}.toString;
                  a.exports = function(l) {
                      return r.call(l).slice(8, -1)
                  }
              },
              "./node_modules/core-js/internals/classof.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/classof-raw.js")
                    , s = r("./node_modules/core-js/internals/well-known-symbol.js")
                    , u = s("toStringTag")
                    , h = l(function() {
                      return arguments
                  }()) == "Arguments"
                    , p = function(g, m) {
                      try {
                          return g[m]
                      } catch {}
                  };
                  a.exports = function(g) {
                      var m, E, w;
                      return g === void 0 ? "Undefined" : g === null ? "Null" : typeof (E = p(m = Object(g), u)) == "string" ? E : h ? l(m) : (w = l(m)) == "Object" && typeof m.callee == "function" ? "Arguments" : w
                  }
              },
              "./node_modules/core-js/internals/copy-constructor-properties.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/has.js")
                    , s = r("./node_modules/core-js/internals/own-keys.js")
                    , u = r("./node_modules/core-js/internals/object-get-own-property-descriptor.js")
                    , h = r("./node_modules/core-js/internals/object-define-property.js");
                  a.exports = function(p, g) {
                      for (var m = s(g), E = h.f, w = u.f, _ = 0; _ < m.length; _++) {
                          var v = m[_];
                          l(p, v) || E(p, v, w(g, v))
                      }
                  }
              },
              "./node_modules/core-js/internals/correct-prototype-getter.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/fails.js");
                  a.exports = !l(function() {
                      function s() {}
                      return s.prototype.constructor = null,
                      Object.getPrototypeOf(new s) !== s.prototype
                  })
              },
              "./node_modules/core-js/internals/create-iterator-constructor.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype
                    , s = r("./node_modules/core-js/internals/object-create.js")
                    , u = r("./node_modules/core-js/internals/create-property-descriptor.js")
                    , h = r("./node_modules/core-js/internals/set-to-string-tag.js")
                    , p = r("./node_modules/core-js/internals/iterators.js")
                    , g = function() {
                      return this
                  };
                  a.exports = function(m, E, w) {
                      var _ = E + " Iterator";
                      return m.prototype = s(l, {
                          next: u(1, w)
                      }),
                      h(m, _, !1, !0),
                      p[_] = g,
                      m
                  }
              },
              "./node_modules/core-js/internals/create-property-descriptor.js": function(a, f) {
                  a.exports = function(r, l) {
                      return {
                          enumerable: !(r & 1),
                          configurable: !(r & 2),
                          writable: !(r & 4),
                          value: l
                      }
                  }
              },
              "./node_modules/core-js/internals/create-property.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/to-primitive.js")
                    , s = r("./node_modules/core-js/internals/object-define-property.js")
                    , u = r("./node_modules/core-js/internals/create-property-descriptor.js");
                  a.exports = function(h, p, g) {
                      var m = l(p);
                      m in h ? s.f(h, m, u(0, g)) : h[m] = g
                  }
              },
              "./node_modules/core-js/internals/define-iterator.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/export.js")
                    , s = r("./node_modules/core-js/internals/create-iterator-constructor.js")
                    , u = r("./node_modules/core-js/internals/object-get-prototype-of.js")
                    , h = r("./node_modules/core-js/internals/object-set-prototype-of.js")
                    , p = r("./node_modules/core-js/internals/set-to-string-tag.js")
                    , g = r("./node_modules/core-js/internals/hide.js")
                    , m = r("./node_modules/core-js/internals/redefine.js")
                    , E = r("./node_modules/core-js/internals/well-known-symbol.js")
                    , w = r("./node_modules/core-js/internals/is-pure.js")
                    , _ = r("./node_modules/core-js/internals/iterators.js")
                    , v = r("./node_modules/core-js/internals/iterators-core.js")
                    , O = v.IteratorPrototype
                    , T = v.BUGGY_SAFARI_ITERATORS
                    , j = E("iterator")
                    , S = "keys"
                    , N = "values"
                    , B = "entries"
                    , L = function() {
                      return this
                  };
                  a.exports = function($, z, de, mt, Te, sn, Lt) {
                      s(de, z, mt);
                      var Oe = function(ue) {
                          if (ue === Te && ge)
                              return ge;
                          if (!T && ue in ae)
                              return ae[ue];
                          switch (ue) {
                          case S:
                              return function() {
                                  return new de(this,ue)
                              }
                              ;
                          case N:
                              return function() {
                                  return new de(this,ue)
                              }
                              ;
                          case B:
                              return function() {
                                  return new de(this,ue)
                              }
                          }
                          return function() {
                              return new de(this)
                          }
                      }, gt = z + " Iterator", Qe = !1, ae = $.prototype, _e = ae[j] || ae["@@iterator"] || Te && ae[Te], ge = !T && _e || Oe(Te), Dt = z == "Array" && ae.entries || _e, Ee, Se, Ie;
                      if (Dt && (Ee = u(Dt.call(new $)),
                      O !== Object.prototype && Ee.next && (!w && u(Ee) !== O && (h ? h(Ee, O) : typeof Ee[j] != "function" && g(Ee, j, L)),
                      p(Ee, gt, !0, !0),
                      w && (_[gt] = L))),
                      Te == N && _e && _e.name !== N && (Qe = !0,
                      ge = function() {
                          return _e.call(this)
                      }
                      ),
                      (!w || Lt) && ae[j] !== ge && g(ae, j, ge),
                      _[z] = ge,
                      Te)
                          if (Se = {
                              values: Oe(N),
                              keys: sn ? ge : Oe(S),
                              entries: Oe(B)
                          },
                          Lt)
                              for (Ie in Se)
                                  (T || Qe || !(Ie in ae)) && m(ae, Ie, Se[Ie]);
                          else
                              l({
                                  target: z,
                                  proto: !0,
                                  forced: T || Qe
                              }, Se);
                      return Se
                  }
              },
              "./node_modules/core-js/internals/descriptors.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/fails.js");
                  a.exports = !l(function() {
                      return Object.defineProperty({}, "a", {
                          get: function() {
                              return 7
                          }
                      }).a != 7
                  })
              },
              "./node_modules/core-js/internals/document-create-element.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/is-object.js")
                    , u = l.document
                    , h = s(u) && s(u.createElement);
                  a.exports = function(p) {
                      return h ? u.createElement(p) : {}
                  }
              },
              "./node_modules/core-js/internals/enum-bug-keys.js": function(a, f) {
                  a.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
              },
              "./node_modules/core-js/internals/export.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f
                    , u = r("./node_modules/core-js/internals/hide.js")
                    , h = r("./node_modules/core-js/internals/redefine.js")
                    , p = r("./node_modules/core-js/internals/set-global.js")
                    , g = r("./node_modules/core-js/internals/copy-constructor-properties.js")
                    , m = r("./node_modules/core-js/internals/is-forced.js");
                  a.exports = function(E, w) {
                      var _ = E.target, v = E.global, O = E.stat, T, j, S, N, B, L;
                      if (v ? j = l : O ? j = l[_] || p(_, {}) : j = (l[_] || {}).prototype,
                      j)
                          for (S in w) {
                              if (B = w[S],
                              E.noTargetGet ? (L = s(j, S),
                              N = L && L.value) : N = j[S],
                              T = m(v ? S : _ + (O ? "." : "#") + S, E.forced),
                              !T && N !== void 0) {
                                  if (typeof B == typeof N)
                                      continue;
                                  g(B, N)
                              }
                              (E.sham || N && N.sham) && u(B, "sham", !0),
                              h(j, S, B, E)
                          }
                  }
              },
              "./node_modules/core-js/internals/fails.js": function(a, f) {
                  a.exports = function(r) {
                      try {
                          return !!r()
                      } catch {
                          return !0
                      }
                  }
              },
              "./node_modules/core-js/internals/function-to-string.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/shared.js");
                  a.exports = l("native-function-to-string", Function.toString)
              },
              "./node_modules/core-js/internals/get-iterator-method.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/classof.js")
                    , s = r("./node_modules/core-js/internals/iterators.js")
                    , u = r("./node_modules/core-js/internals/well-known-symbol.js")
                    , h = u("iterator");
                  a.exports = function(p) {
                      if (p != null)
                          return p[h] || p["@@iterator"] || s[l(p)]
                  }
              },
              "./node_modules/core-js/internals/global.js": function(a, f, r) {
                  (function(l) {
                      var s = "object"
                        , u = function(h) {
                          return h && h.Math == Math && h
                      };
                      a.exports = u(typeof globalThis == s && globalThis) || u(typeof window == s && window) || u(typeof self == s && self) || u(typeof l == s && l) || Function("return this")()
                  }
                  ).call(this, r("./node_modules/webpack/buildin/global.js"))
              },
              "./node_modules/core-js/internals/has.js": function(a, f) {
                  var r = {}.hasOwnProperty;
                  a.exports = function(l, s) {
                      return r.call(l, s)
                  }
              },
              "./node_modules/core-js/internals/hidden-keys.js": function(a, f) {
                  a.exports = {}
              },
              "./node_modules/core-js/internals/hide.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/descriptors.js")
                    , s = r("./node_modules/core-js/internals/object-define-property.js")
                    , u = r("./node_modules/core-js/internals/create-property-descriptor.js");
                  a.exports = l ? function(h, p, g) {
                      return s.f(h, p, u(1, g))
                  }
                  : function(h, p, g) {
                      return h[p] = g,
                      h
                  }
              },
              "./node_modules/core-js/internals/html.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = l.document;
                  a.exports = s && s.documentElement
              },
              "./node_modules/core-js/internals/ie8-dom-define.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/descriptors.js")
                    , s = r("./node_modules/core-js/internals/fails.js")
                    , u = r("./node_modules/core-js/internals/document-create-element.js");
                  a.exports = !l && !s(function() {
                      return Object.defineProperty(u("div"), "a", {
                          get: function() {
                              return 7
                          }
                      }).a != 7
                  })
              },
              "./node_modules/core-js/internals/indexed-object.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/fails.js")
                    , s = r("./node_modules/core-js/internals/classof-raw.js")
                    , u = "".split;
                  a.exports = l(function() {
                      return !Object("z").propertyIsEnumerable(0)
                  }) ? function(h) {
                      return s(h) == "String" ? u.call(h, "") : Object(h)
                  }
                  : Object
              },
              "./node_modules/core-js/internals/internal-state.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/native-weak-map.js"), s = r("./node_modules/core-js/internals/global.js"), u = r("./node_modules/core-js/internals/is-object.js"), h = r("./node_modules/core-js/internals/hide.js"), p = r("./node_modules/core-js/internals/has.js"), g = r("./node_modules/core-js/internals/shared-key.js"), m = r("./node_modules/core-js/internals/hidden-keys.js"), E = s.WeakMap, w, _, v, O = function($) {
                      return v($) ? _($) : w($, {})
                  }, T = function($) {
                      return function(z) {
                          var de;
                          if (!u(z) || (de = _(z)).type !== $)
                              throw TypeError("Incompatible receiver, " + $ + " required");
                          return de
                      }
                  };
                  if (l) {
                      var j = new E
                        , S = j.get
                        , N = j.has
                        , B = j.set;
                      w = function($, z) {
                          return B.call(j, $, z),
                          z
                      }
                      ,
                      _ = function($) {
                          return S.call(j, $) || {}
                      }
                      ,
                      v = function($) {
                          return N.call(j, $)
                      }
                  } else {
                      var L = g("state");
                      m[L] = !0,
                      w = function($, z) {
                          return h($, L, z),
                          z
                      }
                      ,
                      _ = function($) {
                          return p($, L) ? $[L] : {}
                      }
                      ,
                      v = function($) {
                          return p($, L)
                      }
                  }
                  a.exports = {
                      set: w,
                      get: _,
                      has: v,
                      enforce: O,
                      getterFor: T
                  }
              },
              "./node_modules/core-js/internals/is-array-iterator-method.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/well-known-symbol.js")
                    , s = r("./node_modules/core-js/internals/iterators.js")
                    , u = l("iterator")
                    , h = Array.prototype;
                  a.exports = function(p) {
                      return p !== void 0 && (s.Array === p || h[u] === p)
                  }
              },
              "./node_modules/core-js/internals/is-forced.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/fails.js")
                    , s = /#|\.prototype\./
                    , u = function(E, w) {
                      var _ = p[h(E)];
                      return _ == m ? !0 : _ == g ? !1 : typeof w == "function" ? l(w) : !!w
                  }
                    , h = u.normalize = function(E) {
                      return String(E).replace(s, ".").toLowerCase()
                  }
                    , p = u.data = {}
                    , g = u.NATIVE = "N"
                    , m = u.POLYFILL = "P";
                  a.exports = u
              },
              "./node_modules/core-js/internals/is-object.js": function(a, f) {
                  a.exports = function(r) {
                      return typeof r == "object" ? r !== null : typeof r == "function"
                  }
              },
              "./node_modules/core-js/internals/is-pure.js": function(a, f) {
                  a.exports = !1
              },
              "./node_modules/core-js/internals/iterators-core.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/object-get-prototype-of.js"), s = r("./node_modules/core-js/internals/hide.js"), u = r("./node_modules/core-js/internals/has.js"), h = r("./node_modules/core-js/internals/well-known-symbol.js"), p = r("./node_modules/core-js/internals/is-pure.js"), g = h("iterator"), m = !1, E = function() {
                      return this
                  }, w, _, v;
                  [].keys && (v = [].keys(),
                  "next"in v ? (_ = l(l(v)),
                  _ !== Object.prototype && (w = _)) : m = !0),
                  w == null && (w = {}),
                  !p && !u(w, g) && s(w, g, E),
                  a.exports = {
                      IteratorPrototype: w,
                      BUGGY_SAFARI_ITERATORS: m
                  }
              },
              "./node_modules/core-js/internals/iterators.js": function(a, f) {
                  a.exports = {}
              },
              "./node_modules/core-js/internals/native-symbol.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/fails.js");
                  a.exports = !!Object.getOwnPropertySymbols && !l(function() {
                      return !String(Symbol())
                  })
              },
              "./node_modules/core-js/internals/native-weak-map.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/function-to-string.js")
                    , u = l.WeakMap;
                  a.exports = typeof u == "function" && /native code/.test(s.call(u))
              },
              "./node_modules/core-js/internals/object-create.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/an-object.js")
                    , s = r("./node_modules/core-js/internals/object-define-properties.js")
                    , u = r("./node_modules/core-js/internals/enum-bug-keys.js")
                    , h = r("./node_modules/core-js/internals/hidden-keys.js")
                    , p = r("./node_modules/core-js/internals/html.js")
                    , g = r("./node_modules/core-js/internals/document-create-element.js")
                    , m = r("./node_modules/core-js/internals/shared-key.js")
                    , E = m("IE_PROTO")
                    , w = "prototype"
                    , _ = function() {}
                    , v = function() {
                      var O = g("iframe"), T = u.length, j = "<", S = "script", N = ">", B = "java" + S + ":", L;
                      for (O.style.display = "none",
                      p.appendChild(O),
                      O.src = String(B),
                      L = O.contentWindow.document,
                      L.open(),
                      L.write(j + S + N + "document.F=Object" + j + "/" + S + N),
                      L.close(),
                      v = L.F; T--; )
                          delete v[w][u[T]];
                      return v()
                  };
                  a.exports = Object.create || function(T, j) {
                      var S;
                      return T !== null ? (_[w] = l(T),
                      S = new _,
                      _[w] = null,
                      S[E] = T) : S = v(),
                      j === void 0 ? S : s(S, j)
                  }
                  ,
                  h[E] = !0
              },
              "./node_modules/core-js/internals/object-define-properties.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/descriptors.js")
                    , s = r("./node_modules/core-js/internals/object-define-property.js")
                    , u = r("./node_modules/core-js/internals/an-object.js")
                    , h = r("./node_modules/core-js/internals/object-keys.js");
                  a.exports = l ? Object.defineProperties : function(g, m) {
                      u(g);
                      for (var E = h(m), w = E.length, _ = 0, v; w > _; )
                          s.f(g, v = E[_++], m[v]);
                      return g
                  }
              },
              "./node_modules/core-js/internals/object-define-property.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/descriptors.js")
                    , s = r("./node_modules/core-js/internals/ie8-dom-define.js")
                    , u = r("./node_modules/core-js/internals/an-object.js")
                    , h = r("./node_modules/core-js/internals/to-primitive.js")
                    , p = Object.defineProperty;
                  f.f = l ? p : function(m, E, w) {
                      if (u(m),
                      E = h(E, !0),
                      u(w),
                      s)
                          try {
                              return p(m, E, w)
                          } catch {}
                      if ("get"in w || "set"in w)
                          throw TypeError("Accessors not supported");
                      return "value"in w && (m[E] = w.value),
                      m
                  }
              },
              "./node_modules/core-js/internals/object-get-own-property-descriptor.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/descriptors.js")
                    , s = r("./node_modules/core-js/internals/object-property-is-enumerable.js")
                    , u = r("./node_modules/core-js/internals/create-property-descriptor.js")
                    , h = r("./node_modules/core-js/internals/to-indexed-object.js")
                    , p = r("./node_modules/core-js/internals/to-primitive.js")
                    , g = r("./node_modules/core-js/internals/has.js")
                    , m = r("./node_modules/core-js/internals/ie8-dom-define.js")
                    , E = Object.getOwnPropertyDescriptor;
                  f.f = l ? E : function(_, v) {
                      if (_ = h(_),
                      v = p(v, !0),
                      m)
                          try {
                              return E(_, v)
                          } catch {}
                      if (g(_, v))
                          return u(!s.f.call(_, v), _[v])
                  }
              },
              "./node_modules/core-js/internals/object-get-own-property-names.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/object-keys-internal.js")
                    , s = r("./node_modules/core-js/internals/enum-bug-keys.js")
                    , u = s.concat("length", "prototype");
                  f.f = Object.getOwnPropertyNames || function(p) {
                      return l(p, u)
                  }
              },
              "./node_modules/core-js/internals/object-get-own-property-symbols.js": function(a, f) {
                  f.f = Object.getOwnPropertySymbols
              },
              "./node_modules/core-js/internals/object-get-prototype-of.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/has.js")
                    , s = r("./node_modules/core-js/internals/to-object.js")
                    , u = r("./node_modules/core-js/internals/shared-key.js")
                    , h = r("./node_modules/core-js/internals/correct-prototype-getter.js")
                    , p = u("IE_PROTO")
                    , g = Object.prototype;
                  a.exports = h ? Object.getPrototypeOf : function(m) {
                      return m = s(m),
                      l(m, p) ? m[p] : typeof m.constructor == "function" && m instanceof m.constructor ? m.constructor.prototype : m instanceof Object ? g : null
                  }
              },
              "./node_modules/core-js/internals/object-keys-internal.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/has.js")
                    , s = r("./node_modules/core-js/internals/to-indexed-object.js")
                    , u = r("./node_modules/core-js/internals/array-includes.js")
                    , h = r("./node_modules/core-js/internals/hidden-keys.js")
                    , p = u(!1);
                  a.exports = function(g, m) {
                      var E = s(g), w = 0, _ = [], v;
                      for (v in E)
                          !l(h, v) && l(E, v) && _.push(v);
                      for (; m.length > w; )
                          l(E, v = m[w++]) && (~p(_, v) || _.push(v));
                      return _
                  }
              },
              "./node_modules/core-js/internals/object-keys.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/object-keys-internal.js")
                    , s = r("./node_modules/core-js/internals/enum-bug-keys.js");
                  a.exports = Object.keys || function(h) {
                      return l(h, s)
                  }
              },
              "./node_modules/core-js/internals/object-property-is-enumerable.js": function(a, f, r) {
                  var l = {}.propertyIsEnumerable
                    , s = Object.getOwnPropertyDescriptor
                    , u = s && !l.call({
                      1: 2
                  }, 1);
                  f.f = u ? function(p) {
                      var g = s(this, p);
                      return !!g && g.enumerable
                  }
                  : l
              },
              "./node_modules/core-js/internals/object-set-prototype-of.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
                  a.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
                      var s = !1, u = {}, h;
                      try {
                          h = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set,
                          h.call(u, []),
                          s = u instanceof Array
                      } catch {}
                      return function(g, m) {
                          return l(g, m),
                          s ? h.call(g, m) : g.__proto__ = m,
                          g
                      }
                  }() : void 0)
              },
              "./node_modules/core-js/internals/own-keys.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/object-get-own-property-names.js")
                    , u = r("./node_modules/core-js/internals/object-get-own-property-symbols.js")
                    , h = r("./node_modules/core-js/internals/an-object.js")
                    , p = l.Reflect;
                  a.exports = p && p.ownKeys || function(m) {
                      var E = s.f(h(m))
                        , w = u.f;
                      return w ? E.concat(w(m)) : E
                  }
              },
              "./node_modules/core-js/internals/path.js": function(a, f, r) {
                  a.exports = r("./node_modules/core-js/internals/global.js")
              },
              "./node_modules/core-js/internals/redefine.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/shared.js")
                    , u = r("./node_modules/core-js/internals/hide.js")
                    , h = r("./node_modules/core-js/internals/has.js")
                    , p = r("./node_modules/core-js/internals/set-global.js")
                    , g = r("./node_modules/core-js/internals/function-to-string.js")
                    , m = r("./node_modules/core-js/internals/internal-state.js")
                    , E = m.get
                    , w = m.enforce
                    , _ = String(g).split("toString");
                  s("inspectSource", function(v) {
                      return g.call(v)
                  }),
                  (a.exports = function(v, O, T, j) {
                      var S = j ? !!j.unsafe : !1
                        , N = j ? !!j.enumerable : !1
                        , B = j ? !!j.noTargetGet : !1;
                      if (typeof T == "function" && (typeof O == "string" && !h(T, "name") && u(T, "name", O),
                      w(T).source = _.join(typeof O == "string" ? O : "")),
                      v === l) {
                          N ? v[O] = T : p(O, T);
                          return
                      } else
                          S ? !B && v[O] && (N = !0) : delete v[O];
                      N ? v[O] = T : u(v, O, T)
                  }
                  )(Function.prototype, "toString", function() {
                      return typeof this == "function" && E(this).source || g.call(this)
                  })
              },
              "./node_modules/core-js/internals/require-object-coercible.js": function(a, f) {
                  a.exports = function(r) {
                      if (r == null)
                          throw TypeError("Can't call method on " + r);
                      return r
                  }
              },
              "./node_modules/core-js/internals/set-global.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/hide.js");
                  a.exports = function(u, h) {
                      try {
                          s(l, u, h)
                      } catch {
                          l[u] = h
                      }
                      return h
                  }
              },
              "./node_modules/core-js/internals/set-to-string-tag.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/object-define-property.js").f
                    , s = r("./node_modules/core-js/internals/has.js")
                    , u = r("./node_modules/core-js/internals/well-known-symbol.js")
                    , h = u("toStringTag");
                  a.exports = function(p, g, m) {
                      p && !s(p = m ? p : p.prototype, h) && l(p, h, {
                          configurable: !0,
                          value: g
                      })
                  }
              },
              "./node_modules/core-js/internals/shared-key.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/shared.js")
                    , s = r("./node_modules/core-js/internals/uid.js")
                    , u = l("keys");
                  a.exports = function(h) {
                      return u[h] || (u[h] = s(h))
                  }
              },
              "./node_modules/core-js/internals/shared.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/set-global.js")
                    , u = r("./node_modules/core-js/internals/is-pure.js")
                    , h = "__core-js_shared__"
                    , p = l[h] || s(h, {});
                  (a.exports = function(g, m) {
                      return p[g] || (p[g] = m !== void 0 ? m : {})
                  }
                  )("versions", []).push({
                      version: "3.1.3",
                      mode: u ? "pure" : "global",
                      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                  })
              },
              "./node_modules/core-js/internals/string-at.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/to-integer.js")
                    , s = r("./node_modules/core-js/internals/require-object-coercible.js");
                  a.exports = function(u, h, p) {
                      var g = String(s(u)), m = l(h), E = g.length, w, _;
                      return m < 0 || m >= E ? p ? "" : void 0 : (w = g.charCodeAt(m),
                      w < 55296 || w > 56319 || m + 1 === E || (_ = g.charCodeAt(m + 1)) < 56320 || _ > 57343 ? p ? g.charAt(m) : w : p ? g.slice(m, m + 2) : (w - 55296 << 10) + (_ - 56320) + 65536)
                  }
              },
              "./node_modules/core-js/internals/to-absolute-index.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/to-integer.js")
                    , s = Math.max
                    , u = Math.min;
                  a.exports = function(h, p) {
                      var g = l(h);
                      return g < 0 ? s(g + p, 0) : u(g, p)
                  }
              },
              "./node_modules/core-js/internals/to-indexed-object.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/indexed-object.js")
                    , s = r("./node_modules/core-js/internals/require-object-coercible.js");
                  a.exports = function(u) {
                      return l(s(u))
                  }
              },
              "./node_modules/core-js/internals/to-integer.js": function(a, f) {
                  var r = Math.ceil
                    , l = Math.floor;
                  a.exports = function(s) {
                      return isNaN(s = +s) ? 0 : (s > 0 ? l : r)(s)
                  }
              },
              "./node_modules/core-js/internals/to-length.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/to-integer.js")
                    , s = Math.min;
                  a.exports = function(u) {
                      return u > 0 ? s(l(u), 9007199254740991) : 0
                  }
              },
              "./node_modules/core-js/internals/to-object.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/require-object-coercible.js");
                  a.exports = function(s) {
                      return Object(l(s))
                  }
              },
              "./node_modules/core-js/internals/to-primitive.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/is-object.js");
                  a.exports = function(s, u) {
                      if (!l(s))
                          return s;
                      var h, p;
                      if (u && typeof (h = s.toString) == "function" && !l(p = h.call(s)) || typeof (h = s.valueOf) == "function" && !l(p = h.call(s)) || !u && typeof (h = s.toString) == "function" && !l(p = h.call(s)))
                          return p;
                      throw TypeError("Can't convert object to primitive value")
                  }
              },
              "./node_modules/core-js/internals/uid.js": function(a, f) {
                  var r = 0
                    , l = Math.random();
                  a.exports = function(s) {
                      return "Symbol(".concat(s === void 0 ? "" : s, ")_", (++r + l).toString(36))
                  }
              },
              "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/is-object.js")
                    , s = r("./node_modules/core-js/internals/an-object.js");
                  a.exports = function(u, h) {
                      if (s(u),
                      !l(h) && h !== null)
                          throw TypeError("Can't set " + String(h) + " as a prototype")
                  }
              },
              "./node_modules/core-js/internals/well-known-symbol.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/global.js")
                    , s = r("./node_modules/core-js/internals/shared.js")
                    , u = r("./node_modules/core-js/internals/uid.js")
                    , h = r("./node_modules/core-js/internals/native-symbol.js")
                    , p = l.Symbol
                    , g = s("wks");
                  a.exports = function(m) {
                      return g[m] || (g[m] = h && p[m] || (h ? p : u)("Symbol." + m))
                  }
              },
              "./node_modules/core-js/modules/es.array.from.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/export.js")
                    , s = r("./node_modules/core-js/internals/array-from.js")
                    , u = r("./node_modules/core-js/internals/check-correctness-of-iteration.js")
                    , h = !u(function(p) {
                      Array.from(p)
                  });
                  l({
                      target: "Array",
                      stat: !0,
                      forced: h
                  }, {
                      from: s
                  })
              },
              "./node_modules/core-js/modules/es.string.iterator.js": function(a, f, r) {
                  var l = r("./node_modules/core-js/internals/string-at.js")
                    , s = r("./node_modules/core-js/internals/internal-state.js")
                    , u = r("./node_modules/core-js/internals/define-iterator.js")
                    , h = "String Iterator"
                    , p = s.set
                    , g = s.getterFor(h);
                  u(String, "String", function(m) {
                      p(this, {
                          type: h,
                          string: String(m),
                          index: 0
                      })
                  }, function() {
                      var E = g(this), w = E.string, _ = E.index, v;
                      return _ >= w.length ? {
                          value: void 0,
                          done: !0
                      } : (v = l(w, _, !0),
                      E.index += v.length,
                      {
                          value: v,
                          done: !1
                      })
                  })
              },
              "./node_modules/webpack/buildin/global.js": function(a, f) {
                  var r;
                  r = function() {
                      return this
                  }();
                  try {
                      r = r || Function("return this")() || (0,
                      eval)("this")
                  } catch {
                      typeof window == "object" && (r = window)
                  }
                  a.exports = r
              },
              "./src/default-attrs.json": function(a) {
                  a.exports = {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: 24,
                      height: 24,
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": 2,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                  }
              },
              "./src/icon.js": function(a, f, r) {
                  Object.defineProperty(f, "__esModule", {
                      value: !0
                  });
                  var l = Object.assign || function(v) {
                      for (var O = 1; O < arguments.length; O++) {
                          var T = arguments[O];
                          for (var j in T)
                              Object.prototype.hasOwnProperty.call(T, j) && (v[j] = T[j])
                      }
                      return v
                  }
                    , s = function() {
                      function v(O, T) {
                          for (var j = 0; j < T.length; j++) {
                              var S = T[j];
                              S.enumerable = S.enumerable || !1,
                              S.configurable = !0,
                              "value"in S && (S.writable = !0),
                              Object.defineProperty(O, S.key, S)
                          }
                      }
                      return function(O, T, j) {
                          return T && v(O.prototype, T),
                          j && v(O, j),
                          O
                      }
                  }()
                    , u = r("./node_modules/classnames/dedupe.js")
                    , h = m(u)
                    , p = r("./src/default-attrs.json")
                    , g = m(p);
                  function m(v) {
                      return v && v.__esModule ? v : {
                          default: v
                      }
                  }
                  function E(v, O) {
                      if (!(v instanceof O))
                          throw new TypeError("Cannot call a class as a function")
                  }
                  var w = function() {
                      function v(O, T) {
                          var j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                          E(this, v),
                          this.name = O,
                          this.contents = T,
                          this.tags = j,
                          this.attrs = l({}, g.default, {
                              class: "feather feather-" + O
                          })
                      }
                      return s(v, [{
                          key: "toSvg",
                          value: function() {
                              var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                                , j = l({}, this.attrs, T, {
                                  class: (0,
                                  h.default)(this.attrs.class, T.class)
                              });
                              return "<svg " + _(j) + ">" + this.contents + "</svg>"
                          }
                      }, {
                          key: "toString",
                          value: function() {
                              return this.contents
                          }
                      }]),
                      v
                  }();
                  function _(v) {
                      return Object.keys(v).map(function(O) {
                          return O + '="' + v[O] + '"'
                      }).join(" ")
                  }
                  f.default = w
              },
              "./src/icons.js": function(a, f, r) {
                  Object.defineProperty(f, "__esModule", {
                      value: !0
                  });
                  var l = r("./src/icon.js")
                    , s = m(l)
                    , u = r("./dist/icons.json")
                    , h = m(u)
                    , p = r("./src/tags.json")
                    , g = m(p);
                  function m(E) {
                      return E && E.__esModule ? E : {
                          default: E
                      }
                  }
                  f.default = Object.keys(h.default).map(function(E) {
                      return new s.default(E,h.default[E],g.default[E])
                  }).reduce(function(E, w) {
                      return E[w.name] = w,
                      E
                  }, {})
              },
              "./src/index.js": function(a, f, r) {
                  var l = r("./src/icons.js")
                    , s = m(l)
                    , u = r("./src/to-svg.js")
                    , h = m(u)
                    , p = r("./src/replace.js")
                    , g = m(p);
                  function m(E) {
                      return E && E.__esModule ? E : {
                          default: E
                      }
                  }
                  a.exports = {
                      icons: s.default,
                      toSvg: h.default,
                      replace: g.default
                  }
              },
              "./src/replace.js": function(a, f, r) {
                  Object.defineProperty(f, "__esModule", {
                      value: !0
                  });
                  var l = Object.assign || function(_) {
                      for (var v = 1; v < arguments.length; v++) {
                          var O = arguments[v];
                          for (var T in O)
                              Object.prototype.hasOwnProperty.call(O, T) && (_[T] = O[T])
                      }
                      return _
                  }
                    , s = r("./node_modules/classnames/dedupe.js")
                    , u = g(s)
                    , h = r("./src/icons.js")
                    , p = g(h);
                  function g(_) {
                      return _ && _.__esModule ? _ : {
                          default: _
                      }
                  }
                  function m() {
                      var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      if (typeof document > "u")
                          throw new Error("`feather.replace()` only works in a browser environment.");
                      var v = document.querySelectorAll("[data-feather]");
                      Array.from(v).forEach(function(O) {
                          return E(O, _)
                      })
                  }
                  function E(_) {
                      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                        , O = w(_)
                        , T = O["data-feather"];
                      delete O["data-feather"];
                      var j = p.default[T].toSvg(l({}, v, O, {
                          class: (0,
                          u.default)(v.class, O.class)
                      }))
                        , S = new DOMParser().parseFromString(j, "image/svg+xml")
                        , N = S.querySelector("svg");
                      _.parentNode.replaceChild(N, _)
                  }
                  function w(_) {
                      return Array.from(_.attributes).reduce(function(v, O) {
                          return v[O.name] = O.value,
                          v
                      }, {})
                  }
                  f.default = m
              },
              "./src/tags.json": function(a) {
                  a.exports = {
                      activity: ["pulse", "health", "action", "motion"],
                      airplay: ["stream", "cast", "mirroring"],
                      "alert-circle": ["warning", "alert", "danger"],
                      "alert-octagon": ["warning", "alert", "danger"],
                      "alert-triangle": ["warning", "alert", "danger"],
                      "align-center": ["text alignment", "center"],
                      "align-justify": ["text alignment", "justified"],
                      "align-left": ["text alignment", "left"],
                      "align-right": ["text alignment", "right"],
                      anchor: [],
                      archive: ["index", "box"],
                      "at-sign": ["mention", "at", "email", "message"],
                      award: ["achievement", "badge"],
                      aperture: ["camera", "photo"],
                      "bar-chart": ["statistics", "diagram", "graph"],
                      "bar-chart-2": ["statistics", "diagram", "graph"],
                      battery: ["power", "electricity"],
                      "battery-charging": ["power", "electricity"],
                      bell: ["alarm", "notification", "sound"],
                      "bell-off": ["alarm", "notification", "silent"],
                      bluetooth: ["wireless"],
                      "book-open": ["read", "library"],
                      book: ["read", "dictionary", "booklet", "magazine", "library"],
                      bookmark: ["read", "clip", "marker", "tag"],
                      box: ["cube"],
                      briefcase: ["work", "bag", "baggage", "folder"],
                      calendar: ["date"],
                      camera: ["photo"],
                      cast: ["chromecast", "airplay"],
                      "chevron-down": ["expand"],
                      "chevron-up": ["collapse"],
                      circle: ["off", "zero", "record"],
                      clipboard: ["copy"],
                      clock: ["time", "watch", "alarm"],
                      "cloud-drizzle": ["weather", "shower"],
                      "cloud-lightning": ["weather", "bolt"],
                      "cloud-rain": ["weather"],
                      "cloud-snow": ["weather", "blizzard"],
                      cloud: ["weather"],
                      codepen: ["logo"],
                      codesandbox: ["logo"],
                      code: ["source", "programming"],
                      coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
                      columns: ["layout"],
                      command: ["keyboard", "cmd", "terminal", "prompt"],
                      compass: ["navigation", "safari", "travel", "direction"],
                      copy: ["clone", "duplicate"],
                      "corner-down-left": ["arrow", "return"],
                      "corner-down-right": ["arrow"],
                      "corner-left-down": ["arrow"],
                      "corner-left-up": ["arrow"],
                      "corner-right-down": ["arrow"],
                      "corner-right-up": ["arrow"],
                      "corner-up-left": ["arrow"],
                      "corner-up-right": ["arrow"],
                      cpu: ["processor", "technology"],
                      "credit-card": ["purchase", "payment", "cc"],
                      crop: ["photo", "image"],
                      crosshair: ["aim", "target"],
                      database: ["storage", "memory"],
                      delete: ["remove"],
                      disc: ["album", "cd", "dvd", "music"],
                      "dollar-sign": ["currency", "money", "payment"],
                      droplet: ["water"],
                      edit: ["pencil", "change"],
                      "edit-2": ["pencil", "change"],
                      "edit-3": ["pencil", "change"],
                      eye: ["view", "watch"],
                      "eye-off": ["view", "watch", "hide", "hidden"],
                      "external-link": ["outbound"],
                      facebook: ["logo", "social"],
                      "fast-forward": ["music"],
                      figma: ["logo", "design", "tool"],
                      "file-minus": ["delete", "remove", "erase"],
                      "file-plus": ["add", "create", "new"],
                      "file-text": ["data", "txt", "pdf"],
                      film: ["movie", "video"],
                      filter: ["funnel", "hopper"],
                      flag: ["report"],
                      "folder-minus": ["directory"],
                      "folder-plus": ["directory"],
                      folder: ["directory"],
                      framer: ["logo", "design", "tool"],
                      frown: ["emoji", "face", "bad", "sad", "emotion"],
                      gift: ["present", "box", "birthday", "party"],
                      "git-branch": ["code", "version control"],
                      "git-commit": ["code", "version control"],
                      "git-merge": ["code", "version control"],
                      "git-pull-request": ["code", "version control"],
                      github: ["logo", "version control"],
                      gitlab: ["logo", "version control"],
                      globe: ["world", "browser", "language", "translate"],
                      "hard-drive": ["computer", "server", "memory", "data"],
                      hash: ["hashtag", "number", "pound"],
                      headphones: ["music", "audio", "sound"],
                      heart: ["like", "love", "emotion"],
                      "help-circle": ["question mark"],
                      hexagon: ["shape", "node.js", "logo"],
                      home: ["house", "living"],
                      image: ["picture"],
                      inbox: ["email"],
                      instagram: ["logo", "camera"],
                      key: ["password", "login", "authentication", "secure"],
                      layers: ["stack"],
                      layout: ["window", "webpage"],
                      "life-bouy": ["help", "life ring", "support"],
                      link: ["chain", "url"],
                      "link-2": ["chain", "url"],
                      linkedin: ["logo", "social media"],
                      list: ["options"],
                      lock: ["security", "password", "secure"],
                      "log-in": ["sign in", "arrow", "enter"],
                      "log-out": ["sign out", "arrow", "exit"],
                      mail: ["email", "message"],
                      "map-pin": ["location", "navigation", "travel", "marker"],
                      map: ["location", "navigation", "travel"],
                      maximize: ["fullscreen"],
                      "maximize-2": ["fullscreen", "arrows", "expand"],
                      meh: ["emoji", "face", "neutral", "emotion"],
                      menu: ["bars", "navigation", "hamburger"],
                      "message-circle": ["comment", "chat"],
                      "message-square": ["comment", "chat"],
                      "mic-off": ["record", "sound", "mute"],
                      mic: ["record", "sound", "listen"],
                      minimize: ["exit fullscreen", "close"],
                      "minimize-2": ["exit fullscreen", "arrows", "close"],
                      minus: ["subtract"],
                      monitor: ["tv", "screen", "display"],
                      moon: ["dark", "night"],
                      "more-horizontal": ["ellipsis"],
                      "more-vertical": ["ellipsis"],
                      "mouse-pointer": ["arrow", "cursor"],
                      move: ["arrows"],
                      music: ["note"],
                      navigation: ["location", "travel"],
                      "navigation-2": ["location", "travel"],
                      octagon: ["stop"],
                      package: ["box", "container"],
                      paperclip: ["attachment"],
                      pause: ["music", "stop"],
                      "pause-circle": ["music", "audio", "stop"],
                      "pen-tool": ["vector", "drawing"],
                      percent: ["discount"],
                      "phone-call": ["ring"],
                      "phone-forwarded": ["call"],
                      "phone-incoming": ["call"],
                      "phone-missed": ["call"],
                      "phone-off": ["call", "mute"],
                      "phone-outgoing": ["call"],
                      phone: ["call"],
                      play: ["music", "start"],
                      "pie-chart": ["statistics", "diagram"],
                      "play-circle": ["music", "start"],
                      plus: ["add", "new"],
                      "plus-circle": ["add", "new"],
                      "plus-square": ["add", "new"],
                      pocket: ["logo", "save"],
                      power: ["on", "off"],
                      printer: ["fax", "office", "device"],
                      radio: ["signal"],
                      "refresh-cw": ["synchronise", "arrows"],
                      "refresh-ccw": ["arrows"],
                      repeat: ["loop", "arrows"],
                      rewind: ["music"],
                      "rotate-ccw": ["arrow"],
                      "rotate-cw": ["arrow"],
                      rss: ["feed", "subscribe"],
                      save: ["floppy disk"],
                      scissors: ["cut"],
                      search: ["find", "magnifier", "magnifying glass"],
                      send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
                      settings: ["cog", "edit", "gear", "preferences"],
                      "share-2": ["network", "connections"],
                      shield: ["security", "secure"],
                      "shield-off": ["security", "insecure"],
                      "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                      "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                      shuffle: ["music"],
                      "skip-back": ["music"],
                      "skip-forward": ["music"],
                      slack: ["logo"],
                      slash: ["ban", "no"],
                      sliders: ["settings", "controls"],
                      smartphone: ["cellphone", "device"],
                      smile: ["emoji", "face", "happy", "good", "emotion"],
                      speaker: ["audio", "music"],
                      star: ["bookmark", "favorite", "like"],
                      "stop-circle": ["media", "music"],
                      sun: ["brightness", "weather", "light"],
                      sunrise: ["weather", "time", "morning", "day"],
                      sunset: ["weather", "time", "evening", "night"],
                      tablet: ["device"],
                      tag: ["label"],
                      target: ["logo", "bullseye"],
                      terminal: ["code", "command line", "prompt"],
                      thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
                      "thumbs-down": ["dislike", "bad", "emotion"],
                      "thumbs-up": ["like", "good", "emotion"],
                      "toggle-left": ["on", "off", "switch"],
                      "toggle-right": ["on", "off", "switch"],
                      tool: ["settings", "spanner"],
                      trash: ["garbage", "delete", "remove", "bin"],
                      "trash-2": ["garbage", "delete", "remove", "bin"],
                      triangle: ["delta"],
                      truck: ["delivery", "van", "shipping", "transport", "lorry"],
                      tv: ["television", "stream"],
                      twitch: ["logo"],
                      twitter: ["logo", "social"],
                      type: ["text"],
                      umbrella: ["rain", "weather"],
                      unlock: ["security"],
                      "user-check": ["followed", "subscribed"],
                      "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
                      "user-plus": ["new", "add", "create", "follow", "subscribe"],
                      "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
                      user: ["person", "account"],
                      users: ["group"],
                      "video-off": ["camera", "movie", "film"],
                      video: ["camera", "movie", "film"],
                      voicemail: ["phone"],
                      volume: ["music", "sound", "mute"],
                      "volume-1": ["music", "sound"],
                      "volume-2": ["music", "sound"],
                      "volume-x": ["music", "sound", "mute"],
                      watch: ["clock", "time"],
                      "wifi-off": ["disabled"],
                      wifi: ["connection", "signal", "wireless"],
                      wind: ["weather", "air"],
                      "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
                      "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
                      "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
                      x: ["cancel", "close", "delete", "remove", "times", "clear"],
                      youtube: ["logo", "video", "play"],
                      "zap-off": ["flash", "camera", "lightning"],
                      zap: ["flash", "camera", "lightning"],
                      "zoom-in": ["magnifying glass"],
                      "zoom-out": ["magnifying glass"]
                  }
              },
              "./src/to-svg.js": function(a, f, r) {
                  Object.defineProperty(f, "__esModule", {
                      value: !0
                  });
                  var l = r("./src/icons.js")
                    , s = u(l);
                  function u(p) {
                      return p && p.__esModule ? p : {
                          default: p
                      }
                  }
                  function h(p) {
                      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                      if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),
                      !p)
                          throw new Error("The required `key` (icon name) parameter is missing.");
                      if (!s.default[p])
                          throw new Error("No icon matching '" + p + "'. See the complete list of icons at https://feathericons.com");
                      return s.default[p].toSvg(g)
                  }
                  f.default = h
              },
              0: function(a, f, r) {
                  r("./node_modules/core-js/es/array/from.js"),
                  a.exports = r("./src/index.js")
              }
          })
      })
  }
  )(Ar);
  const wr = br(rn);
  var on = {}
    , jr = {
      get exports() {
          return on
      },
      set exports(G) {
          on = G
      }
  };
  /*!
* Bootstrap v5.2.3 (https://getbootstrap.com/)
* Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
  (function(G, k) {
      (function(a, f) {
          G.exports = f()
      }
      )(ft, function() {
          const r = "transitionend"
            , l = n=>n == null ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase()
            , s = n=>{
              do
                  n += Math.floor(Math.random() * 1e6);
              while (document.getElementById(n));
              return n
          }
            , u = n=>{
              let e = n.getAttribute("data-bs-target");
              if (!e || e === "#") {
                  let t = n.getAttribute("href");
                  if (!t || !t.includes("#") && !t.startsWith("."))
                      return null;
                  t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`),
                  e = t && t !== "#" ? t.trim() : null
              }
              return e
          }
            , h = n=>{
              const e = u(n);
              return e && document.querySelector(e) ? e : null
          }
            , p = n=>{
              const e = u(n);
              return e ? document.querySelector(e) : null
          }
            , g = n=>{
              if (!n)
                  return 0;
              let {transitionDuration: e, transitionDelay: t} = window.getComputedStyle(n);
              const i = Number.parseFloat(e)
                , o = Number.parseFloat(t);
              return !i && !o ? 0 : (e = e.split(",")[0],
              t = t.split(",")[0],
              (Number.parseFloat(e) + Number.parseFloat(t)) * 1e3)
          }
            , m = n=>{
              n.dispatchEvent(new Event(r))
          }
            , E = n=>!n || typeof n != "object" ? !1 : (typeof n.jquery < "u" && (n = n[0]),
          typeof n.nodeType < "u")
            , w = n=>E(n) ? n.jquery ? n[0] : n : typeof n == "string" && n.length > 0 ? document.querySelector(n) : null
            , _ = n=>{
              if (!E(n) || n.getClientRects().length === 0)
                  return !1;
              const e = getComputedStyle(n).getPropertyValue("visibility") === "visible"
                , t = n.closest("details:not([open])");
              if (!t)
                  return e;
              if (t !== n) {
                  const i = n.closest("summary");
                  if (i && i.parentNode !== t || i === null)
                      return !1
              }
              return e
          }
            , v = n=>!n || n.nodeType !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : typeof n.disabled < "u" ? n.disabled : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false"
            , O = n=>{
              if (!document.documentElement.attachShadow)
                  return null;
              if (typeof n.getRootNode == "function") {
                  const e = n.getRootNode();
                  return e instanceof ShadowRoot ? e : null
              }
              return n instanceof ShadowRoot ? n : n.parentNode ? O(n.parentNode) : null
          }
            , T = ()=>{}
            , j = n=>{
              n.offsetHeight
          }
            , S = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
            , N = []
            , B = n=>{
              document.readyState === "loading" ? (N.length || document.addEventListener("DOMContentLoaded", ()=>{
                  for (const e of N)
                      e()
              }
              ),
              N.push(n)) : n()
          }
            , L = ()=>document.documentElement.dir === "rtl"
            , $ = n=>{
              B(()=>{
                  const e = S();
                  if (e) {
                      const t = n.NAME
                        , i = e.fn[t];
                      e.fn[t] = n.jQueryInterface,
                      e.fn[t].Constructor = n,
                      e.fn[t].noConflict = ()=>(e.fn[t] = i,
                      n.jQueryInterface)
                  }
              }
              )
          }
            , z = n=>{
              typeof n == "function" && n()
          }
            , de = (n,e,t=!0)=>{
              if (!t) {
                  z(n);
                  return
              }
              const i = 5
                , o = g(e) + i;
              let c = !1;
              const d = ({target: y})=>{
                  y === e && (c = !0,
                  e.removeEventListener(r, d),
                  z(n))
              }
              ;
              e.addEventListener(r, d),
              setTimeout(()=>{
                  c || m(e)
              }
              , o)
          }
            , mt = (n,e,t,i)=>{
              const o = n.length;
              let c = n.indexOf(e);
              return c === -1 ? !t && i ? n[o - 1] : n[0] : (c += t ? 1 : -1,
              i && (c = (c + o) % o),
              n[Math.max(0, Math.min(c, o - 1))])
          }
            , Te = /[^.]*(?=\..*)\.|.*/
            , sn = /\..*/
            , Lt = /::\d+$/
            , Oe = {};
          let gt = 1;
          const Qe = {
              mouseenter: "mouseover",
              mouseleave: "mouseout"
          }
            , ae = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
          function _e(n, e) {
              return e && `${e}::${gt++}` || n.uidEvent || gt++
          }
          function ge(n) {
              const e = _e(n);
              return n.uidEvent = e,
              Oe[e] = Oe[e] || {},
              Oe[e]
          }
          function Dt(n, e) {
              return function t(i) {
                  return an(i, {
                      delegateTarget: n
                  }),
                  t.oneOff && x.off(n, i.type, e),
                  e.apply(n, [i])
              }
          }
          function Ee(n, e, t) {
              return function i(o) {
                  const c = n.querySelectorAll(e);
                  for (let {target: d} = o; d && d !== this; d = d.parentNode)
                      for (const y of c)
                          if (y === d)
                              return an(o, {
                                  delegateTarget: d
                              }),
                              i.oneOff && x.off(n, o.type, e, t),
                              t.apply(d, [o])
              }
          }
          function Se(n, e, t=null) {
              return Object.values(n).find(i=>i.callable === e && i.delegationSelector === t)
          }
          function Ie(n, e, t) {
              const i = typeof e == "string"
                , o = i ? t : e || t;
              let c = Fn(n);
              return ae.has(c) || (c = n),
              [i, o, c]
          }
          function ue(n, e, t, i, o) {
              if (typeof e != "string" || !n)
                  return;
              let[c,d,y] = Ie(e, t, i);
              e in Qe && (d = (F=>function(P) {
                  if (!P.relatedTarget || P.relatedTarget !== P.delegateTarget && !P.delegateTarget.contains(P.relatedTarget))
                      return F.call(this, P)
              }
              )(d));
              const b = ge(n)
                , M = b[y] || (b[y] = {})
                , A = Se(M, d, c ? t : null);
              if (A) {
                  A.oneOff = A.oneOff && o;
                  return
              }
              const D = _e(d, e.replace(Te, ""))
                , R = c ? Ee(n, t, d) : Dt(n, d);
              R.delegationSelector = c ? t : null,
              R.callable = d,
              R.oneOff = o,
              R.uidEvent = D,
              M[D] = R,
              n.addEventListener(y, R, c)
          }
          function Ze(n, e, t, i, o) {
              const c = Se(e[t], i, o);
              c && (n.removeEventListener(t, c, !!o),
              delete e[t][c.uidEvent])
          }
          function Sr(n, e, t, i) {
              const o = e[t] || {};
              for (const c of Object.keys(o))
                  if (c.includes(i)) {
                      const d = o[c];
                      Ze(n, e, t, d.callable, d.delegationSelector)
                  }
          }
          function Fn(n) {
              return n = n.replace(sn, ""),
              Qe[n] || n
          }
          const x = {
              on(n, e, t, i) {
                  ue(n, e, t, i, !1)
              },
              one(n, e, t, i) {
                  ue(n, e, t, i, !0)
              },
              off(n, e, t, i) {
                  if (typeof e != "string" || !n)
                      return;
                  const [o,c,d] = Ie(e, t, i)
                    , y = d !== e
                    , b = ge(n)
                    , M = b[d] || {}
                    , A = e.startsWith(".");
                  if (typeof c < "u") {
                      if (!Object.keys(M).length)
                          return;
                      Ze(n, b, d, c, o ? t : null);
                      return
                  }
                  if (A)
                      for (const D of Object.keys(b))
                          Sr(n, b, D, e.slice(1));
                  for (const D of Object.keys(M)) {
                      const R = D.replace(Lt, "");
                      if (!y || e.includes(R)) {
                          const C = M[D];
                          Ze(n, b, d, C.callable, C.delegationSelector)
                      }
                  }
              },
              trigger(n, e, t) {
                  if (typeof e != "string" || !n)
                      return null;
                  const i = S()
                    , o = Fn(e)
                    , c = e !== o;
                  let d = null
                    , y = !0
                    , b = !0
                    , M = !1;
                  c && i && (d = i.Event(e, t),
                  i(n).trigger(d),
                  y = !d.isPropagationStopped(),
                  b = !d.isImmediatePropagationStopped(),
                  M = d.isDefaultPrevented());
                  let A = new Event(e,{
                      bubbles: y,
                      cancelable: !0
                  });
                  return A = an(A, t),
                  M && A.preventDefault(),
                  b && n.dispatchEvent(A),
                  A.defaultPrevented && d && d.preventDefault(),
                  A
              }
          };
          function an(n, e) {
              for (const [t,i] of Object.entries(e || {}))
                  try {
                      n[t] = i
                  } catch {
                      Object.defineProperty(n, t, {
                          configurable: !0,
                          get() {
                              return i
                          }
                      })
                  }
              return n
          }
          const Me = new Map
            , ln = {
              set(n, e, t) {
                  Me.has(n) || Me.set(n, new Map);
                  const i = Me.get(n);
                  if (!i.has(e) && i.size !== 0) {
                      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
                      return
                  }
                  i.set(e, t)
              },
              get(n, e) {
                  return Me.has(n) && Me.get(n).get(e) || null
              },
              remove(n, e) {
                  if (!Me.has(n))
                      return;
                  const t = Me.get(n);
                  t.delete(e),
                  t.size === 0 && Me.delete(n)
              }
          };
          function Yn(n) {
              if (n === "true")
                  return !0;
              if (n === "false")
                  return !1;
              if (n === Number(n).toString())
                  return Number(n);
              if (n === "" || n === "null")
                  return null;
              if (typeof n != "string")
                  return n;
              try {
                  return JSON.parse(decodeURIComponent(n))
              } catch {
                  return n
              }
          }
          function cn(n) {
              return n.replace(/[A-Z]/g, e=>`-${e.toLowerCase()}`)
          }
          const be = {
              setDataAttribute(n, e, t) {
                  n.setAttribute(`data-bs-${cn(e)}`, t)
              },
              removeDataAttribute(n, e) {
                  n.removeAttribute(`data-bs-${cn(e)}`)
              },
              getDataAttributes(n) {
                  if (!n)
                      return {};
                  const e = {}
                    , t = Object.keys(n.dataset).filter(i=>i.startsWith("bs") && !i.startsWith("bsConfig"));
                  for (const i of t) {
                      let o = i.replace(/^bs/, "");
                      o = o.charAt(0).toLowerCase() + o.slice(1, o.length),
                      e[o] = Yn(n.dataset[i])
                  }
                  return e
              },
              getDataAttribute(n, e) {
                  return Yn(n.getAttribute(`data-bs-${cn(e)}`))
              }
          };
          class vt {
              static get Default() {
                  return {}
              }
              static get DefaultType() {
                  return {}
              }
              static get NAME() {
                  throw new Error('You have to implement the static method "NAME", for each component!')
              }
              _getConfig(e) {
                  return e = this._mergeConfigObj(e),
                  e = this._configAfterMerge(e),
                  this._typeCheckConfig(e),
                  e
              }
              _configAfterMerge(e) {
                  return e
              }
              _mergeConfigObj(e, t) {
                  const i = E(t) ? be.getDataAttribute(t, "config") : {};
                  return {
                      ...this.constructor.Default,
                      ...typeof i == "object" ? i : {},
                      ...E(t) ? be.getDataAttributes(t) : {},
                      ...typeof e == "object" ? e : {}
                  }
              }
              _typeCheckConfig(e, t=this.constructor.DefaultType) {
                  for (const i of Object.keys(t)) {
                      const o = t[i]
                        , c = e[i]
                        , d = E(c) ? "element" : l(c);
                      if (!new RegExp(o).test(d))
                          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${d}" but expected type "${o}".`)
                  }
              }
          }
          const Mr = "5.2.3";
          class pe extends vt {
              constructor(e, t) {
                  super(),
                  e = w(e),
                  e && (this._element = e,
                  this._config = this._getConfig(t),
                  ln.set(this._element, this.constructor.DATA_KEY, this))
              }
              dispose() {
                  ln.remove(this._element, this.constructor.DATA_KEY),
                  x.off(this._element, this.constructor.EVENT_KEY);
                  for (const e of Object.getOwnPropertyNames(this))
                      this[e] = null
              }
              _queueCallback(e, t, i=!0) {
                  de(e, t, i)
              }
              _getConfig(e) {
                  return e = this._mergeConfigObj(e, this._element),
                  e = this._configAfterMerge(e),
                  this._typeCheckConfig(e),
                  e
              }
              static getInstance(e) {
                  return ln.get(w(e), this.DATA_KEY)
              }
              static getOrCreateInstance(e, t={}) {
                  return this.getInstance(e) || new this(e,typeof t == "object" ? t : null)
              }
              static get VERSION() {
                  return Mr
              }
              static get DATA_KEY() {
                  return `bs.${this.NAME}`
              }
              static get EVENT_KEY() {
                  return `.${this.DATA_KEY}`
              }
              static eventName(e) {
                  return `${e}${this.EVENT_KEY}`
              }
          }
          const It = (n,e="hide")=>{
              const t = `click.dismiss${n.EVENT_KEY}`
                , i = n.NAME;
              x.on(document, t, `[data-bs-dismiss="${i}"]`, function(o) {
                  if (["A", "AREA"].includes(this.tagName) && o.preventDefault(),
                  v(this))
                      return;
                  const c = p(this) || this.closest(`.${i}`);
                  n.getOrCreateInstance(c)[e]()
              })
          }
            , Cr = "alert"
            , Gn = ".bs.alert"
            , Nr = `close${Gn}`
            , Lr = `closed${Gn}`
            , Dr = "fade"
            , Ir = "show";
          class xt extends pe {
              static get NAME() {
                  return Cr
              }
              close() {
                  if (x.trigger(this._element, Nr).defaultPrevented)
                      return;
                  this._element.classList.remove(Ir);
                  const t = this._element.classList.contains(Dr);
                  this._queueCallback(()=>this._destroyElement(), this._element, t)
              }
              _destroyElement() {
                  this._element.remove(),
                  x.trigger(this._element, Lr),
                  this.dispose()
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = xt.getOrCreateInstance(this);
                      if (typeof e == "string") {
                          if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                              throw new TypeError(`No method named "${e}"`);
                          t[e](this)
                      }
                  })
              }
          }
          It(xt, "close"),
          $(xt);
          const $r = "button"
            , Pr = ".bs.button"
            , Rr = ".data-api"
            , Vr = "active"
            , Un = '[data-bs-toggle="button"]'
            , Hr = `click${Pr}${Rr}`;
          class _t extends pe {
              static get NAME() {
                  return $r
              }
              toggle() {
                  this._element.setAttribute("aria-pressed", this._element.classList.toggle(Vr))
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = _t.getOrCreateInstance(this);
                      e === "toggle" && t[e]()
                  })
              }
          }
          x.on(document, Hr, Un, n=>{
              n.preventDefault();
              const e = n.target.closest(Un);
              _t.getOrCreateInstance(e).toggle()
          }
          ),
          $(_t);
          const I = {
              find(n, e=document.documentElement) {
                  return [].concat(...Element.prototype.querySelectorAll.call(e, n))
              },
              findOne(n, e=document.documentElement) {
                  return Element.prototype.querySelector.call(e, n)
              },
              children(n, e) {
                  return [].concat(...n.children).filter(t=>t.matches(e))
              },
              parents(n, e) {
                  const t = [];
                  let i = n.parentNode.closest(e);
                  for (; i; )
                      t.push(i),
                      i = i.parentNode.closest(e);
                  return t
              },
              prev(n, e) {
                  let t = n.previousElementSibling;
                  for (; t; ) {
                      if (t.matches(e))
                          return [t];
                      t = t.previousElementSibling
                  }
                  return []
              },
              next(n, e) {
                  let t = n.nextElementSibling;
                  for (; t; ) {
                      if (t.matches(e))
                          return [t];
                      t = t.nextElementSibling
                  }
                  return []
              },
              focusableChildren(n) {
                  const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");
                  return this.find(e, n).filter(t=>!v(t) && _(t))
              }
          }
            , kr = "swipe"
            , Je = ".bs.swipe"
            , zr = `touchstart${Je}`
            , Wr = `touchmove${Je}`
            , Kr = `touchend${Je}`
            , Br = `pointerdown${Je}`
            , Fr = `pointerup${Je}`
            , Yr = "touch"
            , Gr = "pen"
            , Ur = "pointer-event"
            , Xr = 40
            , Qr = {
              endCallback: null,
              leftCallback: null,
              rightCallback: null
          }
            , Zr = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)"
          };
          class $t extends vt {
              constructor(e, t) {
                  super(),
                  this._element = e,
                  !(!e || !$t.isSupported()) && (this._config = this._getConfig(t),
                  this._deltaX = 0,
                  this._supportPointerEvents = !!window.PointerEvent,
                  this._initEvents())
              }
              static get Default() {
                  return Qr
              }
              static get DefaultType() {
                  return Zr
              }
              static get NAME() {
                  return kr
              }
              dispose() {
                  x.off(this._element, Je)
              }
              _start(e) {
                  if (!this._supportPointerEvents) {
                      this._deltaX = e.touches[0].clientX;
                      return
                  }
                  this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
              }
              _end(e) {
                  this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
                  this._handleSwipe(),
                  z(this._config.endCallback)
              }
              _move(e) {
                  this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
              }
              _handleSwipe() {
                  const e = Math.abs(this._deltaX);
                  if (e <= Xr)
                      return;
                  const t = e / this._deltaX;
                  this._deltaX = 0,
                  t && z(t > 0 ? this._config.rightCallback : this._config.leftCallback)
              }
              _initEvents() {
                  this._supportPointerEvents ? (x.on(this._element, Br, e=>this._start(e)),
                  x.on(this._element, Fr, e=>this._end(e)),
                  this._element.classList.add(Ur)) : (x.on(this._element, zr, e=>this._start(e)),
                  x.on(this._element, Wr, e=>this._move(e)),
                  x.on(this._element, Kr, e=>this._end(e)))
              }
              _eventIsPointerPenTouch(e) {
                  return this._supportPointerEvents && (e.pointerType === Gr || e.pointerType === Yr)
              }
              static isSupported() {
                  return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
              }
          }
          const Jr = "carousel"
            , Ce = ".bs.carousel"
            , Xn = ".data-api"
            , qr = "ArrowLeft"
            , eo = "ArrowRight"
            , to = 500
            , Et = "next"
            , qe = "prev"
            , et = "left"
            , Pt = "right"
            , no = `slide${Ce}`
            , dn = `slid${Ce}`
            , io = `keydown${Ce}`
            , ro = `mouseenter${Ce}`
            , oo = `mouseleave${Ce}`
            , so = `dragstart${Ce}`
            , ao = `load${Ce}${Xn}`
            , lo = `click${Ce}${Xn}`
            , Qn = "carousel"
            , Rt = "active"
            , co = "slide"
            , uo = "carousel-item-end"
            , po = "carousel-item-start"
            , ho = "carousel-item-next"
            , fo = "carousel-item-prev"
            , Zn = ".active"
            , Jn = ".carousel-item"
            , yo = Zn + Jn
            , mo = ".carousel-item img"
            , go = ".carousel-indicators"
            , vo = "[data-bs-slide], [data-bs-slide-to]"
            , xo = '[data-bs-ride="carousel"]'
            , _o = {
              [qr]: Pt,
              [eo]: et
          }
            , Eo = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0
          }
            , bo = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean"
          };
          class tt extends pe {
              constructor(e, t) {
                  super(e, t),
                  this._interval = null,
                  this._activeElement = null,
                  this._isSliding = !1,
                  this.touchTimeout = null,
                  this._swipeHelper = null,
                  this._indicatorsElement = I.findOne(go, this._element),
                  this._addEventListeners(),
                  this._config.ride === Qn && this.cycle()
              }
              static get Default() {
                  return Eo
              }
              static get DefaultType() {
                  return bo
              }
              static get NAME() {
                  return Jr
              }
              next() {
                  this._slide(Et)
              }
              nextWhenVisible() {
                  !document.hidden && _(this._element) && this.next()
              }
              prev() {
                  this._slide(qe)
              }
              pause() {
                  this._isSliding && m(this._element),
                  this._clearInterval()
              }
              cycle() {
                  this._clearInterval(),
                  this._updateInterval(),
                  this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval)
              }
              _maybeEnableCycle() {
                  if (this._config.ride) {
                      if (this._isSliding) {
                          x.one(this._element, dn, ()=>this.cycle());
                          return
                      }
                      this.cycle()
                  }
              }
              to(e) {
                  const t = this._getItems();
                  if (e > t.length - 1 || e < 0)
                      return;
                  if (this._isSliding) {
                      x.one(this._element, dn, ()=>this.to(e));
                      return
                  }
                  const i = this._getItemIndex(this._getActive());
                  if (i === e)
                      return;
                  const o = e > i ? Et : qe;
                  this._slide(o, t[e])
              }
              dispose() {
                  this._swipeHelper && this._swipeHelper.dispose(),
                  super.dispose()
              }
              _configAfterMerge(e) {
                  return e.defaultInterval = e.interval,
                  e
              }
              _addEventListeners() {
                  this._config.keyboard && x.on(this._element, io, e=>this._keydown(e)),
                  this._config.pause === "hover" && (x.on(this._element, ro, ()=>this.pause()),
                  x.on(this._element, oo, ()=>this._maybeEnableCycle())),
                  this._config.touch && $t.isSupported() && this._addTouchEventListeners()
              }
              _addTouchEventListeners() {
                  for (const i of I.find(mo, this._element))
                      x.on(i, so, o=>o.preventDefault());
                  const t = {
                      leftCallback: ()=>this._slide(this._directionToOrder(et)),
                      rightCallback: ()=>this._slide(this._directionToOrder(Pt)),
                      endCallback: ()=>{
                          this._config.pause === "hover" && (this.pause(),
                          this.touchTimeout && clearTimeout(this.touchTimeout),
                          this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), to + this._config.interval))
                      }
                  };
                  this._swipeHelper = new $t(this._element,t)
              }
              _keydown(e) {
                  if (/input|textarea/i.test(e.target.tagName))
                      return;
                  const t = _o[e.key];
                  t && (e.preventDefault(),
                  this._slide(this._directionToOrder(t)))
              }
              _getItemIndex(e) {
                  return this._getItems().indexOf(e)
              }
              _setActiveIndicatorElement(e) {
                  if (!this._indicatorsElement)
                      return;
                  const t = I.findOne(Zn, this._indicatorsElement);
                  t.classList.remove(Rt),
                  t.removeAttribute("aria-current");
                  const i = I.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
                  i && (i.classList.add(Rt),
                  i.setAttribute("aria-current", "true"))
              }
              _updateInterval() {
                  const e = this._activeElement || this._getActive();
                  if (!e)
                      return;
                  const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                  this._config.interval = t || this._config.defaultInterval
              }
              _slide(e, t=null) {
                  if (this._isSliding)
                      return;
                  const i = this._getActive()
                    , o = e === Et
                    , c = t || mt(this._getItems(), i, o, this._config.wrap);
                  if (c === i)
                      return;
                  const d = this._getItemIndex(c)
                    , y = C=>x.trigger(this._element, C, {
                      relatedTarget: c,
                      direction: this._orderToDirection(e),
                      from: this._getItemIndex(i),
                      to: d
                  });
                  if (y(no).defaultPrevented || !i || !c)
                      return;
                  const M = !!this._interval;
                  this.pause(),
                  this._isSliding = !0,
                  this._setActiveIndicatorElement(d),
                  this._activeElement = c;
                  const A = o ? po : uo
                    , D = o ? ho : fo;
                  c.classList.add(D),
                  j(c),
                  i.classList.add(A),
                  c.classList.add(A);
                  const R = ()=>{
                      c.classList.remove(A, D),
                      c.classList.add(Rt),
                      i.classList.remove(Rt, D, A),
                      this._isSliding = !1,
                      y(dn)
                  }
                  ;
                  this._queueCallback(R, i, this._isAnimated()),
                  M && this.cycle()
              }
              _isAnimated() {
                  return this._element.classList.contains(co)
              }
              _getActive() {
                  return I.findOne(yo, this._element)
              }
              _getItems() {
                  return I.find(Jn, this._element)
              }
              _clearInterval() {
                  this._interval && (clearInterval(this._interval),
                  this._interval = null)
              }
              _directionToOrder(e) {
                  return L() ? e === et ? qe : Et : e === et ? Et : qe
              }
              _orderToDirection(e) {
                  return L() ? e === qe ? et : Pt : e === qe ? Pt : et
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = tt.getOrCreateInstance(this, e);
                      if (typeof e == "number") {
                          t.to(e);
                          return
                      }
                      if (typeof e == "string") {
                          if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                              throw new TypeError(`No method named "${e}"`);
                          t[e]()
                      }
                  })
              }
          }
          x.on(document, lo, vo, function(n) {
              const e = p(this);
              if (!e || !e.classList.contains(Qn))
                  return;
              n.preventDefault();
              const t = tt.getOrCreateInstance(e)
                , i = this.getAttribute("data-bs-slide-to");
              if (i) {
                  t.to(i),
                  t._maybeEnableCycle();
                  return
              }
              if (be.getDataAttribute(this, "slide") === "next") {
                  t.next(),
                  t._maybeEnableCycle();
                  return
              }
              t.prev(),
              t._maybeEnableCycle()
          }),
          x.on(window, ao, ()=>{
              const n = I.find(xo);
              for (const e of n)
                  tt.getOrCreateInstance(e)
          }
          ),
          $(tt);
          const Ao = "collapse"
            , bt = ".bs.collapse"
            , wo = ".data-api"
            , jo = `show${bt}`
            , To = `shown${bt}`
            , Oo = `hide${bt}`
            , So = `hidden${bt}`
            , Mo = `click${bt}${wo}`
            , un = "show"
            , nt = "collapse"
            , Vt = "collapsing"
            , Co = "collapsed"
            , No = `:scope .${nt} .${nt}`
            , Lo = "collapse-horizontal"
            , Do = "width"
            , Io = "height"
            , $o = ".collapse.show, .collapse.collapsing"
            , pn = '[data-bs-toggle="collapse"]'
            , Po = {
              parent: null,
              toggle: !0
          }
            , Ro = {
              parent: "(null|element)",
              toggle: "boolean"
          };
          class it extends pe {
              constructor(e, t) {
                  super(e, t),
                  this._isTransitioning = !1,
                  this._triggerArray = [];
                  const i = I.find(pn);
                  for (const o of i) {
                      const c = h(o)
                        , d = I.find(c).filter(y=>y === this._element);
                      c !== null && d.length && this._triggerArray.push(o)
                  }
                  this._initializeChildren(),
                  this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
                  this._config.toggle && this.toggle()
              }
              static get Default() {
                  return Po
              }
              static get DefaultType() {
                  return Ro
              }
              static get NAME() {
                  return Ao
              }
              toggle() {
                  this._isShown() ? this.hide() : this.show()
              }
              show() {
                  if (this._isTransitioning || this._isShown())
                      return;
                  let e = [];
                  if (this._config.parent && (e = this._getFirstLevelChildren($o).filter(y=>y !== this._element).map(y=>it.getOrCreateInstance(y, {
                      toggle: !1
                  }))),
                  e.length && e[0]._isTransitioning || x.trigger(this._element, jo).defaultPrevented)
                      return;
                  for (const y of e)
                      y.hide();
                  const i = this._getDimension();
                  this._element.classList.remove(nt),
                  this._element.classList.add(Vt),
                  this._element.style[i] = 0,
                  this._addAriaAndCollapsedClass(this._triggerArray, !0),
                  this._isTransitioning = !0;
                  const o = ()=>{
                      this._isTransitioning = !1,
                      this._element.classList.remove(Vt),
                      this._element.classList.add(nt, un),
                      this._element.style[i] = "",
                      x.trigger(this._element, To)
                  }
                    , d = `scroll${i[0].toUpperCase() + i.slice(1)}`;
                  this._queueCallback(o, this._element, !0),
                  this._element.style[i] = `${this._element[d]}px`
              }
              hide() {
                  if (this._isTransitioning || !this._isShown() || x.trigger(this._element, Oo).defaultPrevented)
                      return;
                  const t = this._getDimension();
                  this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
                  j(this._element),
                  this._element.classList.add(Vt),
                  this._element.classList.remove(nt, un);
                  for (const o of this._triggerArray) {
                      const c = p(o);
                      c && !this._isShown(c) && this._addAriaAndCollapsedClass([o], !1)
                  }
                  this._isTransitioning = !0;
                  const i = ()=>{
                      this._isTransitioning = !1,
                      this._element.classList.remove(Vt),
                      this._element.classList.add(nt),
                      x.trigger(this._element, So)
                  }
                  ;
                  this._element.style[t] = "",
                  this._queueCallback(i, this._element, !0)
              }
              _isShown(e=this._element) {
                  return e.classList.contains(un)
              }
              _configAfterMerge(e) {
                  return e.toggle = !!e.toggle,
                  e.parent = w(e.parent),
                  e
              }
              _getDimension() {
                  return this._element.classList.contains(Lo) ? Do : Io
              }
              _initializeChildren() {
                  if (!this._config.parent)
                      return;
                  const e = this._getFirstLevelChildren(pn);
                  for (const t of e) {
                      const i = p(t);
                      i && this._addAriaAndCollapsedClass([t], this._isShown(i))
                  }
              }
              _getFirstLevelChildren(e) {
                  const t = I.find(No, this._config.parent);
                  return I.find(e, this._config.parent).filter(i=>!t.includes(i))
              }
              _addAriaAndCollapsedClass(e, t) {
                  if (e.length)
                      for (const i of e)
                          i.classList.toggle(Co, !t),
                          i.setAttribute("aria-expanded", t)
              }
              static jQueryInterface(e) {
                  const t = {};
                  return typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1),
                  this.each(function() {
                      const i = it.getOrCreateInstance(this, t);
                      if (typeof e == "string") {
                          if (typeof i[e] > "u")
                              throw new TypeError(`No method named "${e}"`);
                          i[e]()
                      }
                  })
              }
          }
          x.on(document, Mo, pn, function(n) {
              (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
              const e = h(this)
                , t = I.find(e);
              for (const i of t)
                  it.getOrCreateInstance(i, {
                      toggle: !1
                  }).toggle()
          }),
          $(it);
          var te = "top"
            , re = "bottom"
            , oe = "right"
            , ne = "left"
            , Ht = "auto"
            , rt = [te, re, oe, ne]
            , $e = "start"
            , ot = "end"
            , qn = "clippingParents"
            , hn = "viewport"
            , st = "popper"
            , ei = "reference"
            , fn = rt.reduce(function(n, e) {
              return n.concat([e + "-" + $e, e + "-" + ot])
          }, [])
            , yn = [].concat(rt, [Ht]).reduce(function(n, e) {
              return n.concat([e, e + "-" + $e, e + "-" + ot])
          }, [])
            , ti = "beforeRead"
            , ni = "read"
            , ii = "afterRead"
            , ri = "beforeMain"
            , oi = "main"
            , si = "afterMain"
            , ai = "beforeWrite"
            , li = "write"
            , ci = "afterWrite"
            , di = [ti, ni, ii, ri, oi, si, ai, li, ci];
          function ve(n) {
              return n ? (n.nodeName || "").toLowerCase() : null
          }
          function le(n) {
              if (n == null)
                  return window;
              if (n.toString() !== "[object Window]") {
                  var e = n.ownerDocument;
                  return e && e.defaultView || window
              }
              return n
          }
          function Pe(n) {
              var e = le(n).Element;
              return n instanceof e || n instanceof Element
          }
          function ce(n) {
              var e = le(n).HTMLElement;
              return n instanceof e || n instanceof HTMLElement
          }
          function mn(n) {
              if (typeof ShadowRoot > "u")
                  return !1;
              var e = le(n).ShadowRoot;
              return n instanceof e || n instanceof ShadowRoot
          }
          function Vo(n) {
              var e = n.state;
              Object.keys(e.elements).forEach(function(t) {
                  var i = e.styles[t] || {}
                    , o = e.attributes[t] || {}
                    , c = e.elements[t];
                  !ce(c) || !ve(c) || (Object.assign(c.style, i),
                  Object.keys(o).forEach(function(d) {
                      var y = o[d];
                      y === !1 ? c.removeAttribute(d) : c.setAttribute(d, y === !0 ? "" : y)
                  }))
              })
          }
          function Ho(n) {
              var e = n.state
                , t = {
                  popper: {
                      position: e.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0"
                  },
                  arrow: {
                      position: "absolute"
                  },
                  reference: {}
              };
              return Object.assign(e.elements.popper.style, t.popper),
              e.styles = t,
              e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
              function() {
                  Object.keys(e.elements).forEach(function(i) {
                      var o = e.elements[i]
                        , c = e.attributes[i] || {}
                        , d = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i])
                        , y = d.reduce(function(b, M) {
                          return b[M] = "",
                          b
                      }, {});
                      !ce(o) || !ve(o) || (Object.assign(o.style, y),
                      Object.keys(c).forEach(function(b) {
                          o.removeAttribute(b)
                      }))
                  })
              }
          }
          const gn = {
              name: "applyStyles",
              enabled: !0,
              phase: "write",
              fn: Vo,
              effect: Ho,
              requires: ["computeStyles"]
          };
          function xe(n) {
              return n.split("-")[0]
          }
          var Re = Math.max
            , kt = Math.min
            , at = Math.round;
          function vn() {
              var n = navigator.userAgentData;
              return n != null && n.brands ? n.brands.map(function(e) {
                  return e.brand + "/" + e.version
              }).join(" ") : navigator.userAgent
          }
          function ui() {
              return !/^((?!chrome|android).)*safari/i.test(vn())
          }
          function lt(n, e, t) {
              e === void 0 && (e = !1),
              t === void 0 && (t = !1);
              var i = n.getBoundingClientRect()
                , o = 1
                , c = 1;
              e && ce(n) && (o = n.offsetWidth > 0 && at(i.width) / n.offsetWidth || 1,
              c = n.offsetHeight > 0 && at(i.height) / n.offsetHeight || 1);
              var d = Pe(n) ? le(n) : window
                , y = d.visualViewport
                , b = !ui() && t
                , M = (i.left + (b && y ? y.offsetLeft : 0)) / o
                , A = (i.top + (b && y ? y.offsetTop : 0)) / c
                , D = i.width / o
                , R = i.height / c;
              return {
                  width: D,
                  height: R,
                  top: A,
                  right: M + D,
                  bottom: A + R,
                  left: M,
                  x: M,
                  y: A
              }
          }
          function xn(n) {
              var e = lt(n)
                , t = n.offsetWidth
                , i = n.offsetHeight;
              return Math.abs(e.width - t) <= 1 && (t = e.width),
              Math.abs(e.height - i) <= 1 && (i = e.height),
              {
                  x: n.offsetLeft,
                  y: n.offsetTop,
                  width: t,
                  height: i
              }
          }
          function pi(n, e) {
              var t = e.getRootNode && e.getRootNode();
              if (n.contains(e))
                  return !0;
              if (t && mn(t)) {
                  var i = e;
                  do {
                      if (i && n.isSameNode(i))
                          return !0;
                      i = i.parentNode || i.host
                  } while (i)
              }
              return !1
          }
          function Ae(n) {
              return le(n).getComputedStyle(n)
          }
          function ko(n) {
              return ["table", "td", "th"].indexOf(ve(n)) >= 0
          }
          function Ne(n) {
              return ((Pe(n) ? n.ownerDocument : n.document) || window.document).documentElement
          }
          function zt(n) {
              return ve(n) === "html" ? n : n.assignedSlot || n.parentNode || (mn(n) ? n.host : null) || Ne(n)
          }
          function hi(n) {
              return !ce(n) || Ae(n).position === "fixed" ? null : n.offsetParent
          }
          function zo(n) {
              var e = /firefox/i.test(vn())
                , t = /Trident/i.test(vn());
              if (t && ce(n)) {
                  var i = Ae(n);
                  if (i.position === "fixed")
                      return null
              }
              var o = zt(n);
              for (mn(o) && (o = o.host); ce(o) && ["html", "body"].indexOf(ve(o)) < 0; ) {
                  var c = Ae(o);
                  if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
                      return o;
                  o = o.parentNode
              }
              return null
          }
          function At(n) {
              for (var e = le(n), t = hi(n); t && ko(t) && Ae(t).position === "static"; )
                  t = hi(t);
              return t && (ve(t) === "html" || ve(t) === "body" && Ae(t).position === "static") ? e : t || zo(n) || e
          }
          function _n(n) {
              return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y"
          }
          function wt(n, e, t) {
              return Re(n, kt(e, t))
          }
          function Wo(n, e, t) {
              var i = wt(n, e, t);
              return i > t ? t : i
          }
          function fi() {
              return {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
              }
          }
          function yi(n) {
              return Object.assign({}, fi(), n)
          }
          function mi(n, e) {
              return e.reduce(function(t, i) {
                  return t[i] = n,
                  t
              }, {})
          }
          var Ko = function(e, t) {
              return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
                  placement: t.placement
              })) : e,
              yi(typeof e != "number" ? e : mi(e, rt))
          };
          function Bo(n) {
              var e, t = n.state, i = n.name, o = n.options, c = t.elements.arrow, d = t.modifiersData.popperOffsets, y = xe(t.placement), b = _n(y), M = [ne, oe].indexOf(y) >= 0, A = M ? "height" : "width";
              if (!(!c || !d)) {
                  var D = Ko(o.padding, t)
                    , R = xn(c)
                    , C = b === "y" ? te : ne
                    , F = b === "y" ? re : oe
                    , P = t.rects.reference[A] + t.rects.reference[b] - d[b] - t.rects.popper[A]
                    , H = d[b] - t.rects.reference[b]
                    , Y = At(c)
                    , X = Y ? b === "y" ? Y.clientHeight || 0 : Y.clientWidth || 0 : 0
                    , Q = P / 2 - H / 2
                    , V = D[C]
                    , W = X - R[A] - D[F]
                    , K = X / 2 - R[A] / 2 + Q
                    , U = wt(V, K, W)
                    , q = b;
                  t.modifiersData[i] = (e = {},
                  e[q] = U,
                  e.centerOffset = U - K,
                  e)
              }
          }
          function Fo(n) {
              var e = n.state
                , t = n.options
                , i = t.element
                , o = i === void 0 ? "[data-popper-arrow]" : i;
              o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o),
              !o) || pi(e.elements.popper, o) && (e.elements.arrow = o))
          }
          const gi = {
              name: "arrow",
              enabled: !0,
              phase: "main",
              fn: Bo,
              effect: Fo,
              requires: ["popperOffsets"],
              requiresIfExists: ["preventOverflow"]
          };
          function ct(n) {
              return n.split("-")[1]
          }
          var Yo = {
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto"
          };
          function Go(n) {
              var e = n.x
                , t = n.y
                , i = window
                , o = i.devicePixelRatio || 1;
              return {
                  x: at(e * o) / o || 0,
                  y: at(t * o) / o || 0
              }
          }
          function vi(n) {
              var e, t = n.popper, i = n.popperRect, o = n.placement, c = n.variation, d = n.offsets, y = n.position, b = n.gpuAcceleration, M = n.adaptive, A = n.roundOffsets, D = n.isFixed, R = d.x, C = R === void 0 ? 0 : R, F = d.y, P = F === void 0 ? 0 : F, H = typeof A == "function" ? A({
                  x: C,
                  y: P
              }) : {
                  x: C,
                  y: P
              };
              C = H.x,
              P = H.y;
              var Y = d.hasOwnProperty("x")
                , X = d.hasOwnProperty("y")
                , Q = ne
                , V = te
                , W = window;
              if (M) {
                  var K = At(t)
                    , U = "clientHeight"
                    , q = "clientWidth";
                  if (K === le(t) && (K = Ne(t),
                  Ae(K).position !== "static" && y === "absolute" && (U = "scrollHeight",
                  q = "scrollWidth")),
                  K = K,
                  o === te || (o === ne || o === oe) && c === ot) {
                      V = re;
                      var J = D && K === W && W.visualViewport ? W.visualViewport.height : K[U];
                      P -= J - i.height,
                      P *= b ? 1 : -1
                  }
                  if (o === ne || (o === te || o === re) && c === ot) {
                      Q = oe;
                      var Z = D && K === W && W.visualViewport ? W.visualViewport.width : K[q];
                      C -= Z - i.width,
                      C *= b ? 1 : -1
                  }
              }
              var ee = Object.assign({
                  position: y
              }, M && Yo)
                , ye = A === !0 ? Go({
                  x: C,
                  y: P
              }) : {
                  x: C,
                  y: P
              };
              if (C = ye.x,
              P = ye.y,
              b) {
                  var ie;
                  return Object.assign({}, ee, (ie = {},
                  ie[V] = X ? "0" : "",
                  ie[Q] = Y ? "0" : "",
                  ie.transform = (W.devicePixelRatio || 1) <= 1 ? "translate(" + C + "px, " + P + "px)" : "translate3d(" + C + "px, " + P + "px, 0)",
                  ie))
              }
              return Object.assign({}, ee, (e = {},
              e[V] = X ? P + "px" : "",
              e[Q] = Y ? C + "px" : "",
              e.transform = "",
              e))
          }
          function Uo(n) {
              var e = n.state
                , t = n.options
                , i = t.gpuAcceleration
                , o = i === void 0 ? !0 : i
                , c = t.adaptive
                , d = c === void 0 ? !0 : c
                , y = t.roundOffsets
                , b = y === void 0 ? !0 : y
                , M = {
                  placement: xe(e.placement),
                  variation: ct(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: o,
                  isFixed: e.options.strategy === "fixed"
              };
              e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, vi(Object.assign({}, M, {
                  offsets: e.modifiersData.popperOffsets,
                  position: e.options.strategy,
                  adaptive: d,
                  roundOffsets: b
              })))),
              e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, vi(Object.assign({}, M, {
                  offsets: e.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: b
              })))),
              e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-placement": e.placement
              })
          }
          const En = {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: Uo,
              data: {}
          };
          var Wt = {
              passive: !0
          };
          function Xo(n) {
              var e = n.state
                , t = n.instance
                , i = n.options
                , o = i.scroll
                , c = o === void 0 ? !0 : o
                , d = i.resize
                , y = d === void 0 ? !0 : d
                , b = le(e.elements.popper)
                , M = [].concat(e.scrollParents.reference, e.scrollParents.popper);
              return c && M.forEach(function(A) {
                  A.addEventListener("scroll", t.update, Wt)
              }),
              y && b.addEventListener("resize", t.update, Wt),
              function() {
                  c && M.forEach(function(A) {
                      A.removeEventListener("scroll", t.update, Wt)
                  }),
                  y && b.removeEventListener("resize", t.update, Wt)
              }
          }
          const bn = {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function() {},
              effect: Xo,
              data: {}
          };
          var Qo = {
              left: "right",
              right: "left",
              bottom: "top",
              top: "bottom"
          };
          function Kt(n) {
              return n.replace(/left|right|bottom|top/g, function(e) {
                  return Qo[e]
              })
          }
          var Zo = {
              start: "end",
              end: "start"
          };
          function xi(n) {
              return n.replace(/start|end/g, function(e) {
                  return Zo[e]
              })
          }
          function An(n) {
              var e = le(n)
                , t = e.pageXOffset
                , i = e.pageYOffset;
              return {
                  scrollLeft: t,
                  scrollTop: i
              }
          }
          function wn(n) {
              return lt(Ne(n)).left + An(n).scrollLeft
          }
          function Jo(n, e) {
              var t = le(n)
                , i = Ne(n)
                , o = t.visualViewport
                , c = i.clientWidth
                , d = i.clientHeight
                , y = 0
                , b = 0;
              if (o) {
                  c = o.width,
                  d = o.height;
                  var M = ui();
                  (M || !M && e === "fixed") && (y = o.offsetLeft,
                  b = o.offsetTop)
              }
              return {
                  width: c,
                  height: d,
                  x: y + wn(n),
                  y: b
              }
          }
          function qo(n) {
              var e, t = Ne(n), i = An(n), o = (e = n.ownerDocument) == null ? void 0 : e.body, c = Re(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), d = Re(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), y = -i.scrollLeft + wn(n), b = -i.scrollTop;
              return Ae(o || t).direction === "rtl" && (y += Re(t.clientWidth, o ? o.clientWidth : 0) - c),
              {
                  width: c,
                  height: d,
                  x: y,
                  y: b
              }
          }
          function jn(n) {
              var e = Ae(n)
                , t = e.overflow
                , i = e.overflowX
                , o = e.overflowY;
              return /auto|scroll|overlay|hidden/.test(t + o + i)
          }
          function _i(n) {
              return ["html", "body", "#document"].indexOf(ve(n)) >= 0 ? n.ownerDocument.body : ce(n) && jn(n) ? n : _i(zt(n))
          }
          function jt(n, e) {
              var t;
              e === void 0 && (e = []);
              var i = _i(n)
                , o = i === ((t = n.ownerDocument) == null ? void 0 : t.body)
                , c = le(i)
                , d = o ? [c].concat(c.visualViewport || [], jn(i) ? i : []) : i
                , y = e.concat(d);
              return o ? y : y.concat(jt(zt(d)))
          }
          function Tn(n) {
              return Object.assign({}, n, {
                  left: n.x,
                  top: n.y,
                  right: n.x + n.width,
                  bottom: n.y + n.height
              })
          }
          function es(n, e) {
              var t = lt(n, !1, e === "fixed");
              return t.top = t.top + n.clientTop,
              t.left = t.left + n.clientLeft,
              t.bottom = t.top + n.clientHeight,
              t.right = t.left + n.clientWidth,
              t.width = n.clientWidth,
              t.height = n.clientHeight,
              t.x = t.left,
              t.y = t.top,
              t
          }
          function Ei(n, e, t) {
              return e === hn ? Tn(Jo(n, t)) : Pe(e) ? es(e, t) : Tn(qo(Ne(n)))
          }
          function ts(n) {
              var e = jt(zt(n))
                , t = ["absolute", "fixed"].indexOf(Ae(n).position) >= 0
                , i = t && ce(n) ? At(n) : n;
              return Pe(i) ? e.filter(function(o) {
                  return Pe(o) && pi(o, i) && ve(o) !== "body"
              }) : []
          }
          function ns(n, e, t, i) {
              var o = e === "clippingParents" ? ts(n) : [].concat(e)
                , c = [].concat(o, [t])
                , d = c[0]
                , y = c.reduce(function(b, M) {
                  var A = Ei(n, M, i);
                  return b.top = Re(A.top, b.top),
                  b.right = kt(A.right, b.right),
                  b.bottom = kt(A.bottom, b.bottom),
                  b.left = Re(A.left, b.left),
                  b
              }, Ei(n, d, i));
              return y.width = y.right - y.left,
              y.height = y.bottom - y.top,
              y.x = y.left,
              y.y = y.top,
              y
          }
          function bi(n) {
              var e = n.reference, t = n.element, i = n.placement, o = i ? xe(i) : null, c = i ? ct(i) : null, d = e.x + e.width / 2 - t.width / 2, y = e.y + e.height / 2 - t.height / 2, b;
              switch (o) {
              case te:
                  b = {
                      x: d,
                      y: e.y - t.height
                  };
                  break;
              case re:
                  b = {
                      x: d,
                      y: e.y + e.height
                  };
                  break;
              case oe:
                  b = {
                      x: e.x + e.width,
                      y
                  };
                  break;
              case ne:
                  b = {
                      x: e.x - t.width,
                      y
                  };
                  break;
              default:
                  b = {
                      x: e.x,
                      y: e.y
                  }
              }
              var M = o ? _n(o) : null;
              if (M != null) {
                  var A = M === "y" ? "height" : "width";
                  switch (c) {
                  case $e:
                      b[M] = b[M] - (e[A] / 2 - t[A] / 2);
                      break;
                  case ot:
                      b[M] = b[M] + (e[A] / 2 - t[A] / 2);
                      break
                  }
              }
              return b
          }
          function dt(n, e) {
              e === void 0 && (e = {});
              var t = e
                , i = t.placement
                , o = i === void 0 ? n.placement : i
                , c = t.strategy
                , d = c === void 0 ? n.strategy : c
                , y = t.boundary
                , b = y === void 0 ? qn : y
                , M = t.rootBoundary
                , A = M === void 0 ? hn : M
                , D = t.elementContext
                , R = D === void 0 ? st : D
                , C = t.altBoundary
                , F = C === void 0 ? !1 : C
                , P = t.padding
                , H = P === void 0 ? 0 : P
                , Y = yi(typeof H != "number" ? H : mi(H, rt))
                , X = R === st ? ei : st
                , Q = n.rects.popper
                , V = n.elements[F ? X : R]
                , W = ns(Pe(V) ? V : V.contextElement || Ne(n.elements.popper), b, A, d)
                , K = lt(n.elements.reference)
                , U = bi({
                  reference: K,
                  element: Q,
                  strategy: "absolute",
                  placement: o
              })
                , q = Tn(Object.assign({}, Q, U))
                , J = R === st ? q : K
                , Z = {
                  top: W.top - J.top + Y.top,
                  bottom: J.bottom - W.bottom + Y.bottom,
                  left: W.left - J.left + Y.left,
                  right: J.right - W.right + Y.right
              }
                , ee = n.modifiersData.offset;
              if (R === st && ee) {
                  var ye = ee[o];
                  Object.keys(Z).forEach(function(ie) {
                      var Fe = [oe, re].indexOf(ie) >= 0 ? 1 : -1
                        , Ye = [te, re].indexOf(ie) >= 0 ? "y" : "x";
                      Z[ie] += ye[Ye] * Fe
                  })
              }
              return Z
          }
          function is(n, e) {
              e === void 0 && (e = {});
              var t = e
                , i = t.placement
                , o = t.boundary
                , c = t.rootBoundary
                , d = t.padding
                , y = t.flipVariations
                , b = t.allowedAutoPlacements
                , M = b === void 0 ? yn : b
                , A = ct(i)
                , D = A ? y ? fn : fn.filter(function(F) {
                  return ct(F) === A
              }) : rt
                , R = D.filter(function(F) {
                  return M.indexOf(F) >= 0
              });
              R.length === 0 && (R = D);
              var C = R.reduce(function(F, P) {
                  return F[P] = dt(n, {
                      placement: P,
                      boundary: o,
                      rootBoundary: c,
                      padding: d
                  })[xe(P)],
                  F
              }, {});
              return Object.keys(C).sort(function(F, P) {
                  return C[F] - C[P]
              })
          }
          function rs(n) {
              if (xe(n) === Ht)
                  return [];
              var e = Kt(n);
              return [xi(n), e, xi(e)]
          }
          function os(n) {
              var e = n.state
                , t = n.options
                , i = n.name;
              if (!e.modifiersData[i]._skip) {
                  for (var o = t.mainAxis, c = o === void 0 ? !0 : o, d = t.altAxis, y = d === void 0 ? !0 : d, b = t.fallbackPlacements, M = t.padding, A = t.boundary, D = t.rootBoundary, R = t.altBoundary, C = t.flipVariations, F = C === void 0 ? !0 : C, P = t.allowedAutoPlacements, H = e.options.placement, Y = xe(H), X = Y === H, Q = b || (X || !F ? [Kt(H)] : rs(H)), V = [H].concat(Q).reduce(function(ht, De) {
                      return ht.concat(xe(De) === Ht ? is(e, {
                          placement: De,
                          boundary: A,
                          rootBoundary: D,
                          padding: M,
                          flipVariations: F,
                          allowedAutoPlacements: P
                      }) : De)
                  }, []), W = e.rects.reference, K = e.rects.popper, U = new Map, q = !0, J = V[0], Z = 0; Z < V.length; Z++) {
                      var ee = V[Z]
                        , ye = xe(ee)
                        , ie = ct(ee) === $e
                        , Fe = [te, re].indexOf(ye) >= 0
                        , Ye = Fe ? "width" : "height"
                        , se = dt(e, {
                          placement: ee,
                          boundary: A,
                          rootBoundary: D,
                          altBoundary: R,
                          padding: M
                      })
                        , me = Fe ? ie ? oe : ne : ie ? re : te;
                      W[Ye] > K[Ye] && (me = Kt(me));
                      var Jt = Kt(me)
                        , Ge = [];
                      if (c && Ge.push(se[ye] <= 0),
                      y && Ge.push(se[me] <= 0, se[Jt] <= 0),
                      Ge.every(function(ht) {
                          return ht
                      })) {
                          J = ee,
                          q = !1;
                          break
                      }
                      U.set(ee, Ge)
                  }
                  if (q)
                      for (var qt = F ? 3 : 1, Hn = function(De) {
                          var Ct = V.find(function(tn) {
                              var Ue = U.get(tn);
                              if (Ue)
                                  return Ue.slice(0, De).every(function(kn) {
                                      return kn
                                  })
                          });
                          if (Ct)
                              return J = Ct,
                              "break"
                      }, Mt = qt; Mt > 0; Mt--) {
                          var en = Hn(Mt);
                          if (en === "break")
                              break
                      }
                  e.placement !== J && (e.modifiersData[i]._skip = !0,
                  e.placement = J,
                  e.reset = !0)
              }
          }
          const Ai = {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: os,
              requiresIfExists: ["offset"],
              data: {
                  _skip: !1
              }
          };
          function wi(n, e, t) {
              return t === void 0 && (t = {
                  x: 0,
                  y: 0
              }),
              {
                  top: n.top - e.height - t.y,
                  right: n.right - e.width + t.x,
                  bottom: n.bottom - e.height + t.y,
                  left: n.left - e.width - t.x
              }
          }
          function ji(n) {
              return [te, oe, re, ne].some(function(e) {
                  return n[e] >= 0
              })
          }
          function ss(n) {
              var e = n.state
                , t = n.name
                , i = e.rects.reference
                , o = e.rects.popper
                , c = e.modifiersData.preventOverflow
                , d = dt(e, {
                  elementContext: "reference"
              })
                , y = dt(e, {
                  altBoundary: !0
              })
                , b = wi(d, i)
                , M = wi(y, o, c)
                , A = ji(b)
                , D = ji(M);
              e.modifiersData[t] = {
                  referenceClippingOffsets: b,
                  popperEscapeOffsets: M,
                  isReferenceHidden: A,
                  hasPopperEscaped: D
              },
              e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-reference-hidden": A,
                  "data-popper-escaped": D
              })
          }
          const Ti = {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: ss
          };
          function as(n, e, t) {
              var i = xe(n)
                , o = [ne, te].indexOf(i) >= 0 ? -1 : 1
                , c = typeof t == "function" ? t(Object.assign({}, e, {
                  placement: n
              })) : t
                , d = c[0]
                , y = c[1];
              return d = d || 0,
              y = (y || 0) * o,
              [ne, oe].indexOf(i) >= 0 ? {
                  x: y,
                  y: d
              } : {
                  x: d,
                  y
              }
          }
          function ls(n) {
              var e = n.state
                , t = n.options
                , i = n.name
                , o = t.offset
                , c = o === void 0 ? [0, 0] : o
                , d = yn.reduce(function(A, D) {
                  return A[D] = as(D, e.rects, c),
                  A
              }, {})
                , y = d[e.placement]
                , b = y.x
                , M = y.y;
              e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += b,
              e.modifiersData.popperOffsets.y += M),
              e.modifiersData[i] = d
          }
          const Oi = {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: ls
          };
          function cs(n) {
              var e = n.state
                , t = n.name;
              e.modifiersData[t] = bi({
                  reference: e.rects.reference,
                  element: e.rects.popper,
                  strategy: "absolute",
                  placement: e.placement
              })
          }
          const On = {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: cs,
              data: {}
          };
          function ds(n) {
              return n === "x" ? "y" : "x"
          }
          function us(n) {
              var e = n.state
                , t = n.options
                , i = n.name
                , o = t.mainAxis
                , c = o === void 0 ? !0 : o
                , d = t.altAxis
                , y = d === void 0 ? !1 : d
                , b = t.boundary
                , M = t.rootBoundary
                , A = t.altBoundary
                , D = t.padding
                , R = t.tether
                , C = R === void 0 ? !0 : R
                , F = t.tetherOffset
                , P = F === void 0 ? 0 : F
                , H = dt(e, {
                  boundary: b,
                  rootBoundary: M,
                  padding: D,
                  altBoundary: A
              })
                , Y = xe(e.placement)
                , X = ct(e.placement)
                , Q = !X
                , V = _n(Y)
                , W = ds(V)
                , K = e.modifiersData.popperOffsets
                , U = e.rects.reference
                , q = e.rects.popper
                , J = typeof P == "function" ? P(Object.assign({}, e.rects, {
                  placement: e.placement
              })) : P
                , Z = typeof J == "number" ? {
                  mainAxis: J,
                  altAxis: J
              } : Object.assign({
                  mainAxis: 0,
                  altAxis: 0
              }, J)
                , ee = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
                , ye = {
                  x: 0,
                  y: 0
              };
              if (K) {
                  if (c) {
                      var ie, Fe = V === "y" ? te : ne, Ye = V === "y" ? re : oe, se = V === "y" ? "height" : "width", me = K[V], Jt = me + H[Fe], Ge = me - H[Ye], qt = C ? -q[se] / 2 : 0, Hn = X === $e ? U[se] : q[se], Mt = X === $e ? -q[se] : -U[se], en = e.elements.arrow, ht = C && en ? xn(en) : {
                          width: 0,
                          height: 0
                      }, De = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : fi(), Ct = De[Fe], tn = De[Ye], Ue = wt(0, U[se], ht[se]), kn = Q ? U[se] / 2 - qt - Ue - Ct - Z.mainAxis : Hn - Ue - Ct - Z.mainAxis, sc = Q ? -U[se] / 2 + qt + Ue + tn + Z.mainAxis : Mt + Ue + tn + Z.mainAxis, zn = e.elements.arrow && At(e.elements.arrow), ac = zn ? V === "y" ? zn.clientTop || 0 : zn.clientLeft || 0 : 0, hr = (ie = ee == null ? void 0 : ee[V]) != null ? ie : 0, lc = me + kn - hr - ac, cc = me + sc - hr, fr = wt(C ? kt(Jt, lc) : Jt, me, C ? Re(Ge, cc) : Ge);
                      K[V] = fr,
                      ye[V] = fr - me
                  }
                  if (y) {
                      var yr, dc = V === "x" ? te : ne, uc = V === "x" ? re : oe, Xe = K[W], nn = W === "y" ? "height" : "width", mr = Xe + H[dc], gr = Xe - H[uc], Wn = [te, ne].indexOf(Y) !== -1, vr = (yr = ee == null ? void 0 : ee[W]) != null ? yr : 0, xr = Wn ? mr : Xe - U[nn] - q[nn] - vr + Z.altAxis, _r = Wn ? Xe + U[nn] + q[nn] - vr - Z.altAxis : gr, Er = C && Wn ? Wo(xr, Xe, _r) : wt(C ? xr : mr, Xe, C ? _r : gr);
                      K[W] = Er,
                      ye[W] = Er - Xe
                  }
                  e.modifiersData[i] = ye
              }
          }
          const Si = {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: us,
              requiresIfExists: ["offset"]
          };
          function ps(n) {
              return {
                  scrollLeft: n.scrollLeft,
                  scrollTop: n.scrollTop
              }
          }
          function hs(n) {
              return n === le(n) || !ce(n) ? An(n) : ps(n)
          }
          function fs(n) {
              var e = n.getBoundingClientRect()
                , t = at(e.width) / n.offsetWidth || 1
                , i = at(e.height) / n.offsetHeight || 1;
              return t !== 1 || i !== 1
          }
          function ys(n, e, t) {
              t === void 0 && (t = !1);
              var i = ce(e)
                , o = ce(e) && fs(e)
                , c = Ne(e)
                , d = lt(n, o, t)
                , y = {
                  scrollLeft: 0,
                  scrollTop: 0
              }
                , b = {
                  x: 0,
                  y: 0
              };
              return (i || !i && !t) && ((ve(e) !== "body" || jn(c)) && (y = hs(e)),
              ce(e) ? (b = lt(e, !0),
              b.x += e.clientLeft,
              b.y += e.clientTop) : c && (b.x = wn(c))),
              {
                  x: d.left + y.scrollLeft - b.x,
                  y: d.top + y.scrollTop - b.y,
                  width: d.width,
                  height: d.height
              }
          }
          function ms(n) {
              var e = new Map
                , t = new Set
                , i = [];
              n.forEach(function(c) {
                  e.set(c.name, c)
              });
              function o(c) {
                  t.add(c.name);
                  var d = [].concat(c.requires || [], c.requiresIfExists || []);
                  d.forEach(function(y) {
                      if (!t.has(y)) {
                          var b = e.get(y);
                          b && o(b)
                      }
                  }),
                  i.push(c)
              }
              return n.forEach(function(c) {
                  t.has(c.name) || o(c)
              }),
              i
          }
          function gs(n) {
              var e = ms(n);
              return di.reduce(function(t, i) {
                  return t.concat(e.filter(function(o) {
                      return o.phase === i
                  }))
              }, [])
          }
          function vs(n) {
              var e;
              return function() {
                  return e || (e = new Promise(function(t) {
                      Promise.resolve().then(function() {
                          e = void 0,
                          t(n())
                      })
                  }
                  )),
                  e
              }
          }
          function xs(n) {
              var e = n.reduce(function(t, i) {
                  var o = t[i.name];
                  return t[i.name] = o ? Object.assign({}, o, i, {
                      options: Object.assign({}, o.options, i.options),
                      data: Object.assign({}, o.data, i.data)
                  }) : i,
                  t
              }, {});
              return Object.keys(e).map(function(t) {
                  return e[t]
              })
          }
          var Mi = {
              placement: "bottom",
              modifiers: [],
              strategy: "absolute"
          };
          function Ci() {
              for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
                  e[t] = arguments[t];
              return !e.some(function(i) {
                  return !(i && typeof i.getBoundingClientRect == "function")
              })
          }
          function Bt(n) {
              n === void 0 && (n = {});
              var e = n
                , t = e.defaultModifiers
                , i = t === void 0 ? [] : t
                , o = e.defaultOptions
                , c = o === void 0 ? Mi : o;
              return function(y, b, M) {
                  M === void 0 && (M = c);
                  var A = {
                      placement: "bottom",
                      orderedModifiers: [],
                      options: Object.assign({}, Mi, c),
                      modifiersData: {},
                      elements: {
                          reference: y,
                          popper: b
                      },
                      attributes: {},
                      styles: {}
                  }
                    , D = []
                    , R = !1
                    , C = {
                      state: A,
                      setOptions: function(Y) {
                          var X = typeof Y == "function" ? Y(A.options) : Y;
                          P(),
                          A.options = Object.assign({}, c, A.options, X),
                          A.scrollParents = {
                              reference: Pe(y) ? jt(y) : y.contextElement ? jt(y.contextElement) : [],
                              popper: jt(b)
                          };
                          var Q = gs(xs([].concat(i, A.options.modifiers)));
                          return A.orderedModifiers = Q.filter(function(V) {
                              return V.enabled
                          }),
                          F(),
                          C.update()
                      },
                      forceUpdate: function() {
                          if (!R) {
                              var Y = A.elements
                                , X = Y.reference
                                , Q = Y.popper;
                              if (Ci(X, Q)) {
                                  A.rects = {
                                      reference: ys(X, At(Q), A.options.strategy === "fixed"),
                                      popper: xn(Q)
                                  },
                                  A.reset = !1,
                                  A.placement = A.options.placement,
                                  A.orderedModifiers.forEach(function(Z) {
                                      return A.modifiersData[Z.name] = Object.assign({}, Z.data)
                                  });
                                  for (var V = 0; V < A.orderedModifiers.length; V++) {
                                      if (A.reset === !0) {
                                          A.reset = !1,
                                          V = -1;
                                          continue
                                      }
                                      var W = A.orderedModifiers[V]
                                        , K = W.fn
                                        , U = W.options
                                        , q = U === void 0 ? {} : U
                                        , J = W.name;
                                      typeof K == "function" && (A = K({
                                          state: A,
                                          options: q,
                                          name: J,
                                          instance: C
                                      }) || A)
                                  }
                              }
                          }
                      },
                      update: vs(function() {
                          return new Promise(function(H) {
                              C.forceUpdate(),
                              H(A)
                          }
                          )
                      }),
                      destroy: function() {
                          P(),
                          R = !0
                      }
                  };
                  if (!Ci(y, b))
                      return C;
                  C.setOptions(M).then(function(H) {
                      !R && M.onFirstUpdate && M.onFirstUpdate(H)
                  });
                  function F() {
                      A.orderedModifiers.forEach(function(H) {
                          var Y = H.name
                            , X = H.options
                            , Q = X === void 0 ? {} : X
                            , V = H.effect;
                          if (typeof V == "function") {
                              var W = V({
                                  state: A,
                                  name: Y,
                                  instance: C,
                                  options: Q
                              })
                                , K = function() {};
                              D.push(W || K)
                          }
                      })
                  }
                  function P() {
                      D.forEach(function(H) {
                          return H()
                      }),
                      D = []
                  }
                  return C
              }
          }
          var _s = Bt()
            , Es = [bn, On, En, gn]
            , bs = Bt({
              defaultModifiers: Es
          })
            , As = [bn, On, En, gn, Oi, Ai, Si, gi, Ti]
            , Sn = Bt({
              defaultModifiers: As
          });
          const Ni = Object.freeze(Object.defineProperty({
              __proto__: null,
              popperGenerator: Bt,
              detectOverflow: dt,
              createPopperBase: _s,
              createPopper: Sn,
              createPopperLite: bs,
              top: te,
              bottom: re,
              right: oe,
              left: ne,
              auto: Ht,
              basePlacements: rt,
              start: $e,
              end: ot,
              clippingParents: qn,
              viewport: hn,
              popper: st,
              reference: ei,
              variationPlacements: fn,
              placements: yn,
              beforeRead: ti,
              read: ni,
              afterRead: ii,
              beforeMain: ri,
              main: oi,
              afterMain: si,
              beforeWrite: ai,
              write: li,
              afterWrite: ci,
              modifierPhases: di,
              applyStyles: gn,
              arrow: gi,
              computeStyles: En,
              eventListeners: bn,
              flip: Ai,
              hide: Ti,
              offset: Oi,
              popperOffsets: On,
              preventOverflow: Si
          }, Symbol.toStringTag, {
              value: "Module"
          }))
            , Li = "dropdown"
            , Ve = ".bs.dropdown"
            , Mn = ".data-api"
            , ws = "Escape"
            , Di = "Tab"
            , js = "ArrowUp"
            , Ii = "ArrowDown"
            , Ts = 2
            , Os = `hide${Ve}`
            , Ss = `hidden${Ve}`
            , Ms = `show${Ve}`
            , Cs = `shown${Ve}`
            , $i = `click${Ve}${Mn}`
            , Pi = `keydown${Ve}${Mn}`
            , Ns = `keyup${Ve}${Mn}`
            , ut = "show"
            , Ls = "dropup"
            , Ds = "dropend"
            , Is = "dropstart"
            , $s = "dropup-center"
            , Ps = "dropdown-center"
            , He = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
            , Rs = `${He}.${ut}`
            , Ft = ".dropdown-menu"
            , Vs = ".navbar"
            , Hs = ".navbar-nav"
            , ks = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
            , zs = L() ? "top-end" : "top-start"
            , Ws = L() ? "top-start" : "top-end"
            , Ks = L() ? "bottom-end" : "bottom-start"
            , Bs = L() ? "bottom-start" : "bottom-end"
            , Fs = L() ? "left-start" : "right-start"
            , Ys = L() ? "right-start" : "left-start"
            , Gs = "top"
            , Us = "bottom"
            , Xs = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle"
          }
            , Qs = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)"
          };
          class he extends pe {
              constructor(e, t) {
                  super(e, t),
                  this._popper = null,
                  this._parent = this._element.parentNode,
                  this._menu = I.next(this._element, Ft)[0] || I.prev(this._element, Ft)[0] || I.findOne(Ft, this._parent),
                  this._inNavbar = this._detectNavbar()
              }
              static get Default() {
                  return Xs
              }
              static get DefaultType() {
                  return Qs
              }
              static get NAME() {
                  return Li
              }
              toggle() {
                  return this._isShown() ? this.hide() : this.show()
              }
              show() {
                  if (v(this._element) || this._isShown())
                      return;
                  const e = {
                      relatedTarget: this._element
                  };
                  if (!x.trigger(this._element, Ms, e).defaultPrevented) {
                      if (this._createPopper(),
                      "ontouchstart"in document.documentElement && !this._parent.closest(Hs))
                          for (const i of [].concat(...document.body.children))
                              x.on(i, "mouseover", T);
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      this._menu.classList.add(ut),
                      this._element.classList.add(ut),
                      x.trigger(this._element, Cs, e)
                  }
              }
              hide() {
                  if (v(this._element) || !this._isShown())
                      return;
                  const e = {
                      relatedTarget: this._element
                  };
                  this._completeHide(e)
              }
              dispose() {
                  this._popper && this._popper.destroy(),
                  super.dispose()
              }
              update() {
                  this._inNavbar = this._detectNavbar(),
                  this._popper && this._popper.update()
              }
              _completeHide(e) {
                  if (!x.trigger(this._element, Os, e).defaultPrevented) {
                      if ("ontouchstart"in document.documentElement)
                          for (const i of [].concat(...document.body.children))
                              x.off(i, "mouseover", T);
                      this._popper && this._popper.destroy(),
                      this._menu.classList.remove(ut),
                      this._element.classList.remove(ut),
                      this._element.setAttribute("aria-expanded", "false"),
                      be.removeDataAttribute(this._menu, "popper"),
                      x.trigger(this._element, Ss, e)
                  }
              }
              _getConfig(e) {
                  if (e = super._getConfig(e),
                  typeof e.reference == "object" && !E(e.reference) && typeof e.reference.getBoundingClientRect != "function")
                      throw new TypeError(`${Li.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                  return e
              }
              _createPopper() {
                  if (typeof Ni > "u")
                      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                  let e = this._element;
                  this._config.reference === "parent" ? e = this._parent : E(this._config.reference) ? e = w(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
                  const t = this._getPopperConfig();
                  this._popper = Sn(e, this._menu, t)
              }
              _isShown() {
                  return this._menu.classList.contains(ut)
              }
              _getPlacement() {
                  const e = this._parent;
                  if (e.classList.contains(Ds))
                      return Fs;
                  if (e.classList.contains(Is))
                      return Ys;
                  if (e.classList.contains($s))
                      return Gs;
                  if (e.classList.contains(Ps))
                      return Us;
                  const t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
                  return e.classList.contains(Ls) ? t ? Ws : zs : t ? Bs : Ks
              }
              _detectNavbar() {
                  return this._element.closest(Vs) !== null
              }
              _getOffset() {
                  const {offset: e} = this._config;
                  return typeof e == "string" ? e.split(",").map(t=>Number.parseInt(t, 10)) : typeof e == "function" ? t=>e(t, this._element) : e
              }
              _getPopperConfig() {
                  const e = {
                      placement: this._getPlacement(),
                      modifiers: [{
                          name: "preventOverflow",
                          options: {
                              boundary: this._config.boundary
                          }
                      }, {
                          name: "offset",
                          options: {
                              offset: this._getOffset()
                          }
                      }]
                  };
                  return (this._inNavbar || this._config.display === "static") && (be.setDataAttribute(this._menu, "popper", "static"),
                  e.modifiers = [{
                      name: "applyStyles",
                      enabled: !1
                  }]),
                  {
                      ...e,
                      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
                  }
              }
              _selectMenuItem({key: e, target: t}) {
                  const i = I.find(ks, this._menu).filter(o=>_(o));
                  i.length && mt(i, t, e === Ii, !i.includes(t)).focus()
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = he.getOrCreateInstance(this, e);
                      if (typeof e == "string") {
                          if (typeof t[e] > "u")
                              throw new TypeError(`No method named "${e}"`);
                          t[e]()
                      }
                  })
              }
              static clearMenus(e) {
                  if (e.button === Ts || e.type === "keyup" && e.key !== Di)
                      return;
                  const t = I.find(Rs);
                  for (const i of t) {
                      const o = he.getInstance(i);
                      if (!o || o._config.autoClose === !1)
                          continue;
                      const c = e.composedPath()
                        , d = c.includes(o._menu);
                      if (c.includes(o._element) || o._config.autoClose === "inside" && !d || o._config.autoClose === "outside" && d || o._menu.contains(e.target) && (e.type === "keyup" && e.key === Di || /input|select|option|textarea|form/i.test(e.target.tagName)))
                          continue;
                      const y = {
                          relatedTarget: o._element
                      };
                      e.type === "click" && (y.clickEvent = e),
                      o._completeHide(y)
                  }
              }
              static dataApiKeydownHandler(e) {
                  const t = /input|textarea/i.test(e.target.tagName)
                    , i = e.key === ws
                    , o = [js, Ii].includes(e.key);
                  if (!o && !i || t && !i)
                      return;
                  e.preventDefault();
                  const c = this.matches(He) ? this : I.prev(this, He)[0] || I.next(this, He)[0] || I.findOne(He, e.delegateTarget.parentNode)
                    , d = he.getOrCreateInstance(c);
                  if (o) {
                      e.stopPropagation(),
                      d.show(),
                      d._selectMenuItem(e);
                      return
                  }
                  d._isShown() && (e.stopPropagation(),
                  d.hide(),
                  c.focus())
              }
          }
          x.on(document, Pi, He, he.dataApiKeydownHandler),
          x.on(document, Pi, Ft, he.dataApiKeydownHandler),
          x.on(document, $i, he.clearMenus),
          x.on(document, Ns, he.clearMenus),
          x.on(document, $i, He, function(n) {
              n.preventDefault(),
              he.getOrCreateInstance(this).toggle()
          }),
          $(he);
          const Ri = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            , Vi = ".sticky-top"
            , Yt = "padding-right"
            , Hi = "margin-right";
          class Cn {
              constructor() {
                  this._element = document.body
              }
              getWidth() {
                  const e = document.documentElement.clientWidth;
                  return Math.abs(window.innerWidth - e)
              }
              hide() {
                  const e = this.getWidth();
                  this._disableOverFlow(),
                  this._setElementAttributes(this._element, Yt, t=>t + e),
                  this._setElementAttributes(Ri, Yt, t=>t + e),
                  this._setElementAttributes(Vi, Hi, t=>t - e)
              }
              reset() {
                  this._resetElementAttributes(this._element, "overflow"),
                  this._resetElementAttributes(this._element, Yt),
                  this._resetElementAttributes(Ri, Yt),
                  this._resetElementAttributes(Vi, Hi)
              }
              isOverflowing() {
                  return this.getWidth() > 0
              }
              _disableOverFlow() {
                  this._saveInitialAttribute(this._element, "overflow"),
                  this._element.style.overflow = "hidden"
              }
              _setElementAttributes(e, t, i) {
                  const o = this.getWidth()
                    , c = d=>{
                      if (d !== this._element && window.innerWidth > d.clientWidth + o)
                          return;
                      this._saveInitialAttribute(d, t);
                      const y = window.getComputedStyle(d).getPropertyValue(t);
                      d.style.setProperty(t, `${i(Number.parseFloat(y))}px`)
                  }
                  ;
                  this._applyManipulationCallback(e, c)
              }
              _saveInitialAttribute(e, t) {
                  const i = e.style.getPropertyValue(t);
                  i && be.setDataAttribute(e, t, i)
              }
              _resetElementAttributes(e, t) {
                  const i = o=>{
                      const c = be.getDataAttribute(o, t);
                      if (c === null) {
                          o.style.removeProperty(t);
                          return
                      }
                      be.removeDataAttribute(o, t),
                      o.style.setProperty(t, c)
                  }
                  ;
                  this._applyManipulationCallback(e, i)
              }
              _applyManipulationCallback(e, t) {
                  if (E(e)) {
                      t(e);
                      return
                  }
                  for (const i of I.find(e, this._element))
                      t(i)
              }
          }
          const ki = "backdrop"
            , Zs = "fade"
            , zi = "show"
            , Wi = `mousedown.bs.${ki}`
            , Js = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body"
          }
            , qs = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)"
          };
          class Ki extends vt {
              constructor(e) {
                  super(),
                  this._config = this._getConfig(e),
                  this._isAppended = !1,
                  this._element = null
              }
              static get Default() {
                  return Js
              }
              static get DefaultType() {
                  return qs
              }
              static get NAME() {
                  return ki
              }
              show(e) {
                  if (!this._config.isVisible) {
                      z(e);
                      return
                  }
                  this._append();
                  const t = this._getElement();
                  this._config.isAnimated && j(t),
                  t.classList.add(zi),
                  this._emulateAnimation(()=>{
                      z(e)
                  }
                  )
              }
              hide(e) {
                  if (!this._config.isVisible) {
                      z(e);
                      return
                  }
                  this._getElement().classList.remove(zi),
                  this._emulateAnimation(()=>{
                      this.dispose(),
                      z(e)
                  }
                  )
              }
              dispose() {
                  this._isAppended && (x.off(this._element, Wi),
                  this._element.remove(),
                  this._isAppended = !1)
              }
              _getElement() {
                  if (!this._element) {
                      const e = document.createElement("div");
                      e.className = this._config.className,
                      this._config.isAnimated && e.classList.add(Zs),
                      this._element = e
                  }
                  return this._element
              }
              _configAfterMerge(e) {
                  return e.rootElement = w(e.rootElement),
                  e
              }
              _append() {
                  if (this._isAppended)
                      return;
                  const e = this._getElement();
                  this._config.rootElement.append(e),
                  x.on(e, Wi, ()=>{
                      z(this._config.clickCallback)
                  }
                  ),
                  this._isAppended = !0
              }
              _emulateAnimation(e) {
                  de(e, this._getElement(), this._config.isAnimated)
              }
          }
          const ea = "focustrap"
            , Gt = ".bs.focustrap"
            , ta = `focusin${Gt}`
            , na = `keydown.tab${Gt}`
            , ia = "Tab"
            , ra = "forward"
            , Bi = "backward"
            , oa = {
              autofocus: !0,
              trapElement: null
          }
            , sa = {
              autofocus: "boolean",
              trapElement: "element"
          };
          class Fi extends vt {
              constructor(e) {
                  super(),
                  this._config = this._getConfig(e),
                  this._isActive = !1,
                  this._lastTabNavDirection = null
              }
              static get Default() {
                  return oa
              }
              static get DefaultType() {
                  return sa
              }
              static get NAME() {
                  return ea
              }
              activate() {
                  this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
                  x.off(document, Gt),
                  x.on(document, ta, e=>this._handleFocusin(e)),
                  x.on(document, na, e=>this._handleKeydown(e)),
                  this._isActive = !0)
              }
              deactivate() {
                  this._isActive && (this._isActive = !1,
                  x.off(document, Gt))
              }
              _handleFocusin(e) {
                  const {trapElement: t} = this._config;
                  if (e.target === document || e.target === t || t.contains(e.target))
                      return;
                  const i = I.focusableChildren(t);
                  i.length === 0 ? t.focus() : this._lastTabNavDirection === Bi ? i[i.length - 1].focus() : i[0].focus()
              }
              _handleKeydown(e) {
                  e.key === ia && (this._lastTabNavDirection = e.shiftKey ? Bi : ra)
              }
          }
          const aa = "modal"
            , fe = ".bs.modal"
            , la = ".data-api"
            , ca = "Escape"
            , da = `hide${fe}`
            , ua = `hidePrevented${fe}`
            , Yi = `hidden${fe}`
            , Gi = `show${fe}`
            , pa = `shown${fe}`
            , ha = `resize${fe}`
            , fa = `click.dismiss${fe}`
            , ya = `mousedown.dismiss${fe}`
            , ma = `keydown.dismiss${fe}`
            , ga = `click${fe}${la}`
            , Ui = "modal-open"
            , va = "fade"
            , Xi = "show"
            , Nn = "modal-static"
            , xa = ".modal.show"
            , _a = ".modal-dialog"
            , Ea = ".modal-body"
            , ba = '[data-bs-toggle="modal"]'
            , Aa = {
              backdrop: !0,
              focus: !0,
              keyboard: !0
          }
            , wa = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean"
          };
          class ke extends pe {
              constructor(e, t) {
                  super(e, t),
                  this._dialog = I.findOne(_a, this._element),
                  this._backdrop = this._initializeBackDrop(),
                  this._focustrap = this._initializeFocusTrap(),
                  this._isShown = !1,
                  this._isTransitioning = !1,
                  this._scrollBar = new Cn,
                  this._addEventListeners()
              }
              static get Default() {
                  return Aa
              }
              static get DefaultType() {
                  return wa
              }
              static get NAME() {
                  return aa
              }
              toggle(e) {
                  return this._isShown ? this.hide() : this.show(e)
              }
              show(e) {
                  this._isShown || this._isTransitioning || x.trigger(this._element, Gi, {
                      relatedTarget: e
                  }).defaultPrevented || (this._isShown = !0,
                  this._isTransitioning = !0,
                  this._scrollBar.hide(),
                  document.body.classList.add(Ui),
                  this._adjustDialog(),
                  this._backdrop.show(()=>this._showElement(e)))
              }
              hide() {
                  !this._isShown || this._isTransitioning || x.trigger(this._element, da).defaultPrevented || (this._isShown = !1,
                  this._isTransitioning = !0,
                  this._focustrap.deactivate(),
                  this._element.classList.remove(Xi),
                  this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated()))
              }
              dispose() {
                  for (const e of [window, this._dialog])
                      x.off(e, fe);
                  this._backdrop.dispose(),
                  this._focustrap.deactivate(),
                  super.dispose()
              }
              handleUpdate() {
                  this._adjustDialog()
              }
              _initializeBackDrop() {
                  return new Ki({
                      isVisible: !!this._config.backdrop,
                      isAnimated: this._isAnimated()
                  })
              }
              _initializeFocusTrap() {
                  return new Fi({
                      trapElement: this._element
                  })
              }
              _showElement(e) {
                  document.body.contains(this._element) || document.body.append(this._element),
                  this._element.style.display = "block",
                  this._element.removeAttribute("aria-hidden"),
                  this._element.setAttribute("aria-modal", !0),
                  this._element.setAttribute("role", "dialog"),
                  this._element.scrollTop = 0;
                  const t = I.findOne(Ea, this._dialog);
                  t && (t.scrollTop = 0),
                  j(this._element),
                  this._element.classList.add(Xi);
                  const i = ()=>{
                      this._config.focus && this._focustrap.activate(),
                      this._isTransitioning = !1,
                      x.trigger(this._element, pa, {
                          relatedTarget: e
                      })
                  }
                  ;
                  this._queueCallback(i, this._dialog, this._isAnimated())
              }
              _addEventListeners() {
                  x.on(this._element, ma, e=>{
                      if (e.key === ca) {
                          if (this._config.keyboard) {
                              e.preventDefault(),
                              this.hide();
                              return
                          }
                          this._triggerBackdropTransition()
                      }
                  }
                  ),
                  x.on(window, ha, ()=>{
                      this._isShown && !this._isTransitioning && this._adjustDialog()
                  }
                  ),
                  x.on(this._element, ya, e=>{
                      x.one(this._element, fa, t=>{
                          if (!(this._element !== e.target || this._element !== t.target)) {
                              if (this._config.backdrop === "static") {
                                  this._triggerBackdropTransition();
                                  return
                              }
                              this._config.backdrop && this.hide()
                          }
                      }
                      )
                  }
                  )
              }
              _hideModal() {
                  this._element.style.display = "none",
                  this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._isTransitioning = !1,
                  this._backdrop.hide(()=>{
                      document.body.classList.remove(Ui),
                      this._resetAdjustments(),
                      this._scrollBar.reset(),
                      x.trigger(this._element, Yi)
                  }
                  )
              }
              _isAnimated() {
                  return this._element.classList.contains(va)
              }
              _triggerBackdropTransition() {
                  if (x.trigger(this._element, ua).defaultPrevented)
                      return;
                  const t = this._element.scrollHeight > document.documentElement.clientHeight
                    , i = this._element.style.overflowY;
                  i === "hidden" || this._element.classList.contains(Nn) || (t || (this._element.style.overflowY = "hidden"),
                  this._element.classList.add(Nn),
                  this._queueCallback(()=>{
                      this._element.classList.remove(Nn),
                      this._queueCallback(()=>{
                          this._element.style.overflowY = i
                      }
                      , this._dialog)
                  }
                  , this._dialog),
                  this._element.focus())
              }
              _adjustDialog() {
                  const e = this._element.scrollHeight > document.documentElement.clientHeight
                    , t = this._scrollBar.getWidth()
                    , i = t > 0;
                  if (i && !e) {
                      const o = L() ? "paddingLeft" : "paddingRight";
                      this._element.style[o] = `${t}px`
                  }
                  if (!i && e) {
                      const o = L() ? "paddingRight" : "paddingLeft";
                      this._element.style[o] = `${t}px`
                  }
              }
              _resetAdjustments() {
                  this._element.style.paddingLeft = "",
                  this._element.style.paddingRight = ""
              }
              static jQueryInterface(e, t) {
                  return this.each(function() {
                      const i = ke.getOrCreateInstance(this, e);
                      if (typeof e == "string") {
                          if (typeof i[e] > "u")
                              throw new TypeError(`No method named "${e}"`);
                          i[e](t)
                      }
                  })
              }
          }
          x.on(document, ga, ba, function(n) {
              const e = p(this);
              ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
              x.one(e, Gi, o=>{
                  o.defaultPrevented || x.one(e, Yi, ()=>{
                      _(this) && this.focus()
                  }
                  )
              }
              );
              const t = I.findOne(xa);
              t && ke.getInstance(t).hide(),
              ke.getOrCreateInstance(e).toggle(this)
          }),
          It(ke),
          $(ke);
          const ja = "offcanvas"
            , we = ".bs.offcanvas"
            , Qi = ".data-api"
            , Ta = `load${we}${Qi}`
            , Oa = "Escape"
            , Zi = "show"
            , Ji = "showing"
            , qi = "hiding"
            , Sa = "offcanvas-backdrop"
            , er = ".offcanvas.show"
            , Ma = `show${we}`
            , Ca = `shown${we}`
            , Na = `hide${we}`
            , tr = `hidePrevented${we}`
            , nr = `hidden${we}`
            , La = `resize${we}`
            , Da = `click${we}${Qi}`
            , Ia = `keydown.dismiss${we}`
            , $a = '[data-bs-toggle="offcanvas"]'
            , Pa = {
              backdrop: !0,
              keyboard: !0,
              scroll: !1
          }
            , Ra = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean"
          };
          class je extends pe {
              constructor(e, t) {
                  super(e, t),
                  this._isShown = !1,
                  this._backdrop = this._initializeBackDrop(),
                  this._focustrap = this._initializeFocusTrap(),
                  this._addEventListeners()
              }
              static get Default() {
                  return Pa
              }
              static get DefaultType() {
                  return Ra
              }
              static get NAME() {
                  return ja
              }
              toggle(e) {
                  return this._isShown ? this.hide() : this.show(e)
              }
              show(e) {
                  if (this._isShown || x.trigger(this._element, Ma, {
                      relatedTarget: e
                  }).defaultPrevented)
                      return;
                  this._isShown = !0,
                  this._backdrop.show(),
                  this._config.scroll || new Cn().hide(),
                  this._element.setAttribute("aria-modal", !0),
                  this._element.setAttribute("role", "dialog"),
                  this._element.classList.add(Ji);
                  const i = ()=>{
                      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(),
                      this._element.classList.add(Zi),
                      this._element.classList.remove(Ji),
                      x.trigger(this._element, Ca, {
                          relatedTarget: e
                      })
                  }
                  ;
                  this._queueCallback(i, this._element, !0)
              }
              hide() {
                  if (!this._isShown || x.trigger(this._element, Na).defaultPrevented)
                      return;
                  this._focustrap.deactivate(),
                  this._element.blur(),
                  this._isShown = !1,
                  this._element.classList.add(qi),
                  this._backdrop.hide();
                  const t = ()=>{
                      this._element.classList.remove(Zi, qi),
                      this._element.removeAttribute("aria-modal"),
                      this._element.removeAttribute("role"),
                      this._config.scroll || new Cn().reset(),
                      x.trigger(this._element, nr)
                  }
                  ;
                  this._queueCallback(t, this._element, !0)
              }
              dispose() {
                  this._backdrop.dispose(),
                  this._focustrap.deactivate(),
                  super.dispose()
              }
              _initializeBackDrop() {
                  const e = ()=>{
                      if (this._config.backdrop === "static") {
                          x.trigger(this._element, tr);
                          return
                      }
                      this.hide()
                  }
                    , t = !!this._config.backdrop;
                  return new Ki({
                      className: Sa,
                      isVisible: t,
                      isAnimated: !0,
                      rootElement: this._element.parentNode,
                      clickCallback: t ? e : null
                  })
              }
              _initializeFocusTrap() {
                  return new Fi({
                      trapElement: this._element
                  })
              }
              _addEventListeners() {
                  x.on(this._element, Ia, e=>{
                      if (e.key === Oa) {
                          if (!this._config.keyboard) {
                              x.trigger(this._element, tr);
                              return
                          }
                          this.hide()
                      }
                  }
                  )
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = je.getOrCreateInstance(this, e);
                      if (typeof e == "string") {
                          if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                              throw new TypeError(`No method named "${e}"`);
                          t[e](this)
                      }
                  })
              }
          }
          x.on(document, Da, $a, function(n) {
              const e = p(this);
              if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
              v(this))
                  return;
              x.one(e, nr, ()=>{
                  _(this) && this.focus()
              }
              );
              const t = I.findOne(er);
              t && t !== e && je.getInstance(t).hide(),
              je.getOrCreateInstance(e).toggle(this)
          }),
          x.on(window, Ta, ()=>{
              for (const n of I.find(er))
                  je.getOrCreateInstance(n).show()
          }
          ),
          x.on(window, La, ()=>{
              for (const n of I.find("[aria-modal][class*=show][class*=offcanvas-]"))
                  getComputedStyle(n).position !== "fixed" && je.getOrCreateInstance(n).hide()
          }
          ),
          It(je),
          $(je);
          const Va = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
            , Ha = /^aria-[\w-]*$/i
            , ka = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
            , za = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
            , Wa = (n,e)=>{
              const t = n.nodeName.toLowerCase();
              return e.includes(t) ? Va.has(t) ? !!(ka.test(n.nodeValue) || za.test(n.nodeValue)) : !0 : e.filter(i=>i instanceof RegExp).some(i=>i.test(t))
          }
            , ir = {
              "*": ["class", "dir", "id", "lang", "role", Ha],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: []
          };
          function Ka(n, e, t) {
              if (!n.length)
                  return n;
              if (t && typeof t == "function")
                  return t(n);
              const o = new window.DOMParser().parseFromString(n, "text/html")
                , c = [].concat(...o.body.querySelectorAll("*"));
              for (const d of c) {
                  const y = d.nodeName.toLowerCase();
                  if (!Object.keys(e).includes(y)) {
                      d.remove();
                      continue
                  }
                  const b = [].concat(...d.attributes)
                    , M = [].concat(e["*"] || [], e[y] || []);
                  for (const A of b)
                      Wa(A, M) || d.removeAttribute(A.nodeName)
              }
              return o.body.innerHTML
          }
          const Ba = "TemplateFactory"
            , Fa = {
              allowList: ir,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>"
          }
            , Ya = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string"
          }
            , Ga = {
              entry: "(string|element|function|null)",
              selector: "(string|element)"
          };
          class Ua extends vt {
              constructor(e) {
                  super(),
                  this._config = this._getConfig(e)
              }
              static get Default() {
                  return Fa
              }
              static get DefaultType() {
                  return Ya
              }
              static get NAME() {
                  return Ba
              }
              getContent() {
                  return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)
              }
              hasContent() {
                  return this.getContent().length > 0
              }
              changeContent(e) {
                  return this._checkContent(e),
                  this._config.content = {
                      ...this._config.content,
                      ...e
                  },
                  this
              }
              toHtml() {
                  const e = document.createElement("div");
                  e.innerHTML = this._maybeSanitize(this._config.template);
                  for (const [o,c] of Object.entries(this._config.content))
                      this._setContent(e, c, o);
                  const t = e.children[0]
                    , i = this._resolvePossibleFunction(this._config.extraClass);
                  return i && t.classList.add(...i.split(" ")),
                  t
              }
              _typeCheckConfig(e) {
                  super._typeCheckConfig(e),
                  this._checkContent(e.content)
              }
              _checkContent(e) {
                  for (const [t,i] of Object.entries(e))
                      super._typeCheckConfig({
                          selector: t,
                          entry: i
                      }, Ga)
              }
              _setContent(e, t, i) {
                  const o = I.findOne(i, e);
                  if (o) {
                      if (t = this._resolvePossibleFunction(t),
                      !t) {
                          o.remove();
                          return
                      }
                      if (E(t)) {
                          this._putElementInTemplate(w(t), o);
                          return
                      }
                      if (this._config.html) {
                          o.innerHTML = this._maybeSanitize(t);
                          return
                      }
                      o.textContent = t
                  }
              }
              _maybeSanitize(e) {
                  return this._config.sanitize ? Ka(e, this._config.allowList, this._config.sanitizeFn) : e
              }
              _resolvePossibleFunction(e) {
                  return typeof e == "function" ? e(this) : e
              }
              _putElementInTemplate(e, t) {
                  if (this._config.html) {
                      t.innerHTML = "",
                      t.append(e);
                      return
                  }
                  t.textContent = e.textContent
              }
          }
          const Xa = "tooltip"
            , Qa = new Set(["sanitize", "allowList", "sanitizeFn"])
            , Ln = "fade"
            , Za = "modal"
            , Ut = "show"
            , Ja = ".tooltip-inner"
            , rr = `.${Za}`
            , or = "hide.bs.modal"
            , Tt = "hover"
            , Dn = "focus"
            , qa = "click"
            , el = "manual"
            , tl = "hide"
            , nl = "hidden"
            , il = "show"
            , rl = "shown"
            , ol = "inserted"
            , sl = "click"
            , al = "focusin"
            , ll = "focusout"
            , cl = "mouseenter"
            , dl = "mouseleave"
            , ul = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: L() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: L() ? "right" : "left"
          }
            , pl = {
              allowList: ir,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 0],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus"
          }
            , hl = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string"
          };
          class ze extends pe {
              constructor(e, t) {
                  if (typeof Ni > "u")
                      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                  super(e, t),
                  this._isEnabled = !0,
                  this._timeout = 0,
                  this._isHovered = null,
                  this._activeTrigger = {},
                  this._popper = null,
                  this._templateFactory = null,
                  this._newContent = null,
                  this.tip = null,
                  this._setListeners(),
                  this._config.selector || this._fixTitle()
              }
              static get Default() {
                  return pl
              }
              static get DefaultType() {
                  return hl
              }
              static get NAME() {
                  return Xa
              }
              enable() {
                  this._isEnabled = !0
              }
              disable() {
                  this._isEnabled = !1
              }
              toggleEnabled() {
                  this._isEnabled = !this._isEnabled
              }
              toggle() {
                  if (this._isEnabled) {
                      if (this._activeTrigger.click = !this._activeTrigger.click,
                      this._isShown()) {
                          this._leave();
                          return
                      }
                      this._enter()
                  }
              }
              dispose() {
                  clearTimeout(this._timeout),
                  x.off(this._element.closest(rr), or, this._hideModalHandler),
                  this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                  this._disposePopper(),
                  super.dispose()
              }
              show() {
                  if (this._element.style.display === "none")
                      throw new Error("Please use show on visible elements");
                  if (!(this._isWithContent() && this._isEnabled))
                      return;
                  const e = x.trigger(this._element, this.constructor.eventName(il))
                    , i = (O(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                  if (e.defaultPrevented || !i)
                      return;
                  this._disposePopper();
                  const o = this._getTipElement();
                  this._element.setAttribute("aria-describedby", o.getAttribute("id"));
                  const {container: c} = this._config;
                  if (this._element.ownerDocument.documentElement.contains(this.tip) || (c.append(o),
                  x.trigger(this._element, this.constructor.eventName(ol))),
                  this._popper = this._createPopper(o),
                  o.classList.add(Ut),
                  "ontouchstart"in document.documentElement)
                      for (const y of [].concat(...document.body.children))
                          x.on(y, "mouseover", T);
                  const d = ()=>{
                      x.trigger(this._element, this.constructor.eventName(rl)),
                      this._isHovered === !1 && this._leave(),
                      this._isHovered = !1
                  }
                  ;
                  this._queueCallback(d, this.tip, this._isAnimated())
              }
              hide() {
                  if (!this._isShown() || x.trigger(this._element, this.constructor.eventName(tl)).defaultPrevented)
                      return;
                  if (this._getTipElement().classList.remove(Ut),
                  "ontouchstart"in document.documentElement)
                      for (const o of [].concat(...document.body.children))
                          x.off(o, "mouseover", T);
                  this._activeTrigger[qa] = !1,
                  this._activeTrigger[Dn] = !1,
                  this._activeTrigger[Tt] = !1,
                  this._isHovered = null;
                  const i = ()=>{
                      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                      this._element.removeAttribute("aria-describedby"),
                      x.trigger(this._element, this.constructor.eventName(nl)))
                  }
                  ;
                  this._queueCallback(i, this.tip, this._isAnimated())
              }
              update() {
                  this._popper && this._popper.update()
              }
              _isWithContent() {
                  return !!this._getTitle()
              }
              _getTipElement() {
                  return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
                  this.tip
              }
              _createTipElement(e) {
                  const t = this._getTemplateFactory(e).toHtml();
                  if (!t)
                      return null;
                  t.classList.remove(Ln, Ut),
                  t.classList.add(`bs-${this.constructor.NAME}-auto`);
                  const i = s(this.constructor.NAME).toString();
                  return t.setAttribute("id", i),
                  this._isAnimated() && t.classList.add(Ln),
                  t
              }
              setContent(e) {
                  this._newContent = e,
                  this._isShown() && (this._disposePopper(),
                  this.show())
              }
              _getTemplateFactory(e) {
                  return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Ua({
                      ...this._config,
                      content: e,
                      extraClass: this._resolvePossibleFunction(this._config.customClass)
                  }),
                  this._templateFactory
              }
              _getContentForTemplate() {
                  return {
                      [Ja]: this._getTitle()
                  }
              }
              _getTitle() {
                  return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
              }
              _initializeOnDelegatedTarget(e) {
                  return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
              }
              _isAnimated() {
                  return this._config.animation || this.tip && this.tip.classList.contains(Ln)
              }
              _isShown() {
                  return this.tip && this.tip.classList.contains(Ut)
              }
              _createPopper(e) {
                  const t = typeof this._config.placement == "function" ? this._config.placement.call(this, e, this._element) : this._config.placement
                    , i = ul[t.toUpperCase()];
                  return Sn(this._element, e, this._getPopperConfig(i))
              }
              _getOffset() {
                  const {offset: e} = this._config;
                  return typeof e == "string" ? e.split(",").map(t=>Number.parseInt(t, 10)) : typeof e == "function" ? t=>e(t, this._element) : e
              }
              _resolvePossibleFunction(e) {
                  return typeof e == "function" ? e.call(this._element) : e
              }
              _getPopperConfig(e) {
                  const t = {
                      placement: e,
                      modifiers: [{
                          name: "flip",
                          options: {
                              fallbackPlacements: this._config.fallbackPlacements
                          }
                      }, {
                          name: "offset",
                          options: {
                              offset: this._getOffset()
                          }
                      }, {
                          name: "preventOverflow",
                          options: {
                              boundary: this._config.boundary
                          }
                      }, {
                          name: "arrow",
                          options: {
                              element: `.${this.constructor.NAME}-arrow`
                          }
                      }, {
                          name: "preSetPlacement",
                          enabled: !0,
                          phase: "beforeMain",
                          fn: i=>{
                              this._getTipElement().setAttribute("data-popper-placement", i.state.placement)
                          }
                      }]
                  };
                  return {
                      ...t,
                      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
                  }
              }
              _setListeners() {
                  const e = this._config.trigger.split(" ");
                  for (const t of e)
                      if (t === "click")
                          x.on(this._element, this.constructor.eventName(sl), this._config.selector, i=>{
                              this._initializeOnDelegatedTarget(i).toggle()
                          }
                          );
                      else if (t !== el) {
                          const i = t === Tt ? this.constructor.eventName(cl) : this.constructor.eventName(al)
                            , o = t === Tt ? this.constructor.eventName(dl) : this.constructor.eventName(ll);
                          x.on(this._element, i, this._config.selector, c=>{
                              const d = this._initializeOnDelegatedTarget(c);
                              d._activeTrigger[c.type === "focusin" ? Dn : Tt] = !0,
                              d._enter()
                          }
                          ),
                          x.on(this._element, o, this._config.selector, c=>{
                              const d = this._initializeOnDelegatedTarget(c);
                              d._activeTrigger[c.type === "focusout" ? Dn : Tt] = d._element.contains(c.relatedTarget),
                              d._leave()
                          }
                          )
                      }
                  this._hideModalHandler = ()=>{
                      this._element && this.hide()
                  }
                  ,
                  x.on(this._element.closest(rr), or, this._hideModalHandler)
              }
              _fixTitle() {
                  const e = this._element.getAttribute("title");
                  e && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", e),
                  this._element.setAttribute("data-bs-original-title", e),
                  this._element.removeAttribute("title"))
              }
              _enter() {
                  if (this._isShown() || this._isHovered) {
                      this._isHovered = !0;
                      return
                  }
                  this._isHovered = !0,
                  this._setTimeout(()=>{
                      this._isHovered && this.show()
                  }
                  , this._config.delay.show)
              }
              _leave() {
                  this._isWithActiveTrigger() || (this._isHovered = !1,
                  this._setTimeout(()=>{
                      this._isHovered || this.hide()
                  }
                  , this._config.delay.hide))
              }
              _setTimeout(e, t) {
                  clearTimeout(this._timeout),
                  this._timeout = setTimeout(e, t)
              }
              _isWithActiveTrigger() {
                  return Object.values(this._activeTrigger).includes(!0)
              }
              _getConfig(e) {
                  const t = be.getDataAttributes(this._element);
                  for (const i of Object.keys(t))
                      Qa.has(i) && delete t[i];
                  return e = {
                      ...t,
                      ...typeof e == "object" && e ? e : {}
                  },
                  e = this._mergeConfigObj(e),
                  e = this._configAfterMerge(e),
                  this._typeCheckConfig(e),
                  e
              }
              _configAfterMerge(e) {
                  return e.container = e.container === !1 ? document.body : w(e.container),
                  typeof e.delay == "number" && (e.delay = {
                      show: e.delay,
                      hide: e.delay
                  }),
                  typeof e.title == "number" && (e.title = e.title.toString()),
                  typeof e.content == "number" && (e.content = e.content.toString()),
                  e
              }
              _getDelegateConfig() {
                  const e = {};
                  for (const t in this._config)
                      this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                  return e.selector = !1,
                  e.trigger = "manual",
                  e
              }
              _disposePopper() {
                  this._popper && (this._popper.destroy(),
                  this._popper = null),
                  this.tip && (this.tip.remove(),
                  this.tip = null)
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = ze.getOrCreateInstance(this, e);
                      if (typeof e == "string") {
                          if (typeof t[e] > "u")
                              throw new TypeError(`No method named "${e}"`);
                          t[e]()
                      }
                  })
              }
          }
          $(ze);
          const fl = "popover"
            , yl = ".popover-header"
            , ml = ".popover-body"
            , gl = {
              ...ze.Default,
              content: "",
              offset: [0, 8],
              placement: "right",
              template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: "click"
          }
            , vl = {
              ...ze.DefaultType,
              content: "(null|string|element|function)"
          };
          class Xt extends ze {
              static get Default() {
                  return gl
              }
              static get DefaultType() {
                  return vl
              }
              static get NAME() {
                  return fl
              }
              _isWithContent() {
                  return this._getTitle() || this._getContent()
              }
              _getContentForTemplate() {
                  return {
                      [yl]: this._getTitle(),
                      [ml]: this._getContent()
                  }
              }
              _getContent() {
                  return this._resolvePossibleFunction(this._config.content)
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = Xt.getOrCreateInstance(this, e);
                      if (typeof e == "string") {
                          if (typeof t[e] > "u")
                              throw new TypeError(`No method named "${e}"`);
                          t[e]()
                      }
                  })
              }
          }
          $(Xt);
          const xl = "scrollspy"
            , In = ".bs.scrollspy"
            , _l = ".data-api"
            , El = `activate${In}`
            , sr = `click${In}`
            , bl = `load${In}${_l}`
            , Al = "dropdown-item"
            , pt = "active"
            , wl = '[data-bs-spy="scroll"]'
            , $n = "[href]"
            , jl = ".nav, .list-group"
            , ar = ".nav-link"
            , Tl = `${ar}, .nav-item > ${ar}, .list-group-item`
            , Ol = ".dropdown"
            , Sl = ".dropdown-toggle"
            , Ml = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [.1, .5, 1]
          }
            , Cl = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array"
          };
          class Ot extends pe {
              constructor(e, t) {
                  super(e, t),
                  this._targetLinks = new Map,
                  this._observableSections = new Map,
                  this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element,
                  this._activeTarget = null,
                  this._observer = null,
                  this._previousScrollData = {
                      visibleEntryTop: 0,
                      parentScrollTop: 0
                  },
                  this.refresh()
              }
              static get Default() {
                  return Ml
              }
              static get DefaultType() {
                  return Cl
              }
              static get NAME() {
                  return xl
              }
              refresh() {
                  this._initializeTargetsAndObservables(),
                  this._maybeEnableSmoothScroll(),
                  this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                  for (const e of this._observableSections.values())
                      this._observer.observe(e)
              }
              dispose() {
                  this._observer.disconnect(),
                  super.dispose()
              }
              _configAfterMerge(e) {
                  return e.target = w(e.target) || document.body,
                  e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin,
                  typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map(t=>Number.parseFloat(t))),
                  e
              }
              _maybeEnableSmoothScroll() {
                  this._config.smoothScroll && (x.off(this._config.target, sr),
                  x.on(this._config.target, sr, $n, e=>{
                      const t = this._observableSections.get(e.target.hash);
                      if (t) {
                          e.preventDefault();
                          const i = this._rootElement || window
                            , o = t.offsetTop - this._element.offsetTop;
                          if (i.scrollTo) {
                              i.scrollTo({
                                  top: o,
                                  behavior: "smooth"
                              });
                              return
                          }
                          i.scrollTop = o
                      }
                  }
                  ))
              }
              _getNewObserver() {
                  const e = {
                      root: this._rootElement,
                      threshold: this._config.threshold,
                      rootMargin: this._config.rootMargin
                  };
                  return new IntersectionObserver(t=>this._observerCallback(t),e)
              }
              _observerCallback(e) {
                  const t = d=>this._targetLinks.get(`#${d.target.id}`)
                    , i = d=>{
                      this._previousScrollData.visibleEntryTop = d.target.offsetTop,
                      this._process(t(d))
                  }
                    , o = (this._rootElement || document.documentElement).scrollTop
                    , c = o >= this._previousScrollData.parentScrollTop;
                  this._previousScrollData.parentScrollTop = o;
                  for (const d of e) {
                      if (!d.isIntersecting) {
                          this._activeTarget = null,
                          this._clearActiveClass(t(d));
                          continue
                      }
                      const y = d.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                      if (c && y) {
                          if (i(d),
                          !o)
                              return;
                          continue
                      }
                      !c && !y && i(d)
                  }
              }
              _initializeTargetsAndObservables() {
                  this._targetLinks = new Map,
                  this._observableSections = new Map;
                  const e = I.find($n, this._config.target);
                  for (const t of e) {
                      if (!t.hash || v(t))
                          continue;
                      const i = I.findOne(t.hash, this._element);
                      _(i) && (this._targetLinks.set(t.hash, t),
                      this._observableSections.set(t.hash, i))
                  }
              }
              _process(e) {
                  this._activeTarget !== e && (this._clearActiveClass(this._config.target),
                  this._activeTarget = e,
                  e.classList.add(pt),
                  this._activateParents(e),
                  x.trigger(this._element, El, {
                      relatedTarget: e
                  }))
              }
              _activateParents(e) {
                  if (e.classList.contains(Al)) {
                      I.findOne(Sl, e.closest(Ol)).classList.add(pt);
                      return
                  }
                  for (const t of I.parents(e, jl))
                      for (const i of I.prev(t, Tl))
                          i.classList.add(pt)
              }
              _clearActiveClass(e) {
                  e.classList.remove(pt);
                  const t = I.find(`${$n}.${pt}`, e);
                  for (const i of t)
                      i.classList.remove(pt)
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = Ot.getOrCreateInstance(this, e);
                      if (typeof e == "string") {
                          if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                              throw new TypeError(`No method named "${e}"`);
                          t[e]()
                      }
                  })
              }
          }
          x.on(window, bl, ()=>{
              for (const n of I.find(wl))
                  Ot.getOrCreateInstance(n)
          }
          ),
          $(Ot);
          const Nl = "tab"
            , We = ".bs.tab"
            , Ll = `hide${We}`
            , Dl = `hidden${We}`
            , Il = `show${We}`
            , $l = `shown${We}`
            , Pl = `click${We}`
            , Rl = `keydown${We}`
            , Vl = `load${We}`
            , Hl = "ArrowLeft"
            , lr = "ArrowRight"
            , kl = "ArrowUp"
            , cr = "ArrowDown"
            , Ke = "active"
            , dr = "fade"
            , Pn = "show"
            , zl = "dropdown"
            , Wl = ".dropdown-toggle"
            , Kl = ".dropdown-menu"
            , Rn = ":not(.dropdown-toggle)"
            , Bl = '.list-group, .nav, [role="tablist"]'
            , Fl = ".nav-item, .list-group-item"
            , Yl = `.nav-link${Rn}, .list-group-item${Rn}, [role="tab"]${Rn}`
            , ur = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
            , Vn = `${Yl}, ${ur}`
            , Gl = `.${Ke}[data-bs-toggle="tab"], .${Ke}[data-bs-toggle="pill"], .${Ke}[data-bs-toggle="list"]`;
          class Be extends pe {
              constructor(e) {
                  super(e),
                  this._parent = this._element.closest(Bl),
                  this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
                  x.on(this._element, Rl, t=>this._keydown(t)))
              }
              static get NAME() {
                  return Nl
              }
              show() {
                  const e = this._element;
                  if (this._elemIsActive(e))
                      return;
                  const t = this._getActiveElem()
                    , i = t ? x.trigger(t, Ll, {
                      relatedTarget: e
                  }) : null;
                  x.trigger(e, Il, {
                      relatedTarget: t
                  }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(t, e),
                  this._activate(e, t))
              }
              _activate(e, t) {
                  if (!e)
                      return;
                  e.classList.add(Ke),
                  this._activate(p(e));
                  const i = ()=>{
                      if (e.getAttribute("role") !== "tab") {
                          e.classList.add(Pn);
                          return
                      }
                      e.removeAttribute("tabindex"),
                      e.setAttribute("aria-selected", !0),
                      this._toggleDropDown(e, !0),
                      x.trigger(e, $l, {
                          relatedTarget: t
                      })
                  }
                  ;
                  this._queueCallback(i, e, e.classList.contains(dr))
              }
              _deactivate(e, t) {
                  if (!e)
                      return;
                  e.classList.remove(Ke),
                  e.blur(),
                  this._deactivate(p(e));
                  const i = ()=>{
                      if (e.getAttribute("role") !== "tab") {
                          e.classList.remove(Pn);
                          return
                      }
                      e.setAttribute("aria-selected", !1),
                      e.setAttribute("tabindex", "-1"),
                      this._toggleDropDown(e, !1),
                      x.trigger(e, Dl, {
                          relatedTarget: t
                      })
                  }
                  ;
                  this._queueCallback(i, e, e.classList.contains(dr))
              }
              _keydown(e) {
                  if (![Hl, lr, kl, cr].includes(e.key))
                      return;
                  e.stopPropagation(),
                  e.preventDefault();
                  const t = [lr, cr].includes(e.key)
                    , i = mt(this._getChildren().filter(o=>!v(o)), e.target, t, !0);
                  i && (i.focus({
                      preventScroll: !0
                  }),
                  Be.getOrCreateInstance(i).show())
              }
              _getChildren() {
                  return I.find(Vn, this._parent)
              }
              _getActiveElem() {
                  return this._getChildren().find(e=>this._elemIsActive(e)) || null
              }
              _setInitialAttributes(e, t) {
                  this._setAttributeIfNotExists(e, "role", "tablist");
                  for (const i of t)
                      this._setInitialAttributesOnChild(i)
              }
              _setInitialAttributesOnChild(e) {
                  e = this._getInnerElement(e);
                  const t = this._elemIsActive(e)
                    , i = this._getOuterElement(e);
                  e.setAttribute("aria-selected", t),
                  i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
                  t || e.setAttribute("tabindex", "-1"),
                  this._setAttributeIfNotExists(e, "role", "tab"),
                  this._setInitialAttributesOnTargetPanel(e)
              }
              _setInitialAttributesOnTargetPanel(e) {
                  const t = p(e);
                  t && (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                  e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`))
              }
              _toggleDropDown(e, t) {
                  const i = this._getOuterElement(e);
                  if (!i.classList.contains(zl))
                      return;
                  const o = (c,d)=>{
                      const y = I.findOne(c, i);
                      y && y.classList.toggle(d, t)
                  }
                  ;
                  o(Wl, Ke),
                  o(Kl, Pn),
                  i.setAttribute("aria-expanded", t)
              }
              _setAttributeIfNotExists(e, t, i) {
                  e.hasAttribute(t) || e.setAttribute(t, i)
              }
              _elemIsActive(e) {
                  return e.classList.contains(Ke)
              }
              _getInnerElement(e) {
                  return e.matches(Vn) ? e : I.findOne(Vn, e)
              }
              _getOuterElement(e) {
                  return e.closest(Fl) || e
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = Be.getOrCreateInstance(this);
                      if (typeof e == "string") {
                          if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                              throw new TypeError(`No method named "${e}"`);
                          t[e]()
                      }
                  })
              }
          }
          x.on(document, Pl, ur, function(n) {
              ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
              !v(this) && Be.getOrCreateInstance(this).show()
          }),
          x.on(window, Vl, ()=>{
              for (const n of I.find(Gl))
                  Be.getOrCreateInstance(n)
          }
          ),
          $(Be);
          const Ul = "toast"
            , Le = ".bs.toast"
            , Xl = `mouseover${Le}`
            , Ql = `mouseout${Le}`
            , Zl = `focusin${Le}`
            , Jl = `focusout${Le}`
            , ql = `hide${Le}`
            , ec = `hidden${Le}`
            , tc = `show${Le}`
            , nc = `shown${Le}`
            , ic = "fade"
            , pr = "hide"
            , Qt = "show"
            , Zt = "showing"
            , rc = {
              animation: "boolean",
              autohide: "boolean",
              delay: "number"
          }
            , oc = {
              animation: !0,
              autohide: !0,
              delay: 5e3
          };
          class St extends pe {
              constructor(e, t) {
                  super(e, t),
                  this._timeout = null,
                  this._hasMouseInteraction = !1,
                  this._hasKeyboardInteraction = !1,
                  this._setListeners()
              }
              static get Default() {
                  return oc
              }
              static get DefaultType() {
                  return rc
              }
              static get NAME() {
                  return Ul
              }
              show() {
                  if (x.trigger(this._element, tc).defaultPrevented)
                      return;
                  this._clearTimeout(),
                  this._config.animation && this._element.classList.add(ic);
                  const t = ()=>{
                      this._element.classList.remove(Zt),
                      x.trigger(this._element, nc),
                      this._maybeScheduleHide()
                  }
                  ;
                  this._element.classList.remove(pr),
                  j(this._element),
                  this._element.classList.add(Qt, Zt),
                  this._queueCallback(t, this._element, this._config.animation)
              }
              hide() {
                  if (!this.isShown() || x.trigger(this._element, ql).defaultPrevented)
                      return;
                  const t = ()=>{
                      this._element.classList.add(pr),
                      this._element.classList.remove(Zt, Qt),
                      x.trigger(this._element, ec)
                  }
                  ;
                  this._element.classList.add(Zt),
                  this._queueCallback(t, this._element, this._config.animation)
              }
              dispose() {
                  this._clearTimeout(),
                  this.isShown() && this._element.classList.remove(Qt),
                  super.dispose()
              }
              isShown() {
                  return this._element.classList.contains(Qt)
              }
              _maybeScheduleHide() {
                  this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                      this.hide()
                  }
                  , this._config.delay)))
              }
              _onInteraction(e, t) {
                  switch (e.type) {
                  case "mouseover":
                  case "mouseout":
                      {
                          this._hasMouseInteraction = t;
                          break
                      }
                  case "focusin":
                  case "focusout":
                      {
                          this._hasKeyboardInteraction = t;
                          break
                      }
                  }
                  if (t) {
                      this._clearTimeout();
                      return
                  }
                  const i = e.relatedTarget;
                  this._element === i || this._element.contains(i) || this._maybeScheduleHide()
              }
              _setListeners() {
                  x.on(this._element, Xl, e=>this._onInteraction(e, !0)),
                  x.on(this._element, Ql, e=>this._onInteraction(e, !1)),
                  x.on(this._element, Zl, e=>this._onInteraction(e, !0)),
                  x.on(this._element, Jl, e=>this._onInteraction(e, !1))
              }
              _clearTimeout() {
                  clearTimeout(this._timeout),
                  this._timeout = null
              }
              static jQueryInterface(e) {
                  return this.each(function() {
                      const t = St.getOrCreateInstance(this, e);
                      if (typeof e == "string") {
                          if (typeof t[e] > "u")
                              throw new TypeError(`No method named "${e}"`);
                          t[e](this)
                      }
                  })
              }
          }
          return It(St),
          $(St),
          {
              Alert: xt,
              Button: _t,
              Carousel: tt,
              Collapse: it,
              Dropdown: he,
              Modal: ke,
              Offcanvas: je,
              Popover: Xt,
              ScrollSpy: Ot,
              Tab: Be,
              Toast: St,
              Tooltip: ze
          }
      })
  }
  )(jr);
  const Tr = on
    , Nt = G=>G.innerWidth > 1200
    , Kn = (G,k=!1)=>{
      const a = G.children;
      let f = 0;
      for (let r = 0; r < G.childElementCount; r++) {
          const l = a[r];
          if (f += l.querySelector(".submenu-link").clientHeight,
          k && l.classList.contains("has-sub")) {
              const s = l.querySelector(".submenu");
              if (s.classList.contains("submenu-open")) {
                  const u = ~~[...s.querySelectorAll(".submenu-link")].reduce((h,p)=>h + p.clientHeight, 0);
                  f += u
              }
          }
      }
      return G.style.setProperty("--submenu-height", f + "px"),
      f
  }
  ;
  class Or {
      constructor(k, a={}) {
          this.sidebarEL = k instanceof HTMLElement ? k : document.querySelector(k),
          this.options = a,
          this.init()
      }
      init() {
          document.querySelectorAll(".burger-btn").forEach(r=>r.addEventListener("click", this.toggle.bind(this))),
          document.querySelectorAll(".sidebar-hide").forEach(r=>r.addEventListener("click", this.toggle.bind(this))),
          window.addEventListener("resize", this.onResize.bind(this));
          const k = r=>{
              r.classList.contains("submenu-open") ? (r.classList.remove("submenu-open"),
              r.classList.add("submenu-closed")) : (r.classList.remove("submenu-closed"),
              r.classList.add("submenu-open"))
          }
          ;
          let a = document.querySelectorAll(".sidebar-item.has-sub");
          for (var f = 0; f < a.length; f++) {
              let r = a[f];
              a[f].querySelector(".sidebar-link").addEventListener("click", s=>{
                  s.preventDefault();
                  let u = r.querySelector(".submenu");
                  k(u)
              }
              ),
              r.querySelectorAll(".submenu-item.has-sub").forEach(s=>{
                  s.addEventListener("click", ()=>{
                      const u = s.querySelector(".submenu");
                      k(u),
                      Kn(s.parentElement, !0)
                  }
                  )
              }
              )
          }
          if (typeof PerfectScrollbar == "function") {
              const r = document.querySelector(".sidebar-wrapper");
              new PerfectScrollbar(r,{
                  wheelPropagation: !1
              })
          }

      }
      onResize() {
          Nt(window) ? this.sidebarEL.classList.add("active") : this.sidebarEL.classList.remove("active"),
          this.deleteBackdrop(),
          this.toggleOverflowBody(!0)
      }
      toggle() {
          this.sidebarEL.classList.contains("active") ? this.hide() : this.show()
      }
      show() {
          this.sidebarEL.classList.add("active"),
          this.sidebarEL.classList.remove("inactive"),
          this.createBackdrop(),
          this.toggleOverflowBody()
      }
      hide() {
          this.sidebarEL.classList.remove("active"),
          this.sidebarEL.classList.add("inactive"),
          this.deleteBackdrop(),
          this.toggleOverflowBody()
      }
      createBackdrop() {
          if (Nt(window))
              return;
          this.deleteBackdrop();
          const k = document.createElement("div");
          k.classList.add("sidebar-backdrop"),
          k.addEventListener("click", this.hide.bind(this)),
          document.body.appendChild(k)
      }
      deleteBackdrop() {
          const k = document.querySelector(".sidebar-backdrop");
          k && k.remove()
      }
      toggleOverflowBody(k) {
          if (Nt(window))
              return;
          const a = this.sidebarEL.classList.contains("active")
            , f = document.querySelector("body");
          typeof k > "u" ? f.style.overflowY = a ? "hidden" : "auto" : f.style.overflowY = k ? "auto" : "hidden"
      }

  }
  let yt = document.getElementById("sidebar");
  const Bn = G=>{
      if (!yt)
          return;
      Nt(window) && (G.classList.add("active"),
      G.classList.add("sidebar-desktop"));
      let k = document.querySelectorAll(".sidebar-item.has-sub .submenu");
      for (var a = 0; a < k.length; a++) {
          let f = k[a];
          const r = f.parentElement;
          f.clientHeight,
          r.classList.contains("active") ? f.classList.add("submenu-open") : f.classList.add("submenu-closed"),
          setTimeout(()=>{
              Kn(f, !0)
          }
          , 50)
      }
  }
  ;
  document.readyState !== "loading" ? Bn(yt) : window.addEventListener("DOMContentLoaded", ()=>Bn(yt)),
  yt && (window.sidebar = new Or(yt)),
  window.bootstrap = Tr,
  wr.replace()
});

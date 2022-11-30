/**
 * @license
 * KLineChart v9.2.2
 * Copyright (c) 2019 lihu.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).klinecharts = {})
      );
})(this, function (t) {
  "use strict";
  function e(t, i) {
    if (r(t) || r(i))
      for (var n in i)
        if (Object.prototype.hasOwnProperty.call(i, n)) {
          var a = t[n],
            l = i[n];
          r(l) && r(a) && !o(l) && !o(a) ? e(a, l) : s(i[n]) && (t[n] = i[n]);
        }
  }
  function i(t) {
    if (!r(t) || !o(t)) return t;
    var e;
    for (var n in ((e = o(t) ? [] : {}), t))
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var a = t[n];
        e[n] = r(a) ? i(a) : a;
      }
    return e;
  }
  function o(t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  }
  function n(t) {
    return "function" == typeof t;
  }
  function r(t) {
    return "object" == typeof t;
  }
  function a(t) {
    return "number" == typeof t && !isNaN(t);
  }
  function s(t) {
    return null != t;
  }
  function l(t) {
    return "boolean" == typeof t;
  }
  function c(t) {
    return "string" == typeof t;
  }
  var u,
    h,
    d,
    p,
    v,
    g,
    f,
    m,
    y,
    _,
    x = /\\(\\)?/g,
    S = RegExp(
      "[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))",
      "g"
    );
  function C(t, e, i) {
    if (s(t)) {
      var o = [];
      e.replace(S, function (t) {
        for (var e = [], i = 1; arguments.length > i; i++)
          e[i - 1] = arguments[i];
        var n = t;
        return (
          s(e[1]) ? (n = e[2].replace(x, "$1")) : s(e[0]) && (n = e[0].trim()),
          o.push(n),
          ""
        );
      });
      for (var n = t, r = 0, a = o.length; s(n) && a > r; )
        n = null == n ? void 0 : n[o[r++]];
      return s(n) ? n : null != i ? i : "--";
    }
    return null != i ? i : "--";
  }
  function b(t, e, i) {
    var o = t.format(new Date(e)).split(", "),
      n = o[0].split("/"),
      r = o[1].split(":"),
      a = {
        YYYY: n[2],
        MM: n[0],
        DD: n[1],
        HH: "24" === r[0] ? "00" : r[0],
        mm: r[1],
        ss: r[2],
      };
    return i.replace(/YYYY|MM|DD|HH|mm|ss/g, function (t) {
      return a[t];
    });
  }
  function w(t, e) {
    var i = +t;
    return a(i) ? i.toFixed(null != e ? e : 2) : "".concat(t);
  }
  function T(t) {
    var e = +t;
    if (a(e)) {
      if (e > 1e9) return "".concat(+(e / 1e9).toFixed(3), "B");
      if (e > 1e6) return "".concat(+(e / 1e6).toFixed(3), "M");
      if (e > 1e3) return "".concat(+(e / 1e3).toFixed(3), "K");
    }
    return "".concat(t);
  }
  function E(t, e) {
    var i = "".concat(t);
    if (0 === e.length) return i;
    if (i.includes(".")) {
      var o = i.split(".");
      return ""
        .concat(
          o[0].replace(/(\d)(?=(\d{3})+$)/g, function (t) {
            return "".concat(t).concat(e);
          }),
          "."
        )
        .concat(o[1]);
    }
    return i.replace(/(\d)(?=(\d{3})+$)/g, function (t) {
      return "".concat(t).concat(e);
    });
  }
  (t.LineType = void 0),
    ((u = t.LineType || (t.LineType = {})).Dashed = "dashed"),
    (u.Solid = "solid"),
    (t.PolygonType = void 0),
    ((h = t.PolygonType || (t.PolygonType = {})).Stroke = "stroke"),
    (h.Fill = "fill"),
    (h.StrokeFill = "stroke_fill"),
    (t.TooltipShowRule = void 0),
    ((d = t.TooltipShowRule || (t.TooltipShowRule = {})).Always = "always"),
    (d.FollowCross = "follow_cross"),
    (d.None = "none"),
    (t.TooltipShowType = void 0),
    ((p = t.TooltipShowType || (t.TooltipShowType = {})).Standard = "standard"),
    (p.Rect = "rect"),
    (t.TooltipIconPosition = void 0),
    ((v = t.TooltipIconPosition || (t.TooltipIconPosition = {})).Left = "left"),
    (v.Middle = "middle"),
    (v.Right = "right"),
    (function (t) {
      (t.Fixed = "fixed"), (t.Pointer = "pointer");
    })(g || (g = {})),
    (t.CandleType = void 0),
    ((f = t.CandleType || (t.CandleType = {})).CandleSolid = "candle_solid"),
    (f.CandleStroke = "candle_stroke"),
    (f.CandleUpStroke = "candle_up_stroke"),
    (f.CandleDownStroke = "candle_down_stroke"),
    (f.Ohlc = "ohlc"),
    (f.Area = "area"),
    (t.YAxisPosition = void 0),
    ((m = t.YAxisPosition || (t.YAxisPosition = {})).Left = "left"),
    (m.Right = "right"),
    (t.YAxisType = void 0),
    ((y = t.YAxisType || (t.YAxisType = {})).Normal = "normal"),
    (y.Percentage = "percentage"),
    (y.Log = "log"),
    (t.FormatDateType = void 0),
    ((_ = t.FormatDateType || (t.FormatDateType = {}))[(_.Tooltip = 0)] =
      "Tooltip"),
    (_[(_.Crosshair = 1)] = "Crosshair"),
    (_[(_.XAxis = 2)] = "XAxis");
  var I = function (t, e) {
    return (
      (I =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        }),
      I(t, e)
    );
  };
  function P(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Class extends value " + e + " is not a constructor or null"
      );
    function i() {
      this.constructor = t;
    }
    I(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
  }
  var D,
    M = function () {
      return (
        (M =
          Object.assign ||
          function (t) {
            for (var e, i = 1, o = arguments.length; o > i; i++)
              for (var n in (e = arguments[i]))
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t;
          }),
        M.apply(this, arguments)
      );
    };
  function k(t, e, i, o) {
    return new (i || (i = Promise))(function (n, r) {
      function a(t) {
        try {
          l(o.next(t));
        } catch (t) {
          r(t);
        }
      }
      function s(t) {
        try {
          l(o.throw(t));
        } catch (t) {
          r(t);
        }
      }
      function l(t) {
        var e;
        t.done
          ? n(t.value)
          : ((e = t.value),
            e instanceof i
              ? e
              : new i(function (t) {
                  t(e);
                })).then(a, s);
      }
      l((o = o.apply(t, e || [])).next());
    });
  }
  function A(t, e) {
    var i,
      o,
      n,
      r,
      a = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (r = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (r[Symbol.iterator] = function () {
          return this;
        }),
      r
    );
    function s(s) {
      return function (l) {
        return (function (s) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; r && ((r = 0), s[0] && (a = 0)), a; )
            try {
              if (
                ((i = 1),
                o &&
                  (n =
                    2 & s[0]
                      ? o.return
                      : s[0]
                      ? o.throw || ((n = o.return) && n.call(o), 0)
                      : o.next) &&
                  !(n = n.call(o, s[1])).done)
              )
                return n;
              switch (((o = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                case 0:
                case 1:
                  n = s;
                  break;
                case 4:
                  return a.label++, { value: s[1], done: !1 };
                case 5:
                  a.label++, (o = s[1]), (s = [0]);
                  continue;
                case 7:
                  (s = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((n = a.trys),
                    (n = n.length > 0 && n[n.length - 1]) ||
                      (6 !== s[0] && 2 !== s[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === s[0] && (!n || (s[1] > n[0] && n[3] > s[1]))) {
                    a.label = s[1];
                    break;
                  }
                  if (6 === s[0] && n[1] > a.label) {
                    (a.label = n[1]), (n = s);
                    break;
                  }
                  if (n && n[2] > a.label) {
                    (a.label = n[2]), a.ops.push(s);
                    break;
                  }
                  n[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              s = e.call(t, a);
            } catch (t) {
              (s = [6, t]), (o = 0);
            } finally {
              i = n = 0;
            }
          if (5 & s[0]) throw s[1];
          return { value: s[0] ? s[1] : void 0, done: !0 };
        })([s, l]);
      };
    }
  }
  function F(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      i = e && t[e],
      o = 0;
    if (i) return i.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function L(t, e) {
    var i = "function" == typeof Symbol && t[Symbol.iterator];
    if (!i) return t;
    var o,
      n,
      r = i.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
        a.push(o.value);
    } catch (t) {
      n = { error: t };
    } finally {
      try {
        o && !o.done && (i = r.return) && i.call(r);
      } finally {
        if (n) throw n.error;
      }
    }
    return a;
  }
  function R(t, e, i) {
    if (i || 2 === arguments.length)
      for (var o, n = 0, r = e.length; r > n; n++)
        (!o && n in e) ||
          (o || (o = Array.prototype.slice.call(e, 0, n)), (o[n] = e[n]));
    return t.concat(o || Array.prototype.slice.call(e));
  }
  (t.ActionType = void 0),
    ((D = t.ActionType || (t.ActionType = {})).OnZoom = "onZoom"),
    (D.OnScroll = "onScroll"),
    (D.OnVisibleRangeChange = "onVisibleRangeChange"),
    (D.OnTooltipIconClick = "onTooltipIconClick"),
    (D.OnCrosshairChange = "onCrosshairChange"),
    (D.OnCandleBarClick = "onCandleBarClick"),
    (D.OnPaneDrag = "onPaneDrag");
  var B,
    O = (function () {
      function t() {
        this._callbacks = [];
      }
      return (
        (t.prototype.subscribe = function (t) {
          var e;
          0 >
            (null !== (e = this._callbacks.indexOf(t)) && void 0 !== e
              ? e
              : -1) && this._callbacks.push(t);
        }),
        (t.prototype.unsubscribe = function (t) {
          var e;
          if (void 0 !== t) {
            var i =
              null !== (e = this._callbacks.indexOf(t)) && void 0 !== e
                ? e
                : -1;
            i > -1 && this._callbacks.splice(i, 1);
          } else this._callbacks = [];
        }),
        (t.prototype.execute = function (t) {
          this._callbacks.forEach(function (e) {
            e(t);
          });
        }),
        (t.prototype.isEmpty = function () {
          return 0 === this._callbacks.length;
        }),
        t
      );
    })(),
    V = new ((function () {
      function t() {
        this._baseId = 1;
      }
      return (
        (t.prototype.next = function (t) {
          var e = new Date().getTime();
          return (
            e === this._prevIdTimestamp ? ++this._baseId : (this._baseId = 1),
            (this._prevIdTimestamp = e),
            ""
              .concat(null != t ? t : "")
              .concat(e, "_")
              .concat(this._baseId)
          );
        }),
        t
      );
    })())();
  function W(t) {
    return V.next(t);
  }
  function N(t, e) {
    var i,
      o = document.createElement(t),
      n = null != e ? e : {};
    for (var r in n) o.style[r] = null !== (i = n[r]) && void 0 !== i ? i : "";
    return o;
  }
  function z(t) {
    var e, i, o;
    return null !==
      (o =
        null ===
          (i =
            null === (e = t.ownerDocument) || void 0 === e
              ? void 0
              : e.defaultView) || void 0 === i
          ? void 0
          : i.devicePixelRatio) && void 0 !== o
      ? o
      : 2;
  }
  function Y(t, e, i) {
    return ""
      .concat(null != e ? e : "normal", " ")
      .concat(null != t ? t : 12, "px ")
      .concat(null != i ? i : "Helvetica Neue");
  }
  function H(t, e, i, o) {
    if (void 0 === B) {
      var n = document.createElement("canvas"),
        r = z(n);
      (B = n.getContext("2d")).scale(r, r);
    }
    return (B.font = Y(e, i, o)), Math.round(B.measureText(t).width);
  }
  function X(t, e, i) {
    var o = 0,
      n = 0;
    for (n = t.length - 1; o !== n; ) {
      var r = Math.floor((n + o) / 2),
        a = n - o,
        s = t[r][e];
      if (i === t[o][e]) return o;
      if (i === t[n][e]) return n;
      if (i === s) return r;
      if ((i > s ? (o = r) : (n = r), 2 >= a)) break;
    }
    return o;
  }
  function j(t, e) {
    return (
      null == e && (e = 10), +(+t).toFixed((e = Math.min(Math.max(0, e), 20)))
    );
  }
  function G(t, e, i) {
    var o = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    return (
      t.forEach(function (t) {
        var n, r;
        (o[0] = Math.max(null !== (n = t[e]) && void 0 !== n ? n : t, o[0])),
          (o[1] = Math.min(null !== (r = t[i]) && void 0 !== r ? r : t, o[1]));
      }),
      o
    );
  }
  function K(t) {
    return Math.log(t) / Math.log(10);
  }
  function U(t) {
    return Math.pow(10, t);
  }
  var q,
    Z = 1,
    $ = 50,
    J = (function () {
      function e(t) {
        (this._dateTimeFormat = this._buildDateTimeFormat()),
          (this._zoomEnabled = !0),
          (this._scrollEnabled = !0),
          (this._loading = !0),
          (this._loadMoreCallback = null),
          (this._more = !0),
          (this._totalBarSpace = 0),
          (this._barSpace = 6),
          (this._offsetRightDistance = 50),
          (this._startScrollOffsetRightBarCount = 0),
          (this._minVisibleBarCount = { left: 2, right: 2 }),
          (this._visibleRange = { from: 0, to: 0, realFrom: 0, realTo: 0 }),
          (this._chartStore = t),
          (this._gapBarSpace = this._calcGapBarSpace()),
          (this._offsetRightBarCount =
            this._offsetRightDistance / this._barSpace);
      }
      return (
        (e.prototype._calcGapBarSpace = function () {
          return Math.max(
            1,
            Math.min(
              Math.floor(0.82 * this._barSpace),
              Math.floor(this._barSpace) - 1
            )
          );
        }),
        (e.prototype.adjustVisibleRange = function () {
          var e,
            i = this._chartStore.getDataList(),
            o = i.length,
            n = this._totalBarSpace / this._barSpace,
            r = n - Math.min(this._minVisibleBarCount.left, o);
          this._offsetRightBarCount > r && (this._offsetRightBarCount = r);
          var a = -o + Math.min(this._minVisibleBarCount.right, o);
          a > this._offsetRightBarCount && (this._offsetRightBarCount = a);
          var s = Math.round(this._offsetRightBarCount + o + 0.5);
          s > o && (s = o);
          var l = Math.round(s - n) - 1;
          if (
            (0 > l && (l = 0),
            (this._visibleRange = {
              from: l,
              to: s,
              realFrom:
                this._offsetRightBarCount > 0
                  ? Math.round(o + this._offsetRightBarCount - n) - 1
                  : l,
              realTo: s,
            }),
            this._chartStore
              .getActionStore()
              .execute(t.ActionType.OnVisibleRangeChange, this._visibleRange),
            this._chartStore.adjustVisibleDataList(),
            0 === l &&
              this._more &&
              !this._loading &&
              null !== this._loadMoreCallback)
          ) {
            this._loading = !0;
            var c = i[0];
            this._loadMoreCallback(
              null !== (e = null == c ? void 0 : c.timestamp) && void 0 !== e
                ? e
                : null
            );
          }
        }),
        (e.prototype.setMore = function (t) {
          return (this._more = t), this;
        }),
        (e.prototype.setLoading = function (t) {
          return (this._loading = t), this;
        }),
        (e.prototype.getDateTimeFormat = function () {
          return this._dateTimeFormat;
        }),
        (e.prototype._buildDateTimeFormat = function (t) {
          var e = {
            hour12: !1,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          };
          void 0 !== t && (e.timeZone = t);
          var i = null;
          try {
            i = new Intl.DateTimeFormat("en", e);
          } catch (t) {}
          return i;
        }),
        (e.prototype.setTimezone = function (t) {
          var e = this._buildDateTimeFormat(t);
          null !== e && (this._dateTimeFormat = e);
        }),
        (e.prototype.getTimezone = function () {
          return this._dateTimeFormat.resolvedOptions().timeZone;
        }),
        (e.prototype.getBarSpace = function () {
          return {
            bar: this._barSpace,
            halfBar: this._barSpace / 2,
            gapBar: this._gapBarSpace,
            halfGapBar: this._gapBarSpace / 2,
          };
        }),
        (e.prototype.setBarSpace = function (t, e) {
          Z > t ||
            t > $ ||
            this._barSpace === t ||
            ((this._barSpace = t),
            (this._gapBarSpace = this._calcGapBarSpace()),
            null == e || e(),
            this.adjustVisibleRange(),
            this._chartStore.getCrosshairStore().recalculate(!0),
            this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0));
        }),
        (e.prototype.setTotalBarSpace = function (t) {
          return (
            this._totalBarSpace !== t &&
              ((this._totalBarSpace = t),
              this.adjustVisibleRange(),
              this._chartStore.getCrosshairStore().recalculate(!0)),
            this
          );
        }),
        (e.prototype.setOffsetRightDistance = function (t, e) {
          return (
            (this._offsetRightDistance = t),
            (this._offsetRightBarCount = t / this._barSpace),
            null != e &&
              e &&
              (this.adjustVisibleRange(),
              this._chartStore.getCrosshairStore().recalculate(!0),
              this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0)),
            this
          );
        }),
        (e.prototype.resetOffsetRightDistance = function () {
          this.setOffsetRightDistance(this._offsetRightDistance);
        }),
        (e.prototype.getInitialOffsetRightDistance = function () {
          return this._offsetRightDistance;
        }),
        (e.prototype.getOffsetRightDistance = function () {
          return Math.max(0, this._offsetRightBarCount * this._barSpace);
        }),
        (e.prototype.getOffsetRightBarCount = function () {
          return this._offsetRightBarCount;
        }),
        (e.prototype.setOffsetRightBarCount = function (t) {
          return (this._offsetRightBarCount = t), this;
        }),
        (e.prototype.setLeftMinVisibleBarCount = function (t) {
          return (this._minVisibleBarCount.left = t), this;
        }),
        (e.prototype.setRightMinVisibleBarCount = function (t) {
          return (this._minVisibleBarCount.right = t), this;
        }),
        (e.prototype.getVisibleRange = function () {
          return this._visibleRange;
        }),
        (e.prototype.startScroll = function () {
          this._startScrollOffsetRightBarCount = this._offsetRightBarCount;
        }),
        (e.prototype.scroll = function (e) {
          if (this._scrollEnabled) {
            var i = e / this._barSpace;
            this._chartStore.getActionStore().execute(t.ActionType.OnScroll),
              (this._offsetRightBarCount =
                this._startScrollOffsetRightBarCount - i),
              this.adjustVisibleRange(),
              this._chartStore.getCrosshairStore().recalculate(!0),
              this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0);
          }
        }),
        (e.prototype.getDataByDataIndex = function (t) {
          var e;
          return null !== (e = this._chartStore.getDataList()[t]) &&
            void 0 !== e
            ? e
            : null;
        }),
        (e.prototype.coordinateToFloatIndex = function (t) {
          var e = this._chartStore.getDataList().length;
          return (
            Math.round(
              1e6 *
                (e +
                  this._offsetRightBarCount -
                  (this._totalBarSpace - t) / this._barSpace)
            ) / 1e6
          );
        }),
        (e.prototype.dataIndexToTimestamp = function (t) {
          var e,
            i = this.getDataByDataIndex(t);
          return null !== (e = null == i ? void 0 : i.timestamp) && void 0 !== e
            ? e
            : null;
        }),
        (e.prototype.timestampToDataIndex = function (t) {
          var e = this._chartStore.getDataList();
          return 0 === e.length ? 0 : X(e, "timestamp", t);
        }),
        (e.prototype.dataIndexToCoordinate = function (t) {
          var e = this._chartStore.getDataList().length;
          return (
            this._totalBarSpace -
            (e + this._offsetRightBarCount - t - 0.5) * this._barSpace
          );
        }),
        (e.prototype.coordinateToDataIndex = function (t) {
          return Math.ceil(this.coordinateToFloatIndex(t)) - 1;
        }),
        (e.prototype.zoom = function (e, i) {
          var o,
            n = this;
          if (this._zoomEnabled) {
            if (void 0 === (null == i ? void 0 : i.x)) {
              var r = this._chartStore.getCrosshairStore().get();
              i = {
                x:
                  null !== (o = null == r ? void 0 : r.x) && void 0 !== o
                    ? o
                    : this._totalBarSpace / 2,
              };
            }
            this._chartStore.getActionStore().execute(t.ActionType.OnZoom);
            var a = this.coordinateToFloatIndex(i.x);
            this.setBarSpace(
              this._barSpace + e * (this._barSpace / 10),
              function () {
                n._offsetRightBarCount +=
                  a - n.coordinateToFloatIndex(null == i ? void 0 : i.x);
              }
            );
          }
        }),
        (e.prototype.setZoomEnabled = function (t) {
          return (this._zoomEnabled = t), this;
        }),
        (e.prototype.getZoomEnabled = function () {
          return this._zoomEnabled;
        }),
        (e.prototype.setScrollEnabled = function (t) {
          return (this._scrollEnabled = t), this;
        }),
        (e.prototype.getScrollEnabled = function () {
          return this._scrollEnabled;
        }),
        (e.prototype.setLoadMoreCallback = function (t) {
          return (this._loadMoreCallback = t), this;
        }),
        (e.prototype.clear = function () {
          (this._more = !0),
            (this._loading = !0),
            (this._visibleRange = { from: 0, to: 0, realFrom: 0, realTo: 0 });
        }),
        e
      );
    })();
  function Q(t, e, i, o, n) {
    var r,
      a,
      l,
      c = e.result,
      u = e.figures,
      h = e.styles,
      d = C(h, "circles", o.circles),
      p = d.length,
      v = C(h, "bars", o.bars),
      g = v.length,
      f = C(h, "lines", o.lines),
      m = f.length,
      y = 0,
      _ = 0,
      x = 0,
      S = 0;
    u.forEach(function (u) {
      var h, C, b, w;
      switch (u.type) {
        case "circle":
          (a = (r = d[y % p]).style), (l = r.noChangeColor), (S = y), y++;
          break;
        case "bar":
          (a = (r = v[_ % g]).style), (l = r.noChangeColor), (S = _), _++;
          break;
        case "line":
          (a = (r = f[x % m]).style), (l = r.color), (S = x), x++;
      }
      if (s(r)) {
        var T =
          null !==
            (C =
              null === (h = u.styles) || void 0 === h
                ? void 0
                : h.call(
                    u,
                    {
                      prev: { kLineData: t[i - 1], indicatorData: c[i - 1] },
                      current: { kLineData: t[i], indicatorData: c[i] },
                      next: { kLineData: t[i + 1], indicatorData: c[i + 1] },
                    },
                    e,
                    o
                  )) && void 0 !== C
            ? C
            : { style: a, color: l };
        n(
          u,
          {
            style: null !== (b = T.style) && void 0 !== b ? b : a,
            color: null !== (w = T.color) && void 0 !== w ? w : l,
          },
          r,
          S
        );
      }
    });
  }
  (t.IndicatorSeries = void 0),
    ((q = t.IndicatorSeries || (t.IndicatorSeries = {})).Normal = "normal"),
    (q.Price = "price"),
    (q.Volume = "volume");
  var tt = (function () {
      function e(e) {
        (this.result = []), (this._precisionFlag = !1);
        var i = e.name,
          o = e.shortName,
          n = e.series,
          r = e.calcParams,
          a = e.figures,
          s = e.precision,
          l = e.shouldOhlc,
          c = e.shouldFormatBigNumber,
          u = e.visible,
          h = e.minValue,
          d = e.maxValue,
          p = e.styles,
          v = e.extendData,
          g = e.regenerateFigures,
          f = e.createTooltipDataSource,
          m = e.draw;
        (this.name = i),
          (this.shortName = null != o ? o : i),
          (this.series = null != n ? n : t.IndicatorSeries.Normal),
          (this.precision = null != s ? s : 4),
          (this.calcParams = null != r ? r : []),
          (this.figures = null != a ? a : []),
          (this.shouldOhlc = null != l && l),
          (this.shouldFormatBigNumber = null != c && c),
          (this.visible = null == u || u),
          (this.minValue = null != h ? h : null),
          (this.maxValue = null != d ? d : null),
          (this.styles = null != p ? p : null),
          (this.extendData = v),
          (this.regenerateFigures = null != g ? g : null),
          (this.createTooltipDataSource = null != f ? f : null),
          (this.draw = null != m ? m : null);
      }
      return (
        (e.prototype.setShortName = function (t) {
          return this.shortName !== t && ((this.shortName = t), !0);
        }),
        (e.prototype.setSeries = function (t) {
          return this.series !== t && ((this.series = t), !0);
        }),
        (e.prototype.setPrecision = function (t, e) {
          var i = null != e && e,
            o = Math.floor(t);
          return (
            !(
              o === this.precision ||
              0 > t ||
              (i && (!i || this._precisionFlag))
            ) && ((this.precision = o), i || (this._precisionFlag = !0), !0)
          );
        }),
        (e.prototype.setCalcParams = function (t) {
          var e, i;
          return (
            (this.calcParams = t),
            (this.figures =
              null !==
                (i =
                  null === (e = this.regenerateFigures) || void 0 === e
                    ? void 0
                    : e.call(this, t)) && void 0 !== i
                ? i
                : this.figures),
            !0
          );
        }),
        (e.prototype.setShouldOhlc = function (t) {
          return this.shouldOhlc !== t && ((this.shouldOhlc = t), !0);
        }),
        (e.prototype.setShouldFormatBigNumber = function (t) {
          return (
            this.shouldFormatBigNumber !== t &&
            ((this.shouldFormatBigNumber = t), !0)
          );
        }),
        (e.prototype.setVisible = function (t) {
          return this.visible !== t && ((this.visible = t), !0);
        }),
        (e.prototype.setStyles = function (t) {
          return this.styles !== t && ((this.styles = t), !0);
        }),
        (e.prototype.setExtendData = function (t) {
          return this.extendData !== t && ((this.extendData = t), !0);
        }),
        (e.prototype.setFigures = function (t) {
          return this.figures !== t && ((this.figures = t), !0);
        }),
        (e.prototype.setMinValue = function (t) {
          return this.minValue !== t && ((this.minValue = t), !0);
        }),
        (e.prototype.setMaxValue = function (t) {
          return this.maxValue !== t && ((this.maxValue = t), !0);
        }),
        (e.prototype.setRegenerateFigures = function (t) {
          return (
            this.regenerateFigures !== t && ((this.regenerateFigures = t), !0)
          );
        }),
        (e.prototype.setCreateTooltipDataSource = function (t) {
          return (
            this.createTooltipDataSource !== t &&
            ((this.createTooltipDataSource = t), !0)
          );
        }),
        (e.prototype.setDraw = function (t) {
          return this.draw !== t && ((this.draw = t), !0);
        }),
        (e.prototype.calcIndicator = function (t) {
          return k(this, void 0, void 0, function () {
            var e;
            return A(this, function (i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 2, , 3]), [4, this.calc(t, this)];
                case 1:
                  return (e = i.sent()), (this.result = e), [2, !0];
                case 2:
                  return i.sent(), [2, !1];
                case 3:
                  return [2];
              }
            });
          });
        }),
        (e.extend = function (t) {
          return (function (e) {
            function i() {
              return e.call(this, t) || this;
            }
            return (
              P(i, e),
              (i.prototype.calc = function (e, i) {
                return t.calc(e, i);
              }),
              i
            );
          })(e);
        }),
        e
      );
    })(),
    et = {
      name: "AVP",
      shortName: "AVP",
      series: t.IndicatorSeries.Price,
      precision: 2,
      figures: [{ key: "avp", title: "AVP: ", type: "line" }],
      calc: function (t) {
        var e = 0,
          i = 0;
        return t.map(function (t) {
          var o,
            n,
            r = {},
            a =
              null !== (o = null == t ? void 0 : t.turnover) && void 0 !== o
                ? o
                : 0,
            s =
              null !== (n = null == t ? void 0 : t.volume) && void 0 !== n
                ? n
                : 0;
          return (e += a), 0 !== (i += s) && (r.avp = e / i), r;
        });
      },
    };
  var it = {
      name: "EMA",
      shortName: "EMA",
      series: t.IndicatorSeries.Price,
      calcParams: [6, 12, 20],
      precision: 2,
      shouldOhlc: !0,
      figures: [
        { key: "ema1", title: "EMA6: ", type: "line" },
        { key: "ema2", title: "EMA12: ", type: "line" },
        { key: "ema3", title: "EMA20: ", type: "line" },
      ],
      regenerateFigures: function (t) {
        return t.map(function (t, e) {
          return {
            key: "ema".concat(e + 1),
            title: "EMA".concat(t, ": "),
            type: "line",
          };
        });
      },
      calc: function (t, e) {
        var i = e.calcParams,
          o = e.figures,
          n = 0,
          r = [];
        return t.map(function (t, e) {
          var a = {},
            s = t.close;
          return (
            (n += s),
            i.forEach(function (t, i) {
              t - 1 > e ||
                ((r[i] =
                  e > t - 1 ? (2 * s + (t - 1) * r[i]) / (t + 1) : n / t),
                (a[o[i].key] = r[i]));
            }),
            a
          );
        });
      },
    },
    ot = {
      name: "MA",
      shortName: "MA",
      series: t.IndicatorSeries.Price,
      calcParams: [5, 10, 30, 60],
      precision: 2,
      shouldOhlc: !0,
      figures: [
        { key: "ma5", title: "MA5: ", type: "line" },
        { key: "ma10", title: "MA10: ", type: "line" },
        { key: "ma30", title: "MA30: ", type: "line" },
        { key: "ma60", title: "MA60: ", type: "line" },
      ],
      regenerateFigures: function (t) {
        return t.map(function (t, e) {
          return {
            key: "ma".concat(e + 1),
            title: "MA".concat(t, ": "),
            type: "line",
          };
        });
      },
      calc: function (t, e) {
        var i = e.calcParams,
          o = e.figures,
          n = [];
        return t.map(function (e, r) {
          var a = {},
            s = e.close;
          return (
            i.forEach(function (e, i) {
              var l;
              (n[i] = (null !== (l = n[i]) && void 0 !== l ? l : 0) + s),
                e - 1 > r ||
                  ((a[o[i].key] = n[i] / e), (n[i] -= t[r - (e - 1)].close));
            }),
            a
          );
        });
      },
    },
    nt = {
      name: "RSI",
      shortName: "RSI",
      calcParams: [6, 12, 24],
      figures: [
        { key: "rsi1", title: "RSI1: ", type: "line" },
        { key: "rsi2", title: "RSI2: ", type: "line" },
        { key: "rsi3", title: "RSI3: ", type: "line" },
      ],
      regenerateFigures: function (t) {
        return t.map(function (t, e) {
          var i = e + 1;
          return {
            key: "rsi".concat(i),
            title: "RSI".concat(i, ": "),
            type: "line",
          };
        });
      },
      calc: function (t, e) {
        var i = e.calcParams,
          o = e.figures,
          n = [],
          r = [];
        return t.map(function (e, a) {
          var s,
            l = {},
            c = (null !== (s = t[a - 1]) && void 0 !== s ? s : e).close,
            u = e.close - c;
          return (
            i.forEach(function (e, i) {
              var s, c, h;
              if (
                (u > 0
                  ? (n[i] = (null !== (s = n[i]) && void 0 !== s ? s : 0) + u)
                  : (r[i] =
                      (null !== (c = r[i]) && void 0 !== c ? c : 0) +
                      Math.abs(u)),
                a >= e - 1)
              ) {
                l[o[i].key] = 0 !== r[i] ? 100 - 100 / (1 + n[i] / r[i]) : 0;
                var d = t[a - (e - 1)],
                  p = null !== (h = t[a - e]) && void 0 !== h ? h : d,
                  v = d.close - p.close;
                v > 0 ? (n[i] -= v) : (r[i] -= Math.abs(v));
              }
            }),
            l
          );
        });
      },
    },
    rt = {
      name: "VOL",
      shortName: "VOL",
      series: t.IndicatorSeries.Volume,
      calcParams: [5, 10, 20],
      shouldFormatBigNumber: !0,
      precision: 0,
      minValue: 0,
      figures: [
        { key: "ma1", title: "MA5: ", type: "line" },
        { key: "ma2", title: "MA10: ", type: "line" },
        { key: "ma3", title: "MA20: ", type: "line" },
        {
          key: "volume",
          title: "VOLUME: ",
          type: "bar",
          baseValue: 0,
          styles: function (t, e, i) {
            var o = t.current.kLineData;
            return {
              color:
                o.close > o.open
                  ? C(e.styles, "bars[0].upColor", i.bars[0].upColor)
                  : o.open > o.close
                  ? C(e.styles, "bars[0].downColor", i.bars[0].downColor)
                  : C(
                      e.styles,
                      "bars[0].noChangeColor",
                      i.bars[0].noChangeColor
                    ),
            };
          },
        },
      ],
      regenerateFigures: function (t) {
        var e = t.map(function (t, e) {
          return {
            key: "ma".concat(e + 1),
            title: "MA".concat(t, ": "),
            type: "line",
          };
        });
        return (
          e.push({
            key: "volume",
            title: "VOLUME: ",
            type: "bar",
            baseValue: 0,
            styles: function (t, e, i) {
              var o = t.current.kLineData;
              return {
                color:
                  o.close > o.open
                    ? C(e.styles, "bars[0].upColor", i.bars[0].upColor)
                    : o.open > o.close
                    ? C(e.styles, "bars[0].downColor", i.bars[0].downColor)
                    : C(
                        e.styles,
                        "bars[0].noChangeColor",
                        i.bars[0].noChangeColor
                      ),
              };
            },
          }),
          e
        );
      },
      calc: function (t, e) {
        var i = e.calcParams,
          o = e.figures,
          n = [];
        return t.map(function (e, r) {
          var a,
            s = null !== (a = e.volume) && void 0 !== a ? a : 0,
            l = { volume: s };
          return (
            i.forEach(function (e, i) {
              var a, c;
              (n[i] = (null !== (a = n[i]) && void 0 !== a ? a : 0) + s),
                e - 1 > r ||
                  ((l[o[i].key] = n[i] / e),
                  (n[i] -=
                    null !== (c = t[r - (e - 1)].volume) && void 0 !== c
                      ? c
                      : 0));
            }),
            l
          );
        });
      },
    },
    at = {
      name: "WR",
      shortName: "WR",
      calcParams: [6, 10, 14],
      figures: [
        { key: "wr1", title: "WR1: ", type: "line" },
        { key: "wr2", title: "WR2: ", type: "line" },
        { key: "wr3", title: "WR3: ", type: "line" },
      ],
      regenerateFigures: function (t) {
        return t.map(function (t, e) {
          return {
            key: "wr".concat(e + 1),
            title: "WR".concat(e + 1, ": "),
            type: "line",
          };
        });
      },
      calc: function (t, e) {
        var i = e.calcParams,
          o = e.figures;
        return t.map(function (e, n) {
          var r = {},
            a = e.close;
          return (
            i.forEach(function (e, i) {
              var s = e - 1;
              if (n >= s) {
                var l = G(t.slice(n - s, n + 1), "high", "low"),
                  c = l[0],
                  u = c - l[1];
                r[o[i].key] = 0 === u ? 0 : ((a - c) / u) * 100;
              }
            }),
            r
          );
        });
      },
    },
    st = {},
    lt = [
      et,
      {
        name: "AO",
        shortName: "AO",
        calcParams: [5, 34],
        figures: [
          {
            key: "ao",
            title: "AO: ",
            type: "bar",
            baseValue: 0,
            styles: function (t, e, i) {
              var o,
                n,
                r,
                a,
                s =
                  null !==
                    (n =
                      null === (o = t.prev.indicatorData) || void 0 === o
                        ? void 0
                        : o.ao) && void 0 !== n
                    ? n
                    : Number.MIN_SAFE_INTEGER,
                l =
                  null !==
                    (a =
                      null === (r = t.current.indicatorData) || void 0 === r
                        ? void 0
                        : r.ao) && void 0 !== a
                    ? a
                    : Number.MIN_SAFE_INTEGER;
              return {
                color:
                  l > s
                    ? C(e.styles, "bars[0].upColor", i.bars[0].upColor)
                    : C(e.styles, "bars[0].downColor", i.bars[0].downColor),
                style: l > s ? "stroke" : "fill",
              };
            },
          },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = Math.max(i[0], i[1]),
            n = 0,
            r = 0,
            a = 0,
            s = 0;
          return t.map(function (e, l) {
            var c,
              u = {},
              h = (e.low + e.high) / 2;
            ((n += h), (r += h), l < i[0] - 1) ||
              ((a = n / i[0]),
              (n -= ((c = t[l - (i[0] - 1)]).low + c.high) / 2));
            l < i[1] - 1 ||
              ((s = r / i[1]),
              (r -= ((c = t[l - (i[1] - 1)]).low + c.high) / 2));
            return o - 1 > l || (u.ao = a - s), u;
          });
        },
      },
      {
        name: "BIAS",
        shortName: "BIAS",
        calcParams: [6, 12, 24],
        figures: [
          { key: "bias1", title: "BIAS6: ", type: "line" },
          { key: "bias2", title: "BIAS12: ", type: "line" },
          { key: "bias3", title: "BIAS24: ", type: "line" },
        ],
        regenerateFigures: function (t) {
          return t.map(function (t, e) {
            return {
              key: "bias".concat(e + 1),
              title: "BIAS".concat(t, ": "),
              type: "line",
            };
          });
        },
        calc: function (t, e) {
          var i = e.calcParams,
            o = e.figures,
            n = [];
          return t.map(function (e, r) {
            var a = {},
              s = e.close;
            return (
              i.forEach(function (e, l) {
                var c;
                if (
                  ((n[l] = (null !== (c = n[l]) && void 0 !== c ? c : 0) + s),
                  r >= e - 1)
                ) {
                  var u = n[l] / i[l];
                  (a[o[l].key] = ((s - u) / u) * 100),
                    (n[l] -= t[r - (e - 1)].close);
                }
              }),
              a
            );
          });
        },
      },
      {
        name: "BOLL",
        shortName: "BOLL",
        series: t.IndicatorSeries.Price,
        calcParams: [20, 2],
        precision: 2,
        shouldOhlc: !0,
        figures: [
          { key: "up", title: "UP: ", type: "line" },
          { key: "mid", title: "MID: ", type: "line" },
          { key: "dn", title: "DN: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = i[0] - 1,
            n = 0;
          return t.map(function (e, r) {
            var a = {};
            if (((n += e.close), r >= o)) {
              a.mid = n / i[0];
              var s = (function (t, e) {
                var i = t.length,
                  o = 0;
                return (
                  t.forEach(function (t) {
                    var i = t.close - e;
                    o += i * i;
                  }),
                  Math.sqrt((o = Math.abs(o)) / i)
                );
              })(t.slice(r - o, r + 1), a.mid);
              (a.up = a.mid + i[1] * s),
                (a.dn = a.mid - i[1] * s),
                (n -= t[r - o].close);
            }
            return a;
          });
        },
      },
      {
        name: "BRAR",
        shortName: "BRAR",
        calcParams: [26],
        figures: [
          { key: "br", title: "BR: ", type: "line" },
          { key: "ar", title: "AR: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = 0,
            r = 0,
            a = 0;
          return t.map(function (e, s) {
            var l,
              c,
              u = {},
              h = e.high,
              d = e.low,
              p = e.open,
              v = (null !== (l = t[s - 1]) && void 0 !== l ? l : e).close;
            if (
              ((r += h - p),
              (a += p - d),
              (o += h - v),
              (n += v - d),
              s >= i[0] - 1)
            ) {
              (u.ar = 0 !== a ? (r / a) * 100 : 0),
                (u.br = 0 !== n ? (o / n) * 100 : 0);
              var g = t[s - (i[0] - 1)],
                f = g.high,
                m = g.low,
                y = g.open,
                _ = (
                  null !== (c = t[s - i[0]]) && void 0 !== c
                    ? c
                    : t[s - (i[0] - 1)]
                ).close;
              (o -= f - _), (n -= _ - m), (r -= f - y), (a -= y - m);
            }
            return u;
          });
        },
      },
      {
        name: "BBI",
        shortName: "BBI",
        series: t.IndicatorSeries.Price,
        precision: 2,
        calcParams: [3, 6, 12, 24],
        shouldOhlc: !0,
        figures: [{ key: "bbi", title: "BBI: ", type: "line" }],
        calc: function (t, e) {
          var i = e.calcParams,
            o = Math.max.apply(Math, R([], L(i), !1)),
            n = [],
            r = [];
          return t.map(function (e, a) {
            var s = {},
              l = e.close;
            if (
              (i.forEach(function (e, i) {
                var o;
                (n[i] = (null !== (o = n[i]) && void 0 !== o ? o : 0) + l),
                  e - 1 > a ||
                    ((r[i] = n[i] / e), (n[i] -= t[a - (e - 1)].close));
              }),
              a >= o - 1)
            ) {
              var c = 0;
              r.forEach(function (t) {
                c += t;
              }),
                (s.bbi = c / 4);
            }
            return s;
          });
        },
      },
      {
        name: "CCI",
        shortName: "CCI",
        calcParams: [20],
        figures: [{ key: "cci", title: "CCI: ", type: "line" }],
        calc: function (t, e) {
          var i = e.calcParams,
            o = i[0] - 1,
            n = 0,
            r = [];
          return t.map(function (e, a) {
            var s = {},
              l = (e.high + e.low + e.close) / 3;
            if (((n += l), r.push(l), a >= o)) {
              var c = n / i[0],
                u = r.slice(a - o, a + 1),
                h = 0;
              u.forEach(function (t) {
                h += Math.abs(t - c);
              });
              var d = h / i[0];
              (s.cci = 0 !== d ? (l - c) / d / 0.015 : 0),
                (n -= (t[a - o].high + t[a - o].low + t[a - o].close) / 3);
            }
            return s;
          });
        },
      },
      {
        name: "CR",
        shortName: "CR",
        calcParams: [26, 10, 20, 40, 60],
        figures: [
          { key: "cr", title: "CR: ", type: "line" },
          { key: "ma1", title: "MA1: ", type: "line" },
          { key: "ma2", title: "MA2: ", type: "line" },
          { key: "ma3", title: "MA3: ", type: "line" },
          { key: "ma4", title: "MA4: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = Math.ceil(i[1] / 2.5 + 1),
            n = Math.ceil(i[2] / 2.5 + 1),
            r = Math.ceil(i[3] / 2.5 + 1),
            a = Math.ceil(i[4] / 2.5 + 1),
            s = 0,
            l = [],
            c = 0,
            u = [],
            h = 0,
            d = [],
            p = 0,
            v = [],
            g = [];
          return (
            t.forEach(function (e, f) {
              var m,
                y,
                _,
                x,
                S,
                C = {},
                b = null !== (m = t[f - 1]) && void 0 !== m ? m : e,
                w = (b.high + b.close + b.low + b.open) / 4,
                T = Math.max(0, e.high - w),
                E = Math.max(0, w - e.low);
              i[0] - 1 > f ||
                ((C.cr = 0 !== E ? (T / E) * 100 : 0),
                (s += C.cr),
                (c += C.cr),
                (h += C.cr),
                (p += C.cr),
                i[0] + i[1] - 2 > f ||
                  (l.push(s / i[1]),
                  i[0] + i[1] + o - 3 > f || (C.ma1 = l[l.length - 1 - o]),
                  (s -=
                    null !== (y = g[f - (i[1] - 1)].cr) && void 0 !== y
                      ? y
                      : 0)),
                i[0] + i[2] - 2 > f ||
                  (u.push(c / i[2]),
                  i[0] + i[2] + n - 3 > f || (C.ma2 = u[u.length - 1 - n]),
                  (c -=
                    null !== (_ = g[f - (i[2] - 1)].cr) && void 0 !== _
                      ? _
                      : 0)),
                i[0] + i[3] - 2 > f ||
                  (d.push(h / i[3]),
                  i[0] + i[3] + r - 3 > f || (C.ma3 = d[d.length - 1 - r]),
                  (h -=
                    null !== (x = g[f - (i[3] - 1)].cr) && void 0 !== x
                      ? x
                      : 0)),
                i[0] + i[4] - 2 > f ||
                  (v.push(p / i[4]),
                  i[0] + i[4] + a - 3 > f || (C.ma4 = v[v.length - 1 - a]),
                  (p -=
                    null !== (S = g[f - (i[4] - 1)].cr) && void 0 !== S
                      ? S
                      : 0))),
                g.push(C);
            }),
            g
          );
        },
      },
      {
        name: "DMA",
        shortName: "DMA",
        calcParams: [10, 50, 10],
        figures: [
          { key: "dma", title: "DMA: ", type: "line" },
          { key: "ama", title: "AMA: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = Math.max(i[0], i[1]),
            n = 0,
            r = 0,
            a = 0,
            s = [];
          return (
            t.forEach(function (e, l) {
              var c,
                u = {},
                h = e.close;
              (n += h), (r += h);
              var d = 0,
                p = 0;
              if (
                (i[0] - 1 > l ||
                  ((d = n / i[0]), (n -= t[l - (i[0] - 1)].close)),
                i[1] - 1 > l ||
                  ((p = r / i[1]), (r -= t[l - (i[1] - 1)].close)),
                l >= o - 1)
              ) {
                var v = d - p;
                (u.dma = v),
                  (a += v),
                  o + i[2] - 2 > l ||
                    ((u.ama = a / i[2]),
                    (a -=
                      null !== (c = s[l - (i[2] - 1)].dma) && void 0 !== c
                        ? c
                        : 0));
              }
              s.push(u);
            }),
            s
          );
        },
      },
      {
        name: "DMI",
        shortName: "DMI",
        calcParams: [14, 6],
        figures: [
          { key: "pdi", title: "PDI: ", type: "line" },
          { key: "mdi", title: "MDI: ", type: "line" },
          { key: "adx", title: "ADX: ", type: "line" },
          { key: "adxr", title: "ADXR: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = 0,
            r = 0,
            a = 0,
            s = 0,
            l = 0,
            c = 0,
            u = 0,
            h = [];
          return (
            t.forEach(function (e, d) {
              var p,
                v,
                g = {},
                f = null !== (p = t[d - 1]) && void 0 !== p ? p : e,
                m = f.close,
                y = e.high,
                _ = e.low,
                x = y - _,
                S = Math.abs(y - m),
                C = Math.abs(m - _),
                b = y - f.high,
                w = f.low - _,
                T = Math.max(Math.max(x, S), C),
                E = b > 0 && b > w ? b : 0,
                I = w > 0 && w > b ? w : 0;
              if (((o += T), (n += E), (r += I), d >= i[0] - 1)) {
                d > i[0] - 1
                  ? ((a = a - a / i[0] + T),
                    (s = s - s / i[0] + E),
                    (l = l - l / i[0] + I))
                  : ((a = o), (s = n), (l = r));
                var P = 0,
                  D = 0;
                0 !== a && ((P = (100 * s) / a), (D = (100 * l) / a)),
                  (g.pdi = P),
                  (g.mdi = D);
                var M = 0;
                D + P !== 0 && (M = (Math.abs(D - P) / (D + P)) * 100),
                  (c += M),
                  2 * i[0] - 2 > d ||
                    ((g.adx = u =
                      d > 2 * i[0] - 2
                        ? (u * (i[0] - 1) + M) / i[0]
                        : c / i[0]),
                    2 * i[0] + i[1] - 3 > d ||
                      (g.adxr =
                        ((null !== (v = h[d - (i[1] - 1)].adx) && void 0 !== v
                          ? v
                          : 0) +
                          u) /
                        2));
              }
              h.push(g);
            }),
            h
          );
        },
      },
      {
        name: "EMV",
        shortName: "EMV",
        calcParams: [14, 9],
        figures: [
          { key: "emv", title: "EMV: ", type: "line" },
          { key: "maEmv", title: "MAEMV: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = 0,
            r = [],
            a = [];
          return (
            t.forEach(function (e, s) {
              var l,
                c,
                u,
                h = {},
                d = null !== (l = t[s - 1]) && void 0 !== l ? l : e,
                p = e.high,
                v = e.low,
                g = null !== (c = e.turnover) && void 0 !== c ? c : 0,
                f = 0;
              0 !== g &&
                (f = (((p + v) / 2 - (d.high + d.low) / 2) * (p - v)) / g),
                r.push(f),
                (o += f),
                i[0] - 1 > s ||
                  ((h.emv = o),
                  (o -= r[s - (i[0] - 1)]),
                  (n += h.emv),
                  i[0] + i[1] - 2 > s ||
                    ((h.maEmv = n / i[1]),
                    (n -=
                      null !== (u = a[s - (i[1] - 1)].emv) && void 0 !== u
                        ? u
                        : 0))),
                a.push(h);
            }),
            a
          );
        },
      },
      it,
      {
        name: "MTM",
        shortName: "MTM",
        calcParams: [12, 6],
        figures: [
          { key: "mtm", title: "MTM: ", type: "line" },
          { key: "maMtm", title: "MAMTM: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = [];
          return (
            t.forEach(function (e, r) {
              var a,
                s = {};
              r < i[0] ||
                ((s.mtm = e.close - t[r - i[0]].close),
                (o += s.mtm),
                i[0] + i[1] - 1 > r ||
                  ((s.maMtm = o / i[1]),
                  (o -=
                    null !== (a = n[r - (i[1] - 1)].mtm) && void 0 !== a
                      ? a
                      : 0)));
              n.push(s);
            }),
            n
          );
        },
      },
      ot,
      {
        name: "MACD",
        shortName: "MACD",
        calcParams: [12, 26, 9],
        figures: [
          { key: "dif", title: "DIF: ", type: "line" },
          { key: "dea", title: "DEA: ", type: "line" },
          {
            key: "macd",
            title: "MACD: ",
            type: "bar",
            baseValue: 0,
            styles: function (t, e, i) {
              var o,
                n,
                r,
                a,
                s =
                  null !==
                    (n =
                      null === (o = t.prev.indicatorData) || void 0 === o
                        ? void 0
                        : o.macd) && void 0 !== n
                    ? n
                    : Number.MIN_SAFE_INTEGER,
                l =
                  null !==
                    (a =
                      null === (r = t.current.indicatorData) || void 0 === r
                        ? void 0
                        : r.macd) && void 0 !== a
                    ? a
                    : Number.MIN_SAFE_INTEGER;
              return {
                style: l > s ? "stroke" : "fill",
                color:
                  l > 0
                    ? C(e.styles, "bars[0].upColor", i.bars[0].upColor)
                    : 0 > l
                    ? C(e.styles, "bars[0].downColor", i.bars[0].downColor)
                    : C(
                        e.styles,
                        "bars[0].noChangeColor",
                        i.bars[0].noChangeColor
                      ),
              };
            },
          },
        ],
        calc: function (t, e) {
          var i,
            o,
            n = e.calcParams,
            r = 0,
            a = 0,
            s = 0,
            l = 0,
            c = Math.max(n[0], n[1]);
          return t.map(function (t, e) {
            var u = {},
              h = t.close;
            return (
              (r += h),
              n[0] - 1 > e ||
                (i =
                  e > n[0] - 1
                    ? (2 * h + (n[0] - 1) * i) / (n[0] + 1)
                    : r / n[0]),
              n[1] - 1 > e ||
                (o =
                  e > n[1] - 1
                    ? (2 * h + (n[1] - 1) * o) / (n[1] + 1)
                    : r / n[1]),
              c - 1 > e ||
                ((u.dif = a = i - o),
                (s += a),
                c + n[2] - 2 > e ||
                  ((u.macd =
                    2 *
                    (a -
                      (l =
                        e > c + n[2] - 2
                          ? (2 * a + l * (n[2] - 1)) / (n[2] + 1)
                          : s / n[2]))),
                  (u.dea = l))),
              u
            );
          });
        },
      },
      {
        name: "OBV",
        shortName: "OBV",
        calcParams: [30],
        figures: [
          { key: "obv", title: "OBV: ", type: "line" },
          { key: "maObv", title: "MAOBV: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = 0,
            r = [];
          return (
            t.forEach(function (e, a) {
              var s,
                l,
                c,
                u,
                h = null !== (s = t[a - 1]) && void 0 !== s ? s : e;
              h.close > e.close
                ? (n -= null !== (l = e.volume) && void 0 !== l ? l : 0)
                : e.close > h.close &&
                  (n += null !== (c = e.volume) && void 0 !== c ? c : 0);
              var d = { obv: n };
              (o += n),
                i[0] - 1 > a ||
                  ((d.maObv = o / i[0]),
                  (o -=
                    null !== (u = r[a - (i[0] - 1)].obv) && void 0 !== u
                      ? u
                      : 0)),
                r.push(d);
            }),
            r
          );
        },
      },
      {
        name: "PVT",
        shortName: "PVT",
        figures: [{ key: "pvt", title: "PVT: ", type: "line" }],
        calc: function (t) {
          var e = 0;
          return t.map(function (i, o) {
            var n,
              r,
              a = {},
              s = null !== (n = i.volume) && void 0 !== n ? n : 1,
              l = (null !== (r = t[o - 1]) && void 0 !== r ? r : i).close,
              c = 0,
              u = l * s;
            return 0 !== u && (c = (i.close - l) / u), (a.pvt = e += c), a;
          });
        },
      },
      {
        name: "PSY",
        shortName: "PSY",
        calcParams: [12, 6],
        figures: [
          { key: "psy", title: "PSY: ", type: "line" },
          { key: "maPsy", title: "MAPSY: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = 0,
            r = [],
            a = [];
          return (
            t.forEach(function (e, s) {
              var l,
                c,
                u = {},
                h = (null !== (l = t[s - 1]) && void 0 !== l ? l : e).close,
                d = e.close - h > 0 ? 1 : 0;
              r.push(d),
                (o += d),
                i[0] - 1 > s ||
                  ((u.psy = (o / i[0]) * 100),
                  (n += u.psy),
                  i[0] + i[1] - 2 > s ||
                    ((u.maPsy = n / i[1]),
                    (n -=
                      null !== (c = a[s - (i[1] - 1)].psy) && void 0 !== c
                        ? c
                        : 0)),
                  (o -= r[s - (i[0] - 1)])),
                a.push(u);
            }),
            a
          );
        },
      },
      {
        name: "ROC",
        shortName: "ROC",
        calcParams: [12, 6],
        figures: [
          { key: "roc", title: "ROC: ", type: "line" },
          { key: "maRoc", title: "MAROC: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = [],
            n = 0;
          return (
            t.forEach(function (e, r) {
              var a,
                s,
                l = {};
              if (r >= i[0] - 1) {
                var c = (
                  null !== (a = t[r - i[0]]) && void 0 !== a
                    ? a
                    : t[r - (i[0] - 1)]
                ).close;
                (l.roc = 0 !== c ? ((e.close - c) / c) * 100 : 0),
                  (n += l.roc),
                  i[0] - 1 + i[1] - 1 > r ||
                    ((l.maRoc = n / i[1]),
                    (n -=
                      null !== (s = o[r - (i[1] - 1)].roc) && void 0 !== s
                        ? s
                        : 0));
              }
              o.push(l);
            }),
            o
          );
        },
      },
      nt,
      {
        name: "SMA",
        shortName: "SMA",
        series: t.IndicatorSeries.Price,
        calcParams: [12, 2],
        precision: 2,
        figures: [{ key: "sma", title: "SMA: ", type: "line" }],
        shouldOhlc: !0,
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = 0;
          return t.map(function (t, e) {
            var r = {},
              a = t.close;
            return (
              (o += a),
              i[0] - 1 > e ||
                (r.sma = n =
                  e > i[0] - 1
                    ? (a * i[1] + n * (i[0] - i[1] + 1)) / (i[0] + 1)
                    : o / i[0]),
              r
            );
          });
        },
      },
      {
        name: "KDJ",
        shortName: "KDJ",
        calcParams: [9, 3, 3],
        figures: [
          { key: "k", title: "K: ", type: "line" },
          { key: "d", title: "D: ", type: "line" },
          { key: "j", title: "J: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = [];
          return (
            t.forEach(function (e, n) {
              var r,
                a,
                s,
                l,
                c = {},
                u = e.close;
              if (n >= i[0] - 1) {
                var h = G(t.slice(n - (i[0] - 1), n + 1), "high", "low"),
                  d = h[1],
                  p = h[0] - d;
                (c.k =
                  ((i[1] - 1) *
                    (null !==
                      (a =
                        null === (r = o[n - 1]) || void 0 === r
                          ? void 0
                          : r.k) && void 0 !== a
                      ? a
                      : 50) +
                    ((u - d) / (0 === p ? 1 : p)) * 100) /
                  i[1]),
                  (c.d =
                    ((i[2] - 1) *
                      (null !==
                        (l =
                          null === (s = o[n - 1]) || void 0 === s
                            ? void 0
                            : s.d) && void 0 !== l
                        ? l
                        : 50) +
                      c.k) /
                    i[2]),
                  (c.j = 3 * c.k - 2 * c.d);
              }
              o.push(c);
            }),
            o
          );
        },
      },
      {
        name: "SAR",
        shortName: "SAR",
        series: t.IndicatorSeries.Price,
        calcParams: [2, 2, 20],
        precision: 2,
        shouldOhlc: !0,
        figures: [
          {
            key: "sar",
            title: "SAR: ",
            type: "circle",
            styles: function (t, e, i) {
              var o,
                n,
                r = t.current,
                a =
                  null !==
                    (n =
                      null === (o = r.indicatorData) || void 0 === o
                        ? void 0
                        : o.sar) && void 0 !== n
                    ? n
                    : Number.MIN_SAFE_INTEGER,
                s = r.kLineData;
              return {
                color:
                  ((null == s ? void 0 : s.high) +
                    (null == s ? void 0 : s.low)) /
                    2 >
                  a
                    ? C(e.styles, "circles[0].upColor", i.circles[0].upColor)
                    : C(
                        e.styles,
                        "circles[0].downColor",
                        i.circles[0].downColor
                      ),
              };
            },
          },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = i[0] / 100,
            n = i[1] / 100,
            r = i[2] / 100,
            a = o,
            s = -100,
            l = !1,
            c = 0;
          return t.map(function (e, i) {
            var u = c,
              h = e.high,
              d = e.low;
            if (l) {
              (-100 === s || h > s) && ((s = h), (a = Math.min(a + n, r))),
                (c = u + a * (s - u));
              var p = Math.min(t[Math.max(1, i) - 1].low, d);
              c > e.low
                ? ((c = s), (a = o), (s = -100), (l = !l))
                : c > p && (c = p);
            } else {
              (-100 === s || s > d) && ((s = d), (a = Math.min(a + n, r))),
                (c = u + a * (s - u));
              var v = Math.max(t[Math.max(1, i) - 1].high, h);
              e.high > c
                ? ((c = s), (a = 0), (s = -100), (l = !l))
                : v > c && (c = v);
            }
            return { sar: c };
          });
        },
      },
      {
        name: "TRIX",
        shortName: "TRIX",
        calcParams: [12, 9],
        figures: [
          { key: "trix", title: "TRIX: ", type: "line" },
          { key: "maTrix", title: "MATRIX: ", type: "line" },
        ],
        calc: function (t, e) {
          var i,
            o,
            n,
            r = e.calcParams,
            a = 0,
            s = 0,
            l = 0,
            c = 0,
            u = [];
          return (
            t.forEach(function (t, e) {
              var h,
                d = {},
                p = t.close;
              if (
                ((a += p),
                e >= r[0] - 1 &&
                  ((s += i =
                    e > r[0] - 1
                      ? (2 * p + (r[0] - 1) * i) / (r[0] + 1)
                      : a / r[0]),
                  e >= 2 * r[0] - 2 &&
                    ((l += o =
                      e > 2 * r[0] - 2
                        ? (2 * i + (r[0] - 1) * o) / (r[0] + 1)
                        : s / r[0]),
                    e >= 3 * r[0] - 3)))
              ) {
                var v = void 0,
                  g = 0;
                e > 3 * r[0] - 3
                  ? (g =
                      (((v = (2 * o + (r[0] - 1) * n) / (r[0] + 1)) - n) / n) *
                      100)
                  : (v = l / r[0]),
                  (n = v),
                  (d.trix = g),
                  (c += g),
                  3 * r[0] + r[1] - 4 > e ||
                    ((d.maTrix = c / r[1]),
                    (c -=
                      null !== (h = u[e - (r[1] - 1)].trix) && void 0 !== h
                        ? h
                        : 0));
              }
              u.push(d);
            }),
            u
          );
        },
      },
      rt,
      {
        name: "VR",
        shortName: "VR",
        calcParams: [26, 6],
        figures: [
          { key: "vr", title: "VR: ", type: "line" },
          { key: "maVr", title: "MAVR: ", type: "line" },
        ],
        calc: function (t, e) {
          var i = e.calcParams,
            o = 0,
            n = 0,
            r = 0,
            a = 0,
            s = [];
          return (
            t.forEach(function (e, l) {
              var c,
                u,
                h,
                d,
                p,
                v = {},
                g = e.close,
                f = (null !== (c = t[l - 1]) && void 0 !== c ? c : e).close,
                m = null !== (u = e.volume) && void 0 !== u ? u : 0;
              if (
                (g > f ? (o += m) : f > g ? (n += m) : (r += m), l >= i[0] - 1)
              ) {
                var y = r / 2;
                (v.vr = n + y === 0 ? 0 : ((o + y) / (n + y)) * 100),
                  (a += v.vr),
                  i[0] + i[1] - 2 > l ||
                    ((v.maVr = a / i[1]),
                    (a -=
                      null !== (h = s[l - (i[1] - 1)].vr) && void 0 !== h
                        ? h
                        : 0));
                var _ = t[l - (i[0] - 1)],
                  x = null !== (d = t[l - i[0]]) && void 0 !== d ? d : _,
                  S = _.close,
                  C = null !== (p = _.volume) && void 0 !== p ? p : 0;
                S > x.close ? (o -= C) : x.close > S ? (n -= C) : (r -= C);
              }
              s.push(v);
            }),
            s
          );
        },
      },
      at,
    ];
  function ct(t) {
    var e;
    return null !== (e = st[t]) && void 0 !== e ? e : null;
  }
  lt.forEach(function (t) {
    st[t.name] = tt.extend(t);
  });
  var ut,
    ht = (function () {
      function e(t) {
        (this._instances = new Map()), (this._chartStore = t);
      }
      return (
        (e.prototype._overrideInstance = function (t, e) {
          var i = e.shortName,
            o = e.series,
            n = e.calcParams,
            r = e.precision,
            a = e.figures,
            s = e.minValue,
            l = e.maxValue,
            c = e.shouldOhlc,
            u = e.shouldFormatBigNumber,
            h = e.visible,
            d = e.styles,
            p = e.extendData,
            v = e.regenerateFigures,
            g = e.createTooltipDataSource,
            f = e.draw,
            m = e.calc,
            y = !1;
          void 0 !== i && t.setShortName(i) && (y = !0),
            void 0 !== o && t.setSeries(o) && (y = !0);
          var _ = !1;
          return (
            void 0 !== n && t.setCalcParams(n) && ((y = !0), (_ = !0)),
            void 0 !== a && t.setFigures(a) && ((y = !0), (_ = !0)),
            void 0 !== s && t.setMinValue(s) && (y = !0),
            void 0 !== l && t.setMinValue(l) && (y = !0),
            void 0 !== r && t.setPrecision(r) && (y = !0),
            void 0 !== c && t.setShouldOhlc(c) && (y = !0),
            void 0 !== u && t.setShouldFormatBigNumber(u) && (y = !0),
            void 0 !== h && t.setVisible(h) && (y = !0),
            void 0 !== d && t.setStyles(d) && (y = !0),
            void 0 !== p && t.setExtendData(p) && ((y = !0), (_ = !0)),
            void 0 !== v && t.setRegenerateFigures(v) && (y = !0),
            void 0 !== g && t.setCreateTooltipDataSource(g) && (y = !0),
            void 0 !== f && t.setDraw(f) && (y = !0),
            void 0 !== m && ((t.calc = m), (_ = !0)),
            [y, _]
          );
        }),
        (e.prototype.addInstance = function (t, e, i) {
          var o;
          return k(this, void 0, void 0, function () {
            var n, r, a, s;
            return A(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (n = t.name),
                    (r = this._instances.get(e)),
                    null !== (o = null == r ? void 0 : r.has(n)) &&
                    void 0 !== o &&
                    o
                      ? [4, Promise.reject(Error("Duplicate indicators."))]
                      : [3, 2]
                  );
                case 1:
                case 3:
                  return [2, l.sent()];
                case 2:
                  return (
                    void 0 === r &&
                      ((r = new Map()), this._instances.set(e, r)),
                    (a = ct(n)),
                    (s = new a()),
                    this._overrideInstance(s, t),
                    i || r.clear(),
                    r.set(n, s),
                    [4, s.calcIndicator(this._chartStore.getDataList())]
                  );
              }
            });
          });
        }),
        (e.prototype.getInstances = function (t) {
          var e;
          return null !== (e = this._instances.get(t)) && void 0 !== e
            ? e
            : new Map();
        }),
        (e.prototype.removeInstance = function (t, e) {
          var i = !1,
            o = this._instances.get(t);
          return (
            void 0 !== o &&
              (void 0 !== e
                ? o.has(e) && (o.delete(e), (i = !0))
                : (o.clear(), (i = !0)),
              0 === o.size && this._instances.delete(t)),
            i
          );
        }),
        (e.prototype.hasInstances = function (t) {
          return this._instances.has(t);
        }),
        (e.prototype.calcInstance = function (t, e) {
          var i;
          return k(this, void 0, void 0, function () {
            var o,
              n,
              r,
              a = this;
            return A(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (o = []),
                    void 0 !== t
                      ? void 0 !== e
                        ? ((n = this._instances.get(e)),
                          null !== (i = null == n ? void 0 : n.has(t)) &&
                            void 0 !== i &&
                            i &&
                            ((r = null == n ? void 0 : n.get(t)),
                            o.push(
                              r.calcIndicator(this._chartStore.getDataList())
                            )))
                        : this._instances.forEach(function (e) {
                            if (e.has(t)) {
                              var i = null == e ? void 0 : e.get(t);
                              o.push(
                                i.calcIndicator(a._chartStore.getDataList())
                              );
                            }
                          })
                      : this._instances.forEach(function (t) {
                          t.forEach(function (t) {
                            o.push(
                              t.calcIndicator(a._chartStore.getDataList())
                            );
                          });
                        }),
                    [4, Promise.all(o)]
                  );
                case 1:
                  return [2, s.sent().includes(!0)];
              }
            });
          });
        }),
        (e.prototype.getInstanceByPaneId = function (t, e) {
          var i;
          if (void 0 !== t) {
            var o = this._instances.get(t);
            return void 0 !== e
              ? null !== (i = null == o ? void 0 : o.get(e)) && void 0 !== i
                ? i
                : null
              : null != o
              ? o
              : null;
          }
          return this._instances;
        }),
        (e.prototype.setSeriesPrecision = function (e) {
          this._instances.forEach(function (i) {
            i.forEach(function (i) {
              i.series === t.IndicatorSeries.Price &&
                i.setPrecision(e.price, !0),
                i.series === t.IndicatorSeries.Volume &&
                  i.setPrecision(e.volume, !0);
            });
          });
        }),
        (e.prototype.override = function (t, e) {
          return k(this, void 0, void 0, function () {
            var i,
              o,
              n,
              r,
              a,
              s,
              l = this;
            return A(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (i = t.name),
                    (o = new Map()),
                    null !== e
                      ? void 0 !== (n = this._instances.get(e)) && o.set(e, n)
                      : (o = this._instances),
                    (r = !1),
                    (a = []),
                    o.forEach(function (e) {
                      var o = e.get(i);
                      if (void 0 !== o) {
                        var n = l._overrideInstance(o, t);
                        n[1]
                          ? a.push(o.calcIndicator(l._chartStore.getDataList()))
                          : n[0] && (r = !0);
                      }
                    }),
                    [4, Promise.all(a)]
                  );
                case 1:
                  return (s = c.sent()), [2, [r, s.includes(!0)]];
              }
            });
          });
        }),
        e
      );
    })(),
    dt = (function () {
      function t(t) {
        (this._crosshair = {}), (this._chartStore = t);
      }
      return (
        (t.prototype.set = function (t, e) {
          var i,
            o,
            n = this._chartStore.getDataList(),
            r = null != t ? t : {},
            a =
              n[
                (o =
                  void 0 !== r.x
                    ? 0 >
                      (i = this._chartStore
                        .getTimeScaleStore()
                        .coordinateToDataIndex(r.x))
                      ? 0
                      : i > n.length - 1
                      ? n.length - 1
                      : i
                    : (i = n.length - 1))
              ],
            s = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(i),
            l = this._crosshair.x,
            c = this._crosshair.y,
            u = this._crosshair.paneId;
          return (
            (this._crosshair = M(M({}, r), {
              realX: s,
              kLineData: a,
              realDataIndex: i,
              dataIndex: o,
            })),
            (l === r.x && c === r.y && u === r.paneId) ||
              (null !== a &&
                this._chartStore.getChart().crosshairChange(this._crosshair),
              (null != e && e) || this._chartStore.getChart().updatePane(1)),
            this
          );
        }),
        (t.prototype.recalculate = function (t) {
          this.set(this._crosshair, t);
        }),
        (t.prototype.get = function () {
          return this._crosshair;
        }),
        t
      );
    })(),
    pt = (function () {
      function t() {
        this._activeIconInfo = null;
      }
      return (
        (t.prototype.setActiveIconInfo = function (t) {
          this._activeIconInfo = null != t ? t : null;
        }),
        (t.prototype.getActiveIconInfo = function () {
          return this._activeIconInfo;
        }),
        t
      );
    })();
  (t.OverlayMode = void 0),
    ((ut = t.OverlayMode || (t.OverlayMode = {})).Normal = "normal"),
    (ut.WeakMagnet = "weak_magnet"),
    (ut.StrongMagnet = "strong_magnet");
  var vt = "overlay_figure_",
    gt = (function () {
      function e(e) {
        (this.currentStep = 1),
          (this.points = []),
          (this._prevPressedPoint = null),
          (this._prevPressedPoints = []);
        var i = e.mode,
          o = e.extendData,
          n = e.styles,
          r = e.totalStep,
          a = e.lock,
          s = e.visible,
          l = e.needDefaultPointFigure,
          c = e.needDefaultXAxisFigure,
          u = e.needDefaultYAxisFigure,
          h = e.createPointFigures,
          d = e.createXAxisFigures,
          p = e.createYAxisFigures,
          v = e.performEventPressedMove,
          g = e.performEventMoveForDrawing,
          f = e.onDrawStart,
          m = e.onDrawing,
          y = e.onDrawEnd,
          _ = e.onClick,
          x = e.onRightClick,
          S = e.onPressedMoveStart,
          C = e.onPressedMoving,
          b = e.onPressedMoveEnd,
          w = e.onMouseEnter,
          T = e.onMouseLeave,
          E = e.onRemoved,
          I = e.onSelected,
          P = e.onDeselected;
        (this.name = e.name),
          (this.totalStep = void 0 === r || 2 > r ? 1 : r),
          (this.lock = null != a && a),
          (this.visible = null == s || s),
          (this.needDefaultPointFigure = null != l && l),
          (this.needDefaultXAxisFigure = null != c && c),
          (this.needDefaultYAxisFigure = null != u && u),
          (this.mode = null != i ? i : t.OverlayMode.Normal),
          (this.extendData = o),
          (this.styles = null != n ? n : null),
          (this.createPointFigures = null != h ? h : null),
          (this.createXAxisFigures = null != d ? d : null),
          (this.createYAxisFigures = null != p ? p : null),
          (this.performEventPressedMove = null != v ? v : null),
          (this.performEventMoveForDrawing = null != g ? g : null),
          (this.onDrawStart = null != f ? f : null),
          (this.onDrawing = null != m ? m : null),
          (this.onDrawEnd = null != y ? y : null),
          (this.onClick = null != _ ? _ : null),
          (this.onRightClick = null != x ? x : null),
          (this.onPressedMoveStart = null != S ? S : null),
          (this.onPressedMoving = null != C ? C : null),
          (this.onPressedMoveEnd = null != b ? b : null),
          (this.onMouseEnter = null != w ? w : null),
          (this.onMouseLeave = null != T ? T : null),
          (this.onRemoved = null != E ? E : null),
          (this.onSelected = null != I ? I : null),
          (this.onDeselected = null != P ? P : null);
      }
      return (
        (e.prototype.setId = function (t) {
          return void 0 === this.id && ((this.id = t), !0);
        }),
        (e.prototype.setGroupId = function (t) {
          return void 0 === this.groupId && ((this.groupId = t), !0);
        }),
        (e.prototype.setExtendData = function (t) {
          return t !== this.extendData && ((this.extendData = t), !0);
        }),
        (e.prototype.setStyles = function (t) {
          return t !== this.styles && ((this.styles = t), !0);
        }),
        (e.prototype.setPoints = function (t) {
          if (t.length > 0) {
            var e = void 0;
            if (
              ((this.points = R([], L(t), !1)),
              this.totalStep - 1 > t.length
                ? ((this.currentStep = t.length + 1), (e = t.length))
                : ((this.currentStep = -1), (e = this.totalStep - 1)),
              null !== this.performEventMoveForDrawing)
            )
              for (var i = 0; e > i; i++)
                this.performEventMoveForDrawing({
                  currentStep: i + 2,
                  mode: this.mode,
                  points: this.points,
                  performPointIndex: i,
                  performPoint: this.points[i],
                });
            return (
              -1 === this.currentStep &&
                null !== this.performEventPressedMove &&
                this.performEventPressedMove({
                  currentStep: this.currentStep,
                  mode: this.mode,
                  points: this.points,
                  performPointIndex: this.points.length - 1,
                  performPoint: this.points[this.points.length - 1],
                }),
              !0
            );
          }
          return !1;
        }),
        (e.prototype.setLock = function (t) {
          return this.lock !== t && ((this.lock = t), !0);
        }),
        (e.prototype.setVisible = function (t) {
          return this.visible !== t && ((this.visible = t), !0);
        }),
        (e.prototype.setMode = function (t) {
          return t !== this.mode && ((this.mode = t), !0);
        }),
        (e.prototype.setOnDrawStartCallback = function (t) {
          return this.onDrawStart !== t && ((this.onDrawStart = t), !0);
        }),
        (e.prototype.setOnDrawingCallback = function (t) {
          return this.onDrawing !== t && ((this.onDrawing = t), !0);
        }),
        (e.prototype.setOnDrawEndCallback = function (t) {
          return this.onDrawEnd !== t && ((this.onDrawEnd = t), !0);
        }),
        (e.prototype.setOnClickCallback = function (t) {
          return this.onClick !== t && ((this.onClick = t), !0);
        }),
        (e.prototype.setOnRightClickCallback = function (t) {
          return this.onRightClick !== t && ((this.onRightClick = t), !0);
        }),
        (e.prototype.setOnPressedMoveStartCallback = function (t) {
          return (
            this.onPressedMoveStart !== t && ((this.onPressedMoveStart = t), !0)
          );
        }),
        (e.prototype.setOnPressedMovingCallback = function (t) {
          return this.onPressedMoving !== t && ((this.onPressedMoving = t), !0);
        }),
        (e.prototype.setOnPressedMoveEndCallback = function (t) {
          return (
            this.onPressedMoveEnd !== t && ((this.onPressedMoveEnd = t), !0)
          );
        }),
        (e.prototype.setOnMouseEnterCallback = function (t) {
          return this.onMouseEnter !== t && ((this.onMouseEnter = t), !0);
        }),
        (e.prototype.setOnMouseLeaveCallback = function (t) {
          return this.onMouseLeave !== t && ((this.onMouseLeave = t), !0);
        }),
        (e.prototype.setOnRemovedCallback = function (t) {
          return this.onRemoved !== t && ((this.onRemoved = t), !0);
        }),
        (e.prototype.setOnSelectedCallback = function (t) {
          return this.onSelected !== t && ((this.onSelected = t), !0);
        }),
        (e.prototype.setOnDeselectedCallback = function (t) {
          return this.onDeselected !== t && ((this.onDeselected = t), !0);
        }),
        (e.prototype.nextStep = function () {
          this.currentStep === this.totalStep - 1
            ? (this.currentStep = -1)
            : this.currentStep++;
        }),
        (e.prototype.forceComplete = function () {
          this.currentStep = -1;
        }),
        (e.prototype.isDrawing = function () {
          return -1 !== this.currentStep;
        }),
        (e.prototype.isStart = function () {
          return 1 === this.currentStep;
        }),
        (e.prototype.eventMoveForDrawing = function (t) {
          var e,
            i = this.currentStep - 1,
            o = {};
          void 0 !== t.timestamp && (o.timestamp = t.timestamp),
            void 0 !== t.dataIndex && (o.dataIndex = t.dataIndex),
            void 0 !== t.value && (o.value = t.value),
            (this.points[i] = o),
            null === (e = this.performEventMoveForDrawing) ||
              void 0 === e ||
              e.call(this, {
                currentStep: this.currentStep,
                mode: this.mode,
                points: this.points,
                performPointIndex: i,
                performPoint: o,
              });
        }),
        (e.prototype.eventPressedPointMove = function (t, e) {
          var i;
          void 0 !== t.dataIndex &&
            ((this.points[e].dataIndex = t.dataIndex),
            (this.points[e].timestamp = t.timestamp)),
            void 0 !== t.value && (this.points[e].value = t.value),
            null === (i = this.performEventPressedMove) ||
              void 0 === i ||
              i.call(this, {
                currentStep: this.currentStep,
                points: this.points,
                mode: this.mode,
                performPointIndex: e,
                performPoint: this.points[e],
              });
        }),
        (e.prototype.startPressedMove = function (t) {
          (this._prevPressedPoint = M({}, t)),
            (this._prevPressedPoints = i(this.points));
        }),
        (e.prototype.eventPressedOtherMove = function (t, e) {
          var i, o;
          null !== this._prevPressedPoint &&
            (void 0 !== t.dataIndex &&
              void 0 !== this._prevPressedPoint.dataIndex &&
              (i = t.dataIndex - this._prevPressedPoint.dataIndex),
            void 0 !== t.value &&
              void 0 !== this._prevPressedPoint.value &&
              (o = t.value - this._prevPressedPoint.value),
            (this.points = this._prevPressedPoints.map(function (t) {
              var n;
              void 0 === t.dataIndex &&
                void 0 !== t.timestamp &&
                (t.dataIndex = e.timestampToDataIndex(t.timestamp));
              var r = M({}, t);
              return (
                void 0 !== i &&
                  void 0 !== t.dataIndex &&
                  ((r.dataIndex = t.dataIndex + i),
                  (r.timestamp =
                    null !== (n = e.dataIndexToTimestamp(r.dataIndex)) &&
                    void 0 !== n
                      ? n
                      : void 0)),
                void 0 !== o && void 0 !== t.value && (r.value = t.value + o),
                r
              );
            })));
        }),
        (e.extend = function (t) {
          return (function (e) {
            function i() {
              return e.call(this, t) || this;
            }
            return P(i, e), i;
          })(e);
        }),
        e
      );
    })();
  function ft(t, e) {
    return Math.sqrt(Math.pow(t.x + e.x, 2) + Math.pow(t.y + e.y, 2));
  }
  function mt(t) {
    var e = ft(t[0], t[1]),
      i = e + ft(t[1], t[2]),
      o = [t[2].x - t[0].x, t[2].y - t[0].y];
    return [
      { x: t[1].x - (0.5 * o[0] * e) / i, y: t[1].y - (0.5 * o[1] * e) / i },
      { x: t[1].x + (0.5 * o[0] * e) / i, y: t[1].y + (0.5 * o[1] * e) / i },
    ];
  }
  function yt(t, e) {
    var i = e.coordinates;
    if (i.length > 1)
      for (var o = 1; i.length > o; o++) {
        var n = i[o - 1],
          r = i[o];
        if (n.x === r.x) {
          if (
            4 >
              Math.abs(n.y - t.y) + Math.abs(r.y - t.y) - Math.abs(n.y - r.y) &&
            2 > Math.abs(t.x - n.x)
          )
            return !0;
        } else {
          var a = St(n, r),
            s = _t(a, t),
            l = Math.abs(s - t.y);
          if (
            4 >
              Math.abs(n.x - t.x) + Math.abs(r.x - t.x) - Math.abs(n.x - r.x) &&
            4 > (l * l) / (a[0] * a[0] + 1)
          )
            return !0;
        }
      }
    return !1;
  }
  function _t(t, e) {
    return null != t ? e.x * t[0] + t[1] : e.y;
  }
  function xt(t, e, i) {
    return _t(St(t, e), i);
  }
  function St(t, e) {
    var i = t.x - e.x;
    if (0 !== i) {
      var o = (t.y - e.y) / i;
      return [o, t.y - o * t.x];
    }
    return null;
  }
  function Ct(e, i, o) {
    var n = i.coordinates,
      r = n.length;
    if (r > 1) {
      var a = o.style,
        s = void 0 === a ? t.LineType.Solid : a,
        l = o.smooth,
        c = o.size,
        u = o.color,
        h = void 0 === u ? "currentColor" : u,
        d = o.dashedValue,
        p = void 0 === d ? [2, 2] : d;
      if (
        ((e.lineWidth = void 0 === c ? 1 : c),
        (e.strokeStyle = h),
        e.setLineDash(s === t.LineType.Dashed ? p : []),
        e.beginPath(),
        e.moveTo(n[0].x, n[0].y),
        null != l && l)
      ) {
        for (var v = [], g = 1; r - 1 > g; g++)
          v = v.concat(mt([n[g - 1], n[g], n[g + 1]]));
        e.quadraticCurveTo(v[0].x, v[0].y, n[1].x, n[1].y);
        for (var f = 2; r - 1 > f; f++)
          e.bezierCurveTo(
            v[2 * (f - 2) + 1].x,
            v[2 * (f - 2) + 1].y,
            v[2 * (f - 1)].x,
            v[2 * (f - 1)].y,
            n[f].x,
            n[f].y
          );
        e.quadraticCurveTo(
          v[2 * (f - 2) + 1].x,
          v[2 * (f - 2) + 1].y,
          n[f].x,
          n[f].y
        );
      } else for (f = 1; n.length > f; f++) e.lineTo(n[f].x, n[f].y);
      e.stroke(), e.closePath();
    }
  }
  var bt = {
    name: "line",
    checkEventOn: yt,
    draw: function (t, e, i) {
      Ct(t, e, i);
    },
  };
  function wt(t, e, i) {
    var o = null != i ? i : 0,
      n = [];
    if (t.length > 1)
      if (t[0].x === t[1].x) {
        var r = e.height;
        if (
          (n.push({
            coordinates: [
              { x: t[0].x, y: 0 },
              { x: t[0].x, y: r },
            ],
          }),
          t.length > 2)
        ) {
          n.push({
            coordinates: [
              { x: t[2].x, y: 0 },
              { x: t[2].x, y: r },
            ],
          });
          for (var a = t[0].x - t[2].x, s = 0; o > s; s++) {
            var l = a * (s + 1);
            n.push({
              coordinates: [
                { x: t[0].x + l, y: 0 },
                { x: t[0].x + l, y: r },
              ],
            });
          }
        }
      } else {
        var c = e.width,
          u = St(t[0], t[1]),
          h = u[0],
          d = u[1];
        if (
          (n.push({
            coordinates: [
              { x: 0, y: 0 * h + d },
              { x: c, y: c * h + d },
            ],
          }),
          t.length > 2)
        ) {
          var p = t[2].y - h * t[2].x;
          n.push({
            coordinates: [
              { x: 0, y: 0 * h + p },
              { x: c, y: c * h + p },
            ],
          });
          for (a = d - p, s = 0; o > s; s++) {
            var v = d + a * (s + 1);
            n.push({
              coordinates: [
                { x: 0, y: 0 * h + v },
                { x: c, y: c * h + v },
              ],
            });
          }
        }
      }
    return n;
  }
  function Tt(t, e) {
    if (t.length > 1) {
      var i = void 0;
      return (
        (i =
          t[0].x === t[1].x && t[0].y !== t[1].y
            ? t[1].y > t[0].y
              ? { x: t[0].x, y: e.height }
              : { x: t[0].x, y: 0 }
            : t[0].x > t[1].x
            ? { x: 0, y: xt(t[0], t[1], { x: 0, y: t[0].y }) }
            : { x: e.width, y: xt(t[0], t[1], { x: e.width, y: t[0].y }) }),
        { coordinates: [t[0], i] }
      );
    }
    return [];
  }
  var Et = {
      name: "simpleAnnotation",
      totalStep: 2,
      createPointFigures: function (t) {
        var e,
          i,
          o = t.overlay,
          r = t.coordinates;
        s(o.extendData) &&
          (i = n(o.extendData)
            ? o.extendData(o)
            : null !== (e = o.extendData) && void 0 !== e
            ? e
            : "");
        var a = r[0].x,
          l = r[0].y - 6,
          c = l - 50,
          u = c - 5;
        return [
          {
            type: "line",
            attrs: {
              coordinates: [
                { x: a, y: l },
                { x: a, y: c },
              ],
            },
            ignoreEvent: !0,
          },
          {
            type: "polygon",
            attrs: {
              coordinates: [
                { x: a, y: c },
                { x: a - 4, y: u },
                { x: a + 4, y: u },
              ],
            },
            ignoreEvent: !0,
          },
          {
            type: "rectText",
            attrs: {
              x: a,
              y: u,
              text: null != i ? i : "",
              align: "center",
              baseline: "bottom",
            },
            ignoreEvent: !0,
          },
        ];
      },
    },
    It = {
      name: "simpleTag",
      totalStep: 2,
      createPointFigures: function (t) {
        var e = t.coordinates;
        return {
          type: "line",
          attrs: {
            coordinates: [
              { x: 0, y: e[0].y },
              { x: t.bounding.width, y: e[0].y },
            ],
          },
          ignoreEvent: !0,
        };
      },
      createYAxisFigures: function (t) {
        var e,
          i,
          o,
          r,
          a,
          l = t.overlay,
          c = t.coordinates,
          u = t.bounding,
          h = t.yAxis,
          d = t.precision;
        return (
          null !== (e = null == h ? void 0 : h.isFromZero()) &&
          void 0 !== e &&
          e
            ? ((o = "left"), (r = 0))
            : ((o = "right"), (r = u.width)),
          s(l.extendData) &&
            (a = n(l.extendData)
              ? l.extendData(l)
              : null !== (i = l.extendData) && void 0 !== i
              ? i
              : ""),
          s(a) ||
            void 0 === l.points[0].value ||
            (a = w(l.points[0].value, d.price)),
          {
            type: "rectText",
            attrs: {
              x: r,
              y: c[0].y,
              text: null != a ? a : "",
              align: o,
              baseline: "middle",
            },
          }
        );
      },
    },
    Pt = {};
  function Dt(t) {
    var e;
    return null !== (e = Pt[t]) && void 0 !== e ? e : null;
  }
  function Mt(t) {
    var i = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0 };
    return void 0 !== t && e(i, t), i;
  }
  [
    {
      name: "fibonacciLine",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates,
          i = t.precision,
          o = t.thousandsSeparator,
          n = t.overlay.points;
        if (e.length > 0) {
          var r = [],
            a = [],
            s = t.bounding.width;
          if (e.length > 1 && void 0 !== n[0].value && void 0 !== n[1].value) {
            var l = e[0].y - e[1].y,
              c = n[0].value - n[1].value;
            [1, 0.786, 0.618, 0.5, 0.382, 0.236, 0].forEach(function (t) {
              var u,
                h = e[1].y + l * t,
                d = E(
                  (
                    (null !== (u = n[1].value) && void 0 !== u ? u : 0) +
                    c * t
                  ).toFixed(i.price),
                  o
                );
              r.push({
                coordinates: [
                  { x: 0, y: h },
                  { x: s, y: h },
                ],
              }),
                a.push({
                  x: 0,
                  y: h,
                  text: "".concat(d, " (").concat((100 * t).toFixed(1), "%)"),
                  baseline: "bottom",
                });
            });
          }
          return [
            { type: "line", attrs: r },
            { type: "text", isCheckEvent: !1, attrs: a },
          ];
        }
        return [];
      },
    },
    {
      name: "horizontalRayLine",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates,
          i = { x: 0, y: e[0].y };
        return (
          void 0 !== e[1] && e[1].x > e[0].x && (i.x = t.bounding.width),
          [{ type: "line", attrs: { coordinates: [e[0], i] } }]
        );
      },
      performEventPressedMove: function (t) {
        var e = t.points,
          i = t.performPoint;
        (e[0].value = i.value), (e[1].value = i.value);
      },
      performEventMoveForDrawing: function (t) {
        2 === t.currentStep && (t.points[0].value = t.performPoint.value);
      },
    },
    {
      name: "horizontalSegment",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates,
          i = [];
        return (
          2 === e.length && i.push({ coordinates: e }),
          [{ type: "line", attrs: i }]
        );
      },
      performEventPressedMove: function (t) {
        var e = t.points,
          i = t.performPoint;
        (e[0].value = i.value), (e[1].value = i.value);
      },
      performEventMoveForDrawing: function (t) {
        2 === t.currentStep && (t.points[0].value = t.performPoint.value);
      },
    },
    {
      name: "horizontalStraightLine",
      totalStep: 2,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates;
        return [
          {
            type: "line",
            attrs: {
              coordinates: [
                { x: 0, y: e[0].y },
                { x: t.bounding.width, y: e[0].y },
              ],
            },
          },
        ];
      },
    },
    {
      name: "parallelStraightLine",
      totalStep: 4,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        return [{ type: "line", attrs: wt(t.coordinates, t.bounding) }];
      },
    },
    {
      name: "priceChannelLine",
      totalStep: 4,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        return [{ type: "line", attrs: wt(t.coordinates, t.bounding, 1) }];
      },
    },
    {
      name: "priceLine",
      totalStep: 2,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates,
          i = t.thousandsSeparator,
          o = t.overlay.points[0].value;
        return [
          {
            type: "line",
            attrs: { coordinates: [e[0], { x: t.bounding.width, y: e[0].y }] },
          },
          {
            type: "text",
            ignoreEvent: !0,
            attrs: {
              x: e[0].x,
              y: e[0].y,
              text: E((void 0 === o ? 0 : o).toFixed(t.precision.price), i),
              baseline: "bottom",
            },
          },
        ];
      },
    },
    {
      name: "rayLine",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        return [{ type: "line", attrs: Tt(t.coordinates, t.bounding) }];
      },
    },
    {
      name: "segment",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates;
        return 2 === e.length
          ? [{ type: "line", attrs: { coordinates: e } }]
          : [];
      },
    },
    {
      name: "straightLine",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates,
          i = t.bounding;
        return 2 === e.length
          ? e[0].x === e[1].x
            ? [
                {
                  type: "line",
                  attrs: {
                    coordinates: [
                      { x: e[0].x, y: 0 },
                      { x: e[0].x, y: i.height },
                    ],
                  },
                },
              ]
            : [
                {
                  type: "line",
                  attrs: {
                    coordinates: [
                      { x: 0, y: xt(e[0], e[1], { x: 0, y: e[0].y }) },
                      {
                        x: i.width,
                        y: xt(e[0], e[1], { x: i.width, y: e[0].y }),
                      },
                    ],
                  },
                },
              ]
          : [];
      },
    },
    {
      name: "verticalRayLine",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates;
        if (2 === e.length) {
          var i = { x: e[0].x, y: 0 };
          return (
            e[1].y > e[0].y && (i.y = t.bounding.height),
            [{ type: "line", attrs: { coordinates: [e[0], i] } }]
          );
        }
        return [];
      },
      performEventPressedMove: function (t) {
        var e = t.points,
          i = t.performPoint;
        (e[0].timestamp = i.timestamp),
          (e[0].dataIndex = i.dataIndex),
          (e[1].timestamp = i.timestamp),
          (e[1].dataIndex = i.dataIndex);
      },
      performEventMoveForDrawing: function (t) {
        var e = t.points,
          i = t.performPoint;
        2 === t.currentStep &&
          ((e[0].timestamp = i.timestamp), (e[0].dataIndex = i.dataIndex));
      },
    },
    {
      name: "verticalSegment",
      totalStep: 3,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates;
        return 2 === e.length
          ? [{ type: "line", attrs: { coordinates: e } }]
          : [];
      },
      performEventPressedMove: function (t) {
        var e = t.points,
          i = t.performPoint;
        (e[0].timestamp = i.timestamp),
          (e[0].dataIndex = i.dataIndex),
          (e[1].timestamp = i.timestamp),
          (e[1].dataIndex = i.dataIndex);
      },
      performEventMoveForDrawing: function (t) {
        var e = t.points,
          i = t.performPoint;
        2 === t.currentStep &&
          ((e[0].timestamp = i.timestamp), (e[0].dataIndex = i.dataIndex));
      },
    },
    {
      name: "verticalStraightLine",
      totalStep: 2,
      needDefaultPointFigure: !0,
      needDefaultXAxisFigure: !0,
      needDefaultYAxisFigure: !0,
      createPointFigures: function (t) {
        var e = t.coordinates;
        return [
          {
            type: "line",
            attrs: {
              coordinates: [
                { x: e[0].x, y: 0 },
                { x: e[0].x, y: t.bounding.height },
              ],
            },
          },
        ];
      },
    },
    Et,
    It,
  ].forEach(function (t) {
    Pt[t.name] = gt.extend(t);
  });
  var kt = (function () {
      function t() {
        (this._children = []), (this._callbacks = new Map());
      }
      return (
        (t.prototype.registerEvent = function (t, e) {
          return this._callbacks.set(t, e), this;
        }),
        (t.prototype.onEvent = function (t, e, i) {
          var o = this._callbacks.get(t);
          return !(void 0 === o || !this.checkEventOn(e)) && o(e, i);
        }),
        (t.prototype.checkEventOn = function (t) {
          var e, i;
          try {
            for (
              var o = F(this._children), n = o.next();
              !n.done;
              n = o.next()
            ) {
              if (n.value.checkEventOn(t)) return !0;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              n && !n.done && (i = o.return) && i.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return !1;
        }),
        (t.prototype.dispatchEvent = function (t, e, i) {
          var o = this._children.length - 1;
          if (o > -1)
            for (var n = o; n > -1; n--)
              if (this._children[n].dispatchEvent(t, e, i)) return !0;
          return this.onEvent(t, e, i);
        }),
        (t.prototype.addChild = function (t) {
          return this._children.push(t), this;
        }),
        (t.prototype.clear = function () {
          this._children = [];
        }),
        t
      );
    })(),
    At = "main",
    Ft = "xAxis",
    Lt = "yAxis",
    Rt = "separator",
    Bt = (function (t) {
      function i(e, i) {
        var o = t.call(this) || this;
        return (o._bounding = Mt()), (o._pane = i), o._init(e), o;
      }
      return (
        P(i, t),
        (i.prototype._init = function (t) {
          if (
            ((this._container = N("div", this.getContainerStyle())),
            this.insertBefore())
          ) {
            var e = t.lastChild;
            null !== e
              ? t.insertBefore(this._container, e)
              : t.appendChild(this._container);
          } else t.appendChild(this._container);
          this.initDom(this._container);
        }),
        (i.prototype.setBounding = function (t) {
          return e(this._bounding, t), this;
        }),
        (i.prototype.getContainer = function () {
          return this._container;
        }),
        (i.prototype.getBounding = function () {
          return this._bounding;
        }),
        (i.prototype.getPane = function () {
          return this._pane;
        }),
        (i.prototype.update = function (t) {
          this.updateImp(t, this._container, this._bounding);
        }),
        (i.prototype.insertBefore = function () {
          return !1;
        }),
        i
      );
    })(kt);
  var Ot = (function (e) {
      function i(t, i) {
        var o,
          n,
          r,
          a = e.call(this, t, i) || this;
        return (
          (a._dragFlag = !1),
          (a._dragStartY = 0),
          (a._topPaneHeight = 0),
          (a._currentPaneHeight = 0),
          (a._pressedMouseMoveEvent =
            ((o = a._pressedTouchMouseMoveEvent),
            (n = 20),
            (r = 0),
            function () {
              var t = Date.now();
              t - r > (null != n ? n : 20) &&
                (o.apply(this, arguments), (r = t));
            })),
          a
            .registerEvent("touchStartEvent", a._mouseDownEvent.bind(a))
            .registerEvent("touchMoveEvent", a._pressedMouseMoveEvent.bind(a))
            .registerEvent("touchEndEvent", a._mouseUpEvent.bind(a))
            .registerEvent("mouseDownEvent", a._mouseDownEvent.bind(a))
            .registerEvent("mouseUpEvent", a._mouseUpEvent.bind(a))
            .registerEvent(
              "pressedMouseMoveEvent",
              a._pressedMouseMoveEvent.bind(a)
            )
            .registerEvent("mouseEnterEvent", a._mouseEnterEvent.bind(a))
            .registerEvent("mouseLeaveEvent", a._mouseLeaveEvent.bind(a)),
          a
        );
      }
      return (
        P(i, e),
        (i.prototype.getName = function () {
          return Rt;
        }),
        (i.prototype.checkEventOn = function () {
          return !0;
        }),
        (i.prototype._mouseDownEvent = function (t) {
          var e, i;
          (this._dragFlag = !0), (this._dragStartY = t.pageY);
          var o = this.getPane();
          return (
            (this._topPaneHeight =
              null !==
                (i =
                  null === (e = o.getTopPane()) || void 0 === e
                    ? void 0
                    : e.getBounding().height) && void 0 !== i
                ? i
                : 0),
            (this._currentPaneHeight = o.getBounding().height),
            !0
          );
        }),
        (i.prototype._mouseUpEvent = function () {
          return (this._dragFlag = !1), this._mouseLeaveEvent();
        }),
        (i.prototype._pressedTouchMouseMoveEvent = function (e) {
          var i = e.pageY - this._dragStartY,
            o = this.getPane(),
            n = o.getTopPane(),
            r = 0 > i;
          if (null !== n && o.getOptions().dragEnabled) {
            var a = void 0,
              s = void 0,
              l = void 0,
              c = void 0;
            r
              ? ((a = n),
                (s = o),
                (l = this._topPaneHeight),
                (c = this._currentPaneHeight))
              : ((a = o),
                (s = n),
                (l = this._currentPaneHeight),
                (c = this._topPaneHeight));
            var u = a.getOptions().minHeight;
            if (l > u) {
              var h = Math.max(l - Math.abs(i), u),
                d = l - h;
              a.setBounding({ height: h }), s.setBounding({ height: c + d });
              var p = o.getChart();
              p
                .getChartStore()
                .getActionStore()
                .execute(t.ActionType.OnPaneDrag, { paneId: o.getId }),
                p.adjustPaneViewport(!0, !0, !0, !0, !0);
            }
          }
          return !0;
        }),
        (i.prototype._mouseEnterEvent = function () {
          var t = this.getPane();
          if (t.getOptions().dragEnabled) {
            var e = t.getChart().getStyles().separator;
            return (
              (this._moveDom.style.background = e.activeBackgroundColor), !0
            );
          }
          return !1;
        }),
        (i.prototype._mouseLeaveEvent = function () {
          return !this._dragFlag && ((this._moveDom.style.background = ""), !0);
        }),
        (i.prototype.getContainerStyle = function () {
          return {
            margin: "0",
            padding: "0",
            position: "relative",
            boxSizing: "border-box",
          };
        }),
        (i.prototype.insertBefore = function () {
          return !0;
        }),
        (i.prototype.initDom = function (t) {
          (this._moveDom = N("div", {
            width: "100%",
            height: "".concat(7, "px"),
            margin: "0",
            padding: "0",
            position: "absolute",
            top: "-3px",
            zIndex: "20",
            boxSizing: "border-box",
            cursor: "ns-resize",
          })),
            t.appendChild(this._moveDom);
        }),
        (i.prototype.updateImp = function (t, e, i) {
          if (4 === t || 2 === t) {
            var o = this.getPane().getChart().getStyles().separator;
            (this._moveDom.style.top = "".concat(
              -Math.floor((7 - o.size) / 2),
              "px"
            )),
              (this._moveDom.style.height = "".concat(7, "px"));
            var n = o.fill;
            (e.style.backgroundColor = o.color),
              (e.style.height = "".concat(o.size, "px")),
              (e.style.marginLeft = "".concat(n ? 0 : i.left, "px")),
              (e.style.width = n ? "100%" : "".concat(i.width, "px"));
          }
        }),
        (i.prototype.getImage = function () {
          var t = this.getPane().getChart().getStyles().separator,
            e = this.getContainer().offsetWidth,
            i = t.size,
            o = N("canvas", {
              width: "".concat(e, "px"),
              height: "".concat(i, "px"),
              boxSizing: "border-box",
            }),
            n = o.getContext("2d"),
            r = z(o);
          return (
            (o.width = e * r),
            (o.height = i * r),
            n.scale(r, r),
            (n.fillStyle = t.color),
            n.fillRect(this.getBounding().left, 0, e, i),
            o
          );
        }),
        i
      );
    })(Bt),
    Vt = "candle_pane",
    Wt = "indcator_pane_",
    Nt = "xaxis_pane",
    zt = (function () {
      function t(t, e, i, o, n) {
        (this._yAxisWidget = null),
          (this._separatorWidget = null),
          (this._axis = this.createAxisComponent()),
          (this._bounding = Mt()),
          (this._options = {
            minHeight: 30,
            dragEnabled: !0,
            gap: { top: 0.2, bottom: 0.1 },
          }),
          (this._chart = e),
          (this._id = i),
          (this._topPane = null != o ? o : null),
          (this._bottomPane = null != n ? n : null),
          this._init(t);
      }
      return (
        (t.prototype._init = function (t) {
          (this._container = t),
            (this._seriesContiainer = N("div", {
              width: "100%",
              margin: "0",
              padding: "0",
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
            })),
            (this._separatorWidget = this.createSeparatorWidget(t));
          var e = t.lastChild;
          null !== e
            ? t.insertBefore(this._seriesContiainer, e)
            : t.appendChild(this._seriesContiainer),
            (this._mainWidget = this.createMainWidget(this._seriesContiainer)),
            (this._yAxisWidget = this.creatYAxisWidget(this._seriesContiainer));
        }),
        (t.prototype.getContainer = function () {
          return this._seriesContiainer;
        }),
        (t.prototype.getId = function () {
          return this._id;
        }),
        (t.prototype.setOptions = function (t) {
          return e(this._options, t), this;
        }),
        (t.prototype.getOptions = function () {
          return this._options;
        }),
        (t.prototype.getChart = function () {
          return this._chart;
        }),
        (t.prototype.getAxisComponent = function () {
          return this._axis;
        }),
        (t.prototype.setBounding = function (t, i, o) {
          var n, r, a;
          e(this._bounding, t);
          var s = 0;
          if (null !== this._separatorWidget) {
            s = this._chart.getStyles().separator.size;
            var l = M(M({}, t), { height: 7 });
            void 0 !== t.top && (l.top = t.top - Math.floor((7 - s) / 2)),
              this._separatorWidget.setBounding(l);
          }
          var c = {};
          return (
            void 0 !== t.height && (c.height = t.height - s),
            void 0 !== t.top && (c.top = t.top + s),
            this._mainWidget.setBounding(c),
            null === (n = this._yAxisWidget) ||
              void 0 === n ||
              n.setBounding(c),
            void 0 !== i &&
              (this._mainWidget.setBounding(i),
              null === (r = this._separatorWidget) ||
                void 0 === r ||
                r.setBounding(i)),
            void 0 !== o &&
              (null === (a = this._yAxisWidget) ||
                void 0 === a ||
                a.setBounding(o)),
            this
          );
        }),
        (t.prototype.getTopPane = function () {
          return this._topPane;
        }),
        (t.prototype.setTopPane = function (t) {
          return (this._topPane = t), this;
        }),
        (t.prototype.getBottomPane = function () {
          return this._bottomPane;
        }),
        (t.prototype.setBottomPane = function (t) {
          return (this._bottomPane = t), this;
        }),
        (t.prototype.getBounding = function () {
          return this._bounding;
        }),
        (t.prototype.getMainWidget = function () {
          return this._mainWidget;
        }),
        (t.prototype.getYAxisWidget = function () {
          return this._yAxisWidget;
        }),
        (t.prototype.getSeparatorWidget = function () {
          return this._separatorWidget;
        }),
        (t.prototype.update = function (t) {
          var e, i;
          this._bounding.width !== this._seriesContiainer.offsetWidth &&
            (this._seriesContiainer.style.width = "".concat(
              this._bounding.width,
              "px"
            ));
          var o = this._mainWidget.getBounding().height;
          o !== this._seriesContiainer.offsetHeight &&
            (this._seriesContiainer.style.height = "".concat(o, "px"));
          var n = null != t ? t : 3;
          this._mainWidget.update(n),
            null === (e = this._yAxisWidget) || void 0 === e || e.update(n),
            null === (i = this._separatorWidget) || void 0 === i || i.update(n);
        }),
        (t.prototype.getImage = function (t) {
          var e = this._bounding,
            i = e.width,
            o = e.height,
            n = N("canvas", {
              width: "".concat(i, "px"),
              height: "".concat(o, "px"),
              boxSizing: "border-box",
            }),
            r = n.getContext("2d"),
            a = z(n);
          (n.width = i * a), (n.height = o * a), r.scale(a, a);
          var s = 0;
          if (null != this._separatorWidget) {
            var l = this.getChart().getStyles().separator.size;
            (s = l), r.drawImage(this._separatorWidget.getImage(), 0, 0, i, l);
          }
          var c = this._mainWidget.getBounding();
          if (
            (r.drawImage(
              this._mainWidget.getImage(t),
              c.left,
              s,
              c.width,
              c.height
            ),
            null !== this._yAxisWidget)
          ) {
            var u = this._yAxisWidget.getBounding();
            r.drawImage(
              this._yAxisWidget.getImage(t),
              u.left,
              s,
              u.width,
              u.height
            );
          }
          return n;
        }),
        (t.prototype.destroy = function () {
          this._container.removeChild(this._seriesContiainer),
            null !== this._separatorWidget &&
              this._container.removeChild(this._separatorWidget.getContainer());
        }),
        (t.prototype.createSeparatorWidget = function (t) {
          return null;
        }),
        (t.prototype.creatYAxisWidget = function (t) {
          return null;
        }),
        t
      );
    })(),
    Yt = (function () {
      function t(t) {
        (this._instances = new Map()),
          (this._progressInstanceInfo = null),
          (this._pressedInstanceInfo = {
            paneId: "",
            instance: null,
            figureType: 0,
            figureKey: "",
            figureIndex: -1,
            attrsIndex: -1,
          }),
          (this._hoverInstanceInfo = {
            paneId: "",
            instance: null,
            figureType: 0,
            figureKey: "",
            figureIndex: -1,
            attrsIndex: -1,
          }),
          (this._clickInstanceInfo = {
            paneId: "",
            instance: null,
            figureType: 0,
            figureKey: "",
            figureIndex: -1,
            attrsIndex: -1,
          }),
          (this._chartStore = t);
      }
      return (
        (t.prototype._overrideInstance = function (t, e) {
          var i = e.id,
            o = e.groupId,
            n = e.points,
            r = e.styles,
            a = e.lock,
            s = e.visible,
            l = e.mode,
            c = e.extendData,
            u = e.onDrawStart,
            h = e.onDrawing,
            d = e.onDrawEnd,
            p = e.onClick,
            v = e.onRightClick,
            g = e.onPressedMoveStart,
            f = e.onPressedMoving,
            m = e.onPressedMoveEnd,
            y = e.onMouseEnter,
            _ = e.onMouseLeave,
            x = e.onRemoved,
            S = e.onSelected,
            C = e.onDeselected,
            b = !1;
          return (
            void 0 !== i && t.setId(i),
            void 0 !== o && t.setGroupId(o),
            void 0 !== n && t.setPoints(n) && (b = !0),
            void 0 !== r && t.setStyles(r) && (b = !0),
            void 0 !== a && t.setLock(a),
            void 0 !== s && t.setVisible(s) && (b = !0),
            void 0 !== l && t.setMode(l),
            void 0 !== c && t.setExtendData(c) && (b = !0),
            void 0 !== u && t.setOnDrawStartCallback(u),
            void 0 !== h && t.setOnDrawingCallback(h),
            void 0 !== d && t.setOnDrawEndCallback(d),
            void 0 !== p && t.setOnClickCallback(p),
            void 0 !== v && t.setOnRightClickCallback(v),
            void 0 !== g && t.setOnPressedMoveStartCallback(g),
            void 0 !== f && t.setOnPressedMovingCallback(f),
            void 0 !== m && t.setOnPressedMoveEndCallback(m),
            void 0 !== y && t.setOnMouseEnterCallback(y),
            void 0 !== _ && t.setOnMouseLeaveCallback(_),
            void 0 !== x && t.setOnRemovedCallback(x),
            void 0 !== S && t.setOnSelectedCallback(S),
            void 0 !== C && t.setOnDeselectedCallback(C),
            b
          );
        }),
        (t.prototype.getInstanceById = function (t) {
          var e, i;
          try {
            for (
              var o = F(this._instances), n = o.next();
              !n.done;
              n = o.next()
            ) {
              var r = n.value[1].find(function (e) {
                return e.id === t;
              });
              if (void 0 !== r) return r;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              n && !n.done && (i = o.return) && i.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return null !== this._progressInstanceInfo &&
            this._progressInstanceInfo.instance.id === t
            ? this._progressInstanceInfo.instance
            : null;
        }),
        (t.prototype.addInstance = function (t, e, i) {
          var o,
            n,
            r,
            a,
            s = null !== (o = t.id) && void 0 !== o ? o : W("overlay_");
          if (null === this.getInstanceById(s)) {
            var l = new (Dt(t.name))(),
              c = null !== (n = t.groupId) && void 0 !== n ? n : s;
            return (
              (t.id = s),
              (t.groupId = c),
              this._overrideInstance(l, t),
              l.isDrawing()
                ? (this._progressInstanceInfo = {
                    paneId: e,
                    instance: l,
                    appointPaneFlag: i,
                  })
                : (this._instances.has(e) || this._instances.set(e, []),
                  null === (r = this._instances.get(e)) ||
                    void 0 === r ||
                    r.push(l)),
              null === (a = l.onDrawStart) ||
                void 0 === a ||
                a.call(l, { overlay: l }),
              this._chartStore.getChart().updatePane(1, e),
              s
            );
          }
          return null;
        }),
        (t.prototype.getProgressInstanceInfo = function () {
          return this._progressInstanceInfo;
        }),
        (t.prototype.progressInstanceComplete = function () {
          var t;
          if (null !== this._progressInstanceInfo) {
            var e = this._progressInstanceInfo,
              i = e.instance,
              o = e.paneId;
            i.isDrawing() ||
              (this._instances.has(o) || this._instances.set(o, []),
              null === (t = this._instances.get(o)) ||
                void 0 === t ||
                t.push(i),
              (this._progressInstanceInfo = null));
          }
        }),
        (t.prototype.updateProgressInstanceInfo = function (t, e) {
          null !== this._progressInstanceInfo &&
            (void 0 !== e &&
              e &&
              (this._progressInstanceInfo.appointPaneFlag = e),
            (this._progressInstanceInfo.paneId = t));
        }),
        (t.prototype.getInstances = function (t) {
          var e;
          if (void 0 === t) {
            var i = [];
            return (
              this._instances.forEach(function (t) {
                i = i.concat(t);
              }),
              i
            );
          }
          return null !== (e = this._instances.get(t)) && void 0 !== e ? e : [];
        }),
        (t.prototype.override = function (t) {
          var e = this,
            i = t.id,
            o = t.groupId,
            n = t.name,
            r = !1;
          if (void 0 !== i) {
            var a = this.getInstanceById(i);
            null !== a && this._overrideInstance(a, t) && (r = !0);
          } else if (
            (this._instances.forEach(function (i) {
              i.forEach(function (i) {
                ((void 0 !== n && i.name === n) ||
                  (void 0 !== o && i.groupId === o) ||
                  (void 0 === n && void 0 === o)) &&
                  e._overrideInstance(i, t) &&
                  (r = !0);
              });
            }),
            null !== this._progressInstanceInfo)
          ) {
            var s = this._progressInstanceInfo.instance;
            ((void 0 !== n && s.name === n) ||
              (void 0 !== o && s.groupId === o) ||
              (void 0 === n && void 0 === o)) &&
              this._overrideInstance(s, t) &&
              (r = !0);
          }
          r && this._chartStore.getChart().updatePane(1);
        }),
        (t.prototype.removeInstance = function (t) {
          var e,
            i,
            o,
            n = function (t, e) {
              if (void 0 !== t.id) {
                if (e.id !== t.id) return !1;
              } else if (void 0 !== t.groupId) {
                if (e.groupId !== t.groupId) return !1;
              } else if (void 0 !== t.name && e.name !== t.name) return !1;
              return !0;
            },
            r = [];
          if (null !== this._progressInstanceInfo) {
            var a = this._progressInstanceInfo.instance;
            (void 0 === t || (void 0 !== t && n(t, a))) &&
              (r.push(this._progressInstanceInfo.paneId),
              null === (o = a.onRemoved) ||
                void 0 === o ||
                o.call(a, { overlay: a }),
              (this._progressInstanceInfo = null));
          }
          if (void 0 !== t) {
            var s = new Map(),
              l = function (e) {
                var i = e[1].filter(function (i) {
                  var o;
                  return (
                    !n(t, i) ||
                    (r.includes(e[0]) || r.push(e[0]),
                    null === (o = i.onRemoved) ||
                      void 0 === o ||
                      o.call(i, { overlay: i }),
                    !1)
                  );
                });
                i.length > 0 && s.set(e[0], i);
              };
            try {
              for (
                var c = F(this._instances), u = c.next();
                !u.done;
                u = c.next()
              ) {
                l(u.value);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                u && !u.done && (i = c.return) && i.call(c);
              } finally {
                if (e) throw e.error;
              }
            }
            this._instances = s;
          } else
            this._instances.forEach(function (t, e) {
              r.push(e),
                t.forEach(function (t) {
                  var e;
                  null === (e = t.onRemoved) ||
                    void 0 === e ||
                    e.call(t, { overlay: t });
                });
            }),
              this._instances.clear();
          if (r.length > 0) {
            var h = this._chartStore.getChart();
            r.forEach(function (t) {
              h.updatePane(1, t);
            }),
              h.updatePane(1, Nt);
          }
        }),
        (t.prototype.setPressedInstanceInfo = function (t) {
          this._pressedInstanceInfo = t;
        }),
        (t.prototype.getPressedInstanceInfo = function () {
          return this._pressedInstanceInfo;
        }),
        (t.prototype.setHoverInstanceInfo = function (t, e) {
          var i,
            o,
            n,
            r,
            a,
            s = this._hoverInstanceInfo,
            l = s.instance,
            c = s.figureKey,
            u = s.figureIndex;
          ((null == l ? void 0 : l.id) ===
            (null === (i = t.instance) || void 0 === i ? void 0 : i.id) &&
            s.figureType === t.figureType &&
            u === t.figureIndex) ||
            ((this._hoverInstanceInfo = t),
            (null == l ? void 0 : l.id) !==
              (null === (o = t.instance) || void 0 === o ? void 0 : o.id) &&
              (null === (n = null == l ? void 0 : l.onMouseLeave) ||
                void 0 === n ||
                n.call(l, M({ overlay: l, figureKey: c, figureIndex: u }, e)),
              null ===
                (a =
                  null === (r = t.instance) || void 0 === r
                    ? void 0
                    : r.onMouseEnter) ||
                void 0 === a ||
                a.call(
                  r,
                  M(
                    {
                      overlay: t.instance,
                      figureKey: t.figureKey,
                      figureIndex: t.figureIndex,
                    },
                    e
                  )
                )));
        }),
        (t.prototype.getHoverInstanceInfo = function () {
          return this._hoverInstanceInfo;
        }),
        (t.prototype.setClickInstanceInfo = function (t, e) {
          var i,
            o,
            n,
            r,
            a,
            s,
            l,
            c,
            u,
            h = this._clickInstanceInfo,
            d = h.paneId,
            p = h.instance,
            v = h.figureType,
            g = h.figureKey,
            f = h.figureIndex;
          if (
            ((null !==
              (o =
                null === (i = t.instance) || void 0 === i
                  ? void 0
                  : i.isDrawing()) &&
              void 0 !== o &&
              o) ||
              null ===
                (r =
                  null === (n = t.instance) || void 0 === n
                    ? void 0
                    : n.onClick) ||
              void 0 === r ||
              r.call(
                n,
                M(
                  {
                    overlay: t.instance,
                    figureKey: t.figureKey,
                    figureIndex: t.figureIndex,
                  },
                  e
                )
              ),
            ((null == p ? void 0 : p.id) !==
              (null === (a = t.instance) || void 0 === a ? void 0 : a.id) ||
              v !== t.figureType ||
              f !== t.figureIndex) &&
              ((this._clickInstanceInfo = t),
              (null == p ? void 0 : p.id) !==
                (null === (s = t.instance) || void 0 === s ? void 0 : s.id)))
          ) {
            null === (l = null == p ? void 0 : p.onDeselected) ||
              void 0 === l ||
              l.call(p, M({ overlay: p, figureKey: g, figureIndex: f }, e)),
              null ===
                (u =
                  null === (c = t.instance) || void 0 === c
                    ? void 0
                    : c.onSelected) ||
                void 0 === u ||
                u.call(
                  c,
                  M(
                    {
                      overlay: t.instance,
                      figureKey: t.figureKey,
                      figureIndex: t.figureIndex,
                    },
                    e
                  )
                );
            var m = this._chartStore.getChart();
            m.updatePane(1, t.paneId),
              d !== t.paneId && m.updatePane(1, d),
              m.updatePane(1, Nt);
          }
        }),
        (t.prototype.getClickInstanceInfo = function () {
          return this._clickInstanceInfo;
        }),
        (t.prototype.isEmpty = function () {
          return (
            0 === this._instances.size && null === this._progressInstanceInfo
          );
        }),
        (t.prototype.isDrawing = function () {
          var t, e;
          return (
            null !== this._progressInstanceInfo &&
            null !==
              (e =
                null === (t = this._progressInstanceInfo) || void 0 === t
                  ? void 0
                  : t.instance.isDrawing()) &&
            void 0 !== e &&
            e
          );
        }),
        t
      );
    })(),
    Ht = (function () {
      function t() {
        this._actions = new Map();
      }
      return (
        (t.prototype.execute = function (t, e) {
          var i;
          null === (i = this._actions.get(t)) || void 0 === i || i.execute(e);
        }),
        (t.prototype.subscribe = function (t, e) {
          var i;
          this._actions.has(t) || this._actions.set(t, new O()),
            null === (i = this._actions.get(t)) ||
              void 0 === i ||
              i.subscribe(e);
        }),
        (t.prototype.unsubscribe = function (t, e) {
          var i = this._actions.get(t);
          void 0 !== i &&
            (i.unsubscribe(e), i.isEmpty() && this._actions.delete(t));
        }),
        (t.prototype.has = function (t) {
          var e = this._actions.get(t);
          return void 0 !== e && !e.isEmpty();
        }),
        t
      );
    })(),
    Xt = {
      light: {
        grid: {
          horizontal: { color: "#EDEDED" },
          vertical: { color: "#EDEDED" },
        },
        candle: {
          priceMark: { high: { color: "#76808F" }, low: { color: "#76808F" } },
          tooltip: {
            rect: { color: "#FEFEFE", borderColor: "#F2F3F5" },
            text: { color: "#76808F" },
          },
        },
        indicator: { tooltip: { text: { color: "#76808F" } } },
        xAxis: {
          axisLine: { color: "#DDDDDD" },
          tickText: { color: "#76808F" },
          tickLine: { color: "#DDDDDD" },
        },
        yAxis: {
          axisLine: { color: "#DDDDDD" },
          tickText: { color: "#76808F" },
          tickLine: { color: "#DDDDDD" },
        },
        separator: { color: "#DDDDDD" },
        crosshair: {
          horizontal: {
            line: { color: "#76808F" },
            text: { borderColor: "#686D76", backgroundColor: "#686D76" },
          },
          vertical: {
            line: { color: "#76808F" },
            text: { borderColor: "#686D76", backgroundColor: "#686D76" },
          },
        },
      },
      dark: {
        grid: {
          horizontal: { color: "#292929" },
          vertical: { color: "#292929" },
        },
        candle: {
          priceMark: { high: { color: "#929AA5" }, low: { color: "#929AA5" } },
          tooltip: {
            rect: {
              color: "rgba(10, 10, 10, .6)",
              borderColor: "rgba(10, 10, 10, .6)",
            },
            text: { color: "#929AA5" },
          },
        },
        indicator: { tooltip: { text: { color: "#929AA5" } } },
        xAxis: {
          axisLine: { color: "#333333" },
          tickText: { color: "#929AA5" },
          tickLine: { color: "#333333" },
        },
        yAxis: {
          axisLine: { color: "#333333" },
          tickText: { color: "#929AA5" },
          tickLine: { color: "#333333" },
        },
        separator: { color: "#333333" },
        crosshair: {
          horizontal: {
            line: { color: "#929AA5" },
            text: { borderColor: "#373a40", backgroundColor: "#373a40" },
          },
          vertical: {
            line: { color: "#929AA5" },
            text: { borderColor: "#373a40", backgroundColor: "#373a40" },
          },
        },
      },
    };
  function jt(t) {
    var e;
    return null !== (e = Xt[t]) && void 0 !== e ? e : null;
  }
  var Gt = (function () {
    function i(e, i) {
      (this._styles = {
        grid: {
          show: !0,
          horizontal: {
            show: !0,
            size: 1,
            color: "#EDEDED",
            style: t.LineType.Dashed,
            dashedValue: [2, 2],
          },
          vertical: {
            show: !0,
            size: 1,
            color: "#EDEDED",
            style: t.LineType.Dashed,
            dashedValue: [2, 2],
          },
        },
        candle: {
          type: t.CandleType.CandleSolid,
          bar: {
            upColor: "#2DC08E",
            downColor: "#F92855",
            noChangeColor: "#888888",
            upBorderColor: "#2DC08E",
            downBorderColor: "#F92855",
            noChangeBorderColor: "#888888",
            upWickColor: "#2DC08E",
            downWickColor: "#F92855",
            noChangeWickColor: "#888888",
          },
          area: {
            lineSize: 2,
            lineColor: "#1677FF",
            value: "close",
            backgroundColor: [
              { offset: 0, color: "rgba(22, 119, 255, 0.01)" },
              { offset: 1, color: "rgba(22, 119, 255, 0.2)" },
            ],
          },
          priceMark: {
            show: !0,
            high: {
              show: !0,
              color: "#76808F",
              textOffset: 5,
              textSize: 10,
              textFamily: "Helvetica Neue",
              textWeight: "normal",
            },
            low: {
              show: !0,
              color: "#76808F",
              textOffset: 5,
              textSize: 10,
              textFamily: "Helvetica Neue",
              textWeight: "normal",
            },
            last: {
              show: !0,
              upColor: "#2DC08E",
              downColor: "#F92855",
              noChangeColor: "#888888",
              line: {
                show: !0,
                style: t.LineType.Dashed,
                dashedValue: [4, 4],
                size: 1,
              },
              text: {
                show: !0,
                style: t.PolygonType.Fill,
                size: 12,
                paddingLeft: 4,
                paddingTop: 4,
                paddingRight: 4,
                paddingBottom: 4,
                borderStyle: t.LineType.Solid,
                borderSize: 1,
                borderDashedValue: [2, 2],
                color: "#FFFFFF",
                family: "Helvetica Neue",
                weight: "normal",
                borderRadius: 2,
              },
            },
          },
          tooltip: {
            showRule: t.TooltipShowRule.Always,
            showType: t.TooltipShowType.Standard,
            custom: null,
            defaultValue: "n/a",
            rect: {
              position: g.Fixed,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 8,
              offsetLeft: 10,
              offsetTop: 8,
              offsetRight: 10,
              offsetBottom: 8,
              borderRadius: 4,
              borderSize: 1,
              borderColor: "#F2F3F5",
              color: "#FEFEFE",
            },
            text: {
              size: 12,
              family: "Helvetica Neue",
              weight: "normal",
              color: "#76808F",
              marginLeft: 10,
              marginTop: 8,
              marginRight: 6,
              marginBottom: 0,
            },
            icons: [],
          },
        },
        indicator: {
          ohlc: {
            upColor: "rgba(45, 192, 142, .7)",
            downColor: "rgba(249, 40, 85, .7)",
            noChangeColor: "#888888",
          },
          bars: [
            {
              style: t.PolygonType.Fill,
              borderStyle: t.LineType.Solid,
              borderSize: 1,
              borderDashedValue: [2, 2],
              upColor: "rgba(45, 192, 142, .7)",
              downColor: "rgba(249, 40, 85, .7)",
              noChangeColor: "#888888",
            },
          ],
          lines: [
            {
              style: t.LineType.Solid,
              smooth: !1,
              size: 1,
              dashedValue: [2, 2],
              color: "#FF9600",
            },
            {
              style: t.LineType.Solid,
              smooth: !1,
              size: 1,
              dashedValue: [2, 2],
              color: "#935EBD",
            },
            {
              style: t.LineType.Solid,
              smooth: !1,
              size: 1,
              dashedValue: [2, 2],
              color: "#1677FF",
            },
            {
              style: t.LineType.Solid,
              smooth: !1,
              size: 1,
              dashedValue: [2, 2],
              color: "#E11D74",
            },
            {
              style: t.LineType.Solid,
              smooth: !1,
              size: 1,
              dashedValue: [2, 2],
              color: "#01C5C4",
            },
          ],
          circles: [
            {
              style: t.PolygonType.Fill,
              borderStyle: t.LineType.Solid,
              borderSize: 1,
              borderDashedValue: [2, 2],
              upColor: "rgba(45, 192, 142, .7)",
              downColor: "rgba(249, 40, 85, .7)",
              noChangeColor: "#888888",
            },
          ],
          lastValueMark: {
            show: !1,
            text: {
              show: !1,
              style: t.PolygonType.Fill,
              color: "#FFFFFF",
              size: 12,
              family: "Helvetica Neue",
              weight: "normal",
              borderStyle: t.LineType.Solid,
              borderSize: 1,
              borderDashedValue: [2, 2],
              paddingLeft: 4,
              paddingTop: 4,
              paddingRight: 4,
              paddingBottom: 4,
              borderRadius: 2,
            },
          },
          tooltip: {
            showRule: t.TooltipShowRule.Always,
            showType: t.TooltipShowType.Standard,
            showName: !0,
            showParams: !0,
            defaultValue: "n/a",
            text: {
              size: 12,
              family: "Helvetica Neue",
              weight: "normal",
              color: "#76808F",
              marginLeft: 10,
              marginTop: 8,
              marginRight: 6,
              marginBottom: 0,
            },
            icons: [],
          },
        },
        xAxis: {
          show: !0,
          size: "auto",
          axisLine: { show: !0, color: "#DDDDDD", size: 1 },
          tickText: {
            show: !0,
            color: "#76808F",
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
            marginStart: 4,
            marginEnd: 4,
          },
          tickLine: { show: !0, size: 1, length: 3, color: "#DDDDDD" },
        },
        yAxis: {
          show: !0,
          size: "auto",
          type: t.YAxisType.Normal,
          position: t.YAxisPosition.Right,
          inside: !1,
          reverse: !1,
          axisLine: { show: !0, color: "#DDDDDD", size: 1 },
          tickText: {
            show: !0,
            color: "#76808F",
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
            marginStart: 4,
            marginEnd: 4,
          },
          tickLine: { show: !0, size: 1, length: 3, color: "#DDDDDD" },
        },
        separator: {
          size: 1,
          color: "#DDDDDD",
          fill: !0,
          activeBackgroundColor: "rgba(33, 150, 243, 0.08)",
        },
        crosshair: {
          show: !0,
          horizontal: {
            show: !0,
            line: {
              show: !0,
              style: t.LineType.Dashed,
              dashedValue: [4, 2],
              size: 1,
              color: "#76808F",
            },
            text: {
              show: !0,
              style: t.PolygonType.Fill,
              color: "#FFFFFF",
              size: 12,
              family: "Helvetica Neue",
              weight: "normal",
              borderStyle: t.LineType.Solid,
              borderDashedValue: [2, 2],
              borderSize: 1,
              borderColor: "#686D76",
              borderRadius: 2,
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 4,
              paddingBottom: 4,
              backgroundColor: "#686D76",
            },
          },
          vertical: {
            show: !0,
            line: {
              show: !0,
              style: t.LineType.Dashed,
              dashedValue: [4, 2],
              size: 1,
              color: "#76808F",
            },
            text: {
              show: !0,
              style: t.PolygonType.Fill,
              color: "#FFFFFF",
              size: 12,
              family: "Helvetica Neue",
              weight: "normal",
              borderStyle: t.LineType.Solid,
              borderDashedValue: [2, 2],
              borderSize: 1,
              borderRadius: 2,
              borderColor: "#686D76",
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 4,
              paddingBottom: 4,
              backgroundColor: "#686D76",
            },
          },
        },
        overlay: {
          point: {
            color: "#1677FF",
            borderColor: "rgba(22, 119, 255, 0.35)",
            borderSize: 1,
            radius: 5,
            activeColor: "#1677FF",
            activeBorderColor: "rgba(22, 119, 255, 0.35)",
            activeBorderSize: 3,
            activeRadius: 5,
          },
          line: {
            style: t.LineType.Solid,
            smooth: !1,
            color: "#1677FF",
            size: 1,
            dashedValue: [2, 2],
          },
          rect: {
            style: t.PolygonType.Fill,
            color: "rgba(22, 119, 255, 0.25)",
            borderColor: "#1677FF",
            borderSize: 1,
            borderRadius: 0,
            borderStyle: t.LineType.Solid,
            borderDashedValue: [2, 2],
          },
          polygon: {
            style: t.PolygonType.Fill,
            color: "#1677FF",
            borderColor: "#1677FF",
            borderSize: 1,
            borderStyle: t.LineType.Solid,
            borderDashedValue: [2, 2],
          },
          circle: {
            style: t.PolygonType.Fill,
            color: "rgba(22, 119, 255, 0.25)",
            borderColor: "#1677FF",
            borderSize: 1,
            borderStyle: t.LineType.Solid,
            borderDashedValue: [2, 2],
          },
          arc: {
            style: t.LineType.Solid,
            color: "#1677FF",
            size: 1,
            dashedValue: [2, 2],
          },
          text: {
            color: "#1677FF",
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
          },
          rectText: {
            style: t.PolygonType.Fill,
            color: "#FFFFFF",
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
            borderStyle: t.LineType.Solid,
            borderDashedValue: [2, 2],
            borderSize: 1,
            borderRadius: 2,
            borderColor: "#1677FF",
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 4,
            paddingBottom: 4,
            backgroundColor: "#1677FF",
          },
        },
      }),
        (this._customApi = { formatDate: b, formatBigNumber: T }),
        (this._locale = "en-US"),
        (this._precision = { price: 2, volume: 0 }),
        (this._thousandsSeparator = ","),
        (this._dataList = []),
        (this._timeScaleStore = new J(this)),
        (this._indicatorStore = new ht(this)),
        (this._overlayStore = new Yt(this)),
        (this._crosshairStore = new dt(this)),
        (this._tooltipStore = new pt()),
        (this._actionStore = new Ht()),
        (this._visibleDataList = []),
        (this._chart = e),
        this.setOptions(i);
    }
    return (
      (i.prototype.adjustVisibleDataList = function () {
        this._visibleDataList = [];
        for (
          var t = this._timeScaleStore.getVisibleRange(), e = t.to, i = t.from;
          e > i;
          i++
        ) {
          var o = this._dataList[i],
            n = this._timeScaleStore.dataIndexToCoordinate(i);
          this._visibleDataList.push({ dataIndex: i, x: n, data: o });
        }
      }),
      (i.prototype.setOptions = function (t) {
        if (void 0 !== t) {
          var i = t.locale,
            o = t.timezone,
            n = t.styles,
            r = t.customApi;
          void 0 !== i && (this._locale = i),
            void 0 !== o && this._timeScaleStore.setTimezone(o),
            void 0 !== n &&
              (c(n) ? e(this._styles, jt(n)) : e(this._styles, n)),
            void 0 !== r && e(this._customApi, r),
            void 0 !== t.thousandsSeparator &&
              (this._thousandsSeparator = t.thousandsSeparator);
        }
        return this;
      }),
      (i.prototype.getStyles = function () {
        return this._styles;
      }),
      (i.prototype.getLocale = function () {
        return this._locale;
      }),
      (i.prototype.getCustomApi = function () {
        return this._customApi;
      }),
      (i.prototype.getThousandsSeparator = function () {
        return this._thousandsSeparator;
      }),
      (i.prototype.getPrecision = function () {
        return this._precision;
      }),
      (i.prototype.setPrecision = function (t) {
        return (
          (this._precision = t),
          this._indicatorStore.setSeriesPrecision(t),
          this
        );
      }),
      (i.prototype.getDataList = function () {
        return this._dataList;
      }),
      (i.prototype.getVisibleDataList = function () {
        return this._visibleDataList;
      }),
      (i.prototype.addData = function (t, e, i) {
        if (o(t)) {
          this._timeScaleStore.setLoading(!1),
            this._timeScaleStore.setMore(null == i || i);
          var n = 0 === this._dataList.length;
          (this._dataList = t.concat(this._dataList)),
            n && this._timeScaleStore.resetOffsetRightDistance(),
            this._timeScaleStore.adjustVisibleRange();
        } else {
          if (e < this._dataList.length)
            (this._dataList[e] = t), this.adjustVisibleDataList();
          else {
            this._dataList.push(t);
            var r = this._timeScaleStore.getOffsetRightBarCount();
            0 > r && this._timeScaleStore.setOffsetRightBarCount(--r),
              this._timeScaleStore.adjustVisibleRange();
          }
        }
        this._crosshairStore.recalculate(!0);
      }),
      (i.prototype.clearDataList = function () {
        (this._dataList = []),
          (this._visibleDataList = []),
          this._timeScaleStore.clear();
      }),
      (i.prototype.getTimeScaleStore = function () {
        return this._timeScaleStore;
      }),
      (i.prototype.getIndicatorStore = function () {
        return this._indicatorStore;
      }),
      (i.prototype.getOverlayStore = function () {
        return this._overlayStore;
      }),
      (i.prototype.getCrosshairStore = function () {
        return this._crosshairStore;
      }),
      (i.prototype.getTooltipStore = function () {
        return this._tooltipStore;
      }),
      (i.prototype.getActionStore = function () {
        return this._actionStore;
      }),
      (i.prototype.getChart = function () {
        return this._chart;
      }),
      i
    );
  })();
  function Kt(t) {
    return null == window.requestAnimationFrame
      ? window.setTimeout(t, 20)
      : window.requestAnimationFrame(t);
  }
  function Ut(t) {
    null == window.cancelAnimationFrame && window.clearTimeout(t),
      window.cancelAnimationFrame(t);
  }
  var qt = -1,
    Zt = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
          (e._mainRequestAnimationId = qt),
          (e._overlayRequestAnimationId = qt),
          e
        );
      }
      return (
        P(e, t),
        (e.prototype.getContainerStyle = function () {
          return {
            margin: "0",
            padding: "0",
            position: "absolute",
            top: "0",
            overflow: "hidden",
            boxSizing: "border-box",
          };
        }),
        (e.prototype.initDom = function (t) {
          (this._mainCanvas = N("canvas", {
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "2",
            boxSizing: "border-box",
          })),
            (this._mainCtx = this._mainCanvas.getContext("2d")),
            (this._overlayCanvas = N("canvas", {
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "2",
              boxSizing: "border-box",
            })),
            (this._overlayCtx = this._overlayCanvas.getContext("2d")),
            t.appendChild(this._mainCanvas),
            t.appendChild(this._overlayCanvas);
        }),
        (e.prototype._optimalUpdateMain = function (t, e) {
          var i = this;
          this._mainRequestAnimationId !== qt &&
            (Ut(this._mainRequestAnimationId),
            (this._mainRequestAnimationId = qt)),
            (this._mainRequestAnimationId = Kt(function () {
              if (
                t !== i._mainCanvas.offsetWidth ||
                e !== i._mainCanvas.offsetHeight
              ) {
                i._mainCtx.clearRect(
                  0,
                  0,
                  i._mainCanvas.offsetWidth,
                  i._mainCanvas.offsetHeight
                );
                var o = z(i._mainCanvas),
                  n = Math.floor(t * o),
                  r = Math.floor(e * o);
                (i._mainCanvas.style.width = "".concat(t, "px")),
                  (i._mainCanvas.style.height = "".concat(e, "px")),
                  (i._mainCanvas.width = n),
                  (i._mainCanvas.height = r),
                  i._mainCtx.scale(o, o);
              } else i._mainCtx.clearRect(0, 0, i._mainCanvas.offsetWidth, i._mainCanvas.offsetHeight);
              i.updateMain(i._mainCtx);
            }));
        }),
        (e.prototype._optimalUpdateOverlay = function (t, e) {
          var i = this;
          this._overlayRequestAnimationId !== qt &&
            (Ut(this._overlayRequestAnimationId),
            (this._overlayRequestAnimationId = qt)),
            (this._overlayRequestAnimationId = Kt(function () {
              if (
                t !== i._overlayCanvas.offsetWidth ||
                e !== i._overlayCanvas.offsetHeight
              ) {
                i._overlayCtx.clearRect(
                  0,
                  0,
                  i._overlayCanvas.offsetWidth,
                  i._overlayCanvas.offsetHeight
                );
                var o = z(i._overlayCanvas),
                  n = Math.floor(t * o),
                  r = Math.floor(e * o);
                (i._overlayCanvas.style.width = "".concat(t, "px")),
                  (i._overlayCanvas.style.height = "".concat(e, "px")),
                  (i._overlayCanvas.width = n),
                  (i._overlayCanvas.height = r),
                  i._overlayCtx.scale(o, o);
              } else i._overlayCtx.clearRect(0, 0, i._overlayCanvas.offsetWidth, i._overlayCanvas.offsetHeight);
              i.updateOverlay(i._overlayCtx);
            }));
        }),
        (e.prototype.updateImp = function (t, e, i) {
          var o = i.width,
            n = i.height;
          e.style.left = "".concat(i.left, "px");
          var r = t;
          switch (
            ((o === e.offsetWidth && n === e.offsetHeight) ||
              ((e.style.width = "".concat(o, "px")),
              (e.style.height = "".concat(n, "px")),
              (r = 3)),
            r)
          ) {
            case 0:
              this._optimalUpdateMain(o, n);
              break;
            case 1:
              this._optimalUpdateOverlay(o, n);
              break;
            case 3:
            case 4:
              this._optimalUpdateMain(o, n), this._optimalUpdateOverlay(o, n);
          }
        }),
        (e.prototype.getImage = function (t) {
          var e = this.getBounding(),
            i = e.width,
            o = e.height,
            n = N("canvas", {
              width: "".concat(i, "px"),
              height: "".concat(o, "px"),
              boxSizing: "border-box",
            }),
            r = n.getContext("2d"),
            a = z(n);
          return (
            (n.width = i * a),
            (n.height = o * a),
            r.scale(a, a),
            r.drawImage(this._mainCanvas, 0, 0, i, o),
            t && r.drawImage(this._overlayCanvas, 0, 0, i, o),
            n
          );
        }),
        e
      );
    })(Bt),
    $t = (function (t) {
      function e(e) {
        var i = t.call(this) || this;
        return (i.attrs = e.attrs), (i.styles = e.styles), i;
      }
      return (
        P(e, t),
        (e.prototype.checkEventOn = function (t) {
          return this.checkEventOnImp(t, this.attrs, this.styles);
        }),
        (e.prototype.draw = function (t) {
          this.drawImp(t, this.attrs, this.styles);
        }),
        (e.extend = function (t) {
          var i = (function (e) {
            function i() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              P(i, e),
              (i.prototype.checkEventOnImp = function (e, i, o) {
                return t.checkEventOn(e, i, o);
              }),
              (i.prototype.drawImp = function (e, i, o) {
                t.draw(e, i, o);
              }),
              i
            );
          })(e);
          return i;
        }),
        e
      );
    })(kt);
  function Jt(t, e) {
    var i = t.x - e.x,
      o = t.y - e.y,
      n = e.r;
    return !(i * i + o * o > n * n);
  }
  function Qt(e, i, o) {
    var n = i.x,
      r = i.y,
      a = i.r,
      s = o.style,
      l = void 0 === s ? t.PolygonType.Fill : s,
      c = o.color,
      u = o.borderSize,
      h = void 0 === u ? 1 : u,
      d = o.borderColor,
      p = void 0 === d ? "currentColor" : d,
      v = o.borderStyle,
      g = void 0 === v ? t.LineType.Solid : v,
      f = o.borderDashedValue,
      m = void 0 === f ? [2, 2] : f;
    (l !== t.PolygonType.Fill && o.style !== t.PolygonType.StrokeFill) ||
      ((e.fillStyle = void 0 === c ? "currentColor" : c),
      e.beginPath(),
      e.arc(n, r, a, 0, 2 * Math.PI),
      e.closePath(),
      e.fill()),
      (l !== t.PolygonType.Stroke && o.style !== t.PolygonType.StrokeFill) ||
        ((e.strokeStyle = p),
        (e.lineWidth = h),
        e.setLineDash(g === t.LineType.Dashed ? m : []),
        e.beginPath(),
        e.arc(n, r, a, 0, 2 * Math.PI),
        e.closePath(),
        e.stroke());
  }
  var te = {
    name: "circle",
    checkEventOn: Jt,
    draw: function (t, e, i) {
      Qt(t, e, i);
    },
  };
  function ee(t, e) {
    for (
      var i = !1, o = e.coordinates, n = 0, r = o.length - 1;
      o.length > n;
      r = n++
    )
      o[n].y > t.y != o[r].y > t.y &&
        ((o[r].x - o[n].x) * (t.y - o[n].y)) / (o[r].y - o[n].y) + o[n].x >
          t.x &&
        (i = !i);
    return i;
  }
  function ie(e, i, o) {
    var n = i.coordinates,
      r = o.style,
      a = void 0 === r ? t.PolygonType.Fill : r,
      s = o.color,
      l = o.borderSize,
      c = void 0 === l ? 1 : l,
      u = o.borderColor,
      h = void 0 === u ? "currentColor" : u,
      d = o.borderStyle,
      p = void 0 === d ? t.LineType.Solid : d,
      v = o.borderDashedValue,
      g = void 0 === v ? [2, 2] : v;
    if (a === t.PolygonType.Fill || o.style === t.PolygonType.StrokeFill) {
      (e.fillStyle = void 0 === s ? "currentColor" : s),
        e.beginPath(),
        e.moveTo(n[0].x, n[0].y);
      for (var f = 1; n.length > f; f++) e.lineTo(n[f].x, n[f].y);
      e.closePath(), e.fill();
    }
    if (a === t.PolygonType.Stroke || o.style === t.PolygonType.StrokeFill) {
      (e.strokeStyle = h),
        (e.lineWidth = c),
        e.setLineDash(p === t.LineType.Dashed ? g : []),
        e.beginPath(),
        e.moveTo(n[0].x, n[0].y);
      for (f = 1; n.length > f; f++) e.lineTo(n[f].x, n[f].y);
      e.closePath(), e.stroke();
    }
  }
  var oe = {
    name: "polygon",
    checkEventOn: ee,
    draw: function (t, e, i) {
      ie(t, e, i);
    },
  };
  function ne(t, e) {
    return !(
      e.x > t.x ||
      t.x > e.x + e.width ||
      e.y > t.y ||
      t.y > e.y + e.height
    );
  }
  function re(e, i, o) {
    var n = i.x,
      r = i.y,
      a = i.width,
      s = i.height,
      l = o.style,
      c = void 0 === l ? t.PolygonType.Fill : l,
      u = o.color,
      h = o.borderSize,
      d = void 0 === h ? 1 : h,
      p = o.borderColor,
      v = void 0 === p ? "currentColor" : p,
      g = o.borderStyle,
      f = void 0 === g ? t.LineType.Solid : g,
      m = o.borderRadius,
      y = void 0 === m ? 0 : m,
      _ = o.borderDashedValue,
      x = void 0 === _ ? [2, 2] : _;
    (c !== t.PolygonType.Fill && o.style !== t.PolygonType.StrokeFill) ||
      ((e.fillStyle = void 0 === u ? "currentColor" : u),
      e.beginPath(),
      e.moveTo(n + y, r),
      e.arcTo(n + a, r, n + a, r + s, y),
      e.arcTo(n + a, r + s, n, r + s, y),
      e.arcTo(n, r + s, n, r, y),
      e.arcTo(n, r, n + a, r, y),
      e.closePath(),
      e.fill()),
      (c !== t.PolygonType.Stroke && o.style !== t.PolygonType.StrokeFill) ||
        ((e.strokeStyle = v),
        (e.lineWidth = d),
        e.setLineDash(f === t.LineType.Dashed ? x : []),
        e.beginPath(),
        e.moveTo(n + y, r),
        e.arcTo(n + a, r, n + a, r + s, y),
        e.arcTo(n + a, r + s, n, r + s, y),
        e.arcTo(n, r + s, n, r, y),
        e.arcTo(n, r, n + a, r, y),
        e.closePath(),
        e.stroke());
  }
  var ae = {
    name: "rect",
    checkEventOn: ne,
    draw: function (t, e, i) {
      re(t, e, i);
    },
  };
  function se(t, e, i) {
    var o = e.size,
      n = void 0 === o ? 12 : o,
      r = e.paddingLeft,
      a = void 0 === r ? 0 : r,
      s = e.paddingTop,
      l = void 0 === s ? 0 : s,
      c = e.paddingRight,
      u = void 0 === c ? 0 : c,
      h = e.paddingBottom,
      d = void 0 === h ? 0 : h,
      p = t.x,
      v = t.y,
      g = t.align,
      f = t.baseline,
      m = void 0 === f ? "top" : f;
    i = null != i ? i : n * t.text.length;
    var y,
      _,
      x = n;
    switch (void 0 === g ? "left" : g) {
      case "left":
      case "start":
        y = p;
        break;
      case "right":
      case "end":
        y = p - u - i - a;
        break;
      default:
        y = p - i / 2 - a;
    }
    switch (m) {
      case "top":
      case "hanging":
        _ = v;
        break;
      case "bottom":
      case "ideographic":
      case "alphabetic":
        _ = v - x - l - d;
        break;
      default:
        _ = v - x / 2 - l;
    }
    return { x: y, y: _, width: a + i + u, height: l + x + d };
  }
  function le(t, e, i) {
    var o = se(e, i),
      n = o.x,
      r = o.y;
    return !(n > t.x || t.x > n + o.width || r > t.y || t.y > r + o.height);
  }
  function ce(t, e, i) {
    var o = e.x,
      n = e.y,
      r = e.text,
      a = e.align,
      s = e.baseline,
      l = void 0 === s ? "top" : s,
      c = i.color,
      u = void 0 === c ? "currentColor" : c,
      h = i.size,
      d = void 0 === h ? 12 : h,
      p = i.family,
      v = i.weight;
    (t.textAlign = void 0 === a ? "left" : a),
      (t.textBaseline = l),
      (t.font = Y(d, v, p)),
      (t.fillStyle = u),
      t.fillText(r, o, n);
  }
  var ue = {
    name: "text",
    checkEventOn: function (t, e, i) {
      return le(t, e, i);
    },
    draw: function (t, e, i) {
      ce(t, e, i);
    },
  };
  function he(t, e, i) {
    var o = e.text,
      n = i.size,
      r = i.paddingLeft,
      a = void 0 === r ? 0 : r,
      s = i.paddingTop,
      l = void 0 === s ? 0 : s;
    t.font = Y(void 0 === n ? 12 : n, i.weight, i.family);
    var c = se(e, i, t.measureText(o).width);
    re(t, c, M(M({}, i), { color: i.backgroundColor })),
      ce(
        t,
        { x: c.x + a, y: c.y + l, text: o, align: "left", baseline: "top" },
        i
      );
  }
  var de = {
    name: "rectText",
    checkEventOn: function (t, e, i) {
      return le(t, e, i);
    },
    draw: function (t, e, i) {
      he(t, e, i);
    },
  };
  function pe(t, e) {
    if (
      2 >
      Math.abs(
        Math.sqrt((h = (c = t).x - (u = e).x) * h + (d = c.y - u.y) * d) - e.r
      )
    ) {
      var i = e.r,
        o = e.startAngle,
        n = e.endAngle,
        r = i * Math.cos(o) + e.x,
        a = i * Math.sin(o) + e.y,
        s = i * Math.cos(n) + e.x,
        l = i * Math.sin(n) + e.y;
      return !(
        t.x > Math.max(r, s) + 2 ||
        Math.min(r, s) - 2 > t.x ||
        t.y > Math.max(a, l) + 2 ||
        Math.min(a, l) - 2 > t.y
      );
    }
    var c, u, h, d;
    return !1;
  }
  function ve(e, i, o) {
    var n = i.x,
      r = i.y,
      a = i.r,
      s = i.startAngle,
      l = i.endAngle,
      c = o.style,
      u = void 0 === c ? t.LineType.Solid : c,
      h = o.size,
      d = o.color,
      p = void 0 === d ? "currentColor" : d,
      v = o.dashedValue,
      g = void 0 === v ? [2, 2] : v;
    (e.lineWidth = void 0 === h ? 1 : h),
      (e.strokeStyle = p),
      e.setLineDash(u === t.LineType.Dashed ? g : []),
      e.beginPath(),
      e.arc(n, r, a, s, l),
      e.stroke(),
      e.closePath();
  }
  var ge = {
      name: "arc",
      checkEventOn: pe,
      draw: function (t, e, i) {
        ve(t, e, i);
      },
    },
    fe = {};
  [te, bt, oe, ae, ue, de, ge].forEach(function (t) {
    fe[t.name] = $t.extend(t);
  });
  var me = (function (t) {
      function e(e) {
        var i = t.call(this) || this;
        return (i._widget = e), i;
      }
      return (
        P(e, t),
        (e.prototype.getWidget = function () {
          return this._widget;
        }),
        (e.prototype.createFigure = function (t, e, i, o) {
          var n = (function (t) {
            var e;
            return null !== (e = fe[t]) && void 0 !== e ? e : null;
          })(t);
          if (null !== n) {
            var r = new n({ name: t, attrs: e, styles: i });
            if (void 0 !== o) {
              for (var a in o) o.hasOwnProperty(a) && r.registerEvent(a, o[a]);
              this.addChild(r);
            }
            return r;
          }
          return null;
        }),
        (e.prototype.draw = function (t) {
          this.clear(), this.drawImp(t);
        }),
        e
      );
    })(kt),
    ye = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.drawImp = function (t) {
          var e,
            i = this,
            o = this.getWidget(),
            n = this.getWidget().getPane(),
            r = n.getChart(),
            a = o.getBounding(),
            s = r.getStyles().grid;
          if (s.show) {
            t.save(), (t.globalCompositeOperation = "destination-over");
            var l = s.horizontal;
            if (l.show)
              n.getAxisComponent()
                .getTicks()
                .forEach(function (e) {
                  var o;
                  null ===
                    (o = i.createFigure(
                      "line",
                      {
                        coordinates: [
                          { x: 0, y: e.coord },
                          { x: a.width, y: e.coord },
                        ],
                      },
                      l
                    )) ||
                    void 0 === o ||
                    o.draw(t);
                });
            var c = s.vertical;
            if (c.show)
              (null === (e = r.getPaneById(Nt)) || void 0 === e
                ? void 0
                : e.getAxisComponent()
              )
                .getTicks()
                .forEach(function (e) {
                  var o;
                  null ===
                    (o = i.createFigure(
                      "line",
                      {
                        coordinates: [
                          { x: e.coord, y: 0 },
                          { x: e.coord, y: a.height },
                        ],
                      },
                      c
                    )) ||
                    void 0 === o ||
                    o.draw(t);
                });
            t.restore();
          }
        }),
        e
      );
    })(me),
    _e = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.eachChildren = function (t) {
          var e = this.getWidget().getPane().getChart().getChartStore(),
            i = e.getVisibleDataList(),
            o = e.getTimeScaleStore().getBarSpace();
          i.forEach(function (e, i) {
            t(e, o, i);
          });
        }),
        e
      );
    })(me),
    xe = (function (e) {
      function i() {
        var i = (null !== e && e.apply(this, arguments)) || this;
        return (
          (i._boundCandleBarClickEvent = function (e) {
            return function () {
              return (
                i
                  .getWidget()
                  .getPane()
                  .getChart()
                  .getChartStore()
                  .getActionStore()
                  .execute(t.ActionType.OnCandleBarClick, e),
                !1
              );
            };
          }),
          i
        );
      }
      return (
        P(i, e),
        (i.prototype.drawImp = function (t) {
          var e = this,
            i = this.getWidget().getPane(),
            o = i.getId() === Vt,
            n = i.getChart().getChartStore(),
            r = this.getCandleBarOptions(n);
          if (null !== r) {
            var a = i.getAxisComponent();
            this.eachChildren(function (i, n) {
              e._drawCandleBar(t, a, i, n, r, o);
            });
          }
        }),
        (i.prototype.getCandleBarOptions = function (t) {
          var e = t.getStyles().candle;
          return { type: e.type, styles: e.bar };
        }),
        (i.prototype._drawCandleBar = function (e, i, o, n, r, a) {
          var s,
            l,
            c,
            u = this,
            h = o.data,
            d = o.x,
            p = h.open,
            v = h.high,
            g = h.low,
            f = h.close,
            m = n.halfGapBar,
            y = n.gapBar,
            _ = r.type,
            x = r.styles;
          f > p
            ? ((s = x.upColor), (l = x.upBorderColor), (c = x.upWickColor))
            : p > f
            ? ((s = x.downColor),
              (l = x.downBorderColor),
              (c = x.downWickColor))
            : ((s = x.noChangeColor),
              (l = x.noChangeBorderColor),
              (c = x.noChangeWickColor));
          var S = i.convertToPixel(p),
            C = i.convertToPixel(f),
            b = [S, C, i.convertToPixel(v), i.convertToPixel(g)];
          b.sort(function (t, e) {
            return t - e;
          });
          var w = Math.max(1, b[2] - b[1]),
            T = [];
          _ !== t.CandleType.Ohlc
            ? (T.push({
                name: "rect",
                attrs: { x: d - 0.5, y: b[0], width: 1, height: b[1] - b[0] },
                styles: { color: c },
              }),
              T.push(
                _ === t.CandleType.CandleStroke ||
                  (_ === t.CandleType.CandleUpStroke && f > p) ||
                  (_ === t.CandleType.CandleDownStroke && p > f)
                  ? {
                      name: "rect",
                      attrs: { x: d - m, y: b[1], width: y - 1, height: w },
                      styles: { style: t.PolygonType.Stroke, borderColor: l },
                    }
                  : {
                      name: "rect",
                      attrs: { x: d - m, y: b[1], width: y, height: w },
                      styles: {
                        style: t.PolygonType.StrokeFill,
                        color: s,
                        borderColor: l,
                      },
                    }
              ),
              T.push({
                name: "rect",
                attrs: { x: d - 0.5, y: b[2], width: 1, height: b[3] - b[2] },
                styles: { color: c },
              }))
            : (T = [
                {
                  name: "rect",
                  attrs: { x: d - 0.5, y: b[0], width: 1, height: b[3] - b[0] },
                  styles: { color: s },
                },
                {
                  name: "rect",
                  attrs: { x: d - m, y: S, width: m, height: 1 },
                  styles: { color: s },
                },
                {
                  name: "rect",
                  attrs: { x: d, y: C, width: m, height: 1 },
                  styles: { color: s },
                },
              ]),
            T.forEach(function (t) {
              var i,
                n,
                r = t.attrs,
                s = t.styles;
              a && (n = { mouseClickEvent: u._boundCandleBarClickEvent(o) }),
                null === (i = u.createFigure("rect", r, s, n)) ||
                  void 0 === i ||
                  i.draw(e);
            });
        }),
        i
      );
    })(_e),
    Se = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.getCandleBarOptions = function (e) {
          var i,
            o,
            n = this.getWidget().getPane();
          if (!n.getAxisComponent().isInCandle()) {
            var r = e.getIndicatorStore().getInstances(n.getId());
            try {
              for (var a = F(r), s = a.next(); !s.done; s = a.next()) {
                var l = s.value[1];
                if (l.shouldOhlc && l.visible) {
                  var c = l.styles,
                    u = e.getStyles().indicator,
                    h = C(c, "ohlc.upColor", u.ohlc.upColor),
                    d = C(c, "ohlc.downColor", u.ohlc.downColor),
                    p = C(c, "ohlc.noChangeColor", u.ohlc.noChangeColor);
                  return {
                    type: t.CandleType.Ohlc,
                    styles: {
                      upColor: h,
                      downColor: d,
                      noChangeColor: p,
                      upBorderColor: h,
                      downBorderColor: d,
                      noChangeBorderColor: p,
                      upWickColor: h,
                      downWickColor: d,
                      noChangeWickColor: p,
                    },
                  };
                }
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                s && !s.done && (o = a.return) && o.call(a);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          return null;
        }),
        (i.prototype.drawImp = function (t) {
          var i,
            o = this;
          e.prototype.drawImp.call(this, t);
          var n = this.getWidget(),
            r = n.getPane(),
            a = r.getChart(),
            l = n.getBounding(),
            c =
              null === (i = a.getPaneById(Nt)) || void 0 === i
                ? void 0
                : i.getAxisComponent(),
            u = r.getAxisComponent(),
            h = a.getChartStore(),
            d = h.getDataList(),
            p = h.getTimeScaleStore(),
            v = p.getVisibleRange(),
            g = h.getIndicatorStore().getInstances(r.getId()),
            f = h.getStyles().indicator;
          g.forEach(function (e) {
            var i;
            if (e.visible) {
              var n = !1;
              if (
                (null !== e.draw &&
                  (t.save(),
                  (n =
                    null !==
                      (i = e.draw({
                        ctx: t,
                        kLineDataList: d,
                        indicator: e,
                        visibleRange: v,
                        bounding: l,
                        barSpace: p.getBarSpace(),
                        defaultStyles: f,
                        xAxis: c,
                        yAxis: u,
                      })) &&
                    void 0 !== i &&
                    i),
                  t.restore()),
                !n)
              ) {
                var r = e.result,
                  a = [],
                  h = [],
                  g = [];
                o.eachChildren(function (i, n) {
                  var l,
                    c = n.halfGapBar,
                    p = n.gapBar,
                    m = i.dataIndex,
                    y = i.x,
                    _ = null !== (l = r[m]) && void 0 !== l ? l : {};
                  Q(d, e, m, f, function (e, i, n, r) {
                    var l,
                      d,
                      f,
                      x = _[e.key],
                      S = u.convertToPixel(x);
                    switch (e.type) {
                      case "circle":
                        s(x) &&
                          (null ===
                            (l = o.createFigure(
                              "circle",
                              { x: y, y: S, r: c },
                              {
                                style: i.style,
                                color: i.color,
                                borderColor: i.color,
                              }
                            )) ||
                            void 0 === l ||
                            l.draw(t));
                        break;
                      case "bar":
                        if (s(x)) {
                          var C =
                              null !== (d = e.baseValue) && void 0 !== d
                                ? d
                                : u.getExtremum().min,
                            b = u.convertToPixel(C),
                            w = Math.abs(b - S);
                          C !== x && (w = Math.max(1, w));
                          null ===
                            (f = o.createFigure(
                              "rect",
                              {
                                x: y - c,
                                y: S > b ? b : S,
                                width: p,
                                height: w,
                              },
                              {
                                style: i.style,
                                color: i.color,
                                borderColor: i.color,
                              }
                            )) ||
                            void 0 === f ||
                            f.draw(t);
                        }
                        break;
                      case "line":
                        var T = null;
                        if (s(x)) {
                          T = i;
                          var E = { x: y, y: S },
                            I = a[r];
                          s(h[r]) || (h[r] = []),
                            h[r].push(E),
                            s(I) &&
                              ((null == I ? void 0 : I.color) !== i.color ||
                                (null == I ? void 0 : I.style) !== i.style) &&
                              (g.push({
                                name: "line",
                                attrs: { coordinates: h[r] },
                                styles: {
                                  style: i.style,
                                  color: i.color,
                                  size: n.size,
                                  smooth: n.smooth,
                                  dashedValue: n.dashedValue,
                                },
                              }),
                              (h[r] = [E])),
                            m === v.to - 1 &&
                              g.push({
                                name: "line",
                                attrs: { coordinates: h[r] },
                                styles: {
                                  style: i.style,
                                  color: null == i ? void 0 : i.color,
                                  size: n.size,
                                  smooth: n.smooth,
                                  dashedValue: n.dashedValue,
                                },
                              });
                        }
                        a[r] = T;
                    }
                  });
                }),
                  g.forEach(function (e) {
                    var i;
                    null === (i = o.createFigure("line", e.attrs, e.styles)) ||
                      void 0 === i ||
                      i.draw(t);
                  });
              }
            }
          });
        }),
        i
      );
    })(xe),
    Ce = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.drawImp = function (t) {
          var e = this.getWidget(),
            i = e.getPane(),
            o = e.getBounding(),
            n = e.getPane().getChart().getChartStore(),
            r = n.getCrosshairStore().get(),
            a = n.getStyles().crosshair;
          if (void 0 !== r.paneId && a.show) {
            if (r.paneId === i.getId()) {
              var s = r.y;
              this._drawLine(
                t,
                [
                  { x: 0, y: s },
                  { x: o.width, y: s },
                ],
                a.horizontal
              );
            }
            var l = r.realX;
            this._drawLine(
              t,
              [
                { x: l, y: 0 },
                { x: l, y: o.height },
              ],
              a.vertical
            );
          }
        }),
        (e.prototype._drawLine = function (t, e, i) {
          var o;
          if (i.show) {
            var n = i.line;
            n.show &&
              (null ===
                (o = this.createFigure("line", { coordinates: e }, n)) ||
                void 0 === o ||
                o.draw(t));
          }
        }),
        e
      );
    })(me),
    be = (function (e) {
      function i() {
        var i = (null !== e && e.apply(this, arguments)) || this;
        return (
          (i._boundIconClickEvent = function (e, o) {
            return function () {
              return (
                i
                  .getWidget()
                  .getPane()
                  .getChart()
                  .getChartStore()
                  .getActionStore()
                  .execute(
                    t.ActionType.OnTooltipIconClick,
                    M(M({}, e), { iconId: o })
                  ),
                !0
              );
            };
          }),
          (i._boundIconMouseMoveEvent = function (t, e) {
            return function () {
              return (
                i
                  .getWidget()
                  .getPane()
                  .getChart()
                  .getChartStore()
                  .getTooltipStore()
                  .setActiveIconInfo(M(M({}, t), { iconId: e })),
                !0
              );
            };
          }),
          i
        );
      }
      return (
        P(i, e),
        (i.prototype.drawImp = function (t) {
          var e = this.getWidget(),
            i = e.getPane(),
            o = i.getChart().getChartStore(),
            n = o.getCrosshairStore().get();
          if (void 0 !== n.kLineData) {
            var r = e.getBounding(),
              a = o.getCustomApi(),
              s = o.getThousandsSeparator(),
              l = o.getIndicatorStore().getInstances(i.getId()),
              c = o.getTooltipStore().getActiveIconInfo(),
              u = o.getStyles().indicator;
            this.drawIndicatorTooltip(
              t,
              i.getId(),
              o.getDataList(),
              n,
              c,
              l,
              a,
              s,
              r,
              u
            );
          }
        }),
        (i.prototype.drawIndicatorTooltip = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c,
          u
        ) {
          var h = this,
            d = c.tooltip,
            p = 0;
          if (this.isDrawTooltip(o, d)) {
            var v = d.text,
              g = 0,
              f = null != u ? u : 0,
              m = 0;
            r.forEach(function (r) {
              var u = h.getIndicatorTooltipData(i, o, r, a, s, c),
                d = u.name,
                y = u.calcParamsText,
                _ = u.values,
                x = d.length > 0,
                S = _.length > 0;
              if (x || S) {
                var C = L(h.classifyTooltipIcons(u.icons), 3),
                  b = C[1],
                  w = C[2],
                  T = L(
                    h.drawStandardTooltipIcons(
                      t,
                      l,
                      { paneId: e, indicatorName: r.name, iconId: "" },
                      n,
                      C[0],
                      g,
                      f,
                      m
                    ),
                    4
                  );
                if (((g = T[0]), (f = T[1]), (p += T[3]), (m = T[2]), x)) {
                  var E = d;
                  y.length > 0 && (E = "".concat(E).concat(y));
                  var I = L(
                    h.drawStandardTooltipLabels(
                      t,
                      l,
                      [
                        {
                          title: { text: "", color: v.color },
                          value: { text: E, color: v.color },
                        },
                      ],
                      g,
                      f,
                      m,
                      v
                    ),
                    4
                  );
                  (g = I[0]), (f = I[1]), (p += I[3]), (m = I[2]);
                }
                var P = L(
                  h.drawStandardTooltipIcons(
                    t,
                    l,
                    { paneId: e, indicatorName: r.name, iconId: "" },
                    n,
                    b,
                    g,
                    f,
                    m
                  ),
                  4
                );
                if (((g = P[0]), (f = P[1]), (p += P[3]), (m = P[2]), S)) {
                  var D = L(
                    h.drawStandardTooltipLabels(t, l, _, g, f, m, v),
                    4
                  );
                  (g = D[0]), (f = D[1]), (p += D[3]), (m = D[2]);
                }
                var M = L(
                  h.drawStandardTooltipIcons(
                    t,
                    l,
                    { paneId: e, indicatorName: r.name, iconId: "" },
                    n,
                    w,
                    g,
                    f,
                    m
                  ),
                  4
                );
                (g = 0), (p += M[3]), (f = M[1] + M[2]), (m = 0);
              }
            });
          }
          return p;
        }),
        (i.prototype.drawStandardTooltipIcons = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a,
          s
        ) {
          var l = this,
            c = r,
            u = a,
            h = 0,
            d = 0,
            p = 0;
          return (
            n.length > 0 &&
              (n.forEach(function (e) {
                var i = e.marginLeft,
                  o = e.marginTop,
                  n = e.marginRight,
                  r = e.marginBottom,
                  a = e.paddingLeft,
                  s = e.paddingTop,
                  l = e.paddingRight,
                  c = e.paddingBottom,
                  u = e.size,
                  p = e.icon;
                (t.font = Y(u, "normal", e.fontFamily)),
                  (h += i + a + t.measureText(p).width + l + n),
                  (d = Math.max(d, o + s + u + c + r));
              }),
              c + h > e.width
                ? ((c = n[0].marginLeft), (u += s), (p = d))
                : (p = Math.max(0, d - s)),
              n.forEach(function (e) {
                var n,
                  r = e.marginRight,
                  a = e.paddingLeft,
                  s = e.paddingRight,
                  h = e.icon,
                  d =
                    (null == o ? void 0 : o.paneId) === i.paneId &&
                    (null == o ? void 0 : o.indicatorName) ===
                      i.indicatorName &&
                    (null == o ? void 0 : o.iconId) === e.id;
                null ===
                  (n = l.createFigure(
                    "rectText",
                    { text: h, x: (c += e.marginLeft), y: u + e.marginTop },
                    {
                      paddingLeft: a,
                      paddingTop: e.paddingTop,
                      paddingRight: s,
                      paddingBottom: e.paddingBottom,
                      color: d ? e.activeColor : e.color,
                      size: e.size,
                      family: e.fontFamily,
                      backgroundColor: d
                        ? e.activeBackgroundColor
                        : e.backgroundColor,
                    },
                    {
                      mouseClickEvent: l._boundIconClickEvent(i, e.id),
                      mouseMoveEvent: l._boundIconMouseMoveEvent(i, e.id),
                    }
                  )) ||
                  void 0 === n ||
                  n.draw(t),
                  (c += a + t.measureText(h).width + s + r);
              })),
            [c, u, Math.max(s, d), p]
          );
        }),
        (i.prototype.drawStandardTooltipLabels = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a
        ) {
          var s = this,
            l = o,
            c = n,
            u = 0,
            h = 0,
            d = r;
          if (i.length > 0) {
            var p = a.marginLeft,
              v = a.marginTop,
              g = a.marginRight,
              f = a.marginBottom,
              m = a.size,
              y = a.family,
              _ = a.weight;
            (t.font = Y(m, _, y)),
              i.forEach(function (i) {
                var o,
                  n,
                  r = i.title,
                  a = i.value,
                  x = t.measureText(r.text).width,
                  S = t.measureText(a.text).width,
                  C = m + v + f;
                l + p + (x + S) + g > e.width
                  ? ((l = p), (c += C), (h += C))
                  : ((l += p), (h += Math.max(0, C - d))),
                  (d = u = Math.max(d, C)),
                  r.text.length > 0 &&
                    (null ===
                      (o = s.createFigure(
                        "text",
                        { x: l, y: c + v, text: r.text },
                        { color: r.color, size: m, family: y, weight: _ }
                      )) ||
                      void 0 === o ||
                      o.draw(t),
                    (l += x)),
                  null ===
                    (n = s.createFigure(
                      "text",
                      { x: l, y: c + v, text: a.text },
                      { color: a.color, size: m, family: y, weight: _ }
                    )) ||
                    void 0 === n ||
                    n.draw(t),
                  (l += S + g);
              });
          }
          return [l, c, u, h];
        }),
        (i.prototype.isDrawTooltip = function (e, i) {
          var o = i.showRule;
          return (
            o === t.TooltipShowRule.Always ||
            (o === t.TooltipShowRule.FollowCross && void 0 !== e.paneId)
          );
        }),
        (i.prototype.getIndicatorTooltipData = function (t, e, i, o, n, a) {
          var l,
            c,
            u,
            h = a.tooltip,
            d = h.showName ? i.shortName : "",
            p = "",
            v = i.calcParams;
          v.length > 0 && h.showParams && (p = "(".concat(v.join(","), ")"));
          var g = { name: d, calcParamsText: p, values: [], icons: h.icons },
            f = e.dataIndex,
            m = null !== (l = i.result) && void 0 !== l ? l : [],
            y = [];
          if (i.visible) {
            var _ = null !== (c = m[f]) && void 0 !== c ? c : {};
            Q(t, i, f, a, function (t, e) {
              if (void 0 !== t.title) {
                var r = e.color,
                  a = _[t.key];
                s(a) &&
                  ((a = w(a, i.precision)),
                  i.shouldFormatBigNumber && (a = o.formatBigNumber(a))),
                  y.push({
                    title: { text: t.title, color: r },
                    value: {
                      text: E(null != a ? a : h.defaultValue, n),
                      color: r,
                    },
                  });
              }
            }),
              (g.values = y);
          }
          if (null !== i.createTooltipDataSource) {
            var x = this.getWidget(),
              S = x.getPane(),
              C = S.getChart().getChartStore(),
              b = i.createTooltipDataSource({
                kLineDataList: t,
                indicator: i,
                visibleRange: C.getTimeScaleStore().getVisibleRange(),
                bounding: x.getBounding(),
                crosshair: e,
                defaultStyles: a,
                xAxis:
                  null === (u = S.getChart().getPaneById(Nt)) || void 0 === u
                    ? void 0
                    : u.getAxisComponent(),
                yAxis: S.getAxisComponent(),
              }),
              T = b.name,
              I = b.calcParamsText,
              P = b.values,
              D = b.icons;
            if (
              (void 0 !== T && h.showName && (g.name = T),
              void 0 !== I && h.showParams && (g.calcParamsText = I),
              void 0 !== D && (g.icons = D),
              void 0 !== P && i.visible)
            ) {
              var M = [],
                k = a.tooltip.text.color;
              P.forEach(function (t) {
                var e = { text: "", color: k };
                r(t.title) ? (e = t.title) : (e.text = t.title);
                var i = { text: "", color: k };
                r(t.value) ? (i = t.value) : (i.text = t.value),
                  (i.text = E(i.text, n)),
                  M.push({ title: e, value: i });
              }),
                (g.values = M);
            }
          }
          return g;
        }),
        (i.prototype.classifyTooltipIcons = function (e) {
          var i = [],
            o = [],
            n = [];
          return (
            e.forEach(function (e) {
              switch (e.position) {
                case t.TooltipIconPosition.Left:
                  i.push(e);
                  break;
                case t.TooltipIconPosition.Middle:
                  o.push(e);
                  break;
                case t.TooltipIconPosition.Right:
                  n.push(e);
              }
            }),
            [i, o, n]
          );
        }),
        i
      );
    })(me),
    we = (function (e) {
      function i(t) {
        var i = e.call(this, t) || this;
        return i._initEvent(), i;
      }
      return (
        P(i, e),
        (i.prototype._initEvent = function () {
          var t = this,
            e = this.getWidget().getPane(),
            i = e.getId(),
            o = e.getChart().getChartStore().getOverlayStore();
          this.registerEvent("mouseMoveEvent", function (e) {
            var n,
              r = o.getProgressInstanceInfo();
            if (null !== r) {
              var a = r.instance,
                s = r.paneId;
              a.isStart() && (o.updateProgressInstanceInfo(i), (s = i));
              var l = a.points.length - 1,
                c = "".concat(vt, "point_").concat(l);
              return (
                a.isDrawing() &&
                  s === i &&
                  (a.eventMoveForDrawing(t._coordinateToPoint(r.instance, e)),
                  null === (n = a.onDrawing) ||
                    void 0 === n ||
                    n.call(
                      a,
                      M({ overlay: a, figureKey: c, figureIndex: l }, e)
                    )),
                t._figureMouseMoveEvent(a, 1, c, l, 0)(e)
              );
            }
            return (
              o.setHoverInstanceInfo(
                {
                  paneId: i,
                  instance: null,
                  figureType: 0,
                  figureKey: "",
                  figureIndex: -1,
                  attrsIndex: -1,
                },
                e
              ),
              !1
            );
          })
            .registerEvent("mouseClickEvent", function (e) {
              var n,
                r,
                a = o.getProgressInstanceInfo();
              if (null !== a) {
                var s = a.instance,
                  l = a.paneId;
                s.isStart() && (o.updateProgressInstanceInfo(i, !0), (l = i));
                var c = s.points.length - 1,
                  u = "".concat(vt, "point_").concat(c);
                return (
                  s.isDrawing() &&
                    l === i &&
                    (s.eventMoveForDrawing(t._coordinateToPoint(s, e)),
                    null === (n = s.onDrawing) ||
                      void 0 === n ||
                      n.call(
                        s,
                        M({ overlay: s, figureKey: u, figureIndex: c }, e)
                      ),
                    s.nextStep(),
                    s.isDrawing() ||
                      (o.progressInstanceComplete(),
                      null === (r = s.onDrawEnd) ||
                        void 0 === r ||
                        r.call(
                          s,
                          M({ overlay: s, figureKey: u, figureIndex: c }, e)
                        ))),
                  t._figureMouseClickEvent(s, 1, u, c, 0)(e)
                );
              }
              return (
                o.setClickInstanceInfo(
                  {
                    paneId: i,
                    instance: null,
                    figureType: 0,
                    figureKey: "",
                    figureIndex: -1,
                    attrsIndex: -1,
                  },
                  e
                ),
                !1
              );
            })
            .registerEvent("mouseDoubleClickEvent", function (t) {
              var e,
                n = o.getProgressInstanceInfo();
              if (null !== n) {
                var r = n.instance,
                  a = n.paneId;
                if (
                  r.isDrawing() &&
                  a === i &&
                  (r.forceComplete(), !r.isDrawing())
                ) {
                  o.progressInstanceComplete();
                  var s = r.points.length - 1,
                    l = "".concat(vt, "point_").concat(s);
                  null === (e = r.onDrawEnd) ||
                    void 0 === e ||
                    e.call(
                      r,
                      M({ overlay: r, figureKey: l, figureIndex: s }, t)
                    );
                }
                return !0;
              }
              return !1;
            })
            .registerEvent("mouseRightClickEvent", function (e) {
              var i = o.getProgressInstanceInfo();
              if (null !== i) {
                var n = i.instance;
                if (n.isDrawing()) {
                  var r = n.points.length - 1;
                  return t._figureMouseRightClickEvent(
                    n,
                    1,
                    "".concat(vt, "point_").concat(r),
                    r,
                    0
                  )(e);
                }
              }
              return !1;
            })
            .registerEvent("mouseUpEvent", function (t) {
              var e,
                n = o.getPressedInstanceInfo(),
                r = n.instance;
              return (
                null !== r &&
                  (null === (e = r.onPressedMoveEnd) ||
                    void 0 === e ||
                    e.call(
                      r,
                      M(
                        {
                          overlay: r,
                          figureKey: n.figureKey,
                          figureIndex: n.figureIndex,
                        },
                        t
                      )
                    )),
                o.setPressedInstanceInfo({
                  paneId: i,
                  instance: null,
                  figureType: 0,
                  figureKey: "",
                  figureIndex: -1,
                  attrsIndex: -1,
                }),
                !1
              );
            })
            .registerEvent("pressedMouseMoveEvent", function (e) {
              var i,
                n,
                r = o.getPressedInstanceInfo(),
                a = r.instance,
                s = r.figureType,
                l = r.figureIndex;
              if (null !== a) {
                if (
                  !(
                    a.lock ||
                    (null !==
                      (n =
                        null === (i = a.onPressedMoving) || void 0 === i
                          ? void 0
                          : i.call(
                              a,
                              M(
                                {
                                  overlay: a,
                                  figureIndex: l,
                                  figureKey: r.figureKey,
                                },
                                e
                              )
                            )) &&
                      void 0 !== n &&
                      n)
                  )
                ) {
                  var c = t._coordinateToPoint(a, e);
                  1 === s
                    ? a.eventPressedPointMove(c, l)
                    : a.eventPressedOtherMove(
                        c,
                        t
                          .getWidget()
                          .getPane()
                          .getChart()
                          .getChartStore()
                          .getTimeScaleStore()
                      );
                }
                return !0;
              }
              return !1;
            });
        }),
        (i.prototype._createFigureEvents = function (t, e, i, o, n, r) {
          var a;
          if (!t.isDrawing()) {
            var s = [];
            if (
              (void 0 !== r &&
                (l(r)
                  ? r &&
                    (s = [
                      "mouseClickEvent",
                      "mouseRightClickEvent",
                      "tapEvent",
                      "mouseDownEvent",
                      "touchStartEvent",
                      "mouseMoveEvent",
                      "touchMoveEvent",
                    ])
                  : (s = r)),
              0 === s.length)
            )
              return {
                mouseMoveEvent: this._figureMouseMoveEvent(t, e, i, o, n),
                mouseDownEvent: this._figureMouseDownEvent(t, e, i, o, n),
                mouseClickEvent: this._figureMouseClickEvent(t, e, i, o, n),
                mouseRightClickEvent: this._figureMouseRightClickEvent(
                  t,
                  e,
                  i,
                  o,
                  n
                ),
              };
            (a = {}),
              s.includes("mouseMoveEvent") ||
                s.includes("touchMoveEvent") ||
                (a.mouseMoveEvent = this._figureMouseMoveEvent(t, e, i, o, n)),
              s.includes("mouseDownEvent") ||
                s.includes("touchStartEvent") ||
                (a.mouseDownEvent = this._figureMouseDownEvent(t, e, i, o, n)),
              s.includes("mouseClickEvent") ||
                s.includes("tapEvent") ||
                (a.mouseClickEvent = this._figureMouseClickEvent(
                  t,
                  e,
                  i,
                  o,
                  n
                )),
              s.includes("mouseRightClickEvent") ||
                (a.mouseRightClickEvent = this._figureMouseRightClickEvent(
                  t,
                  e,
                  i,
                  o,
                  n
                ));
          }
          return a;
        }),
        (i.prototype._figureMouseMoveEvent = function (t, e, i, o, n) {
          var r = this;
          return function (a) {
            var s = r.getWidget().getPane();
            return (
              s
                .getChart()
                .getChartStore()
                .getOverlayStore()
                .setHoverInstanceInfo(
                  {
                    paneId: s.getId(),
                    instance: t,
                    figureType: e,
                    figureKey: i,
                    figureIndex: o,
                    attrsIndex: n,
                  },
                  a
                ),
              !0
            );
          };
        }),
        (i.prototype._figureMouseDownEvent = function (t, e, i, o, n) {
          var r = this;
          return function (a) {
            var s,
              l = r.getWidget().getPane(),
              c = l.getId(),
              u = l.getChart().getChartStore().getOverlayStore();
            return (
              t.startPressedMove(r._coordinateToPoint(t, a)),
              null === (s = t.onPressedMoveStart) ||
                void 0 === s ||
                s.call(t, M({ overlay: t, figureIndex: o, figureKey: i }, a)),
              u.setPressedInstanceInfo({
                paneId: c,
                instance: t,
                figureType: e,
                figureKey: i,
                figureIndex: o,
                attrsIndex: n,
              }),
              !0
            );
          };
        }),
        (i.prototype._figureMouseClickEvent = function (t, e, i, o, n) {
          var r = this;
          return function (a) {
            var s = r.getWidget().getPane(),
              l = s.getId();
            return (
              s
                .getChart()
                .getChartStore()
                .getOverlayStore()
                .setClickInstanceInfo(
                  {
                    paneId: l,
                    instance: t,
                    figureType: e,
                    figureKey: i,
                    figureIndex: o,
                    attrsIndex: n,
                  },
                  a
                ),
              !0
            );
          };
        }),
        (i.prototype._figureMouseRightClickEvent = function (t, e, i, o, n) {
          var r = this;
          return function (e) {
            var n, a;
            (null !==
              (a =
                null === (n = t.onRightClick) || void 0 === n
                  ? void 0
                  : n.call(
                      t,
                      M({ overlay: t, figureIndex: o, figureKey: i }, e)
                    )) &&
              void 0 !== a &&
              a) ||
              r
                .getWidget()
                .getPane()
                .getChart()
                .getChartStore()
                .getOverlayStore()
                .removeInstance(t);
            return !0;
          };
        }),
        (i.prototype._coordinateToPoint = function (e, i) {
          var o,
            n,
            r = {},
            a = this.getWidget().getPane(),
            s = a.getChart(),
            l = a.getId(),
            c = s.getChartStore().getTimeScaleStore();
          if (this.coordinateToPointTimestampDataIndexFlag()) {
            var u = (
                null === (o = s.getPaneById(Nt)) || void 0 === o
                  ? void 0
                  : o.getAxisComponent()
              ).convertFromPixel(i.x),
              h =
                null !== (n = c.dataIndexToTimestamp(u)) && void 0 !== n
                  ? n
                  : void 0;
            (r.dataIndex = u), (r.timestamp = h);
          }
          if (this.coordinateToPointValueFlag()) {
            var d = a.getAxisComponent(),
              p = d.convertFromPixel(i.y);
            if (
              e.mode !== t.OverlayMode.Normal &&
              l === Vt &&
              void 0 !== r.dataIndex
            ) {
              var v = c.getDataByDataIndex(r.dataIndex);
              if (null !== v)
                if (p > v.high)
                  if (e.mode === t.OverlayMode.WeakMagnet) {
                    var g = d.convertToPixel(v.high);
                    d.convertFromPixel(g - 8) > p && (p = v.high);
                  } else p = v.high;
                else if (v.low > p)
                  if (e.mode === t.OverlayMode.WeakMagnet) {
                    var f = d.convertToPixel(v.low);
                    p > d.convertFromPixel(f - 8) && (p = v.low);
                  } else p = v.low;
                else {
                  var m = Math.max(v.open, v.close),
                    y = Math.min(v.open, v.close);
                  p =
                    p > m
                      ? v.high - p > p - m
                        ? m
                        : v.high
                      : y > p
                      ? y - p > p - v.low
                        ? v.low
                        : y
                      : p - y > m - p
                      ? m
                      : y;
                }
            }
            r.value = p;
          }
          return r;
        }),
        (i.prototype.coordinateToPointValueFlag = function () {
          return !0;
        }),
        (i.prototype.coordinateToPointTimestampDataIndexFlag = function () {
          return !0;
        }),
        (i.prototype.dispatchEvent = function (t, i, o) {
          return this.getWidget()
            .getPane()
            .getChart()
            .getChartStore()
            .getOverlayStore()
            .isDrawing()
            ? this.onEvent(t, i, o)
            : e.prototype.dispatchEvent.call(this, t, i, o);
        }),
        (i.prototype.checkEventOn = function () {
          return !0;
        }),
        (i.prototype.drawImp = function (t) {
          var e,
            i = this,
            o = this.getWidget(),
            n = o.getPane(),
            r = n.getId(),
            a = n.getChart(),
            s = n.getAxisComponent(),
            l =
              null === (e = a.getPaneById(Nt)) || void 0 === e
                ? void 0
                : e.getAxisComponent(),
            c = o.getBounding(),
            u = a.getChartStore(),
            h = u.getCustomApi(),
            d = u.getThousandsSeparator(),
            p = u.getTimeScaleStore(),
            v = p.getDateTimeFormat(),
            g = p.getBarSpace(),
            f = u.getPrecision(),
            m = u.getStyles().overlay,
            y = u.getOverlayStore(),
            _ = y.getHoverInstanceInfo(),
            x = y.getClickInstanceInfo();
          this.getCompleteOverlays(y, r).forEach(function (e) {
            e.visible &&
              i._drawOverlay(t, e, c, g, f, v, h, d, m, l, s, _, x, p);
          });
          var S = y.getProgressInstanceInfo();
          if (null !== S) {
            var C = this.getProgressOverlay(S, r);
            null !== C &&
              C.visible &&
              this._drawOverlay(t, C, c, g, f, v, h, d, m, l, s, _, x, p);
          }
        }),
        (i.prototype._drawOverlay = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c,
          u,
          h,
          d,
          p
        ) {
          var v = e.points.map(function (t) {
            var e,
              i,
              o = t.dataIndex;
            void 0 !== t.timestamp && (o = p.timestampToDataIndex(t.timestamp));
            var n = { x: 0, y: 0 };
            return (
              void 0 !== o &&
                (n.x =
                  null !== (e = null == c ? void 0 : c.convertToPixel(o)) &&
                  void 0 !== e
                    ? e
                    : 0),
              void 0 !== t.value &&
                (n.y =
                  null !==
                    (i = null == u ? void 0 : u.convertToPixel(t.value)) &&
                  void 0 !== i
                    ? i
                    : 0),
              n
            );
          });
          if (v.length > 0) {
            var g = [].concat(this.getFigures(e, v, i, o, n, s, r, l, c, u));
            this.drawFigures(t, e, g, l);
          }
          this.drawDefaultFigures(t, e, v, i, n, r, a, s, l, c, u, h, d);
        }),
        (i.prototype.drawFigures = function (t, e, i, o) {
          var n = this;
          i.forEach(function (i, r) {
            var a = i.type,
              s = i.styles,
              l = i.ignoreEvent;
            [].concat(i.attrs).forEach(function (c, u) {
              var h,
                d,
                p,
                v = n._createFigureEvents(
                  e,
                  2,
                  null !== (h = i.key) && void 0 !== h ? h : "",
                  r,
                  u,
                  l
                ),
                g = M(
                  M(
                    M({}, o[a]),
                    null === (d = e.styles) || void 0 === d ? void 0 : d[a]
                  ),
                  s
                );
              null === (p = n.createFigure(a, c, g, v)) ||
                void 0 === p ||
                p.draw(t);
            });
          });
        }),
        (i.prototype.getCompleteOverlays = function (t, e) {
          return t.getInstances(e);
        }),
        (i.prototype.getProgressOverlay = function (t, e) {
          return t.paneId === e ? t.instance : null;
        }),
        (i.prototype.getFigures = function (t, e, i, o, n, r, a, s, l, c) {
          var u, h;
          return null !==
            (h =
              null === (u = t.createPointFigures) || void 0 === u
                ? void 0
                : u.call(t, {
                    overlay: t,
                    coordinates: e,
                    bounding: i,
                    barSpace: o,
                    precision: n,
                    thousandsSeparator: r,
                    dateTimeFormat: a,
                    defaultStyles: s,
                    xAxis: l,
                    yAxis: c,
                  })) && void 0 !== h
            ? h
            : [];
        }),
        (i.prototype.drawDefaultFigures = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c,
          u,
          h,
          d
        ) {
          var p,
            v,
            g = this;
          if (
            e.needDefaultPointFigure &&
            (((null === (p = h.instance) || void 0 === p ? void 0 : p.id) ===
              e.id &&
              0 !== h.figureType) ||
              ((null === (v = d.instance) || void 0 === v ? void 0 : v.id) ===
                e.id &&
                0 !== d.figureType))
          ) {
            var f = e.styles,
              m = M(M({}, l.point), null == f ? void 0 : f.point);
            i.forEach(function (i, o) {
              var n,
                r,
                a,
                s = i.x,
                l = i.y,
                c = m.radius,
                u = m.color,
                d = m.borderColor,
                p = m.borderSize;
              (null === (n = h.instance) || void 0 === n ? void 0 : n.id) ===
                e.id &&
                1 === h.figureType &&
                h.figureIndex === o &&
                ((c = m.activeRadius),
                (u = m.activeColor),
                (d = m.activeBorderColor),
                (p = m.activeBorderSize)),
                null ===
                  (r = g.createFigure(
                    "circle",
                    { x: s, y: l, r: c + p },
                    { color: d },
                    g._createFigureEvents(
                      e,
                      1,
                      "".concat(vt, "point_").concat(o),
                      o,
                      0
                    )
                  )) ||
                  void 0 === r ||
                  r.draw(t),
                null ===
                  (a = g.createFigure(
                    "circle",
                    { x: s, y: l, r: c },
                    { color: u }
                  )) ||
                  void 0 === a ||
                  a.draw(t);
            });
          }
        }),
        i
      );
    })(me),
    Te = (function (t) {
      function e(e, i) {
        var o = t.call(this, e, i) || this;
        return (
          (o._gridView = new ye(o)),
          (o._indicatorView = new Se(o)),
          (o._crosshairLineView = new Ce(o)),
          (o._tooltipView = o.createTooltipView()),
          (o._overlayView = new we(o)),
          o.addChild(o._tooltipView),
          o.addChild(o._overlayView),
          (o.getContainer().style.cursor = "crosshair"),
          o.registerEvent("mouseMoveEvent", function () {
            return (
              i
                .getChart()
                .getChartStore()
                .getTooltipStore()
                .setActiveIconInfo(),
              !1
            );
          }),
          o
        );
      }
      return (
        P(e, t),
        (e.prototype.getName = function () {
          return At;
        }),
        (e.prototype.updateMain = function (t) {
          this.updateMainContent(t),
            this._indicatorView.draw(t),
            this._gridView.draw(t);
        }),
        (e.prototype.createTooltipView = function () {
          return new be(this);
        }),
        (e.prototype.updateMainContent = function (t) {}),
        (e.prototype.updateOverlay = function (t) {
          this._overlayView.draw(t),
            this._crosshairLineView.draw(t),
            this._tooltipView.draw(t);
        }),
        e
      );
    })(Zt),
    Ee = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.drawImp = function (t) {
          var e,
            i,
            n = this.getWidget(),
            r = n.getPane(),
            s = r.getChart(),
            l = n.getBounding(),
            c = r.getAxisComponent(),
            u = s.getStyles().candle.area,
            h = [],
            d = [],
            p = Number.MAX_SAFE_INTEGER;
          this.eachChildren(function (t, e, i) {
            var o = t.x,
              n = e.halfGapBar,
              r = t.data[u.value];
            if (a(r)) {
              var s = c.convertToPixel(r);
              if (0 === i) {
                var v = o - n;
                d.push({ x: v, y: l.height }),
                  d.push({ x: v, y: s }),
                  h.push({ x: v, y: s });
              }
              h.push({ x: o, y: s }),
                d.push({ x: o, y: s }),
                (p = Math.min(p, s));
            }
          });
          var v = d.length;
          if (v > 0) {
            var g = d[v - 1],
              f = g.x;
            h.push({ x: f, y: g.y }),
              d.push({ x: f, y: g.y }),
              d.push({ x: f, y: l.height });
          }
          if (
            (h.length > 0 &&
              (null ===
                (e = this.createFigure(
                  "line",
                  { coordinates: h },
                  { color: u.lineColor, size: u.lineSize }
                )) ||
                void 0 === e ||
                e.draw(t)),
            d.length > 0)
          ) {
            var m = u.backgroundColor,
              y = void 0;
            if (o(m)) {
              var _ = t.createLinearGradient(0, l.height, 0, p);
              try {
                m.forEach(function (t) {
                  _.addColorStop(t.offset, t.color);
                });
              } catch (t) {}
              y = _;
            } else y = m;
            null ===
              (i = this.createFigure(
                "polygon",
                { coordinates: d },
                { color: y }
              )) ||
              void 0 === i ||
              i.draw(t);
          }
        }),
        e
      );
    })(_e),
    Ie = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.drawImp = function (t) {
          var e = this.getWidget().getPane(),
            i = e.getChart().getChartStore(),
            o = i.getStyles().candle.priceMark,
            n = o.high,
            r = o.low;
          if (o.show && (n.show || r.show)) {
            var a = i.getThousandsSeparator(),
              s = i.getPrecision(),
              l = e.getAxisComponent(),
              c = Number.MIN_SAFE_INTEGER,
              u = 0,
              h = Number.MAX_SAFE_INTEGER,
              d = 0;
            this.eachChildren(function (t) {
              var e = t.data,
                i = t.x;
              e.high > c && ((c = e.high), (u = i)),
                h > e.low && ((h = e.low), (d = i));
            });
            var p = l.convertToPixel(c),
              v = l.convertToPixel(h);
            n.show &&
              c !== Number.MIN_SAFE_INTEGER &&
              this._drawMark(
                t,
                E(w(c, s.price), a),
                { x: u, y: p },
                v > p ? [-2, -5] : [2, 5],
                n
              ),
              r.show &&
                h !== Number.MAX_SAFE_INTEGER &&
                this._drawMark(
                  t,
                  E(w(h, s.price), a),
                  { x: d, y: v },
                  v > p ? [2, 5] : [-2, -5],
                  r
                );
          }
        }),
        (e.prototype._drawMark = function (t, e, i, o, n) {
          var r,
            a,
            s,
            l,
            c,
            u,
            h = i.x,
            d = i.y + o[0];
          null ===
            (r = this.createFigure(
              "line",
              {
                coordinates: [
                  { x: h - 2, y: d + o[0] },
                  { x: h, y: d },
                  { x: h + 2, y: d + o[0] },
                ],
              },
              { color: n.color }
            )) ||
            void 0 === r ||
            r.draw(t),
            h > this.getWidget().getBounding().width / 2
              ? ((c = (l = h - 5) - n.textOffset), (u = "right"))
              : ((u = "left"), (c = (l = h + 5) + n.textOffset));
          var p = d + o[1];
          null ===
            (a = this.createFigure(
              "line",
              {
                coordinates: [
                  { x: h, y: d },
                  { x: h, y: p },
                  { x: l, y: p },
                ],
              },
              { color: n.color }
            )) ||
            void 0 === a ||
            a.draw(t),
            null ===
              (s = this.createFigure(
                "text",
                { x: c, y: p, text: e, align: u, baseline: "middle" },
                {
                  color: n.color,
                  size: n.textSize,
                  family: n.textFamily,
                  weight: n.textWeight,
                }
              )) ||
              void 0 === s ||
              s.draw(t);
        }),
        e
      );
    })(_e),
    Pe = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.drawImp = function (t) {
          var e,
            i = this.getWidget(),
            o = i.getPane(),
            n = i.getBounding(),
            r = o.getChart().getChartStore(),
            a = r.getStyles().candle.priceMark,
            s = a.last,
            l = s.line;
          if (a.show && s.show && l.show) {
            var c = o.getAxisComponent(),
              u = r.getDataList(),
              h = u[u.length - 1];
            if (null != h) {
              var d = h.close,
                p = h.open,
                v = c.convertToNicePixel(d);
              null ===
                (e = this.createFigure(
                  "line",
                  {
                    coordinates: [
                      { x: 0, y: v },
                      { x: n.width, y: v },
                    ],
                  },
                  {
                    style: l.style,
                    color:
                      d > p ? s.upColor : p > d ? s.downColor : s.noChangeColor,
                    size: l.size,
                    dashedValue: l.dashedValue,
                  }
                )) ||
                void 0 === e ||
                e.draw(t);
            }
          }
        }),
        e
      );
    })(me),
    De = {
      "zh-CN": {
        time: "时间：",
        open: "开：",
        high: "高：",
        low: "低：",
        close: "收：",
        volume: "成交量：",
      },
      "en-US": {
        time: "Time: ",
        open: "Open: ",
        high: "High: ",
        low: "Low: ",
        close: "Close: ",
        volume: "Volume: ",
      },
    };
  function Me(t, e) {
    var i, o;
    return null !==
      (o = null === (i = De[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== o
      ? o
      : t;
  }
  var ke = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.drawImp = function (e) {
          var i,
            o = this.getWidget(),
            n = o.getPane(),
            r = n.getId(),
            a = n.getChart().getChartStore(),
            s = a.getCrosshairStore().get();
          if (void 0 !== s.kLineData) {
            var l = o.getBounding(),
              c =
                null === (i = n.getYAxisWidget()) || void 0 === i
                  ? void 0
                  : i.getBounding(),
              u = a.getDataList(),
              h = a.getPrecision(),
              d = a.getLocale(),
              p = a.getCustomApi(),
              v = a.getThousandsSeparator(),
              g = a.getTooltipStore().getActiveIconInfo(),
              f = a.getIndicatorStore().getInstances(n.getId()),
              m = a.getTimeScaleStore().getDateTimeFormat(),
              y = a.getStyles(),
              _ = y.candle,
              x = y.indicator;
            if (
              _.tooltip.showType === t.TooltipShowType.Rect &&
              x.tooltip.showType === t.TooltipShowType.Rect
            ) {
              var S = this.isDrawTooltip(s, _.tooltip),
                C = this.isDrawTooltip(s, x.tooltip);
              this._drawRectTooltip(
                e,
                u,
                f,
                l,
                c,
                s,
                h,
                m,
                d,
                p,
                v,
                S,
                C,
                y,
                0
              );
            } else if (
              _.tooltip.showType === t.TooltipShowType.Standard &&
              x.tooltip.showType === t.TooltipShowType.Standard
            ) {
              var b = this._drawCandleStandardTooltip(
                e,
                u,
                r,
                l,
                s,
                g,
                h,
                m,
                d,
                p,
                v,
                _
              );
              this.drawIndicatorTooltip(e, r, u, s, g, f, p, v, l, x, b);
            } else if (
              _.tooltip.showType === t.TooltipShowType.Rect &&
              x.tooltip.showType === t.TooltipShowType.Standard
            ) {
              var w = this.drawIndicatorTooltip(
                e,
                r,
                u,
                s,
                g,
                f,
                p,
                v,
                l,
                x,
                0
              );
              S = this.isDrawTooltip(s, _.tooltip);
              this._drawRectTooltip(
                e,
                u,
                f,
                l,
                c,
                s,
                h,
                m,
                d,
                p,
                v,
                S,
                !1,
                y,
                w
              );
            } else {
              var T = this._drawCandleStandardTooltip(
                e,
                u,
                r,
                l,
                s,
                g,
                h,
                m,
                d,
                p,
                v,
                _
              );
              C = this.isDrawTooltip(s, x.tooltip);
              this._drawRectTooltip(
                e,
                u,
                f,
                l,
                c,
                s,
                h,
                m,
                d,
                p,
                v,
                !1,
                C,
                y,
                T
              );
            }
          }
        }),
        (i.prototype._drawCandleStandardTooltip = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c,
          u,
          h
        ) {
          var d,
            p,
            v,
            g = h.tooltip,
            f = g.text,
            m = 0;
          if (this.isDrawTooltip(n, g)) {
            var y = null !== (d = n.dataIndex) && void 0 !== d ? d : 0,
              _ = this._getCandleTooltipData(
                {
                  prev: null !== (p = e[y - 1]) && void 0 !== p ? p : null,
                  current: n.kLineData,
                  next: null !== (v = e[y + 1]) && void 0 !== v ? v : null,
                },
                a,
                s,
                l,
                c,
                u,
                h
              ),
              x = 0,
              S = 0,
              C = 0,
              b = L(this.classifyTooltipIcons(g.icons), 3),
              w = b[1],
              T = b[2],
              E = L(
                this.drawStandardTooltipIcons(
                  t,
                  o,
                  { paneId: i, indicatorName: "", iconId: "" },
                  r,
                  b[0],
                  x,
                  S,
                  0
                ),
                4
              );
            m += E[3];
            var I = L(
              this.drawStandardTooltipIcons(
                t,
                o,
                { paneId: i, indicatorName: "", iconId: "" },
                r,
                w,
                (x = E[0]),
                (S = E[1]),
                (C = E[2])
              ),
              4
            );
            if (
              ((x = I[0]), (S = I[1]), (m += I[3]), (C = I[2]), _.length > 0)
            ) {
              var P = L(this.drawStandardTooltipLabels(t, o, _, x, S, C, f), 4);
              (x = P[0]), (S = P[1]), (m += P[3]), (C = P[2]);
            }
            var D = L(
              this.drawStandardTooltipIcons(
                t,
                o,
                { paneId: i, indicatorName: "", iconId: "" },
                r,
                T,
                x,
                S,
                C
              ),
              4
            );
            (x = D[0]), (S = D[1]), (m += D[3]), (C = D[2]);
          }
          return m;
        }),
        (i.prototype._drawRectTooltip = function (
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c,
          u,
          h,
          d,
          p,
          v,
          f
        ) {
          var m,
            y,
            _,
            x,
            S,
            C = this,
            b = v.candle,
            w = v.indicator,
            T = b.tooltip,
            E = w.tooltip;
          if (d || p) {
            var I = null !== (m = a.dataIndex) && void 0 !== m ? m : 0,
              P = this._getCandleTooltipData(
                {
                  prev: null !== (y = i[I - 1]) && void 0 !== y ? y : null,
                  current: a.kLineData,
                  next: null !== (_ = i[I + 1]) && void 0 !== _ ? _ : null,
                },
                s,
                l,
                c,
                u,
                h,
                b
              ),
              D = T.text,
              M = D.marginLeft,
              k = D.marginRight,
              A = D.marginTop,
              F = D.marginBottom,
              L = D.size,
              R = D.weight,
              B = D.family,
              O = T.rect,
              V = O.position,
              W = O.paddingLeft,
              N = O.paddingRight,
              z = O.paddingTop,
              H = O.paddingBottom,
              X = O.offsetLeft,
              j = O.offsetRight,
              G = O.offsetTop,
              K = O.offsetBottom,
              U = O.borderSize,
              q = O.borderRadius,
              Z = O.borderColor,
              $ = O.color,
              J = 0,
              Q = 0,
              tt = 0;
            d &&
              ((e.font = Y(L, R, B)),
              P.forEach(function (t) {
                var i = t.value,
                  o = "".concat(t.title.text).concat(i.text),
                  n = e.measureText(o).width + M + k;
                J = Math.max(J, n);
              }),
              (tt += (F + A + L) * P.length));
            var et = E.text,
              it = et.marginLeft,
              ot = et.marginRight,
              nt = et.marginTop,
              rt = et.marginBottom,
              at = et.size,
              st = et.weight,
              lt = et.family,
              ct = [];
            if (
              (p &&
                ((e.font = Y(at, st, lt)),
                o.forEach(function (t) {
                  var o,
                    n =
                      null !==
                        (o = C.getIndicatorTooltipData(
                          i,
                          a,
                          t,
                          u,
                          h,
                          w
                        ).values) && void 0 !== o
                        ? o
                        : [];
                  ct.push(n),
                    n.forEach(function (t) {
                      var i = t.value,
                        o = "".concat(t.title.text).concat(i.text),
                        n = e.measureText(o).width + it + ot;
                      (J = Math.max(J, n)), (tt += nt + rt + at);
                    });
                })),
              0 !== (Q += J) && 0 !== tt)
            ) {
              (Q += 2 * U + W + N), (tt += 2 * U + z + H);
              var ut = V === g.Pointer && a.paneId === Vt,
                ht =
                  (null !== (x = a.realX) && void 0 !== x ? x : 0) >
                  n.width / 2,
                dt = 0;
              if (ut) {
                var pt = a.realX;
                dt = ht ? pt - j - Q : pt + X;
              } else
                ht
                  ? ((dt = X),
                    v.yAxis.inside &&
                      v.yAxis.position === t.YAxisPosition.Left &&
                      (dt += r.width))
                  : ((dt = n.width - j - Q),
                    v.yAxis.inside &&
                      v.yAxis.position === t.YAxisPosition.Right &&
                      (dt -= r.width));
              var vt = f + G;
              if (ut)
                (vt = a.y - tt / 2) + tt > n.height - K &&
                  (vt = n.height - K - tt),
                  f + G > vt && (vt = f + G);
              null ===
                (S = this.createFigure(
                  "rect",
                  { x: dt, y: vt, width: Q, height: tt },
                  {
                    style: t.PolygonType.StrokeFill,
                    color: $,
                    borderColor: Z,
                    borderSize: U,
                    borderRadius: q,
                  }
                )) ||
                void 0 === S ||
                S.draw(e);
              var gt = dt + U + W + M,
                ft = vt + U + z;
              if (
                (d &&
                  P.forEach(function (t) {
                    var i,
                      o,
                      n = t.title;
                    null ===
                      (i = C.createFigure(
                        "text",
                        { x: gt, y: (ft += A), text: n.text },
                        { color: n.color, size: L, family: B, weight: R }
                      )) ||
                      void 0 === i ||
                      i.draw(e);
                    var r = t.value;
                    null ===
                      (o = C.createFigure(
                        "text",
                        {
                          x: dt + Q - U - k - N,
                          y: ft,
                          text: r.text,
                          align: "right",
                        },
                        { color: r.color, size: L, family: B, weight: R }
                      )) ||
                      void 0 === o ||
                      o.draw(e),
                      (ft += L + F);
                  }),
                p)
              ) {
                var mt = dt + U + W + it;
                ct.forEach(function (t) {
                  t.forEach(function (t) {
                    var i,
                      o,
                      n = t.title,
                      r = t.value;
                    null ===
                      (i = C.createFigure(
                        "text",
                        { x: mt, y: (ft += nt), text: n.text },
                        { color: n.color, size: at, family: lt, weight: st }
                      )) ||
                      void 0 === i ||
                      i.draw(e),
                      null ===
                        (o = C.createFigure(
                          "text",
                          {
                            x: dt + Q - U - ot - N,
                            y: ft,
                            text: r.text,
                            align: "right",
                          },
                          { color: r.color, size: at, family: lt, weight: st }
                        )) ||
                        void 0 === o ||
                        o.draw(e),
                      (ft += at + rt);
                  });
                });
              }
            }
          }
        }),
        (i.prototype._getCandleTooltipData = function (e, i, o, a, s, l, c) {
          var u,
            h,
            d,
            p = c.tooltip,
            v = p.text.color,
            g = [];
          if (n(p.custom)) {
            (null !==
              (h =
                null === (u = p.custom) || void 0 === u
                  ? void 0
                  : u.call(p, e, c)) && void 0 !== h
              ? h
              : []
            ).forEach(function (t) {
              var e = t.title,
                i = t.value,
                o = { text: "", color: "" };
              r(e) ? (o = e) : ((o.text = e), (o.color = v)),
                (o.text = Me(o.text, a));
              var n = { text: "", color: "" };
              r(i) ? (n = i) : ((n.text = i), (n.color = v)),
                g.push({ title: o, value: n });
            });
          } else {
            var f = i.price,
              m = i.volume,
              y = e.current;
            g = [
              {
                title: { text: Me("time", a), color: v },
                value: {
                  text: s.formatDate(
                    o,
                    y.timestamp,
                    "YYYY-MM-DD HH:mm",
                    t.FormatDateType.Tooltip
                  ),
                  color: v,
                },
              },
              {
                title: { text: Me("open", a), color: v },
                value: { text: E(w(y.open, f), l), color: v },
              },
              {
                title: { text: Me("high", a), color: v },
                value: { text: E(w(y.high, f), l), color: v },
              },
              {
                title: { text: Me("low", a), color: v },
                value: { text: E(w(y.low, f), l), color: v },
              },
              {
                title: { text: Me("close", a), color: v },
                value: { text: E(w(y.close, f), l), color: v },
              },
              {
                title: { text: Me("volume", a), color: v },
                value: {
                  text: E(
                    s.formatBigNumber(
                      w(
                        null !== (d = y.volume) && void 0 !== d
                          ? d
                          : p.defaultValue,
                        m
                      )
                    ),
                    l
                  ),
                  color: v,
                },
              },
            ];
          }
          return g;
        }),
        i
      );
    })(be),
    Ae = (function (e) {
      function i(t, i) {
        var o = e.call(this, t, i) || this;
        return (
          (o._candleBarView = new xe(o)),
          (o._candleAreaView = new Ee(o)),
          (o._candleHighLowPriceView = new Ie(o)),
          (o._candleLastPriceLineView = new Pe(o)),
          o.addChild(o._candleBarView),
          o
        );
      }
      return (
        P(i, e),
        (i.prototype.updateMainContent = function (e) {
          this.getPane().getChart().getStyles().candle.type !==
          t.CandleType.Area
            ? (this._candleBarView.draw(e),
              this._candleHighLowPriceView.draw(e),
              this._candleLastPriceLineView.draw(e))
            : this._candleAreaView.draw(e);
        }),
        (i.prototype.createTooltipView = function () {
          return new ke(this);
        }),
        i
      );
    })(Te),
    Fe = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.drawImp = function (t) {
          var e,
            i = this,
            o = this.getWidget(),
            n = o.getPane(),
            r = o.getBounding(),
            a = n.getAxisComponent(),
            s = this.getAxisStyles(n.getChart().getStyles());
          if (s.show) {
            s.axisLine.show &&
              (null ===
                (e = this.createFigure(
                  "line",
                  this.createAxisLine(r, s),
                  s.axisLine
                )) ||
                void 0 === e ||
                e.draw(t));
            var l = a.getTicks();
            if (s.tickLine.show)
              this.createTickLines(l, r, s).forEach(function (e) {
                var o;
                null === (o = i.createFigure("line", e, s.tickLine)) ||
                  void 0 === o ||
                  o.draw(t);
              });
            if (s.tickText.show)
              this.createTickTexts(l, r, s).forEach(function (e) {
                var o;
                null === (o = i.createFigure("text", e, s.tickText)) ||
                  void 0 === o ||
                  o.draw(t);
              });
          }
        }),
        e
      );
    })(me),
    Le = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.getAxisStyles = function (t) {
          return t.yAxis;
        }),
        (e.prototype.createAxisLine = function (t, e) {
          var i,
            o = this.getWidget().getPane().getAxisComponent(),
            n = e.axisLine.size;
          return {
            coordinates: [
              { x: (i = o.isFromZero() ? n / 2 : t.width - n), y: 0 },
              { x: i, y: t.height },
            ],
          };
        }),
        (e.prototype.createTickLines = function (t, e, i) {
          var o = this.getWidget().getPane().getAxisComponent(),
            n = i.axisLine,
            r = i.tickLine,
            a = 0,
            s = 0;
          return (
            o.isFromZero()
              ? ((a = 0), n.show && (a += n.size), (s = a + r.length))
              : ((a = e.width), n.show && (a -= n.size), (s = a - r.length)),
            t.map(function (t) {
              return {
                coordinates: [
                  { x: a, y: t.coord },
                  { x: s, y: t.coord },
                ],
              };
            })
          );
        }),
        (e.prototype.createTickTexts = function (t, e, i) {
          var o = this.getWidget().getPane().getAxisComponent(),
            n = i.axisLine,
            r = i.tickLine,
            a = i.tickText,
            s = 0;
          o.isFromZero()
            ? ((s = a.marginStart),
              n.show && (s += n.size),
              r.show && (s += r.length))
            : ((s = e.width - a.marginEnd),
              n.show && (s -= n.size),
              r.show && (s -= r.length));
          var l = this.getWidget().getPane().getAxisComponent().isFromZero()
            ? "left"
            : "right";
          return t.map(function (t) {
            return {
              x: s,
              y: t.coord,
              text: t.text,
              align: l,
              baseline: "middle",
            };
          });
        }),
        e
      );
    })(Fe),
    Re = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.drawImp = function (e) {
          var i,
            o = this.getWidget(),
            n = o.getPane(),
            r = o.getBounding(),
            a = n.getChart().getChartStore(),
            s = a.getStyles().candle.priceMark,
            l = s.last,
            c = l.text;
          if (s.show && l.show && c.show) {
            var u = a.getPrecision(),
              h = n.getAxisComponent(),
              d = a.getDataList(),
              p = a.getVisibleDataList(),
              v = d[d.length - 1];
            if (void 0 !== v) {
              var g = v.close,
                f = v.open,
                m = h.convertToNicePixel(g),
                y = void 0;
              y = g > f ? l.upColor : f > g ? l.downColor : l.noChangeColor;
              var _ = void 0;
              if (h.getType() === t.YAxisType.Percentage) {
                var x = p[0].data.close;
                _ = "".concat((((g - x) / x) * 100).toFixed(2), "%");
              } else _ = w(g, u.price);
              _ = E(_, a.getThousandsSeparator());
              var S = void 0,
                C = void 0;
              h.isFromZero()
                ? ((S = 0), (C = "left"))
                : ((S = r.width), (C = "right")),
                null ===
                  (i = this.createFigure(
                    "rectText",
                    { x: S, y: m, text: _, align: C, baseline: "middle" },
                    M(M({}, c), { backgroundColor: y })
                  )) ||
                  void 0 === i ||
                  i.draw(e);
            }
          }
        }),
        i
      );
    })(me),
    Be = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.drawImp = function (t) {
          var e = this,
            i = this.getWidget(),
            o = i.getPane(),
            n = i.getBounding(),
            r = o.getChart().getChartStore(),
            a = r.getCustomApi(),
            l = r.getStyles().indicator,
            c = l.lastValueMark,
            u = c.text;
          if (c.show) {
            var h = o.getAxisComponent(),
              d = r.getDataList(),
              p = d.length - 1,
              v = r.getIndicatorStore().getInstances(o.getId()),
              g = r.getThousandsSeparator();
            v.forEach(function (i) {
              var o = i.result[p];
              if (void 0 !== o && i.visible) {
                var r = i.precision;
                Q(d, i, p, l, function (l, c) {
                  var d,
                    p = o[l.key];
                  if (s(p)) {
                    var v = h.convertToNicePixel(p),
                      f = w(p, r);
                    i.shouldFormatBigNumber && (f = a.formatBigNumber(f)),
                      (f = E(f, g));
                    var m = void 0,
                      y = void 0;
                    h.isFromZero()
                      ? ((m = 0), (y = "left"))
                      : ((m = n.width), (y = "right")),
                      null ===
                        (d = e.createFigure(
                          "rectText",
                          { x: m, y: v, text: f, align: y, baseline: "middle" },
                          M(M({}, u), { backgroundColor: c.color })
                        )) ||
                        void 0 === d ||
                        d.draw(t);
                  }
                });
              }
            });
          }
        }),
        e
      );
    })(me),
    Oe = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.coordinateToPointTimestampDataIndexFlag = function () {
          return !1;
        }),
        (e.prototype.drawDefaultFigures = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c,
          u,
          h,
          d
        ) {
          this.drawFigures(
            t,
            e,
            this.getDefaultFigures(e, i, o, n, r, a, s, c, u, d),
            l
          );
        }),
        (e.prototype.getDefaultFigures = function (
          t,
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c
        ) {
          var u,
            h,
            d = [];
          if (
            t.needDefaultYAxisFigure &&
            t.id ===
              (null === (u = c.instance) || void 0 === u ? void 0 : u.id) &&
            c.paneId === this.getWidget().getPane().getId()
          ) {
            var p,
              v,
              g = Number.MAX_SAFE_INTEGER,
              f = Number.MIN_SAFE_INTEGER;
            null !== (h = null == l ? void 0 : l.isFromZero()) &&
            void 0 !== h &&
            h
              ? ((p = "left"), (v = 0))
              : ((p = "right"), (v = i.width)),
              e.forEach(function (e, i) {
                var n = t.points[i];
                if (void 0 !== n.value) {
                  (g = Math.min(g, e.y)), (f = Math.max(f, e.y));
                  var r = E(w(n.value, o.price), a);
                  d.push({
                    type: "rectText",
                    attrs: {
                      x: v,
                      y: e.y,
                      text: r,
                      align: p,
                      baseline: "middle",
                    },
                    ignoreEvent: !0,
                  });
                }
              }),
              e.length > 1 &&
                d.unshift({
                  type: "rect",
                  attrs: { x: 0, y: g, width: i.width, height: f - g },
                  ignoreEvent: !0,
                });
          }
          return d;
        }),
        (e.prototype.getFigures = function (t, e, i, o, n, r, a, s, l, c) {
          var u, h;
          return null !==
            (h =
              null === (u = t.createYAxisFigures) || void 0 === u
                ? void 0
                : u.call(t, {
                    overlay: t,
                    coordinates: e,
                    bounding: i,
                    barSpace: o,
                    precision: n,
                    thousandsSeparator: r,
                    dateTimeFormat: a,
                    defaultStyles: s,
                    xAxis: l,
                    yAxis: c,
                  })) && void 0 !== h
            ? h
            : [];
        }),
        e
      );
    })(we),
    Ve = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.drawImp = function (t) {
          var e,
            i = this.getWidget(),
            o = i.getPane(),
            n = i.getBounding(),
            r = i.getPane().getChart().getChartStore(),
            a = r.getCrosshairStore().get(),
            s = r.getStyles().crosshair;
          if (void 0 !== a.paneId && this.compare(a, o.getId()) && s.show) {
            var l = this.getDirectionStyles(s),
              c = l.text;
            if (l.show && c.show) {
              var u = o.getAxisComponent(),
                h = this.getText(a, r, u);
              (t.font = Y(c.size, c.weight, c.family)),
                null ===
                  (e = this.createFigure(
                    "rectText",
                    this.getTextAttrs(h, t.measureText(h).width, a, n, u, c),
                    c
                  )) ||
                  void 0 === e ||
                  e.draw(t);
            }
          }
        }),
        (i.prototype.compare = function (t, e) {
          return t.paneId === e;
        }),
        (i.prototype.getDirectionStyles = function (t) {
          return t.horizontal;
        }),
        (i.prototype.getText = function (e, i, o) {
          var n,
            r,
            a,
            s = o,
            l = o.convertFromPixel(e.y);
          if (s.getType() === t.YAxisType.Percentage) {
            var c =
              null !==
                (r =
                  null === (n = i.getVisibleDataList()[0]) || void 0 === n
                    ? void 0
                    : n.data) && void 0 !== r
                ? r
                : {};
            a = "".concat((((l - c.close) / c.close) * 100).toFixed(2), "%");
          } else {
            var u = i.getIndicatorStore().getInstances(e.paneId),
              h = 0,
              d = !1;
            s.isInCandle()
              ? (h = i.getPrecision().price)
              : u.forEach(function (t) {
                  (h = Math.max(t.precision, h)),
                    d || (d = t.shouldFormatBigNumber);
                }),
              (a = w(l, h)),
              d && (a = i.getCustomApi().formatBigNumber(a));
          }
          return E(a, i.getThousandsSeparator());
        }),
        (i.prototype.getTextAttrs = function (t, e, i, o, n, r) {
          var a, s;
          return (
            n.isFromZero()
              ? ((a = 0), (s = "left"))
              : ((a = o.width), (s = "right")),
            { x: a, y: i.y, text: t, align: s, baseline: "middle" }
          );
        }),
        i
      );
    })(me),
    We = (function (t) {
      function e(e, i) {
        var o = t.call(this, e, i) || this;
        return (
          (o._yAxisView = new Le(o)),
          (o._candleLastPriceLabelView = new Re(o)),
          (o._indicatorLastValueView = new Be(o)),
          (o._overlayYAxisView = new Oe(o)),
          (o._crosshairHorizontalLabelView = new Ve(o)),
          (o.getContainer().style.cursor = "ns-resize"),
          o.addChild(o._overlayYAxisView),
          o
        );
      }
      return (
        P(e, t),
        (e.prototype.getName = function () {
          return Lt;
        }),
        (e.prototype.updateMain = function (t) {
          this._yAxisView.draw(t),
            this.getPane().getAxisComponent().isInCandle() &&
              this._candleLastPriceLabelView.draw(t),
            this._indicatorLastValueView.draw(t);
        }),
        (e.prototype.updateOverlay = function (t) {
          this._overlayYAxisView.draw(t),
            this._crosshairHorizontalLabelView.draw(t);
        }),
        e
      );
    })(Zt),
    Ne = (function () {
      function t(t) {
        (this._extremum = {
          min: 0,
          max: 0,
          range: 0,
          realMin: 0,
          realMax: 0,
          realRange: 0,
        }),
          (this._prevExtremum = {
            min: 0,
            max: 0,
            range: 0,
            realMin: 0,
            realMax: 0,
            realRange: 0,
          }),
          (this._ticks = []),
          (this._autoCalcTickFlag = !0),
          (this._parent = t);
      }
      return (
        (t.prototype.getParent = function () {
          return this._parent;
        }),
        (t.prototype.buildTicks = function (t) {
          return (
            this._autoCalcTickFlag && (this._extremum = this.calcExtremum()),
            !(
              this._prevExtremum.min === this._extremum.min &&
              this._prevExtremum.max === this._extremum.max &&
              !t
            ) &&
              ((this._prevExtremum = this._extremum),
              (this._ticks = this.optimalTicks(this._calcTicks())),
              !0)
          );
        }),
        (t.prototype.getTicks = function () {
          return this._ticks;
        }),
        (t.prototype.setExtremum = function (t) {
          (this._autoCalcTickFlag = !1), (this._extremum = t);
        }),
        (t.prototype.getExtremum = function () {
          return this._extremum;
        }),
        (t.prototype.setAutoCalcTickFlag = function (t) {
          this._autoCalcTickFlag = t;
        }),
        (t.prototype.getAutoCalcTickFlag = function () {
          return this._autoCalcTickFlag;
        }),
        (t.prototype._calcTicks = function () {
          var t = this._extremum,
            e = t.realMin,
            i = t.realMax,
            o = t.realRange,
            n = [];
          if (o >= 0) {
            var r = L(this._calcTickInterval(o), 2),
              a = r[0],
              s = r[1],
              l = j(Math.ceil(e / a) * a, s),
              c = j(Math.floor(i / a) * a, s),
              u = 0,
              h = l;
            if (0 !== a)
              for (; c >= h; ) {
                var d = h.toFixed(s);
                (n[u] = { text: d, coord: 0, value: d }), ++u, (h += a);
              }
          }
          return n;
        }),
        (t.prototype._calcTickInterval = function (t) {
          var e,
            i,
            o,
            n,
            r =
              ((i = Math.floor(K((e = t / 8)))),
              (o = U(i)),
              (e =
                (1.5 > (n = e / o)
                  ? 1
                  : 2.5 > n
                  ? 2
                  : 3.5 > n
                  ? 3
                  : 4.5 > n
                  ? 4
                  : 5.5 > n
                  ? 5
                  : 6.5 > n
                  ? 6
                  : 8) * o),
              -20 > i ? e : +e.toFixed(0 > i ? -i : 0)),
            a = (function (t) {
              var e = "" + t,
                i = e.indexOf("e");
              if (i > 0) {
                var o = +e.slice(i + 1);
                return 0 > o ? -o : 0;
              }
              var n = e.indexOf(".");
              return 0 > n ? 0 : e.length - 1 - n;
            })(r);
          return [r, a];
        }),
        t
      );
    })(),
    ze = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.calcExtremum = function () {
          var e,
            i,
            o,
            n,
            r,
            a = this.getParent(),
            l = a.getChart(),
            c = l.getChartStore(),
            u = Number.MAX_SAFE_INTEGER,
            h = Number.MIN_SAFE_INTEGER,
            d = [],
            p = !1,
            v = Number.MAX_SAFE_INTEGER,
            g = Number.MIN_SAFE_INTEGER,
            f = Number.MAX_SAFE_INTEGER;
          c.getIndicatorStore()
            .getInstances(a.getId())
            .forEach(function (t) {
              var e, i, o;
              p || (p = null !== (e = t.shouldOhlc) && void 0 !== e && e),
                (f = Math.min(f, t.precision)),
                null !== t.minValue && (v = Math.min(v, t.minValue)),
                null !== t.maxValue && (g = Math.max(g, t.maxValue)),
                d.push({
                  figures: null !== (i = t.figures) && void 0 !== i ? i : [],
                  result: null !== (o = t.result) && void 0 !== o ? o : [],
                });
            });
          var m = 4,
            y = this.isInCandle();
          if (y) {
            var _ = c.getPrecision().price;
            m = f !== Number.MAX_SAFE_INTEGER ? Math.min(f, _) : _;
          } else f !== Number.MAX_SAFE_INTEGER && (m = f);
          var x = c.getVisibleDataList(),
            S = l.getStyles().candle,
            C = S.type === t.CandleType.Area,
            b = S.area.value,
            w = (y && !C) || (!y && p);
          x.forEach(function (t) {
            var e = t.dataIndex,
              i = t.data;
            if (
              (w && ((u = Math.min(u, i.low)), (h = Math.max(h, i.high))),
              y && C)
            ) {
              var o = i[b];
              (u = Math.min(u, o)), (h = Math.max(h, o));
            }
            d.forEach(function (t) {
              var i,
                o = null !== (i = t.result[e]) && void 0 !== i ? i : {};
              t.figures.forEach(function (t) {
                var e = o[t.key];
                s(e) && ((u = Math.min(u, e)), (h = Math.max(h, e)));
              });
            });
          }),
            u !== Number.MAX_SAFE_INTEGER && h !== Number.MIN_SAFE_INTEGER
              ? ((u = Math.min(v, u)), (h = Math.max(g, h)))
              : ((u = 0), (h = 10));
          var T,
            E = this.getType();
          switch (E) {
            case t.YAxisType.Percentage:
              var I = null === (e = x[0]) || void 0 === e ? void 0 : e.data;
              void 0 !== (null == I ? void 0 : I.close) &&
                ((u = ((u - I.close) / I.close) * 100),
                (h = ((h - I.close) / I.close) * 100)),
                (T = 0.01);
              break;
            case t.YAxisType.Log:
              (u = K(u)), (h = K(h)), (T = 0.05 * U(-m));
              break;
            default:
              T = U(-m);
          }
          if (u === h || T > Math.abs(u - h)) {
            var P = v === u,
              D = g === h;
            (u = P ? u : D ? u - 8 * T : u - 4 * T),
              (h = D ? h : P ? h + 8 * T : h + 4 * T);
          }
          var M =
              null !==
                (o =
                  null === (i = this.getParent().getYAxisWidget()) ||
                  void 0 === i
                    ? void 0
                    : i.getBounding().height) && void 0 !== o
                ? o
                : 0,
            k = a.getOptions().gap,
            A =
              null !== (n = null == k ? void 0 : k.top) && void 0 !== n
                ? n
                : 0.2;
          1 > A || (A /= M);
          var F =
            null !== (r = null == k ? void 0 : k.bottom) && void 0 !== r
              ? r
              : 0.1;
          1 > F || (F /= M);
          var L,
            R,
            B,
            O = Math.abs(h - u);
          return (
            (O = Math.abs((h += O * A) - (u -= O * F))),
            E === t.YAxisType.Log
              ? ((L = U(u)), (R = U(h)), (B = Math.abs(R - L)))
              : ((L = u), (R = h), (B = O)),
            { min: u, max: h, range: O, realMin: L, realMax: R, realRange: B }
          );
        }),
        (i.prototype._innerConvertToPixel = function (t) {
          var e,
            i,
            o =
              null !==
                (i =
                  null === (e = this.getParent().getYAxisWidget()) ||
                  void 0 === e
                    ? void 0
                    : e.getBounding().height) && void 0 !== i
                ? i
                : 0,
            n = this.getExtremum(),
            r = (t - n.min) / n.range;
          return this.isReverse() ? Math.round(r * o) : Math.round((1 - r) * o);
        }),
        (i.prototype.isInCandle = function () {
          return "candle" === this.getParent().getName();
        }),
        (i.prototype.getType = function () {
          return this.isInCandle()
            ? this.getParent().getChart().getStyles().yAxis.type
            : t.YAxisType.Normal;
        }),
        (i.prototype.getPosition = function () {
          return this.getParent().getChart().getStyles().yAxis.position;
        }),
        (i.prototype.isReverse = function () {
          return (
            !!this.isInCandle() &&
            this.getParent().getChart().getStyles().yAxis.reverse
          );
        }),
        (i.prototype.isFromZero = function () {
          var e = this.getParent().getChart().getStyles().yAxis,
            i = e.inside;
          return (
            (e.position === t.YAxisPosition.Left && i) ||
            (e.position === t.YAxisPosition.Right && !i)
          );
        }),
        (i.prototype.optimalTicks = function (e) {
          var i,
            o,
            n = this,
            r = this.getParent(),
            a =
              null !==
                (o =
                  null === (i = r.getYAxisWidget()) || void 0 === i
                    ? void 0
                    : i.getBounding().height) && void 0 !== o
                ? o
                : 0,
            s = r.getChart().getChartStore(),
            l = s.getCustomApi(),
            c = [],
            u = this.getType(),
            h = s.getIndicatorStore().getInstances(r.getId()),
            d = s.getThousandsSeparator(),
            p = 0,
            v = !1;
          this.isInCandle()
            ? (p = s.getPrecision().price)
            : h.forEach(function (t) {
                (p = Math.max(p, t.precision)),
                  v || (v = t.shouldFormatBigNumber);
              });
          var g,
            f = s.getStyles().xAxis.tickText.size;
          return (
            e.forEach(function (e) {
              var i,
                o = e.value,
                r = n._innerConvertToPixel(+o);
              switch (u) {
                case t.YAxisType.Percentage:
                  i = "".concat(w(o, 2), "%");
                  break;
                case t.YAxisType.Log:
                  (r = n._innerConvertToPixel(K(+o))), (i = w(o, p));
                  break;
                default:
                  (i = w(o, p)), v && (i = l.formatBigNumber(o));
              }
              (i = E(i, d)),
                r > f &&
                  a - f > r &&
                  ((void 0 !== g && Math.abs(g - r) > 2 * f) || void 0 === g) &&
                  (c.push({ text: i, coord: r, value: o }), (g = r));
            }),
            c
          );
        }),
        (i.prototype.getAutoSize = function () {
          var e = this.getParent(),
            i = e.getChart(),
            o = i.getStyles(),
            n = o.yAxis,
            r = n.size;
          if ("auto" !== r) return r;
          var a = i.getChartStore(),
            s = a.getCustomApi(),
            l = 0;
          if (
            n.show &&
            (n.axisLine.show && (l += n.axisLine.size),
            n.tickLine.show && (l += n.tickLine.length),
            n.tickText.show)
          ) {
            var c = 0;
            this.getTicks().forEach(function (t) {
              c = Math.max(
                c,
                H(t.text, n.tickText.size, n.tickText.weight, n.tickText.family)
              );
            }),
              (l += n.tickText.marginStart + n.tickText.marginEnd + c);
          }
          var u = o.crosshair,
            h = 0;
          if (u.show && u.horizontal.show && u.horizontal.text.show) {
            var d = a.getIndicatorStore().getInstances(e.getId()),
              p = 0,
              v = !1;
            d.forEach(function (t) {
              (p = Math.max(t.precision, p)),
                v || (v = t.shouldFormatBigNumber);
            });
            var g = 2;
            if (this.getType() !== t.YAxisType.Percentage)
              if (this.isInCandle()) {
                var f = a.getPrecision().price,
                  m = o.indicator.lastValueMark;
                g = m.show && m.text.show ? Math.max(p, f) : f;
              } else g = p;
            var y = w(this.getExtremum().max, g);
            v && (y = s.formatBigNumber(y)),
              (h +=
                u.horizontal.text.paddingLeft +
                u.horizontal.text.paddingRight +
                2 * u.horizontal.text.borderSize +
                H(
                  y,
                  u.horizontal.text.size,
                  u.horizontal.text.weight,
                  u.horizontal.text.family
                ));
          }
          return Math.max(l, h);
        }),
        (i.prototype.convertFromPixel = function (e) {
          var i,
            o,
            n,
            r =
              null !==
                (o =
                  null === (i = this.getParent().getYAxisWidget()) ||
                  void 0 === i
                    ? void 0
                    : i.getBounding().height) && void 0 !== o
                ? o
                : 0,
            a = this.getExtremum(),
            s = a.min,
            l = a.range,
            c = (this.isReverse() ? e / r : 1 - e / r) * l + s;
          switch (this.getType()) {
            case t.YAxisType.Percentage:
              var u =
                null ===
                  (n = this.getParent()
                    .getChart()
                    .getChartStore()
                    .getVisibleDataList()[0]) || void 0 === n
                  ? void 0
                  : n.data;
              return void 0 !== (null == u ? void 0 : u.close)
                ? (u.close * c) / 100 + u.close
                : 0;
            case t.YAxisType.Log:
              return U(c);
            default:
              return c;
          }
        }),
        (i.prototype.convertToRealValue = function (e) {
          var i = e;
          return this.getType() === t.YAxisType.Log && (i = U(e)), i;
        }),
        (i.prototype.convertToPixel = function (e) {
          var i,
            o = e;
          switch (this.getType()) {
            case t.YAxisType.Percentage:
              var n =
                null ===
                  (i = this.getParent()
                    .getChart()
                    .getChartStore()
                    .getVisibleDataList()[0]) || void 0 === i
                  ? void 0
                  : i.data;
              void 0 !== (null == n ? void 0 : n.close) &&
                (o = ((e - n.close) / n.close) * 100);
              break;
            case t.YAxisType.Log:
              o = K(e);
              break;
            default:
              o = e;
          }
          return this._innerConvertToPixel(o);
        }),
        (i.prototype.convertToNicePixel = function (t) {
          var e,
            i,
            o =
              null !==
                (i =
                  null === (e = this.getParent().getYAxisWidget()) ||
                  void 0 === e
                    ? void 0
                    : e.getBounding().height) && void 0 !== i
                ? i
                : 0,
            n = this.convertToPixel(t);
          return Math.round(Math.max(0.05 * o, Math.min(n, 0.98 * o)));
        }),
        i
      );
    })(Ne),
    Ye = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.getName = function () {
          return "indicator";
        }),
        (e.prototype.createAxisComponent = function () {
          return new ze(this);
        }),
        (e.prototype.createMainWidget = function (t) {
          return new Te(t, this);
        }),
        (e.prototype.createSeparatorWidget = function (t) {
          return new Ot(t, this);
        }),
        (e.prototype.creatYAxisWidget = function (t) {
          return new We(t, this);
        }),
        e
      );
    })(zt),
    He = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.getName = function () {
          return "candle";
        }),
        (e.prototype.createMainWidget = function (t) {
          return new Ae(t, this);
        }),
        (e.prototype.createSeparatorWidget = function () {
          return null;
        }),
        e
      );
    })(Ye),
    Xe = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.getAxisStyles = function (t) {
          return t.xAxis;
        }),
        (e.prototype.createAxisLine = function (t, e) {
          var i = e.axisLine.size / 2;
          return {
            coordinates: [
              { x: 0, y: i },
              { x: t.width, y: i },
            ],
          };
        }),
        (e.prototype.createTickLines = function (t, e, i) {
          var o = i.tickLine,
            n = i.axisLine.size;
          return t.map(function (t) {
            return {
              coordinates: [
                { x: t.coord, y: 0 },
                { x: t.coord, y: n + o.length },
              ],
            };
          });
        }),
        (e.prototype.createTickTexts = function (t, e, i) {
          var o = i.tickText,
            n = i.axisLine.size,
            r = i.tickLine.length;
          return t.map(function (t) {
            return {
              x: t.coord,
              y: n + r + o.marginStart,
              text: t.text,
              align: "center",
              baseline: "top",
            };
          });
        }),
        e
      );
    })(Fe),
    je = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.coordinateToPointTimestampDataIndexFlag = function () {
          return !0;
        }),
        (i.prototype.coordinateToPointValueFlag = function () {
          return !1;
        }),
        (i.prototype.getCompleteOverlays = function (t) {
          return t.getInstances();
        }),
        (i.prototype.getProgressOverlay = function (t) {
          return t.instance;
        }),
        (i.prototype.getDefaultFigures = function (
          e,
          i,
          o,
          n,
          r,
          a,
          s,
          l,
          c,
          u
        ) {
          var h,
            d = [];
          if (
            e.needDefaultXAxisFigure &&
            e.id === (null === (h = u.instance) || void 0 === h ? void 0 : h.id)
          ) {
            var p = Number.MAX_SAFE_INTEGER,
              v = Number.MIN_SAFE_INTEGER;
            i.forEach(function (i, o) {
              (p = Math.min(p, i.x)), (v = Math.max(v, i.x));
              var n = e.points[o];
              if (void 0 !== n.timestamp) {
                var s = a.formatDate(
                  r,
                  n.timestamp,
                  "YYYY-MM-DD HH:mm",
                  t.FormatDateType.Crosshair
                );
                d.push({
                  type: "rectText",
                  attrs: { x: i.x, y: 0, text: s, align: "center" },
                  ignoreEvent: !0,
                });
              }
            }),
              i.length > 1 &&
                d.unshift({
                  type: "rect",
                  attrs: { x: p, y: 0, width: v - p, height: o.height },
                  ignoreEvent: !0,
                });
          }
          return d;
        }),
        (i.prototype.getFigures = function (t, e, i, o, n, r, a, s, l, c) {
          var u, h;
          return null !==
            (h =
              null === (u = t.createXAxisFigures) || void 0 === u
                ? void 0
                : u.call(t, {
                    overlay: t,
                    coordinates: e,
                    bounding: i,
                    barSpace: o,
                    precision: n,
                    thousandsSeparator: r,
                    dateTimeFormat: a,
                    defaultStyles: s,
                    xAxis: l,
                    yAxis: c,
                  })) && void 0 !== h
            ? h
            : [];
        }),
        i
      );
    })(Oe),
    Ge = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.compare = function (t) {
          return void 0 !== t.kLineData && t.dataIndex === t.realDataIndex;
        }),
        (i.prototype.getDirectionStyles = function (t) {
          return t.vertical;
        }),
        (i.prototype.getText = function (e, i) {
          var o,
            n =
              null === (o = e.kLineData) || void 0 === o ? void 0 : o.timestamp;
          return i
            .getCustomApi()
            .formatDate(
              i.getTimeScaleStore().getDateTimeFormat(),
              n,
              "YYYY-MM-DD HH:mm",
              t.FormatDateType.Crosshair
            );
        }),
        (i.prototype.getTextAttrs = function (t, e, i, o, n, r) {
          var a = i.realX;
          return {
            x:
              0 > a - e / 2 - r.paddingLeft
                ? r.paddingLeft + e / 2
                : a + e / 2 + r.paddingRight > o.width
                ? o.width - r.paddingRight - e / 2
                : a,
            y: 0,
            text: t,
            align: "center",
            baseline: "top",
          };
        }),
        i
      );
    })(Ve),
    Ke = (function (t) {
      function e(e, i) {
        var o = t.call(this, e, i) || this;
        return (
          (o._xAxisView = new Xe(o)),
          (o._overlayXAxisView = new je(o)),
          (o._crosshairVerticalLabelView = new Ge(o)),
          (o.getContainer().style.cursor = "ew-resize"),
          o.addChild(o._overlayXAxisView),
          o
        );
      }
      return (
        P(e, t),
        (e.prototype.getName = function () {
          return Ft;
        }),
        (e.prototype.updateMain = function (t) {
          this._xAxisView.draw(t);
        }),
        (e.prototype.updateOverlay = function (t) {
          this._overlayXAxisView.draw(t),
            this._crosshairVerticalLabelView.draw(t);
        }),
        e
      );
    })(Zt),
    Ue = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        P(i, e),
        (i.prototype.calcExtremum = function () {
          var t = this.getParent()
              .getChart()
              .getChartStore()
              .getTimeScaleStore()
              .getVisibleRange(),
            e = t.from,
            i = t.to,
            o = i - 1,
            n = i - e;
          return {
            min: e,
            max: o,
            range: n,
            realMin: e,
            realMax: o,
            realRange: n,
          };
        }),
        (i.prototype.optimalTicks = function (e) {
          var i,
            o,
            n = this.getParent().getChart(),
            r = n.getChartStore(),
            a = r.getCustomApi().formatDate,
            s = [],
            l = e.length,
            c = r.getDataList();
          if (l > 0) {
            var u = r.getTimeScaleStore().getDateTimeFormat(),
              h = n.getStyles().xAxis.tickText,
              d = H("00-00 00:00", h.size, h.weight, h.family),
              p = this.convertToPixel(parseInt(e[0].value, 10)),
              v = 1;
            if (l > 1) {
              var g = this.convertToPixel(parseInt(e[1].value, 10)),
                f = Math.abs(g - p);
              d > f && (v = Math.ceil(d / f));
            }
            for (var m = 0; l > m; m += v) {
              var y = parseInt(e[m].value, 10),
                _ = c[y].timestamp,
                x = a(u, _, "HH:mm", t.FormatDateType.XAxis);
              if (0 !== m)
                x =
                  null !==
                    (i = this._optimalTickLabel(
                      a,
                      u,
                      _,
                      c[parseInt(e[m - v].value, 10)].timestamp
                    )) && void 0 !== i
                    ? i
                    : x;
              var S = this.convertToPixel(y);
              s.push({ text: x, coord: S, value: _ });
            }
            if (1 === s.length)
              s[0].text = a(
                u,
                s[0].value,
                "YYYY-MM-DD HH:mm",
                t.FormatDateType.XAxis
              );
            else {
              var C = s[0].value,
                b = s[1].value;
              if (void 0 !== s[2]) {
                var w = s[2].text;
                /^[0-9]{2}-[0-9]{2}$/.test(w)
                  ? (s[0].text = a(u, C, "MM-DD", t.FormatDateType.XAxis))
                  : /^[0-9]{4}-[0-9]{2}$/.test(w)
                  ? (s[0].text = a(u, C, "YYYY-MM", t.FormatDateType.XAxis))
                  : /^[0-9]{4}$/.test(w) &&
                    (s[0].text = a(u, C, "YYYY", t.FormatDateType.XAxis));
              } else
                s[0].text =
                  null !== (o = this._optimalTickLabel(a, u, C, b)) &&
                  void 0 !== o
                    ? o
                    : s[0].text;
            }
          }
          return s;
        }),
        (i.prototype._optimalTickLabel = function (e, i, o, n) {
          var r = e(i, o, "YYYY", t.FormatDateType.XAxis),
            a = e(i, o, "YYYY-MM", t.FormatDateType.XAxis),
            s = e(i, o, "MM-DD", t.FormatDateType.XAxis);
          return r !== e(i, n, "YYYY", t.FormatDateType.XAxis)
            ? r
            : a !== e(i, n, "YYYY-MM", t.FormatDateType.XAxis)
            ? a
            : s !== e(i, n, "MM-DD", t.FormatDateType.XAxis)
            ? s
            : null;
        }),
        (i.prototype.getAutoSize = function () {
          var t = this.getParent().getChart().getStyles(),
            e = t.xAxis,
            i = e.size;
          if ("auto" !== i) return i;
          var o = t.crosshair,
            n = 0;
          e.show &&
            (e.axisLine.show && (n += e.axisLine.size),
            e.tickLine.show && (n += e.tickLine.length),
            e.tickText.show &&
              (n +=
                e.tickText.marginStart +
                e.tickText.marginEnd +
                e.tickText.size));
          var r = 0;
          return (
            o.show &&
              o.vertical.show &&
              o.vertical.text.show &&
              (r +=
                o.vertical.text.paddingTop +
                o.vertical.text.paddingBottom +
                2 * o.vertical.text.borderSize +
                o.vertical.text.size),
            Math.max(n, r)
          );
        }),
        (i.prototype.convertFromPixel = function (t) {
          return this.getParent()
            .getChart()
            .getChartStore()
            .getTimeScaleStore()
            .coordinateToDataIndex(t);
        }),
        (i.prototype.convertToPixel = function (t) {
          return this.getParent()
            .getChart()
            .getChartStore()
            .getTimeScaleStore()
            .dataIndexToCoordinate(t);
        }),
        i
      );
    })(Ne),
    qe = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        P(e, t),
        (e.prototype.getName = function () {
          return "xAxis";
        }),
        (e.prototype.createAxisComponent = function () {
          return new Ue(this);
        }),
        (e.prototype.createMainWidget = function (t) {
          return new Ke(t, this);
        }),
        e
      );
    })(zt);
  function Ze() {
    var t;
    return (
      "undefined" != typeof window &&
      (null !==
        (t = window.navigator.userAgent.toLowerCase().indexOf("firefox")) &&
      void 0 !== t
        ? t
        : -1) > -1
    );
  }
  function $e() {
    return (
      "undefined" != typeof window &&
      /iPhone|iPad|iPod/.test(window.navigator.platform)
    );
  }
  var Je,
    Qe = (function () {
      function t(t, e, i) {
        var o = this;
        (this._clickCount = 0),
          (this._clickTimeoutId = null),
          (this._clickCoordinate = { x: -1 / 0, y: 1 / 0 }),
          (this._tapCount = 0),
          (this._tapTimeoutId = null),
          (this._tapCoordinate = { x: -1 / 0, y: 1 / 0 }),
          (this._longTapTimeoutId = null),
          (this._longTapActive = !1),
          (this._mouseMoveStartCoordinate = null),
          (this._touchMoveStartCoordinate = null),
          (this._touchMoveExceededManhattanDistance = !1),
          (this._cancelClick = !1),
          (this._cancelTap = !1),
          (this._unsubscribeOutsideMouseEvents = null),
          (this._unsubscribeOutsideTouchEvents = null),
          (this._unsubscribeMobileSafariEvents = null),
          (this._unsubscribeMousemove = null),
          (this._unsubscribeMouseWheel = null),
          (this._unsubscribeContextMenu = null),
          (this._unsubscribeRootMouseEvents = null),
          (this._unsubscribeRootTouchEvents = null),
          (this._startPinchMiddleCoordinate = null),
          (this._startPinchDistance = 0),
          (this._pinchPrevented = !1),
          (this._preventTouchDragProcess = !1),
          (this._mousePressed = !1),
          (this._lastTouchEventTimeStamp = 0),
          (this._activeTouchId = null),
          (this._acceptMouseLeave = !$e()),
          (this._onFirefoxOutsideMouseUp = function (t) {
            o._mouseUpHandler(t);
          }),
          (this._onMobileSafariDoubleClick = function (t) {
            o._firesTouchEvents(t)
              ? (++o._tapCount,
                null !== o._tapTimeoutId &&
                  o._tapCount > 1 &&
                  (30 >
                    o._mouseTouchMoveWithDownInfo(
                      o._getCoordinate(t),
                      o._tapCoordinate
                    ).manhattanDistance &&
                    !o._cancelTap &&
                    o._processEvent(
                      o._makeCompatEvent(t),
                      o._handler.doubleTapEvent
                    ),
                  o._resetTapTimeout()))
              : (++o._clickCount,
                null !== o._clickTimeoutId &&
                  o._clickCount > 1 &&
                  (5 >
                    o._mouseTouchMoveWithDownInfo(
                      o._getCoordinate(t),
                      o._clickCoordinate
                    ).manhattanDistance &&
                    !o._cancelClick &&
                    o._processEvent(
                      o._makeCompatEvent(t),
                      o._handler.mouseDoubleClickEvent
                    ),
                  o._resetClickTimeout()));
          }),
          (this._target = t),
          (this._handler = e),
          (this._options = i),
          this._init();
      }
      return (
        (t.prototype.destroy = function () {
          null !== this._unsubscribeOutsideMouseEvents &&
            (this._unsubscribeOutsideMouseEvents(),
            (this._unsubscribeOutsideMouseEvents = null)),
            null !== this._unsubscribeOutsideTouchEvents &&
              (this._unsubscribeOutsideTouchEvents(),
              (this._unsubscribeOutsideTouchEvents = null)),
            null !== this._unsubscribeMousemove &&
              (this._unsubscribeMousemove(),
              (this._unsubscribeMousemove = null)),
            null !== this._unsubscribeMouseWheel &&
              (this._unsubscribeMouseWheel(),
              (this._unsubscribeMouseWheel = null)),
            null !== this._unsubscribeContextMenu &&
              (this._unsubscribeContextMenu(),
              (this._unsubscribeContextMenu = null)),
            null !== this._unsubscribeRootMouseEvents &&
              (this._unsubscribeRootMouseEvents(),
              (this._unsubscribeRootMouseEvents = null)),
            null !== this._unsubscribeRootTouchEvents &&
              (this._unsubscribeRootTouchEvents(),
              (this._unsubscribeRootTouchEvents = null)),
            null !== this._unsubscribeMobileSafariEvents &&
              (this._unsubscribeMobileSafariEvents(),
              (this._unsubscribeMobileSafariEvents = null)),
            this._clearLongTapTimeout(),
            this._resetClickTimeout();
        }),
        (t.prototype._mouseEnterHandler = function (t) {
          var e,
            i,
            o,
            n = this;
          null === (e = this._unsubscribeMousemove) ||
            void 0 === e ||
            e.call(this),
            null === (i = this._unsubscribeMouseWheel) ||
              void 0 === i ||
              i.call(this),
            null === (o = this._unsubscribeContextMenu) ||
              void 0 === o ||
              o.call(this);
          var r = this._mouseMoveHandler.bind(this);
          (this._unsubscribeMousemove = function () {
            n._target.removeEventListener("mousemove", r);
          }),
            this._target.addEventListener("mousemove", r);
          var a = this._mouseWheelHandler.bind(this);
          (this._unsubscribeMouseWheel = function () {
            n._target.removeEventListener("wheel", a);
          }),
            this._target.addEventListener("wheel", a, { passive: !1 });
          var s = this._contextMenuHandler.bind(this);
          (this._unsubscribeContextMenu = function () {
            n._target.removeEventListener("contextmenu", s);
          }),
            this._target.addEventListener("contextmenu", s, { passive: !1 }),
            this._firesTouchEvents(t) ||
              (this._processEvent(
                this._makeCompatEvent(t),
                this._handler.mouseEnterEvent
              ),
              (this._acceptMouseLeave = !0));
        }),
        (t.prototype._resetClickTimeout = function () {
          null !== this._clickTimeoutId && clearTimeout(this._clickTimeoutId),
            (this._clickCount = 0),
            (this._clickTimeoutId = null),
            (this._clickCoordinate = { x: -1 / 0, y: 1 / 0 });
        }),
        (t.prototype._resetTapTimeout = function () {
          null !== this._tapTimeoutId && clearTimeout(this._tapTimeoutId),
            (this._tapCount = 0),
            (this._tapTimeoutId = null),
            (this._tapCoordinate = { x: -1 / 0, y: 1 / 0 });
        }),
        (t.prototype._mouseMoveHandler = function (t) {
          this._mousePressed ||
            null !== this._touchMoveStartCoordinate ||
            this._firesTouchEvents(t) ||
            (this._processEvent(
              this._makeCompatEvent(t),
              this._handler.mouseMoveEvent
            ),
            (this._acceptMouseLeave = !0));
        }),
        (t.prototype._mouseWheelHandler = function (t) {
          if (Math.abs(t.deltaX) > Math.abs(t.deltaY)) {
            if (void 0 === this._handler.mouseWheelHortEvent) return;
            if ((this._preventDefault(t), 0 === Math.abs(t.deltaX))) return;
            this._handler.mouseWheelHortEvent(
              this._makeCompatEvent(t),
              -t.deltaX
            );
          } else {
            if (void 0 === this._handler.mouseWheelVertEvent) return;
            var e = -t.deltaY / 100;
            if (0 === e) return;
            switch ((this._preventDefault(t), t.deltaMode)) {
              case t.DOM_DELTA_PAGE:
                e *= 120;
                break;
              case t.DOM_DELTA_LINE:
                e *= 32;
            }
            if (0 !== e) {
              var i = Math.sign(e) * Math.min(1, Math.abs(e));
              this._handler.mouseWheelVertEvent(this._makeCompatEvent(t), i);
            }
          }
        }),
        (t.prototype._contextMenuHandler = function (t) {
          this._preventDefault(t);
        }),
        (t.prototype._touchMoveHandler = function (t) {
          var e = this._touchWithId(t.changedTouches, this._activeTouchId);
          if (
            null !== e &&
            ((this._lastTouchEventTimeStamp = this._eventTimeStamp(t)),
            null === this._startPinchMiddleCoordinate &&
              !this._preventTouchDragProcess)
          ) {
            this._pinchPrevented = !0;
            var i = this._mouseTouchMoveWithDownInfo(
                this._getCoordinate(e),
                this._touchMoveStartCoordinate
              ),
              o = i.yOffset;
            if (
              this._touchMoveExceededManhattanDistance ||
              i.manhattanDistance >= 5
            ) {
              if (!this._touchMoveExceededManhattanDistance) {
                var n = 0.5 * i.xOffset,
                  r = o >= n && !this._options.treatVertDragAsPageScroll(),
                  a = n > o && !this._options.treatHorzDragAsPageScroll();
                r || a || (this._preventTouchDragProcess = !0),
                  (this._touchMoveExceededManhattanDistance = !0),
                  (this._cancelTap = !0),
                  this._clearLongTapTimeout(),
                  this._resetTapTimeout();
              }
              this._preventTouchDragProcess ||
                this._processEvent(
                  this._makeCompatEvent(t, e),
                  this._handler.touchMoveEvent
                );
            }
          }
        }),
        (t.prototype._mouseMoveWithDownHandler = function (t) {
          0 === t.button &&
            (5 >
              this._mouseTouchMoveWithDownInfo(
                this._getCoordinate(t),
                this._mouseMoveStartCoordinate
              ).manhattanDistance ||
              ((this._cancelClick = !0), this._resetClickTimeout()),
            this._cancelClick &&
              this._processEvent(
                this._makeCompatEvent(t),
                this._handler.pressedMouseMoveEvent
              ));
        }),
        (t.prototype._mouseTouchMoveWithDownInfo = function (t, e) {
          var i = Math.abs(e.x - t.x),
            o = Math.abs(e.y - t.y);
          return { xOffset: i, yOffset: o, manhattanDistance: i + o };
        }),
        (t.prototype._touchEndHandler = function (t) {
          var e = this._touchWithId(t.changedTouches, this._activeTouchId);
          if (
            (null === e && 0 === t.touches.length && (e = t.changedTouches[0]),
            null !== e)
          ) {
            (this._activeTouchId = null),
              (this._lastTouchEventTimeStamp = this._eventTimeStamp(t)),
              this._clearLongTapTimeout(),
              (this._touchMoveStartCoordinate = null),
              null !== this._unsubscribeRootTouchEvents &&
                (this._unsubscribeRootTouchEvents(),
                (this._unsubscribeRootTouchEvents = null));
            var i = this._makeCompatEvent(t, e);
            if (
              (this._processEvent(i, this._handler.touchEndEvent),
              ++this._tapCount,
              null !== this._tapTimeoutId && this._tapCount > 1)
            )
              30 >
                this._mouseTouchMoveWithDownInfo(
                  this._getCoordinate(e),
                  this._tapCoordinate
                ).manhattanDistance &&
                !this._cancelTap &&
                this._processEvent(i, this._handler.doubleTapEvent),
                this._resetTapTimeout();
            else
              this._cancelTap ||
                (this._processEvent(i, this._handler.tapEvent),
                void 0 !== this._handler.tapEvent && this._preventDefault(t));
            0 === this._tapCount && this._preventDefault(t),
              0 === t.touches.length &&
                this._longTapActive &&
                ((this._longTapActive = !1), this._preventDefault(t));
          }
        }),
        (t.prototype._mouseUpHandler = function (t) {
          if (0 === t.button) {
            var e = this._makeCompatEvent(t);
            if (
              ((this._mouseMoveStartCoordinate = null),
              (this._mousePressed = !1),
              null !== this._unsubscribeRootMouseEvents &&
                (this._unsubscribeRootMouseEvents(),
                (this._unsubscribeRootMouseEvents = null)),
              Ze())
            )
              this._target.ownerDocument.documentElement.removeEventListener(
                "mouseleave",
                this._onFirefoxOutsideMouseUp
              );
            if (!this._firesTouchEvents(t))
              if (
                (this._processEvent(e, this._handler.mouseUpEvent),
                ++this._clickCount,
                null !== this._clickTimeoutId && this._clickCount > 1)
              )
                5 >
                  this._mouseTouchMoveWithDownInfo(
                    this._getCoordinate(t),
                    this._clickCoordinate
                  ).manhattanDistance &&
                  !this._cancelClick &&
                  this._processEvent(e, this._handler.mouseDoubleClickEvent),
                  this._resetClickTimeout();
              else
                this._cancelClick ||
                  this._processEvent(e, this._handler.mouseClickEvent);
          }
        }),
        (t.prototype._clearLongTapTimeout = function () {
          null !== this._longTapTimeoutId &&
            (clearTimeout(this._longTapTimeoutId),
            (this._longTapTimeoutId = null));
        }),
        (t.prototype._touchStartHandler = function (t) {
          if (null === this._activeTouchId) {
            var e = t.changedTouches[0];
            (this._activeTouchId = e.identifier),
              (this._lastTouchEventTimeStamp = this._eventTimeStamp(t));
            var i = this._target.ownerDocument.documentElement;
            (this._cancelTap = !1),
              (this._touchMoveExceededManhattanDistance = !1),
              (this._preventTouchDragProcess = !1),
              (this._touchMoveStartCoordinate = this._getCoordinate(e)),
              null !== this._unsubscribeRootTouchEvents &&
                (this._unsubscribeRootTouchEvents(),
                (this._unsubscribeRootTouchEvents = null));
            var o = this._touchMoveHandler.bind(this),
              n = this._touchEndHandler.bind(this);
            (this._unsubscribeRootTouchEvents = function () {
              i.removeEventListener("touchmove", o),
                i.removeEventListener("touchend", n);
            }),
              i.addEventListener("touchmove", o, { passive: !1 }),
              i.addEventListener("touchend", n, { passive: !1 }),
              this._clearLongTapTimeout(),
              (this._longTapTimeoutId = setTimeout(
                this._longTapHandler.bind(this, t),
                500
              )),
              this._processEvent(
                this._makeCompatEvent(t, e),
                this._handler.touchStartEvent
              ),
              null === this._tapTimeoutId &&
                ((this._tapCount = 0),
                (this._tapTimeoutId = setTimeout(
                  this._resetTapTimeout.bind(this),
                  500
                )),
                (this._tapCoordinate = this._getCoordinate(e)));
          }
        }),
        (t.prototype._mouseDownHandler = function (t) {
          if (2 === t.button)
            return (
              this._preventDefault(t),
              void this._processEvent(
                this._makeCompatEvent(t),
                this._handler.mouseRightClickEvent
              )
            );
          if (0 === t.button) {
            var e = this._target.ownerDocument.documentElement;
            Ze() &&
              e.addEventListener("mouseleave", this._onFirefoxOutsideMouseUp),
              (this._cancelClick = !1),
              (this._mouseMoveStartCoordinate = this._getCoordinate(t)),
              null !== this._unsubscribeRootMouseEvents &&
                (this._unsubscribeRootMouseEvents(),
                (this._unsubscribeRootMouseEvents = null));
            var i = this._mouseMoveWithDownHandler.bind(this),
              o = this._mouseUpHandler.bind(this);
            (this._unsubscribeRootMouseEvents = function () {
              e.removeEventListener("mousemove", i),
                e.removeEventListener("mouseup", o);
            }),
              e.addEventListener("mousemove", i),
              e.addEventListener("mouseup", o),
              (this._mousePressed = !0),
              this._firesTouchEvents(t) ||
                (this._processEvent(
                  this._makeCompatEvent(t),
                  this._handler.mouseDownEvent
                ),
                null === this._clickTimeoutId &&
                  ((this._clickCount = 0),
                  (this._clickTimeoutId = setTimeout(
                    this._resetClickTimeout.bind(this),
                    500
                  )),
                  (this._clickCoordinate = this._getCoordinate(t))));
          }
        }),
        (t.prototype._init = function () {
          var t = this;
          this._target.addEventListener(
            "mouseenter",
            this._mouseEnterHandler.bind(this)
          ),
            this._target.addEventListener(
              "touchcancel",
              this._clearLongTapTimeout.bind(this)
            );
          var e = this._target.ownerDocument,
            i = function (e) {
              null != t._handler.mouseDownOutsideEvent &&
                ((e.composed && t._target.contains(e.composedPath()[0])) ||
                  (null !== e.target && t._target.contains(e.target)) ||
                  t._handler.mouseDownOutsideEvent({
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0,
                  }));
            };
          (this._unsubscribeOutsideTouchEvents = function () {
            e.removeEventListener("touchstart", i);
          }),
            (this._unsubscribeOutsideMouseEvents = function () {
              e.removeEventListener("mousedown", i);
            }),
            e.addEventListener("mousedown", i),
            e.addEventListener("touchstart", i, { passive: !0 }),
            $e() &&
              ((this._unsubscribeMobileSafariEvents = function () {
                t._target.removeEventListener(
                  "dblclick",
                  t._onMobileSafariDoubleClick
                );
              }),
              this._target.addEventListener(
                "dblclick",
                this._onMobileSafariDoubleClick
              )),
            this._target.addEventListener(
              "mouseleave",
              this._mouseLeaveHandler.bind(this)
            ),
            this._target.addEventListener(
              "touchstart",
              this._touchStartHandler.bind(this),
              { passive: !0 }
            ),
            this._target.addEventListener("mousedown", function (t) {
              if (1 === t.button) return t.preventDefault(), !1;
            }),
            this._target.addEventListener(
              "mousedown",
              this._mouseDownHandler.bind(this)
            ),
            this._initPinch(),
            this._target.addEventListener("touchmove", function () {}, {
              passive: !1,
            });
        }),
        (t.prototype._initPinch = function () {
          var t = this;
          (void 0 === this._handler.pinchStartEvent &&
            void 0 === this._handler.pinchEvent &&
            void 0 === this._handler.pinchEndEvent) ||
            (this._target.addEventListener(
              "touchstart",
              function (e) {
                return t._checkPinchState(e.touches);
              },
              { passive: !0 }
            ),
            this._target.addEventListener(
              "touchmove",
              function (e) {
                if (
                  2 === e.touches.length &&
                  null !== t._startPinchMiddleCoordinate &&
                  void 0 !== t._handler.pinchEvent
                ) {
                  var i =
                    t._getTouchDistance(e.touches[0], e.touches[1]) /
                    t._startPinchDistance;
                  t._handler.pinchEvent(
                    M(M({}, t._startPinchMiddleCoordinate), {
                      pageX: 0,
                      pageY: 0,
                    }),
                    i
                  ),
                    t._preventDefault(e);
                }
              },
              { passive: !1 }
            ),
            this._target.addEventListener("touchend", function (e) {
              t._checkPinchState(e.touches);
            }));
        }),
        (t.prototype._checkPinchState = function (t) {
          1 === t.length && (this._pinchPrevented = !1),
            2 !== t.length || this._pinchPrevented || this._longTapActive
              ? this._stopPinch()
              : this._startPinch(t);
        }),
        (t.prototype._startPinch = function (t) {
          var e,
            i =
              null !== (e = this._target.getBoundingClientRect()) &&
              void 0 !== e
                ? e
                : { left: 0, top: 0 };
          (this._startPinchMiddleCoordinate = {
            x: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
            y: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
          }),
            (this._startPinchDistance = this._getTouchDistance(t[0], t[1])),
            void 0 !== this._handler.pinchStartEvent &&
              this._handler.pinchStartEvent({ x: 0, y: 0, pageX: 0, pageY: 0 }),
            this._clearLongTapTimeout();
        }),
        (t.prototype._stopPinch = function () {
          null !== this._startPinchMiddleCoordinate &&
            ((this._startPinchMiddleCoordinate = null),
            void 0 !== this._handler.pinchEndEvent &&
              this._handler.pinchEndEvent({ x: 0, y: 0, pageX: 0, pageY: 0 }));
        }),
        (t.prototype._mouseLeaveHandler = function (t) {
          var e, i, o;
          null === (e = this._unsubscribeMousemove) ||
            void 0 === e ||
            e.call(this),
            null === (i = this._unsubscribeMouseWheel) ||
              void 0 === i ||
              i.call(this),
            null === (o = this._unsubscribeContextMenu) ||
              void 0 === o ||
              o.call(this),
            this._firesTouchEvents(t) ||
              (this._acceptMouseLeave &&
                (this._processEvent(
                  this._makeCompatEvent(t),
                  this._handler.mouseLeaveEvent
                ),
                (this._acceptMouseLeave = !$e())));
        }),
        (t.prototype._longTapHandler = function (t) {
          var e = this._touchWithId(t.touches, this._activeTouchId);
          null !== e &&
            (this._processEvent(
              this._makeCompatEvent(t, e),
              this._handler.longTapEvent
            ),
            (this._cancelTap = !0),
            (this._longTapActive = !0));
        }),
        (t.prototype._firesTouchEvents = function (t) {
          var e;
          return void 0 !==
            (null === (e = t.sourceCapabilities) || void 0 === e
              ? void 0
              : e.firesTouchEvents)
            ? t.sourceCapabilities.firesTouchEvents
            : this._eventTimeStamp(t) < this._lastTouchEventTimeStamp + 500;
        }),
        (t.prototype._processEvent = function (t, e) {
          null == e || e.call(this._handler, t);
        }),
        (t.prototype._makeCompatEvent = function (t, e) {
          var i,
            o = this,
            n = null != e ? e : t,
            r =
              null !== (i = this._target.getBoundingClientRect()) &&
              void 0 !== i
                ? i
                : { left: 0, top: 0 };
          return {
            x: n.clientX - r.left,
            y: n.clientY - r.top,
            pageX: n.pageX,
            pageY: n.pageY,
            isTouch:
              !t.type.startsWith("mouse") &&
              "contextmenu" !== t.type &&
              "click" !== t.type,
            preventDefault: function () {
              "touchstart" !== t.type && o._preventDefault(t);
            },
          };
        }),
        (t.prototype._getTouchDistance = function (t, e) {
          var i = t.clientX - e.clientX,
            o = t.clientY - e.clientY;
          return Math.sqrt(i * i + o * o);
        }),
        (t.prototype._preventDefault = function (t) {
          t.cancelable && t.preventDefault();
        }),
        (t.prototype._getCoordinate = function (t) {
          return { x: t.pageX, y: t.pageY };
        }),
        (t.prototype._eventTimeStamp = function (t) {
          var e;
          return null !== (e = t.timeStamp) && void 0 !== e
            ? e
            : performance.now();
        }),
        (t.prototype._touchWithId = function (t, e) {
          for (var i = 0; t.length > i; ++i)
            if (t[i].identifier === e) return t[i];
          return null;
        }),
        t
      );
    })(),
    ti = (function () {
      function t(t, e) {
        var i = this;
        (this._flingStartTime = new Date().getTime()),
          (this._flingScrollRequestId = null),
          (this._startScrollCoordinate = null),
          (this._touchCoordinate = null),
          (this._touchCancelCrosshair = !1),
          (this._touchZoomed = !1),
          (this._pinchScale = 1),
          (this._mouseDownWidget = null),
          (this._prevYAxisExtremum = null),
          (this._xAxisStartScaleCoordinate = null),
          (this._xAxisStartScaleDistance = 0),
          (this._xAxisScale = 1),
          (this._yAxisStartScaleDistance = 0),
          (this._mouseMoveTriggerWidgetInfo = { pane: null, widget: null }),
          (this._boundKeyBoardDownEvent = function (t) {
            if (t.shiftKey)
              switch (t.code) {
                case "Equal":
                  i._chart.getChartStore().getTimeScaleStore().zoom(0.5);
                  break;
                case "Minus":
                  i._chart.getChartStore().getTimeScaleStore().zoom(-0.5);
                  break;
                case "ArrowLeft":
                  (e = i._chart
                    .getChartStore()
                    .getTimeScaleStore()).startScroll(),
                    e.scroll(-3 * e.getBarSpace().bar);
                  break;
                case "ArrowRight":
                  var e;
                  (e = i._chart
                    .getChartStore()
                    .getTimeScaleStore()).startScroll(),
                    e.scroll(3 * e.getBarSpace().bar);
              }
          }),
          (this._container = t),
          (this._chart = e),
          (this._event = new Qe(t, this, {
            treatVertDragAsPageScroll: function () {
              return !1;
            },
            treatHorzDragAsPageScroll: function () {
              return !1;
            },
          })),
          t.addEventListener("keydown", this._boundKeyBoardDownEvent);
      }
      return (
        (t.prototype.pinchStartEvent = function () {
          return (this._touchZoomed = !0), (this._pinchScale = 1), !0;
        }),
        (t.prototype.pinchEvent = function (t, e) {
          var i = this._findWidgetByEvent(t),
            o = i.pane,
            n = i.widget;
          if (
            (null == o ? void 0 : o.getId()) !== Nt &&
            (null == n ? void 0 : n.getName()) === At
          ) {
            var r = this._makeWidgetEvent(t, n),
              a = 5 * (e - this._pinchScale);
            return (
              (this._pinchScale = e),
              this._chart
                .getChartStore()
                .getTimeScaleStore()
                .zoom(a, { x: r.x, y: r.y }),
              !0
            );
          }
          return !1;
        }),
        (t.prototype.mouseWheelHortEvent = function (t, e) {
          var i = this._chart.getChartStore().getTimeScaleStore();
          return i.startScroll(), i.scroll(e), !0;
        }),
        (t.prototype.mouseWheelVertEvent = function (t, e) {
          var i,
            o,
            n = this._findWidgetByEvent(t).widget,
            r = null !== (i = t.isTouch) && void 0 !== i && i,
            a = this._makeWidgetEvent(t, n),
            s = null,
            l = null == n ? void 0 : n.getName();
          if (r)
            if (l === At || l === Ft) s = { x: a.x, y: a.y };
            else {
              var c =
                null === (o = this._chart.getPaneById(Vt)) || void 0 === o
                  ? void 0
                  : o.getBounding();
              s = { x: c.width / 2, y: c.height / 2 };
            }
          else l === At && (s = { x: a.x, y: a.y });
          return (
            null !== s &&
            (this._chart
              .getChartStore()
              .getTimeScaleStore()
              .zoom(e, { x: a.x, y: a.y }),
            !0)
          );
        }),
        (t.prototype.mouseDownEvent = function (t) {
          var e,
            i,
            o = this._findWidgetByEvent(t),
            n = o.pane,
            r = o.widget;
          if (((this._mouseDownWidget = r), null !== r)) {
            var a = this._makeWidgetEvent(t, r);
            switch (r.getName()) {
              case Rt:
                return r.dispatchEvent("mouseDownEvent", a);
              case At:
                var s =
                  null !==
                    (e =
                      null == n
                        ? void 0
                        : n.getAxisComponent().getExtremum()) && void 0 !== e
                    ? e
                    : null;
                return (
                  (this._prevYAxisExtremum = null === s ? s : M({}, s)),
                  (this._startScrollCoordinate = { x: a.x, y: a.y }),
                  this._chart.getChartStore().getTimeScaleStore().startScroll(),
                  r.dispatchEvent("mouseDownEvent", a)
                );
              case Ft:
                return (
                  (l = r.dispatchEvent("mouseDownEvent", a)) &&
                    this._chart.updatePane(1),
                  (this._xAxisStartScaleCoordinate = { x: a.x, y: a.y }),
                  (this._xAxisStartScaleDistance = a.pageX),
                  l
                );
              case Lt:
                var l;
                (l = r.dispatchEvent("mouseDownEvent", a)) &&
                  this._chart.updatePane(1);
                s =
                  null !==
                    (i =
                      null == n
                        ? void 0
                        : n.getAxisComponent().getExtremum()) && void 0 !== i
                    ? i
                    : null;
                return (
                  (this._prevYAxisExtremum = null === s ? s : M({}, s)),
                  (this._yAxisStartScaleDistance = a.pageY),
                  l
                );
            }
          }
          return !1;
        }),
        (t.prototype.mouseMoveEvent = function (t) {
          var e,
            i,
            o,
            n = this._findWidgetByEvent(t),
            r = n.pane,
            a = n.widget,
            s = this._makeWidgetEvent(t, a);
          if (
            (((null === (e = this._mouseMoveTriggerWidgetInfo.pane) ||
            void 0 === e
              ? void 0
              : e.getId()) === (null == r ? void 0 : r.getId()) &&
              (null === (i = this._mouseMoveTriggerWidgetInfo.widget) ||
              void 0 === i
                ? void 0
                : i.getName()) === (null == a ? void 0 : a.getName())) ||
              (null == a || a.dispatchEvent("mouseEnterEvent", s),
              null === (o = this._mouseMoveTriggerWidgetInfo.widget) ||
                void 0 === o ||
                o.dispatchEvent("mouseLeaveEvent", s),
              (this._mouseMoveTriggerWidgetInfo = { pane: r, widget: a })),
            null !== a)
          )
            switch (a.getName()) {
              case At:
                var l = a.dispatchEvent("mouseMoveEvent", s),
                  c = this._chart.getChartStore(),
                  u = {
                    x: s.x,
                    y: s.y,
                    paneId: null == r ? void 0 : r.getId(),
                  };
                return (
                  l &&
                    null !== c.getTooltipStore().getActiveIconInfo() &&
                    ((u = void 0),
                    null !== a && (a.getContainer().style.cursor = "pointer")),
                  this._chart.getChartStore().getCrosshairStore().set(u),
                  l
                );
              case Rt:
              case Ft:
              case Lt:
                l = a.dispatchEvent("mouseMoveEvent", s);
                return this._chart.getChartStore().getCrosshairStore().set(), l;
            }
          return !1;
        }),
        (t.prototype.pressedMouseMoveEvent = function (t) {
          var e, i, o, n;
          if (
            null !== this._mouseDownWidget &&
            this._mouseDownWidget.getName() === Rt
          )
            return this._mouseDownWidget.dispatchEvent(
              "pressedMouseMoveEvent",
              t
            );
          var r = this._findWidgetByEvent(t),
            a = r.pane,
            s = r.widget;
          if (
            null !== s &&
            (null === (e = this._mouseDownWidget) || void 0 === e
              ? void 0
              : e.getPane().getId()) === (null == a ? void 0 : a.getId()) &&
            (null === (i = this._mouseDownWidget) || void 0 === i
              ? void 0
              : i.getName()) === s.getName()
          ) {
            var l = this._makeWidgetEvent(t, s);
            switch (s.getName()) {
              case At:
                var c = s.getBounding();
                if (
                  !(y = s.dispatchEvent("pressedMouseMoveEvent", l)) &&
                  null !== this._startScrollCoordinate
                ) {
                  var u = null == a ? void 0 : a.getAxisComponent();
                  if (
                    null !== this._prevYAxisExtremum &&
                    !u.getAutoCalcTickFlag()
                  ) {
                    var h = this._prevYAxisExtremum,
                      d = h.min,
                      p =
                        h.max +
                        (S =
                          (_ = h.range) *
                          (x =
                            (null !==
                              (o = null == u ? void 0 : u.isReverse()) &&
                            void 0 !== o &&
                            o
                              ? this._startScrollCoordinate.y - l.y
                              : l.y - this._startScrollCoordinate.y) /
                            c.height)),
                      v = u.convertToRealValue((w = d + S)),
                      g = u.convertToRealValue(p);
                    u.setExtremum({
                      min: w,
                      max: p,
                      range: p - w,
                      realMin: v,
                      realMax: g,
                      realRange: g - v,
                    });
                  }
                  var f = l.x - this._startScrollCoordinate.x;
                  this._chart.getChartStore().getTimeScaleStore().scroll(f);
                }
                return (
                  this._chart
                    .getChartStore()
                    .getCrosshairStore()
                    .set({
                      x: l.x,
                      y: l.y,
                      paneId: null == a ? void 0 : a.getId(),
                    }),
                  y
                );
              case Ft:
                if ((y = s.dispatchEvent("pressedMouseMoveEvent", l)))
                  this._chart.updatePane(1);
                else {
                  var m =
                    10 *
                    ((x = this._xAxisStartScaleDistance / l.pageX) -
                      this._xAxisScale);
                  (this._xAxisScale = x),
                    this._chart
                      .getChartStore()
                      .getTimeScaleStore()
                      .zoom(
                        m,
                        null !== (n = this._xAxisStartScaleCoordinate) &&
                          void 0 !== n
                          ? n
                          : void 0
                      );
                }
                return y;
              case Lt:
                var y;
                if ((y = s.dispatchEvent("pressedMouseMoveEvent", l)))
                  this._chart.updatePane(1);
                else if (null !== this._prevYAxisExtremum) {
                  var _,
                    x,
                    S,
                    C = this._prevYAxisExtremum,
                    b =
                      (_ = C.range) *
                      (x = l.pageY / this._yAxisStartScaleDistance),
                    w = (d = C.min) - (S = (b - _) / 2);
                  (p = C.max + S),
                    (v = (u =
                      null == a
                        ? void 0
                        : a.getAxisComponent()).convertToRealValue(w)),
                    (g = u.convertToRealValue(p));
                  u.setExtremum({
                    min: w,
                    max: p,
                    range: b,
                    realMin: v,
                    realMax: g,
                    realRange: g - v,
                  }),
                    this._chart.adjustPaneViewport(!1, !0, !0, !0);
                }
                return y;
            }
          }
          return !1;
        }),
        (t.prototype.mouseUpEvent = function (t) {
          var e = this._findWidgetByEvent(t).widget,
            i = !1;
          if (null !== e) {
            var o = this._makeWidgetEvent(t, e);
            switch (e.getName()) {
              case At:
              case Rt:
              case Ft:
              case Lt:
                i = e.dispatchEvent("mouseUpEvent", o);
            }
            i && this._chart.updatePane(1);
          }
          return (
            (this._mouseDownWidget = null),
            (this._startScrollCoordinate = null),
            (this._prevYAxisExtremum = null),
            (this._xAxisStartScaleCoordinate = null),
            (this._xAxisStartScaleDistance = 0),
            (this._xAxisScale = 1),
            (this._yAxisStartScaleDistance = 0),
            i
          );
        }),
        (t.prototype.mouseClickEvent = function (t) {
          var e = this._findWidgetByEvent(t).widget;
          if (null !== e) {
            var i = this._makeWidgetEvent(t, e);
            return e.dispatchEvent("mouseClickEvent", i);
          }
          return !1;
        }),
        (t.prototype.mouseRightClickEvent = function (t) {
          var e = this._findWidgetByEvent(t).widget,
            i = !1;
          if (null !== e) {
            var o = this._makeWidgetEvent(t, e);
            switch (e.getName()) {
              case At:
              case Ft:
              case Lt:
                i = e.dispatchEvent("mouseRightClickEvent", o);
            }
            i && this._chart.updatePane(1);
          }
          return !1;
        }),
        (t.prototype.mouseDoubleClickEvent = function (t) {
          var e = this._findWidgetByEvent(t),
            i = e.pane,
            o = e.widget;
          if (null !== o)
            switch (o.getName()) {
              case At:
                var n = this._makeWidgetEvent(t, o);
                return o.dispatchEvent("mouseDoubleClickEvent", n);
              case Lt:
                var r = null == i ? void 0 : i.getAxisComponent();
                if (!r.getAutoCalcTickFlag())
                  return (
                    r.setAutoCalcTickFlag(!0),
                    this._chart.adjustPaneViewport(!1, !0, !0, !0),
                    !0
                  );
            }
          return !1;
        }),
        (t.prototype.mouseLeaveEvent = function () {
          return this._chart.getChartStore().getCrosshairStore().set(), !0;
        }),
        (t.prototype.touchStartEvent = function (t) {
          var e = this._findWidgetByEvent(t),
            i = e.pane,
            o = e.widget;
          if (null !== o) {
            var n = this._makeWidgetEvent(t, o);
            switch (o.getName()) {
              case At:
                var r = this._chart.getChartStore(),
                  a = r.getCrosshairStore();
                if (o.dispatchEvent("mouseDownEvent", n))
                  return (
                    (this._touchCancelCrosshair = !0),
                    (this._touchCoordinate = null),
                    a.set(void 0, !0),
                    this._chart.updatePane(1),
                    !0
                  );
                if (
                  (null !== this._flingScrollRequestId &&
                    (clearTimeout(this._flingScrollRequestId),
                    (this._flingScrollRequestId = null)),
                  (this._flingStartTime = new Date().getTime()),
                  (this._startScrollCoordinate = { x: n.x, y: n.y }),
                  r.getTimeScaleStore().startScroll(),
                  (this._touchZoomed = !1),
                  null !== this._touchCoordinate)
                ) {
                  var s = n.x - this._touchCoordinate.x,
                    l = n.y - this._touchCoordinate.y;
                  10 > Math.sqrt(s * s + l * l)
                    ? ((this._touchCoordinate = { x: n.x, y: n.y }),
                      a.set({
                        x: n.x,
                        y: n.y,
                        paneId: null == i ? void 0 : i.getId(),
                      }))
                    : ((this._touchCoordinate = null),
                      (this._touchCancelCrosshair = !0),
                      a.set());
                }
                return !0;
              case Ft:
              case Lt:
                var c = o.dispatchEvent("mouseDownEvent", n);
                return c && this._chart.updatePane(1), c;
            }
          }
          return !1;
        }),
        (t.prototype.touchMoveEvent = function (t) {
          var e,
            i,
            o,
            n = this._findWidgetByEvent(t),
            r = n.pane,
            a = n.widget;
          if (null !== a) {
            var s = this._makeWidgetEvent(t, a),
              l = a.getName(),
              c = this._chart.getChartStore(),
              u = c.getCrosshairStore();
            switch (l) {
              case At:
                if (a.dispatchEvent("pressedMouseMoveEvent", s))
                  return (
                    null === (e = s.preventDefault) ||
                      void 0 === e ||
                      e.call(s),
                    u.set(void 0, !0),
                    this._chart.updatePane(1),
                    !0
                  );
                if (null !== this._touchCoordinate)
                  null === (i = s.preventDefault) || void 0 === i || i.call(s),
                    u.set({
                      x: s.x,
                      y: s.y,
                      paneId: null == r ? void 0 : r.getId(),
                    });
                else if (
                  null !== this._startScrollCoordinate &&
                  Math.abs(this._startScrollCoordinate.x - s.x) >
                    this._startScrollCoordinate.y - s.y
                ) {
                  var h = s.x - this._startScrollCoordinate.x;
                  c.getTimeScaleStore().scroll(h);
                }
                return !0;
              case Ft:
              case Lt:
                var d = a.dispatchEvent("pressedMouseMoveEvent", s);
                return (
                  d &&
                    (null === (o = s.preventDefault) ||
                      void 0 === o ||
                      o.call(s),
                    this._chart.updatePane(1)),
                  d
                );
            }
          }
          return !1;
        }),
        (t.prototype.touchEndEvent = function (t) {
          var e = this,
            i = this._findWidgetByEvent(t).widget;
          if (null !== i) {
            var o = this._makeWidgetEvent(t, i);
            switch (i.getName()) {
              case At:
                if (
                  (i.dispatchEvent("mouseUpEvent", o),
                  null !== this._startScrollCoordinate)
                ) {
                  var n = new Date().getTime() - this._flingStartTime,
                    r =
                      ((o.x - this._startScrollCoordinate.x) /
                        (n > 0 ? n : 1)) *
                      20;
                  if (200 > n && Math.abs(r) > 0) {
                    var a = this._chart.getChartStore().getTimeScaleStore(),
                      s = function () {
                        e._flingScrollRequestId = Kt(function () {
                          a.startScroll(),
                            a.scroll(r),
                            1 > Math.abs((r *= 0.975))
                              ? null !== e._flingScrollRequestId &&
                                (Ut(e._flingScrollRequestId),
                                (e._flingScrollRequestId = null))
                              : s();
                        });
                      };
                    s();
                  }
                }
                return !0;
              case Ft:
              case Lt:
                i.dispatchEvent("mouseUpEvent", o) && this._chart.updatePane(1);
            }
          }
          return !1;
        }),
        (t.prototype.tapEvent = function (t) {
          var e = this._findWidgetByEvent(t),
            i = e.pane,
            o = e.widget,
            n = !1;
          if (null !== o) {
            var r = this._makeWidgetEvent(t, o),
              a = o.dispatchEvent("mouseClickEvent", r);
            if (o.getName() === At) {
              var s = this._makeWidgetEvent(t, o),
                l = this._chart.getChartStore().getCrosshairStore();
              a
                ? ((this._touchCancelCrosshair = !0),
                  (this._touchCoordinate = null),
                  l.set(void 0, !0),
                  (n = !0))
                : (this._touchCancelCrosshair ||
                    this._touchZoomed ||
                    ((this._touchCoordinate = { x: s.x, y: s.y }),
                    l.set(
                      {
                        x: s.x,
                        y: s.y,
                        paneId: null == i ? void 0 : i.getId(),
                      },
                      !0
                    ),
                    (n = !0)),
                  (this._touchCancelCrosshair = !1));
            }
            (n || a) && this._chart.updatePane(1);
          }
          return n;
        }),
        (t.prototype.doubleTapEvent = function (t) {
          return this.mouseDoubleClickEvent(t);
        }),
        (t.prototype.longTapEvent = function (t) {
          var e = this._findWidgetByEvent(t),
            i = e.pane,
            o = e.widget;
          if (null !== o && o.getName() === At) {
            var n = this._makeWidgetEvent(t, o);
            return (
              (this._touchCoordinate = { x: n.x, y: n.y }),
              this._chart
                .getChartStore()
                .getCrosshairStore()
                .set({
                  x: n.x,
                  y: n.y,
                  paneId: null == i ? void 0 : i.getId(),
                }),
              !0
            );
          }
          return !1;
        }),
        (t.prototype._findWidgetByEvent = function (t) {
          var e,
            i,
            o = this._chart.getAllPanes(),
            n = t.x,
            r = t.y,
            a = null;
          try {
            for (var s = F(o), l = s.next(); !l.done; l = s.next()) {
              var c = L(l.value, 2)[1],
                u = c.getBounding();
              if (
                !(
                  u.left > n ||
                  n > u.left + u.width ||
                  u.top > r ||
                  r > u.top + u.height
                )
              ) {
                a = c;
                break;
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              l && !l.done && (i = s.return) && i.call(s);
            } finally {
              if (e) throw e.error;
            }
          }
          null === a && (a = this._chart.getPaneById(Nt));
          var h = null;
          if (null !== a) {
            var d = a.getSeparatorWidget();
            if (null !== d) {
              var p = d.getBounding();
              p.left > n ||
                n > p.left + p.width ||
                p.top > r ||
                r > p.top + 7 ||
                (h = d);
            }
            if (null === h) {
              var v = a.getMainWidget(),
                g = v.getBounding();
              g.left > n ||
                n > g.left + g.width ||
                g.top > r ||
                r > g.top + g.height ||
                (h = v);
            }
            if (null === h) {
              var f = a.getYAxisWidget();
              if (null !== f) {
                var m = f.getBounding();
                m.left > n ||
                  n > m.left + m.width ||
                  m.top > r ||
                  r > m.top + m.height ||
                  (h = f);
              }
            }
          }
          return { pane: a, widget: h };
        }),
        (t.prototype._makeWidgetEvent = function (t, e) {
          var i,
            o,
            n,
            r =
              null !== (i = null == e ? void 0 : e.getBounding()) &&
              void 0 !== i
                ? i
                : null;
          return M(M({}, t), {
            x:
              t.x -
              (null !== (o = null == r ? void 0 : r.left) && void 0 !== o
                ? o
                : 0),
            y:
              t.y -
              (null !== (n = null == r ? void 0 : r.top) && void 0 !== n
                ? n
                : 0),
          });
        }),
        (t.prototype.destroy = function () {
          this._container.removeEventListener(
            "keydown",
            this._boundKeyBoardDownEvent
          ),
            this._event.destroy();
        }),
        t
      );
    })();
  (t.DomPosition = void 0),
    ((Je = t.DomPosition || (t.DomPosition = {})).Root = "root"),
    (Je.Main = "main"),
    (Je.YAxis = "yAxis");
  var ei = (function () {
      function e(t, e) {
        (this._panes = new Map()),
          this._initContainer(t),
          (this._chartEvent = new ti(this._chartContainer, this)),
          (this._chartStore = new Gt(this, e)),
          (this._xAxisPane = new qe(this._chartContainer, this, Nt)),
          this._panes.set(Vt, new He(this._chartContainer, this, Vt)),
          this.adjustPaneViewport(!0, !0, !0);
      }
      return (
        (e.prototype._initContainer = function (t) {
          (this._container = t),
            (this._chartContainer = N("div", {
              position: "relative",
              width: "100%",
              outline: "none",
              borderStyle: "none",
              cursor: "crosshair",
              boxSizing: "border-box",
              userSelect: "none",
              webkitUserSelect: "none",
              msUserSelect: "none",
              MozUserSelect: "none",
              webkitTapHighlightColor: "transparent",
            })),
            (this._chartContainer.tabIndex = 1),
            t.appendChild(this._chartContainer);
        }),
        (e.prototype._measurePaneHeight = function () {
          var t,
            e = this._container.offsetHeight,
            i = this._xAxisPane.getAxisComponent().getAutoSize(),
            o = e - i;
          0 > o && (o = 0);
          var n = 0;
          this._panes.forEach(function (t) {
            if (t.getId() !== Vt) {
              var e = t.getBounding().height,
                i = t.getOptions().minHeight;
              i > e && (e = i),
                n + e > o ? (e = Math.max(o - (n = o), 0)) : (n += e),
                t.setBounding({ height: e });
            }
          });
          var r = o - n;
          null === (t = this._panes.get(Vt)) ||
            void 0 === t ||
            t.setBounding({ height: r });
          var a = 0;
          this._panes.forEach(function (t) {
            t.setBounding({ top: a }), (a += t.getBounding().height);
          }),
            this._xAxisPane.setBounding({ height: i, top: a });
        }),
        (e.prototype._measurePaneWidth = function () {
          var e = this._chartStore.getStyles().yAxis,
            i = e.position === t.YAxisPosition.Left,
            o = !e.inside,
            n = this._container.offsetWidth,
            r = 0,
            a = Number.MIN_SAFE_INTEGER,
            s = 0,
            l = 0;
          this._panes.forEach(function (t) {
            a = Math.max(a, t.getAxisComponent().getAutoSize());
          }),
            a > n && (a = n),
            o
              ? ((r = n - a), i ? ((s = 0), (l = a)) : ((s = n - a), (l = 0)))
              : ((r = n), (l = 0), (s = i ? 0 : n - a)),
            this._chartStore.getTimeScaleStore().setTotalBarSpace(r);
          var c = { width: n },
            u = { width: r, left: l },
            h = { width: a, left: s };
          this._panes.forEach(function (t) {
            t.setBounding(c, u, h);
          }),
            this._xAxisPane.setBounding(c, u, h);
        }),
        (e.prototype._setPaneOptions = function (t, e) {
          var i,
            o,
            n = this._panes.get(
              null !== (i = null == t ? void 0 : t.id) && void 0 !== i ? i : ""
            ),
            r = !1;
          if (void 0 !== n) {
            var a = e;
            if (t.id !== Vt && void 0 !== t.height && t.height > 0) {
              var s = Math.max(
                null !== (o = t.minHeight) && void 0 !== o
                  ? o
                  : n.getOptions().minHeight,
                0
              );
              n.setBounding({ height: Math.max(s, t.height) }),
                (a = !0),
                (r = !0);
            }
            n.setOptions(t), a && this.adjustPaneViewport(r, !0, !0, !0, !0);
          }
        }),
        (e.prototype.getContainer = function () {
          return this._container;
        }),
        (e.prototype.getChartStore = function () {
          return this._chartStore;
        }),
        (e.prototype.getAllPanes = function () {
          return this._panes;
        }),
        (e.prototype.adjustPaneViewport = function (t, e, i, o, n) {
          t && this._measurePaneHeight();
          var r = e,
            a = null != n && n;
          ((null != o && o) || a) &&
            this._panes.forEach(function (t) {
              var e = t.getAxisComponent().buildTicks(a);
              r || (r = e);
            }),
            r && this._measurePaneWidth(),
            null != i &&
              i &&
              (this._xAxisPane.getAxisComponent().buildTicks(!0),
              this.updatePane(4));
        }),
        (e.prototype.updatePane = function (t, e) {
          var i;
          void 0 !== e
            ? null === (i = this.getPaneById(e)) || void 0 === i || i.update(t)
            : (this._xAxisPane.update(t),
              this._panes.forEach(function (e) {
                e.update(t);
              }));
        }),
        (e.prototype.getPaneById = function (t) {
          var e;
          return t === Nt
            ? this._xAxisPane
            : null !== (e = this._panes.get(t)) && void 0 !== e
            ? e
            : null;
        }),
        (e.prototype.crosshairChange = function (e) {
          var i = this,
            o = this._chartStore.getActionStore();
          if (o.has(t.ActionType.OnCrosshairChange)) {
            var n = {};
            this._panes.forEach(function (t, o) {
              var r = {};
              i._chartStore
                .getIndicatorStore()
                .getInstances(o)
                .forEach(function (t) {
                  var i,
                    o = t.result;
                  r[t.name] =
                    o[
                      null !== (i = e.dataIndex) && void 0 !== i
                        ? i
                        : o.length - 1
                    ];
                }),
                (n[o] = r);
            }),
              void 0 !== e.paneId &&
                o.execute(
                  t.ActionType.OnCrosshairChange,
                  M(M({}, e), { indicatorData: n })
                );
          }
        }),
        (e.prototype.getDom = function (e, i) {
          var o, n;
          if (void 0 === e) return this._chartContainer;
          var r = this.getPaneById(e);
          if (null !== r)
            switch (null != i ? i : t.DomPosition.Root) {
              case t.DomPosition.Root:
                return r.getContainer();
              case t.DomPosition.Main:
                return r.getMainWidget().getContainer();
              case t.DomPosition.YAxis:
                return null !==
                  (n =
                    null === (o = r.getYAxisWidget()) || void 0 === o
                      ? void 0
                      : o.getContainer()) && void 0 !== n
                  ? n
                  : null;
            }
          return null;
        }),
        (e.prototype.getSize = function (e, i) {
          var o, n;
          if (void 0 === e)
            return {
              width: this._chartContainer.offsetWidth,
              height: this._chartContainer.offsetHeight,
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            };
          var r = this.getPaneById(e);
          if (null !== r)
            switch (null != i ? i : t.DomPosition.Root) {
              case t.DomPosition.Root:
                return r.getBounding();
              case t.DomPosition.Main:
                return r.getMainWidget().getBounding();
              case t.DomPosition.YAxis:
                return null !==
                  (n =
                    null === (o = r.getYAxisWidget()) || void 0 === o
                      ? void 0
                      : o.getBounding()) && void 0 !== n
                  ? n
                  : null;
            }
          return null;
        }),
        (e.prototype.setStyles = function (t) {
          var e, i, o;
          this._chartStore.setOptions({ styles: t }),
            void 0 !==
              (null ===
                (e = null == (o = c(t) ? jt(t) : t) ? void 0 : o.yAxis) ||
              void 0 === e
                ? void 0
                : e.type) &&
              (null === (i = this.getPaneById(Vt)) ||
                void 0 === i ||
                i.getAxisComponent().setAutoCalcTickFlag(!0)),
            this.adjustPaneViewport(!0, !0, !0, !0, !0);
        }),
        (e.prototype.getStyles = function () {
          return this._chartStore.getStyles();
        }),
        (e.prototype.setLocale = function (t) {
          this._chartStore.setOptions({ locale: t }),
            this.adjustPaneViewport(!0, !0, !0, !0, !0);
        }),
        (e.prototype.getLocale = function () {
          return this._chartStore.getLocale();
        }),
        (e.prototype.setCustomApi = function (t) {
          this._chartStore.setOptions({ customApi: t }),
            this.adjustPaneViewport(!0, !0, !0, !0, !0);
        }),
        (e.prototype.setPriceVolumePrecision = function (t, e) {
          this._chartStore.setPrecision({ price: t, volume: e });
        }),
        (e.prototype.getPriceVolumePrecision = function () {
          return this._chartStore.getPrecision();
        }),
        (e.prototype.setTimezone = function (t) {
          this._chartStore.setOptions({ timezone: t }),
            this._xAxisPane.getAxisComponent().buildTicks(!0),
            this._xAxisPane.update(3);
        }),
        (e.prototype.getTimezone = function () {
          return this._chartStore.getTimeScaleStore().getTimezone();
        }),
        (e.prototype.setOffsetRightDistance = function (t) {
          this._chartStore.getTimeScaleStore().setOffsetRightDistance(t, !0);
        }),
        (e.prototype.getOffsetRightDistance = function () {
          return this._chartStore.getTimeScaleStore().getOffsetRightDistance();
        }),
        (e.prototype.setLeftMinVisibleBarCount = function (t) {
          t > 0 &&
            this._chartStore
              .getTimeScaleStore()
              .setLeftMinVisibleBarCount(Math.ceil(t));
        }),
        (e.prototype.setRightMinVisibleBarCount = function (t) {
          t > 0 &&
            this._chartStore
              .getTimeScaleStore()
              .setRightMinVisibleBarCount(Math.ceil(t));
        }),
        (e.prototype.setBarSpace = function (t) {
          this._chartStore.getTimeScaleStore().setBarSpace(t);
        }),
        (e.prototype.getBarSpace = function () {
          return this._chartStore.getTimeScaleStore().getBarSpace().bar;
        }),
        (e.prototype.getVisibleRange = function () {
          return this._chartStore.getTimeScaleStore().getVisibleRange();
        }),
        (e.prototype.clearData = function () {
          this._chartStore.clearDataList();
        }),
        (e.prototype.getDataList = function () {
          return this._chartStore.getDataList();
        }),
        (e.prototype.applyNewData = function (t, e, i) {
          this._chartStore.clearDataList(),
            0 === t.length
              ? this.adjustPaneViewport(!1, !0, !0, !0)
              : this.applyMoreData(t, e, i);
        }),
        (e.prototype.applyMoreData = function (t, e, i) {
          var o = this;
          this._chartStore.addData(t, 0, e),
            t.length > 0 &&
              this._chartStore
                .getIndicatorStore()
                .calcInstance()
                .then(function (t) {
                  o.adjustPaneViewport(!1, !0, !0, !0), null == i || i();
                })
                .catch(function (t) {});
        }),
        (e.prototype.updateData = function (t, e) {
          var i = this,
            o = this._chartStore.getDataList(),
            n = o.length,
            r = t.timestamp,
            a = C(o[n - 1], "timestamp", 0);
          if (r >= a) {
            var s = n;
            r === a && (s = n - 1),
              this._chartStore.addData(t, s),
              this._chartStore
                .getIndicatorStore()
                .calcInstance()
                .then(function (t) {
                  i.adjustPaneViewport(!1, !0, !0, !0), null == e || e();
                })
                .catch(function (t) {});
          }
        }),
        (e.prototype.loadMore = function (t) {
          this._chartStore.getTimeScaleStore().setLoadMoreCallback(t);
        }),
        (e.prototype.createIndicator = function (t, e, i, o) {
          var n,
            r,
            a,
            s = this,
            l = c(t) ? { name: t } : t;
          if (null === ct(l.name)) return null;
          if (void 0 !== (null == i ? void 0 : i.id) && this._panes.has(i.id))
            (a = i.id),
              this._chartStore
                .getIndicatorStore()
                .addInstance(l, a, null != e && e)
                .then(function (t) {
                  var e, o;
                  s._setPaneOptions(
                    i,
                    null !==
                      (o =
                        null === (e = s._panes.get(a)) || void 0 === e
                          ? void 0
                          : e.getAxisComponent().buildTicks(!0)) &&
                      void 0 !== o &&
                      o
                  );
                })
                .catch(function (t) {});
          else {
            a =
              null !== (n = null == i ? void 0 : i.id) && void 0 !== n
                ? n
                : W(Wt);
            var u = Array.from(this._panes.values()).pop(),
              h = new Ye(this._chartContainer, this, a, u);
            u.setBottomPane(h);
            var d =
              null !== (r = null == i ? void 0 : i.height) && void 0 !== r
                ? r
                : 100;
            h.setBounding({ height: d }),
              null != i && h.setOptions(i),
              this._panes.set(a, h),
              this._chartStore
                .getIndicatorStore()
                .addInstance(l, a, null != e && e)
                .finally(function () {
                  s.adjustPaneViewport(!0, !0, !0, !0, !0), null == o || o();
                });
          }
          return a;
        }),
        (e.prototype.overrideIndicator = function (t, e, i) {
          var o = this;
          this._chartStore
            .getIndicatorStore()
            .override(t, null != e ? e : null)
            .then(function (t) {
              var e = L(t, 2),
                n = e[1];
              (e[0] || n) &&
                (o.adjustPaneViewport(!1, n, !0, n), null == i || i());
            })
            .catch(function () {});
        }),
        (e.prototype.getIndicatorByPaneId = function (t, e) {
          return this._chartStore.getIndicatorStore().getInstanceByPaneId(t, e);
        }),
        (e.prototype.removeIndicator = function (t, e) {
          var i = this._chartStore.getIndicatorStore();
          if (i.removeInstance(t, e)) {
            var o = !1;
            if (t !== Vt && !i.hasInstances(t)) {
              var n = this._panes.get(t);
              if (void 0 !== n) {
                o = !0;
                var r = n.getTopPane(),
                  a = n.getBottomPane();
                null == a || a.setTopPane(r),
                  null == r || r.setBottomPane(a),
                  null == n || n.destroy(),
                  this._panes.delete(t);
              }
            }
            this.adjustPaneViewport(o, !0, !0, !0, !0);
          }
        }),
        (e.prototype.createOverlay = function (t, e) {
          var i = c(t) ? { name: t } : t;
          if (null === Dt(i.name)) return null;
          var o = !0;
          return (
            (void 0 !== e && null !== this.getPaneById(e)) ||
              ((e = Vt), (o = !1)),
            this._chartStore.getOverlayStore().addInstance(i, e, o)
          );
        }),
        (e.prototype.getOverlayById = function (t) {
          return this._chartStore.getOverlayStore().getInstanceById(t);
        }),
        (e.prototype.overrideOverlay = function (t) {
          this._chartStore.getOverlayStore().override(t);
        }),
        (e.prototype.removeOverlay = function (t) {
          var e;
          void 0 !== t && (e = c(t) ? { id: t } : t),
            this._chartStore.getOverlayStore().removeInstance(e);
        }),
        (e.prototype.setPaneOptions = function (t) {
          this._setPaneOptions(t, !1);
        }),
        (e.prototype.setZoomEnabled = function (t) {
          this._chartStore.getTimeScaleStore().setZoomEnabled(t);
        }),
        (e.prototype.isZoomEnabled = function () {
          return this._chartStore.getTimeScaleStore().getZoomEnabled();
        }),
        (e.prototype.setScrollEnabled = function (t) {
          this._chartStore.getTimeScaleStore().setScrollEnabled(t);
        }),
        (e.prototype.isScrollEnabled = function () {
          return this._chartStore.getTimeScaleStore().getScrollEnabled();
        }),
        (e.prototype.scrollByDistance = function (t, e) {
          var i = void 0 === e || 0 > e ? 0 : e,
            o = this._chartStore.getTimeScaleStore();
          if (i > 0) {
            o.startScroll();
            var n = new Date().getTime(),
              r = function () {
                var e = (new Date().getTime() - n) / i,
                  a = e >= 1;
                o.scroll(a ? t : t * e), a || requestAnimationFrame(r);
              };
            r();
          } else o.startScroll(), o.scroll(t);
        }),
        (e.prototype.scrollToRealTime = function (t) {
          var e = this._chartStore.getTimeScaleStore(),
            i = e.getBarSpace().bar,
            o =
              e.getOffsetRightBarCount() -
              e.getInitialOffsetRightDistance() / i;
          this.scrollByDistance(o * i, t);
        }),
        (e.prototype.scrollToDataIndex = function (t, e) {
          var i = this._chartStore.getTimeScaleStore(),
            o =
              (i.getOffsetRightBarCount() +
                (this.getDataList().length - 1 - t)) *
              i.getBarSpace().bar;
          this.scrollByDistance(o, e);
        }),
        (e.prototype.scrollToTimestamp = function (t, e) {
          var i = X(this.getDataList(), "timestamp", t);
          this.scrollToDataIndex(i, e);
        }),
        (e.prototype.zoomAtCoordinate = function (t, e, i) {
          var o = void 0 === i || 0 > i ? 0 : i,
            n = this._chartStore.getTimeScaleStore();
          if (o > 0) {
            var r = n.getBarSpace().bar,
              a = r * t - r,
              s = new Date().getTime(),
              l = function () {
                var t = (new Date().getTime() - s) / o,
                  i = t >= 1;
                n.zoom((i ? a : a * t) / r, e), i || requestAnimationFrame(l);
              };
            l();
          } else n.zoom(t, e);
        }),
        (e.prototype.zoomAtDataIndex = function (t, e, i) {
          var o = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(e);
          this.zoomAtCoordinate(t, { x: o, y: 0 }, i);
        }),
        (e.prototype.zoomAtTimestamp = function (t, e, i) {
          var o = X(this.getDataList(), "timestamp", e);
          this.zoomAtDataIndex(t, o, i);
        }),
        (e.prototype.convertToPixel = function (t, e) {
          var i,
            n = e.paneId,
            r = void 0 === n ? Vt : n,
            a = e.absolute,
            s = void 0 !== a && a,
            l = [];
          if (r !== Nt) {
            var c = this.getPaneById(r);
            if (null !== c) {
              var u = this._chartStore.getTimeScaleStore(),
                h = c.getBounding(),
                d = [].concat(t),
                p = this._xAxisPane.getAxisComponent(),
                v = c.getAxisComponent();
              l = d.map(function (t) {
                var e = {},
                  i = t.dataIndex;
                if (
                  (void 0 !== t.timestamp &&
                    (i = u.timestampToDataIndex(t.timestamp)),
                  void 0 !== i &&
                    (e.x = null == p ? void 0 : p.convertToPixel(i)),
                  void 0 !== t.value)
                ) {
                  var o = null == v ? void 0 : v.convertToPixel(t.value);
                  e.y = s ? h.top + o : o;
                }
                return e;
              });
            }
          }
          return o(t) ? l : null !== (i = l[0]) && void 0 !== i ? i : {};
        }),
        (e.prototype.convertFromPixel = function (t, e) {
          var i,
            n = e.paneId,
            r = void 0 === n ? Vt : n,
            a = e.absolute,
            s = void 0 !== a && a,
            l = [];
          if (r !== Nt) {
            var c = this.getPaneById(r);
            if (null !== c) {
              var u = this._chartStore.getTimeScaleStore(),
                h = c.getBounding(),
                d = [].concat(t),
                p = this._xAxisPane.getAxisComponent(),
                v = c.getAxisComponent();
              l = d.map(function (t) {
                var e,
                  i = {};
                if (void 0 !== t.x) {
                  var o = p.convertFromPixel(t.x);
                  (i.dataIndex = o),
                    (i.timestamp =
                      null !== (e = u.dataIndexToTimestamp(o)) && void 0 !== e
                        ? e
                        : void 0);
                }
                void 0 !== t.y &&
                  (i.value = v.convertFromPixel(s ? t.y - h.top : t.y));
                return i;
              });
            }
          }
          return o(t) ? l : null !== (i = l[0]) && void 0 !== i ? i : {};
        }),
        (e.prototype.executeAction = function (e, i) {
          var o;
          if (e === t.ActionType.OnCrosshairChange) {
            var n = M({}, i);
            (n.paneId = null !== (o = n.paneId) && void 0 !== o ? o : Vt),
              this._chartStore.getCrosshairStore().set(n);
          }
        }),
        (e.prototype.subscribeAction = function (t, e) {
          this._chartStore.getActionStore().subscribe(t, e);
        }),
        (e.prototype.unsubscribeAction = function (t, e) {
          this._chartStore.getActionStore().unsubscribe(t, e);
        }),
        (e.prototype.getConvertPictureUrl = function (t, e, i) {
          var o = this._chartContainer.offsetWidth,
            n = this._chartContainer.offsetHeight,
            r = N("canvas", {
              width: "".concat(o, "px"),
              height: "".concat(n, "px"),
              boxSizing: "border-box",
            }),
            a = r.getContext("2d"),
            s = z(r);
          (r.width = o * s),
            (r.height = n * s),
            a.scale(s, s),
            (a.fillStyle = null != i ? i : "#FFFFFF"),
            a.fillRect(0, 0, o, n);
          var l = null != t && t;
          this._panes.forEach(function (t) {
            var e = t.getBounding();
            a.drawImage(t.getImage(l), 0, e.top, o, e.height);
          });
          var c = this._xAxisPane.getBounding();
          return (
            a.drawImage(this._xAxisPane.getImage(l), 0, c.top, o, c.height),
            r.toDataURL("image/".concat(null != e ? e : "jpeg"))
          );
        }),
        (e.prototype.resize = function () {
          this.adjustPaneViewport(!0, !0, !0, !0, !0);
        }),
        (e.prototype.destroy = function () {
          this._chartEvent.destroy(),
            this._panes.forEach(function (t) {
              t.destroy();
            }),
            this._panes.clear(),
            this._xAxisPane.destroy(),
            this._container.removeChild(this._chartContainer);
        }),
        e
      );
    })(),
    ii = {},
    oi = 1;
  var ni = {
    clone: i,
    merge: e,
    isString: c,
    isNumber: a,
    isValid: s,
    isObject: r,
    isArray: o,
    isFunction: n,
    isBoolean: l,
    formatValue: C,
    formatPrecision: w,
    formatBigNumber: T,
    formatDate: b,
    formatThousands: E,
    getLinearSlopeIntercept: St,
    getLinearYFromSlopeIntercept: _t,
    getLinearYFromCoordinates: xt,
    checkCoordinateOnArc: pe,
    checkCoordinateOnCircle: Jt,
    checkCoordinateOnLine: yt,
    checkCoordinateOnPolygon: ee,
    checkCoordinateOnRect: ne,
    checkCoordinateOnText: le,
    drawArc: ve,
    drawCircle: Qt,
    drawLine: Ct,
    drawPolygon: ie,
    drawRect: re,
    drawText: ce,
    drawRectText: he,
  };
  (t.dispose = function (t) {
    var e, i;
    if (c(t)) {
      var o = document.getElementById(t);
      i =
        null !== (e = null == o ? void 0 : o.getAttribute("chartId")) &&
        void 0 !== e
          ? e
          : null;
    } else i = t instanceof ei ? t.id : null != t ? t : t.chartId;
    null !== i && (ii[i].destroy(), delete ii[i]);
  }),
    (t.getFigureClass = function (t) {
      var e;
      return null !== (e = fe[t]) && void 0 !== e ? e : null;
    }),
    (t.getSupportedFigures = function () {
      return Object.keys(fe);
    }),
    (t.getSupportedIndicators = function () {
      return Object.keys(st);
    }),
    (t.getSupportedLocales = function () {
      return Object.keys(De);
    }),
    (t.getSupportedOverlays = function () {
      return Object.keys(Pt);
    }),
    (t.init = function (t, e) {
      var i, o;
      if (null === (o = c(t) ? document.getElementById(t) : t)) return null;
      var n = ii[null !== (i = o.chartId) && void 0 !== i ? i : ""];
      if (void 0 !== n) return n;
      var r = "k_line_chart_".concat(oi++);
      return ((n = new ei(o, e)).id = r), (o.chartId = r), (ii[r] = n), n;
    }),
    (t.registerFigure = function (t) {
      fe[t.name] = $t.extend(t);
    }),
    (t.registerIndicator = function (t) {
      st[t.name] = tt.extend(t);
    }),
    (t.registerLocale = function (t, e) {
      De[t] = M(M({}, De[t]), e);
    }),
    (t.registerOverlay = function (t) {
      Pt[t.name] = gt.extend(t);
    }),
    (t.registerStyles = function (t, e) {
      Xt[t] = e;
    }),
    (t.utils = ni),
    (t.version = function () {
      return "9.2.2";
    });
});

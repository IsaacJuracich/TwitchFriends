!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).zlFetch =
        e());
})(this, function () {
  "use strict";
  function t(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var r = e(function (t) {
    (t.exports = function (t) {
      if (Array.isArray(t)) return t;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  });
  t(r);
  var n = e(function (t) {
    (t.exports = function (t, e) {
      var r =
        null == t
          ? null
          : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
      if (null != r) {
        var n,
          o,
          i = [],
          a = !0,
          u = !1;
        try {
          for (
            r = r.call(t);
            !(a = (n = r.next()).done) &&
            (i.push(n.value), !e || i.length !== e);
            a = !0
          );
        } catch (t) {
          (u = !0), (o = t);
        } finally {
          try {
            a || null == r.return || r.return();
          } finally {
            if (u) throw o;
          }
        }
        return i;
      }
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  });
  t(n);
  var o = e(function (t) {
    (t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  });
  t(o);
  var i = e(function (t) {
    (t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return o(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(t)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? o(t, e)
            : void 0
        );
      }
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  });
  t(i);
  var a = e(function (t) {
    (t.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  });
  t(a);
  var u = t(
      e(function (t) {
        (t.exports = function (t, e) {
          return r(t) || n(t, e) || i(t, e) || a();
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      })
    ),
    c = e(function (t) {
      function e(r) {
        return (
          (t.exports = e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(r)
        );
      }
      (t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    }),
    s = t(c),
    f = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.headers,
        r = void 0 === e ? {} : e;
      t.body;
      var n = t.method,
        o = void 0 === n ? "get" : n,
        i = t.auth;
      "undefined" == typeof Headers && require("cross-fetch/polyfill");
      var a = new Headers(r);
      if ("options" === o) return a;
      if (
        (a.get("content-type") ||
          "get" === o ||
          a.set("content-type", "application/json"),
        i)
      )
        if ("object" === s(i)) {
          var u,
            c = i.username,
            f = i.password;
          if (!c) throw new Error("Username required for basic authentication");
          if (!f) throw new Error("Password required for basic authentication");
          (u =
            "object" ===
              ("undefined" == typeof window ? "undefined" : s(window)) &&
            "btoa" in window
              ? btoa
              : require("btoa")),
            a.set("Authorization", "Basic " + u("".concat(c, ":").concat(f)));
        } else a.set("Authorization", "Bearer ".concat(i));
      return a;
    },
    l = function (t) {
      if (t)
        return Object.entries(t).reduce(function (t, e, r) {
          var n = u(e, 2),
            o = n[0],
            i = n[1],
            a =
              0 === r
                ? "".concat(o, "=").concat(encodeURIComponent(i))
                : "&".concat(o, "=").concat(encodeURIComponent(i));
          return "".concat(t).concat(a);
        }, "");
    },
    h = function (t) {
      var e = t.url,
        r = t.queries;
      return r ? "".concat(e, "?").concat(l(r)) : e;
    },
    p = function (t) {
      if ("get" !== t.method) {
        var e = t.headers.get("content-type");
        if (e)
          return e.includes("x-www-form-urlencoded")
            ? l(t.body)
            : e.includes("json")
            ? JSON.stringify(t.body)
            : t.body;
      }
    },
    d = e(function (t) {
      function e(t, e, r, n, o, i, a) {
        try {
          var u = t[i](a),
            c = u.value;
        } catch (t) {
          return void r(t);
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      (t.exports = function (t) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(r, n);
            function u(t) {
              e(a, o, i, u, c, "next", t);
            }
            function c(t) {
              e(a, o, i, u, c, "throw", t);
            }
            u(void 0);
          });
        };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    }),
    y = t(d),
    v = e(function (t) {
      var e = (function (t) {
        var e,
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (t) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var o = e && e.prototype instanceof v ? e : v,
            i = Object.create(o.prototype),
            a = new P(n || []);
          return (
            (i._invoke = (function (t, e, r) {
              var n = l;
              return function (o, i) {
                if (n === p) throw new Error("Generator is already running");
                if (n === d) {
                  if ("throw" === o) throw i;
                  return T();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var u = E(a, r);
                    if (u) {
                      if (u === y) continue;
                      return u;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (n === l) throw ((n = d), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = p;
                  var c = f(t, e, r);
                  if ("normal" === c.type) {
                    if (((n = r.done ? d : h), c.arg === y)) continue;
                    return { value: c.arg, done: r.done };
                  }
                  "throw" === c.type &&
                    ((n = d), (r.method = "throw"), (r.arg = c.arg));
                }
              };
            })(t, r, a)),
            i
          );
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var l = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          d = "completed",
          y = {};
        function v() {}
        function m() {}
        function g() {}
        var x = {};
        c(x, i, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          b = w && w(w(A([])));
        b && b !== r && n.call(b, i) && (x = b);
        var _ = (g.prototype = v.prototype = Object.create(x));
        function j(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function r(o, i, a, u) {
            var c = f(t[o], t, i);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == typeof l && n.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    }
                  );
            }
            u(c.arg);
          }
          var o;
          this._invoke = function (t, n) {
            function i() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function E(t, r) {
          var n = t.iterator[r.method];
          if (n === e) {
            if (((r.delegate = null), "throw" === r.method)) {
              if (
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                E(t, r),
                "throw" === r.method)
              )
                return y;
              (r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return y;
          }
          var o = f(n, t.iterator, r.arg);
          if ("throw" === o.type)
            return (
              (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                y)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              y);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function A(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
                  return (r.value = e), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: e, done: !0 };
        }
        return (
          (m.prototype = g),
          c(_, "constructor", g),
          c(g, "constructor", m),
          (m.displayName = c(g, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === m || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), c(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          j(L.prototype),
          c(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(s(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          j(_),
          c(_, u, "Generator"),
          c(_, i, function () {
            return this;
          }),
          c(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = A),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function o(n, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                y
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), y;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: A(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                y
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = e;
      } catch (t) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = e)
          : Function("r", "regeneratorRuntime = r")(e);
      }
    });
  function m(t, e) {
    var r =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!r) {
      if (
        Array.isArray(t) ||
        (r = (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return g(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === r && t.constructor && (r = t.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return g(t, e);
        })(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        r && (t = r);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          },
          e: function (t) {
            throw t;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      a = !0,
      u = !1;
    return {
      s: function () {
        r = r.call(t);
      },
      n: function () {
        var t = r.next();
        return (a = t.done), t;
      },
      e: function (t) {
        (u = !0), (i = t);
      },
      f: function () {
        try {
          a || null == r.return || r.return();
        } finally {
          if (u) throw i;
        }
      },
    };
  }
  function g(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  var x = function (t) {
      return t.headers.entries
        ? (function (t) {
            var e,
              r = {},
              n = m(t.headers.entries());
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var o = u(e.value, 2),
                  i = o[0],
                  a = o[1];
                r[i] = a;
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
            return r;
          })(t)
        : (function (t) {
            var e = {},
              r = t.headers._headers;
            for (var n in r) e[n] = r[n].join("");
            return e;
          })(t);
    },
    w = function (t, e) {
      var r = {
        body: e,
        headers: x(t),
        response: t,
        status: t.status,
        statusText: t.statusText,
      };
      return t.ok ? Promise.resolve(r) : Promise.reject(r);
    };
  function b(t, e) {
    return _.apply(this, arguments);
  }
  function _() {
    return (_ = y(
      v.mark(function t(e, r) {
        var n, o, i, a;
        return v.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if ("formData" !== r) {
                  t.next = 6;
                  break;
                }
                return (t.next = 3), e.text();
              case 3:
                return (
                  (n = t.sent),
                  "undefined" != typeof URLSearchParams
                    ? ((o = new URLSearchParams(n)),
                      (n = Object.fromEntries(o)))
                    : ((i = require("querystring")), (n = i.parse(n))),
                  t.abrupt("return", w(e, n))
                );
              case 6:
                return (t.next = 8), e[r]();
              case 8:
                return (a = t.sent), t.abrupt("return", w(e, a));
              case 10:
              case "end":
                return t.stop();
            }
        }, t);
      })
    )).apply(this, arguments);
  }
  var j = function (t) {
    return "Failed to fetch" === t.message
      ? Promise.reject({ error: t })
      : Promise.reject(t);
  };
  "undefined" == typeof fetch && require("cross-fetch/polyfill");
  for (
    var L = function (t, e) {
        var r = (function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = Object.assign({}, t);
          return (
            (e.url = h(e)),
            (e.method = e.method || "get"),
            (e.headers = f(e)),
            (e.body = p(e)),
            delete e.auth,
            e
          );
        })(Object.assign({ url: t }, e));
        return fetch(r.url, r)
          .then(function (t) {
            return (function (t, e) {
              if (e && ("customResponseParser" in e)) return t;
              var r = t.headers.get("content-type");
              if (r.includes("json")) return b(t, "json");
              if (r.includes("text")) return b(t, "text");
              if (r.includes("image")) return b(t, "blob");
              if (r.includes("x-www-form-urlencoded")) return b(t, "formData");
              throw new Error(
                "zlFetch does not support content-type ".concat(r, " yet")
              );
            })(t, e);
          })
          .catch(j);
      },
      E = function () {
        var t = S[O];
        L[t] = function (e, r) {
          return (r = Object.assign({ method: t }, r)), L(e, r);
        };
      },
      O = 0,
      S = ["get", "post", "put", "patch", "delete"];
    O < S.length;
    O++
  )
    E();
  return L;
});

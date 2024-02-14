/** @format */

function Qc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bc = { exports: {} },
  zo = {},
  Yc = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ml = Symbol.for("react.element"),
  bp = Symbol.for("react.portal"),
  Yp = Symbol.for("react.fragment"),
  Gp = Symbol.for("react.strict_mode"),
  Xp = Symbol.for("react.profiler"),
  Zp = Symbol.for("react.provider"),
  Jp = Symbol.for("react.context"),
  qp = Symbol.for("react.forward_ref"),
  eh = Symbol.for("react.suspense"),
  th = Symbol.for("react.memo"),
  nh = Symbol.for("react.lazy"),
  us = Symbol.iterator;
function rh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (us && e[us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xc = Object.assign,
  Zc = {};
function yr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Gc);
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jc() {}
Jc.prototype = yr.prototype;
function Ka(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Gc);
}
var ba = (Ka.prototype = new Jc());
ba.constructor = Ka;
Xc(ba, yr.prototype);
ba.isPureReactComponent = !0;
var ss = Array.isArray,
  qc = Object.prototype.hasOwnProperty,
  Ya = { current: null },
  ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      qc.call(t, r) && !ed.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: ml,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ya.current,
  };
}
function lh(e, t) {
  return {
    $$typeof: ml,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ml;
}
function oh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cs = /\/+/g;
function ci(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? oh("" + e.key)
    : t.toString(36);
}
function Gl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ml:
          case bp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ci(i, 0) : r),
      ss(l)
        ? ((n = ""),
          e != null && (n = e.replace(cs, "$&/") + "/"),
          Gl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Ga(l) &&
            (l = lh(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(cs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ss(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + ci(o, a);
      i += Gl(o, t, n, u, l);
    }
  else if (((u = rh(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + ci(o, a++)), (i += Gl(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Tl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Gl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ih(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  Xl = { transition: null },
  ah = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Xl,
    ReactCurrentOwner: Ya,
  };
G.Children = {
  map: Tl,
  forEach: function (e, t, n) {
    Tl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Tl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ga(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = yr;
G.Fragment = Yp;
G.Profiler = Xp;
G.PureComponent = Ka;
G.StrictMode = Gp;
G.Suspense = eh;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ah;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ya.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      qc.call(t, u) &&
        !ed.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: ml, type: e.type, key: l, ref: o, props: r, _owner: i };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zp, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = td;
G.createFactory = function (e) {
  var t = td.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: qp, render: e };
};
G.isValidElement = Ga;
G.lazy = function (e) {
  return { $$typeof: nh, _payload: { _status: -1, _result: e }, _init: ih };
};
G.memo = function (e, t) {
  return { $$typeof: th, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Xl.transition;
  Xl.transition = {};
  try {
    e();
  } finally {
    Xl.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Be.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
G.useId = function () {
  return Be.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Be.current.useRef(e);
};
G.useState = function (e) {
  return Be.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Be.current.useTransition();
};
G.version = "18.2.0";
Yc.exports = G;
var g = Yc.exports;
const Ee = Kc(g),
  Qi = Qc({ __proto__: null, default: Ee }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uh = g,
  sh = Symbol.for("react.element"),
  ch = Symbol.for("react.fragment"),
  dh = Object.prototype.hasOwnProperty,
  fh = uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ph = { key: !0, ref: !0, __self: !0, __source: !0 };
function nd(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) dh.call(t, r) && !ph.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: sh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: fh.current,
  };
}
zo.Fragment = ch;
zo.jsx = nd;
zo.jsxs = nd;
bc.exports = zo;
var T = bc.exports,
  Ki = {},
  rd = { exports: {} },
  lt = {},
  ld = { exports: {} },
  od = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, A) {
    var U = D.length;
    D.push(A);
    e: for (; 0 < U; ) {
      var K = (U - 1) >>> 1,
        b = D[K];
      if (0 < l(b, A)) (D[K] = A), (D[U] = b), (U = K);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var A = D[0],
      U = D.pop();
    if (U !== A) {
      D[0] = U;
      e: for (var K = 0, b = D.length, Ve = b >>> 1; K < Ve; ) {
        var z = 2 * (K + 1) - 1,
          Y = D[z],
          te = z + 1,
          Xe = D[te];
        if (0 > l(Y, U))
          te < b && 0 > l(Xe, Y)
            ? ((D[K] = Xe), (D[te] = U), (K = te))
            : ((D[K] = Y), (D[z] = U), (K = z));
        else if (te < b && 0 > l(Xe, U)) (D[K] = Xe), (D[te] = U), (K = te);
        else break e;
      }
    }
    return A;
  }
  function l(D, A) {
    var U = D.sortIndex - A.sortIndex;
    return U !== 0 ? U : D.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    p = null,
    h = 3,
    E = !1,
    y = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= D)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function C(D) {
    if (((x = !1), m(D), !y))
      if (n(u) !== null) (y = !0), it(_);
      else {
        var A = n(s);
        A !== null && Z(C, A.startTime - D);
      }
  }
  function _(D, A) {
    (y = !1), x && ((x = !1), d(L), (L = -1)), (E = !0);
    var U = h;
    try {
      for (
        m(A), p = n(u);
        p !== null && (!(p.expirationTime > A) || (D && !W()));

      ) {
        var K = p.callback;
        if (typeof K == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var b = K(p.expirationTime <= A);
          (A = e.unstable_now()),
            typeof b == "function" ? (p.callback = b) : p === n(u) && r(u),
            m(A);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var Ve = !0;
      else {
        var z = n(s);
        z !== null && Z(C, z.startTime - A), (Ve = !1);
      }
      return Ve;
    } finally {
      (p = null), (h = U), (E = !1);
    }
  }
  var v = !1,
    P = null,
    L = -1,
    F = 5,
    I = -1;
  function W() {
    return !(e.unstable_now() - I < F);
  }
  function le() {
    if (P !== null) {
      var D = e.unstable_now();
      I = D;
      var A = !0;
      try {
        A = P(!0, D);
      } finally {
        A ? oe() : ((v = !1), (P = null));
      }
    } else v = !1;
  }
  var oe;
  if (typeof f == "function")
    oe = function () {
      f(le);
    };
  else if (typeof MessageChannel < "u") {
    var Fe = new MessageChannel(),
      mt = Fe.port2;
    (Fe.port1.onmessage = le),
      (oe = function () {
        mt.postMessage(null);
      });
  } else
    oe = function () {
      S(le, 0);
    };
  function it(D) {
    (P = D), v || ((v = !0), oe());
  }
  function Z(D, A) {
    L = S(function () {
      D(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || E || ((y = !0), it(_));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var U = h;
      h = A;
      try {
        return D();
      } finally {
        h = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, A) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var U = h;
      h = D;
      try {
        return A();
      } finally {
        h = U;
      }
    }),
    (e.unstable_scheduleCallback = function (D, A, U) {
      var K = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? K + U : K))
          : (U = K),
        D)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = U + b),
        (D = {
          id: c++,
          callback: A,
          priorityLevel: D,
          startTime: U,
          expirationTime: b,
          sortIndex: -1,
        }),
        U > K
          ? ((D.sortIndex = U),
            t(s, D),
            n(u) === null &&
              D === n(s) &&
              (x ? (d(L), (L = -1)) : (x = !0), Z(C, U - K)))
          : ((D.sortIndex = b), t(u, D), y || E || ((y = !0), it(_))),
        D
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (D) {
      var A = h;
      return function () {
        var U = h;
        h = A;
        try {
          return D.apply(this, arguments);
        } finally {
          h = U;
        }
      };
    });
})(od);
ld.exports = od;
var hh = ld.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id = g,
  nt = hh;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ad = new Set(),
  Zr = {};
function In(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (Zr[e] = t, e = 0; e < t.length; e++) ad.add(t[e]);
}
var zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bi = Object.prototype.hasOwnProperty,
  mh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ds = {},
  fs = {};
function vh(e) {
  return bi.call(fs, e)
    ? !0
    : bi.call(ds, e)
    ? !1
    : mh.test(e)
    ? (fs[e] = !0)
    : ((ds[e] = !0), !1);
}
function gh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function yh(e, t, n, r) {
  if (t === null || typeof t > "u" || gh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xa = /[\-:]([a-z])/g;
function Za(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xa, Za);
    je[t] = new He(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xa, Za);
    je[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xa, Za);
  je[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new He(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ja(e, t, n, r) {
  var l = je.hasOwnProperty(t) ? je[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (yh(t, n, l, r) && (n = null),
    r || l === null
      ? vh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _l = Symbol.for("react.element"),
  Wn = Symbol.for("react.portal"),
  Qn = Symbol.for("react.fragment"),
  qa = Symbol.for("react.strict_mode"),
  Yi = Symbol.for("react.profiler"),
  ud = Symbol.for("react.provider"),
  sd = Symbol.for("react.context"),
  eu = Symbol.for("react.forward_ref"),
  Gi = Symbol.for("react.suspense"),
  Xi = Symbol.for("react.suspense_list"),
  tu = Symbol.for("react.memo"),
  Gt = Symbol.for("react.lazy"),
  cd = Symbol.for("react.offscreen"),
  ps = Symbol.iterator;
function Cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ps && e[ps]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  di;
function Ir(e) {
  if (di === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      di = (t && t[1]) || "";
    }
  return (
    `
` +
    di +
    e
  );
}
var fi = !1;
function pi(e, t) {
  if (!e || fi) return "";
  fi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (fi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ir(e) : "";
}
function wh(e) {
  switch (e.tag) {
    case 5:
      return Ir(e.type);
    case 16:
      return Ir("Lazy");
    case 13:
      return Ir("Suspense");
    case 19:
      return Ir("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = pi(e.type, !1)), e;
    case 11:
      return (e = pi(e.type.render, !1)), e;
    case 1:
      return (e = pi(e.type, !0)), e;
    default:
      return "";
  }
}
function Zi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qn:
      return "Fragment";
    case Wn:
      return "Portal";
    case Yi:
      return "Profiler";
    case qa:
      return "StrictMode";
    case Gi:
      return "Suspense";
    case Xi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sd:
        return (e.displayName || "Context") + ".Consumer";
      case ud:
        return (e._context.displayName || "Context") + ".Provider";
      case eu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case tu:
        return (
          (t = e.displayName || null), t !== null ? t : Zi(e.type) || "Memo"
        );
      case Gt:
        (t = e._payload), (e = e._init);
        try {
          return Zi(e(t));
        } catch {}
    }
  return null;
}
function xh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zi(t);
    case 8:
      return t === qa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function dd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Sh(e) {
  var t = dd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ol(e) {
  e._valueTracker || (e._valueTracker = Sh(e));
}
function fd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = dd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ao(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ji(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pd(e, t) {
  (t = t.checked), t != null && Ja(e, "checked", t, !1);
}
function qi(e, t) {
  pd(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ea(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ea(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ms(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ea(e, t, n) {
  (t !== "number" || ao(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $r = Array.isArray;
function lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ta(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if ($r(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function hd(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function gs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function md(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function na(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? md(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Dl,
  vd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Dl = Dl || document.createElement("div"),
          Dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Dl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Br = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Eh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function (e) {
  Eh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Br[t] = Br[e]);
  });
});
function gd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Br.hasOwnProperty(e) && Br[e])
    ? ("" + t).trim()
    : t + "px";
}
function yd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = gd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var kh = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ra(e, t) {
  if (t) {
    if (kh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function la(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var oa = null;
function nu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ia = null,
  or = null,
  ir = null;
function ys(e) {
  if ((e = yl(e))) {
    if (typeof ia != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Bo(t)), ia(e.stateNode, e.type, t));
  }
}
function wd(e) {
  or ? (ir ? ir.push(e) : (ir = [e])) : (or = e);
}
function xd() {
  if (or) {
    var e = or,
      t = ir;
    if (((ir = or = null), ys(e), t)) for (e = 0; e < t.length; e++) ys(t[e]);
  }
}
function Sd(e, t) {
  return e(t);
}
function Ed() {}
var hi = !1;
function kd(e, t, n) {
  if (hi) return e(t, n);
  hi = !0;
  try {
    return Sd(e, t, n);
  } finally {
    (hi = !1), (or !== null || ir !== null) && (Ed(), xd());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var aa = !1;
if (zt)
  try {
    var Rr = {};
    Object.defineProperty(Rr, "passive", {
      get: function () {
        aa = !0;
      },
    }),
      window.addEventListener("test", Rr, Rr),
      window.removeEventListener("test", Rr, Rr);
  } catch {
    aa = !1;
  }
function Ch(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Hr = !1,
  uo = null,
  so = !1,
  ua = null,
  Rh = {
    onError: function (e) {
      (Hr = !0), (uo = e);
    },
  };
function Ph(e, t, n, r, l, o, i, a, u) {
  (Hr = !1), (uo = null), Ch.apply(Rh, arguments);
}
function Lh(e, t, n, r, l, o, i, a, u) {
  if ((Ph.apply(this, arguments), Hr)) {
    if (Hr) {
      var s = uo;
      (Hr = !1), (uo = null);
    } else throw Error(N(198));
    so || ((so = !0), (ua = s));
  }
}
function $n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ws(e) {
  if ($n(e) !== e) throw Error(N(188));
}
function Nh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $n(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ws(l), e;
        if (o === r) return ws(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Rd(e) {
  return (e = Nh(e)), e !== null ? Pd(e) : null;
}
function Pd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ld = nt.unstable_scheduleCallback,
  xs = nt.unstable_cancelCallback,
  Th = nt.unstable_shouldYield,
  _h = nt.unstable_requestPaint,
  we = nt.unstable_now,
  Oh = nt.unstable_getCurrentPriorityLevel,
  ru = nt.unstable_ImmediatePriority,
  Nd = nt.unstable_UserBlockingPriority,
  co = nt.unstable_NormalPriority,
  Dh = nt.unstable_LowPriority,
  Td = nt.unstable_IdlePriority,
  Io = null,
  Nt = null;
function jh(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(Io, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : zh,
  Fh = Math.log,
  Mh = Math.LN2;
function zh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fh(e) / Mh) | 0)) | 0;
}
var jl = 64,
  Fl = 4194304;
function Ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Ur(a)) : ((o &= i), o !== 0 && (r = Ur(o)));
  } else (i = n & ~l), i !== 0 ? (r = Ur(i)) : o !== 0 && (r = Ur(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ih(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $h(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - St(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Ih(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function sa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _d() {
  var e = jl;
  return (jl <<= 1), !(jl & 4194240) && (jl = 64), e;
}
function mi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function Uh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - St(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ne = 0;
function Od(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Dd,
  ou,
  jd,
  Fd,
  Md,
  ca = !1,
  Ml = [],
  nn = null,
  rn = null,
  ln = null,
  el = new Map(),
  tl = new Map(),
  Zt = [],
  Ah =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ss(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      el.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tl.delete(t.pointerId);
  }
}
function Pr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = yl(t)), t !== null && ou(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Bh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (nn = Pr(nn, e, t, n, r, l)), !0;
    case "dragenter":
      return (rn = Pr(rn, e, t, n, r, l)), !0;
    case "mouseover":
      return (ln = Pr(ln, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return el.set(o, Pr(el.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), tl.set(o, Pr(tl.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function zd(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Cd(n)), t !== null)) {
          (e.blockedOn = t),
            Md(e.priority, function () {
              jd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Zl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oa = r), n.target.dispatchEvent(r), (oa = null);
    } else return (t = yl(n)), t !== null && ou(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Es(e, t, n) {
  Zl(e) && n.delete(t);
}
function Hh() {
  (ca = !1),
    nn !== null && Zl(nn) && (nn = null),
    rn !== null && Zl(rn) && (rn = null),
    ln !== null && Zl(ln) && (ln = null),
    el.forEach(Es),
    tl.forEach(Es);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ca ||
      ((ca = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, Hh)));
}
function nl(e) {
  function t(l) {
    return Lr(l, e);
  }
  if (0 < Ml.length) {
    Lr(Ml[0], e);
    for (var n = 1; n < Ml.length; n++) {
      var r = Ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nn !== null && Lr(nn, e),
      rn !== null && Lr(rn, e),
      ln !== null && Lr(ln, e),
      el.forEach(t),
      tl.forEach(t),
      n = 0;
    n < Zt.length;
    n++
  )
    (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
    zd(n), n.blockedOn === null && Zt.shift();
}
var ar = At.ReactCurrentBatchConfig,
  po = !0;
function Vh(e, t, n, r) {
  var l = ne,
    o = ar.transition;
  ar.transition = null;
  try {
    (ne = 1), iu(e, t, n, r);
  } finally {
    (ne = l), (ar.transition = o);
  }
}
function Wh(e, t, n, r) {
  var l = ne,
    o = ar.transition;
  ar.transition = null;
  try {
    (ne = 4), iu(e, t, n, r);
  } finally {
    (ne = l), (ar.transition = o);
  }
}
function iu(e, t, n, r) {
  if (po) {
    var l = da(e, t, n, r);
    if (l === null) Ri(e, t, r, ho, n), Ss(e, r);
    else if (Bh(l, e, t, n, r)) r.stopPropagation();
    else if ((Ss(e, r), t & 4 && -1 < Ah.indexOf(e))) {
      for (; l !== null; ) {
        var o = yl(l);
        if (
          (o !== null && Dd(o),
          (o = da(e, t, n, r)),
          o === null && Ri(e, t, r, ho, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ri(e, t, r, null, n);
  }
}
var ho = null;
function da(e, t, n, r) {
  if (((ho = null), (e = nu(r)), (e = En(e)), e !== null))
    if (((t = $n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Cd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ho = e), null;
}
function Id(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Oh()) {
        case ru:
          return 1;
        case Nd:
          return 4;
        case co:
        case Dh:
          return 16;
        case Td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  au = null,
  Jl = null;
function $d() {
  if (Jl) return Jl;
  var e,
    t = au,
    n = t.length,
    r,
    l = "value" in qt ? qt.value : qt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Jl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ql(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zl() {
  return !0;
}
function ks() {
  return !1;
}
function ot(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? zl
        : ks),
      (this.isPropagationStopped = ks),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zl));
      },
      persist: function () {},
      isPersistent: zl,
    }),
    t
  );
}
var wr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uu = ot(wr),
  gl = he({}, wr, { view: 0, detail: 0 }),
  Qh = ot(gl),
  vi,
  gi,
  Nr,
  $o = he({}, gl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((vi = e.screenX - Nr.screenX), (gi = e.screenY - Nr.screenY))
              : (gi = vi = 0),
            (Nr = e)),
          vi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : gi;
    },
  }),
  Cs = ot($o),
  Kh = he({}, $o, { dataTransfer: 0 }),
  bh = ot(Kh),
  Yh = he({}, gl, { relatedTarget: 0 }),
  yi = ot(Yh),
  Gh = he({}, wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xh = ot(Gh),
  Zh = he({}, wr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jh = ot(Zh),
  qh = he({}, wr, { data: 0 }),
  Rs = ot(qh),
  em = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  tm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  nm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function rm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nm[e]) ? !!t[e] : !1;
}
function su() {
  return rm;
}
var lm = he({}, gl, {
    key: function (e) {
      if (e.key) {
        var t = em[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ql(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? tm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function (e) {
      return e.type === "keypress" ? ql(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ql(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  om = ot(lm),
  im = he({}, $o, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ps = ot(im),
  am = he({}, gl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su,
  }),
  um = ot(am),
  sm = he({}, wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cm = ot(sm),
  dm = he({}, $o, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fm = ot(dm),
  pm = [9, 13, 27, 32],
  cu = zt && "CompositionEvent" in window,
  Vr = null;
zt && "documentMode" in document && (Vr = document.documentMode);
var hm = zt && "TextEvent" in window && !Vr,
  Ud = zt && (!cu || (Vr && 8 < Vr && 11 >= Vr)),
  Ls = " ",
  Ns = !1;
function Ad(e, t) {
  switch (e) {
    case "keyup":
      return pm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function mm(e, t) {
  switch (e) {
    case "compositionend":
      return Bd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ns = !0), Ls);
    case "textInput":
      return (e = t.data), e === Ls && Ns ? null : e;
    default:
      return null;
  }
}
function vm(e, t) {
  if (Kn)
    return e === "compositionend" || (!cu && Ad(e, t))
      ? ((e = $d()), (Jl = au = qt = null), (Kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ud && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gm[e.type] : t === "textarea";
}
function Hd(e, t, n, r) {
  wd(r),
    (t = mo(t, "onChange")),
    0 < t.length &&
      ((n = new uu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wr = null,
  rl = null;
function ym(e) {
  qd(e, 0);
}
function Uo(e) {
  var t = Gn(e);
  if (fd(t)) return e;
}
function wm(e, t) {
  if (e === "change") return t;
}
var Vd = !1;
if (zt) {
  var wi;
  if (zt) {
    var xi = "oninput" in document;
    if (!xi) {
      var _s = document.createElement("div");
      _s.setAttribute("oninput", "return;"),
        (xi = typeof _s.oninput == "function");
    }
    wi = xi;
  } else wi = !1;
  Vd = wi && (!document.documentMode || 9 < document.documentMode);
}
function Os() {
  Wr && (Wr.detachEvent("onpropertychange", Wd), (rl = Wr = null));
}
function Wd(e) {
  if (e.propertyName === "value" && Uo(rl)) {
    var t = [];
    Hd(t, rl, e, nu(e)), kd(ym, t);
  }
}
function xm(e, t, n) {
  e === "focusin"
    ? (Os(), (Wr = t), (rl = n), Wr.attachEvent("onpropertychange", Wd))
    : e === "focusout" && Os();
}
function Sm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Uo(rl);
}
function Em(e, t) {
  if (e === "click") return Uo(t);
}
function km(e, t) {
  if (e === "input" || e === "change") return Uo(t);
}
function Cm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : Cm;
function ll(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bi.call(t, l) || !kt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function js(e, t) {
  var n = Ds(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ds(n);
  }
}
function Qd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Kd() {
  for (var e = window, t = ao(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ao(e.document);
  }
  return t;
}
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rm(e) {
  var t = Kd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && du(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = js(n, o));
        var i = js(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pm = zt && "documentMode" in document && 11 >= document.documentMode,
  bn = null,
  fa = null,
  Qr = null,
  pa = !1;
function Fs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pa ||
    bn == null ||
    bn !== ao(r) ||
    ((r = bn),
    "selectionStart" in r && du(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qr && ll(Qr, r)) ||
      ((Qr = r),
      (r = mo(fa, "onSelect")),
      0 < r.length &&
        ((t = new uu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bn))));
}
function Il(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yn = {
    animationend: Il("Animation", "AnimationEnd"),
    animationiteration: Il("Animation", "AnimationIteration"),
    animationstart: Il("Animation", "AnimationStart"),
    transitionend: Il("Transition", "TransitionEnd"),
  },
  Si = {},
  bd = {};
zt &&
  ((bd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yn.animationend.animation,
    delete Yn.animationiteration.animation,
    delete Yn.animationstart.animation),
  "TransitionEvent" in window || delete Yn.transitionend.transition);
function Ao(e) {
  if (Si[e]) return Si[e];
  if (!Yn[e]) return e;
  var t = Yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bd) return (Si[e] = t[n]);
  return e;
}
var Yd = Ao("animationend"),
  Gd = Ao("animationiteration"),
  Xd = Ao("animationstart"),
  Zd = Ao("transitionend"),
  Jd = new Map(),
  Ms =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, t) {
  Jd.set(e, t), In(t, [e]);
}
for (var Ei = 0; Ei < Ms.length; Ei++) {
  var ki = Ms[Ei],
    Lm = ki.toLowerCase(),
    Nm = ki[0].toUpperCase() + ki.slice(1);
  hn(Lm, "on" + Nm);
}
hn(Yd, "onAnimationEnd");
hn(Gd, "onAnimationIteration");
hn(Xd, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Zd, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
In(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
In(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
In(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
In(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ar =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Tm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
function zs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lh(r, t, void 0, e), (e.currentTarget = null);
}
function qd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          zs(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          zs(l, a, s), (o = u);
        }
    }
  }
  if (so) throw ((e = ua), (so = !1), (ua = null), e);
}
function ue(e, t) {
  var n = t[ya];
  n === void 0 && (n = t[ya] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ef(t, e, 2, !1), n.add(r));
}
function Ci(e, t, n) {
  var r = 0;
  t && (r |= 4), ef(n, e, r, t);
}
var $l = "_reactListening" + Math.random().toString(36).slice(2);
function ol(e) {
  if (!e[$l]) {
    (e[$l] = !0),
      ad.forEach(function (n) {
        n !== "selectionchange" && (Tm.has(n) || Ci(n, !1, e), Ci(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$l] || ((t[$l] = !0), Ci("selectionchange", !1, t));
  }
}
function ef(e, t, n, r) {
  switch (Id(t)) {
    case 1:
      var l = Vh;
      break;
    case 4:
      l = Wh;
      break;
    default:
      l = iu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !aa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ri(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = En(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  kd(function () {
    var s = o,
      c = nu(n),
      p = [];
    e: {
      var h = Jd.get(e);
      if (h !== void 0) {
        var E = uu,
          y = e;
        switch (e) {
          case "keypress":
            if (ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = om;
            break;
          case "focusin":
            (y = "focus"), (E = yi);
            break;
          case "focusout":
            (y = "blur"), (E = yi);
            break;
          case "beforeblur":
          case "afterblur":
            E = yi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Cs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = bh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = um;
            break;
          case Yd:
          case Gd:
          case Xd:
            E = Xh;
            break;
          case Zd:
            E = cm;
            break;
          case "scroll":
            E = Qh;
            break;
          case "wheel":
            E = fm;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Jh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Ps;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          d = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var f = s, m; f !== null; ) {
          m = f;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              d !== null && ((C = qr(f, d)), C != null && x.push(il(f, C, m)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < x.length &&
          ((h = new E(h, y, null, n, c)), p.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          h &&
            n !== oa &&
            (y = n.relatedTarget || n.fromElement) &&
            (En(y) || y[It]))
        )
          break e;
        if (
          (E || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          E
            ? ((y = n.relatedTarget || n.toElement),
              (E = s),
              (y = y ? En(y) : null),
              y !== null &&
                ((S = $n(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((E = null), (y = s)),
          E !== y)
        ) {
          if (
            ((x = Cs),
            (C = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ps),
              (C = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (S = E == null ? h : Gn(E)),
            (m = y == null ? h : Gn(y)),
            (h = new x(C, f + "leave", E, n, c)),
            (h.target = S),
            (h.relatedTarget = m),
            (C = null),
            En(c) === s &&
              ((x = new x(d, f + "enter", y, n, c)),
              (x.target = m),
              (x.relatedTarget = S),
              (C = x)),
            (S = C),
            E && y)
          )
            t: {
              for (x = E, d = y, f = 0, m = x; m; m = Vn(m)) f++;
              for (m = 0, C = d; C; C = Vn(C)) m++;
              for (; 0 < f - m; ) (x = Vn(x)), f--;
              for (; 0 < m - f; ) (d = Vn(d)), m--;
              for (; f--; ) {
                if (x === d || (d !== null && x === d.alternate)) break t;
                (x = Vn(x)), (d = Vn(d));
              }
              x = null;
            }
          else x = null;
          E !== null && Is(p, h, E, x, !1),
            y !== null && S !== null && Is(p, S, y, x, !0);
        }
      }
      e: {
        if (
          ((h = s ? Gn(s) : window),
          (E = h.nodeName && h.nodeName.toLowerCase()),
          E === "select" || (E === "input" && h.type === "file"))
        )
          var _ = wm;
        else if (Ts(h))
          if (Vd) _ = km;
          else {
            _ = Sm;
            var v = xm;
          }
        else
          (E = h.nodeName) &&
            E.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (_ = Em);
        if (_ && (_ = _(e, s))) {
          Hd(p, _, n, c);
          break e;
        }
        v && v(e, h, s),
          e === "focusout" &&
            (v = h._wrapperState) &&
            v.controlled &&
            h.type === "number" &&
            ea(h, "number", h.value);
      }
      switch (((v = s ? Gn(s) : window), e)) {
        case "focusin":
          (Ts(v) || v.contentEditable === "true") &&
            ((bn = v), (fa = s), (Qr = null));
          break;
        case "focusout":
          Qr = fa = bn = null;
          break;
        case "mousedown":
          pa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pa = !1), Fs(p, n, c);
          break;
        case "selectionchange":
          if (Pm) break;
        case "keydown":
        case "keyup":
          Fs(p, n, c);
      }
      var P;
      if (cu)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Kn
          ? Ad(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Ud &&
          n.locale !== "ko" &&
          (Kn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Kn && (P = $d())
            : ((qt = c),
              (au = "value" in qt ? qt.value : qt.textContent),
              (Kn = !0))),
        (v = mo(s, L)),
        0 < v.length &&
          ((L = new Rs(L, e, null, n, c)),
          p.push({ event: L, listeners: v }),
          P ? (L.data = P) : ((P = Bd(n)), P !== null && (L.data = P)))),
        (P = hm ? mm(e, n) : vm(e, n)) &&
          ((s = mo(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Rs("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    qd(p, t);
  });
}
function il(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function mo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = qr(e, n)),
      o != null && r.unshift(il(e, o, l)),
      (o = qr(e, t)),
      o != null && r.push(il(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Is(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = qr(n, o)), u != null && i.unshift(il(n, u, a)))
        : l || ((u = qr(n, o)), u != null && i.push(il(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var _m = /\r\n?/g,
  Om = /\u0000|\uFFFD/g;
function $s(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _m,
      `
`
    )
    .replace(Om, "");
}
function Ul(e, t, n) {
  if (((t = $s(t)), $s(e) !== t && n)) throw Error(N(425));
}
function vo() {}
var ha = null,
  ma = null;
function va(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ga = typeof setTimeout == "function" ? setTimeout : void 0,
  Dm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Us = typeof Promise == "function" ? Promise : void 0,
  jm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Us < "u"
      ? function (e) {
          return Us.resolve(null).then(e).catch(Fm);
        }
      : ga;
function Fm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), nl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  nl(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function As(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xr = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + xr,
  al = "__reactProps$" + xr,
  It = "__reactContainer$" + xr,
  ya = "__reactEvents$" + xr,
  Mm = "__reactListeners$" + xr,
  zm = "__reactHandles$" + xr;
function En(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[It] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = As(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = As(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yl(e) {
  return (
    (e = e[Lt] || e[It]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Bo(e) {
  return e[al] || null;
}
var wa = [],
  Xn = -1;
function mn(e) {
  return { current: e };
}
function se(e) {
  0 > Xn || ((e.current = wa[Xn]), (wa[Xn] = null), Xn--);
}
function ae(e, t) {
  Xn++, (wa[Xn] = e.current), (e.current = t);
}
var fn = {},
  $e = mn(fn),
  be = mn(!1),
  On = fn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function go() {
  se(be), se($e);
}
function Bs(e, t, n) {
  if ($e.current !== fn) throw Error(N(168));
  ae($e, t), ae(be, n);
}
function tf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, xh(e) || "Unknown", l));
  return he({}, n, r);
}
function yo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (On = $e.current),
    ae($e, e),
    ae(be, be.current),
    !0
  );
}
function Hs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = tf(e, t, On)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(be),
      se($e),
      ae($e, e))
    : se(be),
    ae(be, n);
}
var Dt = null,
  Ho = !1,
  Li = !1;
function nf(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Im(e) {
  (Ho = !0), nf(e);
}
function vn() {
  if (!Li && Dt !== null) {
    Li = !0;
    var e = 0,
      t = ne;
    try {
      var n = Dt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (Ho = !1);
    } catch (l) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), Ld(ru, vn), l);
    } finally {
      (ne = t), (Li = !1);
    }
  }
  return null;
}
var Zn = [],
  Jn = 0,
  wo = null,
  xo = 0,
  st = [],
  ct = 0,
  Dn = null,
  jt = 1,
  Ft = "";
function xn(e, t) {
  (Zn[Jn++] = xo), (Zn[Jn++] = wo), (wo = e), (xo = t);
}
function rf(e, t, n) {
  (st[ct++] = jt), (st[ct++] = Ft), (st[ct++] = Dn), (Dn = e);
  var r = jt;
  e = Ft;
  var l = 32 - St(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - St(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (jt = (1 << (32 - St(t) + l)) | (n << l) | r),
      (Ft = o + e);
  } else (jt = (1 << o) | (n << l) | r), (Ft = e);
}
function fu(e) {
  e.return !== null && (xn(e, 1), rf(e, 1, 0));
}
function pu(e) {
  for (; e === wo; )
    (wo = Zn[--Jn]), (Zn[Jn] = null), (xo = Zn[--Jn]), (Zn[Jn] = null);
  for (; e === Dn; )
    (Dn = st[--ct]),
      (st[ct] = null),
      (Ft = st[--ct]),
      (st[ct] = null),
      (jt = st[--ct]),
      (st[ct] = null);
}
var tt = null,
  et = null,
  de = !1,
  xt = null;
function lf(e, t) {
  var n = dt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: jt, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sa(e) {
  if (de) {
    var t = et;
    if (t) {
      var n = t;
      if (!Vs(e, t)) {
        if (xa(e)) throw Error(N(418));
        t = on(n.nextSibling);
        var r = tt;
        t && Vs(e, t)
          ? lf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (tt = e));
      }
    } else {
      if (xa(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (tt = e);
    }
  }
}
function Ws(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function Al(e) {
  if (e !== tt) return !1;
  if (!de) return Ws(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !va(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (xa(e)) throw (of(), Error(N(418)));
    for (; t; ) lf(e, t), (t = on(t.nextSibling));
  }
  if ((Ws(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function of() {
  for (var e = et; e; ) e = on(e.nextSibling);
}
function fr() {
  (et = tt = null), (de = !1);
}
function hu(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var $m = At.ReactCurrentBatchConfig;
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var So = mn(null),
  Eo = null,
  qn = null,
  mu = null;
function vu() {
  mu = qn = Eo = null;
}
function gu(e) {
  var t = So.current;
  se(So), (e._currentValue = t);
}
function Ea(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ur(e, t) {
  (Eo = e),
    (mu = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function pt(e) {
  var t = e._currentValue;
  if (mu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (Eo === null) throw Error(N(308));
      (qn = e), (Eo.dependencies = { lanes: 0, firstContext: e });
    } else qn = qn.next = e;
  return t;
}
var kn = null;
function yu(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function af(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), yu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function wu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function uf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), yu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function eo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
function Qs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ko(e, t, n, r) {
  var l = e.updateQueue;
  Xt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (c = s = u = null), (a = o);
    do {
      var h = a.lane,
        E = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: E,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            x = a;
          switch (((h = t), (E = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                p = y.call(E, p, h);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (h = typeof y == "function" ? y.call(E, p, h) : y),
                h == null)
              )
                break e;
              p = he({}, p, h);
              break e;
            case 2:
              Xt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (E = {
          eventTime: E,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = E), (u = p)) : (c = c.next = E),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Fn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var sf = new id.Component().refs;
function ka(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = sn(e),
      o = Mt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = an(e, o, l)),
      t !== null && (Et(t, e, l, r), eo(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = sn(e),
      o = Mt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = an(e, o, l)),
      t !== null && (Et(t, e, l, r), eo(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = sn(e),
      l = Mt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = an(e, l, r)),
      t !== null && (Et(t, e, r, n), eo(t, e, r));
  },
};
function bs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ll(n, r) || !ll(l, o)
      : !0
  );
}
function cf(e, t, n) {
  var r = !1,
    l = fn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = pt(o))
      : ((l = Ye(t) ? On : $e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? dr(e, l) : fn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ys(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = sf), wu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = pt(o))
    : ((o = Ye(t) ? On : $e.current), (l.context = dr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ka(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Vo.enqueueReplaceState(l, l.state, null),
      ko(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === sf && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Bl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gs(e) {
  var t = e._init;
  return t(e._payload);
}
function df(e) {
  function t(d, f) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [f]), (d.flags |= 16)) : m.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = cn(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((d.flags |= 2), f) : m)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, m, C) {
    return f === null || f.tag !== 6
      ? ((f = Fi(m, d.mode, C)), (f.return = d), f)
      : ((f = l(f, m)), (f.return = d), f);
  }
  function u(d, f, m, C) {
    var _ = m.type;
    return _ === Qn
      ? c(d, f, m.props.children, C, m.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Gt &&
            Gs(_) === f.type))
      ? ((C = l(f, m.props)), (C.ref = Tr(d, f, m)), (C.return = d), C)
      : ((C = io(m.type, m.key, m.props, null, d.mode, C)),
        (C.ref = Tr(d, f, m)),
        (C.return = d),
        C);
  }
  function s(d, f, m, C) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Mi(m, d.mode, C)), (f.return = d), f)
      : ((f = l(f, m.children || [])), (f.return = d), f);
  }
  function c(d, f, m, C, _) {
    return f === null || f.tag !== 7
      ? ((f = Nn(m, d.mode, C, _)), (f.return = d), f)
      : ((f = l(f, m)), (f.return = d), f);
  }
  function p(d, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Fi("" + f, d.mode, m)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case _l:
          return (
            (m = io(f.type, f.key, f.props, null, d.mode, m)),
            (m.ref = Tr(d, null, f)),
            (m.return = d),
            m
          );
        case Wn:
          return (f = Mi(f, d.mode, m)), (f.return = d), f;
        case Gt:
          var C = f._init;
          return p(d, C(f._payload), m);
      }
      if ($r(f) || Cr(f))
        return (f = Nn(f, d.mode, m, null)), (f.return = d), f;
      Bl(d, f);
    }
    return null;
  }
  function h(d, f, m, C) {
    var _ = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return _ !== null ? null : a(d, f, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case _l:
          return m.key === _ ? u(d, f, m, C) : null;
        case Wn:
          return m.key === _ ? s(d, f, m, C) : null;
        case Gt:
          return (_ = m._init), h(d, f, _(m._payload), C);
      }
      if ($r(m) || Cr(m)) return _ !== null ? null : c(d, f, m, C, null);
      Bl(d, m);
    }
    return null;
  }
  function E(d, f, m, C, _) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (d = d.get(m) || null), a(f, d, "" + C, _);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case _l:
          return (d = d.get(C.key === null ? m : C.key) || null), u(f, d, C, _);
        case Wn:
          return (d = d.get(C.key === null ? m : C.key) || null), s(f, d, C, _);
        case Gt:
          var v = C._init;
          return E(d, f, m, v(C._payload), _);
      }
      if ($r(C) || Cr(C)) return (d = d.get(m) || null), c(f, d, C, _, null);
      Bl(f, C);
    }
    return null;
  }
  function y(d, f, m, C) {
    for (
      var _ = null, v = null, P = f, L = (f = 0), F = null;
      P !== null && L < m.length;
      L++
    ) {
      P.index > L ? ((F = P), (P = null)) : (F = P.sibling);
      var I = h(d, P, m[L], C);
      if (I === null) {
        P === null && (P = F);
        break;
      }
      e && P && I.alternate === null && t(d, P),
        (f = o(I, f, L)),
        v === null ? (_ = I) : (v.sibling = I),
        (v = I),
        (P = F);
    }
    if (L === m.length) return n(d, P), de && xn(d, L), _;
    if (P === null) {
      for (; L < m.length; L++)
        (P = p(d, m[L], C)),
          P !== null &&
            ((f = o(P, f, L)), v === null ? (_ = P) : (v.sibling = P), (v = P));
      return de && xn(d, L), _;
    }
    for (P = r(d, P); L < m.length; L++)
      (F = E(P, d, L, m[L], C)),
        F !== null &&
          (e && F.alternate !== null && P.delete(F.key === null ? L : F.key),
          (f = o(F, f, L)),
          v === null ? (_ = F) : (v.sibling = F),
          (v = F));
    return (
      e &&
        P.forEach(function (W) {
          return t(d, W);
        }),
      de && xn(d, L),
      _
    );
  }
  function x(d, f, m, C) {
    var _ = Cr(m);
    if (typeof _ != "function") throw Error(N(150));
    if (((m = _.call(m)), m == null)) throw Error(N(151));
    for (
      var v = (_ = null), P = f, L = (f = 0), F = null, I = m.next();
      P !== null && !I.done;
      L++, I = m.next()
    ) {
      P.index > L ? ((F = P), (P = null)) : (F = P.sibling);
      var W = h(d, P, I.value, C);
      if (W === null) {
        P === null && (P = F);
        break;
      }
      e && P && W.alternate === null && t(d, P),
        (f = o(W, f, L)),
        v === null ? (_ = W) : (v.sibling = W),
        (v = W),
        (P = F);
    }
    if (I.done) return n(d, P), de && xn(d, L), _;
    if (P === null) {
      for (; !I.done; L++, I = m.next())
        (I = p(d, I.value, C)),
          I !== null &&
            ((f = o(I, f, L)), v === null ? (_ = I) : (v.sibling = I), (v = I));
      return de && xn(d, L), _;
    }
    for (P = r(d, P); !I.done; L++, I = m.next())
      (I = E(P, d, L, I.value, C)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? L : I.key),
          (f = o(I, f, L)),
          v === null ? (_ = I) : (v.sibling = I),
          (v = I));
    return (
      e &&
        P.forEach(function (le) {
          return t(d, le);
        }),
      de && xn(d, L),
      _
    );
  }
  function S(d, f, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Qn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case _l:
          e: {
            for (var _ = m.key, v = f; v !== null; ) {
              if (v.key === _) {
                if (((_ = m.type), _ === Qn)) {
                  if (v.tag === 7) {
                    n(d, v.sibling),
                      (f = l(v, m.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  v.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Gt &&
                    Gs(_) === v.type)
                ) {
                  n(d, v.sibling),
                    (f = l(v, m.props)),
                    (f.ref = Tr(d, v, m)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, v);
                break;
              } else t(d, v);
              v = v.sibling;
            }
            m.type === Qn
              ? ((f = Nn(m.props.children, d.mode, C, m.key)),
                (f.return = d),
                (d = f))
              : ((C = io(m.type, m.key, m.props, null, d.mode, C)),
                (C.ref = Tr(d, f, m)),
                (C.return = d),
                (d = C));
          }
          return i(d);
        case Wn:
          e: {
            for (v = m.key; f !== null; ) {
              if (f.key === v)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Mi(m, d.mode, C)), (f.return = d), (d = f);
          }
          return i(d);
        case Gt:
          return (v = m._init), S(d, f, v(m._payload), C);
      }
      if ($r(m)) return y(d, f, m, C);
      if (Cr(m)) return x(d, f, m, C);
      Bl(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, m)), (f.return = d), (d = f))
          : (n(d, f), (f = Fi(m, d.mode, C)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return S;
}
var pr = df(!0),
  ff = df(!1),
  wl = {},
  Tt = mn(wl),
  ul = mn(wl),
  sl = mn(wl);
function Cn(e) {
  if (e === wl) throw Error(N(174));
  return e;
}
function xu(e, t) {
  switch ((ae(sl, t), ae(ul, e), ae(Tt, wl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : na(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = na(t, e));
  }
  se(Tt), ae(Tt, t);
}
function hr() {
  se(Tt), se(ul), se(sl);
}
function pf(e) {
  Cn(sl.current);
  var t = Cn(Tt.current),
    n = na(t, e.type);
  t !== n && (ae(ul, e), ae(Tt, n));
}
function Su(e) {
  ul.current === e && (se(Tt), se(ul));
}
var fe = mn(0);
function Co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ni = [];
function Eu() {
  for (var e = 0; e < Ni.length; e++)
    Ni[e]._workInProgressVersionPrimary = null;
  Ni.length = 0;
}
var to = At.ReactCurrentDispatcher,
  Ti = At.ReactCurrentBatchConfig,
  jn = 0,
  pe = null,
  Se = null,
  Le = null,
  Ro = !1,
  Kr = !1,
  cl = 0,
  Um = 0;
function Me() {
  throw Error(N(321));
}
function ku(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function Cu(e, t, n, r, l, o) {
  if (
    ((jn = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (to.current = e === null || e.memoizedState === null ? Vm : Wm),
    (e = n(r, l)),
    Kr)
  ) {
    o = 0;
    do {
      if (((Kr = !1), (cl = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Le = Se = null),
        (t.updateQueue = null),
        (to.current = Qm),
        (e = n(r, l));
    } while (Kr);
  }
  if (
    ((to.current = Po),
    (t = Se !== null && Se.next !== null),
    (jn = 0),
    (Le = Se = pe = null),
    (Ro = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Ru() {
  var e = cl !== 0;
  return (cl = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (pe.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function ht() {
  if (Se === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Le === null ? pe.memoizedState : Le.next;
  if (t !== null) (Le = t), (Se = e);
  else {
    if (e === null) throw Error(N(310));
    (Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      Le === null ? (pe.memoizedState = Le = e) : (Le = Le.next = e);
  }
  return Le;
}
function dl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _i(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Se,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var c = s.lane;
      if ((jn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = p), (i = r)) : (u = u.next = p),
          (pe.lanes |= c),
          (Fn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      kt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (pe.lanes |= o), (Fn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oi(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    kt(o, t.memoizedState) || (Qe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function hf() {}
function mf(e, t) {
  var n = pe,
    r = ht(),
    l = t(),
    o = !kt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Qe = !0)),
    (r = r.queue),
    Pu(yf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fl(9, gf.bind(null, n, r, l, t), void 0, null),
      Ne === null)
    )
      throw Error(N(349));
    jn & 30 || vf(n, t, l);
  }
  return l;
}
function vf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wf(t) && xf(e);
}
function yf(e, t, n) {
  return n(function () {
    wf(t) && xf(e);
  });
}
function wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function xf(e) {
  var t = $t(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function Xs(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hm.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function fl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sf() {
  return ht().memoizedState;
}
function no(e, t, n, r) {
  var l = Pt();
  (pe.flags |= e),
    (l.memoizedState = fl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wo(e, t, n, r) {
  var l = ht();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Se !== null) {
    var i = Se.memoizedState;
    if (((o = i.destroy), r !== null && ku(r, i.deps))) {
      l.memoizedState = fl(t, n, o, r);
      return;
    }
  }
  (pe.flags |= e), (l.memoizedState = fl(1 | t, n, o, r));
}
function Zs(e, t) {
  return no(8390656, 8, e, t);
}
function Pu(e, t) {
  return Wo(2048, 8, e, t);
}
function Ef(e, t) {
  return Wo(4, 2, e, t);
}
function kf(e, t) {
  return Wo(4, 4, e, t);
}
function Cf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Rf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wo(4, 4, Cf.bind(null, t, e), n)
  );
}
function Lu() {}
function Pf(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ku(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Lf(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ku(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nf(e, t, n) {
  return jn & 21
    ? (kt(n, t) || ((n = _d()), (pe.lanes |= n), (Fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
}
function Am(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ti.transition;
  Ti.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Ti.transition = r);
  }
}
function Tf() {
  return ht().memoizedState;
}
function Bm(e, t, n) {
  var r = sn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _f(e))
  )
    Of(t, n);
  else if (((n = af(e, t, n, r)), n !== null)) {
    var l = Ae();
    Et(n, e, r, l), Df(n, t, r);
  }
}
function Hm(e, t, n) {
  var r = sn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_f(e)) Of(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), kt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), yu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = af(e, t, l, r)),
      n !== null && ((l = Ae()), Et(n, e, r, l), Df(n, t, r));
  }
}
function _f(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Of(e, t) {
  Kr = Ro = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Df(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
var Po = {
    readContext: pt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  Vm = {
    readContext: pt,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: pt,
    useEffect: Zs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        no(4194308, 4, Cf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return no(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return no(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bm.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Xs,
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Xs(!1),
        t = e[0];
      return (e = Am.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        l = Pt();
      if (de) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(N(349));
        jn & 30 || vf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Zs(yf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        fl(9, gf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Ne.identifierPrefix;
      if (de) {
        var n = Ft,
          r = jt;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = cl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Um++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Wm = {
    readContext: pt,
    useCallback: Pf,
    useContext: pt,
    useEffect: Pu,
    useImperativeHandle: Rf,
    useInsertionEffect: Ef,
    useLayoutEffect: kf,
    useMemo: Lf,
    useReducer: _i,
    useRef: Sf,
    useState: function () {
      return _i(dl);
    },
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      var t = ht();
      return Nf(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = _i(dl)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: hf,
    useSyncExternalStore: mf,
    useId: Tf,
    unstable_isNewReconciler: !1,
  },
  Qm = {
    readContext: pt,
    useCallback: Pf,
    useContext: pt,
    useEffect: Pu,
    useImperativeHandle: Rf,
    useInsertionEffect: Ef,
    useLayoutEffect: kf,
    useMemo: Lf,
    useReducer: Oi,
    useRef: Sf,
    useState: function () {
      return Oi(dl);
    },
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      var t = ht();
      return Se === null ? (t.memoizedState = e) : Nf(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Oi(dl)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: hf,
    useSyncExternalStore: mf,
    useId: Tf,
    unstable_isNewReconciler: !1,
  };
function mr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Di(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ra(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Km = typeof WeakMap == "function" ? WeakMap : Map;
function jf(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      No || ((No = !0), (Ma = r)), Ra(e, t);
    }),
    n
  );
}
function Ff(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ra(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ra(e, t),
          typeof r != "function" &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Km();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = iv.bind(null, e, t, n)), t.then(e, e));
}
function qs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ec(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mt(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bm = At.ReactCurrentOwner,
  Qe = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? ff(t, null, n, r) : pr(t, e.child, n, r);
}
function tc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    ur(t, l),
    (r = Cu(e, t, n, r, o, l)),
    (n = Ru()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ut(e, t, l))
      : (de && n && fu(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
  );
}
function nc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Mu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Mf(e, t, o, r, l))
      : ((e = io(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ll), n(i, r) && e.ref === t.ref)
    )
      return Ut(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = cn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ll(o, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), Ut(e, t, l);
  }
  return Pa(e, t, n, r, l);
}
function zf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(tr, Je),
        (Je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(tr, Je),
          (Je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ae(tr, Je),
        (Je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae(tr, Je),
      (Je |= r);
  return Ue(e, t, l, n), t.child;
}
function If(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pa(e, t, n, r, l) {
  var o = Ye(n) ? On : $e.current;
  return (
    (o = dr(t, o)),
    ur(t, l),
    (n = Cu(e, t, n, r, o, l)),
    (r = Ru()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ut(e, t, l))
      : (de && r && fu(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
  );
}
function rc(e, t, n, r, l) {
  if (Ye(n)) {
    var o = !0;
    yo(t);
  } else o = !1;
  if ((ur(t, l), t.stateNode === null))
    ro(e, t), cf(t, n, r), Ca(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = pt(s))
      : ((s = Ye(n) ? On : $e.current), (s = dr(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Ys(t, i, r, s)),
      (Xt = !1);
    var h = t.memoizedState;
    (i.state = h),
      ko(t, r, i, l),
      (u = t.memoizedState),
      a !== r || h !== u || be.current || Xt
        ? (typeof c == "function" && (ka(t, n, c, r), (u = t.memoizedState)),
          (a = Xt || bs(t, n, a, r, h, u, s))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      uf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : gt(t.type, a)),
      (i.props = s),
      (p = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((u = Ye(n) ? On : $e.current), (u = dr(t, u)));
    var E = n.getDerivedStateFromProps;
    (c =
      typeof E == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || h !== u) && Ys(t, i, r, u)),
      (Xt = !1),
      (h = t.memoizedState),
      (i.state = h),
      ko(t, r, i, l);
    var y = t.memoizedState;
    a !== p || h !== y || be.current || Xt
      ? (typeof E == "function" && (ka(t, n, E, r), (y = t.memoizedState)),
        (s = Xt || bs(t, n, s, r, h, y, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return La(e, t, n, r, o, l);
}
function La(e, t, n, r, l, o) {
  If(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Hs(t, n, !1), Ut(e, t, o);
  (r = t.stateNode), (bm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = pr(t, e.child, null, o)), (t.child = pr(t, null, a, o)))
      : Ue(e, t, a, o),
    (t.memoizedState = r.state),
    l && Hs(t, n, !0),
    t.child
  );
}
function $f(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bs(e, t.context, !1),
    xu(e, t.containerInfo);
}
function lc(e, t, n, r, l) {
  return fr(), hu(l), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var Na = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ta(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uf(e, t, n) {
  var r = t.pendingProps,
    l = fe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ae(fe, l & 1),
    e === null)
  )
    return (
      Sa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = bo(i, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ta(n)),
              (t.memoizedState = Na),
              e)
            : Nu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Ym(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = cn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = cn(a, o)) : ((o = Nn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ta(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Na),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = cn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Nu(e, t) {
  return (
    (t = bo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hl(e, t, n, r) {
  return (
    r !== null && hu(r),
    pr(t, e.child, null, n),
    (e = Nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ym(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Di(Error(N(422)))), Hl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = bo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Nn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && pr(t, e.child, null, i),
        (t.child.memoizedState = Ta(i)),
        (t.memoizedState = Na),
        o);
  if (!(t.mode & 1)) return Hl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = Di(o, r, void 0)), Hl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Qe || a)) {
    if (((r = Ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), $t(e, l), Et(r, e, l, -1));
    }
    return Fu(), (r = Di(Error(N(421)))), Hl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = av.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (et = on(l.nextSibling)),
      (tt = t),
      (de = !0),
      (xt = null),
      e !== null &&
        ((st[ct++] = jt),
        (st[ct++] = Ft),
        (st[ct++] = Dn),
        (jt = e.id),
        (Ft = e.overflow),
        (Dn = t)),
      (t = Nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ea(e.return, t, n);
}
function ji(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Af(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ue(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oc(e, n, t);
        else if (e.tag === 19) oc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ae(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Co(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ji(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Co(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ji(t, !0, n, null, o);
        break;
      case "together":
        ji(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ro(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Gm(e, t, n) {
  switch (t.tag) {
    case 3:
      $f(t), fr();
      break;
    case 5:
      pf(t);
      break;
    case 1:
      Ye(t.type) && yo(t);
      break;
    case 4:
      xu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ae(So, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Uf(e, t, n)
          : (ae(fe, fe.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      ae(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Af(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ae(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zf(e, t, n);
  }
  return Ut(e, t, n);
}
var Bf, _a, Hf, Vf;
Bf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
_a = function () {};
Hf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Cn(Tt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ji(e, l)), (r = Ji(e, r)), (o = []);
        break;
      case "select":
        (l = he({}, l, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ta(e, l)), (r = ta(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vo);
    }
    ra(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Zr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Zr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ue("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Vf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _r(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Xm(e, t, n) {
  var r = t.pendingProps;
  switch ((pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(t), null;
    case 1:
      return Ye(t.type) && go(), ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hr(),
        se(be),
        se($e),
        Eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Al(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && ($a(xt), (xt = null)))),
        _a(e, t),
        ze(t),
        null
      );
    case 5:
      Su(t);
      var l = Cn(sl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ze(t), null;
        }
        if (((e = Cn(Tt.current)), Al(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Lt] = t), (r[al] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ar.length; l++) ue(Ar[l], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              hs(r, o), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              vs(r, o), ue("invalid", r);
          }
          ra(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ul(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ul(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Zr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              Ol(r), ms(r, o, !0);
              break;
            case "textarea":
              Ol(r), gs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = vo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = md(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Lt] = t),
            (e[al] = r),
            Bf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = la(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ar.length; l++) ue(Ar[l], e);
                l = r;
                break;
              case "source":
                ue("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (l = r);
                break;
              case "details":
                ue("toggle", e), (l = r);
                break;
              case "input":
                hs(e, r), (l = Ji(e, r)), ue("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = he({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                vs(e, r), (l = ta(e, r)), ue("invalid", e);
                break;
              default:
                l = r;
            }
            ra(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? yd(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && vd(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Jr(e, u)
                    : typeof u == "number" && Jr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Zr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && ue("scroll", e)
                      : u != null && Ja(e, o, u, i));
              }
            switch (n) {
              case "input":
                Ol(e), ms(e, r, !1);
                break;
              case "textarea":
                Ol(e), gs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? lr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = vo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) Vf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Cn(sl.current)), Cn(Tt.current), Al(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (o = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r);
      }
      return ze(t), null;
    case 13:
      if (
        (se(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && et !== null && t.mode & 1 && !(t.flags & 128))
          of(), fr(), (t.flags |= 98560), (o = !1);
        else if (((o = Al(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Lt] = t;
          } else
            fr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (o = !1);
        } else xt !== null && ($a(xt), (xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : Fu())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        hr(), _a(e, t), e === null && ol(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return gu(t.type._context), ze(t), null;
    case 17:
      return Ye(t.type) && go(), ze(t), null;
    case 19:
      if ((se(fe), (o = t.memoizedState), o === null)) return ze(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) _r(o, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Co(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    _r(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ae(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            we() > vr &&
            ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Co(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _r(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !de)
            )
              return ze(t), null;
          } else
            2 * we() - o.renderingStartTime > vr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = we()),
          (t.sibling = null),
          (n = fe.current),
          ae(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        ju(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Je & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Zm(e, t) {
  switch ((pu(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && go(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hr(),
        se(be),
        se($e),
        Eu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Su(t), null;
    case 13:
      if (
        (se(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        fr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(fe), null;
    case 4:
      return hr(), null;
    case 10:
      return gu(t.type._context), null;
    case 22:
    case 23:
      return ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vl = !1,
  Ie = !1,
  Jm = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function Oa(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var ic = !1;
function qm(e, t) {
  if (((ha = po), (e = Kd()), du(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var E;
              p !== n || (l !== 0 && p.nodeType !== 3) || (a = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (E = p.firstChild) !== null;

            )
              (h = p), (p = E);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++s === l && (a = i),
                h === o && ++c === r && (u = i),
                (E = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = E;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ma = { focusedElem: e, selectionRange: n }, po = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    S = y.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : gt(t.type, x),
                      S
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (C) {
          ve(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (y = ic), (ic = !1), y;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Oa(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Qo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Da(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Wf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[al], delete t[ya], delete t[Mm], delete t[zm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
function Fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fa(e, t, n), e = e.sibling; e !== null; ) Fa(e, t, n), (e = e.sibling);
}
var _e = null,
  yt = !1;
function Kt(e, t, n) {
  for (n = n.child; n !== null; ) Kf(e, t, n), (n = n.sibling);
}
function Kf(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(Io, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || er(n, t);
    case 6:
      var r = _e,
        l = yt;
      (_e = null),
        Kt(e, t, n),
        (_e = r),
        (yt = l),
        _e !== null &&
          (yt
            ? ((e = _e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null &&
        (yt
          ? ((e = _e),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pi(e.parentNode, n)
              : e.nodeType === 1 && Pi(e, n),
            nl(e))
          : Pi(_e, n.stateNode));
      break;
    case 4:
      (r = _e),
        (l = yt),
        (_e = n.stateNode.containerInfo),
        (yt = !0),
        Kt(e, t, n),
        (_e = r),
        (yt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Oa(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Kt(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Kt(e, t, n);
      break;
    case 21:
      Kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), Kt(e, t, n), (Ie = r))
        : Kt(e, t, n);
      break;
    default:
      Kt(e, t, n);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jm()),
      t.forEach(function (r) {
        var l = uv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (_e = a.stateNode), (yt = !1);
              break e;
            case 3:
              (_e = a.stateNode.containerInfo), (yt = !0);
              break e;
            case 4:
              (_e = a.stateNode.containerInfo), (yt = !0);
              break e;
          }
          a = a.return;
        }
        if (_e === null) throw Error(N(160));
        Kf(o, i, l), (_e = null), (yt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ve(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bf(t, e), (t = t.sibling);
}
function bf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((vt(t, e), Rt(e), r & 4)) {
        try {
          br(3, e, e.return), Qo(3, e);
        } catch (x) {
          ve(e, e.return, x);
        }
        try {
          br(5, e, e.return);
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 1:
      vt(t, e), Rt(e), r & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if (
        (vt(t, e),
        Rt(e),
        r & 512 && n !== null && er(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Jr(l, "");
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && pd(l, o),
              la(a, i);
            var s = la(a, o);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                p = u[i + 1];
              c === "style"
                ? yd(l, p)
                : c === "dangerouslySetInnerHTML"
                ? vd(l, p)
                : c === "children"
                ? Jr(l, p)
                : Ja(l, c, p, s);
            }
            switch (a) {
              case "input":
                qi(l, o);
                break;
              case "textarea":
                hd(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null
                  ? lr(l, !!o.multiple, E, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? lr(l, !!o.multiple, o.defaultValue, !0)
                      : lr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[al] = o;
          } catch (x) {
            ve(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((vt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (vt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          nl(t.containerInfo);
        } catch (x) {
          ve(e, e.return, x);
        }
      break;
    case 4:
      vt(t, e), Rt(e);
      break;
    case 13:
      vt(t, e),
        Rt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ou = we())),
        r & 4 && uc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (s = Ie) || c), vt(t, e), (Ie = s)) : vt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (p = j = c; j !== null; ) {
              switch (((h = j), (E = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  br(4, h, h.return);
                  break;
                case 1:
                  er(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      ve(r, n, x);
                    }
                  }
                  break;
                case 5:
                  er(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    cc(p);
                    continue;
                  }
              }
              E !== null ? ((E.return = h), (j = E)) : cc(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = gd("display", i)));
              } catch (x) {
                ve(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (x) {
                ve(e, e.return, x);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      vt(t, e), Rt(e), r & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      vt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jr(l, ""), (r.flags &= -33));
          var o = ac(e);
          Fa(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ac(e);
          ja(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ev(e, t, n) {
  (j = e), Yf(e);
}
function Yf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Vl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Ie;
        a = Vl;
        var s = Ie;
        if (((Vl = i), (Ie = u) && !s))
          for (j = l; j !== null; )
            (i = j),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? dc(l)
                : u !== null
                ? ((u.return = i), (j = u))
                : dc(l);
        for (; o !== null; ) (j = o), Yf(o), (o = o.sibling);
        (j = l), (Vl = a), (Ie = s);
      }
      sc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (j = o)) : sc(e);
  }
}
function sc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Qo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ks(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ks(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && nl(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Ie || (t.flags & 512 && Da(t));
      } catch (h) {
        ve(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function cc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function dc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qo(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var o = t.return;
          try {
            Da(t);
          } catch (u) {
            ve(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Da(t);
          } catch (u) {
            ve(t, i, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var tv = Math.ceil,
  Lo = At.ReactCurrentDispatcher,
  Tu = At.ReactCurrentOwner,
  ft = At.ReactCurrentBatchConfig,
  q = 0,
  Ne = null,
  xe = null,
  De = 0,
  Je = 0,
  tr = mn(0),
  ke = 0,
  pl = null,
  Fn = 0,
  Ko = 0,
  _u = 0,
  Yr = null,
  We = null,
  Ou = 0,
  vr = 1 / 0,
  Ot = null,
  No = !1,
  Ma = null,
  un = null,
  Wl = !1,
  en = null,
  To = 0,
  Gr = 0,
  za = null,
  lo = -1,
  oo = 0;
function Ae() {
  return q & 6 ? we() : lo !== -1 ? lo : (lo = we());
}
function sn(e) {
  return e.mode & 1
    ? q & 2 && De !== 0
      ? De & -De
      : $m.transition !== null
      ? (oo === 0 && (oo = _d()), oo)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Id(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < Gr) throw ((Gr = 0), (za = null), Error(N(185)));
  vl(e, n, r),
    (!(q & 2) || e !== Ne) &&
      (e === Ne && (!(q & 2) && (Ko |= n), ke === 4 && Jt(e, De)),
      Ge(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((vr = we() + 500), Ho && vn()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  $h(e, t);
  var r = fo(e, e === Ne ? De : 0);
  if (r === 0)
    n !== null && xs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xs(n), t === 1))
      e.tag === 0 ? Im(fc.bind(null, e)) : nf(fc.bind(null, e)),
        jm(function () {
          !(q & 6) && vn();
        }),
        (n = null);
    else {
      switch (Od(r)) {
        case 1:
          n = ru;
          break;
        case 4:
          n = Nd;
          break;
        case 16:
          n = co;
          break;
        case 536870912:
          n = Td;
          break;
        default:
          n = co;
      }
      n = np(n, Gf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gf(e, t) {
  if (((lo = -1), (oo = 0), q & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = fo(e, e === Ne ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _o(e, r);
  else {
    t = r;
    var l = q;
    q |= 2;
    var o = Zf();
    (Ne !== e || De !== t) && ((Ot = null), (vr = we() + 500), Ln(e, t));
    do
      try {
        lv();
        break;
      } catch (a) {
        Xf(e, a);
      }
    while (!0);
    vu(),
      (Lo.current = o),
      (q = l),
      xe !== null ? (t = 0) : ((Ne = null), (De = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = sa(e)), l !== 0 && ((r = l), (t = Ia(e, l)))), t === 1)
    )
      throw ((n = pl), Ln(e, 0), Jt(e, r), Ge(e, we()), n);
    if (t === 6) Jt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !nv(l) &&
          ((t = _o(e, r)),
          t === 2 && ((o = sa(e)), o !== 0 && ((r = o), (t = Ia(e, o)))),
          t === 1))
      )
        throw ((n = pl), Ln(e, 0), Jt(e, r), Ge(e, we()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Sn(e, We, Ot);
          break;
        case 3:
          if (
            (Jt(e, r), (r & 130023424) === r && ((t = Ou + 500 - we()), 10 < t))
          ) {
            if (fo(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ga(Sn.bind(null, e, We, Ot), t);
            break;
          }
          Sn(e, We, Ot);
          break;
        case 4:
          if ((Jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - St(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * tv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ga(Sn.bind(null, e, We, Ot), r);
            break;
          }
          Sn(e, We, Ot);
          break;
        case 5:
          Sn(e, We, Ot);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ge(e, we()), e.callbackNode === n ? Gf.bind(null, e) : null;
}
function Ia(e, t) {
  var n = Yr;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = _o(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && $a(t)),
    e
  );
}
function $a(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function nv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!kt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Jt(e, t) {
  for (
    t &= ~_u,
      t &= ~Ko,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fc(e) {
  if (q & 6) throw Error(N(327));
  sr();
  var t = fo(e, 0);
  if (!(t & 1)) return Ge(e, we()), null;
  var n = _o(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = sa(e);
    r !== 0 && ((t = r), (n = Ia(e, r)));
  }
  if (n === 1) throw ((n = pl), Ln(e, 0), Jt(e, t), Ge(e, we()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Sn(e, We, Ot),
    Ge(e, we()),
    null
  );
}
function Du(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((vr = we() + 500), Ho && vn());
  }
}
function Mn(e) {
  en !== null && en.tag === 0 && !(q & 6) && sr();
  var t = q;
  q |= 1;
  var n = ft.transition,
    r = ne;
  try {
    if (((ft.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (ft.transition = n), (q = t), !(q & 6) && vn();
  }
}
function ju() {
  (Je = tr.current), se(tr);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dm(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && go();
          break;
        case 3:
          hr(), se(be), se($e), Eu();
          break;
        case 5:
          Su(r);
          break;
        case 4:
          hr();
          break;
        case 13:
          se(fe);
          break;
        case 19:
          se(fe);
          break;
        case 10:
          gu(r.type._context);
          break;
        case 22:
        case 23:
          ju();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (xe = e = cn(e.current, null)),
    (De = Je = t),
    (ke = 0),
    (pl = null),
    (_u = Ko = Fn = 0),
    (We = Yr = null),
    kn !== null)
  ) {
    for (t = 0; t < kn.length; t++)
      if (((n = kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    kn = null;
  }
  return e;
}
function Xf(e, t) {
  do {
    var n = xe;
    try {
      if ((vu(), (to.current = Po), Ro)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ro = !1;
      }
      if (
        ((jn = 0),
        (Le = Se = pe = null),
        (Kr = !1),
        (cl = 0),
        (Tu.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (pl = t), (xe = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var E = qs(i);
          if (E !== null) {
            (E.flags &= -257),
              ec(E, i, a, o, t),
              E.mode & 1 && Js(o, s, t),
              (t = E),
              (u = s);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Js(o, s, t), Fu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (de && a.mode & 1) {
          var S = qs(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ec(S, i, a, o, t),
              hu(mr(u, a));
            break e;
          }
        }
        (o = u = mr(u, a)),
          ke !== 4 && (ke = 2),
          Yr === null ? (Yr = [o]) : Yr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = jf(o, u, t);
              Qs(o, d);
              break e;
            case 1:
              a = u;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (un === null || !un.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = Ff(o, a, t);
                Qs(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qf(n);
    } catch (_) {
      (t = _), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zf() {
  var e = Lo.current;
  return (Lo.current = Po), e === null ? Po : e;
}
function Fu() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ne === null || (!(Fn & 268435455) && !(Ko & 268435455)) || Jt(Ne, De);
}
function _o(e, t) {
  var n = q;
  q |= 2;
  var r = Zf();
  (Ne !== e || De !== t) && ((Ot = null), Ln(e, t));
  do
    try {
      rv();
      break;
    } catch (l) {
      Xf(e, l);
    }
  while (!0);
  if ((vu(), (q = n), (Lo.current = r), xe !== null)) throw Error(N(261));
  return (Ne = null), (De = 0), ke;
}
function rv() {
  for (; xe !== null; ) Jf(xe);
}
function lv() {
  for (; xe !== null && !Th(); ) Jf(xe);
}
function Jf(e) {
  var t = tp(e.alternate, e, Je);
  (e.memoizedProps = e.pendingProps),
    t === null ? qf(e) : (xe = t),
    (Tu.current = null);
}
function qf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zm(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (xe = null);
        return;
      }
    } else if (((n = Xm(n, t, Je)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function Sn(e, t, n) {
  var r = ne,
    l = ft.transition;
  try {
    (ft.transition = null), (ne = 1), ov(e, t, n, r);
  } finally {
    (ft.transition = l), (ne = r);
  }
  return null;
}
function ov(e, t, n, r) {
  do sr();
  while (en !== null);
  if (q & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Uh(e, o),
    e === Ne && ((xe = Ne = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wl ||
      ((Wl = !0),
      np(co, function () {
        return sr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ft.transition), (ft.transition = null);
    var i = ne;
    ne = 1;
    var a = q;
    (q |= 4),
      (Tu.current = null),
      qm(e, n),
      bf(n, e),
      Rm(ma),
      (po = !!ha),
      (ma = ha = null),
      (e.current = n),
      ev(n),
      _h(),
      (q = a),
      (ne = i),
      (ft.transition = o);
  } else e.current = n;
  if (
    (Wl && ((Wl = !1), (en = e), (To = l)),
    (o = e.pendingLanes),
    o === 0 && (un = null),
    jh(n.stateNode),
    Ge(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (No) throw ((No = !1), (e = Ma), (Ma = null), e);
  return (
    To & 1 && e.tag !== 0 && sr(),
    (o = e.pendingLanes),
    o & 1 ? (e === za ? Gr++ : ((Gr = 0), (za = e))) : (Gr = 0),
    vn(),
    null
  );
}
function sr() {
  if (en !== null) {
    var e = Od(To),
      t = ft.transition,
      n = ne;
    try {
      if (((ft.transition = null), (ne = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (To = 0), q & 6)) throw Error(N(331));
        var l = q;
        for (q |= 4, j = e.current; j !== null; ) {
          var o = j,
            i = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (j = s; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (j = p);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var h = c.sibling,
                        E = c.return;
                      if ((Wf(c), c === s)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = E), (j = h);
                        break;
                      }
                      j = E;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (j = i);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    br(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (j = d);
                break e;
              }
              j = o.return;
            }
        }
        var f = e.current;
        for (j = f; j !== null; ) {
          i = j;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (j = m);
          else
            e: for (i = f; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qo(9, a);
                  }
                } catch (_) {
                  ve(a, a.return, _);
                }
              if (a === i) {
                j = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (j = C);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((q = l), vn(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(Io, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (ft.transition = t);
    }
  }
  return !1;
}
function pc(e, t, n) {
  (t = mr(n, t)),
    (t = jf(e, t, 1)),
    (e = an(e, t, 1)),
    (t = Ae()),
    e !== null && (vl(e, 1, t), Ge(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (un === null || !un.has(r)))
        ) {
          (e = mr(n, e)),
            (e = Ff(t, e, 1)),
            (t = an(t, e, 1)),
            (e = Ae()),
            t !== null && (vl(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function iv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (De & n) === n &&
      (ke === 4 || (ke === 3 && (De & 130023424) === De && 500 > we() - Ou)
        ? Ln(e, 0)
        : (_u |= n)),
    Ge(e, t);
}
function ep(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fl), (Fl <<= 1), !(Fl & 130023424) && (Fl = 4194304))
      : (t = 1));
  var n = Ae();
  (e = $t(e, t)), e !== null && (vl(e, t, n), Ge(e, n));
}
function av(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ep(e, n);
}
function uv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), ep(e, n);
}
var tp;
tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || be.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), Gm(e, t, n);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), de && t.flags & 1048576 && rf(t, xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ro(e, t), (e = t.pendingProps);
      var l = dr(t, $e.current);
      ur(t, n), (l = Cu(null, t, r, e, l, n));
      var o = Ru();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), yo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            wu(t),
            (l.updater = Vo),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ca(t, r, e, n),
            (t = La(null, t, r, !0, o, n)))
          : ((t.tag = 0), de && o && fu(t), Ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ro(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = cv(r)),
          (e = gt(r, e)),
          l)
        ) {
          case 0:
            t = Pa(null, t, r, e, n);
            break e;
          case 1:
            t = rc(null, t, r, e, n);
            break e;
          case 11:
            t = tc(null, t, r, e, n);
            break e;
          case 14:
            t = nc(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        Pa(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        rc(e, t, r, l, n)
      );
    case 3:
      e: {
        if (($f(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          uf(e, t),
          ko(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = mr(Error(N(423)), t)), (t = lc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mr(Error(N(424)), t)), (t = lc(e, t, r, n, l));
            break e;
          } else
            for (
              et = on(t.stateNode.containerInfo.firstChild),
                tt = t,
                de = !0,
                xt = null,
                n = ff(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fr(), r === l)) {
            t = Ut(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pf(t),
        e === null && Sa(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        va(r, l) ? (i = null) : o !== null && va(r, o) && (t.flags |= 32),
        If(e, t),
        Ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Sa(t), null;
    case 13:
      return Uf(e, t, n);
    case 4:
      return (
        xu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        tc(e, t, r, l, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ae(So, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (kt(o.value, i)) {
            if (o.children === l.children && !be.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Mt(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ea(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ea(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ur(t, n),
        (l = pt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = gt(r, t.pendingProps)),
        (l = gt(r.type, l)),
        nc(e, t, r, l, n)
      );
    case 15:
      return Mf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        ro(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), yo(t)) : (e = !1),
        ur(t, n),
        cf(t, r, l),
        Ca(t, r, l, n),
        La(null, t, r, !0, e, n)
      );
    case 19:
      return Af(e, t, n);
    case 22:
      return zf(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function np(e, t) {
  return Ld(e, t);
}
function sv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function dt(e, t, n, r) {
  return new sv(e, t, n, r);
}
function Mu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cv(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eu)) return 11;
    if (e === tu) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function io(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Mu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qn:
        return Nn(n.children, l, o, t);
      case qa:
        (i = 8), (l |= 8);
        break;
      case Yi:
        return (
          (e = dt(12, n, t, l | 2)), (e.elementType = Yi), (e.lanes = o), e
        );
      case Gi:
        return (e = dt(13, n, t, l)), (e.elementType = Gi), (e.lanes = o), e;
      case Xi:
        return (e = dt(19, n, t, l)), (e.elementType = Xi), (e.lanes = o), e;
      case cd:
        return bo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ud:
              i = 10;
              break e;
            case sd:
              i = 9;
              break e;
            case eu:
              i = 11;
              break e;
            case tu:
              i = 14;
              break e;
            case Gt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = dt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Nn(e, t, n, r) {
  return (e = dt(7, e, r, t)), (e.lanes = n), e;
}
function bo(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = cd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fi(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e;
}
function Mi(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mi(0)),
    (this.expirationTimes = mi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function zu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new dv(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = dt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wu(o),
    e
  );
}
function fv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rp(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return tf(e, n, t);
  }
  return t;
}
function lp(e, t, n, r, l, o, i, a, u) {
  return (
    (e = zu(n, r, !0, e, l, o, i, a, u)),
    (e.context = rp(null)),
    (n = e.current),
    (r = Ae()),
    (l = sn(n)),
    (o = Mt(r, l)),
    (o.callback = t ?? null),
    an(n, o, l),
    (e.current.lanes = l),
    vl(e, l, r),
    Ge(e, r),
    e
  );
}
function Yo(e, t, n, r) {
  var l = t.current,
    o = Ae(),
    i = sn(l);
  return (
    (n = rp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(l, t, i)),
    e !== null && (Et(e, l, i, o), eo(e, l, i)),
    i
  );
}
function Oo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Iu(e, t) {
  hc(e, t), (e = e.alternate) && hc(e, t);
}
function pv() {
  return null;
}
var op =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $u(e) {
  this._internalRoot = e;
}
Go.prototype.render = $u.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Yo(e, t, null, null);
};
Go.prototype.unmount = $u.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      Yo(null, e, null, null);
    }),
      (t[It] = null);
  }
};
function Go(e) {
  this._internalRoot = e;
}
Go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
    Zt.splice(n, 0, e), n === 0 && zd(e);
  }
};
function Uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mc() {}
function hv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Oo(i);
        o.call(s);
      };
    }
    var i = lp(t, r, e, 0, null, !1, !1, "", mc);
    return (
      (e._reactRootContainer = i),
      (e[It] = i.current),
      ol(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Oo(u);
      a.call(s);
    };
  }
  var u = zu(e, 0, !1, null, null, !1, !1, "", mc);
  return (
    (e._reactRootContainer = u),
    (e[It] = u.current),
    ol(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      Yo(t, u, n, r);
    }),
    u
  );
}
function Zo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Oo(i);
        a.call(u);
      };
    }
    Yo(t, i, e, l);
  } else i = hv(n, t, e, l, r);
  return Oo(i);
}
Dd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 &&
          (lu(t, n | 1), Ge(t, we()), !(q & 6) && ((vr = we() + 500), vn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var l = Ae();
          Et(r, e, 1, l);
        }
      }),
        Iu(e, 1);
  }
};
ou = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Ae();
      Et(t, e, 134217728, n);
    }
    Iu(e, 134217728);
  }
};
jd = function (e) {
  if (e.tag === 13) {
    var t = sn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = Ae();
      Et(n, e, t, r);
    }
    Iu(e, t);
  }
};
Fd = function () {
  return ne;
};
Md = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
ia = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Bo(r);
            if (!l) throw Error(N(90));
            fd(r), qi(r, l);
          }
        }
      }
      break;
    case "textarea":
      hd(e, n);
      break;
    case "select":
      (t = n.value), t != null && lr(e, !!n.multiple, t, !1);
  }
};
Sd = Du;
Ed = Mn;
var mv = { usingClientEntryPoint: !1, Events: [yl, Gn, Bo, wd, xd, Du] },
  Or = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  vv = {
    bundleType: Or.bundleType,
    version: Or.version,
    rendererPackageName: Or.rendererPackageName,
    rendererConfig: Or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Or.findFiberByHostInstance || pv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ql.isDisabled && Ql.supportsFiber)
    try {
      (Io = Ql.inject(vv)), (Nt = Ql);
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mv;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(N(200));
  return fv(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = op;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = zu(e, 1, !1, null, null, n, !1, r, l)),
    (e[It] = t.current),
    ol(e.nodeType === 8 ? e.parentNode : e),
    new $u(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Rd(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
  return Mn(e);
};
lt.hydrate = function (e, t, n) {
  if (!Xo(t)) throw Error(N(200));
  return Zo(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = op;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = lp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[It] = t.current),
    ol(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Go(t);
};
lt.render = function (e, t, n) {
  if (!Xo(t)) throw Error(N(200));
  return Zo(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!Xo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Mn(function () {
        Zo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[It] = null);
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = Du;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Zo(e, t, n, !1, r);
};
lt.version = "18.2.0-next-9e3b772b8-20220608";
function ip() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip);
    } catch (e) {
      console.error(e);
    }
}
ip(), (rd.exports = lt);
var Au = rd.exports;
const gv = Kc(Au),
  yv = Qc({ __proto__: null, default: gv }, [Au]);
var vc = Au;
(Ki.createRoot = vc.createRoot), (Ki.hydrateRoot = vc.hydrateRoot);
function wv() {
  const [e, t] = g.useState([
      "Searching for similar products",
      "Adapting them to your product",
      "Categorizing your product",
    ]),
    [n, r] = g.useState(0);
  return (
    g.useEffect(() => {
      const l = setInterval(() => {
        r((o) => (o + 1) % e.length);
      }, 3e3);
      return () => clearInterval(l);
    }, [e]),
    T.jsxs("div", {
      className: "flex flex-col gap-9 items-center",
      children: [
        T.jsx("div", {
          className:
            " w-32 h-32 border-4 border-t-blue-100  animate-spin border-blue-300 rounded-full",
        }),
        T.jsx("div", {
          className: " text-center loading-text font-bold ",
          children: e[n],
        }),
      ],
    })
  );
}
function xv({ res: e, form: t, setForm: n }) {
  return T.jsxs("div", {
    className: `shadow-lg rounded-lg overflow-hidden  ${
      t.id == e.id ? " border-4 border-blue-200" : ""
    }`,
    children: [
      T.jsx("div", {
        onClick: () => {
          n({ ...t, id: e.id });
        },
        className:
          " cursor-pointer aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg h-40   xl:aspect-h-8 xl:aspect-w-7",
        children: T.jsx("img", {
          src: `data:image/jpeg;base64,${e.image_bytes}`,
          alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
          className:
            "h-full w-full object-contain object-center group-hover:opacity-75 bg-blend-overlay",
        }),
      }),
      T.jsxs("h3", {
        className: "mt-4 text-sm text-gray-700",
        children: [e.description.slice(0, 29), "..."],
      }),
      T.jsx("p", {
        className: "mt-1 text-lg font-medium text-gray-900",
        children: e.estimated_price,
      }),
    ],
  });
}
var Sv = Object.defineProperty,
  Ev = (e, t, n) =>
    t in e
      ? Sv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  zi = (e, t, n) => (Ev(e, typeof t != "symbol" ? t + "" : t, n), n);
let kv = class {
    constructor() {
      zi(this, "current", this.detect()),
        zi(this, "handoffState", "pending"),
        zi(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  Tn = new kv(),
  rt = (e, t) => {
    Tn.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t);
  };
function _t(e) {
  let t = g.useRef(e);
  return (
    rt(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function ap(e, t) {
  let [n, r] = g.useState(e),
    l = _t(e);
  return rt(() => r(l.current), [l, r, ...t]), n;
}
let ee = function (e) {
  let t = _t(e);
  return Ee.useCallback((...n) => t.current(...n), [t]);
};
function Cv(e, t, n) {
  let [r, l] = g.useState(n),
    o = e !== void 0,
    i = g.useRef(o),
    a = g.useRef(!1),
    u = g.useRef(!1);
  return (
    o && !i.current && !a.current
      ? ((a.current = !0),
        (i.current = o),
        console.error(
          "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
        ))
      : !o &&
        i.current &&
        !u.current &&
        ((u.current = !0),
        (i.current = o),
        console.error(
          "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
        )),
    [o ? e : r, ee((s) => (o || l(s), t == null ? void 0 : t(s)))]
  );
}
function Rv(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function pn() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Rv(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = pn();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function gr() {
  let [e] = g.useState(pn);
  return g.useEffect(() => () => e.dispose(), [e]), e;
}
function Pv() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Qi
    ? ((t) => t.useSyncExternalStore)(Qi)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function Bu() {
  let e = Pv(),
    [t, n] = g.useState(Tn.isHandoffComplete);
  return (
    t && Tn.isHandoffComplete === !1 && n(!1),
    g.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    g.useEffect(() => Tn.handoff(), []),
    e ? !1 : t
  );
}
var gc;
let Jo =
  (gc = Ee.useId) != null
    ? gc
    : function () {
        let e = Bu(),
          [t, n] = Ee.useState(e ? () => Tn.nextId() : null);
        return (
          rt(() => {
            t === null && n(Tn.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Oe(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Oe), r);
}
function up(e) {
  return Tn.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let yc = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var Lv = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Lv || {}),
  Nv = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Nv || {}),
  Tv = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Tv || {}),
  Hu = ((e) => (
    (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
  ))(Hu || {});
function sp(e, t = 0) {
  var n;
  return e === ((n = up(e)) == null ? void 0 : n.body)
    ? !1
    : Oe(t, {
        0() {
          return e.matches(yc);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(yc)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var _v = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(_v || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function Ov(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Dv() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function jv() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Fv() {
  return Dv() || jv();
}
function Kl(e, t, n) {
  let r = _t(t);
  g.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Mv(e, t, n) {
  let r = _t(t);
  g.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function zv(e, t, n = !0) {
  let r = g.useRef(!1);
  g.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, a) {
    if (!r.current || i.defaultPrevented) return;
    let u = a(i);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let s = (function c(p) {
      return typeof p == "function"
        ? c(p())
        : Array.isArray(p) || p instanceof Set
        ? p
        : [p];
    })(e);
    for (let c of s) {
      if (c === null) continue;
      let p = c instanceof HTMLElement ? c : c.current;
      if (
        (p != null && p.contains(u)) ||
        (i.composed && i.composedPath().includes(p))
      )
        return;
    }
    return !sp(u, Hu.Loose) && u.tabIndex !== -1 && i.preventDefault(), t(i, u);
  }
  let o = g.useRef(null);
  Kl(
    "pointerdown",
    (i) => {
      var a, u;
      r.current &&
        (o.current =
          ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
            ? void 0
            : u[0]) || i.target);
    },
    !0
  ),
    Kl(
      "mousedown",
      (i) => {
        var a, u;
        r.current &&
          (o.current =
            ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
              ? void 0
              : u[0]) || i.target);
      },
      !0
    ),
    Kl(
      "click",
      (i) => {
        Fv() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0
    ),
    Kl(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    Mv(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function wc(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Iv(e, t) {
  let [n, r] = g.useState(() => wc(e));
  return (
    rt(() => {
      r(wc(e));
    }, [e.type, e.as]),
    rt(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let $v = Symbol();
function Un(...e) {
  let t = g.useRef(e);
  g.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ee((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[$v])) ? void 0 : n;
}
function xc(e) {
  return [e.screenX, e.screenY];
}
function Uv() {
  let e = g.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = xc(t);
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0);
    },
    update(t) {
      e.current = xc(t);
    },
  };
}
function Do(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var jo = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(jo || {}),
  tn = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(tn || {});
function gn({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: a,
}) {
  a = a ?? Av;
  let u = cp(t, e);
  if (o) return bl(u, n, r, i, a);
  let s = l ?? 0;
  if (s & 2) {
    let { static: c = !1, ...p } = u;
    if (c) return bl(p, n, r, i, a);
  }
  if (s & 1) {
    let { unmount: c = !0, ...p } = u;
    return Oe(c ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return bl({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, a);
      },
    });
  }
  return bl(u, n, r, i, a);
}
function bl(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: a = "ref",
      ...u
    } = Ii(e, ["unmount", "static"]),
    s = e.ref !== void 0 ? { [a]: e.ref } : {},
    c = typeof i == "function" ? i(t) : i;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let p = {};
  if (t) {
    let h = !1,
      E = [];
    for (let [y, x] of Object.entries(t))
      typeof x == "boolean" && (h = !0), x === !0 && E.push(y);
    h && (p["data-headlessui-state"] = E.join(" "));
  }
  if (o === g.Fragment && Object.keys(Ua(u)).length > 0) {
    if (!g.isValidElement(c) || (Array.isArray(c) && c.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((x) => `  - ${x}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((x) => `  - ${x}`).join(`
`),
        ].join(`
`)
      );
    let h = c.props,
      E =
        typeof (h == null ? void 0 : h.className) == "function"
          ? (...x) => Do(h == null ? void 0 : h.className(...x), u.className)
          : Do(h == null ? void 0 : h.className, u.className),
      y = E ? { className: E } : {};
    return g.cloneElement(
      c,
      Object.assign(
        {},
        cp(c.props, Ua(Ii(u, ["ref"]))),
        p,
        s,
        { ref: l(c.ref, s.ref) },
        y
      )
    );
  }
  return g.createElement(
    o,
    Object.assign(
      {},
      Ii(u, ["ref"]),
      o !== g.Fragment && s,
      o !== g.Fragment && p
    ),
    c
  );
}
function Av(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function cp(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let a of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          a(l, ...o);
        }
      },
    });
  return t;
}
function Bt(e) {
  var t;
  return Object.assign(g.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Ua(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Ii(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let Bv = "div";
var dp = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(dp || {});
function Hv(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    o = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
      },
    };
  return gn({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: Bv,
    name: "Hidden",
  });
}
let Vv = Bt(Hv),
  Vu = g.createContext(null);
Vu.displayName = "OpenClosedContext";
var qe = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(qe || {});
function Wu() {
  return g.useContext(Vu);
}
function fp({ value: e, children: t }) {
  return Ee.createElement(Vu.Provider, { value: e }, t);
}
function Wv(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Qv(n) ? !1 : r;
}
function Qv(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function Kv(e) {
  throw new Error("Unexpected object: " + e);
}
var Ke = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(Ke || {});
function bv(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    l = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 1: {
      for (let o = l - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 2: {
      for (let o = l + 1; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o)
        if (t.resolveId(n[o], o, n) === e.id) return o;
      return r;
    }
    case 5:
      return null;
    default:
      Kv(e);
  }
}
function pp(e = {}, t = null, n = []) {
  for (let [r, l] of Object.entries(e)) mp(n, hp(t, r), l);
  return n;
}
function hp(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function mp(e, t, n) {
  if (Array.isArray(n))
    for (let [r, l] of n.entries()) mp(e, hp(t, r.toString()), l);
  else
    n instanceof Date
      ? e.push([t, n.toISOString()])
      : typeof n == "boolean"
      ? e.push([t, n ? "1" : "0"])
      : typeof n == "string"
      ? e.push([t, n])
      : typeof n == "number"
      ? e.push([t, `${n}`])
      : n == null
      ? e.push([t, ""])
      : pp(n, t, e);
}
var Pe = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Pe || {});
function Qu() {
  let e = g.useRef(!1);
  return (
    rt(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
let Sc =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ec(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "",
    l = e.cloneNode(!0);
  if (!(l instanceof HTMLElement)) return r;
  let o = !1;
  for (let a of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), (o = !0);
  let i = o ? ((n = l.innerText) != null ? n : "") : r;
  return Sc.test(i) && (i = i.replace(Sc, "")), i;
}
function Yv(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n
      .split(" ")
      .map((l) => {
        let o = document.getElementById(l);
        if (o) {
          let i = o.getAttribute("aria-label");
          return typeof i == "string" ? i.trim() : Ec(o).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Ec(e).trim();
}
function Gv(e) {
  let t = g.useRef(""),
    n = g.useRef("");
  return ee(() => {
    let r = e.current;
    if (!r) return "";
    let l = r.innerText;
    if (t.current === l) return n.current;
    let o = Yv(r).trim().toLowerCase();
    return (t.current = l), (n.current = o), o;
  });
}
var Xv = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Xv || {}),
  Zv = ((e) => (
    (e[(e.Single = 0)] = "Single"), (e[(e.Multi = 1)] = "Multi"), e
  ))(Zv || {}),
  Jv = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(Jv || {}),
  qv = ((e) => (
    (e[(e.OpenListbox = 0)] = "OpenListbox"),
    (e[(e.CloseListbox = 1)] = "CloseListbox"),
    (e[(e.GoToOption = 2)] = "GoToOption"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterOption = 5)] = "RegisterOption"),
    (e[(e.UnregisterOption = 6)] = "UnregisterOption"),
    (e[(e.RegisterLabel = 7)] = "RegisterLabel"),
    e
  ))(qv || {});
function $i(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = Ov(t(e.options.slice()), (o) => o.dataRef.current.domRef.current),
    l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), { options: r, activeOptionIndex: l };
}
let eg = {
    1(e) {
      return e.dataRef.current.disabled || e.listboxState === 1
        ? e
        : { ...e, activeOptionIndex: null, listboxState: 1 };
    },
    0(e) {
      if (e.dataRef.current.disabled || e.listboxState === 0) return e;
      let t = e.activeOptionIndex,
        { isSelected: n } = e.dataRef.current,
        r = e.options.findIndex((l) => n(l.dataRef.current.value));
      return (
        r !== -1 && (t = r), { ...e, listboxState: 0, activeOptionIndex: t }
      );
    },
    2(e, t) {
      var n;
      if (e.dataRef.current.disabled || e.listboxState === 1) return e;
      let r = $i(e),
        l = bv(t, {
          resolveItems: () => r.options,
          resolveActiveIndex: () => r.activeOptionIndex,
          resolveId: (o) => o.id,
          resolveDisabled: (o) => o.dataRef.current.disabled,
        });
      return {
        ...e,
        ...r,
        searchQuery: "",
        activeOptionIndex: l,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      };
    },
    3: (e, t) => {
      if (e.dataRef.current.disabled || e.listboxState === 1) return e;
      let n = e.searchQuery !== "" ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        l = (
          e.activeOptionIndex !== null
            ? e.options
                .slice(e.activeOptionIndex + n)
                .concat(e.options.slice(0, e.activeOptionIndex + n))
            : e.options
        ).find((i) => {
          var a;
          return (
            !i.dataRef.current.disabled &&
            ((a = i.dataRef.current.textValue) == null
              ? void 0
              : a.startsWith(r))
          );
        }),
        o = l ? e.options.indexOf(l) : -1;
      return o === -1 || o === e.activeOptionIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeOptionIndex: o, activationTrigger: 1 };
    },
    4(e) {
      return e.dataRef.current.disabled ||
        e.listboxState === 1 ||
        e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "" };
    },
    5: (e, t) => {
      let n = { id: t.id, dataRef: t.dataRef },
        r = $i(e, (l) => [...l, n]);
      return (
        e.activeOptionIndex === null &&
          e.dataRef.current.isSelected(t.dataRef.current.value) &&
          (r.activeOptionIndex = r.options.indexOf(n)),
        { ...e, ...r }
      );
    },
    6: (e, t) => {
      let n = $i(e, (r) => {
        let l = r.findIndex((o) => o.id === t.id);
        return l !== -1 && r.splice(l, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
    7: (e, t) => ({ ...e, labelId: t.id }),
  },
  Ku = g.createContext(null);
Ku.displayName = "ListboxActionsContext";
function xl(e) {
  let t = g.useContext(Ku);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, xl), n);
  }
  return t;
}
let bu = g.createContext(null);
bu.displayName = "ListboxDataContext";
function Sl(e) {
  let t = g.useContext(bu);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Sl), n);
  }
  return t;
}
function tg(e, t) {
  return Oe(t.type, eg, e, t);
}
let ng = g.Fragment;
function rg(e, t) {
  let {
    value: n,
    defaultValue: r,
    form: l,
    name: o,
    onChange: i,
    by: a = (z, Y) => z === Y,
    disabled: u = !1,
    horizontal: s = !1,
    multiple: c = !1,
    ...p
  } = e;
  const h = s ? "horizontal" : "vertical";
  let E = Un(t),
    [y = c ? [] : void 0, x] = Cv(n, i, r),
    [S, d] = g.useReducer(tg, {
      dataRef: g.createRef(),
      listboxState: 1,
      options: [],
      searchQuery: "",
      labelId: null,
      activeOptionIndex: null,
      activationTrigger: 1,
    }),
    f = g.useRef({ static: !1, hold: !1 }),
    m = g.useRef(null),
    C = g.useRef(null),
    _ = g.useRef(null),
    v = ee(
      typeof a == "string"
        ? (z, Y) => {
            let te = a;
            return (
              (z == null ? void 0 : z[te]) === (Y == null ? void 0 : Y[te])
            );
          }
        : a
    ),
    P = g.useCallback(
      (z) => Oe(L.mode, { 1: () => y.some((Y) => v(Y, z)), 0: () => v(y, z) }),
      [y]
    ),
    L = g.useMemo(
      () => ({
        ...S,
        value: y,
        disabled: u,
        mode: c ? 1 : 0,
        orientation: h,
        compare: v,
        isSelected: P,
        optionsPropsRef: f,
        labelRef: m,
        buttonRef: C,
        optionsRef: _,
      }),
      [y, u, c, S]
    );
  rt(() => {
    S.dataRef.current = L;
  }, [L]),
    zv(
      [L.buttonRef, L.optionsRef],
      (z, Y) => {
        var te;
        d({ type: 1 }),
          sp(Y, Hu.Loose) ||
            (z.preventDefault(),
            (te = L.buttonRef.current) == null || te.focus());
      },
      L.listboxState === 0
    );
  let F = g.useMemo(
      () => ({ open: L.listboxState === 0, disabled: u, value: y }),
      [L, u, y]
    ),
    I = ee((z) => {
      let Y = L.options.find((te) => te.id === z);
      Y && Z(Y.dataRef.current.value);
    }),
    W = ee(() => {
      if (L.activeOptionIndex !== null) {
        let { dataRef: z, id: Y } = L.options[L.activeOptionIndex];
        Z(z.current.value), d({ type: 2, focus: Ke.Specific, id: Y });
      }
    }),
    le = ee(() => d({ type: 0 })),
    oe = ee(() => d({ type: 1 })),
    Fe = ee((z, Y, te) =>
      z === Ke.Specific
        ? d({ type: 2, focus: Ke.Specific, id: Y, trigger: te })
        : d({ type: 2, focus: z, trigger: te })
    ),
    mt = ee(
      (z, Y) => (d({ type: 5, id: z, dataRef: Y }), () => d({ type: 6, id: z }))
    ),
    it = ee((z) => (d({ type: 7, id: z }), () => d({ type: 7, id: null }))),
    Z = ee((z) =>
      Oe(L.mode, {
        0() {
          return x == null ? void 0 : x(z);
        },
        1() {
          let Y = L.value.slice(),
            te = Y.findIndex((Xe) => v(Xe, z));
          return (
            te === -1 ? Y.push(z) : Y.splice(te, 1), x == null ? void 0 : x(Y)
          );
        },
      })
    ),
    D = ee((z) => d({ type: 3, value: z })),
    A = ee(() => d({ type: 4 })),
    U = g.useMemo(
      () => ({
        onChange: Z,
        registerOption: mt,
        registerLabel: it,
        goToOption: Fe,
        closeListbox: oe,
        openListbox: le,
        selectActiveOption: W,
        selectOption: I,
        search: D,
        clearSearch: A,
      }),
      []
    ),
    K = { ref: E },
    b = g.useRef(null),
    Ve = gr();
  return (
    g.useEffect(() => {
      b.current &&
        r !== void 0 &&
        Ve.addEventListener(b.current, "reset", () => {
          x == null || x(r);
        });
    }, [b, x]),
    Ee.createElement(
      Ku.Provider,
      { value: U },
      Ee.createElement(
        bu.Provider,
        { value: L },
        Ee.createElement(
          fp,
          { value: Oe(L.listboxState, { 0: qe.Open, 1: qe.Closed }) },
          o != null &&
            y != null &&
            pp({ [o]: y }).map(([z, Y], te) =>
              Ee.createElement(Vv, {
                features: dp.Hidden,
                ref:
                  te === 0
                    ? (Xe) => {
                        var Cl;
                        b.current =
                          (Cl = Xe == null ? void 0 : Xe.closest("form")) !=
                          null
                            ? Cl
                            : null;
                      }
                    : void 0,
                ...Ua({
                  key: z,
                  as: "input",
                  type: "hidden",
                  hidden: !0,
                  readOnly: !0,
                  form: l,
                  name: z,
                  value: Y,
                }),
              })
            ),
          gn({
            ourProps: K,
            theirProps: p,
            slot: F,
            defaultTag: ng,
            name: "Listbox",
          })
        )
      )
    )
  );
}
let lg = "button";
function og(e, t) {
  var n;
  let r = Jo(),
    { id: l = `headlessui-listbox-button-${r}`, ...o } = e,
    i = Sl("Listbox.Button"),
    a = xl("Listbox.Button"),
    u = Un(i.buttonRef, t),
    s = gr(),
    c = ee((S) => {
      switch (S.key) {
        case Pe.Space:
        case Pe.Enter:
        case Pe.ArrowDown:
          S.preventDefault(),
            a.openListbox(),
            s.nextFrame(() => {
              i.value || a.goToOption(Ke.First);
            });
          break;
        case Pe.ArrowUp:
          S.preventDefault(),
            a.openListbox(),
            s.nextFrame(() => {
              i.value || a.goToOption(Ke.Last);
            });
          break;
      }
    }),
    p = ee((S) => {
      switch (S.key) {
        case Pe.Space:
          S.preventDefault();
          break;
      }
    }),
    h = ee((S) => {
      if (Wv(S.currentTarget)) return S.preventDefault();
      i.listboxState === 0
        ? (a.closeListbox(),
          s.nextFrame(() => {
            var d;
            return (d = i.buttonRef.current) == null
              ? void 0
              : d.focus({ preventScroll: !0 });
          }))
        : (S.preventDefault(), a.openListbox());
    }),
    E = ap(() => {
      if (i.labelId) return [i.labelId, l].join(" ");
    }, [i.labelId, l]),
    y = g.useMemo(
      () => ({
        open: i.listboxState === 0,
        disabled: i.disabled,
        value: i.value,
      }),
      [i]
    ),
    x = {
      ref: u,
      id: l,
      type: Iv(e, i.buttonRef),
      "aria-haspopup": "listbox",
      "aria-controls": (n = i.optionsRef.current) == null ? void 0 : n.id,
      "aria-expanded": i.listboxState === 0,
      "aria-labelledby": E,
      disabled: i.disabled,
      onKeyDown: c,
      onKeyUp: p,
      onClick: h,
    };
  return gn({
    ourProps: x,
    theirProps: o,
    slot: y,
    defaultTag: lg,
    name: "Listbox.Button",
  });
}
let ig = "label";
function ag(e, t) {
  let n = Jo(),
    { id: r = `headlessui-listbox-label-${n}`, ...l } = e,
    o = Sl("Listbox.Label"),
    i = xl("Listbox.Label"),
    a = Un(o.labelRef, t);
  rt(() => i.registerLabel(r), [r]);
  let u = ee(() => {
      var c;
      return (c = o.buttonRef.current) == null
        ? void 0
        : c.focus({ preventScroll: !0 });
    }),
    s = g.useMemo(
      () => ({ open: o.listboxState === 0, disabled: o.disabled }),
      [o]
    );
  return gn({
    ourProps: { ref: a, id: r, onClick: u },
    theirProps: l,
    slot: s,
    defaultTag: ig,
    name: "Listbox.Label",
  });
}
let ug = "ul",
  sg = jo.RenderStrategy | jo.Static;
function cg(e, t) {
  var n;
  let r = Jo(),
    { id: l = `headlessui-listbox-options-${r}`, ...o } = e,
    i = Sl("Listbox.Options"),
    a = xl("Listbox.Options"),
    u = Un(i.optionsRef, t),
    s = gr(),
    c = gr(),
    p = Wu(),
    h = p !== null ? (p & qe.Open) === qe.Open : i.listboxState === 0;
  g.useEffect(() => {
    var d;
    let f = i.optionsRef.current;
    f &&
      i.listboxState === 0 &&
      f !== ((d = up(f)) == null ? void 0 : d.activeElement) &&
      f.focus({ preventScroll: !0 });
  }, [i.listboxState, i.optionsRef]);
  let E = ee((d) => {
      switch ((c.dispose(), d.key)) {
        case Pe.Space:
          if (i.searchQuery !== "")
            return d.preventDefault(), d.stopPropagation(), a.search(d.key);
        case Pe.Enter:
          if (
            (d.preventDefault(),
            d.stopPropagation(),
            i.activeOptionIndex !== null)
          ) {
            let { dataRef: f } = i.options[i.activeOptionIndex];
            a.onChange(f.current.value);
          }
          i.mode === 0 &&
            (a.closeListbox(),
            pn().nextFrame(() => {
              var f;
              return (f = i.buttonRef.current) == null
                ? void 0
                : f.focus({ preventScroll: !0 });
            }));
          break;
        case Oe(i.orientation, {
          vertical: Pe.ArrowDown,
          horizontal: Pe.ArrowRight,
        }):
          return d.preventDefault(), d.stopPropagation(), a.goToOption(Ke.Next);
        case Oe(i.orientation, {
          vertical: Pe.ArrowUp,
          horizontal: Pe.ArrowLeft,
        }):
          return (
            d.preventDefault(), d.stopPropagation(), a.goToOption(Ke.Previous)
          );
        case Pe.Home:
        case Pe.PageUp:
          return (
            d.preventDefault(), d.stopPropagation(), a.goToOption(Ke.First)
          );
        case Pe.End:
        case Pe.PageDown:
          return d.preventDefault(), d.stopPropagation(), a.goToOption(Ke.Last);
        case Pe.Escape:
          return (
            d.preventDefault(),
            d.stopPropagation(),
            a.closeListbox(),
            s.nextFrame(() => {
              var f;
              return (f = i.buttonRef.current) == null
                ? void 0
                : f.focus({ preventScroll: !0 });
            })
          );
        case Pe.Tab:
          d.preventDefault(), d.stopPropagation();
          break;
        default:
          d.key.length === 1 &&
            (a.search(d.key), c.setTimeout(() => a.clearSearch(), 350));
          break;
      }
    }),
    y = ap(() => {
      var d;
      return (d = i.buttonRef.current) == null ? void 0 : d.id;
    }, [i.buttonRef.current]),
    x = g.useMemo(() => ({ open: i.listboxState === 0 }), [i]),
    S = {
      "aria-activedescendant":
        i.activeOptionIndex === null ||
        (n = i.options[i.activeOptionIndex]) == null
          ? void 0
          : n.id,
      "aria-multiselectable": i.mode === 1 ? !0 : void 0,
      "aria-labelledby": y,
      "aria-orientation": i.orientation,
      id: l,
      onKeyDown: E,
      role: "listbox",
      tabIndex: 0,
      ref: u,
    };
  return gn({
    ourProps: S,
    theirProps: o,
    slot: x,
    defaultTag: ug,
    features: sg,
    visible: h,
    name: "Listbox.Options",
  });
}
let dg = "li";
function fg(e, t) {
  let n = Jo(),
    {
      id: r = `headlessui-listbox-option-${n}`,
      disabled: l = !1,
      value: o,
      ...i
    } = e,
    a = Sl("Listbox.Option"),
    u = xl("Listbox.Option"),
    s =
      a.activeOptionIndex !== null
        ? a.options[a.activeOptionIndex].id === r
        : !1,
    c = a.isSelected(o),
    p = g.useRef(null),
    h = Gv(p),
    E = _t({
      disabled: l,
      value: o,
      domRef: p,
      get textValue() {
        return h();
      },
    }),
    y = Un(t, p);
  rt(() => {
    if (a.listboxState !== 0 || !s || a.activationTrigger === 0) return;
    let v = pn();
    return (
      v.requestAnimationFrame(() => {
        var P, L;
        (L = (P = p.current) == null ? void 0 : P.scrollIntoView) == null ||
          L.call(P, { block: "nearest" });
      }),
      v.dispose
    );
  }, [p, s, a.listboxState, a.activationTrigger, a.activeOptionIndex]),
    rt(() => u.registerOption(r, E), [E, r]);
  let x = ee((v) => {
      if (l) return v.preventDefault();
      u.onChange(o),
        a.mode === 0 &&
          (u.closeListbox(),
          pn().nextFrame(() => {
            var P;
            return (P = a.buttonRef.current) == null
              ? void 0
              : P.focus({ preventScroll: !0 });
          }));
    }),
    S = ee(() => {
      if (l) return u.goToOption(Ke.Nothing);
      u.goToOption(Ke.Specific, r);
    }),
    d = Uv(),
    f = ee((v) => d.update(v)),
    m = ee((v) => {
      d.wasMoved(v) && (l || s || u.goToOption(Ke.Specific, r, 0));
    }),
    C = ee((v) => {
      d.wasMoved(v) && (l || (s && u.goToOption(Ke.Nothing)));
    }),
    _ = g.useMemo(() => ({ active: s, selected: c, disabled: l }), [s, c, l]);
  return gn({
    ourProps: {
      id: r,
      ref: y,
      role: "option",
      tabIndex: l === !0 ? void 0 : -1,
      "aria-disabled": l === !0 ? !0 : void 0,
      "aria-selected": c,
      disabled: void 0,
      onClick: x,
      onFocus: S,
      onPointerEnter: f,
      onMouseEnter: f,
      onPointerMove: m,
      onMouseMove: m,
      onPointerLeave: C,
      onMouseLeave: C,
    },
    theirProps: i,
    slot: _,
    defaultTag: dg,
    name: "Listbox.Option",
  });
}
let pg = Bt(rg),
  hg = Bt(og),
  mg = Bt(ag),
  vg = Bt(cg),
  gg = Bt(fg),
  Yl = Object.assign(pg, { Button: hg, Label: mg, Options: vg, Option: gg });
function yg(e = 0) {
  let [t, n] = g.useState(e),
    r = Qu(),
    l = g.useCallback(
      (u) => {
        r.current && n((s) => s | u);
      },
      [t, r]
    ),
    o = g.useCallback((u) => !!(t & u), [t]),
    i = g.useCallback(
      (u) => {
        r.current && n((s) => s & ~u);
      },
      [n, r]
    ),
    a = g.useCallback(
      (u) => {
        r.current && n((s) => s ^ u);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: a };
}
function wg(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Ui(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ai(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function xg(e, t) {
  let n = pn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((u) => {
      let [s = 0] = u
        .split(",")
        .filter(Boolean)
        .map((c) => (c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3))
        .sort((c, p) => p - c);
      return s;
    }),
    a = o + i;
  if (a !== 0) {
    n.group((s) => {
      s.setTimeout(() => {
        t(), s.dispose();
      }, a),
        s.addEventListener(e, "transitionrun", (c) => {
          c.target === c.currentTarget && s.dispose();
        });
    });
    let u = n.addEventListener(e, "transitionend", (s) => {
      s.target === s.currentTarget && (t(), u());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function Sg(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = pn(),
    i = r !== void 0 ? wg(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let a = Oe(l, { enter: () => t.enter, leave: () => t.leave }),
    u = Oe(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    s = Oe(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Ai(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    Ui(e, ...t.base, ...a, ...s),
    o.nextFrame(() => {
      Ai(e, ...t.base, ...a, ...s),
        Ui(e, ...t.base, ...a, ...u),
        xg(
          e,
          () => (Ai(e, ...t.base, ...a), Ui(e, ...t.base, ...t.entered), i())
        );
    }),
    o.dispose
  );
}
function Eg({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = Qu(),
    a = gr(),
    u = _t(n);
  rt(() => {
    e && (u.current = "enter");
  }, [e]),
    rt(() => {
      let s = pn();
      a.add(s.dispose);
      let c = t.current;
      if (c && u.current !== "idle" && i.current)
        return (
          s.dispose(),
          l.current(u.current),
          s.add(
            Sg(c, r.current, u.current === "enter", () => {
              s.dispose(), o.current(u.current);
            })
          ),
          s.dispose
        );
    }, [n]);
}
function bt(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let qo = g.createContext(null);
qo.displayName = "TransitionContext";
var kg = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(kg || {});
function Cg() {
  let e = g.useContext(qo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Rg() {
  let e = g.useContext(ei);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let ei = g.createContext(null);
ei.displayName = "NestingContext";
function ti(e) {
  return "children" in e
    ? ti(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function vp(e, t) {
  let n = _t(e),
    r = g.useRef([]),
    l = Qu(),
    o = gr(),
    i = ee((E, y = tn.Hidden) => {
      let x = r.current.findIndex(({ el: S }) => S === E);
      x !== -1 &&
        (Oe(y, {
          [tn.Unmount]() {
            r.current.splice(x, 1);
          },
          [tn.Hidden]() {
            r.current[x].state = "hidden";
          },
        }),
        o.microTask(() => {
          var S;
          !ti(r) && l.current && ((S = n.current) == null || S.call(n));
        }));
    }),
    a = ee((E) => {
      let y = r.current.find(({ el: x }) => x === E);
      return (
        y
          ? y.state !== "visible" && (y.state = "visible")
          : r.current.push({ el: E, state: "visible" }),
        () => i(E, tn.Unmount)
      );
    }),
    u = g.useRef([]),
    s = g.useRef(Promise.resolve()),
    c = g.useRef({ enter: [], leave: [], idle: [] }),
    p = ee((E, y, x) => {
      u.current.splice(0),
        t &&
          (t.chains.current[y] = t.chains.current[y].filter(([S]) => S !== E)),
        t == null ||
          t.chains.current[y].push([
            E,
            new Promise((S) => {
              u.current.push(S);
            }),
          ]),
        t == null ||
          t.chains.current[y].push([
            E,
            new Promise((S) => {
              Promise.all(c.current[y].map(([d, f]) => f)).then(() => S());
            }),
          ]),
        y === "enter"
          ? (s.current = s.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => x(y)))
          : x(y);
    }),
    h = ee((E, y, x) => {
      Promise.all(c.current[y].splice(0).map(([S, d]) => d))
        .then(() => {
          var S;
          (S = u.current.shift()) == null || S();
        })
        .then(() => x(y));
    });
  return g.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: i,
      onStart: p,
      onStop: h,
      wait: s,
      chains: c,
    }),
    [a, i, r, p, h, c, s]
  );
}
function Pg() {}
let Lg = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function kc(e) {
  var t;
  let n = {};
  for (let r of Lg) n[r] = (t = e[r]) != null ? t : Pg;
  return n;
}
function Ng(e) {
  let t = g.useRef(kc(e));
  return (
    g.useEffect(() => {
      t.current = kc(e);
    }, [e]),
    t
  );
}
let Tg = "div",
  gp = jo.RenderStrategy;
function _g(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: o,
      beforeLeave: i,
      afterLeave: a,
      enter: u,
      enterFrom: s,
      enterTo: c,
      entered: p,
      leave: h,
      leaveFrom: E,
      leaveTo: y,
      ...x
    } = e,
    S = g.useRef(null),
    d = Un(S, t),
    f = (n = x.unmount) == null || n ? tn.Unmount : tn.Hidden,
    { show: m, appear: C, initial: _ } = Cg(),
    [v, P] = g.useState(m ? "visible" : "hidden"),
    L = Rg(),
    { register: F, unregister: I } = L;
  g.useEffect(() => F(S), [F, S]),
    g.useEffect(() => {
      if (f === tn.Hidden && S.current) {
        if (m && v !== "visible") {
          P("visible");
          return;
        }
        return Oe(v, { hidden: () => I(S), visible: () => F(S) });
      }
    }, [v, S, F, I, m, f]);
  let W = _t({
      base: bt(x.className),
      enter: bt(u),
      enterFrom: bt(s),
      enterTo: bt(c),
      entered: bt(p),
      leave: bt(h),
      leaveFrom: bt(E),
      leaveTo: bt(y),
    }),
    le = Ng({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: a }),
    oe = Bu();
  g.useEffect(() => {
    if (oe && v === "visible" && S.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [S, v, oe]);
  let Fe = _ && !C,
    mt = C && m && _,
    it = !oe || Fe ? "idle" : m ? "enter" : "leave",
    Z = yg(0),
    D = ee((z) =>
      Oe(z, {
        enter: () => {
          Z.addFlag(qe.Opening), le.current.beforeEnter();
        },
        leave: () => {
          Z.addFlag(qe.Closing), le.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    A = ee((z) =>
      Oe(z, {
        enter: () => {
          Z.removeFlag(qe.Opening), le.current.afterEnter();
        },
        leave: () => {
          Z.removeFlag(qe.Closing), le.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    U = vp(() => {
      P("hidden"), I(S);
    }, L),
    K = g.useRef(!1);
  Eg({
    immediate: mt,
    container: S,
    classes: W,
    direction: it,
    onStart: _t((z) => {
      (K.current = !0), U.onStart(S, z, D);
    }),
    onStop: _t((z) => {
      (K.current = !1),
        U.onStop(S, z, A),
        z === "leave" && !ti(U) && (P("hidden"), I(S));
    }),
  });
  let b = x,
    Ve = { ref: d };
  return (
    mt
      ? (b = {
          ...b,
          className: Do(
            x.className,
            ...W.current.enter,
            ...W.current.enterFrom
          ),
        })
      : K.current &&
        ((b.className = Do(
          x.className,
          (r = S.current) == null ? void 0 : r.className
        )),
        b.className === "" && delete b.className),
    Ee.createElement(
      ei.Provider,
      { value: U },
      Ee.createElement(
        fp,
        { value: Oe(v, { visible: qe.Open, hidden: qe.Closed }) | Z.flags },
        gn({
          ourProps: Ve,
          theirProps: b,
          defaultTag: Tg,
          features: gp,
          visible: v === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function Og(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = g.useRef(null),
    a = Un(i, t);
  Bu();
  let u = Wu();
  if (
    (n === void 0 && u !== null && (n = (u & qe.Open) === qe.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [s, c] = g.useState(n ? "visible" : "hidden"),
    p = vp(() => {
      c("hidden");
    }),
    [h, E] = g.useState(!0),
    y = g.useRef([n]);
  rt(() => {
    h !== !1 &&
      y.current[y.current.length - 1] !== n &&
      (y.current.push(n), E(!1));
  }, [y, n]);
  let x = g.useMemo(() => ({ show: n, appear: r, initial: h }), [n, r, h]);
  g.useEffect(() => {
    if (n) c("visible");
    else if (!ti(p)) c("hidden");
    else {
      let m = i.current;
      if (!m) return;
      let C = m.getBoundingClientRect();
      C.x === 0 && C.y === 0 && C.width === 0 && C.height === 0 && c("hidden");
    }
  }, [n, p]);
  let S = { unmount: l },
    d = ee(() => {
      var m;
      h && E(!1), (m = e.beforeEnter) == null || m.call(e);
    }),
    f = ee(() => {
      var m;
      h && E(!1), (m = e.beforeLeave) == null || m.call(e);
    });
  return Ee.createElement(
    ei.Provider,
    { value: p },
    Ee.createElement(
      qo.Provider,
      { value: x },
      gn({
        ourProps: {
          ...S,
          as: g.Fragment,
          children: Ee.createElement(yp, {
            ref: a,
            ...S,
            ...o,
            beforeEnter: d,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: g.Fragment,
        features: gp,
        visible: s === "visible",
        name: "Transition",
      })
    )
  );
}
function Dg(e, t) {
  let n = g.useContext(qo) !== null,
    r = Wu() !== null;
  return Ee.createElement(
    Ee.Fragment,
    null,
    !n && r
      ? Ee.createElement(Aa, { ref: t, ...e })
      : Ee.createElement(yp, { ref: t, ...e })
  );
}
let Aa = Bt(Og),
  yp = Bt(_g),
  jg = Bt(Dg),
  Fg = Object.assign(Aa, { Child: jg, Root: Aa });
function Mg({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? g.createElement("title", { id: t }, e) : null,
    g.createElement("path", {
      fillRule: "evenodd",
      d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
      clipRule: "evenodd",
    })
  );
}
const zg = g.forwardRef(Mg),
  Ig = zg;
function $g({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? g.createElement("title", { id: t }, e) : null,
    g.createElement("path", {
      fillRule: "evenodd",
      d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
      clipRule: "evenodd",
    })
  );
}
const Ug = g.forwardRef($g),
  Ag = Ug;
function Bi(...e) {
  return e.filter(Boolean).join(" ");
}
function Bg({ choices: e, type: t, form: n, setForm: r }) {
  const [l, o] = g.useState(e[0]);
  function i(a) {
    const u = a;
    o(u), r({ ...n, [t]: u });
  }
  return T.jsx(Yl, {
    value: l,
    onChange: (a) => i(a),
    children: ({ open: a }) =>
      T.jsx(T.Fragment, {
        children: T.jsxs("div", {
          className: "relative mt-2 w-44",
          children: [
            T.jsxs(Yl.Button, {
              className:
                "relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6",
              children: [
                T.jsxs("span", {
                  className: "flex items-center",
                  children: [
                    T.jsx("img", {
                      src: l.avatar,
                      alt: "",
                      className: "h-5 w-5 flex-shrink-0 rounded-full",
                    }),
                    T.jsx("span", {
                      className: "ml-3 block truncate",
                      children: l,
                    }),
                  ],
                }),
                T.jsx("span", {
                  className:
                    "pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2",
                  children: T.jsx(Ag, {
                    className: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true",
                  }),
                }),
              ],
            }),
            T.jsx(Fg, {
              show: a,
              as: g.Fragment,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: T.jsx(Yl.Options, {
                className:
                  "absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                children: e.map((u, s) =>
                  T.jsx(
                    Yl.Option,
                    {
                      className: ({ active: c }) =>
                        Bi(
                          c ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        ),
                      value: u,
                      children: ({ selected: c, active: p }) =>
                        T.jsxs(T.Fragment, {
                          children: [
                            T.jsx("div", {
                              className: "flex items-center",
                              children: T.jsx("span", {
                                className: Bi(
                                  c ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                ),
                                children: u,
                              }),
                            }),
                            c
                              ? T.jsx("span", {
                                  className: Bi(
                                    p ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  ),
                                  children: T.jsx(Ig, {
                                    className: "h-5 w-5",
                                    "aria-hidden": "true",
                                  }),
                                })
                              : null,
                          ],
                        }),
                    },
                    s
                  )
                ),
              }),
            }),
          ],
        }),
      }),
  });
}
const Cc = {
    cleaningFrequency: ["one_time", "monthly", "bi_weekly"],
    productCondition: ["Good", "Dirty", "VeryDirty"],
  },
  Yu = "http://3.128.254.241/";
function Hg({
  setMessage: e,
  formResponse: t,
  setUserChoice: n,
  setIsLoading: r,
  setFormResponse: l,
}) {
  const o = new FormData(),
    [i, a] = g.useState({
      id: t.id,
      cleaningFrequency: "one_time",
      productCondition: "Good",
    }),
    u = async () => {
      o.append("id", i.id),
        o.append("cleaning_frequency", i.cleaningFrequency),
        o.append("product_condition", i.productCondition);
      const s = { method: "POST", body: o, redirect: "follow" };
      r(!0);
      try {
        const c = await fetch(Yu + "api/calculate/", s);
        if (c.ok) {
          const p = await c.text(),
            h = JSON.parse(p);
          console.log(h), n(h);
        } else {
          const p = await c.json();
          e(p.message);
        }
        r(!1);
      } catch (c) {
        e(JSON.stringify(c)), console.log("error", c);
      }
    };
  return T.jsx("div", {
    className: "bg-white",
    children: T.jsxs("div", {
      className:
        "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",
      children: [
        T.jsx("h2", {
          className:
            "text-2xl font-bold tracking-tight text-gray-900 text-center",
          children:
            "Select one of these items which has the most similarity to your product.",
        }),
        T.jsxs("div", {
          className:
            "py-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8  border-b-2",
          children: [
            t.map((s) => T.jsx(xv, { res: s, setForm: a, form: i }, s.id)),
            T.jsx("div", { className: " inline-block    border-gray-500" }),
          ],
        }),
        T.jsxs("div", {
          className: "sm:flex justify-center m-4  ",
          children: [
            T.jsx("div", {
              className:
                "mt-8 sm:flex justify-between  gap-2   sm:border-r-2 md:columns-3",
              children: Object.keys(Cc).map((s, c) =>
                T.jsxs(
                  "div",
                  {
                    className:
                      " m-4 flex flex-col justify-center col-span-2  items-center ",
                    children: [
                      T.jsxs("div", {
                        className: "text-sm text text-center",
                        children: ["Please select ", s],
                      }),
                      T.jsx(Bg, {
                        choices: Cc[s],
                        type: s,
                        setForm: a,
                        form: i,
                        index: c,
                      }),
                    ],
                  },
                  c
                )
              ),
            }),
            T.jsxs("div", {
              className: "flex flex-col gap-3 m-5 justify-center w-1/2",
              children: [
                T.jsx("button", {
                  onClick: u,
                  className: "  btn hover:shadow-lg transition-all duration-10",
                  children: "submit",
                }),
                T.jsxs("button", {
                  onClick: () => l(null),
                  className: "btn",
                  children: [" ", "Go back"],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Vg({
  isLoading: e,
  setIsLoading: t,
  setFormResponse: n,
  setMessage: r,
}) {
  const l = g.useRef(null),
    o = Yu + "api/",
    i = g.useRef(),
    [a, u] = g.useState({ searchQuery: null, imageUrl: null, userVoice: null }),
    s = new FormData(),
    c = async (y) => {
      y.preventDefault(),
        s.append("search_query", a.searchQuery),
        s.append("image_url", a.imageUrl),
        a.userVoice && s.append("user_voice", a.userVoice, a.userVoice.name);
      const x = { method: "POST", body: s, redirect: "follow" };
      t(!0);
      try {
        const S = await fetch(o, x);
        if (S.ok) {
          t(!1);
          const d = await S.text(),
            f = JSON.parse(d);
          n(f);
        } else {
          const d = await S.text();
          r(d.message);
        }
      } catch (S) {
        r(JSON.stringify(S)), console.log("error", S);
      }
    },
    p = (y) => {
      u({ ...a, [y.target.name]: y.target.files[0] });
    },
    h = (y) => {
      u({ ...a, [y.target.name]: y.target.value });
    },
    E = () => {
      l.current.click();
    };
  return T.jsxs("div", {
    className: " w-full flex justify-center",
    children: [
      T.jsx("div", {}),
      T.jsx("div", {
        className: " bg-slate-300 p-32 rounded-3xl shadow-lg w-full lg:w-2/3",
        children: T.jsxs("form", {
          ref: i,
          onSubmit: c,
          className: "w-full flex flex-col gap-7 mt-14 ",
          children: [
            T.jsxs("label", {
              htmlFor: "",
              className: "text-black-500 font-semibold ",
              children: [
                "Search Query",
                T.jsx("input", {
                  type: "text",
                  name: "searchQuery",
                  className: "input",
                  placeholder: "Ikea Sofa",
                  onChange: (y) => {
                    h(y);
                  },
                  required: !0,
                  value: a.name,
                }),
              ],
            }),
            T.jsxs("label", {
              htmlFor: "",
              className: " text-black  font-semibold",
              children: [
                "Image Url",
                T.jsx("input", {
                  type: "url",
                  name: "imageUrl",
                  className: "input",
                  placeholder:
                    "https://m.media-amazon.com/images/I/81oJ-QsjSUL._AC_UF1000,1000_QL80_.jpg",
                  required: !0,
                  onChange: h,
                  value: a.email,
                }),
              ],
            }),
            T.jsxs("label", {
              htmlFor: "",
              className: "text-black font-semibold ",
              children: [
                "User Voice",
                T.jsx("input", {
                  ref: l,
                  type: "file",
                  name: "userVoice",
                  className: "hidden",
                  placeholder: "Let me know how i can help you",
                  accept: ".mp3",
                  onChange: (y) => {
                    p(y);
                  },
                }),
                T.jsx("br", {}),
                T.jsx("div", {
                  className: "cursor-pointer btn",
                  onClick: E,
                  children: a.userVoice ? a.userVoice.name : "userVoice",
                }),
              ],
            }),
            T.jsx("button", {
              type: "submit",
              className: "btn-sub",
              children: e ? "Sending..." : "send message",
            }),
          ],
        }),
      }),
    ],
  });
}
function Wg({
  userChoice: e,
  setUserChoice: t,
  setFormResponse: n,
  setMessage: r,
}) {
  const [l, o] = g.useState(e.cleaning_price.toFixed(2)),
    i = () => {
      var a = new FormData();
      a.append("id", e.id), a.append("user_price", l);
      var u = { method: "POST", body: a, redirect: "follow" };
      fetch(Yu + "api/feedback/", u)
        .then((s) => s.text())
        .then((s) => {
          console.log(s), r("Thank you for contribution"), t(null), n(null);
        })
        .catch((s) => {
          console.log("error", s), r(s);
        });
    };
  return T.jsx("div", {
    className: "flex min-h-screen items-center justify-center ",
    children: T.jsxs("div", {
      className: "overflow-x-auto",
      children: [
        T.jsx("table", {
          className: "min-w-full bg-white shadow-md rounded-xl",
          children: T.jsxs("tbody", {
            className: "text-blue-gray-900",
            children: [
              T.jsxs("tr", {
                className: "border-b border-blue-gray-200",
                children: [
                  T.jsx("td", {
                    className: "py-3 px-4",
                    children: "Cleaning Frequency",
                  }),
                  T.jsx("td", {
                    className: "py-3 px-4",
                    children: e.cleaning_frequency,
                  }),
                ],
              }),
              T.jsxs("tr", {
                className: "border-b border-blue-gray-200",
                children: [
                  T.jsx("td", {
                    className: "py-3 px-4",
                    children: "Product Condition",
                  }),
                  T.jsx("td", {
                    className: "py-3 px-4",
                    children: e.product_condition,
                  }),
                ],
              }),
              T.jsxs("tr", {
                className: "border-b border-blue-gray-200",
                children: [
                  T.jsx("td", {
                    className: "py-3 px-4 font-medium",
                    children: "Total Cleaning Value",
                  }),
                  T.jsxs("td", {
                    className: "py-3 px-4 font-medium",
                    children: [e.currency_sign, l],
                  }),
                  T.jsx("td", { className: "py-3 px-4" }),
                ],
              }),
            ],
          }),
        }),
        T.jsxs("div", {
          className:
            "my-4 bg-slate-200 p-3 rounded-md flex flex-col items-center gap-2",
          children: [
            T.jsx("label", {
              htmlFor: "floatInput",
              children: "Have better price?",
            }),
            " ",
            T.jsx("br", {}),
            T.jsx("input", {
              value: l,
              onChange: (a) => o(a.target.value),
              className: " px-2 py-1",
              type: "number",
              id: "floatInput",
              name: "floatInput",
              step: "0.1",
              min: "0.00",
              placeholder: "enter your price",
            }),
            T.jsx("button", {
              onClick: i,
              className: "btn",
              children: "submit",
            }),
          ],
        }),
        T.jsxs("div", {
          className:
            "w-full flex justify-between gap-3 pt-5 px-4 mb-8 mx-auto ",
          children: [
            T.jsx("button", {
              onClick: () => t(null),
              className: "btn",
              children: "Go Back",
            }),
            T.jsx("button", {
              onClick: () => {
                t(null), n(null);
              },
              className: "btn",
              children: "Start Over",
            }),
          ],
        }),
      ],
    }),
  });
}
const Rc = () => {
  const [e, t] = g.useState(!1),
    [n, r] = g.useState(!1),
    [l, o] = g.useState(!1),
    [i, a] = g.useState(!1),
    [u, s] = g.useState(!1),
    c = () => {
      t(!1), r(null), a(null);
    };
  return T.jsxs("div", {
    className:
      "flex p-6 sm:p-28 flex-col justify-center items-center min-h-screen min-w[960px]",
    children: [
      n &&
        T.jsxs("div", {
          className: "text-lg   text-center flex flex-col gap-3  ",
          children: [
            "We have some trouble here The error is: ",
            T.jsx("br", {}),
            T.jsxs("div", {
              className: "  text-2xl text-red-700 font-bold font-poppins",
              children: [" ", n],
            }),
            T.jsx("div", {
              className: "btn-err hover:cursor-pointer w-12",
              onClick: c,
              children: "back to the Home",
            }),
          ],
        }),
      e && !n && T.jsx(wv, {}),
      !e &&
        !i &&
        !n &&
        T.jsx(Vg, {
          setMessage: r,
          setIsLoading: t,
          isLoading: e,
          setIfSubmit: o,
          setFormResponse: a,
        }),
      !e &&
        i &&
        !u &&
        !n &&
        T.jsx(Hg, {
          setMessage: r,
          formResponse: i,
          setUserChoice: s,
          setIsLoading: t,
          setFormResponse: a,
        }),
      !e &&
        u &&
        T.jsx(Wg, {
          userChoice: u,
          setUserChoice: s,
          setFormResponse: a,
          setMessage: r,
        }),
    ],
  });
};
function Qg() {
  return T.jsx("div", {
    className:
      "p-6 mt-8 h-12 flex w-full  gap-4 justify-center items-center absolute  ",
    children: T.jsx("h1", {
      className: "btn text-lg",
      children: "Cleaning service price calculator",
    }),
  });
}
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ge() {
  return (
    (ge = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ge.apply(this, arguments)
  );
}
var ye;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ye || (ye = {}));
const Pc = "popstate";
function Kg(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return hl(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : El(l);
  }
  return Yg(t, n, null, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function bg() {
  return Math.random().toString(36).substr(2, 8);
}
function Lc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function hl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ge(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ht(t) : t,
      { state: n, key: (t && t.key) || r || bg() }
    )
  );
}
function El(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ht(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = ye.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), i.replaceState(ge({}, i.state, { idx: s }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    a = ye.Pop;
    let S = c(),
      d = S == null ? null : S - s;
    (s = S), u && u({ action: a, location: x.location, delta: d });
  }
  function h(S, d) {
    a = ye.Push;
    let f = hl(x.location, S, d);
    n && n(f, S), (s = c() + 1);
    let m = Lc(f, s),
      C = x.createHref(f);
    try {
      i.pushState(m, "", C);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      l.location.assign(C);
    }
    o && u && u({ action: a, location: x.location, delta: 1 });
  }
  function E(S, d) {
    a = ye.Replace;
    let f = hl(x.location, S, d);
    n && n(f, S), (s = c());
    let m = Lc(f, s),
      C = x.createHref(f);
    i.replaceState(m, "", C),
      o && u && u({ action: a, location: x.location, delta: 0 });
  }
  function y(S) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof S == "string" ? S : El(S);
    return (
      J(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(S) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Pc, p),
        (u = S),
        () => {
          l.removeEventListener(Pc, p), (u = null);
        }
      );
    },
    createHref(S) {
      return t(l, S);
    },
    createURL: y,
    encodeLocation(S) {
      let d = y(S);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: E,
    go(S) {
      return i.go(S);
    },
  };
  return x;
}
var me;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(me || (me = {}));
const Gg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Xg(e) {
  return e.index === !0;
}
function Ba(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (J(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        J(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Xg(l))
      ) {
        let u = ge({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ge({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = Ba(l.children, t, i, r)), u
        );
      }
    })
  );
}
function nr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ht(t) : t,
    l = kl(r.pathname || "/", n);
  if (l == null) return null;
  let o = wp(e);
  Jg(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = a0(o[a], c0(l));
  return i;
}
function Zg(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function wp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (J(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = _n([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (J(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      wp(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: o0(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of xp(o.path)) l(o, i, u);
    }),
    t
  );
}
function xp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = xp(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Jg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : i0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const qg = /^:\w+$/,
  e0 = 3,
  t0 = 2,
  n0 = 1,
  r0 = 10,
  l0 = -2,
  Nc = (e) => e === "*";
function o0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Nc) && (r += l0),
    t && (r += t0),
    n
      .filter((l) => !Nc(l))
      .reduce((l, o) => l + (qg.test(o) ? e0 : o === "" ? n0 : r0), r)
  );
}
function i0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function a0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = u0(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = a.route;
    o.push({
      params: r,
      pathname: _n([l, c.pathname]),
      pathnameBase: v0(_n([l, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (l = _n([l, c.pathnameBase]));
  }
  return o;
}
function u0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = s0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, c, p) => {
      let { paramName: h, isOptional: E } = c;
      if (h === "*") {
        let x = a[p] || "";
        i = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[p];
      return E && !y ? (s[h] = void 0) : (s[h] = d0(y || "", h)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function s0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    zn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function c0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      zn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function d0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      zn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function kl(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function f0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ht(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : p0(n, t)) : t,
    search: g0(r),
    hash: y0(l),
  };
}
function p0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Hi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Sp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function h0(e, t) {
  let n = Sp(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function m0(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ht(e))
    : ((l = ge({}, e)),
      J(
        !l.pathname || !l.pathname.includes("?"),
        Hi("?", "pathname", "search", l)
      ),
      J(
        !l.pathname || !l.pathname.includes("#"),
        Hi("#", "pathname", "hash", l)
      ),
      J(!l.search || !l.search.includes("#"), Hi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (p -= 1);
      l.pathname = h.join("/");
    }
    a = p >= 0 ? t[p] : "/";
  }
  let u = f0(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const _n = (e) => e.join("/").replace(/\/\/+/g, "/"),
  v0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  g0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  y0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Gu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ep(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const kp = ["post", "put", "patch", "delete"],
  w0 = new Set(kp),
  x0 = ["get", ...kp],
  S0 = new Set(x0),
  E0 = new Set([301, 302, 303, 307, 308]),
  k0 = new Set([307, 308]),
  Vi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  C0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Dr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Cp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  R0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Rp = "remix-router-transitions";
function P0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  J(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    l = (k) => ({ hasErrorBoundary: w(k) });
  } else l = R0;
  let o = {},
    i = Ba(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = ge(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    p = new Set(),
    h = null,
    E = null,
    y = null,
    x = e.hydrationData != null,
    S = nr(i, e.history.location, u),
    d = null;
  if (S == null) {
    let w = ut(404, { pathname: e.history.location.pathname }),
      { matches: k, route: R } = zc(i);
    (S = k), (d = { [R.id]: w });
  }
  let f,
    m = S.some((w) => w.route.lazy),
    C = S.some((w) => w.route.loader);
  if (m) f = !1;
  else if (!C) f = !0;
  else if (s.v7_partialHydration) {
    let w = e.hydrationData ? e.hydrationData.loaderData : null,
      k = e.hydrationData ? e.hydrationData.errors : null;
    f = S.every(
      (R) =>
        R.route.loader &&
        R.route.loader.hydrate !== !0 &&
        ((w && w[R.route.id] !== void 0) || (k && k[R.route.id] !== void 0))
    );
  } else f = e.hydrationData != null;
  let _,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: f,
      navigation: Vi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = ye.Pop,
    L = !1,
    F,
    I = !1,
    W = new Map(),
    le = null,
    oe = !1,
    Fe = !1,
    mt = [],
    it = [],
    Z = new Map(),
    D = 0,
    A = -1,
    U = new Map(),
    K = new Set(),
    b = new Map(),
    Ve = new Map(),
    z = new Set(),
    Y = new Map(),
    te = new Map(),
    Xe = !1;
  function Cl() {
    if (
      ((c = e.history.listen((w) => {
        let { action: k, location: R, delta: O } = w;
        if (Xe) {
          Xe = !1;
          return;
        }
        zn(
          te.size === 0 || O != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let M = os({
          currentLocation: v.location,
          nextLocation: R,
          historyAction: k,
        });
        if (M && O != null) {
          (Xe = !0),
            e.history.go(O * -1),
            Pl(M, {
              state: "blocked",
              location: R,
              proceed() {
                Pl(M, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  e.history.go(O);
              },
              reset() {
                let Q = new Map(v.blockers);
                Q.set(M, Dr), Ze({ blockers: Q });
              },
            });
          return;
        }
        return yn(k, R);
      })),
      n)
    ) {
      I0(t, W);
      let w = () => $0(t, W);
      t.addEventListener("pagehide", w),
        (le = () => t.removeEventListener("pagehide", w));
    }
    return v.initialized || yn(ye.Pop, v.location, { initialHydration: !0 }), _;
  }
  function jp() {
    c && c(),
      le && le(),
      p.clear(),
      F && F.abort(),
      v.fetchers.forEach((w, k) => Rl(k)),
      v.blockers.forEach((w, k) => ls(k));
  }
  function Fp(w) {
    return p.add(w), () => p.delete(w);
  }
  function Ze(w, k) {
    k === void 0 && (k = {}), (v = ge({}, v, w));
    let R = [],
      O = [];
    s.v7_fetcherPersist &&
      v.fetchers.forEach((M, Q) => {
        M.state === "idle" && (z.has(Q) ? O.push(Q) : R.push(Q));
      }),
      [...p].forEach((M) =>
        M(v, {
          deletedFetchers: O,
          unstable_viewTransitionOpts: k.viewTransitionOpts,
          unstable_flushSync: k.flushSync === !0,
        })
      ),
      s.v7_fetcherPersist &&
        (R.forEach((M) => v.fetchers.delete(M)), O.forEach((M) => Rl(M)));
  }
  function Sr(w, k, R) {
    var O, M;
    let { flushSync: Q } = R === void 0 ? {} : R,
      H =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        wt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((O = w.state) == null ? void 0 : O._isRedirect) !== !0,
      B;
    k.actionData
      ? Object.keys(k.actionData).length > 0
        ? (B = k.actionData)
        : (B = null)
      : H
      ? (B = v.actionData)
      : (B = null);
    let $ = k.loaderData
        ? Mc(v.loaderData, k.loaderData, k.matches || [], k.errors)
        : v.loaderData,
      X = v.blockers;
    X.size > 0 && ((X = new Map(X)), X.forEach((ie, Te) => X.set(Te, Dr)));
    let Ce =
      L === !0 ||
      (v.navigation.formMethod != null &&
        wt(v.navigation.formMethod) &&
        ((M = w.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      oe ||
        P === ye.Pop ||
        (P === ye.Push
          ? e.history.push(w, w.state)
          : P === ye.Replace && e.history.replace(w, w.state));
    let V;
    if (P === ye.Pop) {
      let ie = W.get(v.location.pathname);
      ie && ie.has(w.pathname)
        ? (V = { currentLocation: v.location, nextLocation: w })
        : W.has(w.pathname) &&
          (V = { currentLocation: w, nextLocation: v.location });
    } else if (I) {
      let ie = W.get(v.location.pathname);
      ie
        ? ie.add(w.pathname)
        : ((ie = new Set([w.pathname])), W.set(v.location.pathname, ie)),
        (V = { currentLocation: v.location, nextLocation: w });
    }
    Ze(
      ge({}, k, {
        actionData: B,
        loaderData: $,
        historyAction: P,
        location: w,
        initialized: !0,
        navigation: Vi,
        revalidation: "idle",
        restoreScrollPosition: as(w, k.matches || v.matches),
        preventScrollReset: Ce,
        blockers: X,
      }),
      { viewTransitionOpts: V, flushSync: Q === !0 }
    ),
      (P = ye.Pop),
      (L = !1),
      (I = !1),
      (oe = !1),
      (Fe = !1),
      (mt = []),
      (it = []);
  }
  async function Ju(w, k) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let R = Ha(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        w,
        s.v7_relativeSplatPath,
        k == null ? void 0 : k.fromRouteId,
        k == null ? void 0 : k.relative
      ),
      {
        path: O,
        submission: M,
        error: Q,
      } = Tc(s.v7_normalizeFormMethod, !1, R, k),
      H = v.location,
      B = hl(v.location, O, k && k.state);
    B = ge({}, B, e.history.encodeLocation(B));
    let $ = k && k.replace != null ? k.replace : void 0,
      X = ye.Push;
    $ === !0
      ? (X = ye.Replace)
      : $ === !1 ||
        (M != null &&
          wt(M.formMethod) &&
          M.formAction === v.location.pathname + v.location.search &&
          (X = ye.Replace));
    let Ce =
        k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
      V = (k && k.unstable_flushSync) === !0,
      ie = os({ currentLocation: H, nextLocation: B, historyAction: X });
    if (ie) {
      Pl(ie, {
        state: "blocked",
        location: B,
        proceed() {
          Pl(ie, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: B,
          }),
            Ju(w, k);
        },
        reset() {
          let Te = new Map(v.blockers);
          Te.set(ie, Dr), Ze({ blockers: Te });
        },
      });
      return;
    }
    return await yn(X, B, {
      submission: M,
      pendingError: Q,
      preventScrollReset: Ce,
      replace: k && k.replace,
      enableViewTransition: k && k.unstable_viewTransition,
      flushSync: V,
    });
  }
  function Mp() {
    if (
      (li(),
      Ze({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        yn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      yn(P || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function yn(w, k, R) {
    F && F.abort(),
      (F = null),
      (P = w),
      (oe = (R && R.startUninterruptedRevalidation) === !0),
      Wp(v.location, v.matches),
      (L = (R && R.preventScrollReset) === !0),
      (I = (R && R.enableViewTransition) === !0);
    let O = a || i,
      M = R && R.overrideNavigation,
      Q = nr(O, k, u),
      H = (R && R.flushSync) === !0;
    if (!Q) {
      let Te = ut(404, { pathname: k.pathname }),
        { matches: at, route: Re } = zc(O);
      oi(),
        Sr(
          k,
          { matches: at, loaderData: {}, errors: { [Re.id]: Te } },
          { flushSync: H }
        );
      return;
    }
    if (
      v.initialized &&
      !Fe &&
      O0(v.location, k) &&
      !(R && R.submission && wt(R.submission.formMethod))
    ) {
      Sr(k, { matches: Q }, { flushSync: H });
      return;
    }
    F = new AbortController();
    let B = Fr(e.history, k, F.signal, R && R.submission),
      $,
      X;
    if (R && R.pendingError) X = { [Xr(Q).route.id]: R.pendingError };
    else if (R && R.submission && wt(R.submission.formMethod)) {
      let Te = await zp(B, k, R.submission, Q, {
        replace: R.replace,
        flushSync: H,
      });
      if (Te.shortCircuited) return;
      ($ = Te.pendingActionData),
        (X = Te.pendingActionError),
        (M = Wi(k, R.submission)),
        (H = !1),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: Ce,
      loaderData: V,
      errors: ie,
    } = await Ip(
      B,
      k,
      Q,
      M,
      R && R.submission,
      R && R.fetcherSubmission,
      R && R.replace,
      R && R.initialHydration === !0,
      H,
      $,
      X
    );
    Ce ||
      ((F = null),
      Sr(
        k,
        ge({ matches: Q }, $ ? { actionData: $ } : {}, {
          loaderData: V,
          errors: ie,
        })
      ));
  }
  async function zp(w, k, R, O, M) {
    M === void 0 && (M = {}), li();
    let Q = M0(k, R);
    Ze({ navigation: Q }, { flushSync: M.flushSync === !0 });
    let H,
      B = Wa(O, k);
    if (!B.route.action && !B.route.lazy)
      H = {
        type: me.error,
        error: ut(405, {
          method: w.method,
          pathname: k.pathname,
          routeId: B.route.id,
        }),
      };
    else if (
      ((H = await jr("action", w, B, O, o, l, u, s.v7_relativeSplatPath)),
      w.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Pn(H)) {
      let $;
      return (
        M && M.replace != null
          ? ($ = M.replace)
          : ($ = H.location === v.location.pathname + v.location.search),
        await Er(v, H, { submission: R, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (rr(H)) {
      let $ = Xr(O, B.route.id);
      return (
        (M && M.replace) !== !0 && (P = ye.Push),
        { pendingActionData: {}, pendingActionError: { [$.route.id]: H.error } }
      );
    }
    if (Rn(H)) throw ut(400, { type: "defer-action" });
    return { pendingActionData: { [B.route.id]: H.data } };
  }
  async function Ip(w, k, R, O, M, Q, H, B, $, X, Ce) {
    let V = O || Wi(k, M),
      ie = M || Q || Uc(V),
      Te = a || i,
      [at, Re] = _c(
        e.history,
        v,
        R,
        ie,
        k,
        s.v7_partialHydration && B === !0,
        Fe,
        mt,
        it,
        z,
        b,
        K,
        Te,
        u,
        X,
        Ce
      );
    if (
      (oi(
        (re) =>
          !(R && R.some((ce) => ce.route.id === re)) ||
          (at && at.some((ce) => ce.route.id === re))
      ),
      (A = ++D),
      at.length === 0 && Re.length === 0)
    ) {
      let re = ns();
      return (
        Sr(
          k,
          ge(
            { matches: R, loaderData: {}, errors: Ce || null },
            X ? { actionData: X } : {},
            re ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!oe && (!s.v7_partialHydration || !B)) {
      Re.forEach((ce) => {
        let Ct = v.fetchers.get(ce.key),
          Nl = Mr(void 0, Ct ? Ct.data : void 0);
        v.fetchers.set(ce.key, Nl);
      });
      let re = X || v.actionData;
      Ze(
        ge(
          { navigation: V },
          re
            ? Object.keys(re).length === 0
              ? { actionData: null }
              : { actionData: re }
            : {},
          Re.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
        ),
        { flushSync: $ }
      );
    }
    Re.forEach((re) => {
      Z.has(re.key) && Wt(re.key),
        re.controller && Z.set(re.key, re.controller);
    });
    let An = () => Re.forEach((re) => Wt(re.key));
    F && F.signal.addEventListener("abort", An);
    let {
      results: ii,
      loaderResults: Bn,
      fetcherResults: Qt,
    } = await qu(v.matches, R, at, Re, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    F && F.signal.removeEventListener("abort", An),
      Re.forEach((re) => Z.delete(re.key));
    let wn = Ic(ii);
    if (wn) {
      if (wn.idx >= at.length) {
        let re = Re[wn.idx - at.length].key;
        K.add(re);
      }
      return await Er(v, wn.result, { replace: H }), { shortCircuited: !0 };
    }
    let { loaderData: ai, errors: ui } = Fc(v, R, at, Bn, Ce, Re, Qt, Y);
    Y.forEach((re, ce) => {
      re.subscribe((Ct) => {
        (Ct || re.done) && Y.delete(ce);
      });
    });
    let si = ns(),
      Hn = rs(A),
      Ll = si || Hn || Re.length > 0;
    return ge(
      { loaderData: ai, errors: ui },
      Ll ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function $p(w, k, R, O) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Z.has(w) && Wt(w);
    let M = (O && O.unstable_flushSync) === !0,
      Q = a || i,
      H = Ha(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        R,
        s.v7_relativeSplatPath,
        k,
        O == null ? void 0 : O.relative
      ),
      B = nr(Q, H, u);
    if (!B) {
      kr(w, k, ut(404, { pathname: H }), { flushSync: M });
      return;
    }
    let {
      path: $,
      submission: X,
      error: Ce,
    } = Tc(s.v7_normalizeFormMethod, !0, H, O);
    if (Ce) {
      kr(w, k, Ce, { flushSync: M });
      return;
    }
    let V = Wa(B, $);
    if (((L = (O && O.preventScrollReset) === !0), X && wt(X.formMethod))) {
      Up(w, k, $, V, B, M, X);
      return;
    }
    b.set(w, { routeId: k, path: $ }), Ap(w, k, $, V, B, M, X);
  }
  async function Up(w, k, R, O, M, Q, H) {
    if ((li(), b.delete(w), !O.route.action && !O.route.lazy)) {
      let ce = ut(405, { method: H.formMethod, pathname: R, routeId: k });
      kr(w, k, ce, { flushSync: Q });
      return;
    }
    let B = v.fetchers.get(w);
    Vt(w, z0(H, B), { flushSync: Q });
    let $ = new AbortController(),
      X = Fr(e.history, R, $.signal, H);
    Z.set(w, $);
    let Ce = D,
      V = await jr("action", X, O, M, o, l, u, s.v7_relativeSplatPath);
    if (X.signal.aborted) {
      Z.get(w) === $ && Z.delete(w);
      return;
    }
    if (s.v7_fetcherPersist && z.has(w)) {
      if (Pn(V) || rr(V)) {
        Vt(w, Yt(void 0));
        return;
      }
    } else {
      if (Pn(V))
        if ((Z.delete(w), A > Ce)) {
          Vt(w, Yt(void 0));
          return;
        } else
          return K.add(w), Vt(w, Mr(H)), Er(v, V, { fetcherSubmission: H });
      if (rr(V)) {
        kr(w, k, V.error);
        return;
      }
    }
    if (Rn(V)) throw ut(400, { type: "defer-action" });
    let ie = v.navigation.location || v.location,
      Te = Fr(e.history, ie, $.signal),
      at = a || i,
      Re =
        v.navigation.state !== "idle"
          ? nr(at, v.navigation.location, u)
          : v.matches;
    J(Re, "Didn't find any matches after fetcher action");
    let An = ++D;
    U.set(w, An);
    let ii = Mr(H, V.data);
    v.fetchers.set(w, ii);
    let [Bn, Qt] = _c(
      e.history,
      v,
      Re,
      H,
      ie,
      !1,
      Fe,
      mt,
      it,
      z,
      b,
      K,
      at,
      u,
      { [O.route.id]: V.data },
      void 0
    );
    Qt.filter((ce) => ce.key !== w).forEach((ce) => {
      let Ct = ce.key,
        Nl = v.fetchers.get(Ct),
        Kp = Mr(void 0, Nl ? Nl.data : void 0);
      v.fetchers.set(Ct, Kp),
        Z.has(Ct) && Wt(Ct),
        ce.controller && Z.set(Ct, ce.controller);
    }),
      Ze({ fetchers: new Map(v.fetchers) });
    let wn = () => Qt.forEach((ce) => Wt(ce.key));
    $.signal.addEventListener("abort", wn);
    let {
      results: ai,
      loaderResults: ui,
      fetcherResults: si,
    } = await qu(v.matches, Re, Bn, Qt, Te);
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", wn),
      U.delete(w),
      Z.delete(w),
      Qt.forEach((ce) => Z.delete(ce.key));
    let Hn = Ic(ai);
    if (Hn) {
      if (Hn.idx >= Bn.length) {
        let ce = Qt[Hn.idx - Bn.length].key;
        K.add(ce);
      }
      return Er(v, Hn.result);
    }
    let { loaderData: Ll, errors: re } = Fc(
      v,
      v.matches,
      Bn,
      ui,
      void 0,
      Qt,
      si,
      Y
    );
    if (v.fetchers.has(w)) {
      let ce = Yt(V.data);
      v.fetchers.set(w, ce);
    }
    rs(An),
      v.navigation.state === "loading" && An > A
        ? (J(P, "Expected pending action"),
          F && F.abort(),
          Sr(v.navigation.location, {
            matches: Re,
            loaderData: Ll,
            errors: re,
            fetchers: new Map(v.fetchers),
          }))
        : (Ze({
            errors: re,
            loaderData: Mc(v.loaderData, Ll, Re, re),
            fetchers: new Map(v.fetchers),
          }),
          (Fe = !1));
  }
  async function Ap(w, k, R, O, M, Q, H) {
    let B = v.fetchers.get(w);
    Vt(w, Mr(H, B ? B.data : void 0), { flushSync: Q });
    let $ = new AbortController(),
      X = Fr(e.history, R, $.signal);
    Z.set(w, $);
    let Ce = D,
      V = await jr("loader", X, O, M, o, l, u, s.v7_relativeSplatPath);
    if (
      (Rn(V) && (V = (await Np(V, X.signal, !0)) || V),
      Z.get(w) === $ && Z.delete(w),
      !X.signal.aborted)
    ) {
      if (z.has(w)) {
        Vt(w, Yt(void 0));
        return;
      }
      if (Pn(V))
        if (A > Ce) {
          Vt(w, Yt(void 0));
          return;
        } else {
          K.add(w), await Er(v, V);
          return;
        }
      if (rr(V)) {
        kr(w, k, V.error);
        return;
      }
      J(!Rn(V), "Unhandled fetcher deferred data"), Vt(w, Yt(V.data));
    }
  }
  async function Er(w, k, R) {
    let {
      submission: O,
      fetcherSubmission: M,
      replace: Q,
    } = R === void 0 ? {} : R;
    k.revalidate && (Fe = !0);
    let H = hl(w.location, k.location, { _isRedirect: !0 });
    if ((J(H, "Expected a location on the redirect navigation"), n)) {
      let ie = !1;
      if (k.reloadDocument) ie = !0;
      else if (Cp.test(k.location)) {
        const Te = e.history.createURL(k.location);
        ie = Te.origin !== t.location.origin || kl(Te.pathname, u) == null;
      }
      if (ie) {
        Q ? t.location.replace(k.location) : t.location.assign(k.location);
        return;
      }
    }
    F = null;
    let B = Q === !0 ? ye.Replace : ye.Push,
      { formMethod: $, formAction: X, formEncType: Ce } = w.navigation;
    !O && !M && $ && X && Ce && (O = Uc(w.navigation));
    let V = O || M;
    if (k0.has(k.status) && V && wt(V.formMethod))
      await yn(B, H, {
        submission: ge({}, V, { formAction: k.location }),
        preventScrollReset: L,
      });
    else {
      let ie = Wi(H, O);
      await yn(B, H, {
        overrideNavigation: ie,
        fetcherSubmission: M,
        preventScrollReset: L,
      });
    }
  }
  async function qu(w, k, R, O, M) {
    let Q = await Promise.all([
        ...R.map(($) => jr("loader", M, $, k, o, l, u, s.v7_relativeSplatPath)),
        ...O.map(($) =>
          $.matches && $.match && $.controller
            ? jr(
                "loader",
                Fr(e.history, $.path, $.controller.signal),
                $.match,
                $.matches,
                o,
                l,
                u,
                s.v7_relativeSplatPath
              )
            : { type: me.error, error: ut(404, { pathname: $.path }) }
        ),
      ]),
      H = Q.slice(0, R.length),
      B = Q.slice(R.length);
    return (
      await Promise.all([
        $c(
          w,
          R,
          H,
          H.map(() => M.signal),
          !1,
          v.loaderData
        ),
        $c(
          w,
          O.map(($) => $.match),
          B,
          O.map(($) => ($.controller ? $.controller.signal : null)),
          !0
        ),
      ]),
      { results: Q, loaderResults: H, fetcherResults: B }
    );
  }
  function li() {
    (Fe = !0),
      mt.push(...oi()),
      b.forEach((w, k) => {
        Z.has(k) && (it.push(k), Wt(k));
      });
  }
  function Vt(w, k, R) {
    R === void 0 && (R = {}),
      v.fetchers.set(w, k),
      Ze(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (R && R.flushSync) === !0 }
      );
  }
  function kr(w, k, R, O) {
    O === void 0 && (O = {});
    let M = Xr(v.matches, k);
    Rl(w),
      Ze(
        { errors: { [M.route.id]: R }, fetchers: new Map(v.fetchers) },
        { flushSync: (O && O.flushSync) === !0 }
      );
  }
  function es(w) {
    return (
      s.v7_fetcherPersist &&
        (Ve.set(w, (Ve.get(w) || 0) + 1), z.has(w) && z.delete(w)),
      v.fetchers.get(w) || C0
    );
  }
  function Rl(w) {
    let k = v.fetchers.get(w);
    Z.has(w) && !(k && k.state === "loading" && U.has(w)) && Wt(w),
      b.delete(w),
      U.delete(w),
      K.delete(w),
      z.delete(w),
      v.fetchers.delete(w);
  }
  function Bp(w) {
    if (s.v7_fetcherPersist) {
      let k = (Ve.get(w) || 0) - 1;
      k <= 0 ? (Ve.delete(w), z.add(w)) : Ve.set(w, k);
    } else Rl(w);
    Ze({ fetchers: new Map(v.fetchers) });
  }
  function Wt(w) {
    let k = Z.get(w);
    J(k, "Expected fetch controller: " + w), k.abort(), Z.delete(w);
  }
  function ts(w) {
    for (let k of w) {
      let R = es(k),
        O = Yt(R.data);
      v.fetchers.set(k, O);
    }
  }
  function ns() {
    let w = [],
      k = !1;
    for (let R of K) {
      let O = v.fetchers.get(R);
      J(O, "Expected fetcher: " + R),
        O.state === "loading" && (K.delete(R), w.push(R), (k = !0));
    }
    return ts(w), k;
  }
  function rs(w) {
    let k = [];
    for (let [R, O] of U)
      if (O < w) {
        let M = v.fetchers.get(R);
        J(M, "Expected fetcher: " + R),
          M.state === "loading" && (Wt(R), U.delete(R), k.push(R));
      }
    return ts(k), k.length > 0;
  }
  function Hp(w, k) {
    let R = v.blockers.get(w) || Dr;
    return te.get(w) !== k && te.set(w, k), R;
  }
  function ls(w) {
    v.blockers.delete(w), te.delete(w);
  }
  function Pl(w, k) {
    let R = v.blockers.get(w) || Dr;
    J(
      (R.state === "unblocked" && k.state === "blocked") ||
        (R.state === "blocked" && k.state === "blocked") ||
        (R.state === "blocked" && k.state === "proceeding") ||
        (R.state === "blocked" && k.state === "unblocked") ||
        (R.state === "proceeding" && k.state === "unblocked"),
      "Invalid blocker state transition: " + R.state + " -> " + k.state
    );
    let O = new Map(v.blockers);
    O.set(w, k), Ze({ blockers: O });
  }
  function os(w) {
    let { currentLocation: k, nextLocation: R, historyAction: O } = w;
    if (te.size === 0) return;
    te.size > 1 && zn(!1, "A router only supports one blocker at a time");
    let M = Array.from(te.entries()),
      [Q, H] = M[M.length - 1],
      B = v.blockers.get(Q);
    if (
      !(B && B.state === "proceeding") &&
      H({ currentLocation: k, nextLocation: R, historyAction: O })
    )
      return Q;
  }
  function oi(w) {
    let k = [];
    return (
      Y.forEach((R, O) => {
        (!w || w(O)) && (R.cancel(), k.push(O), Y.delete(O));
      }),
      k
    );
  }
  function Vp(w, k, R) {
    if (((h = w), (y = k), (E = R || null), !x && v.navigation === Vi)) {
      x = !0;
      let O = as(v.location, v.matches);
      O != null && Ze({ restoreScrollPosition: O });
    }
    return () => {
      (h = null), (y = null), (E = null);
    };
  }
  function is(w, k) {
    return (
      (E &&
        E(
          w,
          k.map((O) => Zg(O, v.loaderData))
        )) ||
      w.key
    );
  }
  function Wp(w, k) {
    if (h && y) {
      let R = is(w, k);
      h[R] = y();
    }
  }
  function as(w, k) {
    if (h) {
      let R = is(w, k),
        O = h[R];
      if (typeof O == "number") return O;
    }
    return null;
  }
  function Qp(w) {
    (o = {}), (a = Ba(w, l, void 0, o));
  }
  return (
    (_ = {
      get basename() {
        return u;
      },
      get future() {
        return s;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Cl,
      subscribe: Fp,
      enableScrollRestoration: Vp,
      navigate: Ju,
      fetch: $p,
      revalidate: Mp,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: es,
      deleteFetcher: Bp,
      dispose: jp,
      getBlocker: Hp,
      deleteBlocker: ls,
      _internalFetchControllers: Z,
      _internalActiveDeferreds: Y,
      _internalSetRoutes: Qp,
    }),
    _
  );
}
function L0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ha(e, t, n, r, l, o, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === i)) {
        s = p;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let c = m0(l || ".", h0(u, o), kl(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !Xu(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : _n([n, c.pathname])),
    El(c)
  );
}
function Tc(e, t, n, r) {
  if (!r || !L0(r)) return { path: n };
  if (r.formMethod && !F0(r.formMethod))
    return { path: n, error: ut(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: ut(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Lp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!wt(i)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((E, y) => {
              let [x, S] = y;
              return (
                "" +
                E +
                x +
                "=" +
                S +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!wt(i)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  J(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = Va(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Va(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = jc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = jc(u));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (wt(c.formMethod)) return { path: n, submission: c };
  let p = Ht(n);
  return (
    t && p.search && Xu(p.search) && u.append("index", ""),
    (p.search = "?" + u),
    { path: El(p), submission: c }
  );
}
function N0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function _c(e, t, n, r, l, o, i, a, u, s, c, p, h, E, y, x) {
  let S = x ? Object.values(x)[0] : y ? Object.values(y)[0] : void 0,
    d = e.createURL(t.location),
    f = e.createURL(l),
    m = x ? Object.keys(x)[0] : void 0,
    _ = N0(n, m).filter((P, L) => {
      let { route: F } = P;
      if (F.lazy) return !0;
      if (F.loader == null) return !1;
      if (o)
        return F.loader.hydrate
          ? !0
          : t.loaderData[F.id] === void 0 &&
              (!t.errors || t.errors[F.id] === void 0);
      if (
        T0(t.loaderData, t.matches[L], P) ||
        a.some((le) => le === P.route.id)
      )
        return !0;
      let I = t.matches[L],
        W = P;
      return Oc(
        P,
        ge(
          {
            currentUrl: d,
            currentParams: I.params,
            nextUrl: f,
            nextParams: W.params,
          },
          r,
          {
            actionResult: S,
            defaultShouldRevalidate:
              i ||
              d.pathname + d.search === f.pathname + f.search ||
              d.search !== f.search ||
              Pp(I, W),
          }
        )
      );
    }),
    v = [];
  return (
    c.forEach((P, L) => {
      if (o || !n.some((oe) => oe.route.id === P.routeId) || s.has(L)) return;
      let F = nr(h, P.path, E);
      if (!F) {
        v.push({
          key: L,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let I = t.fetchers.get(L),
        W = Wa(F, P.path),
        le = !1;
      p.has(L)
        ? (le = !1)
        : u.includes(L)
        ? (le = !0)
        : I && I.state !== "idle" && I.data === void 0
        ? (le = i)
        : (le = Oc(
            W,
            ge(
              {
                currentUrl: d,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: S, defaultShouldRevalidate: i }
            )
          )),
        le &&
          v.push({
            key: L,
            routeId: P.routeId,
            path: P.path,
            matches: F,
            match: W,
            controller: new AbortController(),
          });
    }),
    [_, v]
  );
}
function T0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Pp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Oc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Dc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  J(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    zn(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Gg.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ge({}, t(l), { lazy: void 0 }));
}
async function jr(e, t, n, r, l, o, i, a, u) {
  u === void 0 && (u = {});
  let s,
    c,
    p,
    h = (x) => {
      let S,
        d = new Promise((f, m) => (S = m));
      return (
        (p = () => S()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          x({ request: t, params: n.params, context: u.requestContext }),
          d,
        ])
      );
    };
  try {
    let x = n.route[e];
    if (n.route.lazy)
      if (x) {
        let S,
          d = await Promise.all([
            h(x).catch((f) => {
              S = f;
            }),
            Dc(n.route, o, l),
          ]);
        if (S) throw S;
        c = d[0];
      } else if ((await Dc(n.route, o, l), (x = n.route[e]), x)) c = await h(x);
      else if (e === "action") {
        let S = new URL(t.url),
          d = S.pathname + S.search;
        throw ut(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: me.data, data: void 0 };
    else if (x) c = await h(x);
    else {
      let S = new URL(t.url),
        d = S.pathname + S.search;
      throw ut(404, { pathname: d });
    }
    J(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (x) {
    (s = me.error), (c = x);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (j0(c)) {
    let x = c.status;
    if (E0.has(x)) {
      let d = c.headers.get("Location");
      if (
        (J(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Cp.test(d))
      )
        d = Ha(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d, a);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          m = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          C = kl(m.pathname, i) != null;
        m.origin === f.origin && C && (d = m.pathname + m.search + m.hash);
      }
      if (u.isStaticRequest) throw (c.headers.set("Location", d), c);
      return {
        type: me.redirect,
        status: x,
        location: d,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: s === me.error ? me.error : me.data, response: c };
    let S;
    try {
      let d = c.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? (S = await c.json())
        : (S = await c.text());
    } catch (d) {
      return { type: me.error, error: d };
    }
    return s === me.error
      ? { type: s, error: new Gu(x, c.statusText, S), headers: c.headers }
      : { type: me.data, data: S, statusCode: c.status, headers: c.headers };
  }
  if (s === me.error) return { type: s, error: c };
  if (D0(c)) {
    var E, y;
    return {
      type: me.deferred,
      deferredData: c,
      statusCode: (E = c.init) == null ? void 0 : E.status,
      headers:
        ((y = c.init) == null ? void 0 : y.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: me.data, data: c };
}
function Fr(e, t, n, r) {
  let l = e.createURL(Lp(t)).toString(),
    o = { signal: n };
  if (r && wt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Va(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Va(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function jc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function _0(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((c, p) => {
      let h = t[p].route.id;
      if (
        (J(!Pn(c), "Cannot handle redirect results in processLoaderData"),
        rr(c))
      ) {
        let E = Xr(e, h),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[E.route.id] == null && (i[E.route.id] = y),
          (o[h] = void 0),
          u || ((u = !0), (a = Ep(c.error) ? c.error.status : 500)),
          c.headers && (s[h] = c.headers);
      } else
        Rn(c)
          ? (l.set(h, c.deferredData), (o[h] = c.deferredData.data))
          : (o[h] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !u &&
            (a = c.statusCode),
          c.headers && (s[h] = c.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Fc(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = _0(t, n, r, l, a);
  for (let c = 0; c < o.length; c++) {
    let { key: p, match: h, controller: E } = o[c];
    J(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = i[c];
    if (!(E && E.signal.aborted))
      if (rr(y)) {
        let x = Xr(e.matches, h == null ? void 0 : h.route.id);
        (s && s[x.route.id]) || (s = ge({}, s, { [x.route.id]: y.error })),
          e.fetchers.delete(p);
      } else if (Pn(y)) J(!1, "Unhandled fetcher revalidation redirect");
      else if (Rn(y)) J(!1, "Unhandled fetcher deferred data");
      else {
        let x = Yt(y.data);
        e.fetchers.set(p, x);
      }
  }
  return { loaderData: u, errors: s };
}
function Mc(e, t, n, r) {
  let l = ge({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Xr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function zc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ut(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Gu(e || 500, i, new Error(a), !0)
  );
}
function Ic(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Pn(n)) return { result: n, idx: t };
  }
}
function Lp(e) {
  let t = typeof e == "string" ? Ht(e) : e;
  return El(ge({}, t, { hash: "" }));
}
function O0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Rn(e) {
  return e.type === me.deferred;
}
function rr(e) {
  return e.type === me.error;
}
function Pn(e) {
  return (e && e.type) === me.redirect;
}
function D0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function j0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function F0(e) {
  return S0.has(e.toLowerCase());
}
function wt(e) {
  return w0.has(e.toLowerCase());
}
async function $c(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((p) => p.route.id === u.route.id),
      c = s != null && !Pp(s, u) && (o && o[u.route.id]) !== void 0;
    if (Rn(a) && (l || c)) {
      let p = r[i];
      J(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Np(a, p, l).then((h) => {
          h && (n[i] = h || n[i]);
        });
    }
  }
}
async function Np(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: me.error, error: l };
      }
    return { type: me.data, data: e.deferredData.data };
  }
}
function Xu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Wa(e, t) {
  let n = typeof t == "string" ? Ht(t).search : t.search;
  if (e[e.length - 1].route.index && Xu(n || "")) return e[e.length - 1];
  let r = Sp(e);
  return r[r.length - 1];
}
function Uc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Wi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function M0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Mr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function z0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Yt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function I0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Rp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function $0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Rp, JSON.stringify(n));
    } catch (r) {
      zn(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fo() {
  return (
    (Fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fo.apply(this, arguments)
  );
}
const Tp = g.createContext(null),
  _p = g.createContext(null),
  Op = g.createContext(null),
  ni = g.createContext(null),
  ri = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Dp = g.createContext(null);
function Zu() {
  return g.useContext(ni) != null;
}
function U0() {
  return Zu() || J(!1), g.useContext(ni).location;
}
function A0(e, t, n, r) {
  Zu() || J(!1);
  let { navigator: l } = g.useContext(Op),
    { matches: o } = g.useContext(ri),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = U0(),
    c;
  if (t) {
    var p;
    let S = typeof t == "string" ? Ht(t) : t;
    u === "/" || ((p = S.pathname) != null && p.startsWith(u)) || J(!1),
      (c = S);
  } else c = s;
  let h = c.pathname || "/",
    E = u === "/" ? h : h.slice(u.length) || "/",
    y = nr(e, { pathname: E }),
    x = Q0(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: _n([
              u,
              l.encodeLocation
                ? l.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? u
                : _n([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && x
    ? g.createElement(
        ni.Provider,
        {
          value: {
            location: Fo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: ye.Pop,
          },
        },
        x
      )
    : x;
}
function B0() {
  let e = G0(),
    t = Ep(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? g.createElement("pre", { style: l }, n) : null,
    null
  );
}
const H0 = g.createElement(B0, null);
class V0 extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          ri.Provider,
          { value: this.props.routeContext },
          g.createElement(Dp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function W0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = g.useContext(Tp);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(ri.Provider, { value: t }, r)
  );
}
function Q0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let c = i.findIndex(
      (p) => p.route.id && (a == null ? void 0 : a[p.route.id])
    );
    c >= 0 || J(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let p = i[c];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (s = c),
        p.route.id)
      ) {
        let { loaderData: h, errors: E } = n,
          y =
            p.route.loader &&
            h[p.route.id] === void 0 &&
            (!E || E[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, p, h) => {
    let E,
      y = !1,
      x = null,
      S = null;
    n &&
      ((E = a && p.route.id ? a[p.route.id] : void 0),
      (x = p.route.errorElement || H0),
      u &&
        (s < 0 && h === 0
          ? (X0("route-fallback", !1), (y = !0), (S = null))
          : s === h &&
            ((y = !0), (S = p.route.hydrateFallbackElement || null))));
    let d = t.concat(i.slice(0, h + 1)),
      f = () => {
        let m;
        return (
          E
            ? (m = x)
            : y
            ? (m = S)
            : p.route.Component
            ? (m = g.createElement(p.route.Component, null))
            : p.route.element
            ? (m = p.route.element)
            : (m = c),
          g.createElement(W0, {
            match: p,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || h === 0)
      ? g.createElement(V0, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: E,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Qa = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Qa || {});
function K0(e) {
  let t = g.useContext(_p);
  return t || J(!1), t;
}
function b0(e) {
  let t = g.useContext(ri);
  return t || J(!1), t;
}
function Y0(e) {
  let t = b0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || J(!1), n.route.id;
}
function G0() {
  var e;
  let t = g.useContext(Dp),
    n = K0(Qa.UseRouteError),
    r = Y0(Qa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const Ac = {};
function X0(e, t, n) {
  !t && !Ac[e] && (Ac[e] = !0);
}
function Z0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ye.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Zu() && J(!1);
  let u = t.replace(/^\/*/, "/"),
    s = g.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Fo({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == "string" && (r = Ht(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: h = "",
      state: E = null,
      key: y = "default",
    } = r,
    x = g.useMemo(() => {
      let S = kl(c, u);
      return S == null
        ? null
        : {
            location: { pathname: S, search: p, hash: h, state: E, key: y },
            navigationType: l,
          };
    }, [u, c, p, h, E, y, l]);
  return x == null
    ? null
    : g.createElement(
        Op.Provider,
        { value: s },
        g.createElement(ni.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function J0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: g.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: g.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: g.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Mo() {
  return (
    (Mo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mo.apply(this, arguments)
  );
}
function q0(e, t) {
  return P0({
    basename: t == null ? void 0 : t.basename,
    future: Mo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Kg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || ey(),
    routes: e,
    mapRouteProperties: J0,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function ey() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Mo({}, t, { errors: ty(t.errors) })), t;
}
function ty(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Gu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const ny = g.createContext({ isTransitioning: !1 }),
  ry = g.createContext(new Map()),
  ly = "startTransition",
  Bc = Qi[ly],
  oy = "flushSync",
  Hc = yv[oy];
function iy(e) {
  Bc ? Bc(e) : e();
}
function zr(e) {
  Hc ? Hc(e) : e();
}
class ay {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function uy(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = g.useState(n.state),
    [i, a] = g.useState(),
    [u, s] = g.useState({ isTransitioning: !1 }),
    [c, p] = g.useState(),
    [h, E] = g.useState(),
    [y, x] = g.useState(),
    S = g.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = g.useCallback(
      (P) => {
        d ? iy(P) : P();
      },
      [d]
    ),
    m = g.useCallback(
      (P, L) => {
        let {
          deletedFetchers: F,
          unstable_flushSync: I,
          unstable_viewTransitionOpts: W,
        } = L;
        F.forEach((oe) => S.current.delete(oe)),
          P.fetchers.forEach((oe, Fe) => {
            oe.data !== void 0 && S.current.set(Fe, oe.data);
          });
        let le =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!W || le) {
          I ? zr(() => o(P)) : f(() => o(P));
          return;
        }
        if (I) {
          zr(() => {
            h && (c && c.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: W.currentLocation,
                nextLocation: W.nextLocation,
              });
          });
          let oe = n.window.document.startViewTransition(() => {
            zr(() => o(P));
          });
          oe.finished.finally(() => {
            zr(() => {
              p(void 0), E(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            zr(() => E(oe));
          return;
        }
        h
          ? (c && c.resolve(),
            h.skipTransition(),
            x({
              state: P,
              currentLocation: W.currentLocation,
              nextLocation: W.nextLocation,
            }))
          : (a(P),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: W.currentLocation,
              nextLocation: W.nextLocation,
            }));
      },
      [n.window, h, c, S, f]
    );
  g.useLayoutEffect(() => n.subscribe(m), [n, m]),
    g.useEffect(() => {
      u.isTransitioning && !u.flushSync && p(new ay());
    }, [u]),
    g.useEffect(() => {
      if (c && i && n.window) {
        let P = i,
          L = c.promise,
          F = n.window.document.startViewTransition(async () => {
            f(() => o(P)), await L;
          });
        F.finished.finally(() => {
          p(void 0), E(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          E(F);
      }
    }, [f, i, c, n.window]),
    g.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, h, l.location, i]),
    g.useEffect(() => {
      !u.isTransitioning &&
        y &&
        (a(y.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        x(void 0));
    }, [u.isTransitioning, y]),
    g.useEffect(() => {}, []);
  let C = g.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, L, F) =>
          n.navigate(P, {
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (P, L, F) =>
          n.navigate(P, {
            replace: !0,
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n]
    ),
    _ = n.basename || "/",
    v = g.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: _ }),
      [n, C, _]
    );
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(
      Tp.Provider,
      { value: v },
      g.createElement(
        _p.Provider,
        { value: l },
        g.createElement(
          ry.Provider,
          { value: S.current },
          g.createElement(
            ny.Provider,
            { value: u },
            g.createElement(
              Z0,
              {
                basename: _,
                location: l.location,
                navigationType: l.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? g.createElement(sy, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function sy(e) {
  let { routes: t, future: n, state: r } = e;
  return A0(t, void 0, r, n);
}
var Vc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Vc || (Vc = {}));
var Wc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wc || (Wc = {}));
const cy = q0([
  { path: "/", element: T.jsx(Rc, {}) },
  { path: "/about", element: T.jsx(Rc, {}) },
]);
Ki.createRoot(document.getElementById("root")).render(
  T.jsxs(Ee.StrictMode, {
    children: [T.jsx(Qg, {}), T.jsx(uy, { router: cy })],
  })
);

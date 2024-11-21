import * as l from "react";
import Ne, { forwardRef as ei, createElement as ur, useLayoutEffect as ti, useEffect as ni, useState as ri } from "react";
import * as Ft from "react-dom";
import oi from "react-dom";
var vn = { exports: {} }, ut = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function si() {
  if (dr) return ut;
  dr = 1;
  var e = Ne, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, u) {
    var d, m = {}, h = null, g = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c) r.call(c, d) && !s.hasOwnProperty(d) && (m[d] = c[d]);
    if (a && a.defaultProps) for (d in c = a.defaultProps, c) m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: t, type: a, key: h, ref: g, props: m, _owner: o.current };
  }
  return ut.Fragment = n, ut.jsx = i, ut.jsxs = i, ut;
}
var dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function ii() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ne, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), x = Symbol.iterator, f = "@@iterator";
    function y(p) {
      if (p === null || typeof p != "object")
        return null;
      var S = x && p[x] || p[f];
      return typeof S == "function" ? S : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(p) {
      {
        for (var S = arguments.length, P = new Array(S > 1 ? S - 1 : 0), k = 1; k < S; k++)
          P[k - 1] = arguments[k];
        C("error", p, P);
      }
    }
    function C(p, S, P) {
      {
        var k = w.ReactDebugCurrentFrame, X = k.getStackAddendum();
        X !== "" && (S += "%s", P = P.concat([X]));
        var Z = P.map(function(H) {
          return String(H);
        });
        Z.unshift("Warning: " + S), Function.prototype.apply.call(console[p], console, Z);
      }
    }
    var E = !1, R = !1, A = !1, T = !1, M = !1, F;
    F = Symbol.for("react.module.reference");
    function $(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === s || M || p === o || p === u || p === d || T || p === g || E || R || A || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === m || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === F || p.getModuleId !== void 0));
    }
    function z(p, S, P) {
      var k = p.displayName;
      if (k)
        return k;
      var X = S.displayName || S.name || "";
      return X !== "" ? P + "(" + X + ")" : P;
    }
    function N(p) {
      return p.displayName || "Context";
    }
    function I(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var S = p;
            return N(S) + ".Consumer";
          case i:
            var P = p;
            return N(P._context) + ".Provider";
          case c:
            return z(p, p.render, "ForwardRef");
          case m:
            var k = p.displayName || null;
            return k !== null ? k : I(p.type) || "Memo";
          case h: {
            var X = p, Z = X._payload, H = X._init;
            try {
              return I(H(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, U = 0, L, B, O, V, re, ee, je;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function we() {
      {
        if (U === 0) {
          L = console.log, B = console.info, O = console.warn, V = console.error, re = console.group, ee = console.groupCollapsed, je = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: Me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        U++;
      }
    }
    function Ie() {
      {
        if (U--, U === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, p, {
              value: L
            }),
            info: j({}, p, {
              value: B
            }),
            warn: j({}, p, {
              value: O
            }),
            error: j({}, p, {
              value: V
            }),
            group: j({}, p, {
              value: re
            }),
            groupCollapsed: j({}, p, {
              value: ee
            }),
            groupEnd: j({}, p, {
              value: je
            })
          });
        }
        U < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = w.ReactCurrentDispatcher, _;
    function K(p, S, P) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (X) {
            var k = X.stack.trim().match(/\n( *(at )?)/);
            _ = k && k[1] || "";
          }
        return `
` + _ + p;
      }
    }
    var oe = !1, G;
    {
      var q = typeof WeakMap == "function" ? WeakMap : Map;
      G = new q();
    }
    function Y(p, S) {
      if (!p || oe)
        return "";
      {
        var P = G.get(p);
        if (P !== void 0)
          return P;
      }
      var k;
      oe = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = ge.current, ge.current = null, we();
      try {
        if (S) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (de) {
              k = de;
            }
            Reflect.construct(p, [], H);
          } else {
            try {
              H.call();
            } catch (de) {
              k = de;
            }
            p.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            k = de;
          }
          p();
        }
      } catch (de) {
        if (de && k && typeof de.stack == "string") {
          for (var W = de.stack.split(`
`), le = k.stack.split(`
`), te = W.length - 1, se = le.length - 1; te >= 1 && se >= 0 && W[te] !== le[se]; )
            se--;
          for (; te >= 1 && se >= 0; te--, se--)
            if (W[te] !== le[se]) {
              if (te !== 1 || se !== 1)
                do
                  if (te--, se--, se < 0 || W[te] !== le[se]) {
                    var he = `
` + W[te].replace(" at new ", " at ");
                    return p.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", p.displayName)), typeof p == "function" && G.set(p, he), he;
                  }
                while (te >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ge.current = Z, Ie(), Error.prepareStackTrace = X;
      }
      var qe = p ? p.displayName || p.name : "", Ue = qe ? K(qe) : "";
      return typeof p == "function" && G.set(p, Ue), Ue;
    }
    function ce(p, S, P) {
      return Y(p, !1);
    }
    function me(p) {
      var S = p.prototype;
      return !!(S && S.isReactComponent);
    }
    function Ce(p, S, P) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Y(p, me(p));
      if (typeof p == "string")
        return K(p);
      switch (p) {
        case u:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return ce(p.render);
          case m:
            return Ce(p.type, S, P);
          case h: {
            var k = p, X = k._payload, Z = k._init;
            try {
              return Ce(Z(X), S, P);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, Le = {}, Ct = w.ReactDebugCurrentFrame;
    function Te(p) {
      if (p) {
        var S = p._owner, P = Ce(p.type, p._source, S ? S.type : null);
        Ct.setExtraStackFrame(P);
      } else
        Ct.setExtraStackFrame(null);
    }
    function ks(p, S, P, k, X) {
      {
        var Z = Function.call.bind(ve);
        for (var H in p)
          if (Z(p, H)) {
            var W = void 0;
            try {
              if (typeof p[H] != "function") {
                var le = Error((k || "React class") + ": " + P + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              W = p[H](S, H, k, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              W = te;
            }
            W && !(W instanceof Error) && (Te(X), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", P, H, typeof W), Te(null)), W instanceof Error && !(W.message in Le) && (Le[W.message] = !0, Te(X), b("Failed %s type: %s", P, W.message), Te(null));
          }
      }
    }
    var js = Array.isArray;
    function Zt(p) {
      return js(p);
    }
    function Ms(p) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, P = S && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return P;
      }
    }
    function Is(p) {
      try {
        return Qn(p), !1;
      } catch {
        return !0;
      }
    }
    function Qn(p) {
      return "" + p;
    }
    function er(p) {
      if (Is(p))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ms(p)), Qn(p);
    }
    var lt = w.ReactCurrentOwner, Ls = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, nr, Jt;
    Jt = {};
    function Ds(p) {
      if (ve.call(p, "ref")) {
        var S = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Fs(p) {
      if (ve.call(p, "key")) {
        var S = Object.getOwnPropertyDescriptor(p, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function Ws(p, S) {
      if (typeof p.ref == "string" && lt.current && S && lt.current.stateNode !== S) {
        var P = I(lt.current.type);
        Jt[P] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(lt.current.type), p.ref), Jt[P] = !0);
      }
    }
    function $s(p, S) {
      {
        var P = function() {
          tr || (tr = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Bs(p, S) {
      {
        var P = function() {
          nr || (nr = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Vs = function(p, S, P, k, X, Z, H) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: S,
        ref: P,
        props: H,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Hs(p, S, P, k, X) {
      {
        var Z, H = {}, W = null, le = null;
        P !== void 0 && (er(P), W = "" + P), Fs(S) && (er(S.key), W = "" + S.key), Ds(S) && (le = S.ref, Ws(S, X));
        for (Z in S)
          ve.call(S, Z) && !Ls.hasOwnProperty(Z) && (H[Z] = S[Z]);
        if (p && p.defaultProps) {
          var te = p.defaultProps;
          for (Z in te)
            H[Z] === void 0 && (H[Z] = te[Z]);
        }
        if (W || le) {
          var se = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          W && $s(H, se), le && Bs(H, se);
        }
        return Vs(p, W, le, X, k, lt.current, H);
      }
    }
    var Qt = w.ReactCurrentOwner, rr = w.ReactDebugCurrentFrame;
    function Ke(p) {
      if (p) {
        var S = p._owner, P = Ce(p.type, p._source, S ? S.type : null);
        rr.setExtraStackFrame(P);
      } else
        rr.setExtraStackFrame(null);
    }
    var en;
    en = !1;
    function tn(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function or() {
      {
        if (Qt.current) {
          var p = I(Qt.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function zs(p) {
      return "";
    }
    var sr = {};
    function Us(p) {
      {
        var S = or();
        if (!S) {
          var P = typeof p == "string" ? p : p.displayName || p.name;
          P && (S = `

Check the top-level render call using <` + P + ">.");
        }
        return S;
      }
    }
    function ir(p, S) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var P = Us(S);
        if (sr[P])
          return;
        sr[P] = !0;
        var k = "";
        p && p._owner && p._owner !== Qt.current && (k = " It was passed a child from " + I(p._owner.type) + "."), Ke(p), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, k), Ke(null);
      }
    }
    function ar(p, S) {
      {
        if (typeof p != "object")
          return;
        if (Zt(p))
          for (var P = 0; P < p.length; P++) {
            var k = p[P];
            tn(k) && ir(k, S);
          }
        else if (tn(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var X = y(p);
          if (typeof X == "function" && X !== p.entries)
            for (var Z = X.call(p), H; !(H = Z.next()).done; )
              tn(H.value) && ir(H.value, S);
        }
      }
    }
    function Gs(p) {
      {
        var S = p.type;
        if (S == null || typeof S == "string")
          return;
        var P;
        if (typeof S == "function")
          P = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === m))
          P = S.propTypes;
        else
          return;
        if (P) {
          var k = I(S);
          ks(P, p.props, "prop", k, p);
        } else if (S.PropTypes !== void 0 && !en) {
          en = !0;
          var X = I(S);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ys(p) {
      {
        for (var S = Object.keys(p.props), P = 0; P < S.length; P++) {
          var k = S[P];
          if (k !== "children" && k !== "key") {
            Ke(p), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Ke(null);
            break;
          }
        }
        p.ref !== null && (Ke(p), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
      }
    }
    var cr = {};
    function lr(p, S, P, k, X, Z) {
      {
        var H = $(p);
        if (!H) {
          var W = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = zs();
          le ? W += le : W += or();
          var te;
          p === null ? te = "null" : Zt(p) ? te = "array" : p !== void 0 && p.$$typeof === t ? (te = "<" + (I(p.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : te = typeof p, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, W);
        }
        var se = Hs(p, S, P, X, Z);
        if (se == null)
          return se;
        if (H) {
          var he = S.children;
          if (he !== void 0)
            if (k)
              if (Zt(he)) {
                for (var qe = 0; qe < he.length; qe++)
                  ar(he[qe], p);
                Object.freeze && Object.freeze(he);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(he, p);
        }
        if (ve.call(S, "key")) {
          var Ue = I(p), de = Object.keys(S).filter(function(Qs) {
            return Qs !== "key";
          }), nn = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cr[Ue + nn]) {
            var Js = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nn, Ue, Js, Ue), cr[Ue + nn] = !0;
          }
        }
        return p === r ? Ys(se) : Gs(se), se;
      }
    }
    function Ks(p, S, P) {
      return lr(p, S, P, !0);
    }
    function qs(p, S, P) {
      return lr(p, S, P, !1);
    }
    var Xs = qs, Zs = Ks;
    dt.Fragment = r, dt.jsx = Xs, dt.jsxs = Zs;
  }()), dt;
}
process.env.NODE_ENV === "production" ? vn.exports = si() : vn.exports = ii();
var v = vn.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ai = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), yt = (e, t) => {
  const n = ei(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: c,
      ...u
    }, d) => ur(
      "svg",
      {
        ref: d,
        ...ai,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: i ? Number(s) * 24 / Number(o) : s,
        className: ["lucide", `lucide-${ci(e)}`, a].join(" "),
        ...u
      },
      [
        ...t.map(([m, h]) => ur(m, h)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = yt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = yt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = yt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = yt("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = yt("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
function fi(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $r(...e) {
  return (t) => e.forEach((n) => fi(n, t));
}
function ie(...e) {
  return l.useCallback($r(...e), e);
}
var nt = l.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = l.Children.toArray(n), s = o.find(pi);
  if (s) {
    const i = s.props.children, a = o.map((c) => c === s ? l.Children.count(i) > 1 ? l.Children.only(null) : l.isValidElement(i) ? i.props.children : null : c);
    return /* @__PURE__ */ v.jsx(yn, { ...r, ref: t, children: l.isValidElement(i) ? l.cloneElement(i, void 0, a) : null });
  }
  return /* @__PURE__ */ v.jsx(yn, { ...r, ref: t, children: n });
});
nt.displayName = "Slot";
var yn = l.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (l.isValidElement(n)) {
    const o = hi(n);
    return l.cloneElement(n, {
      ...mi(r, n.props),
      // @ts-ignore
      ref: t ? $r(t, o) : o
    });
  }
  return l.Children.count(n) > 1 ? l.Children.only(null) : null;
});
yn.displayName = "SlotClone";
var Br = ({ children: e }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
function pi(e) {
  return l.isValidElement(e) && e.type === Br;
}
function mi(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      s(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function hi(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Vr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Vr(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function gi() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Vr(e)) && (r && (r += " "), r += t);
  return r;
}
const mr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, hr = gi, Hr = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return hr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const d = n == null ? void 0 : n[u], m = s == null ? void 0 : s[u];
    if (d === null) return null;
    const h = mr(d) || mr(m);
    return o[u][h];
  }), a = n && Object.entries(n).reduce((u, d) => {
    let [m, h] = d;
    return h === void 0 || (u[m] = h), u;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: m, className: h, ...g } = d;
    return Object.entries(g).every((x) => {
      let [f, y] = x;
      return Array.isArray(y) ? y.includes({
        ...s,
        ...a
      }[f]) : {
        ...s,
        ...a
      }[f] === y;
    }) ? [
      ...u,
      m,
      h
    ] : u;
  }, []);
  return hr(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function zr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = zr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function vi() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = zr(e)) && (r && (r += " "), r += t);
  return r;
}
const jn = "-", yi = (e) => {
  const t = xi(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(jn);
      return a[0] === "" && a.length !== 1 && a.shift(), Ur(a, t) || bi(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const c = n[i] || [];
      return a && r[i] ? [...c, ...r[i]] : c;
    }
  };
}, Ur = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Ur(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(jn);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, gr = /^\[(.+)\]$/, bi = (e) => {
  if (gr.test(e)) {
    const t = gr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, xi = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ci(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    bn(i, r, s, t);
  }), r;
}, bn = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : vr(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (wi(o)) {
        bn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      bn(i, vr(t, s), n, r);
    });
  });
}, vr = (e, t) => {
  let n = e;
  return t.split(jn).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, wi = (e) => e.isThemeGetter, Ci = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, Si = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}, Gr = "!", Ei = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const c = [];
    let u = 0, d = 0, m;
    for (let y = 0; y < a.length; y++) {
      let w = a[y];
      if (u === 0) {
        if (w === o && (r || a.slice(y, y + s) === t)) {
          c.push(a.slice(d, y)), d = y + s;
          continue;
        }
        if (w === "/") {
          m = y;
          continue;
        }
      }
      w === "[" ? u++ : w === "]" && u--;
    }
    const h = c.length === 0 ? a : a.substring(d), g = h.startsWith(Gr), x = g ? h.substring(1) : h, f = m && m > d ? m - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: f
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, Ri = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Pi = (e) => ({
  cache: Si(e.cacheSize),
  parseClassName: Ei(e),
  ...yi(e)
}), Ti = /\s+/, Ai = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(Ti);
  let a = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const u = i[c], {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: g
    } = n(u);
    let x = !!g, f = r(x ? h.substring(0, g) : h);
    if (!f) {
      if (!x) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (f = r(h), !f) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      x = !1;
    }
    const y = Ri(d).join(":"), w = m ? y + Gr : y, b = w + f;
    if (s.includes(b))
      continue;
    s.push(b);
    const C = o(f, x);
    for (let E = 0; E < C.length; ++E) {
      const R = C[E];
      s.push(w + R);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Ni() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Yr(t)) && (r && (r += " "), r += n);
  return r;
}
const Yr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Yr(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Oi(e, ...t) {
  let n, r, o, s = i;
  function i(c) {
    const u = t.reduce((d, m) => m(d), e());
    return n = Pi(u), r = n.cache.get, o = n.cache.set, s = a, a(c);
  }
  function a(c) {
    const u = r(c);
    if (u)
      return u;
    const d = Ai(c, n);
    return o(c, d), d;
  }
  return function() {
    return s(Ni.apply(null, arguments));
  };
}
const Q = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Kr = /^\[(?:([a-z-]+):)?(.+)\]$/i, _i = /^\d+\/\d+$/, ki = /* @__PURE__ */ new Set(["px", "full", "screen"]), ji = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Mi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ii = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Li = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Di = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ae = (e) => Qe(e) || ki.has(e) || _i.test(e), De = (e) => st(e, "length", Ui), Qe = (e) => !!e && !Number.isNaN(Number(e)), rn = (e) => st(e, "number", Qe), ft = (e) => !!e && Number.isInteger(Number(e)), Fi = (e) => e.endsWith("%") && Qe(e.slice(0, -1)), D = (e) => Kr.test(e), Fe = (e) => ji.test(e), Wi = /* @__PURE__ */ new Set(["length", "size", "percentage"]), $i = (e) => st(e, Wi, qr), Bi = (e) => st(e, "position", qr), Vi = /* @__PURE__ */ new Set(["image", "url"]), Hi = (e) => st(e, Vi, Yi), zi = (e) => st(e, "", Gi), pt = () => !0, st = (e, t, n) => {
  const r = Kr.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ui = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Mi.test(e) && !Ii.test(e)
), qr = () => !1, Gi = (e) => Li.test(e), Yi = (e) => Di.test(e), Ki = () => {
  const e = Q("colors"), t = Q("spacing"), n = Q("blur"), r = Q("brightness"), o = Q("borderColor"), s = Q("borderRadius"), i = Q("borderSpacing"), a = Q("borderWidth"), c = Q("contrast"), u = Q("grayscale"), d = Q("hueRotate"), m = Q("invert"), h = Q("gap"), g = Q("gradientColorStops"), x = Q("gradientColorStopPositions"), f = Q("inset"), y = Q("margin"), w = Q("opacity"), b = Q("padding"), C = Q("saturate"), E = Q("scale"), R = Q("sepia"), A = Q("skew"), T = Q("space"), M = Q("translate"), F = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", D, t], N = () => [D, t], I = () => ["", Ae, De], j = () => ["auto", Qe, D], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", D], re = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [Qe, D];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [pt],
      spacing: [Ae, De],
      blur: ["none", "", Fe, D],
      brightness: ee(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Fe, D],
      borderSpacing: N(),
      borderWidth: I(),
      contrast: ee(),
      grayscale: V(),
      hueRotate: ee(),
      invert: V(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Fi, De],
      inset: z(),
      margin: z(),
      opacity: ee(),
      padding: N(),
      saturate: ee(),
      scale: ee(),
      sepia: V(),
      skew: ee(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", D]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Fe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": re()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...U(), D]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [f]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [f]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [f]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [f]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [f]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [f]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [f]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [f]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [f]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ft, D]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", D]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ft, D]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [pt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ft, D]
        }, D]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [pt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ft, D]
        }, D]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...O()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...O(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [T]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [D, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [D, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Fe]
        }, Fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [D, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Fe, De]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", rn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Qe, rn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ae, D]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", D]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", D]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [w]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ae, De]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ae, D]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", D]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [w]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...U(), Bi]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", $i]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Hi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ae, D]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ae, De]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ae, De]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Fe, zi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [pt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...B(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Fe, D]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ee()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", D]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ee()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", D]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ft, D]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", D]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ae, De, rn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, qi = /* @__PURE__ */ Oi(Ki);
function ae(...e) {
  return qi(vi(e));
}
function Xi(e) {
  switch (e) {
    case "en":
      return "English";
    case "es":
      return "Spanish";
    case "fr":
      return "French";
    case "de":
      return "German";
    default:
      return "Unknown";
  }
}
const Zi = Hr("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), ht = l.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
  const i = r ? nt : "button";
  return v.jsx(i, { className: ae(Zi({ variant: t, size: n, className: e })), ref: s, ...o });
});
ht.displayName = "Button";
function yr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ji(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = l.createContext(i), c = n.length;
    n = [...n, i];
    function u(m) {
      const { scope: h, children: g, ...x } = m, f = (h == null ? void 0 : h[e][c]) || a, y = l.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ v.jsx(f.Provider, { value: y, children: g });
    }
    function d(m, h) {
      const g = (h == null ? void 0 : h[e][c]) || a, x = l.useContext(g);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return u.displayName = s + "Provider", [u, d];
  }
  const o = () => {
    const s = n.map((i) => l.createContext(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Qi(o, ...t)];
}
function Qi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: c, scopeName: u }) => {
        const m = c(s)[`__scope${u}`];
        return { ...a, ...m };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ea(e) {
  const t = e + "CollectionProvider", [n, r] = Ji(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: x, children: f } = g, y = Ne.useRef(null), w = Ne.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(o, { scope: x, itemMap: w, collectionRef: y, children: f });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", c = Ne.forwardRef(
    (g, x) => {
      const { scope: f, children: y } = g, w = s(a, f), b = ie(x, w.collectionRef);
      return /* @__PURE__ */ v.jsx(nt, { ref: b, children: y });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", m = Ne.forwardRef(
    (g, x) => {
      const { scope: f, children: y, ...w } = g, b = Ne.useRef(null), C = ie(x, b), E = s(u, f);
      return Ne.useEffect(() => (E.itemMap.set(b, { ref: b, ...w }), () => void E.itemMap.delete(b))), /* @__PURE__ */ v.jsx(nt, { [d]: "", ref: C, children: y });
    }
  );
  m.displayName = u;
  function h(g) {
    const x = s(e + "CollectionConsumer", g);
    return Ne.useCallback(() => {
      const y = x.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (E, R) => w.indexOf(E.ref.current) - w.indexOf(R.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: m },
    h,
    r
  ];
}
function Xr(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = l.createContext(i), c = n.length;
    n = [...n, i];
    const u = (m) => {
      var w;
      const { scope: h, children: g, ...x } = m, f = ((w = h == null ? void 0 : h[e]) == null ? void 0 : w[c]) || a, y = l.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ v.jsx(f.Provider, { value: y, children: g });
    };
    u.displayName = s + "Provider";
    function d(m, h) {
      var f;
      const g = ((f = h == null ? void 0 : h[e]) == null ? void 0 : f[c]) || a, x = l.useContext(g);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((i) => l.createContext(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, ta(o, ...t)];
}
function ta(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: c, scopeName: u }) => {
        const m = c(s)[`__scope${u}`];
        return { ...a, ...m };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var na = l.createContext(void 0);
function ra(e) {
  const t = l.useContext(na);
  return e || t || "ltr";
}
var oa = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ne = oa.reduce((e, t) => {
  const n = l.forwardRef((r, o) => {
    const { asChild: s, ...i } = r, a = s ? nt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(a, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function sa(e, t) {
  e && Ft.flushSync(() => e.dispatchEvent(t));
}
function Oe(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ia(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var aa = "DismissableLayer", xn = "dismissableLayer.update", ca = "dismissableLayer.pointerDownOutside", la = "dismissableLayer.focusOutside", br, Zr = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Mn = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = l.useContext(Zr), [d, m] = l.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = l.useState({}), x = ie(t, (T) => m(T)), f = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(y), b = d ? f.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = b >= w, R = fa((T) => {
      const M = T.target, F = [...u.branches].some(($) => $.contains(M));
      !E || F || (o == null || o(T), i == null || i(T), T.defaultPrevented || a == null || a());
    }, h), A = pa((T) => {
      const M = T.target;
      [...u.branches].some(($) => $.contains(M)) || (s == null || s(T), i == null || i(T), T.defaultPrevented || a == null || a());
    }, h);
    return ia((T) => {
      b === u.layers.size - 1 && (r == null || r(T), !T.defaultPrevented && a && (T.preventDefault(), a()));
    }, h), l.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (br = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), xr(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = br);
        };
    }, [d, h, n, u]), l.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), xr());
    }, [d, u]), l.useEffect(() => {
      const T = () => g({});
      return document.addEventListener(xn, T), () => document.removeEventListener(xn, T);
    }, []), /* @__PURE__ */ v.jsx(
      ne.div,
      {
        ...c,
        ref: x,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Mn.displayName = aa;
var ua = "DismissableLayerBranch", da = l.forwardRef((e, t) => {
  const n = l.useContext(Zr), r = l.useRef(null), o = ie(t, r);
  return l.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ v.jsx(ne.div, { ...e, ref: o });
});
da.displayName = ua;
function fa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          Jr(
            ca,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function pa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Jr(la, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function xr() {
  const e = new CustomEvent(xn);
  document.dispatchEvent(e);
}
function Jr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sa(o, s) : o.dispatchEvent(s);
}
var on = 0;
function ma() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? wr()), document.body.insertAdjacentElement("beforeend", e[1] ?? wr()), on++, () => {
      on === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), on--;
    };
  }, []);
}
function wr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var sn = "focusScope.autoFocusOnMount", an = "focusScope.autoFocusOnUnmount", Cr = { bubbles: !1, cancelable: !0 }, ha = "FocusScope", Qr = l.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, c] = l.useState(null), u = Oe(o), d = Oe(s), m = l.useRef(null), h = ie(t, (f) => c(f)), g = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (r) {
      let f = function(C) {
        if (g.paused || !a) return;
        const E = C.target;
        a.contains(E) ? m.current = E : We(m.current, { select: !0 });
      }, y = function(C) {
        if (g.paused || !a) return;
        const E = C.relatedTarget;
        E !== null && (a.contains(E) || We(m.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const R of C)
            R.removedNodes.length > 0 && We(a);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, a, g.paused]), l.useEffect(() => {
    if (a) {
      Er.add(g);
      const f = document.activeElement;
      if (!a.contains(f)) {
        const w = new CustomEvent(sn, Cr);
        a.addEventListener(sn, u), a.dispatchEvent(w), w.defaultPrevented || (ga(wa(eo(a)), { select: !0 }), document.activeElement === f && We(a));
      }
      return () => {
        a.removeEventListener(sn, u), setTimeout(() => {
          const w = new CustomEvent(an, Cr);
          a.addEventListener(an, d), a.dispatchEvent(w), w.defaultPrevented || We(f ?? document.body, { select: !0 }), a.removeEventListener(an, d), Er.remove(g);
        }, 0);
      };
    }
  }, [a, u, d, g]);
  const x = l.useCallback(
    (f) => {
      if (!n && !r || g.paused) return;
      const y = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, w = document.activeElement;
      if (y && w) {
        const b = f.currentTarget, [C, E] = va(b);
        C && E ? !f.shiftKey && w === E ? (f.preventDefault(), n && We(C, { select: !0 })) : f.shiftKey && w === C && (f.preventDefault(), n && We(E, { select: !0 })) : w === b && f.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ v.jsx(ne.div, { tabIndex: -1, ...i, ref: h, onKeyDown: x });
});
Qr.displayName = ha;
function ga(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (We(r, { select: t }), document.activeElement !== n) return;
}
function va(e) {
  const t = eo(e), n = Sr(t, e), r = Sr(t.reverse(), e);
  return [n, r];
}
function eo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Sr(e, t) {
  for (const n of e)
    if (!ya(n, { upTo: t })) return n;
}
function ya(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ba(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function We(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ba(e) && t && e.select();
  }
}
var Er = xa();
function xa() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Rr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Rr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Rr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function wa(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ue = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {
}, Ca = l.useId || (() => {
}), Sa = 0;
function Wt(e) {
  const [t, n] = l.useState(Ca());
  return ue(() => {
    n((r) => r ?? String(Sa++));
  }, [e]), t ? `radix-${t}` : "";
}
const Ea = ["top", "right", "bottom", "left"], $e = Math.min, fe = Math.max, jt = Math.round, St = Math.floor, Ee = (e) => ({
  x: e,
  y: e
}), Ra = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pa = {
  start: "end",
  end: "start"
};
function wn(e, t, n) {
  return fe(e, $e(t, n));
}
function _e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ke(e) {
  return e.split("-")[0];
}
function it(e) {
  return e.split("-")[1];
}
function In(e) {
  return e === "x" ? "y" : "x";
}
function Ln(e) {
  return e === "y" ? "height" : "width";
}
function Be(e) {
  return ["top", "bottom"].includes(ke(e)) ? "y" : "x";
}
function Dn(e) {
  return In(Be(e));
}
function Ta(e, t, n) {
  n === void 0 && (n = !1);
  const r = it(e), o = Dn(e), s = Ln(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Mt(i)), [i, Mt(i)];
}
function Aa(e) {
  const t = Mt(e);
  return [Cn(e), t, Cn(t)];
}
function Cn(e) {
  return e.replace(/start|end/g, (t) => Pa[t]);
}
function Na(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function Oa(e, t, n, r) {
  const o = it(e);
  let s = Na(ke(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Cn)))), s;
}
function Mt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ra[t]);
}
function _a(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function to(e) {
  return typeof e != "number" ? _a(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function It(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Pr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Be(t), i = Dn(t), a = Ln(i), c = ke(t), u = s === "y", d = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (it(t)) {
    case "start":
      g[i] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      g[i] += h * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const ka = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: m
  } = Pr(u, r, c), h = r, g = {}, x = 0;
  for (let f = 0; f < a.length; f++) {
    const {
      name: y,
      fn: w
    } = a[f], {
      x: b,
      y: C,
      data: E,
      reset: R
    } = await w({
      x: d,
      y: m,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, m = C ?? m, g = {
      ...g,
      [y]: {
        ...g[y],
        ...E
      }
    }, R && x <= 50 && (x++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (u = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: d,
      y: m
    } = Pr(u, h, c)), f = -1);
  }
  return {
    x: d,
    y: m,
    placement: h,
    strategy: o,
    middlewareData: g
  };
};
async function gt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = _e(t, e), x = to(g), y = a[h ? m === "floating" ? "reference" : "floating" : m], w = It(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), E = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = It(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: C,
    strategy: c
  }) : b);
  return {
    top: (w.top - R.top + x.top) / E.y,
    bottom: (R.bottom - w.bottom + x.bottom) / E.y,
    left: (w.left - R.left + x.left) / E.x,
    right: (R.right - w.right + x.right) / E.x
  };
}
const ja = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: c
    } = t, {
      element: u,
      padding: d = 0
    } = _e(e, t) || {};
    if (u == null)
      return {};
    const m = to(d), h = {
      x: n,
      y: r
    }, g = Dn(o), x = Ln(g), f = await i.getDimensions(u), y = g === "y", w = y ? "top" : "left", b = y ? "bottom" : "right", C = y ? "clientHeight" : "clientWidth", E = s.reference[x] + s.reference[g] - h[g] - s.floating[x], R = h[g] - s.reference[g], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let T = A ? A[C] : 0;
    (!T || !await (i.isElement == null ? void 0 : i.isElement(A))) && (T = a.floating[C] || s.floating[x]);
    const M = E / 2 - R / 2, F = T / 2 - f[x] / 2 - 1, $ = $e(m[w], F), z = $e(m[b], F), N = $, I = T - f[x] - z, j = T / 2 - f[x] / 2 + M, U = wn(N, j, I), L = !c.arrow && it(o) != null && j !== U && s.reference[x] / 2 - (j < N ? $ : z) - f[x] / 2 < 0, B = L ? j < N ? j - N : j - I : 0;
    return {
      [g]: h[g] + B,
      data: {
        [g]: U,
        centerOffset: j - U - B,
        ...L && {
          alignmentOffset: B
        }
      },
      reset: L
    };
  }
}), Ma = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: m = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: f = !0,
        ...y
      } = _e(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = ke(o), b = Be(a), C = ke(a) === a, E = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), R = h || (C || !f ? [Mt(a)] : Aa(a)), A = x !== "none";
      !h && A && R.push(...Oa(a, f, x, E));
      const T = [a, ...R], M = await gt(t, y), F = [];
      let $ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && F.push(M[w]), m) {
        const j = Ta(o, i, E);
        F.push(M[j[0]], M[j[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: F
      }], !F.every((j) => j <= 0)) {
        var z, N;
        const j = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1, U = T[j];
        if (U)
          return {
            data: {
              index: j,
              overflows: $
            },
            reset: {
              placement: U
            }
          };
        let L = (N = $.filter((B) => B.overflows[0] <= 0).sort((B, O) => B.overflows[1] - O.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!L)
          switch (g) {
            case "bestFit": {
              var I;
              const B = (I = $.filter((O) => {
                if (A) {
                  const V = Be(O.placement);
                  return V === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((V) => V > 0).reduce((V, re) => V + re, 0)]).sort((O, V) => O[1] - V[1])[0]) == null ? void 0 : I[0];
              B && (L = B);
              break;
            }
            case "initialPlacement":
              L = a;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Tr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ar(e) {
  return Ea.some((t) => e[t] >= 0);
}
const Ia = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _e(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await gt(t, {
            ...o,
            elementContext: "reference"
          }), i = Tr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Ar(i)
            }
          };
        }
        case "escaped": {
          const s = await gt(t, {
            ...o,
            altBoundary: !0
          }), i = Tr(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Ar(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function La(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = ke(n), a = it(n), c = Be(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = s && c ? -1 : 1, m = _e(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: x
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return a && typeof x == "number" && (g = a === "end" ? x * -1 : x), c ? {
    x: g * d,
    y: h * u
  } : {
    x: h * u,
    y: g * d
  };
}
const Da = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, c = await La(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, Fa = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x: w,
              y: b
            } = y;
            return {
              x: w,
              y: b
            };
          }
        },
        ...c
      } = _e(e, t), u = {
        x: n,
        y: r
      }, d = await gt(t, c), m = Be(ke(o)), h = In(m);
      let g = u[h], x = u[m];
      if (s) {
        const y = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", b = g + d[y], C = g - d[w];
        g = wn(b, g, C);
      }
      if (i) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = x + d[y], C = x - d[w];
        x = wn(b, x, C);
      }
      const f = a.fn({
        ...t,
        [h]: g,
        [m]: x
      });
      return {
        ...f,
        data: {
          x: f.x - n,
          y: f.y - r,
          enabled: {
            [h]: s,
            [m]: i
          }
        }
      };
    }
  };
}, Wa = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = _e(e, t), d = {
        x: n,
        y: r
      }, m = Be(o), h = In(m);
      let g = d[h], x = d[m];
      const f = _e(a, t), y = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...f
      };
      if (c) {
        const C = h === "y" ? "height" : "width", E = s.reference[h] - s.floating[C] + y.mainAxis, R = s.reference[h] + s.reference[C] - y.mainAxis;
        g < E ? g = E : g > R && (g = R);
      }
      if (u) {
        var w, b;
        const C = h === "y" ? "width" : "height", E = ["top", "left"].includes(ke(o)), R = s.reference[m] - s.floating[C] + (E && ((w = i.offset) == null ? void 0 : w[m]) || 0) + (E ? 0 : y.crossAxis), A = s.reference[m] + s.reference[C] + (E ? 0 : ((b = i.offset) == null ? void 0 : b[m]) || 0) - (E ? y.crossAxis : 0);
        x < R ? x = R : x > A && (x = A);
      }
      return {
        [h]: g,
        [m]: x
      };
    }
  };
}, $a = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...u
      } = _e(e, t), d = await gt(t, u), m = ke(o), h = it(o), g = Be(o) === "y", {
        width: x,
        height: f
      } = s.floating;
      let y, w;
      m === "top" || m === "bottom" ? (y = m, w = h === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = m, y = h === "end" ? "top" : "bottom");
      const b = f - d.top - d.bottom, C = x - d.left - d.right, E = $e(f - d[y], b), R = $e(x - d[w], C), A = !t.middlewareData.shift;
      let T = E, M = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = C), (r = t.middlewareData.shift) != null && r.enabled.y && (T = b), A && !h) {
        const $ = fe(d.left, 0), z = fe(d.right, 0), N = fe(d.top, 0), I = fe(d.bottom, 0);
        g ? M = x - 2 * ($ !== 0 || z !== 0 ? $ + z : fe(d.left, d.right)) : T = f - 2 * (N !== 0 || I !== 0 ? N + I : fe(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: M,
        availableHeight: T
      });
      const F = await i.getDimensions(a.floating);
      return x !== F.width || f !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $t() {
  return typeof window < "u";
}
function at(e) {
  return no(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pe(e) {
  var t;
  return (t = (no(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function no(e) {
  return $t() ? e instanceof Node || e instanceof pe(e).Node : !1;
}
function be(e) {
  return $t() ? e instanceof Element || e instanceof pe(e).Element : !1;
}
function Re(e) {
  return $t() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1;
}
function Nr(e) {
  return !$t() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
function bt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ba(e) {
  return ["table", "td", "th"].includes(at(e));
}
function Bt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Fn(e) {
  const t = Wn(), n = be(e) ? xe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Va(e) {
  let t = Ve(e);
  for (; Re(t) && !rt(t); ) {
    if (Fn(t))
      return t;
    if (Bt(t))
      return null;
    t = Ve(t);
  }
  return null;
}
function Wn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function rt(e) {
  return ["html", "body", "#document"].includes(at(e));
}
function xe(e) {
  return pe(e).getComputedStyle(e);
}
function Vt(e) {
  return be(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ve(e) {
  if (at(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nr(e) && e.host || // Fallback.
    Pe(e)
  );
  return Nr(t) ? t.host : t;
}
function ro(e) {
  const t = Ve(e);
  return rt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Re(t) && bt(t) ? t : ro(t);
}
function vt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ro(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = pe(o);
  if (s) {
    const a = Sn(i);
    return t.concat(i, i.visualViewport || [], bt(o) ? o : [], a && n ? vt(a) : []);
  }
  return t.concat(o, vt(o, [], n));
}
function Sn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function oo(e) {
  const t = xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Re(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = jt(n) !== s || jt(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function $n(e) {
  return be(e) ? e : e.contextElement;
}
function et(e) {
  const t = $n(e);
  if (!Re(t))
    return Ee(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = oo(t);
  let i = (s ? jt(n.width) : n.width) / r, a = (s ? jt(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Ha = /* @__PURE__ */ Ee(0);
function so(e) {
  const t = pe(e);
  return !Wn() || !t.visualViewport ? Ha : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function za(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== pe(e) ? !1 : t;
}
function Ge(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = $n(e);
  let i = Ee(1);
  t && (r ? be(r) && (i = et(r)) : i = et(e));
  const a = za(s, n, r) ? so(s) : Ee(0);
  let c = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, m = o.height / i.y;
  if (s) {
    const h = pe(s), g = r && be(r) ? pe(r) : r;
    let x = h, f = Sn(x);
    for (; f && r && g !== x; ) {
      const y = et(f), w = f.getBoundingClientRect(), b = xe(f), C = w.left + (f.clientLeft + parseFloat(b.paddingLeft)) * y.x, E = w.top + (f.clientTop + parseFloat(b.paddingTop)) * y.y;
      c *= y.x, u *= y.y, d *= y.x, m *= y.y, c += C, u += E, x = pe(f), f = Sn(x);
    }
  }
  return It({
    width: d,
    height: m,
    x: c,
    y: u
  });
}
function Bn(e, t) {
  const n = Vt(e).scrollLeft;
  return t ? t.left + n : Ge(Pe(e)).left + n;
}
function io(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Bn(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Ua(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Pe(r), a = t ? Bt(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ee(1);
  const d = Ee(0), m = Re(r);
  if ((m || !m && !s) && ((at(r) !== "body" || bt(i)) && (c = Vt(r)), Re(r))) {
    const g = Ge(r);
    u = et(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const h = i && !m && !s ? io(i, c, !0) : Ee(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + h.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + h.y
  };
}
function Ga(e) {
  return Array.from(e.getClientRects());
}
function Ya(e) {
  const t = Pe(e), n = Vt(e), r = e.ownerDocument.body, o = fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Bn(e);
  const a = -n.scrollTop;
  return xe(r).direction === "rtl" && (i += fe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Ka(e, t) {
  const n = pe(e), r = Pe(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = Wn();
    (!u || u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: c
  };
}
function qa(e, t) {
  const n = Ge(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Re(e) ? et(e) : Ee(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, c = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: c,
    y: u
  };
}
function Or(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ka(e, n);
  else if (t === "document")
    r = Ya(Pe(e));
  else if (be(t))
    r = qa(t, n);
  else {
    const o = so(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return It(r);
}
function ao(e, t) {
  const n = Ve(e);
  return n === t || !be(n) || rt(n) ? !1 : xe(n).position === "fixed" || ao(n, t);
}
function Xa(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = vt(e, [], !1).filter((a) => be(a) && at(a) !== "body"), o = null;
  const s = xe(e).position === "fixed";
  let i = s ? Ve(e) : e;
  for (; be(i) && !rt(i); ) {
    const a = xe(i), c = Fn(i);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || bt(i) && !c && ao(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = Ve(i);
  }
  return t.set(e, r), r;
}
function Za(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Bt(t) ? [] : Xa(t, this._c) : [].concat(n), r], a = i[0], c = i.reduce((u, d) => {
    const m = Or(t, d, o);
    return u.top = fe(m.top, u.top), u.right = $e(m.right, u.right), u.bottom = $e(m.bottom, u.bottom), u.left = fe(m.left, u.left), u;
  }, Or(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ja(e) {
  const {
    width: t,
    height: n
  } = oo(e);
  return {
    width: t,
    height: n
  };
}
function Qa(e, t, n) {
  const r = Re(t), o = Pe(t), s = n === "fixed", i = Ge(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ee(0);
  if (r || !r && !s)
    if ((at(t) !== "body" || bt(o)) && (a = Vt(t)), r) {
      const h = Ge(t, !0, s, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && (c.x = Bn(o));
  const u = o && !r && !s ? io(o, a) : Ee(0), d = i.left + a.scrollLeft - c.x - u.x, m = i.top + a.scrollTop - c.y - u.y;
  return {
    x: d,
    y: m,
    width: i.width,
    height: i.height
  };
}
function cn(e) {
  return xe(e).position === "static";
}
function _r(e, t) {
  if (!Re(e) || xe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Pe(e) === n && (n = n.ownerDocument.body), n;
}
function co(e, t) {
  const n = pe(e);
  if (Bt(e))
    return n;
  if (!Re(e)) {
    let o = Ve(e);
    for (; o && !rt(o); ) {
      if (be(o) && !cn(o))
        return o;
      o = Ve(o);
    }
    return n;
  }
  let r = _r(e, t);
  for (; r && Ba(r) && cn(r); )
    r = _r(r, t);
  return r && rt(r) && cn(r) && !Fn(r) ? n : r || Va(e) || n;
}
const ec = async function(e) {
  const t = this.getOffsetParent || co, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Qa(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function tc(e) {
  return xe(e).direction === "rtl";
}
const nc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ua,
  getDocumentElement: Pe,
  getClippingRect: Za,
  getOffsetParent: co,
  getElementRects: ec,
  getClientRects: Ga,
  getDimensions: Ja,
  getScale: et,
  isElement: be,
  isRTL: tc
};
function rc(e, t) {
  let n = null, r;
  const o = Pe(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const {
      left: u,
      top: d,
      width: m,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !m || !h)
      return;
    const g = St(d), x = St(o.clientWidth - (u + m)), f = St(o.clientHeight - (d + h)), y = St(u), b = {
      rootMargin: -g + "px " + -x + "px " + -f + "px " + -y + "px",
      threshold: fe(0, $e(1, c)) || 1
    };
    let C = !0;
    function E(R) {
      const A = R[0].intersectionRatio;
      if (A !== c) {
        if (!C)
          return i();
        A ? i(!1, A) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, b);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function oc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = $n(e), d = o || s ? [...u ? vt(u) : [], ...vt(t)] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const m = u && a ? rc(u, n) : null;
  let h = -1, g = null;
  i && (g = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === u && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), u && !c && g.observe(u), g.observe(t));
  let x, f = c ? Ge(e) : null;
  c && y();
  function y() {
    const w = Ge(e);
    f && (w.x !== f.x || w.y !== f.y || w.width !== f.width || w.height !== f.height) && n(), f = w, x = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), m == null || m(), (w = g) == null || w.disconnect(), g = null, c && cancelAnimationFrame(x);
  };
}
const sc = Da, ic = Fa, ac = Ma, cc = $a, lc = Ia, kr = ja, uc = Wa, dc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: nc,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return ka(e, t, {
    ...o,
    platform: s
  });
};
var Nt = typeof document < "u" ? ti : ni;
function Lt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Lt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Lt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function lo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function jr(e, t) {
  const n = lo(e);
  return Math.round(t * n) / n;
}
function ln(e) {
  const t = l.useRef(e);
  return Nt(() => {
    t.current = e;
  }), t;
}
function fc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, m] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, g] = l.useState(r);
  Lt(h, r) || g(r);
  const [x, f] = l.useState(null), [y, w] = l.useState(null), b = l.useCallback((O) => {
    O !== A.current && (A.current = O, f(O));
  }, []), C = l.useCallback((O) => {
    O !== T.current && (T.current = O, w(O));
  }, []), E = s || x, R = i || y, A = l.useRef(null), T = l.useRef(null), M = l.useRef(d), F = c != null, $ = ln(c), z = ln(o), N = ln(u), I = l.useCallback(() => {
    if (!A.current || !T.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: h
    };
    z.current && (O.platform = z.current), dc(A.current, T.current, O).then((V) => {
      const re = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      j.current && !Lt(M.current, re) && (M.current = re, Ft.flushSync(() => {
        m(re);
      }));
    });
  }, [h, t, n, z, N]);
  Nt(() => {
    u === !1 && M.current.isPositioned && (M.current.isPositioned = !1, m((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [u]);
  const j = l.useRef(!1);
  Nt(() => (j.current = !0, () => {
    j.current = !1;
  }), []), Nt(() => {
    if (E && (A.current = E), R && (T.current = R), E && R) {
      if ($.current)
        return $.current(E, R, I);
      I();
    }
  }, [E, R, I, $, F]);
  const U = l.useMemo(() => ({
    reference: A,
    floating: T,
    setReference: b,
    setFloating: C
  }), [b, C]), L = l.useMemo(() => ({
    reference: E,
    floating: R
  }), [E, R]), B = l.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return O;
    const V = jr(L.floating, d.x), re = jr(L.floating, d.y);
    return a ? {
      ...O,
      transform: "translate(" + V + "px, " + re + "px)",
      ...lo(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: re
    };
  }, [n, a, L.floating, d.x, d.y]);
  return l.useMemo(() => ({
    ...d,
    update: I,
    refs: U,
    elements: L,
    floatingStyles: B
  }), [d, I, U, L, B]);
}
const pc = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? kr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? kr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, mc = (e, t) => ({
  ...sc(e),
  options: [e, t]
}), hc = (e, t) => ({
  ...ic(e),
  options: [e, t]
}), gc = (e, t) => ({
  ...uc(e),
  options: [e, t]
}), vc = (e, t) => ({
  ...ac(e),
  options: [e, t]
}), yc = (e, t) => ({
  ...cc(e),
  options: [e, t]
}), bc = (e, t) => ({
  ...lc(e),
  options: [e, t]
}), xc = (e, t) => ({
  ...pc(e),
  options: [e, t]
});
var wc = "Arrow", uo = l.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ v.jsx(
    ne.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ v.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
uo.displayName = wc;
var Cc = uo;
function Sc(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = l.createContext(i), c = n.length;
    n = [...n, i];
    function u(m) {
      const { scope: h, children: g, ...x } = m, f = (h == null ? void 0 : h[e][c]) || a, y = l.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ v.jsx(f.Provider, { value: y, children: g });
    }
    function d(m, h) {
      const g = (h == null ? void 0 : h[e][c]) || a, x = l.useContext(g);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return u.displayName = s + "Provider", [u, d];
  }
  const o = () => {
    const s = n.map((i) => l.createContext(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Ec(o, ...t)];
}
function Ec(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: c, scopeName: u }) => {
        const m = c(s)[`__scope${u}`];
        return { ...a, ...m };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Rc(e) {
  const [t, n] = l.useState(void 0);
  return ue(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Vn = "Popper", [fo, Ht] = Sc(Vn), [Pc, po] = fo(Vn), mo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = l.useState(null);
  return /* @__PURE__ */ v.jsx(Pc, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
mo.displayName = Vn;
var ho = "PopperAnchor", go = l.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = po(ho, n), i = l.useRef(null), a = ie(t, i);
    return l.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ v.jsx(ne.div, { ...o, ref: a });
  }
);
go.displayName = ho;
var Hn = "PopperContent", [Tc, Ac] = fo(Hn), vo = l.forwardRef(
  (e, t) => {
    var _, K, oe, G, q, Y;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: m = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...f
    } = e, y = po(Hn, n), [w, b] = l.useState(null), C = ie(t, (ce) => b(ce)), [E, R] = l.useState(null), A = Rc(E), T = (A == null ? void 0 : A.width) ?? 0, M = (A == null ? void 0 : A.height) ?? 0, F = r + (s !== "center" ? "-" + s : ""), $ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, z = Array.isArray(u) ? u : [u], N = z.length > 0, I = {
      padding: $,
      boundary: z.filter(Oc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: j, floatingStyles: U, placement: L, isPositioned: B, middlewareData: O } = fc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...ce) => oc(...ce, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        mc({ mainAxis: o + M, alignmentAxis: i }),
        c && hc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? gc() : void 0,
          ...I
        }),
        c && vc({ ...I }),
        yc({
          ...I,
          apply: ({ elements: ce, rects: me, availableWidth: Ce, availableHeight: ve }) => {
            const { width: Le, height: Ct } = me.reference, Te = ce.floating.style;
            Te.setProperty("--radix-popper-available-width", `${Ce}px`), Te.setProperty("--radix-popper-available-height", `${ve}px`), Te.setProperty("--radix-popper-anchor-width", `${Le}px`), Te.setProperty("--radix-popper-anchor-height", `${Ct}px`);
          }
        }),
        E && xc({ element: E, padding: a }),
        _c({ arrowWidth: T, arrowHeight: M }),
        h && bc({ strategy: "referenceHidden", ...I })
      ]
    }), [V, re] = xo(L), ee = Oe(x);
    ue(() => {
      B && (ee == null || ee());
    }, [B, ee]);
    const je = (_ = O.arrow) == null ? void 0 : _.x, Me = (K = O.arrow) == null ? void 0 : K.y, we = ((oe = O.arrow) == null ? void 0 : oe.centerOffset) !== 0, [Ie, ge] = l.useState();
    return ue(() => {
      w && ge(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: B ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ie,
          "--radix-popper-transform-origin": [
            (G = O.transformOrigin) == null ? void 0 : G.x,
            (q = O.transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Y = O.hide) == null ? void 0 : Y.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ v.jsx(
          Tc,
          {
            scope: n,
            placedSide: V,
            onArrowChange: R,
            arrowX: je,
            arrowY: Me,
            shouldHideArrow: we,
            children: /* @__PURE__ */ v.jsx(
              ne.div,
              {
                "data-side": V,
                "data-align": re,
                ...f,
                ref: C,
                style: {
                  ...f.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: B ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
vo.displayName = Hn;
var yo = "PopperArrow", Nc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, bo = l.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Ac(yo, r), i = Nc[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ v.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ v.jsx(
          Cc,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
bo.displayName = yo;
function Oc(e) {
  return e !== null;
}
var _c = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, d] = xo(n), m = { start: "0%", center: "50%", end: "100%" }[d], h = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, g = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let x = "", f = "";
    return u === "bottom" ? (x = i ? m : `${h}px`, f = `${-c}px`) : u === "top" ? (x = i ? m : `${h}px`, f = `${r.floating.height + c}px`) : u === "right" ? (x = `${-c}px`, f = i ? m : `${g}px`) : u === "left" && (x = `${r.floating.width + c}px`, f = i ? m : `${g}px`), { data: { x, y: f } };
  }
});
function xo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var wo = mo, Co = go, So = vo, Eo = bo, kc = "Portal", zn = l.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = l.useState(!1);
  ue(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? oi.createPortal(/* @__PURE__ */ v.jsx(ne.div, { ...r, ref: t }), i) : null;
});
zn.displayName = kc;
function En({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = jc({ defaultProp: t, onChange: n }), s = e !== void 0, i = s ? e : r, a = Oe(n), c = l.useCallback(
    (u) => {
      if (s) {
        const m = typeof u == "function" ? u(e) : u;
        m !== e && a(m);
      } else
        o(u);
    },
    [s, e, o, a]
  );
  return [i, c];
}
function jc({
  defaultProp: e,
  onChange: t
}) {
  const n = l.useState(e), [r] = n, o = l.useRef(r), s = Oe(t);
  return l.useEffect(() => {
    o.current !== r && (s(r), o.current = r);
  }, [r, o, s]), n;
}
function Mc(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ic = "VisuallyHidden", Un = l.forwardRef(
  (e, t) => /* @__PURE__ */ v.jsx(
    ne.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Un.displayName = Ic;
var Lc = Un, Dc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xe = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Rt = {}, un = 0, Ro = function(e) {
  return e && (e.host || Ro(e.parentNode));
}, Fc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ro(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Wc = function(e, t, n, r) {
  var o = Fc(t, Array.isArray(e) ? e : [e]);
  Rt[n] || (Rt[n] = /* @__PURE__ */ new WeakMap());
  var s = Rt[n], i = [], a = /* @__PURE__ */ new Set(), c = new Set(o), u = function(m) {
    !m || a.has(m) || (a.add(m), u(m.parentNode));
  };
  o.forEach(u);
  var d = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (a.has(h))
        d(h);
      else
        try {
          var g = h.getAttribute(r), x = g !== null && g !== "false", f = (Xe.get(h) || 0) + 1, y = (s.get(h) || 0) + 1;
          Xe.set(h, f), s.set(h, y), i.push(h), f === 1 && x && Et.set(h, !0), y === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), a.clear(), un++, function() {
    i.forEach(function(m) {
      var h = Xe.get(m) - 1, g = s.get(m) - 1;
      Xe.set(m, h), s.set(m, g), h || (Et.has(m) || m.removeAttribute(r), Et.delete(m)), g || m.removeAttribute(n);
    }), un--, un || (Xe = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Rt = {});
  };
}, $c = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Dc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Wc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Se = function() {
  return Se = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function Po(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Bc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ot = "right-scroll-bar-position", _t = "width-before-scroll-bar", Vc = "with-scroll-bars-hidden", Hc = "--removed-body-scroll-bar-size";
function dn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function zc(e, t) {
  var n = ri(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Uc = typeof window < "u" ? l.useLayoutEffect : l.useEffect, Mr = /* @__PURE__ */ new WeakMap();
function Gc(e, t) {
  var n = zc(null, function(r) {
    return e.forEach(function(o) {
      return dn(o, r);
    });
  });
  return Uc(function() {
    var r = Mr.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || dn(a, null);
      }), s.forEach(function(a) {
        o.has(a) || dn(a, i);
      });
    }
    Mr.set(n, e);
  }, [e]), n;
}
function Yc(e) {
  return e;
}
function Kc(e, t) {
  t === void 0 && (t = Yc);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var c = function() {
        var d = i;
        i = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function qc(e) {
  e === void 0 && (e = {});
  var t = Kc(null);
  return t.options = Se({ async: !0, ssr: !1 }, e), t;
}
var To = function(e) {
  var t = e.sideCar, n = Po(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, Se({}, n));
};
To.isSideCarExport = !0;
function Xc(e, t) {
  return e.useMedium(t), To;
}
var Ao = qc(), fn = function() {
}, zt = l.forwardRef(function(e, t) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: fn,
    onWheelCapture: fn,
    onTouchMoveCapture: fn
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, m = e.shards, h = e.sideCar, g = e.noIsolation, x = e.inert, f = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, b = e.gapMode, C = Po(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, R = Gc([n, t]), A = Se(Se({}, C), o);
  return l.createElement(
    l.Fragment,
    null,
    d && l.createElement(E, { sideCar: Ao, removeScrollBar: u, shards: m, noIsolation: g, inert: x, setCallbacks: s, allowPinchZoom: !!f, lockRef: n, gapMode: b }),
    i ? l.cloneElement(l.Children.only(a), Se(Se({}, A), { ref: R })) : l.createElement(w, Se({}, A, { className: c, ref: R }), a)
  );
});
zt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zt.classNames = {
  fullWidth: _t,
  zeroRight: Ot
};
var Zc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Jc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Zc();
  return t && e.setAttribute("nonce", t), e;
}
function Qc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function el(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var tl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Jc()) && (Qc(t, n), el(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, nl = function() {
  var e = tl();
  return function(t, n) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, No = function() {
  var e = nl(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, rl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, pn = function(e) {
  return parseInt(e || "", 10) || 0;
}, ol = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [pn(n), pn(r), pn(o)];
}, sl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return rl;
  var t = ol(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, il = No(), tt = "data-scroll-locked", al = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Vc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(tt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ot, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(_t, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ot, " .").concat(Ot, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_t, " .").concat(_t, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(tt, `] {
    `).concat(Hc, ": ").concat(a, `px;
  }
`);
}, Ir = function() {
  var e = parseInt(document.body.getAttribute(tt) || "0", 10);
  return isFinite(e) ? e : 0;
}, cl = function() {
  l.useEffect(function() {
    return document.body.setAttribute(tt, (Ir() + 1).toString()), function() {
      var e = Ir() - 1;
      e <= 0 ? document.body.removeAttribute(tt) : document.body.setAttribute(tt, e.toString());
    };
  }, []);
}, ll = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  cl();
  var s = l.useMemo(function() {
    return sl(o);
  }, [o]);
  return l.createElement(il, { styles: al(s, !t, o, n ? "" : "!important") });
}, Rn = !1;
if (typeof window < "u")
  try {
    var Pt = Object.defineProperty({}, "passive", {
      get: function() {
        return Rn = !0, !0;
      }
    });
    window.addEventListener("test", Pt, Pt), window.removeEventListener("test", Pt, Pt);
  } catch {
    Rn = !1;
  }
var Ze = Rn ? { passive: !1 } : !1, ul = function(e) {
  return e.tagName === "TEXTAREA";
}, Oo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ul(e) && n[t] === "visible")
  );
}, dl = function(e) {
  return Oo(e, "overflowY");
}, fl = function(e) {
  return Oo(e, "overflowX");
}, Lr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = _o(e, r);
    if (o) {
      var s = ko(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, pl = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ml = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, _o = function(e, t) {
  return e === "v" ? dl(t) : fl(t);
}, ko = function(e, t) {
  return e === "v" ? pl(t) : ml(t);
}, hl = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, gl = function(e, t, n, r, o) {
  var s = hl(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, c = t.contains(a), u = !1, d = i > 0, m = 0, h = 0;
  do {
    var g = ko(e, a), x = g[0], f = g[1], y = g[2], w = f - y - s * x;
    (x || w) && _o(e, a) && (m += w, h += x), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (d && (Math.abs(m) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (u = !0), u;
}, Tt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Dr = function(e) {
  return [e.deltaX, e.deltaY];
}, Fr = function(e) {
  return e && "current" in e ? e.current : e;
}, vl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, yl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, bl = 0, Je = [];
function xl(e) {
  var t = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(bl++)[0], s = l.useState(No)[0], i = l.useRef(e);
  l.useEffect(function() {
    i.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = Bc([e.lockRef.current], (e.shards || []).map(Fr), !0).filter(Boolean);
      return f.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = l.useCallback(function(f, y) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = Tt(f), b = n.current, C = "deltaX" in f ? f.deltaX : b[0] - w[0], E = "deltaY" in f ? f.deltaY : b[1] - w[1], R, A = f.target, T = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in f && T === "h" && A.type === "range")
      return !1;
    var M = Lr(T, A);
    if (!M)
      return !0;
    if (M ? R = T : (R = T === "v" ? "h" : "v", M = Lr(T, A)), !M)
      return !1;
    if (!r.current && "changedTouches" in f && (C || E) && (r.current = R), !R)
      return !0;
    var F = r.current || R;
    return gl(F, y, f, F === "h" ? C : E, !0);
  }, []), c = l.useCallback(function(f) {
    var y = f;
    if (!(!Je.length || Je[Je.length - 1] !== s)) {
      var w = "deltaY" in y ? Dr(y) : Tt(y), b = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && vl(R.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var C = (i.current.shards || []).map(Fr).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), E = C.length > 0 ? a(y, C[0]) : !i.current.noIsolation;
        E && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = l.useCallback(function(f, y, w, b) {
    var C = { name: f, delta: y, target: w, should: b, shadowParent: wl(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = l.useCallback(function(f) {
    n.current = Tt(f), r.current = void 0;
  }, []), m = l.useCallback(function(f) {
    u(f.type, Dr(f), f.target, a(f, e.lockRef.current));
  }, []), h = l.useCallback(function(f) {
    u(f.type, Tt(f), f.target, a(f, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Je.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Ze), document.addEventListener("touchmove", c, Ze), document.addEventListener("touchstart", d, Ze), function() {
      Je = Je.filter(function(f) {
        return f !== s;
      }), document.removeEventListener("wheel", c, Ze), document.removeEventListener("touchmove", c, Ze), document.removeEventListener("touchstart", d, Ze);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    x ? l.createElement(s, { styles: yl(o) }) : null,
    g ? l.createElement(ll, { gapMode: e.gapMode }) : null
  );
}
function wl(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Cl = Xc(Ao, xl);
var jo = l.forwardRef(function(e, t) {
  return l.createElement(zt, Se({}, e, { ref: t, sideCar: Cl }));
});
jo.classNames = zt.classNames;
var Sl = [" ", "Enter", "ArrowUp", "ArrowDown"], El = [" ", "Enter"], xt = "Select", [Ut, Gt, Rl] = ea(xt), [ct, Ru] = Xr(xt, [
  Rl,
  Ht
]), Yt = Ht(), [Pl, He] = ct(xt), [Tl, Al] = ct(xt), Mo = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: m,
    disabled: h,
    required: g,
    form: x
  } = e, f = Yt(t), [y, w] = l.useState(null), [b, C] = l.useState(null), [E, R] = l.useState(!1), A = ra(u), [T = !1, M] = En({
    prop: r,
    defaultProp: o,
    onChange: s
  }), [F, $] = En({
    prop: i,
    defaultProp: a,
    onChange: c
  }), z = l.useRef(null), N = y ? x || !!y.closest("form") : !0, [I, j] = l.useState(/* @__PURE__ */ new Set()), U = Array.from(I).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ v.jsx(wo, { ...f, children: /* @__PURE__ */ v.jsxs(
    Pl,
    {
      required: g,
      scope: t,
      trigger: y,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: C,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: R,
      contentId: Wt(),
      value: F,
      onValueChange: $,
      open: T,
      onOpenChange: M,
      dir: A,
      triggerPointerDownPosRef: z,
      disabled: h,
      children: [
        /* @__PURE__ */ v.jsx(Ut.Provider, { scope: t, children: /* @__PURE__ */ v.jsx(
          Tl,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: l.useCallback((L) => {
              j((B) => new Set(B).add(L));
            }, []),
            onNativeOptionRemove: l.useCallback((L) => {
              j((B) => {
                const O = new Set(B);
                return O.delete(L), O;
              });
            }, []),
            children: n
          }
        ) }),
        N ? /* @__PURE__ */ v.jsxs(
          ss,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: d,
            autoComplete: m,
            value: F,
            onChange: (L) => $(L.target.value),
            disabled: h,
            form: x,
            children: [
              F === void 0 ? /* @__PURE__ */ v.jsx("option", { value: "" }) : null,
              Array.from(I)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
Mo.displayName = xt;
var Io = "SelectTrigger", Lo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Yt(n), i = He(Io, n), a = i.disabled || r, c = ie(t, i.onTriggerChange), u = Gt(n), d = l.useRef("touch"), [m, h, g] = is((f) => {
      const y = u().filter((C) => !C.disabled), w = y.find((C) => C.value === i.value), b = as(y, f, w);
      b !== void 0 && i.onValueChange(b.value);
    }), x = (f) => {
      a || (i.onOpenChange(!0), g()), f && (i.triggerPointerDownPosRef.current = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      });
    };
    return /* @__PURE__ */ v.jsx(Co, { asChild: !0, ...s, children: /* @__PURE__ */ v.jsx(
      ne.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": os(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: J(o.onClick, (f) => {
          f.currentTarget.focus(), d.current !== "mouse" && x(f);
        }),
        onPointerDown: J(o.onPointerDown, (f) => {
          d.current = f.pointerType;
          const y = f.target;
          y.hasPointerCapture(f.pointerId) && y.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (x(f), f.preventDefault());
        }),
        onKeyDown: J(o.onKeyDown, (f) => {
          const y = m.current !== "";
          !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && h(f.key), !(y && f.key === " ") && Sl.includes(f.key) && (x(), f.preventDefault());
        })
      }
    ) });
  }
);
Lo.displayName = Io;
var Do = "SelectValue", Fo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, c = He(Do, n), { onValueNodeHasChildrenChange: u } = c, d = s !== void 0, m = ie(t, c.onValueNodeChange);
    return ue(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ v.jsx(
      ne.span,
      {
        ...a,
        ref: m,
        style: { pointerEvents: "none" },
        children: os(c.value) ? /* @__PURE__ */ v.jsx(v.Fragment, { children: i }) : s
      }
    );
  }
);
Fo.displayName = Do;
var Nl = "SelectIcon", Wo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ v.jsx(ne.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Wo.displayName = Nl;
var Ol = "SelectPortal", $o = (e) => /* @__PURE__ */ v.jsx(zn, { asChild: !0, ...e });
$o.displayName = Ol;
var Ye = "SelectContent", Bo = l.forwardRef(
  (e, t) => {
    const n = He(Ye, e.__scopeSelect), [r, o] = l.useState();
    if (ue(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Ft.createPortal(
        /* @__PURE__ */ v.jsx(Vo, { scope: e.__scopeSelect, children: /* @__PURE__ */ v.jsx(Ut.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ v.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ v.jsx(Ho, { ...e, ref: t });
  }
);
Bo.displayName = Ye;
var ye = 10, [Vo, ze] = ct(Ye), _l = "SelectContentImpl", Ho = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: f,
      avoidCollisions: y,
      //
      ...w
    } = e, b = He(Ye, n), [C, E] = l.useState(null), [R, A] = l.useState(null), T = ie(t, (_) => E(_)), [M, F] = l.useState(null), [$, z] = l.useState(
      null
    ), N = Gt(n), [I, j] = l.useState(!1), U = l.useRef(!1);
    l.useEffect(() => {
      if (C) return $c(C);
    }, [C]), ma();
    const L = l.useCallback(
      (_) => {
        const [K, ...oe] = N().map((Y) => Y.ref.current), [G] = oe.slice(-1), q = document.activeElement;
        for (const Y of _)
          if (Y === q || (Y == null || Y.scrollIntoView({ block: "nearest" }), Y === K && R && (R.scrollTop = 0), Y === G && R && (R.scrollTop = R.scrollHeight), Y == null || Y.focus(), document.activeElement !== q)) return;
      },
      [N, R]
    ), B = l.useCallback(
      () => L([M, C]),
      [L, M, C]
    );
    l.useEffect(() => {
      I && B();
    }, [I, B]);
    const { onOpenChange: O, triggerPointerDownPosRef: V } = b;
    l.useEffect(() => {
      if (C) {
        let _ = { x: 0, y: 0 };
        const K = (G) => {
          var q, Y;
          _ = {
            x: Math.abs(Math.round(G.pageX) - (((q = V.current) == null ? void 0 : q.x) ?? 0)),
            y: Math.abs(Math.round(G.pageY) - (((Y = V.current) == null ? void 0 : Y.y) ?? 0))
          };
        }, oe = (G) => {
          _.x <= 10 && _.y <= 10 ? G.preventDefault() : C.contains(G.target) || O(!1), document.removeEventListener("pointermove", K), V.current = null;
        };
        return V.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", oe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", oe, { capture: !0 });
        };
      }
    }, [C, O, V]), l.useEffect(() => {
      const _ = () => O(!1);
      return window.addEventListener("blur", _), window.addEventListener("resize", _), () => {
        window.removeEventListener("blur", _), window.removeEventListener("resize", _);
      };
    }, [O]);
    const [re, ee] = is((_) => {
      const K = N().filter((q) => !q.disabled), oe = K.find((q) => q.ref.current === document.activeElement), G = as(K, _, oe);
      G && setTimeout(() => G.ref.current.focus());
    }), je = l.useCallback(
      (_, K, oe) => {
        const G = !U.current && !oe;
        (b.value !== void 0 && b.value === K || G) && (F(_), G && (U.current = !0));
      },
      [b.value]
    ), Me = l.useCallback(() => C == null ? void 0 : C.focus(), [C]), we = l.useCallback(
      (_, K, oe) => {
        const G = !U.current && !oe;
        (b.value !== void 0 && b.value === K || G) && z(_);
      },
      [b.value]
    ), Ie = r === "popper" ? Pn : zo, ge = Ie === Pn ? {
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: f,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ v.jsx(
      Vo,
      {
        scope: n,
        content: C,
        viewport: R,
        onViewportChange: A,
        itemRefCallback: je,
        selectedItem: M,
        onItemLeave: Me,
        itemTextRefCallback: we,
        focusSelectedItem: B,
        selectedItemText: $,
        position: r,
        isPositioned: I,
        searchRef: re,
        children: /* @__PURE__ */ v.jsx(jo, { as: nt, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
          Qr,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (_) => {
              _.preventDefault();
            },
            onUnmountAutoFocus: J(o, (_) => {
              var K;
              (K = b.trigger) == null || K.focus({ preventScroll: !0 }), _.preventDefault();
            }),
            children: /* @__PURE__ */ v.jsx(
              Mn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (_) => _.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ v.jsx(
                  Ie,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (_) => _.preventDefault(),
                    ...w,
                    ...ge,
                    onPlaced: () => j(!0),
                    ref: T,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: J(w.onKeyDown, (_) => {
                      const K = _.ctrlKey || _.altKey || _.metaKey;
                      if (_.key === "Tab" && _.preventDefault(), !K && _.key.length === 1 && ee(_.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                        let G = N().filter((q) => !q.disabled).map((q) => q.ref.current);
                        if (["ArrowUp", "End"].includes(_.key) && (G = G.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(_.key)) {
                          const q = _.target, Y = G.indexOf(q);
                          G = G.slice(Y + 1);
                        }
                        setTimeout(() => L(G)), _.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ho.displayName = _l;
var kl = "SelectItemAlignedPosition", zo = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = He(Ye, n), i = ze(Ye, n), [a, c] = l.useState(null), [u, d] = l.useState(null), m = ie(t, (T) => d(T)), h = Gt(n), g = l.useRef(!1), x = l.useRef(!0), { viewport: f, selectedItem: y, selectedItemText: w, focusSelectedItem: b } = i, C = l.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && f && y && w) {
      const T = s.trigger.getBoundingClientRect(), M = u.getBoundingClientRect(), F = s.valueNode.getBoundingClientRect(), $ = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const q = $.left - M.left, Y = F.left - q, ce = T.left - Y, me = T.width + ce, Ce = Math.max(me, M.width), ve = window.innerWidth - ye, Le = yr(Y, [
          ye,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ye, ve - Ce)
        ]);
        a.style.minWidth = me + "px", a.style.left = Le + "px";
      } else {
        const q = M.right - $.right, Y = window.innerWidth - F.right - q, ce = window.innerWidth - T.right - Y, me = T.width + ce, Ce = Math.max(me, M.width), ve = window.innerWidth - ye, Le = yr(Y, [
          ye,
          Math.max(ye, ve - Ce)
        ]);
        a.style.minWidth = me + "px", a.style.right = Le + "px";
      }
      const z = h(), N = window.innerHeight - ye * 2, I = f.scrollHeight, j = window.getComputedStyle(u), U = parseInt(j.borderTopWidth, 10), L = parseInt(j.paddingTop, 10), B = parseInt(j.borderBottomWidth, 10), O = parseInt(j.paddingBottom, 10), V = U + L + I + O + B, re = Math.min(y.offsetHeight * 5, V), ee = window.getComputedStyle(f), je = parseInt(ee.paddingTop, 10), Me = parseInt(ee.paddingBottom, 10), we = T.top + T.height / 2 - ye, Ie = N - we, ge = y.offsetHeight / 2, _ = y.offsetTop + ge, K = U + L + _, oe = V - K;
      if (K <= we) {
        const q = z.length > 0 && y === z[z.length - 1].ref.current;
        a.style.bottom = "0px";
        const Y = u.clientHeight - f.offsetTop - f.offsetHeight, ce = Math.max(
          Ie,
          ge + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (q ? Me : 0) + Y + B
        ), me = K + ce;
        a.style.height = me + "px";
      } else {
        const q = z.length > 0 && y === z[0].ref.current;
        a.style.top = "0px";
        const ce = Math.max(
          we,
          U + f.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (q ? je : 0) + ge
        ) + oe;
        a.style.height = ce + "px", f.scrollTop = K - we + f.offsetTop;
      }
      a.style.margin = `${ye}px 0`, a.style.minHeight = re + "px", a.style.maxHeight = N + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    a,
    u,
    f,
    y,
    w,
    s.dir,
    r
  ]);
  ue(() => C(), [C]);
  const [E, R] = l.useState();
  ue(() => {
    u && R(window.getComputedStyle(u).zIndex);
  }, [u]);
  const A = l.useCallback(
    (T) => {
      T && x.current === !0 && (C(), b == null || b(), x.current = !1);
    },
    [C, b]
  );
  return /* @__PURE__ */ v.jsx(
    Ml,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ v.jsx(
            ne.div,
            {
              ...o,
              ref: m,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
zo.displayName = kl;
var jl = "SelectPopperPosition", Pn = l.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ye,
    ...s
  } = e, i = Yt(n);
  return /* @__PURE__ */ v.jsx(
    So,
    {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Pn.displayName = jl;
var [Ml, Gn] = ct(Ye, {}), Tn = "SelectViewport", Uo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = ze(Tn, n), i = Gn(Tn, n), a = ie(t, s.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ v.jsx(Ut.Slot, { scope: n, children: /* @__PURE__ */ v.jsx(
        ne.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: J(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: h } = i;
            if (h != null && h.current && m) {
              const g = Math.abs(c.current - d.scrollTop);
              if (g > 0) {
                const x = window.innerHeight - ye * 2, f = parseFloat(m.style.minHeight), y = parseFloat(m.style.height), w = Math.max(f, y);
                if (w < x) {
                  const b = w + g, C = Math.min(x, b), E = b - C;
                  m.style.height = C + "px", m.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, m.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Uo.displayName = Tn;
var Go = "SelectGroup", [Il, Ll] = ct(Go), Dl = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Wt();
    return /* @__PURE__ */ v.jsx(Il, { scope: n, id: o, children: /* @__PURE__ */ v.jsx(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Dl.displayName = Go;
var Yo = "SelectLabel", Ko = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ll(Yo, n);
    return /* @__PURE__ */ v.jsx(ne.div, { id: o.id, ...r, ref: t });
  }
);
Ko.displayName = Yo;
var Dt = "SelectItem", [Fl, qo] = ct(Dt), Xo = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = He(Dt, n), c = ze(Dt, n), u = a.value === r, [d, m] = l.useState(s ?? ""), [h, g] = l.useState(!1), x = ie(
      t,
      (b) => {
        var C;
        return (C = c.itemRefCallback) == null ? void 0 : C.call(c, b, r, o);
      }
    ), f = Wt(), y = l.useRef("touch"), w = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ v.jsx(
      Fl,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: f,
        isSelected: u,
        onItemTextChange: l.useCallback((b) => {
          m((C) => C || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ v.jsx(
          Ut.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ v.jsx(
              ne.div,
              {
                role: "option",
                "aria-labelledby": f,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: x,
                onFocus: J(i.onFocus, () => g(!0)),
                onBlur: J(i.onBlur, () => g(!1)),
                onClick: J(i.onClick, () => {
                  y.current !== "mouse" && w();
                }),
                onPointerUp: J(i.onPointerUp, () => {
                  y.current === "mouse" && w();
                }),
                onPointerDown: J(i.onPointerDown, (b) => {
                  y.current = b.pointerType;
                }),
                onPointerMove: J(i.onPointerMove, (b) => {
                  var C;
                  y.current = b.pointerType, o ? (C = c.onItemLeave) == null || C.call(c) : y.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: J(i.onPointerLeave, (b) => {
                  var C;
                  b.currentTarget === document.activeElement && ((C = c.onItemLeave) == null || C.call(c));
                }),
                onKeyDown: J(i.onKeyDown, (b) => {
                  var E;
                  ((E = c.searchRef) == null ? void 0 : E.current) !== "" && b.key === " " || (El.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Xo.displayName = Dt;
var mt = "SelectItemText", Zo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = He(mt, n), a = ze(mt, n), c = qo(mt, n), u = Al(mt, n), [d, m] = l.useState(null), h = ie(
      t,
      (w) => m(w),
      c.onItemTextChange,
      (w) => {
        var b;
        return (b = a.itemTextRefCallback) == null ? void 0 : b.call(a, w, c.value, c.disabled);
      }
    ), g = d == null ? void 0 : d.textContent, x = l.useMemo(
      () => /* @__PURE__ */ v.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: f, onNativeOptionRemove: y } = u;
    return ue(() => (f(x), () => y(x)), [f, y, x]), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(ne.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ft.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Zo.displayName = mt;
var Jo = "SelectItemIndicator", Qo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return qo(Jo, n).isSelected ? /* @__PURE__ */ v.jsx(ne.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Qo.displayName = Jo;
var An = "SelectScrollUpButton", es = l.forwardRef((e, t) => {
  const n = ze(An, e.__scopeSelect), r = Gn(An, e.__scopeSelect), [o, s] = l.useState(!1), i = ie(t, r.onScrollButtonChange);
  return ue(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = c.scrollTop > 0;
        s(u);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ v.jsx(
    ns,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
es.displayName = An;
var Nn = "SelectScrollDownButton", ts = l.forwardRef((e, t) => {
  const n = ze(Nn, e.__scopeSelect), r = Gn(Nn, e.__scopeSelect), [o, s] = l.useState(!1), i = ie(t, r.onScrollButtonChange);
  return ue(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        s(d);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ v.jsx(
    ns,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
ts.displayName = Nn;
var ns = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = ze("SelectScrollButton", n), i = l.useRef(null), a = Gt(n), c = l.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return l.useEffect(() => () => c(), [c]), ue(() => {
    var d;
    const u = a().find((m) => m.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ v.jsx(
    ne.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: J(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: J(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: J(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Wl = "SelectSeparator", rs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ v.jsx(ne.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
rs.displayName = Wl;
var On = "SelectArrow", $l = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Yt(n), s = He(On, n), i = ze(On, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ v.jsx(Eo, { ...o, ...r, ref: t }) : null;
  }
);
$l.displayName = On;
function os(e) {
  return e === "" || e === void 0;
}
var ss = l.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = l.useRef(null), s = ie(t, o), i = Mc(n);
    return l.useEffect(() => {
      const a = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== n && d) {
        const m = new Event("change", { bubbles: !0 });
        d.call(a, n), a.dispatchEvent(m);
      }
    }, [i, n]), /* @__PURE__ */ v.jsx(Un, { asChild: !0, children: /* @__PURE__ */ v.jsx("select", { ...r, ref: s, defaultValue: n }) });
  }
);
ss.displayName = "BubbleSelect";
function is(e) {
  const t = Oe(e), n = l.useRef(""), r = l.useRef(0), o = l.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(a);
    },
    [t]
  ), s = l.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function as(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Bl(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Bl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vl = Mo, cs = Lo, Hl = Fo, zl = Wo, Ul = $o, ls = Bo, Gl = Uo, us = Ko, ds = Xo, Yl = Zo, Kl = Qo, fs = es, ps = ts, ms = rs;
const ql = Vl, Xl = Hl, hs = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  cs,
  {
    ref: r,
    className: ae(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ v.jsx(zl, { asChild: !0, children: /* @__PURE__ */ v.jsx(Wr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
hs.displayName = cs.displayName;
const gs = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  fs,
  {
    ref: n,
    className: ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ v.jsx(ui, { className: "h-4 w-4" })
  }
));
gs.displayName = fs.displayName;
const vs = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  ps,
  {
    ref: n,
    className: ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ v.jsx(Wr, { className: "h-4 w-4" })
  }
));
vs.displayName = ps.displayName;
const ys = l.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ v.jsx(Ul, { children: /* @__PURE__ */ v.jsxs(
  ls,
  {
    ref: o,
    className: ae(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ v.jsx(gs, {}),
      /* @__PURE__ */ v.jsx(
        Gl,
        {
          className: ae(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ v.jsx(vs, {})
    ]
  }
) }));
ys.displayName = ls.displayName;
const Zl = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  us,
  {
    ref: n,
    className: ae("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
Zl.displayName = us.displayName;
const bs = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  ds,
  {
    ref: r,
    className: ae(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(Kl, { children: /* @__PURE__ */ v.jsx(li, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ v.jsx(Yl, { children: t })
    ]
  }
));
bs.displayName = ds.displayName;
const Jl = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  ms,
  {
    ref: n,
    className: ae("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Jl.displayName = ms.displayName;
function Ql(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var Yn = (e) => {
  const { present: t, children: n } = e, r = eu(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), s = ie(r.ref, tu(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
Yn.displayName = "Presence";
function eu(e) {
  const [t, n] = l.useState(), r = l.useRef({}), o = l.useRef(e), s = l.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = Ql(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return l.useEffect(() => {
    const u = At(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), ue(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = At(u);
      e ? c("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ue(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, m = (g) => {
        const f = At(r.current).includes(g.animationName);
        if (g.target === t && f && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (g) => {
        g.target === t && (s.current = At(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: l.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function At(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tu(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [Kt, Pu] = Xr("Tooltip", [
  Ht
]), qt = Ht(), xs = "TooltipProvider", nu = 700, _n = "tooltip.open", [ru, Kn] = Kt(xs), ws = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = nu,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, [i, a] = l.useState(!0), c = l.useRef(!1), u = l.useRef(0);
  return l.useEffect(() => {
    const d = u.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ v.jsx(
    ru,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: n,
      onOpen: l.useCallback(() => {
        window.clearTimeout(u.current), a(!1);
      }, []),
      onClose: l.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => a(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: l.useCallback((d) => {
        c.current = d;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
ws.displayName = xs;
var Xt = "Tooltip", [ou, wt] = Kt(Xt), Cs = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, c = Kn(Xt, e.__scopeTooltip), u = qt(t), [d, m] = l.useState(null), h = Wt(), g = l.useRef(0), x = i ?? c.disableHoverableContent, f = a ?? c.delayDuration, y = l.useRef(!1), [w = !1, b] = En({
    prop: r,
    defaultProp: o,
    onChange: (T) => {
      T ? (c.onOpen(), document.dispatchEvent(new CustomEvent(_n))) : c.onClose(), s == null || s(T);
    }
  }), C = l.useMemo(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), E = l.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, y.current = !1, b(!0);
  }, [b]), R = l.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b(!1);
  }, [b]), A = l.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      y.current = !0, b(!0), g.current = 0;
    }, f);
  }, [f, b]);
  return l.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ v.jsx(wo, { ...u, children: /* @__PURE__ */ v.jsx(
    ou,
    {
      scope: t,
      contentId: h,
      open: w,
      stateAttribute: C,
      trigger: d,
      onTriggerChange: m,
      onTriggerEnter: l.useCallback(() => {
        c.isOpenDelayed ? A() : E();
      }, [c.isOpenDelayed, A, E]),
      onTriggerLeave: l.useCallback(() => {
        x ? R() : (window.clearTimeout(g.current), g.current = 0);
      }, [R, x]),
      onOpen: E,
      onClose: R,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Cs.displayName = Xt;
var kn = "TooltipTrigger", Ss = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = wt(kn, n), s = Kn(kn, n), i = qt(n), a = l.useRef(null), c = ie(t, a, o.onTriggerChange), u = l.useRef(!1), d = l.useRef(!1), m = l.useCallback(() => u.current = !1, []);
    return l.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ v.jsx(Co, { asChild: !0, ...i, children: /* @__PURE__ */ v.jsx(
      ne.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: J(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: J(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: J(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: J(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: J(e.onBlur, o.onClose),
        onClick: J(e.onClick, o.onClose)
      }
    ) });
  }
);
Ss.displayName = kn;
var qn = "TooltipPortal", [su, iu] = Kt(qn, {
  forceMount: void 0
}), Es = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = wt(qn, t);
  return /* @__PURE__ */ v.jsx(su, { scope: t, forceMount: n, children: /* @__PURE__ */ v.jsx(Yn, { present: n || s.open, children: /* @__PURE__ */ v.jsx(zn, { asChild: !0, container: o, children: r }) }) });
};
Es.displayName = qn;
var ot = "TooltipContent", Rs = l.forwardRef(
  (e, t) => {
    const n = iu(ot, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = wt(ot, e.__scopeTooltip);
    return /* @__PURE__ */ v.jsx(Yn, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ v.jsx(Ps, { side: o, ...s, ref: t }) : /* @__PURE__ */ v.jsx(au, { side: o, ...s, ref: t }) });
  }
), au = l.forwardRef((e, t) => {
  const n = wt(ot, e.__scopeTooltip), r = Kn(ot, e.__scopeTooltip), o = l.useRef(null), s = ie(t, o), [i, a] = l.useState(null), { trigger: c, onClose: u } = n, d = o.current, { onPointerInTransitChange: m } = r, h = l.useCallback(() => {
    a(null), m(!1);
  }, [m]), g = l.useCallback(
    (x, f) => {
      const y = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = du(w, y.getBoundingClientRect()), C = fu(w, b), E = pu(f.getBoundingClientRect()), R = hu([...C, ...E]);
      a(R), m(!0);
    },
    [m]
  );
  return l.useEffect(() => () => h(), [h]), l.useEffect(() => {
    if (c && d) {
      const x = (y) => g(y, d), f = (y) => g(y, c);
      return c.addEventListener("pointerleave", x), d.addEventListener("pointerleave", f), () => {
        c.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", f);
      };
    }
  }, [c, d, g, h]), l.useEffect(() => {
    if (i) {
      const x = (f) => {
        const y = f.target, w = { x: f.clientX, y: f.clientY }, b = (c == null ? void 0 : c.contains(y)) || (d == null ? void 0 : d.contains(y)), C = !mu(w, i);
        b ? h() : C && (h(), u());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [c, d, i, u, h]), /* @__PURE__ */ v.jsx(Ps, { ...e, ref: s });
}), [cu, lu] = Kt(Xt, { isInside: !1 }), Ps = l.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, c = wt(ot, n), u = qt(n), { onClose: d } = c;
    return l.useEffect(() => (document.addEventListener(_n, d), () => document.removeEventListener(_n, d)), [d]), l.useEffect(() => {
      if (c.trigger) {
        const m = (h) => {
          const g = h.target;
          g != null && g.contains(c.trigger) && d();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [c.trigger, d]), /* @__PURE__ */ v.jsx(
      Mn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ v.jsxs(
          So,
          {
            "data-state": c.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ v.jsx(Br, { children: r }),
              /* @__PURE__ */ v.jsx(cu, { scope: n, isInside: !0, children: /* @__PURE__ */ v.jsx(Lc, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Rs.displayName = ot;
var Ts = "TooltipArrow", uu = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = qt(n);
    return lu(
      Ts,
      n
    ).isInside ? null : /* @__PURE__ */ v.jsx(Eo, { ...o, ...r, ref: t });
  }
);
uu.displayName = Ts;
function du(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function fu(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function pu(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function mu(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, c = t[s].y, u = t[i].x, d = t[i].y;
    c > r != d > r && n < (u - a) * (r - c) / (d - c) + a && (o = !o);
  }
  return o;
}
function hu(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), gu(t);
}
function gu(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var vu = ws, yu = Cs, bu = Ss, xu = Es, As = Rs;
const mn = vu, hn = yu, gn = bu, kt = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ v.jsx(xu, { children: /* @__PURE__ */ v.jsx(
  As,
  {
    ref: r,
    sideOffset: t,
    className: ae(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
kt.displayName = As.displayName;
const wu = Hr(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Cu({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ v.jsx("div", { className: ae(wu({ variant: t }), e), ...n });
}
const Xn = l.forwardRef(({ className: e, ...t }, n) => v.jsx("div", { ref: n, className: ae("rounded-xl border bg-card text-card-foreground shadow", e), ...t }));
Xn.displayName = "Card";
const Zn = l.forwardRef(({ className: e, ...t }, n) => v.jsx("div", { ref: n, className: ae("flex flex-col space-y-1.5 p-6", e), ...t }));
Zn.displayName = "CardHeader";
const Ns = l.forwardRef(({ className: e, ...t }, n) => v.jsx("h3", { ref: n, className: ae("font-semibold leading-none tracking-tight", e), ...t }));
Ns.displayName = "CardTitle";
const Jn = l.forwardRef(({ className: e, ...t }, n) => v.jsx("div", { ref: n, className: ae("p-6 pt-0", e), ...t }));
Jn.displayName = "CardContent";
const Os = l.forwardRef(({ className: e, ...t }, n) => v.jsx("div", { ref: n, className: ae("flex items-center p-6 pt-0", e), ...t }));
Os.displayName = "CardFooter";
const _s = [
  {
    id: 1,
    dealId: "18551702398",
    dealName: "Acme Corp",
    amount: 45e4,
    probability: 50,
    company: "Acme Corp",
    contacts: "Jane Smith (IT Manager)",
    status: "Open",
    lastUpdated: "2023-10-15",
    dealStage: "Solution Validation",
    dealOwner: "Alice Green",
    dealLanguage: "en",
    nextInteraction: "2023-10-20",
    lastActivity: "2023-10-10",
    activityType: "Email",
    isStale: !0,
    highProbability: !1,
    metrics: {
      deal_age: 90,
      meetings_scheduled: 5,
      meetings_attended: 3,
      objections_raised: 0,
      objections_resolved: 0,
      competitor_mentions: 0,
      decision_maker_engaged: !1
    },
    meddpicc: {
      metrics: 2,
      economic_buyer: 1,
      decision_criteria: 3,
      decision_process: 1,
      paper_process: 1,
      implications: 4,
      champion: 1,
      competition: 3
    },
    riskFactors: [
      {
        label: "Lack of Engagement with Decision Makers",
        level: "high",
        info: "No engagement with economic buyer",
        category: "stakeholder",
        details: "No meetings with CFO or other decision-makers.",
        impact: "High risk of deal stalling due to lack of executive buy-in.",
        metric: "0 meetings with economic buyer",
        lostDealFrequency: 45
      },
      {
        label: "Undefined Decision Process",
        level: "medium",
        info: "Decision process not outlined",
        category: "process",
        details: "No clear understanding of the customer's decision-making process.",
        impact: "Potential delays and surprises in the sales cycle.",
        metric: "Decision process score: 1/5",
        lostDealFrequency: 30
      },
      {
        label: "High Deal Age with Slow Progression",
        level: "high",
        info: "Deal has aged without significant progress",
        category: "progress",
        details: "Deal has been open for 90 days but remains in early stages.",
        impact: "Increased risk of deal becoming inactive or lost.",
        metric: "Deal age: 90 days, Stage: Qualification",
        lostDealFrequency: 35
      }
    ],
    recommendedActions: [
      {
        text: "Engage with the CFO to establish executive sponsorship.",
        priority: "high",
        type: "meeting",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Clarify the customer's decision-making process and timeline.",
        priority: "medium",
        type: "call",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Accelerate deal progression by scheduling a product demo for additional stakeholders.",
        priority: "high",
        type: "event",
        completed: !1,
        addedToHubspot: !1
      }
    ],
    keyStakeholders: [
      {
        name: "Jane Smith",
        role: "IT Manager",
        engagementLevel: "High",
        contactLink: "https://app.hubspot.com/contacts/123456/contact/1"
      }
    ],
    maturity: {
      requirements: !0,
      budget: !1,
      timeline: !1,
      stakeholders: !1
    },
    riskScore: 8,
    hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-18551702398"
  },
  {
    id: 2,
    dealId: "20079565168",
    dealName: "Beta Co.",
    amount: 7e5,
    probability: 60,
    company: "Beta Co.",
    contacts: "Mark Davis (VP Finance)",
    status: "Open",
    lastUpdated: "2023-11-01",
    dealStage: "Discovery",
    dealOwner: "Sara Lee",
    dealLanguage: "en",
    nextInteraction: "2023-11-05",
    lastActivity: "2023-10-28",
    activityType: "Follow-up Call",
    isStale: !1,
    highProbability: !0,
    metrics: {
      deal_age: 60,
      meetings_scheduled: 4,
      meetings_attended: 4,
      objections_raised: 1,
      objections_resolved: 1,
      competitor_mentions: 2,
      decision_maker_engaged: !0
    },
    meddpicc: {
      metrics: 4,
      economic_buyer: 4,
      decision_criteria: 4,
      decision_process: 3,
      paper_process: 2,
      implications: 3,
      champion: 4,
      competition: 2
    },
    riskFactors: [
      {
        label: "Pricing and Budget Constraints",
        level: "medium",
        info: "Budget concerns raised by VP Finance",
        category: "financial",
        details: "Customer indicated budget limitations for the current fiscal year.",
        impact: "Potential delay in approval or need for revised pricing.",
        metric: "1 budget concern raised",
        lostDealFrequency: 25
      },
      {
        label: "Competitor Mentions",
        level: "medium",
        info: "Mention of alternative vendors",
        category: "competitive",
        details: "Customer evaluating 2 other solutions alongside ours.",
        impact: "Risk of losing deal if differentiation isn't clear.",
        metric: "2 competitor mentions",
        lostDealFrequency: 20
      }
    ],
    recommendedActions: [
      {
        text: "Provide a revised pricing structure with flexible options to address budget concerns.",
        priority: "high",
        type: "document",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Schedule an executive review to reinforce competitive advantages over other vendors.",
        priority: "medium",
        type: "meeting",
        completed: !1,
        addedToHubspot: !1
      }
    ],
    keyStakeholders: [
      {
        name: "Mark Davis",
        role: "VP Finance",
        engagementLevel: "Medium",
        contactLink: "https://app.hubspot.com/contacts/123456/contact/2"
      }
    ],
    maturity: {
      requirements: !0,
      budget: !0,
      timeline: !1,
      stakeholders: !0
    },
    riskScore: 6,
    hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-20079565168"
  },
  {
    id: 3,
    dealId: "19929371719",
    dealName: "Gamma Industries",
    amount: 3e5,
    probability: 40,
    company: "Gamma Industries",
    contacts: "Linda Brown (Operations Manager)",
    status: "Open",
    lastUpdated: "2023-09-20",
    dealStage: "Discovery",
    dealOwner: "Tommy Wright",
    dealLanguage: "en",
    nextInteraction: "2023-09-30",
    lastActivity: "2023-09-10",
    activityType: "Discovery Call",
    isStale: !0,
    highProbability: !1,
    metrics: {
      deal_age: 120,
      meetings_scheduled: 2,
      meetings_attended: 2,
      objections_raised: 3,
      objections_resolved: 1,
      competitor_mentions: 3,
      decision_maker_engaged: !1
    },
    meddpicc: {
      metrics: 2,
      economic_buyer: 1,
      decision_criteria: 2,
      decision_process: 1,
      paper_process: 1,
      implications: 2,
      champion: 2,
      competition: 3
    },
    riskFactors: [
      {
        label: "Multiple Objections Unresolved",
        level: "high",
        info: "Customer raised objections without resolution",
        category: "objections",
        details: "Several objections from Operations remain unaddressed.",
        impact: "Deal is likely to stall without further engagement from the sales team.",
        metric: "3 unresolved objections",
        lostDealFrequency: 40
      },
      {
        label: "High Competitor Mentions",
        level: "medium",
        info: "Multiple competitors considered by customer",
        category: "competitive",
        details: "Customer evaluating 3 competitors including incumbent provider.",
        impact: "Need to clearly communicate unique value proposition.",
        metric: "3 competitor mentions",
        lostDealFrequency: 32
      }
    ],
    recommendedActions: [
      {
        text: "Hold a follow-up call to address unresolved objections with Operations Manager.",
        priority: "high",
        type: "call",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Prepare a comparative analysis to highlight unique value against competitors.",
        priority: "medium",
        type: "document",
        completed: !1,
        addedToHubspot: !1
      }
    ],
    keyStakeholders: [
      {
        name: "Linda Brown",
        role: "Operations Manager",
        engagementLevel: "Medium",
        contactLink: "https://app.hubspot.com/contacts/123456/contact/3"
      }
    ],
    maturity: {
      requirements: !0,
      budget: !1,
      timeline: !1,
      stakeholders: !0
    },
    riskScore: 7,
    hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-19929371719"
  }
];
_s[0];
function Tu({ deal: e }) {
  return /* @__PURE__ */ v.jsxs(Xn, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ v.jsx(Zn, { children: /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-semibold text-slate-900", children: e.dealName }),
          /* @__PURE__ */ v.jsx(mn, { children: /* @__PURE__ */ v.jsxs(hn, { children: [
            /* @__PURE__ */ v.jsx(gn, { asChild: !0, children: /* @__PURE__ */ v.jsx(
              ht,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(e.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ v.jsx(di, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ v.jsx(kt, { children: /* @__PURE__ */ v.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ v.jsx(Cu, { variant: "outline", className: "text-sm", children: e.dealStage })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ v.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            e.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ v.jsx(mn, { children: /* @__PURE__ */ v.jsxs(hn, { children: [
              /* @__PURE__ */ v.jsx(gn, { asChild: !0, children: /* @__PURE__ */ v.jsx(ht, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ v.jsx(pr, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ v.jsx(kt, { className: "max-w-xs", children: /* @__PURE__ */ v.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ v.jsxs("p", { className: "text-lg font-semibold", children: [
            e.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-lg font-semibold", children: e.dealOwner })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Deal Lannguage" }),
            /* @__PURE__ */ v.jsx(mn, { children: /* @__PURE__ */ v.jsxs(hn, { children: [
              /* @__PURE__ */ v.jsx(gn, { asChild: !0, children: /* @__PURE__ */ v.jsx(ht, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ v.jsx(pr, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ v.jsx(kt, { className: "max-w-xs", children: /* @__PURE__ */ v.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ v.jsx("p", { className: "text-lg font-semibold", children: Xi(e.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ v.jsx(Jn, { children: /* @__PURE__ */ v.jsxs(ql, { value: e.dealId, children: [
      /* @__PURE__ */ v.jsx(hs, { className: "w-[300px]", children: /* @__PURE__ */ v.jsxs(Xl, { children: [
        e.dealName,
        " (",
        e.company,
        ")"
      ] }) }),
      /* @__PURE__ */ v.jsx(ys, { children: _s.map((t) => /* @__PURE__ */ v.jsxs(bs, { value: t.dealId, children: [
        t.dealName,
        " (",
        t.company,
        ")"
      ] }, t.dealId)) })
    ] }) })
  ] });
}
function Au({ title: e, content: t, buttonText: n, onButtonClick: r }) {
  return /* @__PURE__ */ v.jsxs(Xn, { className: "w-[350px] shadow-lg hover:shadow-xl transition-shadow", children: [
    /* @__PURE__ */ v.jsx(Zn, { children: /* @__PURE__ */ v.jsx(Ns, { className: "text-2xl font-semibold", children: e }) }),
    /* @__PURE__ */ v.jsx(Jn, { children: /* @__PURE__ */ v.jsx("p", { className: "text-muted-foreground", children: t }) }),
    /* @__PURE__ */ v.jsx(Os, { children: /* @__PURE__ */ v.jsx(
      ht,
      {
        className: "w-full",
        onClick: r,
        children: n
      }
    ) })
  ] });
}
export {
  Cu as Badge,
  ht as Button,
  Xn as Card,
  Jn as CardContent,
  Os as CardFooter,
  Zn as CardHeader,
  Ns as CardTitle,
  Tu as DealHeader,
  ql as Select,
  ys as SelectContent,
  bs as SelectItem,
  hs as SelectTrigger,
  Xl as SelectValue,
  Au as SimpleCard,
  hn as Tooltip,
  kt as TooltipContent,
  mn as TooltipProvider,
  gn as TooltipTrigger,
  ae as cn,
  _s as deals,
  Xi as getLanguageName
};

(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === 'childList')
        for (const o of r.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
function Ai(e, t) {
  const n = Object.create(null),
    s = e.split(',');
  for (let i = 0; i < s.length; i++) n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const we = {},
  en = [],
  st = () => {},
  wa = () => !1,
  Ss = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Mi = (e) => e.startsWith('onUpdate:'),
  Ae = Object.assign,
  Oi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Sa = Object.prototype.hasOwnProperty,
  ie = (e, t) => Sa.call(e, t),
  K = Array.isArray,
  tn = (e) => Vn(e) === '[object Map]',
  mn = (e) => Vn(e) === '[object Set]',
  hr = (e) => Vn(e) === '[object Date]',
  J = (e) => typeof e == 'function',
  xe = (e) => typeof e == 'string',
  ln = (e) => typeof e == 'symbol',
  ye = (e) => e !== null && typeof e == 'object',
  $o = (e) => (ye(e) || J(e)) && J(e.then) && J(e.catch),
  Ro = Object.prototype.toString,
  Vn = (e) => Ro.call(e),
  Ea = (e) => Vn(e).slice(8, -1),
  No = (e) => Vn(e) === '[object Object]',
  Li = (e) =>
    xe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  is = Ai(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Es = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  xa = /-(\w)/g,
  ft = Es((e) => e.replace(xa, (t, n) => (n ? n.toUpperCase() : ''))),
  Ta = /\B([A-Z])/g,
  gn = Es((e) => e.replace(Ta, '-$1').toLowerCase()),
  xs = Es((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ks = Es((e) => (e ? `on${xs(e)}` : '')),
  Vt = (e, t) => !Object.is(e, t),
  rs = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  as = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  cs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let mr;
const li = () =>
  mr ||
  (mr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
function Ts(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = xe(s) ? Aa(s) : Ts(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else if (xe(e) || ye(e)) return e;
}
const Ca = /;(?![^(]*\))/g,
  Ia = /:([^]+)/,
  Pa = /\/\*[^]*?\*\//g;
function Aa(e) {
  const t = {};
  return (
    e
      .replace(Pa, '')
      .split(Ca)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ia);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function he(e) {
  let t = '';
  if (xe(e)) t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = he(e[n]);
      s && (t += s + ' ');
    }
  else if (ye(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const Ma =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Oa = Ai(Ma);
function ko(e) {
  return !!e || e === '';
}
function La(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = Wt(e[s], t[s]);
  return n;
}
function Wt(e, t) {
  if (e === t) return !0;
  let n = hr(e),
    s = hr(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = ln(e)), (s = ln(t)), n || s)) return e === t;
  if (((n = K(e)), (s = K(t)), n || s)) return n && s ? La(e, t) : !1;
  if (((n = ye(e)), (s = ye(t)), n || s)) {
    if (!n || !s) return !1;
    const i = Object.keys(e).length,
      r = Object.keys(t).length;
    if (i !== r) return !1;
    for (const o in e) {
      const a = e.hasOwnProperty(o),
        l = t.hasOwnProperty(o);
      if ((a && !l) || (!a && l) || !Wt(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
function Di(e, t) {
  return e.findIndex((n) => Wt(n, t));
}
const re = (e) =>
    xe(e)
      ? e
      : e == null
      ? ''
      : K(e) || (ye(e) && (e.toString === Ro || !J(e.toString)))
      ? JSON.stringify(e, Bo, 2)
      : String(e),
  Bo = (e, t) =>
    t && t.__v_isRef
      ? Bo(e, t.value)
      : tn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i]) => ((n[`${s} =>`] = i), n),
            {},
          ),
        }
      : mn(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ye(t) && !K(t) && !No(t)
      ? String(t)
      : t;
let et;
class Da {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = et),
      !t && et && (this.index = (et.scopes || (et.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = et;
      try {
        return (et = this), t();
      } finally {
        et = n;
      }
    }
  }
  on() {
    et = this;
  }
  off() {
    et = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function $a(e, t = et) {
  t && t.active && t.effects.push(e);
}
function Ra() {
  return et;
}
const $i = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  zo = (e) => (e.w & Mt) > 0,
  jo = (e) => (e.n & Mt) > 0,
  Na = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Mt;
  },
  ka = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        zo(i) && !jo(i) ? i.delete(e) : (t[n++] = i),
          (i.w &= ~Mt),
          (i.n &= ~Mt);
      }
      t.length = n;
    }
  },
  ai = new WeakMap();
let Pn = 0,
  Mt = 1;
const ci = 30;
let tt;
const zt = Symbol(''),
  ui = Symbol('');
class Ri {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      $a(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = tt,
      n = Pt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = tt),
        (tt = this),
        (Pt = !0),
        (Mt = 1 << ++Pn),
        Pn <= ci ? Na(this) : gr(this),
        this.fn()
      );
    } finally {
      Pn <= ci && ka(this),
        (Mt = 1 << --Pn),
        (tt = this.parent),
        (Pt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    tt === this
      ? (this.deferStop = !0)
      : this.active &&
        (gr(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function gr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Pt = !0;
const Ho = [];
function _n() {
  Ho.push(Pt), (Pt = !1);
}
function vn() {
  const e = Ho.pop();
  Pt = e === void 0 ? !0 : e;
}
function Fe(e, t, n) {
  if (Pt && tt) {
    let s = ai.get(e);
    s || ai.set(e, (s = new Map()));
    let i = s.get(n);
    i || s.set(n, (i = $i())), Fo(i);
  }
}
function Fo(e, t) {
  let n = !1;
  Pn <= ci ? jo(e) || ((e.n |= Mt), (n = !zo(e))) : (n = !e.has(tt)),
    n && (e.add(tt), tt.deps.push(e));
}
function vt(e, t, n, s, i, r) {
  const o = ai.get(e);
  if (!o) return;
  let a = [];
  if (t === 'clear') a = [...o.values()];
  else if (n === 'length' && K(e)) {
    const l = Number(s);
    o.forEach((u, c) => {
      (c === 'length' || (!ln(c) && c >= l)) && a.push(u);
    });
  } else
    switch ((n !== void 0 && a.push(o.get(n)), t)) {
      case 'add':
        K(e)
          ? Li(n) && a.push(o.get('length'))
          : (a.push(o.get(zt)), tn(e) && a.push(o.get(ui)));
        break;
      case 'delete':
        K(e) || (a.push(o.get(zt)), tn(e) && a.push(o.get(ui)));
        break;
      case 'set':
        tn(e) && a.push(o.get(zt));
        break;
    }
  if (a.length === 1) a[0] && di(a[0]);
  else {
    const l = [];
    for (const u of a) u && l.push(...u);
    di($i(l));
  }
}
function di(e, t) {
  const n = K(e) ? e : [...e];
  for (const s of n) s.computed && _r(s);
  for (const s of n) s.computed || _r(s);
}
function _r(e, t) {
  (e !== tt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Ba = Ai('__proto__,__v_isRef,__isVue'),
  Vo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(ln),
  ),
  vr = za();
function za() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = ae(this);
        for (let r = 0, o = this.length; r < o; r++) Fe(s, 'get', r + '');
        const i = s[t](...n);
        return i === -1 || i === !1 ? s[t](...n.map(ae)) : i;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        _n();
        const s = ae(this)[t].apply(this, n);
        return vn(), s;
      };
    }),
    e
  );
}
function ja(e) {
  const t = ae(this);
  return Fe(t, 'has', e), t.hasOwnProperty(e);
}
class Wo {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const i = this._isReadonly,
      r = this._shallow;
    if (n === '__v_isReactive') return !i;
    if (n === '__v_isReadonly') return i;
    if (n === '__v_isShallow') return r;
    if (n === '__v_raw' && s === (i ? (r ? Qa : Ko) : r ? Yo : Uo).get(t))
      return t;
    const o = K(t);
    if (!i) {
      if (o && ie(vr, n)) return Reflect.get(vr, n, s);
      if (n === 'hasOwnProperty') return ja;
    }
    const a = Reflect.get(t, n, s);
    return (ln(n) ? Vo.has(n) : Ba(n)) || (i || Fe(t, 'get', n), r)
      ? a
      : Re(a)
      ? o && Li(n)
        ? a
        : a.value
      : ye(a)
      ? i
        ? Xo(a)
        : bn(a)
      : a;
  }
}
class Go extends Wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (an(r) && Re(r) && !Re(s)) return !1;
    if (
      !this._shallow &&
      (!us(s) && !an(s) && ((r = ae(r)), (s = ae(s))), !K(t) && Re(r) && !Re(s))
    )
      return (r.value = s), !0;
    const o = K(t) && Li(n) ? Number(n) < t.length : ie(t, n),
      a = Reflect.set(t, n, s, i);
    return (
      t === ae(i) && (o ? Vt(s, r) && vt(t, 'set', n, s) : vt(t, 'add', n, s)),
      a
    );
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && vt(t, 'delete', n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ln(n) || !Vo.has(n)) && Fe(t, 'has', n), s;
  }
  ownKeys(t) {
    return Fe(t, 'iterate', K(t) ? 'length' : zt), Reflect.ownKeys(t);
  }
}
class Ha extends Wo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Fa = new Go(),
  Va = new Ha(),
  Wa = new Go(!0),
  Ni = (e) => e,
  Cs = (e) => Reflect.getPrototypeOf(e);
function Yn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = ae(e),
    r = ae(t);
  n || (Vt(t, r) && Fe(i, 'get', t), Fe(i, 'get', r));
  const { has: o } = Cs(i),
    a = s ? Ni : n ? zi : Nn;
  if (o.call(i, t)) return a(e.get(t));
  if (o.call(i, r)) return a(e.get(r));
  e !== i && e.get(t);
}
function Kn(e, t = !1) {
  const n = this.__v_raw,
    s = ae(n),
    i = ae(e);
  return (
    t || (Vt(e, i) && Fe(s, 'has', e), Fe(s, 'has', i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function qn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Fe(ae(e), 'iterate', zt), Reflect.get(e, 'size', e)
  );
}
function br(e) {
  e = ae(e);
  const t = ae(this);
  return Cs(t).has.call(t, e) || (t.add(e), vt(t, 'add', e, e)), this;
}
function yr(e, t) {
  t = ae(t);
  const n = ae(this),
    { has: s, get: i } = Cs(n);
  let r = s.call(n, e);
  r || ((e = ae(e)), (r = s.call(n, e)));
  const o = i.call(n, e);
  return (
    n.set(e, t), r ? Vt(t, o) && vt(n, 'set', e, t) : vt(n, 'add', e, t), this
  );
}
function wr(e) {
  const t = ae(this),
    { has: n, get: s } = Cs(t);
  let i = n.call(t, e);
  i || ((e = ae(e)), (i = n.call(t, e))), s && s.call(t, e);
  const r = t.delete(e);
  return i && vt(t, 'delete', e, void 0), r;
}
function Sr() {
  const e = ae(this),
    t = e.size !== 0,
    n = e.clear();
  return t && vt(e, 'clear', void 0, void 0), n;
}
function Xn(e, t) {
  return function (s, i) {
    const r = this,
      o = r.__v_raw,
      a = ae(o),
      l = t ? Ni : e ? zi : Nn;
    return (
      !e && Fe(a, 'iterate', zt), o.forEach((u, c) => s.call(i, l(u), l(c), r))
    );
  };
}
function Zn(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = ae(i),
      o = tn(r),
      a = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      u = i[e](...s),
      c = n ? Ni : t ? zi : Nn;
    return (
      !t && Fe(r, 'iterate', l ? ui : zt),
      {
        next() {
          const { value: d, done: p } = u.next();
          return p
            ? { value: d, done: p }
            : { value: a ? [c(d[0]), c(d[1])] : c(d), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function St(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function Ga() {
  const e = {
      get(r) {
        return Yn(this, r);
      },
      get size() {
        return qn(this);
      },
      has: Kn,
      add: br,
      set: yr,
      delete: wr,
      clear: Sr,
      forEach: Xn(!1, !1),
    },
    t = {
      get(r) {
        return Yn(this, r, !1, !0);
      },
      get size() {
        return qn(this);
      },
      has: Kn,
      add: br,
      set: yr,
      delete: wr,
      clear: Sr,
      forEach: Xn(!1, !0),
    },
    n = {
      get(r) {
        return Yn(this, r, !0);
      },
      get size() {
        return qn(this, !0);
      },
      has(r) {
        return Kn.call(this, r, !0);
      },
      add: St('add'),
      set: St('set'),
      delete: St('delete'),
      clear: St('clear'),
      forEach: Xn(!0, !1),
    },
    s = {
      get(r) {
        return Yn(this, r, !0, !0);
      },
      get size() {
        return qn(this, !0);
      },
      has(r) {
        return Kn.call(this, r, !0);
      },
      add: St('add'),
      set: St('set'),
      delete: St('delete'),
      clear: St('clear'),
      forEach: Xn(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      (e[r] = Zn(r, !1, !1)),
        (n[r] = Zn(r, !0, !1)),
        (t[r] = Zn(r, !1, !0)),
        (s[r] = Zn(r, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Ua, Ya, Ka, qa] = Ga();
function ki(e, t) {
  const n = t ? (e ? qa : Ka) : e ? Ya : Ua;
  return (s, i, r) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
      ? e
      : i === '__v_raw'
      ? s
      : Reflect.get(ie(n, i) && i in s ? n : s, i, r);
}
const Xa = { get: ki(!1, !1) },
  Za = { get: ki(!1, !0) },
  Ja = { get: ki(!0, !1) },
  Uo = new WeakMap(),
  Yo = new WeakMap(),
  Ko = new WeakMap(),
  Qa = new WeakMap();
function ec(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function tc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ec(Ea(e));
}
function bn(e) {
  return an(e) ? e : Bi(e, !1, Fa, Xa, Uo);
}
function qo(e) {
  return Bi(e, !1, Wa, Za, Yo);
}
function Xo(e) {
  return Bi(e, !0, Va, Ja, Ko);
}
function Bi(e, t, n, s, i) {
  if (!ye(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = i.get(e);
  if (r) return r;
  const o = tc(e);
  if (o === 0) return e;
  const a = new Proxy(e, o === 2 ? s : n);
  return i.set(e, a), a;
}
function nn(e) {
  return an(e) ? nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function an(e) {
  return !!(e && e.__v_isReadonly);
}
function us(e) {
  return !!(e && e.__v_isShallow);
}
function Zo(e) {
  return nn(e) || an(e);
}
function ae(e) {
  const t = e && e.__v_raw;
  return t ? ae(t) : e;
}
function Jo(e) {
  return as(e, '__v_skip', !0), e;
}
const Nn = (e) => (ye(e) ? bn(e) : e),
  zi = (e) => (ye(e) ? Xo(e) : e);
function Qo(e) {
  Pt && tt && ((e = ae(e)), Fo(e.dep || (e.dep = $i())));
}
function el(e, t) {
  e = ae(e);
  const n = e.dep;
  n && di(n);
}
function Re(e) {
  return !!(e && e.__v_isRef === !0);
}
function te(e) {
  return tl(e, !1);
}
function nc(e) {
  return tl(e, !0);
}
function tl(e, t) {
  return Re(e) ? e : new sc(e, t);
}
class sc {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ae(t)),
      (this._value = n ? t : Nn(t));
  }
  get value() {
    return Qo(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || us(t) || an(t);
    (t = n ? t : ae(t)),
      Vt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Nn(t)), el(this));
  }
}
function le(e) {
  return Re(e) ? e.value : e;
}
const ic = {
  get: (e, t, n) => le(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return Re(i) && !Re(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function nl(e) {
  return nn(e) ? e : new Proxy(e, ic);
}
class rc {
  constructor(t, n, s, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new Ri(t, () => {
        this._dirty || ((this._dirty = !0), el(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = ae(this);
    return (
      Qo(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function oc(e, t, n = !1) {
  let s, i;
  const r = J(e);
  return (
    r ? ((s = e), (i = st)) : ((s = e.get), (i = e.set)),
    new rc(s, i, r || !i, n)
  );
}
function At(e, t, n, s) {
  let i;
  try {
    i = s ? e(...s) : e();
  } catch (r) {
    Is(r, t, n);
  }
  return i;
}
function it(e, t, n, s) {
  if (J(e)) {
    const r = At(e, t, n, s);
    return (
      r &&
        $o(r) &&
        r.catch((o) => {
          Is(o, t, n);
        }),
      r
    );
  }
  const i = [];
  for (let r = 0; r < e.length; r++) i.push(it(e[r], t, n, s));
  return i;
}
function Is(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy,
      a = n;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, o, a) === !1) return;
      }
      r = r.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      At(l, null, 10, [e, o, a]);
      return;
    }
  }
  lc(e, n, i, s);
}
function lc(e, t, n, s = !0) {
  console.error(e);
}
let kn = !1,
  fi = !1;
const $e = [];
let ut = 0;
const sn = [];
let gt = null,
  Rt = 0;
const sl = Promise.resolve();
let ji = null;
function Hi(e) {
  const t = ji || sl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ac(e) {
  let t = ut + 1,
    n = $e.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = $e[s],
      r = Bn(i);
    r < e || (r === e && i.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Fi(e) {
  (!$e.length || !$e.includes(e, kn && e.allowRecurse ? ut + 1 : ut)) &&
    (e.id == null ? $e.push(e) : $e.splice(ac(e.id), 0, e), il());
}
function il() {
  !kn && !fi && ((fi = !0), (ji = sl.then(ol)));
}
function cc(e) {
  const t = $e.indexOf(e);
  t > ut && $e.splice(t, 1);
}
function uc(e) {
  K(e)
    ? sn.push(...e)
    : (!gt || !gt.includes(e, e.allowRecurse ? Rt + 1 : Rt)) && sn.push(e),
    il();
}
function Er(e, t = kn ? ut + 1 : 0) {
  for (; t < $e.length; t++) {
    const n = $e[t];
    n && n.pre && ($e.splice(t, 1), t--, n());
  }
}
function rl(e) {
  if (sn.length) {
    const t = [...new Set(sn)];
    if (((sn.length = 0), gt)) {
      gt.push(...t);
      return;
    }
    for (gt = t, gt.sort((n, s) => Bn(n) - Bn(s)), Rt = 0; Rt < gt.length; Rt++)
      gt[Rt]();
    (gt = null), (Rt = 0);
  }
}
const Bn = (e) => (e.id == null ? 1 / 0 : e.id),
  dc = (e, t) => {
    const n = Bn(e) - Bn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function ol(e) {
  (fi = !1), (kn = !0), $e.sort(dc);
  const t = st;
  try {
    for (ut = 0; ut < $e.length; ut++) {
      const n = $e[ut];
      n && n.active !== !1 && At(n, null, 14);
    }
  } finally {
    (ut = 0),
      ($e.length = 0),
      rl(),
      (kn = !1),
      (ji = null),
      ($e.length || sn.length) && ol();
  }
}
function fc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || we;
  let i = n;
  const r = t.startsWith('update:'),
    o = r && t.slice(7);
  if (o && o in s) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: d, trim: p } = s[c] || we;
    p && (i = n.map((f) => (xe(f) ? f.trim() : f))), d && (i = n.map(cs));
  }
  let a,
    l = s[(a = ks(t))] || s[(a = ks(ft(t)))];
  !l && r && (l = s[(a = ks(gn(t)))]), l && it(l, e, 6, i);
  const u = s[a + 'Once'];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), it(u, e, 6, i);
  }
}
function ll(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let o = {},
    a = !1;
  if (!J(e)) {
    const l = (u) => {
      const c = ll(u, t, !0);
      c && ((a = !0), Ae(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !r && !a
    ? (ye(e) && s.set(e, null), null)
    : (K(r) ? r.forEach((l) => (o[l] = null)) : Ae(o, r),
      ye(e) && s.set(e, o),
      o);
}
function Ps(e, t) {
  return !e || !Ss(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, gn(t)) || ie(e, t));
}
let Ne = null,
  As = null;
function ds(e) {
  const t = Ne;
  return (Ne = e), (As = (e && e.type.__scopeId) || null), t;
}
function ke(e) {
  As = e;
}
function Be() {
  As = null;
}
function Ie(e, t = Ne, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && $r(-1);
    const r = ds(t);
    let o;
    try {
      o = e(...i);
    } finally {
      ds(r), s._d && $r(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Bs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: r,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: u,
    render: c,
    renderCache: d,
    data: p,
    setupState: f,
    ctx: v,
    inheritAttrs: b,
  } = e;
  let I, E;
  const g = ds(e);
  try {
    if (n.shapeFlag & 4) {
      const S = i || s,
        A = S;
      (I = ct(c.call(A, S, d, r, f, p, v))), (E = l);
    } else {
      const S = t;
      (I = ct(
        S.length > 1 ? S(r, { attrs: l, slots: a, emit: u }) : S(r, null),
      )),
        (E = t.props ? l : pc(l));
    }
  } catch (S) {
    (Ln.length = 0), Is(S, e, 1), (I = X(Ot));
  }
  let _ = I;
  if (E && b !== !1) {
    const S = Object.keys(E),
      { shapeFlag: A } = _;
    S.length && A & 7 && (o && S.some(Mi) && (E = hc(E, o)), (_ = cn(_, E)));
  }
  return (
    n.dirs && ((_ = cn(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (_.transition = n.transition),
    (I = _),
    ds(g),
    I
  );
}
const pc = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Ss(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  hc = (e, t) => {
    const n = {};
    for (const s in e) (!Mi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function mc(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: o, children: a, patchFlag: l } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? xr(s, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const p = c[d];
        if (o[p] !== s[p] && !Ps(u, p)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? xr(s, o, u)
        : !0
      : !!o;
  return !1;
}
function xr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Ps(n, r)) return !0;
  }
  return !1;
}
function gc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Vi = 'components';
function Wi(e, t) {
  return cl(Vi, e, !0, t) || e;
}
const al = Symbol.for('v-ndc');
function _c(e) {
  return xe(e) ? cl(Vi, e, !1) || e : e || al;
}
function cl(e, t, n = !0, s = !1) {
  const i = Ne || Pe;
  if (i) {
    const r = i.type;
    if (e === Vi) {
      const a = ru(r, !1);
      if (a && (a === t || a === ft(t) || a === xs(ft(t)))) return r;
    }
    const o = Tr(i[e] || r[e], t) || Tr(i.appContext[e], t);
    return !o && s ? r : o;
  }
}
function Tr(e, t) {
  return e && (e[t] || e[ft(t)] || e[xs(ft(t))]);
}
const vc = (e) => e.__isSuspense;
function bc(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : uc(e);
}
const Jn = {};
function jt(e, t, n) {
  return ul(e, t, n);
}
function ul(
  e,
  t,
  { immediate: n, deep: s, flush: i, onTrack: r, onTrigger: o } = we,
) {
  var a;
  const l = Ra() === ((a = Pe) == null ? void 0 : a.scope) ? Pe : null;
  let u,
    c = !1,
    d = !1;
  if (
    (Re(e)
      ? ((u = () => e.value), (c = us(e)))
      : nn(e)
      ? ((u = () => e), (s = !0))
      : K(e)
      ? ((d = !0),
        (c = e.some((S) => nn(S) || us(S))),
        (u = () =>
          e.map((S) => {
            if (Re(S)) return S.value;
            if (nn(S)) return Bt(S);
            if (J(S)) return At(S, l, 2);
          })))
      : J(e)
      ? t
        ? (u = () => At(e, l, 2))
        : (u = () => {
            if (!(l && l.isUnmounted)) return p && p(), it(e, l, 3, [f]);
          })
      : (u = st),
    t && s)
  ) {
    const S = u;
    u = () => Bt(S());
  }
  let p,
    f = (S) => {
      p = g.onStop = () => {
        At(S, l, 4), (p = g.onStop = void 0);
      };
    },
    v;
  if (Hn)
    if (
      ((f = st),
      t ? n && it(t, l, 3, [u(), d ? [] : void 0, f]) : u(),
      i === 'sync')
    ) {
      const S = au();
      v = S.__watcherHandles || (S.__watcherHandles = []);
    } else return st;
  let b = d ? new Array(e.length).fill(Jn) : Jn;
  const I = () => {
    if (g.active)
      if (t) {
        const S = g.run();
        (s || c || (d ? S.some((A, j) => Vt(A, b[j])) : Vt(S, b))) &&
          (p && p(),
          it(t, l, 3, [S, b === Jn ? void 0 : d && b[0] === Jn ? [] : b, f]),
          (b = S));
      } else g.run();
  };
  I.allowRecurse = !!t;
  let E;
  i === 'sync'
    ? (E = I)
    : i === 'post'
    ? (E = () => He(I, l && l.suspense))
    : ((I.pre = !0), l && (I.id = l.uid), (E = () => Fi(I)));
  const g = new Ri(u, E);
  t
    ? n
      ? I()
      : (b = g.run())
    : i === 'post'
    ? He(g.run.bind(g), l && l.suspense)
    : g.run();
  const _ = () => {
    g.stop(), l && l.scope && Oi(l.scope.effects, g);
  };
  return v && v.push(_), _;
}
function yc(e, t, n) {
  const s = this.proxy,
    i = xe(e) ? (e.includes('.') ? dl(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  J(t) ? (r = t) : ((r = t.handler), (n = t));
  const o = Pe;
  un(this);
  const a = ul(i, r.bind(s), n);
  return o ? un(o) : Ht(), a;
}
function dl(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function Bt(e, t) {
  if (!ye(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Re(e))) Bt(e.value, t);
  else if (K(e)) for (let n = 0; n < e.length; n++) Bt(e[n], t);
  else if (mn(e) || tn(e))
    e.forEach((n) => {
      Bt(n, t);
    });
  else if (No(e)) for (const n in e) Bt(e[n], t);
  return e;
}
function zn(e, t) {
  const n = Ne;
  if (n === null) return e;
  const s = Ds(n) || n.proxy,
    i = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, a, l, u = we] = t[r];
    o &&
      (J(o) && (o = { mounted: o, updated: o }),
      o.deep && Bt(a),
      i.push({
        dir: o,
        instance: s,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: u,
      }));
  }
  return e;
}
function Dt(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[s];
    l && (_n(), it(l, n, 8, [e.el, a, e, t]), vn());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function fl(e, t) {
  return J(e) ? (() => Ae({ name: e.name }, t, { setup: e }))() : e;
}
const Mn = (e) => !!e.type.__asyncLoader,
  pl = (e) => e.type.__isKeepAlive;
function wc(e, t) {
  hl(e, 'a', t);
}
function Sc(e, t) {
  hl(e, 'da', t);
}
function hl(e, t, n = Pe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((Ms(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      pl(i.parent.vnode) && Ec(s, t, n, i), (i = i.parent);
  }
}
function Ec(e, t, n, s) {
  const i = Ms(t, e, s, !0);
  Yi(() => {
    Oi(s[t], i);
  }, n);
}
function Ms(e, t, n = Pe, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          _n(), un(n);
          const a = it(t, n, e, o);
          return Ht(), vn(), a;
        });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const bt =
    (e) =>
    (t, n = Pe) =>
      (!Hn || e === 'sp') && Ms(e, (...s) => t(...s), n),
  xc = bt('bm'),
  yt = bt('m'),
  ml = bt('bu'),
  Gi = bt('u'),
  Ui = bt('bum'),
  Yi = bt('um'),
  Tc = bt('sp'),
  Cc = bt('rtg'),
  Ic = bt('rtc');
function Pc(e, t = Pe) {
  Ms('ec', e, t);
}
function Te(e, t, n, s) {
  let i;
  const r = n && n[s];
  if (K(e) || xe(e)) {
    i = new Array(e.length);
    for (let o = 0, a = e.length; o < a; o++)
      i[o] = t(e[o], o, void 0, r && r[o]);
  } else if (typeof e == 'number') {
    i = new Array(e);
    for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r && r[o]);
  } else if (ye(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (o, a) => t(o, a, void 0, r && r[a]));
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const u = o[a];
        i[a] = t(e[u], u, a, r && r[a]);
      }
    }
  else i = [];
  return n && (n[s] = i), i;
}
function Ac(e, t, n = {}, s, i) {
  if (Ne.isCE || (Ne.parent && Mn(Ne.parent) && Ne.parent.isCE))
    return t !== 'default' && (n.name = t), X('slot', n, s && s());
  let r = e[t];
  r && r._c && (r._d = !1), O();
  const o = r && gl(r(n)),
    a = Me(
      ne,
      { key: n.key || (o && o.key) || `_${t}` },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    );
  return (
    !i && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
    r && r._c && (r._d = !0),
    a
  );
}
function gl(e) {
  return e.some((t) =>
    hs(t) ? !(t.type === Ot || (t.type === ne && !gl(t.children))) : !0,
  )
    ? e
    : null;
}
const pi = (e) => (e ? (Il(e) ? Ds(e) || e.proxy : pi(e.parent)) : null),
  On = Ae(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pi(e.parent),
    $root: (e) => pi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ki(e),
    $forceUpdate: (e) => e.f || (e.f = () => Fi(e.update)),
    $nextTick: (e) => e.n || (e.n = Hi.bind(e.proxy)),
    $watch: (e) => yc.bind(e),
  }),
  zs = (e, t) => e !== we && !e.__isScriptSetup && ie(e, t),
  Mc = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: a,
        appContext: l,
      } = e;
      let u;
      if (t[0] !== '$') {
        const f = o[t];
        if (f !== void 0)
          switch (f) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (zs(s, t)) return (o[t] = 1), s[t];
          if (i !== we && ie(i, t)) return (o[t] = 2), i[t];
          if ((u = e.propsOptions[0]) && ie(u, t)) return (o[t] = 3), r[t];
          if (n !== we && ie(n, t)) return (o[t] = 4), n[t];
          hi && (o[t] = 0);
        }
      }
      const c = On[t];
      let d, p;
      if (c) return t === '$attrs' && Fe(e, 'get', t), c(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== we && ie(n, t)) return (o[t] = 4), n[t];
      if (((p = l.config.globalProperties), ie(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return zs(i, t)
        ? ((i[t] = n), !0)
        : s !== we && ie(s, t)
        ? ((s[t] = n), !0)
        : ie(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
        },
      },
      o,
    ) {
      let a;
      return (
        !!n[o] ||
        (e !== we && ie(e, o)) ||
        zs(t, o) ||
        ((a = r[0]) && ie(a, o)) ||
        ie(s, o) ||
        ie(On, o) ||
        ie(i.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ie(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Cr(e) {
  return K(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let hi = !0;
function Oc(e) {
  const t = Ki(e),
    n = e.proxy,
    s = e.ctx;
  (hi = !1), t.beforeCreate && Ir(t.beforeCreate, e, 'bc');
  const {
    data: i,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: f,
    updated: v,
    activated: b,
    deactivated: I,
    beforeDestroy: E,
    beforeUnmount: g,
    destroyed: _,
    unmounted: S,
    render: A,
    renderTracked: j,
    renderTriggered: B,
    errorCaptured: q,
    serverPrefetch: T,
    expose: Q,
    inheritAttrs: $,
    components: W,
    directives: V,
    filters: se,
  } = t;
  if ((u && Lc(u, s, null), o))
    for (const de in o) {
      const oe = o[de];
      J(oe) && (s[de] = oe.bind(n));
    }
  if (i) {
    const de = i.call(n, n);
    ye(de) && (e.data = bn(de));
  }
  if (((hi = !0), r))
    for (const de in r) {
      const oe = r[de],
        Ke = J(oe) ? oe.bind(n, n) : J(oe.get) ? oe.get.bind(n, n) : st,
        Je = !J(oe) && J(oe.set) ? oe.set.bind(n) : st,
        Ve = _e({ get: Ke, set: Je });
      Object.defineProperty(s, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (Oe) => (Ve.value = Oe),
      });
    }
  if (a) for (const de in a) _l(a[de], s, n, de);
  if (l) {
    const de = J(l) ? l.call(n) : l;
    Reflect.ownKeys(de).forEach((oe) => {
      rn(oe, de[oe]);
    });
  }
  c && Ir(c, e, 'c');
  function me(de, oe) {
    K(oe) ? oe.forEach((Ke) => de(Ke.bind(n))) : oe && de(oe.bind(n));
  }
  if (
    (me(xc, d),
    me(yt, p),
    me(ml, f),
    me(Gi, v),
    me(wc, b),
    me(Sc, I),
    me(Pc, q),
    me(Ic, j),
    me(Cc, B),
    me(Ui, g),
    me(Yi, S),
    me(Tc, T),
    K(Q))
  )
    if (Q.length) {
      const de = e.exposed || (e.exposed = {});
      Q.forEach((oe) => {
        Object.defineProperty(de, oe, {
          get: () => n[oe],
          set: (Ke) => (n[oe] = Ke),
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === st && (e.render = A),
    $ != null && (e.inheritAttrs = $),
    W && (e.components = W),
    V && (e.directives = V);
}
function Lc(e, t, n = st) {
  K(e) && (e = mi(e));
  for (const s in e) {
    const i = e[s];
    let r;
    ye(i)
      ? 'default' in i
        ? (r = rt(i.from || s, i.default, !0))
        : (r = rt(i.from || s))
      : (r = rt(i)),
      Re(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (t[s] = r);
  }
}
function Ir(e, t, n) {
  it(K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function _l(e, t, n, s) {
  const i = s.includes('.') ? dl(n, s) : () => n[s];
  if (xe(e)) {
    const r = t[e];
    J(r) && jt(i, r);
  } else if (J(e)) jt(i, e.bind(n));
  else if (ye(e))
    if (K(e)) e.forEach((r) => _l(r, t, n, s));
    else {
      const r = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(r) && jt(i, r, e);
    }
}
function Ki(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = r.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !i.length && !n && !s
      ? (l = t)
      : ((l = {}), i.length && i.forEach((u) => fs(l, u, o, !0)), fs(l, t, o)),
    ye(t) && r.set(t, l),
    l
  );
}
function fs(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && fs(e, r, n, !0), i && i.forEach((o) => fs(e, o, n, !0));
  for (const o in t)
    if (!(s && o === 'expose')) {
      const a = Dc[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Dc = {
  data: Pr,
  props: Ar,
  emits: Ar,
  methods: An,
  computed: An,
  beforeCreate: ze,
  created: ze,
  beforeMount: ze,
  mounted: ze,
  beforeUpdate: ze,
  updated: ze,
  beforeDestroy: ze,
  beforeUnmount: ze,
  destroyed: ze,
  unmounted: ze,
  activated: ze,
  deactivated: ze,
  errorCaptured: ze,
  serverPrefetch: ze,
  components: An,
  directives: An,
  watch: Rc,
  provide: Pr,
  inject: $c,
};
function Pr(e, t) {
  return t
    ? e
      ? function () {
          return Ae(
            J(e) ? e.call(this, this) : e,
            J(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function $c(e, t) {
  return An(mi(e), mi(t));
}
function mi(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ze(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function An(e, t) {
  return e ? Ae(Object.create(null), e, t) : t;
}
function Ar(e, t) {
  return e
    ? K(e) && K(t)
      ? [...new Set([...e, ...t])]
      : Ae(Object.create(null), Cr(e), Cr(t ?? {}))
    : t;
}
function Rc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(Object.create(null), e);
  for (const s in t) n[s] = ze(e[s], t[s]);
  return n;
}
function vl() {
  return {
    app: null,
    config: {
      isNativeTag: wa,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Nc = 0;
function kc(e, t) {
  return function (s, i = null) {
    J(s) || (s = Ae({}, s)), i != null && !ye(i) && (i = null);
    const r = vl(),
      o = new WeakSet();
    let a = !1;
    const l = (r.app = {
      _uid: Nc++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: cu,
      get config() {
        return r.config;
      },
      set config(u) {},
      use(u, ...c) {
        return (
          o.has(u) ||
            (u && J(u.install)
              ? (o.add(u), u.install(l, ...c))
              : J(u) && (o.add(u), u(l, ...c))),
          l
        );
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), l;
      },
      component(u, c) {
        return c ? ((r.components[u] = c), l) : r.components[u];
      },
      directive(u, c) {
        return c ? ((r.directives[u] = c), l) : r.directives[u];
      },
      mount(u, c, d) {
        if (!a) {
          const p = X(s, i);
          return (
            (p.appContext = r),
            c && t ? t(p, u) : e(p, u, d),
            (a = !0),
            (l._container = u),
            (u.__vue_app__ = l),
            Ds(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(u, c) {
        return (r.provides[u] = c), l;
      },
      runWithContext(u) {
        ps = l;
        try {
          return u();
        } finally {
          ps = null;
        }
      },
    });
    return l;
  };
}
let ps = null;
function rn(e, t) {
  if (Pe) {
    let n = Pe.provides;
    const s = Pe.parent && Pe.parent.provides;
    s === n && (n = Pe.provides = Object.create(s)), (n[e] = t);
  }
}
function rt(e, t, n = !1) {
  const s = Pe || Ne;
  if (s || ps) {
    const i = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : ps._context.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && J(t) ? t.call(s && s.proxy) : t;
  }
}
function Bc(e, t, n, s = !1) {
  const i = {},
    r = {};
  as(r, Ls, 1), (e.propsDefaults = Object.create(null)), bl(e, t, i, r);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (e.props = s ? i : qo(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r);
}
function zc(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    a = ae(i),
    [l] = e.propsOptions;
  let u = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        if (Ps(e.emitsOptions, p)) continue;
        const f = t[p];
        if (l)
          if (ie(r, p)) f !== r[p] && ((r[p] = f), (u = !0));
          else {
            const v = ft(p);
            i[v] = gi(l, a, v, f, e, !1);
          }
        else f !== r[p] && ((r[p] = f), (u = !0));
      }
    }
  } else {
    bl(e, t, i, r) && (u = !0);
    let c;
    for (const d in a)
      (!t || (!ie(t, d) && ((c = gn(d)) === d || !ie(t, c)))) &&
        (l
          ? n &&
            (n[d] !== void 0 || n[c] !== void 0) &&
            (i[d] = gi(l, a, d, void 0, e, !0))
          : delete i[d]);
    if (r !== a)
      for (const d in r) (!t || !ie(t, d)) && (delete r[d], (u = !0));
  }
  u && vt(e, 'set', '$attrs');
}
function bl(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (is(l)) continue;
      const u = t[l];
      let c;
      i && ie(i, (c = ft(l)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : Ps(e.emitsOptions, l) ||
          ((!(l in s) || u !== s[l]) && ((s[l] = u), (o = !0)));
    }
  if (r) {
    const l = ae(n),
      u = a || we;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = gi(i, l, d, u[d], e, !ie(u, d));
    }
  }
  return o;
}
function gi(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const a = ie(o, 'default');
    if (a && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && J(l)) {
        const { propsDefaults: u } = i;
        n in u ? (s = u[n]) : (un(i), (s = u[n] = l.call(null, t)), Ht());
      } else s = l;
    }
    o[0] &&
      (r && !a ? (s = !1) : o[1] && (s === '' || s === gn(n)) && (s = !0));
  }
  return s;
}
function yl(e, t, n = !1) {
  const s = t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!J(e)) {
    const c = (d) => {
      l = !0;
      const [p, f] = yl(d, t, !0);
      Ae(o, p), f && a.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l) return ye(e) && s.set(e, en), en;
  if (K(r))
    for (let c = 0; c < r.length; c++) {
      const d = ft(r[c]);
      Mr(d) && (o[d] = we);
    }
  else if (r)
    for (const c in r) {
      const d = ft(c);
      if (Mr(d)) {
        const p = r[c],
          f = (o[d] = K(p) || J(p) ? { type: p } : Ae({}, p));
        if (f) {
          const v = Dr(Boolean, f.type),
            b = Dr(String, f.type);
          (f[0] = v > -1),
            (f[1] = b < 0 || v < b),
            (v > -1 || ie(f, 'default')) && a.push(d);
        }
      }
    }
  const u = [o, a];
  return ye(e) && s.set(e, u), u;
}
function Mr(e) {
  return e[0] !== '$';
}
function Or(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? 'null' : '';
}
function Lr(e, t) {
  return Or(e) === Or(t);
}
function Dr(e, t) {
  return K(t) ? t.findIndex((n) => Lr(n, e)) : J(t) && Lr(t, e) ? 0 : -1;
}
const wl = (e) => e[0] === '_' || e === '$stable',
  qi = (e) => (K(e) ? e.map(ct) : [ct(e)]),
  jc = (e, t, n) => {
    if (t._n) return t;
    const s = Ie((...i) => qi(t(...i)), n);
    return (s._c = !1), s;
  },
  Sl = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (wl(i)) continue;
      const r = e[i];
      if (J(r)) t[i] = jc(i, r, s);
      else if (r != null) {
        const o = qi(r);
        t[i] = () => o;
      }
    }
  },
  El = (e, t) => {
    const n = qi(t);
    e.slots.default = () => n;
  },
  Hc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ae(t)), as(t, '_', n)) : Sl(t, (e.slots = {}));
    } else (e.slots = {}), t && El(e, t);
    as(e.slots, Ls, 1);
  },
  Fc = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      o = we;
    if (s.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (r = !1)
          : (Ae(i, t), !n && a === 1 && delete i._)
        : ((r = !t.$stable), Sl(t, i)),
        (o = t);
    } else t && (El(e, t), (o = { default: 1 }));
    if (r) for (const a in i) !wl(a) && o[a] == null && delete i[a];
  };
function _i(e, t, n, s, i = !1) {
  if (K(e)) {
    e.forEach((p, f) => _i(p, t && (K(t) ? t[f] : t), n, s, i));
    return;
  }
  if (Mn(s) && !i) return;
  const r = s.shapeFlag & 4 ? Ds(s.component) || s.component.proxy : s.el,
    o = i ? null : r,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === we ? (a.refs = {}) : a.refs,
    d = a.setupState;
  if (
    (u != null &&
      u !== l &&
      (xe(u)
        ? ((c[u] = null), ie(d, u) && (d[u] = null))
        : Re(u) && (u.value = null)),
    J(l))
  )
    At(l, a, 12, [o, c]);
  else {
    const p = xe(l),
      f = Re(l);
    if (p || f) {
      const v = () => {
        if (e.f) {
          const b = p ? (ie(d, l) ? d[l] : c[l]) : l.value;
          i
            ? K(b) && Oi(b, r)
            : K(b)
            ? b.includes(r) || b.push(r)
            : p
            ? ((c[l] = [r]), ie(d, l) && (d[l] = c[l]))
            : ((l.value = [r]), e.k && (c[e.k] = l.value));
        } else
          p
            ? ((c[l] = o), ie(d, l) && (d[l] = o))
            : f && ((l.value = o), e.k && (c[e.k] = o));
      };
      o ? ((v.id = -1), He(v, n)) : v();
    }
  }
}
const He = bc;
function Vc(e) {
  return Wc(e);
}
function Wc(e, t) {
  const n = li();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: d,
      nextSibling: p,
      setScopeId: f = st,
      insertStaticContent: v,
    } = e,
    b = (
      h,
      m,
      w,
      x = null,
      P = null,
      M = null,
      z = !1,
      D = null,
      N = !!m.dynamicChildren,
    ) => {
      if (h === m) return;
      h && !En(h, m) && ((x = C(h)), Oe(h, P, M, !0), (h = null)),
        m.patchFlag === -2 && ((N = !1), (m.dynamicChildren = null));
      const { type: L, ref: U, shapeFlag: F } = m;
      switch (L) {
        case Os:
          I(h, m, w, x);
          break;
        case Ot:
          E(h, m, w, x);
          break;
        case js:
          h == null && g(m, w, x, z);
          break;
        case ne:
          W(h, m, w, x, P, M, z, D, N);
          break;
        default:
          F & 1
            ? A(h, m, w, x, P, M, z, D, N)
            : F & 6
            ? V(h, m, w, x, P, M, z, D, N)
            : (F & 64 || F & 128) && L.process(h, m, w, x, P, M, z, D, N, k);
      }
      U != null && P && _i(U, h && h.ref, M, m || h, !m);
    },
    I = (h, m, w, x) => {
      if (h == null) s((m.el = a(m.children)), w, x);
      else {
        const P = (m.el = h.el);
        m.children !== h.children && u(P, m.children);
      }
    },
    E = (h, m, w, x) => {
      h == null ? s((m.el = l(m.children || '')), w, x) : (m.el = h.el);
    },
    g = (h, m, w, x) => {
      [h.el, h.anchor] = v(h.children, m, w, x, h.el, h.anchor);
    },
    _ = ({ el: h, anchor: m }, w, x) => {
      let P;
      for (; h && h !== m; ) (P = p(h)), s(h, w, x), (h = P);
      s(m, w, x);
    },
    S = ({ el: h, anchor: m }) => {
      let w;
      for (; h && h !== m; ) (w = p(h)), i(h), (h = w);
      i(m);
    },
    A = (h, m, w, x, P, M, z, D, N) => {
      (z = z || m.type === 'svg'),
        h == null ? j(m, w, x, P, M, z, D, N) : T(h, m, P, M, z, D, N);
    },
    j = (h, m, w, x, P, M, z, D) => {
      let N, L;
      const { type: U, props: F, shapeFlag: Y, transition: Z, dirs: ee } = h;
      if (
        ((N = h.el = o(h.type, M, F && F.is, F)),
        Y & 8
          ? c(N, h.children)
          : Y & 16 &&
            q(h.children, N, null, x, P, M && U !== 'foreignObject', z, D),
        ee && Dt(h, null, x, 'created'),
        B(N, h, h.scopeId, z, x),
        F)
      ) {
        for (const ge in F)
          ge !== 'value' &&
            !is(ge) &&
            r(N, ge, null, F[ge], M, h.children, x, P, Le);
        'value' in F && r(N, 'value', null, F.value),
          (L = F.onVnodeBeforeMount) && at(L, x, h);
      }
      ee && Dt(h, null, x, 'beforeMount');
      const be = Gc(P, Z);
      be && Z.beforeEnter(N),
        s(N, m, w),
        ((L = F && F.onVnodeMounted) || be || ee) &&
          He(() => {
            L && at(L, x, h), be && Z.enter(N), ee && Dt(h, null, x, 'mounted');
          }, P);
    },
    B = (h, m, w, x, P) => {
      if ((w && f(h, w), x)) for (let M = 0; M < x.length; M++) f(h, x[M]);
      if (P) {
        let M = P.subTree;
        if (m === M) {
          const z = P.vnode;
          B(h, z, z.scopeId, z.slotScopeIds, P.parent);
        }
      }
    },
    q = (h, m, w, x, P, M, z, D, N = 0) => {
      for (let L = N; L < h.length; L++) {
        const U = (h[L] = D ? Tt(h[L]) : ct(h[L]));
        b(null, U, m, w, x, P, M, z, D);
      }
    },
    T = (h, m, w, x, P, M, z) => {
      const D = (m.el = h.el);
      let { patchFlag: N, dynamicChildren: L, dirs: U } = m;
      N |= h.patchFlag & 16;
      const F = h.props || we,
        Y = m.props || we;
      let Z;
      w && $t(w, !1),
        (Z = Y.onVnodeBeforeUpdate) && at(Z, w, m, h),
        U && Dt(m, h, w, 'beforeUpdate'),
        w && $t(w, !0);
      const ee = P && m.type !== 'foreignObject';
      if (
        (L
          ? Q(h.dynamicChildren, L, D, w, x, ee, M)
          : z || oe(h, m, D, null, w, x, ee, M, !1),
        N > 0)
      ) {
        if (N & 16) $(D, m, F, Y, w, x, P);
        else if (
          (N & 2 && F.class !== Y.class && r(D, 'class', null, Y.class, P),
          N & 4 && r(D, 'style', F.style, Y.style, P),
          N & 8)
        ) {
          const be = m.dynamicProps;
          for (let ge = 0; ge < be.length; ge++) {
            const Ee = be[ge],
              Qe = F[Ee],
              Xt = Y[Ee];
            (Xt !== Qe || Ee === 'value') &&
              r(D, Ee, Qe, Xt, P, h.children, w, x, Le);
          }
        }
        N & 1 && h.children !== m.children && c(D, m.children);
      } else !z && L == null && $(D, m, F, Y, w, x, P);
      ((Z = Y.onVnodeUpdated) || U) &&
        He(() => {
          Z && at(Z, w, m, h), U && Dt(m, h, w, 'updated');
        }, x);
    },
    Q = (h, m, w, x, P, M, z) => {
      for (let D = 0; D < m.length; D++) {
        const N = h[D],
          L = m[D],
          U =
            N.el && (N.type === ne || !En(N, L) || N.shapeFlag & 70)
              ? d(N.el)
              : w;
        b(N, L, U, null, x, P, M, z, !0);
      }
    },
    $ = (h, m, w, x, P, M, z) => {
      if (w !== x) {
        if (w !== we)
          for (const D in w)
            !is(D) && !(D in x) && r(h, D, w[D], null, z, m.children, P, M, Le);
        for (const D in x) {
          if (is(D)) continue;
          const N = x[D],
            L = w[D];
          N !== L && D !== 'value' && r(h, D, L, N, z, m.children, P, M, Le);
        }
        'value' in x && r(h, 'value', w.value, x.value);
      }
    },
    W = (h, m, w, x, P, M, z, D, N) => {
      const L = (m.el = h ? h.el : a('')),
        U = (m.anchor = h ? h.anchor : a(''));
      let { patchFlag: F, dynamicChildren: Y, slotScopeIds: Z } = m;
      Z && (D = D ? D.concat(Z) : Z),
        h == null
          ? (s(L, w, x), s(U, w, x), q(m.children, w, U, P, M, z, D, N))
          : F > 0 && F & 64 && Y && h.dynamicChildren
          ? (Q(h.dynamicChildren, Y, w, P, M, z, D),
            (m.key != null || (P && m === P.subTree)) && xl(h, m, !0))
          : oe(h, m, w, U, P, M, z, D, N);
    },
    V = (h, m, w, x, P, M, z, D, N) => {
      (m.slotScopeIds = D),
        h == null
          ? m.shapeFlag & 512
            ? P.ctx.activate(m, w, x, z, N)
            : se(m, w, x, P, M, z, N)
          : ve(h, m, N);
    },
    se = (h, m, w, x, P, M, z) => {
      const D = (h.component = eu(h, x, P));
      if ((pl(h) && (D.ctx.renderer = k), tu(D), D.asyncDep)) {
        if ((P && P.registerDep(D, me), !h.el)) {
          const N = (D.subTree = X(Ot));
          E(null, N, m, w);
        }
        return;
      }
      me(D, h, m, w, P, M, z);
    },
    ve = (h, m, w) => {
      const x = (m.component = h.component);
      if (mc(h, m, w))
        if (x.asyncDep && !x.asyncResolved) {
          de(x, m, w);
          return;
        } else (x.next = m), cc(x.update), x.update();
      else (m.el = h.el), (x.vnode = m);
    },
    me = (h, m, w, x, P, M, z) => {
      const D = () => {
          if (h.isMounted) {
            let { next: U, bu: F, u: Y, parent: Z, vnode: ee } = h,
              be = U,
              ge;
            $t(h, !1),
              U ? ((U.el = ee.el), de(h, U, z)) : (U = ee),
              F && rs(F),
              (ge = U.props && U.props.onVnodeBeforeUpdate) && at(ge, Z, U, ee),
              $t(h, !0);
            const Ee = Bs(h),
              Qe = h.subTree;
            (h.subTree = Ee),
              b(Qe, Ee, d(Qe.el), C(Qe), h, P, M),
              (U.el = Ee.el),
              be === null && gc(h, Ee.el),
              Y && He(Y, P),
              (ge = U.props && U.props.onVnodeUpdated) &&
                He(() => at(ge, Z, U, ee), P);
          } else {
            let U;
            const { el: F, props: Y } = m,
              { bm: Z, m: ee, parent: be } = h,
              ge = Mn(m);
            if (
              ($t(h, !1),
              Z && rs(Z),
              !ge && (U = Y && Y.onVnodeBeforeMount) && at(U, be, m),
              $t(h, !0),
              F && ce)
            ) {
              const Ee = () => {
                (h.subTree = Bs(h)), ce(F, h.subTree, h, P, null);
              };
              ge
                ? m.type.__asyncLoader().then(() => !h.isUnmounted && Ee())
                : Ee();
            } else {
              const Ee = (h.subTree = Bs(h));
              b(null, Ee, w, x, h, P, M), (m.el = Ee.el);
            }
            if ((ee && He(ee, P), !ge && (U = Y && Y.onVnodeMounted))) {
              const Ee = m;
              He(() => at(U, be, Ee), P);
            }
            (m.shapeFlag & 256 ||
              (be && Mn(be.vnode) && be.vnode.shapeFlag & 256)) &&
              h.a &&
              He(h.a, P),
              (h.isMounted = !0),
              (m = w = x = null);
          }
        },
        N = (h.effect = new Ri(D, () => Fi(L), h.scope)),
        L = (h.update = () => N.run());
      (L.id = h.uid), $t(h, !0), L();
    },
    de = (h, m, w) => {
      m.component = h;
      const x = h.vnode.props;
      (h.vnode = m),
        (h.next = null),
        zc(h, m.props, x, w),
        Fc(h, m.children, w),
        _n(),
        Er(),
        vn();
    },
    oe = (h, m, w, x, P, M, z, D, N = !1) => {
      const L = h && h.children,
        U = h ? h.shapeFlag : 0,
        F = m.children,
        { patchFlag: Y, shapeFlag: Z } = m;
      if (Y > 0) {
        if (Y & 128) {
          Je(L, F, w, x, P, M, z, D, N);
          return;
        } else if (Y & 256) {
          Ke(L, F, w, x, P, M, z, D, N);
          return;
        }
      }
      Z & 8
        ? (U & 16 && Le(L, P, M), F !== L && c(w, F))
        : U & 16
        ? Z & 16
          ? Je(L, F, w, x, P, M, z, D, N)
          : Le(L, P, M, !0)
        : (U & 8 && c(w, ''), Z & 16 && q(F, w, x, P, M, z, D, N));
    },
    Ke = (h, m, w, x, P, M, z, D, N) => {
      (h = h || en), (m = m || en);
      const L = h.length,
        U = m.length,
        F = Math.min(L, U);
      let Y;
      for (Y = 0; Y < F; Y++) {
        const Z = (m[Y] = N ? Tt(m[Y]) : ct(m[Y]));
        b(h[Y], Z, w, null, P, M, z, D, N);
      }
      L > U ? Le(h, P, M, !0, !1, F) : q(m, w, x, P, M, z, D, N, F);
    },
    Je = (h, m, w, x, P, M, z, D, N) => {
      let L = 0;
      const U = m.length;
      let F = h.length - 1,
        Y = U - 1;
      for (; L <= F && L <= Y; ) {
        const Z = h[L],
          ee = (m[L] = N ? Tt(m[L]) : ct(m[L]));
        if (En(Z, ee)) b(Z, ee, w, null, P, M, z, D, N);
        else break;
        L++;
      }
      for (; L <= F && L <= Y; ) {
        const Z = h[F],
          ee = (m[Y] = N ? Tt(m[Y]) : ct(m[Y]));
        if (En(Z, ee)) b(Z, ee, w, null, P, M, z, D, N);
        else break;
        F--, Y--;
      }
      if (L > F) {
        if (L <= Y) {
          const Z = Y + 1,
            ee = Z < U ? m[Z].el : x;
          for (; L <= Y; )
            b(null, (m[L] = N ? Tt(m[L]) : ct(m[L])), w, ee, P, M, z, D, N),
              L++;
        }
      } else if (L > Y) for (; L <= F; ) Oe(h[L], P, M, !0), L++;
      else {
        const Z = L,
          ee = L,
          be = new Map();
        for (L = ee; L <= Y; L++) {
          const We = (m[L] = N ? Tt(m[L]) : ct(m[L]));
          We.key != null && be.set(We.key, L);
        }
        let ge,
          Ee = 0;
        const Qe = Y - ee + 1;
        let Xt = !1,
          dr = 0;
        const Sn = new Array(Qe);
        for (L = 0; L < Qe; L++) Sn[L] = 0;
        for (L = Z; L <= F; L++) {
          const We = h[L];
          if (Ee >= Qe) {
            Oe(We, P, M, !0);
            continue;
          }
          let lt;
          if (We.key != null) lt = be.get(We.key);
          else
            for (ge = ee; ge <= Y; ge++)
              if (Sn[ge - ee] === 0 && En(We, m[ge])) {
                lt = ge;
                break;
              }
          lt === void 0
            ? Oe(We, P, M, !0)
            : ((Sn[lt - ee] = L + 1),
              lt >= dr ? (dr = lt) : (Xt = !0),
              b(We, m[lt], w, null, P, M, z, D, N),
              Ee++);
        }
        const fr = Xt ? Uc(Sn) : en;
        for (ge = fr.length - 1, L = Qe - 1; L >= 0; L--) {
          const We = ee + L,
            lt = m[We],
            pr = We + 1 < U ? m[We + 1].el : x;
          Sn[L] === 0
            ? b(null, lt, w, pr, P, M, z, D, N)
            : Xt && (ge < 0 || L !== fr[ge] ? Ve(lt, w, pr, 2) : ge--);
        }
      }
    },
    Ve = (h, m, w, x, P = null) => {
      const { el: M, type: z, transition: D, children: N, shapeFlag: L } = h;
      if (L & 6) {
        Ve(h.component.subTree, m, w, x);
        return;
      }
      if (L & 128) {
        h.suspense.move(m, w, x);
        return;
      }
      if (L & 64) {
        z.move(h, m, w, k);
        return;
      }
      if (z === ne) {
        s(M, m, w);
        for (let F = 0; F < N.length; F++) Ve(N[F], m, w, x);
        s(h.anchor, m, w);
        return;
      }
      if (z === js) {
        _(h, m, w);
        return;
      }
      if (x !== 2 && L & 1 && D)
        if (x === 0) D.beforeEnter(M), s(M, m, w), He(() => D.enter(M), P);
        else {
          const { leave: F, delayLeave: Y, afterLeave: Z } = D,
            ee = () => s(M, m, w),
            be = () => {
              F(M, () => {
                ee(), Z && Z();
              });
            };
          Y ? Y(M, ee, be) : be();
        }
      else s(M, m, w);
    },
    Oe = (h, m, w, x = !1, P = !1) => {
      const {
        type: M,
        props: z,
        ref: D,
        children: N,
        dynamicChildren: L,
        shapeFlag: U,
        patchFlag: F,
        dirs: Y,
      } = h;
      if ((D != null && _i(D, null, w, h, !0), U & 256)) {
        m.ctx.deactivate(h);
        return;
      }
      const Z = U & 1 && Y,
        ee = !Mn(h);
      let be;
      if ((ee && (be = z && z.onVnodeBeforeUnmount) && at(be, m, h), U & 6))
        Un(h.component, w, x);
      else {
        if (U & 128) {
          h.suspense.unmount(w, x);
          return;
        }
        Z && Dt(h, null, m, 'beforeUnmount'),
          U & 64
            ? h.type.remove(h, m, w, P, k, x)
            : L && (M !== ne || (F > 0 && F & 64))
            ? Le(L, m, w, !1, !0)
            : ((M === ne && F & 384) || (!P && U & 16)) && Le(N, m, w),
          x && wt(h);
      }
      ((ee && (be = z && z.onVnodeUnmounted)) || Z) &&
        He(() => {
          be && at(be, m, h), Z && Dt(h, null, m, 'unmounted');
        }, w);
    },
    wt = (h) => {
      const { type: m, el: w, anchor: x, transition: P } = h;
      if (m === ne) {
        qt(w, x);
        return;
      }
      if (m === js) {
        S(h);
        return;
      }
      const M = () => {
        i(w), P && !P.persisted && P.afterLeave && P.afterLeave();
      };
      if (h.shapeFlag & 1 && P && !P.persisted) {
        const { leave: z, delayLeave: D } = P,
          N = () => z(w, M);
        D ? D(h.el, M, N) : N();
      } else M();
    },
    qt = (h, m) => {
      let w;
      for (; h !== m; ) (w = p(h)), i(h), (h = w);
      i(m);
    },
    Un = (h, m, w) => {
      const { bum: x, scope: P, update: M, subTree: z, um: D } = h;
      x && rs(x),
        P.stop(),
        M && ((M.active = !1), Oe(z, h, m, w)),
        D && He(D, m),
        He(() => {
          h.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    Le = (h, m, w, x = !1, P = !1, M = 0) => {
      for (let z = M; z < h.length; z++) Oe(h[z], m, w, x, P);
    },
    C = (h) =>
      h.shapeFlag & 6
        ? C(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : p(h.anchor || h.el),
    H = (h, m, w) => {
      h == null
        ? m._vnode && Oe(m._vnode, null, null, !0)
        : b(m._vnode || null, h, m, null, null, null, w),
        Er(),
        rl(),
        (m._vnode = h);
    },
    k = {
      p: b,
      um: Oe,
      m: Ve,
      r: wt,
      mt: se,
      mc: q,
      pc: oe,
      pbc: Q,
      n: C,
      o: e,
    };
  let G, ce;
  return t && ([G, ce] = t(k)), { render: H, hydrate: G, createApp: kc(H, G) };
}
function $t({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Gc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function xl(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (K(s) && K(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let a = i[r];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[r] = Tt(i[r])), (a.el = o.el)),
        n || xl(o, a)),
        a.type === Os && (a.el = o.el);
    }
}
function Uc(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, o, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        (a = (r + o) >> 1), e[n[a]] < u ? (r = a + 1) : (o = a);
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o]);
  return n;
}
const Yc = (e) => e.__isTeleport,
  ne = Symbol.for('v-fgt'),
  Os = Symbol.for('v-txt'),
  Ot = Symbol.for('v-cmt'),
  js = Symbol.for('v-stc'),
  Ln = [];
let nt = null;
function O(e = !1) {
  Ln.push((nt = e ? null : []));
}
function Kc() {
  Ln.pop(), (nt = Ln[Ln.length - 1] || null);
}
let jn = 1;
function $r(e) {
  jn += e;
}
function Tl(e) {
  return (
    (e.dynamicChildren = jn > 0 ? nt || en : null),
    Kc(),
    jn > 0 && nt && nt.push(e),
    e
  );
}
function R(e, t, n, s, i, r) {
  return Tl(y(e, t, n, s, i, r, !0));
}
function Me(e, t, n, s, i) {
  return Tl(X(e, t, n, s, i, !0));
}
function hs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function En(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ls = '__vInternal',
  Cl = ({ key: e }) => e ?? null,
  os = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? xe(e) || Re(e) || J(e)
        ? { i: Ne, r: e, k: t, f: !!n }
        : e
      : null
  );
function y(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === ne ? 0 : 1,
  o = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cl(t),
    ref: t && os(t),
    scopeId: As,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne,
  };
  return (
    a
      ? (Xi(l, n), r & 128 && e.normalize(l))
      : n && (l.shapeFlag |= xe(n) ? 8 : 16),
    jn > 0 &&
      !o &&
      nt &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      nt.push(l),
    l
  );
}
const X = qc;
function qc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === al) && (e = Ot), hs(e))) {
    const a = cn(e, t, !0);
    return (
      n && Xi(a, n),
      jn > 0 &&
        !r &&
        nt &&
        (a.shapeFlag & 6 ? (nt[nt.indexOf(e)] = a) : nt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((ou(e) && (e = e.__vccOpts), t)) {
    t = Xc(t);
    let { class: a, style: l } = t;
    a && !xe(a) && (t.class = he(a)),
      ye(l) && (Zo(l) && !K(l) && (l = Ae({}, l)), (t.style = Ts(l)));
  }
  const o = xe(e) ? 1 : vc(e) ? 128 : Yc(e) ? 64 : ye(e) ? 4 : J(e) ? 2 : 0;
  return y(e, t, n, s, i, o, r, !0);
}
function Xc(e) {
  return e ? (Zo(e) || Ls in e ? Ae({}, e) : e) : null;
}
function cn(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: r, children: o } = e,
    a = t ? Zc(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Cl(a),
    ref:
      t && t.ref ? (n && i ? (K(i) ? i.concat(os(t)) : [i, os(t)]) : os(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ne ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && cn(e.ssContent),
    ssFallback: e.ssFallback && cn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Se(e = ' ', t = 0) {
  return X(Os, null, e, t);
}
function De(e = '', t = !1) {
  return t ? (O(), Me(Ot, null, e)) : X(Ot, null, e);
}
function ct(e) {
  return e == null || typeof e == 'boolean'
    ? X(Ot)
    : K(e)
    ? X(ne, null, e.slice())
    : typeof e == 'object'
    ? Tt(e)
    : X(Os, null, String(e));
}
function Tt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : cn(e);
}
function Xi(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (K(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Xi(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(Ls in t)
        ? (t._ctx = Ne)
        : i === 3 &&
          Ne &&
          (Ne.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    J(t)
      ? ((t = { default: t, _ctx: Ne }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Se(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Zc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === 'class')
        t.class !== s.class && (t.class = he([t.class, s.class]));
      else if (i === 'style') t.style = Ts([t.style, s.style]);
      else if (Ss(i)) {
        const r = t[i],
          o = s[i];
        o &&
          r !== o &&
          !(K(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o);
      } else i !== '' && (t[i] = s[i]);
  }
  return t;
}
function at(e, t, n, s = null) {
  it(e, t, 7, [n, s]);
}
const Jc = vl();
let Qc = 0;
function eu(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || Jc,
    r = {
      uid: Qc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Da(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: yl(s, i),
      emitsOptions: ll(s, i),
      emit: null,
      emitted: null,
      propsDefaults: we,
      inheritAttrs: s.inheritAttrs,
      ctx: we,
      data: we,
      props: we,
      attrs: we,
      slots: we,
      refs: we,
      setupState: we,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = fc.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let Pe = null,
  Zi,
  Zt,
  Rr = '__VUE_INSTANCE_SETTERS__';
(Zt = li()[Rr]) || (Zt = li()[Rr] = []),
  Zt.push((e) => (Pe = e)),
  (Zi = (e) => {
    Zt.length > 1 ? Zt.forEach((t) => t(e)) : Zt[0](e);
  });
const un = (e) => {
    Zi(e), e.scope.on();
  },
  Ht = () => {
    Pe && Pe.scope.off(), Zi(null);
  };
function Il(e) {
  return e.vnode.shapeFlag & 4;
}
let Hn = !1;
function tu(e, t = !1) {
  Hn = t;
  const { props: n, children: s } = e.vnode,
    i = Il(e);
  Bc(e, n, i, t), Hc(e, s);
  const r = i ? nu(e, t) : void 0;
  return (Hn = !1), r;
}
function nu(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Jo(new Proxy(e.ctx, Mc)));
  const { setup: s } = n;
  if (s) {
    const i = (e.setupContext = s.length > 1 ? iu(e) : null);
    un(e), _n();
    const r = At(s, e, 0, [e.props, i]);
    if ((vn(), Ht(), $o(r))) {
      if ((r.then(Ht, Ht), t))
        return r
          .then((o) => {
            Nr(e, o, t);
          })
          .catch((o) => {
            Is(o, e, 0);
          });
      e.asyncDep = r;
    } else Nr(e, r, t);
  } else Pl(e, t);
}
function Nr(e, t, n) {
  J(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ye(t) && (e.setupState = nl(t)),
    Pl(e, n);
}
let kr;
function Pl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && kr && !s.render) {
      const i = s.template || Ki(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = s,
          u = Ae(Ae({ isCustomElement: r, delimiters: a }, o), l);
        s.render = kr(i, u);
      }
    }
    e.render = s.render || st;
  }
  {
    un(e), _n();
    try {
      Oc(e);
    } finally {
      vn(), Ht();
    }
  }
}
function su(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Fe(e, 'get', '$attrs'), t[n];
      },
    }))
  );
}
function iu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return su(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ds(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(nl(Jo(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in On) return On[n](e);
        },
        has(t, n) {
          return n in t || n in On;
        },
      }))
    );
}
function ru(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function ou(e) {
  return J(e) && '__vccOpts' in e;
}
const _e = (e, t) => oc(e, t, Hn);
function Ue(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ye(t) && !K(t)
      ? hs(t)
        ? X(e, null, [t])
        : X(e, t)
      : X(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && hs(n) && (n = [n]),
      X(e, t, n));
}
const lu = Symbol.for('v-scx'),
  au = () => rt(lu),
  cu = '3.3.10',
  uu = 'http://www.w3.org/2000/svg',
  Nt = typeof document < 'u' ? document : null,
  Br = Nt && Nt.createElement('template'),
  du = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i = t
        ? Nt.createElementNS(uu, e)
        : Nt.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          i.setAttribute('multiple', s.multiple),
        i
      );
    },
    createText: (e) => Nt.createTextNode(e),
    createComment: (e) => Nt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Nt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, s, i, r) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        Br.innerHTML = s ? `<svg>${e}</svg>` : e;
        const a = Br.content;
        if (s) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  fu = Symbol('_vtc');
function pu(e, t, n) {
  const s = e[fu];
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
const Ji = Symbol('_vod'),
  ms = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[Ji] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : xn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), xn(e, !0), s.enter(e))
            : s.leave(e, () => {
                xn(e, !1);
              })
          : xn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      xn(e, t);
    },
  };
function xn(e, t) {
  e.style.display = t ? e[Ji] : 'none';
}
function hu(e, t, n) {
  const s = e.style,
    i = xe(n);
  if (n && !i) {
    if (t && !xe(t)) for (const r in t) n[r] == null && vi(s, r, '');
    for (const r in n) vi(s, r, n[r]);
  } else {
    const r = s.display;
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'),
      Ji in e && (s.display = r);
  }
}
const zr = /\s*!important$/;
function vi(e, t, n) {
  if (K(n)) n.forEach((s) => vi(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = mu(e, t);
    zr.test(n)
      ? e.setProperty(gn(s), n.replace(zr, ''), 'important')
      : (e[s] = n);
  }
}
const jr = ['Webkit', 'Moz', 'ms'],
  Hs = {};
function mu(e, t) {
  const n = Hs[t];
  if (n) return n;
  let s = ft(t);
  if (s !== 'filter' && s in e) return (Hs[t] = s);
  s = xs(s);
  for (let i = 0; i < jr.length; i++) {
    const r = jr[i] + s;
    if (r in e) return (Hs[t] = r);
  }
  return t;
}
const Hr = 'http://www.w3.org/1999/xlink';
function gu(e, t, n, s, i) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Hr, t.slice(6, t.length))
      : e.setAttributeNS(Hr, t, n);
  else {
    const r = Oa(t);
    n == null || (r && !ko(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? '' : n);
  }
}
function _u(e, t, n, s, i, r, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && o(s, i, r), (e[t] = n ?? '');
    return;
  }
  const a = e.tagName;
  if (t === 'value' && a !== 'PROGRESS' && !a.includes('-')) {
    e._value = n;
    const u = a === 'OPTION' ? e.getAttribute('value') : e.value,
      c = n ?? '';
    u !== c && (e.value = c), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === '' || n == null) {
    const u = typeof e[t];
    u === 'boolean'
      ? (n = ko(n))
      : n == null && u === 'string'
      ? ((n = ''), (l = !0))
      : u === 'number' && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function _t(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function vu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Fr = Symbol('_vei');
function bu(e, t, n, s, i = null) {
  const r = e[Fr] || (e[Fr] = {}),
    o = r[t];
  if (s && o) o.value = s;
  else {
    const [a, l] = yu(t);
    if (s) {
      const u = (r[t] = Eu(s, i));
      _t(e, a, u, l);
    } else o && (vu(e, a, o, l), (r[t] = void 0));
  }
}
const Vr = /(?:Once|Passive|Capture)$/;
function yu(e) {
  let t;
  if (Vr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Vr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : gn(e.slice(2)), t];
}
let Fs = 0;
const wu = Promise.resolve(),
  Su = () => Fs || (wu.then(() => (Fs = 0)), (Fs = Date.now()));
function Eu(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    it(xu(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Su()), n;
}
function xu(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const Wr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Tu = (e, t, n, s, i = !1, r, o, a, l) => {
    t === 'class'
      ? pu(e, s, i)
      : t === 'style'
      ? hu(e, n, s)
      : Ss(t)
      ? Mi(t) || bu(e, t, n, s, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Cu(e, t, s, i)
        )
      ? _u(e, t, s, r, o, a, l)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        gu(e, t, s, i));
  };
function Cu(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Wr(t) && J(n))
    );
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const i = e.tagName;
    return !(i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE');
  }
  return Wr(t) && xe(n) ? !1 : t in e;
}
const Lt = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return K(t) ? (n) => rs(t, n) : t;
};
function Iu(e) {
  e.target.composing = !0;
}
function Gr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const qe = Symbol('_assign'),
  Ur = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e[qe] = Lt(i);
      const r = s || (i.props && i.props.type === 'number');
      _t(e, t ? 'change' : 'input', (o) => {
        if (o.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), r && (a = cs(a)), e[qe](a);
      }),
        n &&
          _t(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (_t(e, 'compositionstart', Iu),
          _t(e, 'compositionend', Gr),
          _t(e, 'change', Gr));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: i } },
      r,
    ) {
      if (((e[qe] = Lt(r)), e.composing)) return;
      const o = i || e.type === 'number' ? cs(e.value) : e.value,
        a = t ?? '';
      o !== a &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (n || (s && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  Pu = {
    deep: !0,
    created(e, t, n) {
      (e[qe] = Lt(n)),
        _t(e, 'change', () => {
          const s = e._modelValue,
            i = dn(e),
            r = e.checked,
            o = e[qe];
          if (K(s)) {
            const a = Di(s, i),
              l = a !== -1;
            if (r && !l) o(s.concat(i));
            else if (!r && l) {
              const u = [...s];
              u.splice(a, 1), o(u);
            }
          } else if (mn(s)) {
            const a = new Set(s);
            r ? a.add(i) : a.delete(i), o(a);
          } else o(Al(e, r));
        });
    },
    mounted: Yr,
    beforeUpdate(e, t, n) {
      (e[qe] = Lt(n)), Yr(e, t, n);
    },
  };
function Yr(e, { value: t, oldValue: n }, s) {
  (e._modelValue = t),
    K(t)
      ? (e.checked = Di(t, s.props.value) > -1)
      : mn(t)
      ? (e.checked = t.has(s.props.value))
      : t !== n && (e.checked = Wt(t, Al(e, !0)));
}
const Au = {
    created(e, { value: t }, n) {
      (e.checked = Wt(t, n.props.value)),
        (e[qe] = Lt(n)),
        _t(e, 'change', () => {
          e[qe](dn(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      (e[qe] = Lt(s)), t !== n && (e.checked = Wt(t, s.props.value));
    },
  },
  Mu = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const i = mn(t);
      _t(e, 'change', () => {
        const r = Array.prototype.filter
          .call(e.options, (o) => o.selected)
          .map((o) => (n ? cs(dn(o)) : dn(o)));
        e[qe](e.multiple ? (i ? new Set(r) : r) : r[0]);
      }),
        (e[qe] = Lt(s));
    },
    mounted(e, { value: t }) {
      Kr(e, t);
    },
    beforeUpdate(e, t, n) {
      e[qe] = Lt(n);
    },
    updated(e, { value: t }) {
      Kr(e, t);
    },
  };
function Kr(e, t) {
  const n = e.multiple;
  if (!(n && !K(t) && !mn(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const r = e.options[s],
        o = dn(r);
      if (n) K(t) ? (r.selected = Di(t, o) > -1) : (r.selected = t.has(o));
      else if (Wt(dn(r), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function dn(e) {
  return '_value' in e ? e._value : e.value;
}
function Al(e, t) {
  const n = t ? '_trueValue' : '_falseValue';
  return n in e ? e[n] : t;
}
const Ou = {
  created(e, t, n) {
    Qn(e, t, n, null, 'created');
  },
  mounted(e, t, n) {
    Qn(e, t, n, null, 'mounted');
  },
  beforeUpdate(e, t, n, s) {
    Qn(e, t, n, s, 'beforeUpdate');
  },
  updated(e, t, n, s) {
    Qn(e, t, n, s, 'updated');
  },
};
function Lu(e, t) {
  switch (e) {
    case 'SELECT':
      return Mu;
    case 'TEXTAREA':
      return Ur;
    default:
      switch (t) {
        case 'checkbox':
          return Pu;
        case 'radio':
          return Au;
        default:
          return Ur;
      }
  }
}
function Qn(e, t, n, s, i) {
  const o = Lu(e.tagName, n.props && n.props.type)[i];
  o && o(e, t, n, s);
}
const Du = ['ctrl', 'shift', 'alt', 'meta'],
  $u = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => Du.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Ru = (e, t) =>
    e._withMods ||
    (e._withMods = (n, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const r = $u[t[i]];
        if (r && r(n, t)) return;
      }
      return e(n, ...s);
    }),
  Nu = Ae({ patchProp: Tu }, du);
let qr;
function ku() {
  return qr || (qr = Vc(Nu));
}
const Bu = (...e) => {
  const t = ku().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = zu(s);
      if (!i) return;
      const r = t._component;
      !J(r) && !r.render && !r.template && (r.template = i.innerHTML),
        (i.innerHTML = '');
      const o = n(i, !1, i instanceof SVGElement);
      return (
        i instanceof Element &&
          (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
        o
      );
    }),
    t
  );
};
function zu(e) {
  return xe(e) ? document.querySelector(e) : e;
}
function Qi() {
  return {
    clamp: (s, i, r) =>
      isNaN(Number(s)) || s === null || s === void 0
        ? i
        : Math.min(Math.max(s, i), r),
    isStringAnImageUrl: (s) => /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(s),
    isTouchDevice: () =>
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0,
  };
}
const ju = Qi();
let je = bn({
    settings: null,
    navbar: null,
    header: null,
    footer: null,
    sections: null,
    legal: null,
    policy: null,
  }),
  Tn = bn({ loadedFiles: 0, totalFiles: 3 });
function Wn() {
  const e = async () => {
      const c = '/portfolio-JM',
        p = await (await fetch(c + '/data/general.json')).json();
      (je.settings = p.settings),
        (je.navbar = p.navbar),
        (je.header = p.header),
        (je.footer = p.footer),
        Tn.loadedFiles++;
      const v = await (await fetch(c + '/data/sections.json')).json();
      (je.sections = v.sections), Tn.loadedFiles++;
      const I = await (await fetch(c + '/data/pages.json')).json();
      (je.policy = I.policy), (je.legal = I.legal), Tn.loadedFiles++;
    },
    t = () => je.settings,
    n = () => je.navbar,
    s = () => je.header,
    i = () => je.footer,
    r = () => je.sections,
    o = () => je.legal,
    a = () => je.policy,
    l = () => {
      const c = (100 * Tn.loadedFiles) / Tn.totalFiles;
      return ju.clamp(Math.round(c), 0, 100);
    };
  return {
    fetchData: e,
    getSettings: t,
    getNavbarData: n,
    getHeaderData: s,
    getFooterData: i,
    getSectionsData: r,
    getLegalData: o,
    getPolicyData: a,
    getLoadProgress: l,
    isReady: () => l() === 100,
  };
}
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Jt = typeof window < 'u';
function Hu(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const fe = Object.assign;
function Vs(e, t) {
  const n = {};
  for (const s in t) {
    const i = t[s];
    n[s] = ot(i) ? i.map(e) : e(i);
  }
  return n;
}
const Dn = () => {},
  ot = Array.isArray,
  Fu = /\/$/,
  Vu = (e) => e.replace(Fu, '');
function Ws(e, t, n = '/') {
  let s,
    i = {},
    r = '',
    o = '';
  const a = t.indexOf('#');
  let l = t.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (r = t.slice(l + 1, a > -1 ? a : t.length)),
      (i = e(r))),
    a > -1 && ((s = s || t.slice(0, a)), (o = t.slice(a, t.length))),
    (s = Yu(s ?? t, n)),
    { fullPath: s + (r && '?') + r + o, path: s, query: i, hash: o }
  );
}
function Wu(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Xr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function Gu(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    s > -1 &&
    s === i &&
    fn(t.matched[s], n.matched[i]) &&
    Ml(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function fn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ml(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Uu(e[n], t[n])) return !1;
  return !0;
}
function Uu(e, t) {
  return ot(e) ? Zr(e, t) : ot(t) ? Zr(t, e) : e === t;
}
function Zr(e, t) {
  return ot(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function Yu(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    s = e.split('/'),
    i = s[s.length - 1];
  (i === '..' || i === '.') && s.push('');
  let r = n.length - 1,
    o,
    a;
  for (o = 0; o < s.length; o++)
    if (((a = s[o]), a !== '.'))
      if (a === '..') r > 1 && r--;
      else break;
  return (
    n.slice(0, r).join('/') +
    '/' +
    s.slice(o - (o === s.length ? 1 : 0)).join('/')
  );
}
var Fn;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(Fn || (Fn = {}));
var $n;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})($n || ($n = {}));
function Ku(e) {
  if (!e)
    if (Jt) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Vu(e);
}
const qu = /^[^#]+#/;
function Xu(e, t) {
  return e.replace(qu, '#') + t;
}
function Zu(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const $s = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Ju(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      i =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = Zu(i, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      );
}
function Jr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const bi = new Map();
function Qu(e, t) {
  bi.set(e, t);
}
function ed(e) {
  const t = bi.get(e);
  return bi.delete(e), t;
}
let td = () => location.protocol + '//' + location.host;
function Ol(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    r = e.indexOf('#');
  if (r > -1) {
    let a = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = i.slice(a);
    return l[0] !== '/' && (l = '/' + l), Xr(l, '');
  }
  return Xr(n, e) + s + i;
}
function nd(e, t, n, s) {
  let i = [],
    r = [],
    o = null;
  const a = ({ state: p }) => {
    const f = Ol(e, location),
      v = n.value,
      b = t.value;
    let I = 0;
    if (p) {
      if (((n.value = f), (t.value = p), o && o === v)) {
        o = null;
        return;
      }
      I = b ? p.position - b.position : 0;
    } else s(f);
    i.forEach((E) => {
      E(n.value, v, {
        delta: I,
        type: Fn.pop,
        direction: I ? (I > 0 ? $n.forward : $n.back) : $n.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function u(p) {
    i.push(p);
    const f = () => {
      const v = i.indexOf(p);
      v > -1 && i.splice(v, 1);
    };
    return r.push(f), f;
  }
  function c() {
    const { history: p } = window;
    p.state && p.replaceState(fe({}, p.state, { scroll: $s() }), '');
  }
  function d() {
    for (const p of r) p();
    (r = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', c);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: l, listen: u, destroy: d }
  );
}
function Qr(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? $s() : null,
  };
}
function sd(e) {
  const { history: t, location: n } = window,
    s = { value: Ol(e, n) },
    i = { value: t.state };
  i.value ||
    r(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function r(l, u, c) {
    const d = e.indexOf('#'),
      p =
        d > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l
          : td() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', p), (i.value = u);
    } catch (f) {
      console.error(f), n[c ? 'replace' : 'assign'](p);
    }
  }
  function o(l, u) {
    const c = fe({}, t.state, Qr(i.value.back, l, i.value.forward, !0), u, {
      position: i.value.position,
    });
    r(l, c, !0), (s.value = l);
  }
  function a(l, u) {
    const c = fe({}, i.value, t.state, { forward: l, scroll: $s() });
    r(c.current, c, !0);
    const d = fe({}, Qr(s.value, l, null), { position: c.position + 1 }, u);
    r(l, d, !1), (s.value = l);
  }
  return { location: s, state: i, push: a, replace: o };
}
function id(e) {
  e = Ku(e);
  const t = sd(e),
    n = nd(e, t.state, t.location, t.replace);
  function s(r, o = !0) {
    o || n.pauseListeners(), history.go(r);
  }
  const i = fe(
    { location: '', base: e, go: s, createHref: Xu.bind(null, e) },
    t,
    n,
  );
  return (
    Object.defineProperty(i, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  );
}
function rd(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function Ll(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const Et = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Dl = Symbol('');
var eo;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(eo || (eo = {}));
function pn(e, t) {
  return fe(new Error(), { type: e, [Dl]: !0 }, t);
}
function pt(e, t) {
  return e instanceof Error && Dl in e && (t == null || !!(e.type & t));
}
const to = '[^/]+?',
  od = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ld = /[.+*?^${}()[\]/\\]/g;
function ad(e, t) {
  const n = fe({}, od, t),
    s = [];
  let i = n.start ? '^' : '';
  const r = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (i += '/');
    for (let d = 0; d < u.length; d++) {
      const p = u[d];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        d || (i += '/'), (i += p.value.replace(ld, '\\$&')), (f += 40);
      else if (p.type === 1) {
        const { value: v, repeatable: b, optional: I, regexp: E } = p;
        r.push({ name: v, repeatable: b, optional: I });
        const g = E || to;
        if (g !== to) {
          f += 10;
          try {
            new RegExp(`(${g})`);
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${g}): ` + S.message,
            );
          }
        }
        let _ = b ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
        d || (_ = I && u.length < 2 ? `(?:/${_})` : '/' + _),
          I && (_ += '?'),
          (i += _),
          (f += 20),
          I && (f += -8),
          b && (f += -20),
          g === '.*' && (f += -50);
      }
      c.push(f);
    }
    s.push(c);
  }
  if (n.strict && n.end) {
    const u = s.length - 1;
    s[u][s[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += '/?'), n.end ? (i += '$') : n.strict && (i += '(?:/|$)');
  const o = new RegExp(i, n.sensitive ? '' : 'i');
  function a(u) {
    const c = u.match(o),
      d = {};
    if (!c) return null;
    for (let p = 1; p < c.length; p++) {
      const f = c[p] || '',
        v = r[p - 1];
      d[v.name] = f && v.repeatable ? f.split('/') : f;
    }
    return d;
  }
  function l(u) {
    let c = '',
      d = !1;
    for (const p of e) {
      (!d || !c.endsWith('/')) && (c += '/'), (d = !1);
      for (const f of p)
        if (f.type === 0) c += f.value;
        else if (f.type === 1) {
          const { value: v, repeatable: b, optional: I } = f,
            E = v in u ? u[v] : '';
          if (ot(E) && !b)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const g = ot(E) ? E.join('/') : E;
          if (!g)
            if (I)
              p.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${v}"`);
          c += g;
        }
    }
    return c || '/';
  }
  return { re: o, score: s, keys: r, parse: a, stringify: l };
}
function cd(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function ud(e, t) {
  let n = 0;
  const s = e.score,
    i = t.score;
  for (; n < s.length && n < i.length; ) {
    const r = cd(s[n], i[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (no(s)) return 1;
    if (no(i)) return -1;
  }
  return i.length - s.length;
}
function no(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const dd = { type: 0, value: '' },
  fd = /[a-zA-Z0-9_]/;
function pd(e) {
  if (!e) return [[]];
  if (e === '/') return [[dd]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(f) {
    throw new Error(`ERR (${n})/"${u}": ${f}`);
  }
  let n = 0,
    s = n;
  const i = [];
  let r;
  function o() {
    r && i.push(r), (r = []);
  }
  let a = 0,
    l,
    u = '',
    c = '';
  function d() {
    u &&
      (n === 0
        ? r.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (r.length > 1 &&
            (l === '*' || l === '+') &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
            ),
          r.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : t('Invalid state to consume buffer'),
      (u = ''));
  }
  function p() {
    u += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (u && d(), o()) : l === ':' ? (d(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = s);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : fd.test(l)
          ? p()
          : (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case 2:
        l === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + l)
            : (n = 3)
          : (c += l);
        break;
      case 3:
        d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (c = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), o(), i;
}
function hd(e, t, n) {
  const s = ad(pd(e.path), n),
    i = fe(s, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function md(e, t) {
  const n = [],
    s = new Map();
  t = ro({ strict: !1, end: !0, sensitive: !1 }, t);
  function i(c) {
    return s.get(c);
  }
  function r(c, d, p) {
    const f = !p,
      v = gd(c);
    v.aliasOf = p && p.record;
    const b = ro(t, c),
      I = [v];
    if ('alias' in c) {
      const _ = typeof c.alias == 'string' ? [c.alias] : c.alias;
      for (const S of _)
        I.push(
          fe({}, v, {
            components: p ? p.record.components : v.components,
            path: S,
            aliasOf: p ? p.record : v,
          }),
        );
    }
    let E, g;
    for (const _ of I) {
      const { path: S } = _;
      if (d && S[0] !== '/') {
        const A = d.record.path,
          j = A[A.length - 1] === '/' ? '' : '/';
        _.path = d.record.path + (S && j + S);
      }
      if (
        ((E = hd(_, d, b)),
        p
          ? p.alias.push(E)
          : ((g = g || E),
            g !== E && g.alias.push(E),
            f && c.name && !io(E) && o(c.name)),
        v.children)
      ) {
        const A = v.children;
        for (let j = 0; j < A.length; j++) r(A[j], E, p && p.children[j]);
      }
      (p = p || E),
        ((E.record.components && Object.keys(E.record.components).length) ||
          E.record.name ||
          E.record.redirect) &&
          l(E);
    }
    return g
      ? () => {
          o(g);
        }
      : Dn;
  }
  function o(c) {
    if (Ll(c)) {
      const d = s.get(c);
      d &&
        (s.delete(c),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(o),
        d.alias.forEach(o));
    } else {
      const d = n.indexOf(c);
      d > -1 &&
        (n.splice(d, 1),
        c.record.name && s.delete(c.record.name),
        c.children.forEach(o),
        c.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(c) {
    let d = 0;
    for (
      ;
      d < n.length &&
      ud(c, n[d]) >= 0 &&
      (c.record.path !== n[d].record.path || !$l(c, n[d]));

    )
      d++;
    n.splice(d, 0, c), c.record.name && !io(c) && s.set(c.record.name, c);
  }
  function u(c, d) {
    let p,
      f = {},
      v,
      b;
    if ('name' in c && c.name) {
      if (((p = s.get(c.name)), !p)) throw pn(1, { location: c });
      (b = p.record.name),
        (f = fe(
          so(
            d.params,
            p.keys.filter((g) => !g.optional).map((g) => g.name),
          ),
          c.params &&
            so(
              c.params,
              p.keys.map((g) => g.name),
            ),
        )),
        (v = p.stringify(f));
    } else if ('path' in c)
      (v = c.path),
        (p = n.find((g) => g.re.test(v))),
        p && ((f = p.parse(v)), (b = p.record.name));
    else {
      if (((p = d.name ? s.get(d.name) : n.find((g) => g.re.test(d.path))), !p))
        throw pn(1, { location: c, currentLocation: d });
      (b = p.record.name),
        (f = fe({}, d.params, c.params)),
        (v = p.stringify(f));
    }
    const I = [];
    let E = p;
    for (; E; ) I.unshift(E.record), (E = E.parent);
    return { name: b, path: v, params: f, matched: I, meta: vd(I) };
  }
  return (
    e.forEach((c) => r(c)),
    {
      addRoute: r,
      resolve: u,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: i,
    }
  );
}
function so(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function gd(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: _d(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function _d(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n;
  return t;
}
function io(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function vd(e) {
  return e.reduce((t, n) => fe(t, n.meta), {});
}
function ro(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function $l(e, t) {
  return t.children.some((n) => n === e || $l(e, n));
}
const Rl = /#/g,
  bd = /&/g,
  yd = /\//g,
  wd = /=/g,
  Sd = /\?/g,
  Nl = /\+/g,
  Ed = /%5B/g,
  xd = /%5D/g,
  kl = /%5E/g,
  Td = /%60/g,
  Bl = /%7B/g,
  Cd = /%7C/g,
  zl = /%7D/g,
  Id = /%20/g;
function er(e) {
  return encodeURI('' + e)
    .replace(Cd, '|')
    .replace(Ed, '[')
    .replace(xd, ']');
}
function Pd(e) {
  return er(e).replace(Bl, '{').replace(zl, '}').replace(kl, '^');
}
function yi(e) {
  return er(e)
    .replace(Nl, '%2B')
    .replace(Id, '+')
    .replace(Rl, '%23')
    .replace(bd, '%26')
    .replace(Td, '`')
    .replace(Bl, '{')
    .replace(zl, '}')
    .replace(kl, '^');
}
function Ad(e) {
  return yi(e).replace(wd, '%3D');
}
function Md(e) {
  return er(e).replace(Rl, '%23').replace(Sd, '%3F');
}
function Od(e) {
  return e == null ? '' : Md(e).replace(yd, '%2F');
}
function gs(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
function Ld(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const s = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let i = 0; i < s.length; ++i) {
    const r = s[i].replace(Nl, ' '),
      o = r.indexOf('='),
      a = gs(o < 0 ? r : r.slice(0, o)),
      l = o < 0 ? null : gs(r.slice(o + 1));
    if (a in t) {
      let u = t[a];
      ot(u) || (u = t[a] = [u]), u.push(l);
    } else t[a] = l;
  }
  return t;
}
function oo(e) {
  let t = '';
  for (let n in e) {
    const s = e[n];
    if (((n = Ad(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (ot(s) ? s.map((r) => r && yi(r)) : [s && yi(s)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r));
    });
  }
  return t;
}
function Dd(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = ot(s)
        ? s.map((i) => (i == null ? null : '' + i))
        : s == null
        ? s
        : '' + s);
  }
  return t;
}
const $d = Symbol(''),
  lo = Symbol(''),
  Rs = Symbol(''),
  tr = Symbol(''),
  wi = Symbol('');
function Cn() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const i = e.indexOf(s);
        i > -1 && e.splice(i, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Ct(e, t, n, s, i) {
  const r = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || []);
  return () =>
    new Promise((o, a) => {
      const l = (d) => {
          d === !1
            ? a(pn(4, { from: n, to: t }))
            : d instanceof Error
            ? a(d)
            : rd(d)
            ? a(pn(2, { from: t, to: d }))
            : (r &&
                s.enterCallbacks[i] === r &&
                typeof d == 'function' &&
                r.push(d),
              o());
        },
        u = e.call(s && s.instances[i], t, n, l);
      let c = Promise.resolve(u);
      e.length < 3 && (c = c.then(l)), c.catch((d) => a(d));
    });
}
function Gs(e, t, n, s) {
  const i = [];
  for (const r of e)
    for (const o in r.components) {
      let a = r.components[o];
      if (!(t !== 'beforeRouteEnter' && !r.instances[o]))
        if (Rd(a)) {
          const u = (a.__vccOpts || a)[t];
          u && i.push(Ct(u, n, s, r, o));
        } else {
          let l = a();
          i.push(() =>
            l.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${r.path}"`),
                );
              const c = Hu(u) ? u.default : u;
              r.components[o] = c;
              const p = (c.__vccOpts || c)[t];
              return p && Ct(p, n, s, r, o)();
            }),
          );
        }
    }
  return i;
}
function Rd(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function ao(e) {
  const t = rt(Rs),
    n = rt(tr),
    s = _e(() => t.resolve(le(e.to))),
    i = _e(() => {
      const { matched: l } = s.value,
        { length: u } = l,
        c = l[u - 1],
        d = n.matched;
      if (!c || !d.length) return -1;
      const p = d.findIndex(fn.bind(null, c));
      if (p > -1) return p;
      const f = co(l[u - 2]);
      return u > 1 && co(c) === f && d[d.length - 1].path !== f
        ? d.findIndex(fn.bind(null, l[u - 2]))
        : p;
    }),
    r = _e(() => i.value > -1 && zd(n.params, s.value.params)),
    o = _e(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Ml(n.params, s.value.params),
    );
  function a(l = {}) {
    return Bd(l)
      ? t[le(e.replace) ? 'replace' : 'push'](le(e.to)).catch(Dn)
      : Promise.resolve();
  }
  return {
    route: s,
    href: _e(() => s.value.href),
    isActive: r,
    isExactActive: o,
    navigate: a,
  };
}
const Nd = fl({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: ao,
    setup(e, { slots: t }) {
      const n = bn(ao(e)),
        { options: s } = rt(Rs),
        i = _e(() => ({
          [uo(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [uo(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active',
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : Ue(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              r,
            );
      };
    },
  }),
  kd = Nd;
function Bd(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function zd(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n];
    if (typeof s == 'string') {
      if (s !== i) return !1;
    } else if (!ot(i) || i.length !== s.length || s.some((r, o) => r !== i[o]))
      return !1;
  }
  return !0;
}
function co(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const uo = (e, t, n) => e ?? t ?? n,
  jd = fl({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = rt(wi),
        i = _e(() => e.route || s.value),
        r = rt(lo, 0),
        o = _e(() => {
          let u = le(r);
          const { matched: c } = i.value;
          let d;
          for (; (d = c[u]) && !d.components; ) u++;
          return u;
        }),
        a = _e(() => i.value.matched[o.value]);
      rn(
        lo,
        _e(() => o.value + 1),
      ),
        rn($d, a),
        rn(wi, i);
      const l = te();
      return (
        jt(
          () => [l.value, a.value, e.name],
          ([u, c, d], [p, f, v]) => {
            c &&
              ((c.instances[d] = u),
              f &&
                f !== c &&
                u &&
                u === p &&
                (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards),
                c.updateGuards.size || (c.updateGuards = f.updateGuards))),
              u &&
                c &&
                (!f || !fn(c, f) || !p) &&
                (c.enterCallbacks[d] || []).forEach((b) => b(u));
          },
          { flush: 'post' },
        ),
        () => {
          const u = i.value,
            c = e.name,
            d = a.value,
            p = d && d.components[c];
          if (!p) return fo(n.default, { Component: p, route: u });
          const f = d.props[c],
            v = f
              ? f === !0
                ? u.params
                : typeof f == 'function'
                ? f(u)
                : f
              : null,
            I = Ue(
              p,
              fe({}, v, t, {
                onVnodeUnmounted: (E) => {
                  E.component.isUnmounted && (d.instances[c] = null);
                },
                ref: l,
              }),
            );
          return fo(n.default, { Component: I, route: u }) || I;
        }
      );
    },
  });
function fo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Hd = jd;
function Fd(e) {
  const t = md(e.routes, e),
    n = e.parseQuery || Ld,
    s = e.stringifyQuery || oo,
    i = e.history,
    r = Cn(),
    o = Cn(),
    a = Cn(),
    l = nc(Et);
  let u = Et;
  Jt &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = Vs.bind(null, (C) => '' + C),
    d = Vs.bind(null, Od),
    p = Vs.bind(null, gs);
  function f(C, H) {
    let k, G;
    return (
      Ll(C) ? ((k = t.getRecordMatcher(C)), (G = H)) : (G = C), t.addRoute(G, k)
    );
  }
  function v(C) {
    const H = t.getRecordMatcher(C);
    H && t.removeRoute(H);
  }
  function b() {
    return t.getRoutes().map((C) => C.record);
  }
  function I(C) {
    return !!t.getRecordMatcher(C);
  }
  function E(C, H) {
    if (((H = fe({}, H || l.value)), typeof C == 'string')) {
      const w = Ws(n, C, H.path),
        x = t.resolve({ path: w.path }, H),
        P = i.createHref(w.fullPath);
      return fe(w, x, {
        params: p(x.params),
        hash: gs(w.hash),
        redirectedFrom: void 0,
        href: P,
      });
    }
    let k;
    if ('path' in C) k = fe({}, C, { path: Ws(n, C.path, H.path).path });
    else {
      const w = fe({}, C.params);
      for (const x in w) w[x] == null && delete w[x];
      (k = fe({}, C, { params: d(w) })), (H.params = d(H.params));
    }
    const G = t.resolve(k, H),
      ce = C.hash || '';
    G.params = c(p(G.params));
    const h = Wu(s, fe({}, C, { hash: Pd(ce), path: G.path })),
      m = i.createHref(h);
    return fe(
      { fullPath: h, hash: ce, query: s === oo ? Dd(C.query) : C.query || {} },
      G,
      { redirectedFrom: void 0, href: m },
    );
  }
  function g(C) {
    return typeof C == 'string' ? Ws(n, C, l.value.path) : fe({}, C);
  }
  function _(C, H) {
    if (u !== C) return pn(8, { from: H, to: C });
  }
  function S(C) {
    return B(C);
  }
  function A(C) {
    return S(fe(g(C), { replace: !0 }));
  }
  function j(C) {
    const H = C.matched[C.matched.length - 1];
    if (H && H.redirect) {
      const { redirect: k } = H;
      let G = typeof k == 'function' ? k(C) : k;
      return (
        typeof G == 'string' &&
          ((G = G.includes('?') || G.includes('#') ? (G = g(G)) : { path: G }),
          (G.params = {})),
        fe(
          { query: C.query, hash: C.hash, params: 'path' in G ? {} : C.params },
          G,
        )
      );
    }
  }
  function B(C, H) {
    const k = (u = E(C)),
      G = l.value,
      ce = C.state,
      h = C.force,
      m = C.replace === !0,
      w = j(k);
    if (w)
      return B(
        fe(g(w), {
          state: typeof w == 'object' ? fe({}, ce, w.state) : ce,
          force: h,
          replace: m,
        }),
        H || k,
      );
    const x = k;
    x.redirectedFrom = H;
    let P;
    return (
      !h && Gu(s, G, k) && ((P = pn(16, { to: x, from: G })), Ve(G, G, !0, !1)),
      (P ? Promise.resolve(P) : Q(x, G))
        .catch((M) => (pt(M) ? (pt(M, 2) ? M : Je(M)) : oe(M, x, G)))
        .then((M) => {
          if (M) {
            if (pt(M, 2))
              return B(
                fe({ replace: m }, g(M.to), {
                  state: typeof M.to == 'object' ? fe({}, ce, M.to.state) : ce,
                  force: h,
                }),
                H || x,
              );
          } else M = W(x, G, !0, m, ce);
          return $(x, G, M), M;
        })
    );
  }
  function q(C, H) {
    const k = _(C, H);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function T(C) {
    const H = qt.values().next().value;
    return H && typeof H.runWithContext == 'function'
      ? H.runWithContext(C)
      : C();
  }
  function Q(C, H) {
    let k;
    const [G, ce, h] = Vd(C, H);
    k = Gs(G.reverse(), 'beforeRouteLeave', C, H);
    for (const w of G)
      w.leaveGuards.forEach((x) => {
        k.push(Ct(x, C, H));
      });
    const m = q.bind(null, C, H);
    return (
      k.push(m),
      Le(k)
        .then(() => {
          k = [];
          for (const w of r.list()) k.push(Ct(w, C, H));
          return k.push(m), Le(k);
        })
        .then(() => {
          k = Gs(ce, 'beforeRouteUpdate', C, H);
          for (const w of ce)
            w.updateGuards.forEach((x) => {
              k.push(Ct(x, C, H));
            });
          return k.push(m), Le(k);
        })
        .then(() => {
          k = [];
          for (const w of h)
            if (w.beforeEnter)
              if (ot(w.beforeEnter))
                for (const x of w.beforeEnter) k.push(Ct(x, C, H));
              else k.push(Ct(w.beforeEnter, C, H));
          return k.push(m), Le(k);
        })
        .then(
          () => (
            C.matched.forEach((w) => (w.enterCallbacks = {})),
            (k = Gs(h, 'beforeRouteEnter', C, H)),
            k.push(m),
            Le(k)
          ),
        )
        .then(() => {
          k = [];
          for (const w of o.list()) k.push(Ct(w, C, H));
          return k.push(m), Le(k);
        })
        .catch((w) => (pt(w, 8) ? w : Promise.reject(w)))
    );
  }
  function $(C, H, k) {
    a.list().forEach((G) => T(() => G(C, H, k)));
  }
  function W(C, H, k, G, ce) {
    const h = _(C, H);
    if (h) return h;
    const m = H === Et,
      w = Jt ? history.state : {};
    k &&
      (G || m
        ? i.replace(C.fullPath, fe({ scroll: m && w && w.scroll }, ce))
        : i.push(C.fullPath, ce)),
      (l.value = C),
      Ve(C, H, k, m),
      Je();
  }
  let V;
  function se() {
    V ||
      (V = i.listen((C, H, k) => {
        if (!Un.listening) return;
        const G = E(C),
          ce = j(G);
        if (ce) {
          B(fe(ce, { replace: !0 }), G).catch(Dn);
          return;
        }
        u = G;
        const h = l.value;
        Jt && Qu(Jr(h.fullPath, k.delta), $s()),
          Q(G, h)
            .catch((m) =>
              pt(m, 12)
                ? m
                : pt(m, 2)
                ? (B(m.to, G)
                    .then((w) => {
                      pt(w, 20) &&
                        !k.delta &&
                        k.type === Fn.pop &&
                        i.go(-1, !1);
                    })
                    .catch(Dn),
                  Promise.reject())
                : (k.delta && i.go(-k.delta, !1), oe(m, G, h)),
            )
            .then((m) => {
              (m = m || W(G, h, !1)),
                m &&
                  (k.delta && !pt(m, 8)
                    ? i.go(-k.delta, !1)
                    : k.type === Fn.pop && pt(m, 20) && i.go(-1, !1)),
                $(G, h, m);
            })
            .catch(Dn);
      }));
  }
  let ve = Cn(),
    me = Cn(),
    de;
  function oe(C, H, k) {
    Je(C);
    const G = me.list();
    return (
      G.length ? G.forEach((ce) => ce(C, H, k)) : console.error(C),
      Promise.reject(C)
    );
  }
  function Ke() {
    return de && l.value !== Et
      ? Promise.resolve()
      : new Promise((C, H) => {
          ve.add([C, H]);
        });
  }
  function Je(C) {
    return (
      de ||
        ((de = !C),
        se(),
        ve.list().forEach(([H, k]) => (C ? k(C) : H())),
        ve.reset()),
      C
    );
  }
  function Ve(C, H, k, G) {
    const { scrollBehavior: ce } = e;
    if (!Jt || !ce) return Promise.resolve();
    const h =
      (!k && ed(Jr(C.fullPath, 0))) ||
      ((G || !k) && history.state && history.state.scroll) ||
      null;
    return Hi()
      .then(() => ce(C, H, h))
      .then((m) => m && Ju(m))
      .catch((m) => oe(m, C, H));
  }
  const Oe = (C) => i.go(C);
  let wt;
  const qt = new Set(),
    Un = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: v,
      hasRoute: I,
      getRoutes: b,
      resolve: E,
      options: e,
      push: S,
      replace: A,
      go: Oe,
      back: () => Oe(-1),
      forward: () => Oe(1),
      beforeEach: r.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: me.add,
      isReady: Ke,
      install(C) {
        const H = this;
        C.component('RouterLink', kd),
          C.component('RouterView', Hd),
          (C.config.globalProperties.$router = H),
          Object.defineProperty(C.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => le(l),
          }),
          Jt &&
            !wt &&
            l.value === Et &&
            ((wt = !0), S(i.location).catch((ce) => {}));
        const k = {};
        for (const ce in Et)
          Object.defineProperty(k, ce, {
            get: () => l.value[ce],
            enumerable: !0,
          });
        C.provide(Rs, H), C.provide(tr, qo(k)), C.provide(wi, l);
        const G = C.unmount;
        qt.add(C),
          (C.unmount = function () {
            qt.delete(C),
              qt.size < 1 &&
                ((u = Et),
                V && V(),
                (V = null),
                (l.value = Et),
                (wt = !1),
                (de = !1)),
              G();
          });
      },
    };
  function Le(C) {
    return C.reduce((H, k) => H.then(() => T(k)), Promise.resolve());
  }
  return Un;
}
function Vd(e, t) {
  const n = [],
    s = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < r; o++) {
    const a = t.matched[o];
    a && (e.matched.find((u) => fn(u, a)) ? s.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((u) => fn(u, l)) || i.push(l));
  }
  return [n, s, i];
}
function Wd() {
  return rt(Rs);
}
function nr() {
  return rt(tr);
}
function yn() {
  return {
    BOOTSTRAP_BREAKPOINTS: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
    HTML_CLASSES: {
      bodyScroll: '',
      bodyNoScroll: 'no-scroll',
      imageViewImage: 'image-view-img',
      imageViewImageIgnoredOnCount: 'image-view-img-ignored-on-count',
    },
    LoadStatus: { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' },
    ProjectBannerType: { FEATURED: 'featured', STANDARD: 'standard' },
    SocialLinksSize: {
      XL: 'btn-social-xl',
      LG: 'btn-social-lg',
      MD: 'btn-social-md',
    },
    SocialLinksColor: {
      DARK_AND_WHITE: 'btn-social-dark-and-white',
      DARK: 'btn-social-dark',
      BLACK: 'btn-social-black',
      LIGHT_DARK: 'btn-social-light-dark',
    },
  };
}
const ht = yn();
let Us = null;
function wn() {
  const e = (u) => window.innerWidth >= ht.BOOTSTRAP_BREAKPOINTS[u];
  return {
    isBootstrapBreakpoint: e,
    getBootstrapBreakpoint: () => {
      const u = window.innerWidth;
      let c = '';
      for (const d in ht.BOOTSTRAP_BREAKPOINTS)
        u >= ht.BOOTSTRAP_BREAKPOINTS[d] && (c = d);
      return c;
    },
    setFeedbackView: (u) => {
      Us = u;
    },
    getFeedbackView: () => (Us ? Us.value : null),
    getImageCount: () => {
      const u = document.querySelectorAll('.' + ht.HTML_CLASSES.imageViewImage);
      let c = 0;
      return {
        loaded: Array.from(u).reduce(
          (p, f) =>
            !f.classList.contains(
              ht.HTML_CLASSES.imageViewImageIgnoredOnCount,
            ) && (c++, f.getAttribute('loadStatus') !== ht.LoadStatus.LOADING)
              ? p + 1
              : p,
          0,
        ),
        total: c,
      };
    },
    isElementOutsideBounds: (u) => {
      const c = u.getBoundingClientRect();
      return (
        c.bottom < 0 ||
        c.right < 0 ||
        c.left > window.innerWidth ||
        c.top > window.innerHeight
      );
    },
    setPageScrollingEnabled: (u) => {
      const c = document.getElementsByTagName('html')[0];
      u
        ? ((document.body.className = ht.HTML_CLASSES.bodyScroll),
          (c.className = ''))
        : ((document.body.className = ht.HTML_CLASSES.bodyNoScroll),
          (c.className += ' ' + ht.HTML_CLASSES.bodyNoScroll));
    },
    smoothScrollToElement: (u, c) => {
      const d = document.querySelector('#' + u);
      if (!d) {
        console.warn('Trying to scroll to an invalid element with id: ' + u);
        return;
      }
      const p = () => {
        const f = d.offsetTop,
          v = document.querySelector('#navbar').offsetHeight;
        scroll({ top: f - Math.min(v, e('sm') ? 70 : 60), behavior: 'smooth' });
      };
      c ? setTimeout(p, 100) : p();
    },
    instantScrollTo: (u, c) => {
      const d = () => {
        window.scrollTo({ top: u ?? 0, left: 0, behavior: 'instant' });
      };
      c ? setTimeout(d, 10) : d();
    },
  };
}
const ue = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  Gd = (e) => (ke('data-v-e04036d7'), (e = e()), Be(), e),
  Ud = { class: 'image-view' },
  Yd = ['src', 'alt'],
  Kd = { key: 0, class: 'spinner' },
  qd = Gd(() =>
    y(
      'img',
      {
        alt: 'loading...',
        class: 'preloader-gif',
        src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2U9IiM1NDUxNTEiIHN0cm9rZS1kYXNoYXJyYXk9IjUwLjI2NTQ4MjQ1NzQzNjY5IDUwLjI2NTQ4MjQ1NzQzNjY5IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMjMiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlPSIjYzNjM2M1IiBzdHJva2UtZGFzaGFycmF5PSIzNi4xMjgzMTU1MTYyODI2MiAzNi4xMjgzMTU1MTYyODI2MiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjM2LjEyODMxNTUxNjI4MjYyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==',
      },
      null,
      -1,
    ),
  ),
  Xd = [qd],
  Zd = {
    __name: 'ImageView',
    props: {
      src: String,
      alt: String,
      ignoreOnImageCount: Boolean,
      spinnerEnabled: Boolean,
    },
    emits: ['loading', 'loaded', 'error', 'completed'],
    setup(e, { expose: t, emit: n }) {
      const s = e,
        i = yn(),
        r = n,
        o = te(null),
        a = te(null),
        l = _e(
          () =>
            i.HTML_CLASSES.imageViewImage +
            (s.ignoreOnImageCount
              ? ` ${i.HTML_CLASSES.imageViewImageIgnoredOnCount}`
              : ''),
        );
      yt(() => {
        f();
      }),
        jt(
          () => s.src,
          () => {
            f();
          },
        );
      const u = () =>
          a.value === i.LoadStatus.LOADED || a.value === i.LoadStatus.ERROR,
        c = () => {
          p(i.LoadStatus.LOADED);
        },
        d = () => {
          p(i.LoadStatus.ERROR);
        },
        p = (v) => {
          switch (
            ((a.value = v), o.value && o.value.setAttribute('loadStatus', v), v)
          ) {
            case i.LoadStatus.LOADING:
              r('loading');
              break;
            case i.LoadStatus.LOADED:
              r('loaded'), r('completed');
              break;
            case i.LoadStatus.ERROR:
              r('error'), r('completed');
              break;
          }
        },
        f = () => {
          p(
            typeof s.src != 'string'
              ? i.LoadStatus.ERROR
              : i.LoadStatus.LOADING,
          );
        };
      return (
        t({ isLoaded: u }),
        (v, b) => (
          O(),
          R('div', Ud, [
            zn(
              y(
                'img',
                {
                  ref_key: 'img',
                  ref: o,
                  src: s.src,
                  alt: s.alt,
                  class: he(l.value),
                  onLoad: c,
                  onError: d,
                },
                null,
                42,
                Yd,
              ),
              [[ms, u()]],
            ),
            s.spinnerEnabled
              ? zn((O(), R('div', Kd, Xd, 512)), [[ms, !u()]])
              : De('', !0),
          ])
        )
      );
    },
  },
  Yt = ue(Zd, [['__scopeId', 'data-v-e04036d7']]);
const Jd = ['id', 'href'],
  Qd = ['type', 'id'],
  ef = {
    __name: 'XLButton',
    props: {
      label: String,
      icon: String,
      href: String,
      type: String,
      id: String,
      customClass: Object,
    },
    emits: ['click'],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        i = () => {
          s('click');
        };
      return (r, o) =>
        n.href
          ? (O(),
            R(
              'a',
              {
                key: 0,
                id: n.id,
                class: he([n.customClass, 'btn btn-primary btn-xl mt-4']),
                href: n.href,
                onClick: o[0] || (o[0] = (a) => i()),
              },
              [
                y('i', { class: he(['me-1', n.icon]) }, null, 2),
                Se(re(n.label), 1),
              ],
              10,
              Jd,
            ))
          : (O(),
            R(
              'button',
              {
                key: 1,
                type: n.type,
                id: n.id,
                class: he([n.customClass, 'btn btn-primary btn-xl mt-4']),
                onClick: o[1] || (o[1] = (a) => i()),
              },
              [
                y('i', { class: he(['me-1', n.icon]) }, null, 2),
                Se(re(n.label), 1),
              ],
              10,
              Qd,
            ));
    },
  },
  sr = ue(ef, [['__scopeId', 'data-v-9373f146']]);
const tf = (e) => (ke('data-v-09a15d9e'), (e = e()), Be(), e),
  nf = { class: 'agency-header' },
  sf = tf(() =>
    y(
      'div',
      { class: 'bg-promo-image' },
      [y('div', { class: 'bg-promo-image-overlay' })],
      -1,
    ),
  ),
  rf = { class: 'container-xxl' },
  of = { class: 'content-wrapper' },
  lf = { class: 'heading' },
  af = { class: 'subheading' },
  cf = {
    __name: 'Header',
    props: { headerData: Object },
    setup(e) {
      const t = e,
        n = () => {
          wn().smoothScrollToElement(t.headerData.button.targetSection, !0);
        };
      return (s, i) => (
        O(),
        R('header', nf, [
          sf,
          y('div', rf, [
            y('div', of, [
              X(
                Yt,
                { src: t.headerData.imageUrl, alt: 'logo', class: 'img-logo' },
                null,
                8,
                ['src'],
              ),
              y('h1', lf, re(t.headerData.title), 1),
              y('h4', af, re(t.headerData.subtitle), 1),
              X(
                sr,
                {
                  icon: t.headerData.button.icon,
                  label: t.headerData.button.label,
                  onClick: n,
                },
                null,
                8,
                ['icon', 'label'],
              ),
            ]),
          ]),
        ])
      );
    },
  },
  uf = ue(cf, [['__scopeId', 'data-v-09a15d9e']]);
const df = { class: 'social-links' },
  ff = ['href', 'aria-label'],
  pf = {
    __name: 'SocialLinks',
    props: { items: Array, size: String, color: String },
    setup(e) {
      const t = e,
        n = _e(() => {
          let s = 'btn btn-social';
          const i = t.size || '',
            r = t.color || '';
          return (s += ` ${i} ${r}`), s;
        });
      return (s, i) => (
        O(),
        R('div', df, [
          (O(!0),
          R(
            ne,
            null,
            Te(
              t.items,
              (r) => (
                O(),
                R(
                  'a',
                  {
                    class: he(n.value),
                    href: r.href,
                    target: '_blank',
                    'aria-label': r.faIcon,
                  },
                  [y('i', { class: he(r.faIcon) }, null, 2)],
                  10,
                  ff,
                )
              ),
            ),
            256,
          )),
        ])
      );
    },
  },
  _s = ue(pf, [['__scopeId', 'data-v-a4849fc8']]);
const hf = (e) => (ke('data-v-a6ef3a83'), (e = e()), Be(), e),
  mf = { class: 'inline-list mt-0 mt-lg-3' },
  gf = hf(() =>
    y(
      'li',
      { class: 'inline-list-item list-header' },
      [Se(' ━ '), y('i', { class: 'fa fa-circle-nodes' }), Se(' ━ ')],
      -1,
    ),
  ),
  _f = { class: 'inline-list-item' },
  vf = ['href'],
  bf = {
    __name: 'InlineList',
    props: { items: Array },
    setup(e) {
      const t = e;
      return (n, s) => {
        const i = Wi('router-link');
        return (
          O(),
          R('ul', mf, [
            gf,
            (O(!0),
            R(
              ne,
              null,
              Te(
                t.items,
                (r) => (
                  O(),
                  R('li', _f, [
                    r.href
                      ? (O(),
                        R(
                          'a',
                          { key: 0, href: r.href, class: 'text-2 item-link' },
                          [
                            r.faIcon
                              ? (O(),
                                R(
                                  'i',
                                  {
                                    key: 0,
                                    class: he([r.faIcon, 'item-icon me-1']),
                                  },
                                  null,
                                  2,
                                ))
                              : De('', !0),
                            Se(' ' + re(r.label), 1),
                          ],
                          8,
                          vf,
                        ))
                      : r.routerHref
                      ? (O(),
                        Me(
                          i,
                          {
                            key: 1,
                            to: r.routerHref,
                            class: 'text-2 item-link',
                          },
                          {
                            default: Ie(() => [
                              r.faIcon
                                ? (O(),
                                  R(
                                    'i',
                                    {
                                      key: 0,
                                      class: he([r.faIcon, 'item-icon me-1']),
                                    },
                                    null,
                                    2,
                                  ))
                                : De('', !0),
                              Se(' ' + re(r.label), 1),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['to'],
                        ))
                      : De('', !0),
                  ])
                ),
              ),
              256,
            )),
          ])
        );
      };
    },
  },
  yf = ue(bf, [['__scopeId', 'data-v-a6ef3a83']]);
const wf = { class: 'agency-footer' },
  Sf = { class: 'footer-block' },
  Ef = { class: 'container-xxl' },
  xf = { class: 'footer-block-row row' },
  Tf = { class: 'footer-block-col col-12 col-lg-4' },
  Cf = { class: 'footer-title' },
  If = { key: 0, class: 'footer-item-wrapper' },
  Pf = { class: 'footer-subtitle' },
  Af = { class: 'text-3 m-0' },
  Mf = { key: 1, class: 'footer-item-wrapper' },
  Of = ['innerHTML'],
  Lf = { key: 2, class: 'footer-item-wrapper mt-3' },
  Df = { key: 3, class: 'footer-item-wrapper mt-2 mt-lg-0' },
  $f = { class: 'footer-block footer-block-dark' },
  Rf = { class: 'container-xxl' },
  Nf = ['innerHTML'],
  kf = {
    __name: 'Footer',
    props: { footerData: Object },
    setup(e) {
      const t = e,
        n = yn(),
        s = _e(() => {
          let r = [];
          return (
            t.footerData &&
              r.push(
                t.footerData.left,
                t.footerData.middle,
                t.footerData.right,
              ),
            r
          );
        }),
        i = _e(() => t.footerData.copyright);
      return (r, o) => (
        O(),
        R('footer', wf, [
          y('div', Sf, [
            y('div', Ef, [
              y('div', xf, [
                (O(!0),
                R(
                  ne,
                  null,
                  Te(
                    s.value,
                    (a) => (
                      O(),
                      R('div', Tf, [
                        y('h5', Cf, [
                          a.faIcon
                            ? (O(),
                              R('i', { key: 0, class: he(a.faIcon) }, null, 2))
                            : De('', !0),
                          Se(' ' + re(a.title), 1),
                        ]),
                        Array.isArray(a.description)
                          ? (O(),
                            R('div', If, [
                              y('div', Pf, [
                                (O(!0),
                                R(
                                  ne,
                                  null,
                                  Te(
                                    a.description,
                                    (l) => (O(), R('p', Af, re(l), 1)),
                                  ),
                                  256,
                                )),
                              ]),
                            ]))
                          : a.description
                          ? (O(),
                            R('div', Mf, [
                              y(
                                'span',
                                { class: 'text-2', innerHTML: a.description },
                                null,
                                8,
                                Of,
                              ),
                            ]))
                          : De('', !0),
                        a.displayItemsAsButtons
                          ? (O(),
                            R('div', Lf, [
                              X(
                                _s,
                                {
                                  items: a.items,
                                  size: le(n).SocialLinksSize.LG,
                                  color: le(n).SocialLinksColor.DARK_AND_WHITE,
                                },
                                null,
                                8,
                                ['items', 'size', 'color'],
                              ),
                            ]))
                          : (O(),
                            R('div', Df, [
                              X(yf, { items: a.items }, null, 8, ['items']),
                            ])),
                      ])
                    ),
                  ),
                  256,
                )),
              ]),
            ]),
          ]),
          y('div', $f, [
            y('div', Rf, [
              y(
                'p',
                { class: 'copyright text-1 p-0 m-0', innerHTML: i.value },
                null,
                8,
                Nf,
              ),
            ]),
          ]),
        ])
      );
    },
  },
  jl = ue(kf, [['__scopeId', 'data-v-44195cf6']]);
const Bf = (e) => (ke('data-v-9776e1f4'), (e = e()), Be(), e),
  zf = { class: 'breadcrumbs' },
  jf = { class: 'breadcrumbs-links' },
  Hf = { class: 'breadcrumb-link-item text-4' },
  Ff = Bf(() => y('i', { class: 'fa fa-home me-1' }, null, -1)),
  Vf = { class: 'breadcrumb-link-item text-4' },
  Wf = { key: 1 },
  Gf = {
    __name: 'Breadcrumbs',
    props: { routes: Array },
    setup(e) {
      return (t, n) => {
        const s = Wi('router-link');
        return (
          O(),
          R('nav', zf, [
            y('ul', jf, [
              y('li', Hf, [
                X(s, { to: '/' }, { default: Ie(() => [Ff]), _: 1 }),
              ]),
              (O(!0),
              R(
                ne,
                null,
                Te(
                  e.routes,
                  (i, r) => (
                    O(),
                    R('li', Vf, [
                      r < e.routes.length - 1
                        ? (O(),
                          Me(
                            s,
                            { key: 0, to: i.path },
                            { default: Ie(() => [Se(re(i.label), 1)]), _: 2 },
                            1032,
                            ['to'],
                          ))
                        : (O(), R('span', Wf, re(i.label), 1)),
                    ])
                  ),
                ),
                256,
              )),
            ]),
          ])
        );
      };
    },
  },
  Uf = ue(Gf, [['__scopeId', 'data-v-9776e1f4']]);
const Yf = (e) => (ke('data-v-cffe59fb'), (e = e()), Be(), e),
  Kf = ['id'],
  qf = Yf(() =>
    y(
      'div',
      { class: 'bg-promo-image' },
      [y('div', { class: 'bg-promo-image-overlay-faded' })],
      -1,
    ),
  ),
  Xf = { class: 'container-xxl' },
  Zf = { key: 1, class: 'section-heading' },
  Jf = ['innerHTML'],
  Qf = ['innerHTML'],
  ep = { class: 'section-body' },
  tp = { key: 2, class: 'section-footer' },
  np = { class: 'row h-100' },
  sp = { class: 'col-12 col-lg-8 text-center mx-auto' },
  ip = { key: 0, class: 'solid-divider mb-3' },
  rp = ['innerHTML'],
  op = ['innerHTML'],
  lp = {
    __name: 'SectionTemplate',
    props: { sectionData: Object, breadcrumbs: Array },
    setup(e) {
      const t = e,
        n = _e(() => t.sectionData.headline),
        s = _e(() => t.sectionData.footer);
      return (i, r) => (
        O(),
        R(
          'section',
          {
            class: he(['agency-section', t.sectionData.class]),
            id: t.sectionData.id,
          },
          [
            qf,
            y('div', Xf, [
              e.breadcrumbs
                ? (O(),
                  Me(
                    Uf,
                    {
                      key: 0,
                      routes: e.breadcrumbs,
                      class: 'mb-3 d-none d-lg-block',
                    },
                    null,
                    8,
                    ['routes'],
                  ))
                : De('', !0),
              n.value && n.value.title
                ? (O(),
                  R('div', Zf, [
                    y(
                      'h1',
                      { class: 'section-title mb-1', innerHTML: n.value.title },
                      null,
                      8,
                      Jf,
                    ),
                    y(
                      'h5',
                      {
                        class: 'section-subtitle',
                        innerHTML: n.value.subtitle,
                      },
                      null,
                      8,
                      Qf,
                    ),
                  ]))
                : De('', !0),
              y('div', ep, [Ac(i.$slots, 'default', {}, void 0, !0)]),
              s.value && s.value.title
                ? (O(),
                  R('div', tp, [
                    y('div', np, [
                      y('div', sp, [
                        s.value.divider ? (O(), R('hr', ip)) : De('', !0),
                        y('h3', { innerHTML: s.value.title }, null, 8, rp),
                        s.value.description
                          ? (O(),
                            R(
                              'p',
                              {
                                key: 1,
                                innerHTML: s.value.description,
                                class: he([
                                  'mt-4 mb-2 text-4',
                                  {
                                    'text-2 text-muted':
                                      s.value.smallDescription,
                                  },
                                ]),
                              },
                              null,
                              10,
                              op,
                            ))
                          : De('', !0),
                        s.value.button
                          ? (O(),
                            Me(
                              sr,
                              {
                                key: 2,
                                label: s.value.button.label,
                                icon: s.value.button.icon,
                                href: s.value.button.href,
                              },
                              null,
                              8,
                              ['label', 'icon', 'href'],
                            ))
                          : De('', !0),
                      ]),
                    ]),
                  ]))
                : De('', !0),
            ]),
          ],
          10,
          Kf,
        )
      );
    },
  },
  Xe = ue(lp, [['__scopeId', 'data-v-cffe59fb']]);
const ap = { class: 'about-item' },
  cp = { class: 'col-image' },
  up = { class: 'col-texts' },
  dp = ['innerHTML'],
  fp = {
    __name: 'AboutSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e;
      return (n, s) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              (O(!0),
              R(
                ne,
                null,
                Te(
                  t.sectionData.items,
                  (i) => (
                    O(),
                    R('div', ap, [
                      y('div', cp, [
                        X(
                          Yt,
                          { src: i.imageUrl, alt: 'about-logo', class: 'img' },
                          null,
                          8,
                          ['src'],
                        ),
                      ]),
                      y('div', up, [
                        (O(!0),
                        R(
                          ne,
                          null,
                          Te(
                            i.description,
                            (r) => (
                              O(),
                              R(
                                'p',
                                { class: 'text-4', innerHTML: r },
                                null,
                                8,
                                dp,
                              )
                            ),
                          ),
                          256,
                        )),
                      ]),
                    ])
                  ),
                ),
                256,
              )),
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  pp = ue(fp, [['__scopeId', 'data-v-7abf8f09']]);
const hp = {
    __name: 'Alert',
    props: { type: String, message: String },
    setup(e) {
      const t = e,
        n = _e(() => {
          switch (t.type) {
            case 'success':
              return 'fa-solid fa-check-circle';
            case 'danger':
              return 'fa-solid fa-exclamation-triangle';
          }
        });
      return (s, i) => (
        O(),
        R(
          'div',
          { class: he(['text-4', `alert alert-${t.type}`]), role: 'alert' },
          [
            y('i', { class: he(['me-1', n.value]) }, null, 2),
            Se(' ' + re(e.message), 1),
          ],
          2,
        )
      );
    },
  },
  mp = ue(hp, [['__scopeId', 'data-v-7b11d85d']]);
const Hl = (e) => (ke('data-v-131908e6'), (e = e()), Be(), e),
  gp = { id: 'contact-form' },
  _p = { class: 'row contact-form-row align-items-stretch' },
  vp = { key: 0, class: 'col-12 mb-1' },
  bp = Hl(() =>
    y(
      'div',
      { class: 'col-lg-6' },
      [
        y('div', { class: 'form-group input-group' }, [
          y('span', { class: 'input-group-text input-group-attach' }, [
            y('i', { class: 'fa fa-signature' }),
          ]),
          y('input', {
            class: 'form-control',
            id: 'form-name',
            type: 'text',
            placeholder: 'Name *',
            required: '',
          }),
        ]),
        y('div', { class: 'form-group input-group' }, [
          y('span', { class: 'input-group-text input-group-attach' }, [
            y('i', { class: 'fa fa-envelope' }),
          ]),
          y('input', {
            class: 'form-control',
            id: 'form-email',
            type: 'email',
            placeholder: 'E-Mail *',
            required: '',
          }),
        ]),
        y('div', { class: 'form-group input-group' }, [
          y('span', { class: 'input-group-text input-group-attach' }, [
            y('i', { class: 'fa fa-pen-to-square' }),
          ]),
          y('input', {
            class: 'form-control',
            id: 'form-subject',
            type: 'text',
            placeholder: 'Subject *',
            required: '',
          }),
        ]),
      ],
      -1,
    ),
  ),
  yp = Hl(() =>
    y(
      'div',
      { class: 'col-lg-6' },
      [
        y('div', { class: 'form-group form-group-textarea mb-md-0' }, [
          y('textarea', {
            class: 'form-control',
            id: 'form-message',
            placeholder: 'Message *',
            required: '',
          }),
        ]),
      ],
      -1,
    ),
  ),
  wp = { class: 'col-12 text-center mt-2 mt-lg-4' },
  Sp = {
    __name: 'ContactSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e,
        n = wn(),
        s = {
          ENABLED: 'enabled',
          SENDING: 'sending',
          SENT: 'sent',
          ERROR: 'error',
        },
        i = ['name', 'email', 'subject', 'message'],
        r = te(null);
      let o = 0;
      yt(() => {
        const f = document.getElementById('contact-form');
        f.attachEvent
          ? f.attachEvent('submit', l)
          : f.addEventListener('submit', l),
          (r.value = s.ENABLED);
      });
      const a = () => {
          i.forEach((f) => {
            const v = document.getElementById(`form-${f}`);
            v.value = '';
          });
        },
        l = (f) => (
          f.preventDefault && f.preventDefault(),
          i.forEach((v) => {
            document.getElementById(`form-${v}`).value;
          }),
          (r.value = s.SENDING),
          u(),
          !1
        ),
        u = () => {
          n.getFeedbackView().showActivitySpinner('Sending Message...'),
            o++,
            setTimeout(() => {
              o % 2 !== 0 ? c() : d();
            }, 1e3);
        },
        c = () => {
          n.getFeedbackView().hideActivitySpinner(),
            a(),
            (r.value = s.SENT),
            n.smoothScrollToElement(t.sectionData.id, !0);
        },
        d = () => {
          n.getFeedbackView().hideActivitySpinner(),
            (r.value = s.ERROR),
            n.smoothScrollToElement(t.sectionData.id, !0);
        },
        p = _e(() => {
          switch (r.value) {
            case s.SENT:
              return {
                type: 'success',
                message: 'The message has been sent. Thanks for reaching out!',
              };
            case s.ERROR:
              return {
                type: 'danger',
                message:
                  'There was an error sending the message. Try again later.',
              };
            default:
              return null;
          }
        });
      return (f, v) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              y('form', gp, [
                y('div', _p, [
                  p.value
                    ? (O(),
                      R('div', vp, [
                        X(
                          mp,
                          { type: p.value.type, message: p.value.message },
                          null,
                          8,
                          ['type', 'message'],
                        ),
                      ]))
                    : De('', !0),
                  bp,
                  yp,
                  y('div', wp, [
                    X(
                      sr,
                      {
                        label: 'Send Message',
                        type: 'submit',
                        icon: 'fa fa-envelope me-2',
                        id: 'btn-submit-message',
                        'custom-class': { disabled: r.value === s.SENDING },
                      },
                      null,
                      8,
                      ['custom-class'],
                    ),
                  ]),
                ]),
              ]),
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  Ep = ue(Sp, [['__scopeId', 'data-v-131908e6']]);
const ir = (e) => (ke('data-v-59abc12e'), (e = e()), Be(), e),
  xp = ir(() => y('hr', { class: 'mt-0 mb-4 pb-1 pg-lg-0 mb-lg-4' }, null, -1)),
  Tp = { class: 'row h-100' },
  Cp = { class: 'col-12 col-lg-6' },
  Ip = { class: 'faq-item d-flex h-100 mb-4 pe-3' },
  Pp = ir(() =>
    y(
      'div',
      { class: 'flex-shrink-0 pe-1 ps-1' },
      [
        y('i', {
          class: 'fa fa-question-circle text-primary question-icon eq-h4',
        }),
      ],
      -1,
    ),
  ),
  Ap = { class: 'ms-3' },
  Mp = { class: 'question-title' },
  Op = ['innerHTML'],
  Lp = ir(() => y('hr', { class: 'mt-0 mt-lg-2 mb-4 pb-2 pb-md-3' }, null, -1)),
  Dp = {
    __name: 'FaqSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e;
      return (n, s) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              xp,
              y('div', Tp, [
                (O(!0),
                R(
                  ne,
                  null,
                  Te(
                    t.sectionData.items,
                    (i) => (
                      O(),
                      R('div', Cp, [
                        y('div', Ip, [
                          Pp,
                          y('div', Ap, [
                            y('h5', Mp, re(i.title), 1),
                            y(
                              'p',
                              {
                                class: 'question-answer text-2 text-muted',
                                innerHTML: i.description,
                              },
                              null,
                              8,
                              Op,
                            ),
                          ]),
                        ]),
                      ])
                    ),
                  ),
                  256,
                )),
              ]),
              Lp,
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  $p = ue(Dp, [['__scopeId', 'data-v-59abc12e']]);
const Ns = (e) => (ke('data-v-7a9d9e0d'), (e = e()), Be(), e),
  Rp = { class: 'project-banner' },
  Np = { key: 0, class: 'col-texts col-texts-featured' },
  kp = Ns(() =>
    y(
      'h4',
      { class: 'title mb-2 text-light-5' },
      [y('i', { class: 'fa-solid fa-fire me-2' }), Se(' Latest Release')],
      -1,
    ),
  ),
  Bp = ['innerHTML'],
  zp = ['innerHTML'],
  jp = { key: 1, class: 'col-texts col-texts-standard' },
  Hp = ['innerHTML'],
  Fp = Ns(() =>
    y(
      'span',
      { class: 'me-1 text-3' },
      [y('i', { class: 'fa fa-tag me-1' }), Se('Tags: ')],
      -1,
    ),
  ),
  Vp = { class: 'd-inline-block' },
  Wp = { class: 'badge bg-primary me-1 text-1' },
  Gp = { class: 'subsection mt-4' },
  Up = Ns(() =>
    y(
      'h5',
      { class: 'd-none d-lg-inline-block' },
      [y('i', { class: 'fa fa-file me-1' }), Se(' About')],
      -1,
    ),
  ),
  Yp = ['innerHTML'],
  Kp = { class: 'subsection mt-4' },
  qp = Ns(() =>
    y(
      'h5',
      null,
      [y('i', { class: 'fa fa-external-link me-1' }), Se(' Where To Find')],
      -1,
    ),
  ),
  Xp = { class: 'text-2' },
  Zp = {
    __name: 'ProjectBanner',
    props: { project: Object, type: String },
    setup(e) {
      const t = e,
        n = yn(),
        s = _e(() =>
          t.type === n.ProjectBannerType.FEATURED ? 'img trace-shadow' : 'img',
        );
      return (i, r) => (
        O(),
        R('div', Rp, [
          y(
            'div',
            {
              class: he([
                'col-image',
                {
                  'col-image-shrink':
                    t.type === le(n).ProjectBannerType.STANDARD,
                },
              ]),
            },
            [
              X(
                Yt,
                {
                  src: t.project.imageUrl,
                  alt: 'about-logo',
                  'spinner-enabled': !0,
                  class: he(s.value),
                },
                null,
                8,
                ['src', 'class'],
              ),
            ],
            2,
          ),
          t.type === le(n).ProjectBannerType.FEATURED
            ? (O(),
              R('div', Np, [
                kp,
                y(
                  'h1',
                  {
                    class: 'project-title display-1 text-white text-uppercase',
                    innerHTML: t.project.title,
                  },
                  null,
                  8,
                  Bp,
                ),
                y(
                  'p',
                  {
                    class: 'description text-5 text-light-5 mt-4 mb-4',
                    innerHTML: t.project.description,
                  },
                  null,
                  8,
                  zp,
                ),
                X(
                  _s,
                  {
                    items: t.project.links,
                    color: le(n).SocialLinksColor.BLACK,
                    size: le(n).SocialLinksSize.XL,
                    class: 'mt-xl-5',
                  },
                  null,
                  8,
                  ['items', 'color', 'size'],
                ),
              ]))
            : (O(),
              R('div', jp, [
                y(
                  'h1',
                  { class: 'mb-2', innerHTML: t.project.title },
                  null,
                  8,
                  Hp,
                ),
                Fp,
                y('div', Vp, [
                  (O(!0),
                  R(
                    ne,
                    null,
                    Te(t.project.tags, (o) => (O(), R('span', Wp, re(o), 1))),
                    256,
                  )),
                ]),
                y('div', Gp, [
                  Up,
                  y(
                    'p',
                    { class: 'text-2', innerHTML: t.project.description },
                    null,
                    8,
                    Yp,
                  ),
                ]),
                y('div', Kp, [
                  qp,
                  y('p', Xp, [
                    y('strong', null, re(t.project.title), 1),
                    Se(' is available on the following platforms or services:'),
                  ]),
                  X(
                    _s,
                    {
                      items: t.project.links,
                      size: le(n).SocialLinksSize.LG,
                      color: le(n).SocialLinksColor.DARK,
                    },
                    null,
                    8,
                    ['items', 'size', 'color'],
                  ),
                ]),
              ])),
        ])
      );
    },
  },
  Jp = ue(Zp, [['__scopeId', 'data-v-7a9d9e0d']]);
const Qp = { class: 'project-banner-wrapper' },
  eh = {
    __name: 'FeaturedSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e,
        n = yn();
      return (s, i) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              y('div', Qp, [
                X(
                  Jp,
                  {
                    project: t.sectionData.items[0],
                    type: le(n).ProjectBannerType.FEATURED,
                  },
                  null,
                  8,
                  ['project', 'type'],
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  th = ue(eh, [['__scopeId', 'data-v-207af5f4']]);
const Fl = (e) => (ke('data-v-97f58992'), (e = e()), Be(), e),
  nh = { class: 'timeline' },
  sh = { class: 'timeline-item' },
  ih = { class: 'timeline-image' },
  rh = { class: 'timeline-heading' },
  oh = ['innerHTML'],
  lh = { class: 'badge bg-light text-dark text-2 mb-3 mt-1' },
  ah = Fl(() => y('i', { class: 'fa fa-calendar-check me-1' }, null, -1)),
  ch = { class: 'timeline-body' },
  uh = ['innerHTML'],
  dh = Fl(() =>
    y(
      'li',
      { class: 'timeline-item timeline-item-tail' },
      [y('div', { class: 'timeline-image timeline-image-sm' })],
      -1,
    ),
  ),
  fh = {
    __name: 'HistorySection',
    props: { sectionData: Object },
    setup(e) {
      const t = e;
      return (n, s) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              y('ul', nh, [
                (O(!0),
                R(
                  ne,
                  null,
                  Te(
                    t.sectionData.items,
                    (i, r) => (
                      O(),
                      R('li', sh, [
                        y('div', ih, [
                          X(Yt, { src: i.imageUrl, alt: i.title }, null, 8, [
                            'src',
                            'alt',
                          ]),
                        ]),
                        y(
                          'div',
                          {
                            class: he([
                              'timeline-panel',
                              { 'timeline-panel-inverted': r % 2 === 0 },
                            ]),
                          },
                          [
                            y('div', rh, [
                              y(
                                'h3',
                                { class: 'mb-1', innerHTML: i.title },
                                null,
                                8,
                                oh,
                              ),
                              y('span', lh, [ah, Se(' ' + re(i.date), 1)]),
                            ]),
                            y('div', ch, [
                              y(
                                'p',
                                {
                                  class: 'text-muted text-4',
                                  innerHTML: i.description,
                                },
                                null,
                                8,
                                uh,
                              ),
                            ]),
                          ],
                          2,
                        ),
                      ])
                    ),
                  ),
                  256,
                )),
                dh,
              ]),
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  ph = ue(fh, [['__scopeId', 'data-v-97f58992']]),
  xt = new Map(),
  Ys = {
    set(e, t, n) {
      xt.has(e) || xt.set(e, new Map());
      const s = xt.get(e);
      if (!s.has(t) && s.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(s.keys())[0]
          }.`,
        );
        return;
      }
      s.set(t, n);
    },
    get(e, t) {
      return (xt.has(e) && xt.get(e).get(t)) || null;
    },
    remove(e, t) {
      if (!xt.has(e)) return;
      const n = xt.get(e);
      n.delete(t), n.size === 0 && xt.delete(e);
    },
  },
  hh = 1e3,
  Si = 'transitionend',
  Vl = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
    e
  ),
  mh = (e) =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  gh = (e) => {
    if (!e) return 0;
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e);
    const s = Number.parseFloat(t),
      i = Number.parseFloat(n);
    return !s && !i
      ? 0
      : ((t = t.split(',')[0]),
        (n = n.split(',')[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * hh);
  },
  _h = (e) => {
    e.dispatchEvent(new Event(Si));
  },
  on = (e) =>
    !e || typeof e != 'object'
      ? !1
      : (typeof e.jquery < 'u' && (e = e[0]), typeof e.nodeType < 'u'),
  vs = (e) =>
    on(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == 'string' && e.length > 0
      ? document.querySelector(Vl(e))
      : null,
  Wl = (e) => {
    if (!on(e) || e.getClientRects().length === 0) return !1;
    const t = getComputedStyle(e).getPropertyValue('visibility') === 'visible',
      n = e.closest('details:not([open])');
    if (!n) return t;
    if (n !== e) {
      const s = e.closest('summary');
      if ((s && s.parentNode !== n) || s === null) return !1;
    }
    return t;
  },
  Gl = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains('disabled')
      ? !0
      : typeof e.disabled < 'u'
      ? e.disabled
      : e.hasAttribute('disabled') && e.getAttribute('disabled') !== 'false',
  rr = (e) => {
    e.offsetHeight;
  },
  Ul = () =>
    window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
      ? window.jQuery
      : null,
  Ks = [],
  vh = (e) => {
    document.readyState === 'loading'
      ? (Ks.length ||
          document.addEventListener('DOMContentLoaded', () => {
            for (const t of Ks) t();
          }),
        Ks.push(e))
      : e();
  },
  po = () => document.documentElement.dir === 'rtl',
  Yl = (e) => {
    vh(() => {
      const t = Ul();
      if (t) {
        const n = e.NAME,
          s = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = s), e.jQueryInterface));
      }
    });
  },
  kt = (e, t = [], n = e) => (typeof e == 'function' ? e(...t) : n),
  Kl = (e, t, n = !0) => {
    if (!n) {
      kt(e);
      return;
    }
    const s = 5,
      i = gh(t) + s;
    let r = !1;
    const o = ({ target: a }) => {
      a === t && ((r = !0), t.removeEventListener(Si, o), kt(e));
    };
    t.addEventListener(Si, o),
      setTimeout(() => {
        r || _h(t);
      }, i);
  },
  bh = /[^.]*(?=\..*)\.|.*/,
  yh = /\..*/,
  wh = /::\d+$/,
  qs = {};
let ho = 1;
const ql = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
  Sh = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll',
  ]);
function Xl(e, t) {
  return (t && `${t}::${ho++}`) || e.uidEvent || ho++;
}
function Zl(e) {
  const t = Xl(e);
  return (e.uidEvent = t), (qs[t] = qs[t] || {}), qs[t];
}
function Eh(e, t) {
  return function n(s) {
    return (
      or(s, { delegateTarget: e }),
      n.oneOff && pe.off(e, s.type, t),
      t.apply(e, [s])
    );
  };
}
function xh(e, t, n) {
  return function s(i) {
    const r = e.querySelectorAll(t);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (const a of r)
        if (a === o)
          return (
            or(i, { delegateTarget: o }),
            s.oneOff && pe.off(e, i.type, t, n),
            n.apply(o, [i])
          );
  };
}
function Jl(e, t, n = null) {
  return Object.values(e).find(
    (s) => s.callable === t && s.delegationSelector === n,
  );
}
function Ql(e, t, n) {
  const s = typeof t == 'string',
    i = s ? n : t || n;
  let r = ea(e);
  return Sh.has(r) || (r = e), [s, i, r];
}
function mo(e, t, n, s, i) {
  if (typeof t != 'string' || !e) return;
  let [r, o, a] = Ql(t, n, s);
  t in ql &&
    (o = ((v) =>
      function (b) {
        if (
          !b.relatedTarget ||
          (b.relatedTarget !== b.delegateTarget &&
            !b.delegateTarget.contains(b.relatedTarget))
        )
          return v.call(this, b);
      })(o));
  const l = Zl(e),
    u = l[a] || (l[a] = {}),
    c = Jl(u, o, r ? n : null);
  if (c) {
    c.oneOff = c.oneOff && i;
    return;
  }
  const d = Xl(o, t.replace(bh, '')),
    p = r ? xh(e, n, o) : Eh(e, o);
  (p.delegationSelector = r ? n : null),
    (p.callable = o),
    (p.oneOff = i),
    (p.uidEvent = d),
    (u[d] = p),
    e.addEventListener(a, p, r);
}
function Ei(e, t, n, s, i) {
  const r = Jl(t[n], s, i);
  r && (e.removeEventListener(n, r, !!i), delete t[n][r.uidEvent]);
}
function Th(e, t, n, s) {
  const i = t[n] || {};
  for (const [r, o] of Object.entries(i))
    r.includes(s) && Ei(e, t, n, o.callable, o.delegationSelector);
}
function ea(e) {
  return (e = e.replace(yh, '')), ql[e] || e;
}
const pe = {
  on(e, t, n, s) {
    mo(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    mo(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != 'string' || !e) return;
    const [i, r, o] = Ql(t, n, s),
      a = o !== t,
      l = Zl(e),
      u = l[o] || {},
      c = t.startsWith('.');
    if (typeof r < 'u') {
      if (!Object.keys(u).length) return;
      Ei(e, l, o, r, i ? n : null);
      return;
    }
    if (c) for (const d of Object.keys(l)) Th(e, l, d, t.slice(1));
    for (const [d, p] of Object.entries(u)) {
      const f = d.replace(wh, '');
      (!a || t.includes(f)) && Ei(e, l, o, p.callable, p.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != 'string' || !e) return null;
    const s = Ul(),
      i = ea(t),
      r = t !== i;
    let o = null,
      a = !0,
      l = !0,
      u = !1;
    r &&
      s &&
      ((o = s.Event(t, n)),
      s(e).trigger(o),
      (a = !o.isPropagationStopped()),
      (l = !o.isImmediatePropagationStopped()),
      (u = o.isDefaultPrevented()));
    const c = or(new Event(t, { bubbles: a, cancelable: !0 }), n);
    return (
      u && c.preventDefault(),
      l && e.dispatchEvent(c),
      c.defaultPrevented && o && o.preventDefault(),
      c
    );
  },
};
function or(e, t = {}) {
  for (const [n, s] of Object.entries(t))
    try {
      e[n] = s;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return s;
        },
      });
    }
  return e;
}
function go(e) {
  if (e === 'true') return !0;
  if (e === 'false') return !1;
  if (e === Number(e).toString()) return Number(e);
  if (e === '' || e === 'null') return null;
  if (typeof e != 'string') return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Xs(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Rn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Xs(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Xs(t)}`);
  },
  getDataAttributes(e) {
    if (!e) return {};
    const t = {},
      n = Object.keys(e.dataset).filter(
        (s) => s.startsWith('bs') && !s.startsWith('bsConfig'),
      );
    for (const s of n) {
      let i = s.replace(/^bs/, '');
      (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (t[i] = go(e.dataset[s]));
    }
    return t;
  },
  getDataAttribute(e, t) {
    return go(e.getAttribute(`data-bs-${Xs(t)}`));
  },
};
class lr {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!',
    );
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, n) {
    const s = on(n) ? Rn.getDataAttribute(n, 'config') : {};
    return {
      ...this.constructor.Default,
      ...(typeof s == 'object' ? s : {}),
      ...(on(n) ? Rn.getDataAttributes(n) : {}),
      ...(typeof t == 'object' ? t : {}),
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, i] of Object.entries(n)) {
      const r = t[s],
        o = on(r) ? 'element' : mh(r);
      if (!new RegExp(i).test(o))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`,
        );
    }
  }
}
const Ch = '5.3.2';
class ta extends lr {
  constructor(t, n) {
    super(),
      (t = vs(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(n)),
        Ys.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Ys.remove(this._element, this.constructor.DATA_KEY),
      pe.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
  }
  _queueCallback(t, n, s = !0) {
    Kl(t, n, s);
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  static getInstance(t) {
    return Ys.get(vs(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == 'object' ? n : null);
  }
  static get VERSION() {
    return Ch;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Zs = (e) => {
    let t = e.getAttribute('data-bs-target');
    if (!t || t === '#') {
      let n = e.getAttribute('href');
      if (!n || (!n.includes('#') && !n.startsWith('.'))) return null;
      n.includes('#') && !n.startsWith('#') && (n = `#${n.split('#')[1]}`),
        (t = n && n !== '#' ? Vl(n.trim()) : null);
    }
    return t;
  },
  Ce = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e));
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e);
    },
    children(e, t) {
      return [].concat(...e.children).filter((n) => n.matches(t));
    },
    parents(e, t) {
      const n = [];
      let s = e.parentNode.closest(t);
      for (; s; ) n.push(s), (s = s.parentNode.closest(t));
      return n;
    },
    prev(e, t) {
      let n = e.previousElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(e, t) {
      let n = e.nextElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const t = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'details',
        '[tabindex]',
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(',');
      return this.find(t, e).filter((n) => !Gl(n) && Wl(n));
    },
    getSelectorFromElement(e) {
      const t = Zs(e);
      return t && Ce.findOne(t) ? t : null;
    },
    getElementFromSelector(e) {
      const t = Zs(e);
      return t ? Ce.findOne(t) : null;
    },
    getMultipleElementsFromSelector(e) {
      const t = Zs(e);
      return t ? Ce.find(t) : [];
    },
  },
  na = 'backdrop',
  Ih = 'fade',
  _o = 'show',
  vo = `mousedown.bs.${na}`,
  Ph = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: 'body',
  },
  Ah = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)',
  };
class Mh extends lr {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return Ph;
  }
  static get DefaultType() {
    return Ah;
  }
  static get NAME() {
    return na;
  }
  show(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && rr(n),
      n.classList.add(_o),
      this._emulateAnimation(() => {
        kt(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._getElement().classList.remove(_o),
      this._emulateAnimation(() => {
        this.dispose(), kt(t);
      });
  }
  dispose() {
    this._isAppended &&
      (pe.off(this._element, vo),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement('div');
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(Ih),
        (this._element = t);
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return (t.rootElement = vs(t.rootElement)), t;
  }
  _append() {
    if (this._isAppended) return;
    const t = this._getElement();
    this._config.rootElement.append(t),
      pe.on(t, vo, () => {
        kt(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(t) {
    Kl(t, this._getElement(), this._config.isAnimated);
  }
}
const Oh = (e, t = 'hide') => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      s = e.NAME;
    pe.on(document, n, `[data-bs-dismiss="${s}"]`, function (i) {
      if (
        (['A', 'AREA'].includes(this.tagName) && i.preventDefault(), Gl(this))
      )
        return;
      const r = Ce.getElementFromSelector(this) || this.closest(`.${s}`);
      e.getOrCreateInstance(r)[t]();
    });
  },
  Lh = 'focustrap',
  Dh = 'bs.focustrap',
  bs = `.${Dh}`,
  $h = `focusin${bs}`,
  Rh = `keydown.tab${bs}`,
  Nh = 'Tab',
  kh = 'forward',
  bo = 'backward',
  Bh = { autofocus: !0, trapElement: null },
  zh = { autofocus: 'boolean', trapElement: 'element' };
class jh extends lr {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return Bh;
  }
  static get DefaultType() {
    return zh;
  }
  static get NAME() {
    return Lh;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      pe.off(document, bs),
      pe.on(document, $h, (t) => this._handleFocusin(t)),
      pe.on(document, Rh, (t) => this._handleKeydown(t)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), pe.off(document, bs));
  }
  _handleFocusin(t) {
    const { trapElement: n } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target)) return;
    const s = Ce.focusableChildren(n);
    s.length === 0
      ? n.focus()
      : this._lastTabNavDirection === bo
      ? s[s.length - 1].focus()
      : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === Nh && (this._lastTabNavDirection = t.shiftKey ? bo : kh);
  }
}
const yo = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  wo = '.sticky-top',
  es = 'padding-right',
  So = 'margin-right';
class Hh {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, es, (n) => n + t),
      this._setElementAttributes(yo, es, (n) => n + t),
      this._setElementAttributes(wo, So, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, 'overflow'),
      this._resetElementAttributes(this._element, es),
      this._resetElementAttributes(yo, es),
      this._resetElementAttributes(wo, So);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow'),
      (this._element.style.overflow = 'hidden');
  }
  _setElementAttributes(t, n, s) {
    const i = this.getWidth(),
      r = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + i)
          return;
        this._saveInitialAttribute(o, n);
        const a = window.getComputedStyle(o).getPropertyValue(n);
        o.style.setProperty(n, `${s(Number.parseFloat(a))}px`);
      };
    this._applyManipulationCallback(t, r);
  }
  _saveInitialAttribute(t, n) {
    const s = t.style.getPropertyValue(n);
    s && Rn.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (i) => {
      const r = Rn.getDataAttribute(i, n);
      if (r === null) {
        i.style.removeProperty(n);
        return;
      }
      Rn.removeDataAttribute(i, n), i.style.setProperty(n, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (on(t)) {
      n(t);
      return;
    }
    for (const s of Ce.find(t, this._element)) n(s);
  }
}
const Fh = 'modal',
  Vh = 'bs.modal',
  Ze = `.${Vh}`,
  Wh = '.data-api',
  Gh = 'Escape',
  Uh = `hide${Ze}`,
  Yh = `hidePrevented${Ze}`,
  sa = `hidden${Ze}`,
  ia = `show${Ze}`,
  Kh = `shown${Ze}`,
  qh = `resize${Ze}`,
  Xh = `click.dismiss${Ze}`,
  Zh = `mousedown.dismiss${Ze}`,
  Jh = `keydown.dismiss${Ze}`,
  Qh = `click${Ze}${Wh}`,
  Eo = 'modal-open',
  em = 'fade',
  xo = 'show',
  Js = 'modal-static',
  tm = '.modal.show',
  nm = '.modal-dialog',
  sm = '.modal-body',
  im = '[data-bs-toggle="modal"]',
  rm = { backdrop: !0, focus: !0, keyboard: !0 },
  om = { backdrop: '(boolean|string)', focus: 'boolean', keyboard: 'boolean' };
class Gt extends ta {
  constructor(t, n) {
    super(t, n),
      (this._dialog = Ce.findOne(nm, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new Hh()),
      this._addEventListeners();
  }
  static get Default() {
    return rm;
  }
  static get DefaultType() {
    return om;
  }
  static get NAME() {
    return Fh;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      pe.trigger(this._element, ia, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(Eo),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      pe.trigger(this._element, Uh).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(xo),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated(),
      ));
  }
  dispose() {
    pe.off(window, Ze),
      pe.off(this._dialog, Ze),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new Mh({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new jh({ trapElement: this._element });
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = 'block'),
      this._element.removeAttribute('aria-hidden'),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      (this._element.scrollTop = 0);
    const n = Ce.findOne(sm, this._dialog);
    n && (n.scrollTop = 0), rr(this._element), this._element.classList.add(xo);
    const s = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        pe.trigger(this._element, Kh, { relatedTarget: t });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    pe.on(this._element, Jh, (t) => {
      if (t.key === Gh) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      pe.on(window, qh, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      pe.on(this._element, Zh, (t) => {
        pe.one(this._element, Xh, (n) => {
          if (!(this._element !== t.target || this._element !== n.target)) {
            if (this._config.backdrop === 'static') {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
  }
  _hideModal() {
    (this._element.style.display = 'none'),
      this._element.setAttribute('aria-hidden', !0),
      this._element.removeAttribute('aria-modal'),
      this._element.removeAttribute('role'),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(Eo),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          pe.trigger(this._element, sa);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(em);
  }
  _triggerBackdropTransition() {
    if (pe.trigger(this._element, Yh).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      s = this._element.style.overflowY;
    s === 'hidden' ||
      this._element.classList.contains(Js) ||
      (n || (this._element.style.overflowY = 'hidden'),
      this._element.classList.add(Js),
      this._queueCallback(() => {
        this._element.classList.remove(Js),
          this._queueCallback(() => {
            this._element.style.overflowY = s;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      s = n > 0;
    if (s && !t) {
      const i = po() ? 'paddingLeft' : 'paddingRight';
      this._element.style[i] = `${n}px`;
    }
    if (!s && t) {
      const i = po() ? 'paddingRight' : 'paddingLeft';
      this._element.style[i] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ''),
      (this._element.style.paddingRight = '');
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const s = Gt.getOrCreateInstance(this, t);
      if (typeof t == 'string') {
        if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
pe.on(document, Qh, im, function (e) {
  const t = Ce.getElementFromSelector(this);
  ['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
    pe.one(t, ia, (i) => {
      i.defaultPrevented ||
        pe.one(t, sa, () => {
          Wl(this) && this.focus();
        });
    });
  const n = Ce.findOne(tm);
  n && Gt.getInstance(n).hide(), Gt.getOrCreateInstance(t).toggle(this);
});
Oh(Gt);
Yl(Gt);
const lm = (e) => (ke('data-v-28779bb2'), (e = e()), Be(), e),
  am = ['aria-labelledby'],
  cm = { class: 'modal-dialog modal-dialog-centered' },
  um = { class: 'modal-content' },
  dm = lm(() =>
    y(
      'button',
      {
        class: 'close-button',
        'data-bs-dismiss': 'modal',
        'aria-label': 'Close',
      },
      [y('i', { class: 'fa fa-close' })],
      -1,
    ),
  ),
  fm = { class: 'modal-header' },
  pm = { class: 'modal-title' },
  hm = { class: 'modal-body' },
  mm = { class: 'form-label' },
  gm = ['onUpdate:modelValue', 'type', 'placeholder'],
  _m = { type: 'submit', class: 'btn btn-primary' },
  To = 'project-modal',
  vm = {
    __name: 'ProjectModal',
    props: { modalData: Object },
    emits: ['add-task'],
    setup(e, { expose: t, emit: n }) {
      const s = e,
        i = te({ imageUrl: '', title: '', description: '' });
      let r = null;
      const o = () => {
          r && r.show();
        },
        a = () => {
          r && r.hide();
        },
        l = () => {
          const p = { ...i.value };
          d('add-task', p), u(), a();
        },
        u = () => {
          (i.value.imageUrl = ''),
            (i.value.title = ''),
            (i.value.description = '');
        },
        c = (p) => {
          const f = p.target.files[0];
          f && (i.value.imageUrl = URL.createObjectURL(f));
        };
      yt(() => {
        const p = document.getElementById('project-modal');
        r = new Gt(p, {});
      }),
        t({ openModal: o, closeModal: a });
      const d = n;
      return (p, f) => (
        O(),
        R(
          'div',
          {
            class: 'modal modal-xl fade',
            id: To,
            tabindex: '-1',
            'aria-labelledby': `${To}-label`,
            'aria-hidden': 'true',
          },
          [
            y('div', cm, [
              y('div', um, [
                dm,
                y('div', fm, [y('h5', pm, re(s.modalData.title), 1)]),
                y('div', hm, [
                  y(
                    'form',
                    { onSubmit: Ru(l, ['prevent']) },
                    [
                      (O(!0),
                      R(
                        ne,
                        null,
                        Te(
                          s.modalData.fields,
                          (v, b) => (
                            O(),
                            R('div', { key: b, class: 'mb-3' }, [
                              y('label', mm, re(v.label), 1),
                              v.type !== 'file'
                                ? zn(
                                    (O(),
                                    R(
                                      'input',
                                      {
                                        key: 0,
                                        'onUpdate:modelValue': (I) =>
                                          (i.value[v.model] = I),
                                        type: v.type,
                                        placeholder: v.placeholder,
                                        class: 'form-control',
                                      },
                                      null,
                                      8,
                                      gm,
                                    )),
                                    [[Ou, i.value[v.model]]],
                                  )
                                : (O(),
                                  R(
                                    'input',
                                    {
                                      key: 1,
                                      type: 'file',
                                      accept: 'image/*',
                                      onChange: c,
                                      class: 'form-control',
                                    },
                                    null,
                                    32,
                                  )),
                            ])
                          ),
                        ),
                        128,
                      )),
                      y('button', _m, re(s.modalData.actions.submit.label), 1),
                      y(
                        'button',
                        {
                          type: 'button',
                          class: 'btn btn-secondary',
                          onClick: a,
                        },
                        re(s.modalData.actions.cancel.label),
                        1,
                      ),
                    ],
                    32,
                  ),
                ]),
              ]),
            ]),
          ],
          8,
          am,
        )
      );
    },
  },
  bm = ue(vm, [['__scopeId', 'data-v-28779bb2']]);
const ym = (e) => (ke('data-v-d9338c9b'), (e = e()), Be(), e),
  wm = { class: 'row text-center gy-4 gy-md-5' },
  Sm = { class: 'col-12 col-sm-6 col-lg-4' },
  Em = { class: 'todo-item mb-lg-4' },
  xm = ['src'],
  Tm = { class: 'todo-content-wrapper' },
  Cm = { class: 'text-muted text-4 mb-0' },
  Im = { class: 'text-center mt-4' },
  Pm = ym(() => y('i', { class: 'fas fa-plus' }, null, -1)),
  Am = {
    __name: 'PortfolioSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e,
        n = te(null),
        s = te(t.sectionData.items),
        i = te('All');
      _e(() =>
        s.value.filter((o) => i.value === 'All' || o.category === i.value),
      );
      const r = (o) => {
        s.value.push(o);
      };
      return (o, a) => (
        O(),
        R(
          ne,
          null,
          [
            X(
              Xe,
              { 'section-data': t.sectionData },
              {
                default: Ie(() => [
                  y('div', wm, [
                    (O(!0),
                    R(
                      ne,
                      null,
                      Te(
                        t.sectionData.items,
                        (l) => (
                          O(),
                          R('div', Sm, [
                            y('div', Em, [
                              y(
                                'img',
                                {
                                  src: l.imageUrl,
                                  alt: 'Todo Image',
                                  class: 'todo-image',
                                },
                                null,
                                8,
                                xm,
                              ),
                              y('div', Tm, [
                                y('h5', null, re(l.title), 1),
                                y('p', Cm, re(l.description), 1),
                              ]),
                            ]),
                          ])
                        ),
                      ),
                      256,
                    )),
                  ]),
                  y('div', Im, [
                    y(
                      'button',
                      {
                        onClick:
                          a[0] ||
                          (a[0] = (...l) =>
                            o.$refs.modal.openModal &&
                            o.$refs.modal.openModal(...l)),
                        class: 'btn btn-primary custom-rounded',
                      },
                      [Pm, Se(' Add Task ')],
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['section-data'],
            ),
            X(
              bm,
              {
                ref_key: 'modal',
                ref: n,
                modalData: t.sectionData.modal,
                onAddTask: r,
              },
              null,
              8,
              ['modalData'],
            ),
          ],
          64,
        )
      );
    },
  },
  Mm = ue(Am, [['__scopeId', 'data-v-d9338c9b']]);
const Om = (e) => (ke('data-v-ec656470'), (e = e()), Be(), e),
  Lm = { class: 'card h-100' },
  Dm = { class: 'card-header' },
  $m = { class: 'organization-title' },
  Rm = { class: 'card-body' },
  Nm = { class: 'text-4' },
  km = { class: 'card-footer' },
  Bm = { class: 'organization-member text-3 fw-bold' },
  zm = Om(() => y('i', { class: 'fa fa-comment me-1' }, null, -1)),
  jm = {
    __name: 'Testimonial',
    props: { testimonialData: Object },
    setup(e) {
      return (t, n) => (
        O(),
        R('div', Lm, [
          y('div', Dm, [
            X(
              Yt,
              {
                src: e.testimonialData.imageUrl,
                alt: e.testimonialData.title,
                class: 'img-thumbnail',
              },
              null,
              8,
              ['src', 'alt'],
            ),
            y('h4', $m, re(e.testimonialData.title), 1),
          ]),
          y('div', Rm, [
            y('p', Nm, '“' + re(e.testimonialData.quote) + '”', 1),
          ]),
          y('div', km, [
            y('p', Bm, [zm, Se(' ' + re(e.testimonialData.description), 1)]),
          ]),
        ])
      );
    },
  },
  Hm = ue(jm, [['__scopeId', 'data-v-ec656470']]);
function Co(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  );
}
function ar(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > 'u'
        ? (e[n] = t[n])
        : Co(t[n]) &&
          Co(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ar(e[n], t[n]);
    });
}
const ra = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
};
function Kt() {
  const e = typeof document < 'u' ? document : {};
  return ar(e, ra), e;
}
const Fm = {
  document: ra,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e);
  },
};
function Ye() {
  const e = typeof window < 'u' ? window : {};
  return ar(e, Fm), e;
}
function Vm(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function xi(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function ys() {
  return Date.now();
}
function Wm(e) {
  const t = Ye();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Gm(e, t) {
  t === void 0 && (t = 'x');
  const n = Ye();
  let s, i, r;
  const o = Wm(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(',').length > 6 &&
          (i = i
            .split(', ')
            .map((a) => a.replace(',', '.'))
            .join(', ')),
        (r = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (s = r.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (i = r.m41)
        : s.length === 16
        ? (i = parseFloat(s[12]))
        : (i = parseFloat(s[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (i = r.m42)
        : s.length === 16
        ? (i = parseFloat(s[13]))
        : (i = parseFloat(s[5]))),
    i || 0
  );
}
function ts(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  );
}
function Um(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ge() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype'];
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (s != null && !Um(s)) {
      const i = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, o = i.length; r < o; r += 1) {
        const a = i[r],
          l = Object.getOwnPropertyDescriptor(s, a);
        l !== void 0 &&
          l.enumerable &&
          (ts(e[a]) && ts(s[a])
            ? s[a].__swiper__
              ? (e[a] = s[a])
              : Ge(e[a], s[a])
            : !ts(e[a]) && ts(s[a])
            ? ((e[a] = {}), s[a].__swiper__ ? (e[a] = s[a]) : Ge(e[a], s[a]))
            : (e[a] = s[a]));
      }
    }
  }
  return e;
}
function ns(e, t, n) {
  e.style.setProperty(t, n);
}
function oa(e) {
  let { swiper: t, targetPosition: n, side: s } = e;
  const i = Ye(),
    r = -t.translate;
  let o = null,
    a;
  const l = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = 'none'),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > r ? 'next' : 'prev',
    c = (p, f) => (u === 'next' && p >= f) || (u === 'prev' && p <= f),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const p = Math.max(Math.min((a - o) / l, 1), 0),
        f = 0.5 - Math.cos(p * Math.PI) / 2;
      let v = r + f * (n - r);
      if ((c(v, n) && (v = n), t.wrapperEl.scrollTo({ [s]: v }), c(v, n))) {
        (t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [s]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function dt(e, t) {
  return t === void 0 && (t = ''), [...e.children].filter((n) => n.matches(t));
}
function la(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function Ym(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling;
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s);
  }
  return n;
}
function Km(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling;
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s);
  }
  return n;
}
function It(e, t) {
  return Ye().getComputedStyle(e, null).getPropertyValue(t);
}
function ws(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function aa(e, t) {
  const n = [];
  let s = e.parentElement;
  for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement);
  return n;
}
function Ti(e, t, n) {
  const s = Ye();
  return n
    ? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top'),
        ) +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'),
        )
    : e.offsetWidth;
}
let Qs;
function qm() {
  const e = Ye(),
    t = Kt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      'scrollBehavior' in t.documentElement.style,
    touch: !!(
      'ontouchstart' in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function ca() {
  return Qs || (Qs = qm()), Qs;
}
let ei;
function Xm(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = ca(),
    s = Ye(),
    i = s.navigator.platform,
    r = t || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = s.screen.width,
    l = s.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = i === 'Win32';
  let v = i === 'MacIntel';
  const b = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ];
  return (
    !c &&
      v &&
      n.touch &&
      b.indexOf(`${a}x${l}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, '13_0_0']),
      (v = !1)),
    u && !f && ((o.os = 'android'), (o.android = !0)),
    (c || p || d) && ((o.os = 'ios'), (o.ios = !0)),
    o
  );
}
function Zm(e) {
  return e === void 0 && (e = {}), ei || (ei = Xm(e)), ei;
}
let ti;
function Jm() {
  const e = Ye();
  let t = !1;
  function n() {
    const s = e.navigator.userAgent.toLowerCase();
    return (
      s.indexOf('safari') >= 0 &&
      s.indexOf('chrome') < 0 &&
      s.indexOf('android') < 0
    );
  }
  if (n()) {
    const s = String(e.navigator.userAgent);
    if (s.includes('Version/')) {
      const [i, r] = s
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((o) => Number(o));
      t = i < 16 || (i === 16 && r < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
  };
}
function Qm() {
  return ti || (ti = Jm()), ti;
}
function eg(e) {
  let { swiper: t, on: n, emit: s } = e;
  const i = Ye();
  let r = null,
    o = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (s('beforeResize'), s('resize'));
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: p, height: f } = t;
            let v = p,
              b = f;
            d.forEach((I) => {
              let { contentBoxSize: E, contentRect: g, target: _ } = I;
              (_ && _ !== t.el) ||
                ((v = g ? g.width : (E[0] || E).inlineSize),
                (b = g ? g.height : (E[0] || E).blockSize));
            }),
              (v !== p || b !== f) && a();
          });
        })),
        r.observe(t.el));
    },
    u = () => {
      o && i.cancelAnimationFrame(o),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || s('orientationchange');
    };
  n('init', () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < 'u') {
      l();
      return;
    }
    i.addEventListener('resize', a), i.addEventListener('orientationchange', c);
  }),
    n('destroy', () => {
      u(),
        i.removeEventListener('resize', a),
        i.removeEventListener('orientationchange', c);
    });
}
function tg(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = [],
    o = Ye(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const p = o.MutationObserver || o.WebkitMutationObserver,
        f = new p((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i('observerUpdate', v[0]);
            return;
          }
          const b = function () {
            i('observerUpdate', v[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(b)
            : o.setTimeout(b, 0);
        });
      f.observe(c, {
        attributes: typeof d.attributes > 'u' ? !0 : d.attributes,
        childList: typeof d.childList > 'u' ? !0 : d.childList,
        characterData: typeof d.characterData > 'u' ? !0 : d.characterData,
      }),
        r.push(f);
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = aa(t.hostEl);
          for (let d = 0; d < c.length; d += 1) a(c[d]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      r.forEach((c) => {
        c.disconnect();
      }),
        r.splice(0, r.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', l),
    s('destroy', u);
}
var ng = {
  on(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s;
    const i = n ? 'unshift' : 'push';
    return (
      e.split(' ').forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][i](t);
      }),
      s
    );
  },
  once(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s;
    function i() {
      s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      t.apply(s, o);
    }
    return (i.__emitterProxy = t), s.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n;
    const s = t ? 'unshift' : 'push';
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach((s) => {
          typeof t > 'u'
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((i, r) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, s;
    for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
      r[o] = arguments[o];
    return (
      typeof r[0] == 'string' || Array.isArray(r[0])
        ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(' ')).forEach((l) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(s, [l, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((u) => {
              u.apply(s, n);
            });
      }),
      e
    );
  },
};
function sg() {
  const e = this;
  let t, n;
  const s = e.el;
  typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(It(s, 'padding-left') || 0, 10) -
        parseInt(It(s, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(It(s, 'padding-top') || 0, 10) -
        parseInt(It(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function ig() {
  const e = this;
  function t($) {
    return e.isHorizontal()
      ? $
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[$];
  }
  function n($, W) {
    return parseFloat($.getPropertyValue(t(W)) || 0);
  }
  const s = e.params,
    { wrapperEl: i, slidesEl: r, size: o, rtlTranslate: a, wrongRTL: l } = e,
    u = e.virtual && s.virtual.enabled,
    c = u ? e.virtual.slides.length : e.slides.length,
    d = dt(r, `.${e.params.slideClass}, swiper-slide`),
    p = u ? e.virtual.slides.length : d.length;
  let f = [];
  const v = [],
    b = [];
  let I = s.slidesOffsetBefore;
  typeof I == 'function' && (I = s.slidesOffsetBefore.call(e));
  let E = s.slidesOffsetAfter;
  typeof E == 'function' && (E = s.slidesOffsetAfter.call(e));
  const g = e.snapGrid.length,
    _ = e.slidesGrid.length;
  let S = s.spaceBetween,
    A = -I,
    j = 0,
    B = 0;
  if (typeof o > 'u') return;
  typeof S == 'string' && S.indexOf('%') >= 0
    ? (S = (parseFloat(S.replace('%', '')) / 100) * o)
    : typeof S == 'string' && (S = parseFloat(S)),
    (e.virtualSize = -S),
    d.forEach(($) => {
      a ? ($.style.marginLeft = '') : ($.style.marginRight = ''),
        ($.style.marginBottom = ''),
        ($.style.marginTop = '');
    }),
    s.centeredSlides &&
      s.cssMode &&
      (ns(i, '--swiper-centered-offset-before', ''),
      ns(i, '--swiper-centered-offset-after', ''));
  const q = s.grid && s.grid.rows > 1 && e.grid;
  q && e.grid.initSlides(p);
  let T;
  const Q =
    s.slidesPerView === 'auto' &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      ($) => typeof s.breakpoints[$].slidesPerView < 'u',
    ).length > 0;
  for (let $ = 0; $ < p; $ += 1) {
    T = 0;
    let W;
    if (
      (d[$] && (W = d[$]),
      q && e.grid.updateSlide($, W, p, t),
      !(d[$] && It(W, 'display') === 'none'))
    ) {
      if (s.slidesPerView === 'auto') {
        Q && (d[$].style[t('width')] = '');
        const V = getComputedStyle(W),
          se = W.style.transform,
          ve = W.style.webkitTransform;
        if (
          (se && (W.style.transform = 'none'),
          ve && (W.style.webkitTransform = 'none'),
          s.roundLengths)
        )
          T = e.isHorizontal() ? Ti(W, 'width', !0) : Ti(W, 'height', !0);
        else {
          const me = n(V, 'width'),
            de = n(V, 'padding-left'),
            oe = n(V, 'padding-right'),
            Ke = n(V, 'margin-left'),
            Je = n(V, 'margin-right'),
            Ve = V.getPropertyValue('box-sizing');
          if (Ve && Ve === 'border-box') T = me + Ke + Je;
          else {
            const { clientWidth: Oe, offsetWidth: wt } = W;
            T = me + de + oe + Ke + Je + (wt - Oe);
          }
        }
        se && (W.style.transform = se),
          ve && (W.style.webkitTransform = ve),
          s.roundLengths && (T = Math.floor(T));
      } else
        (T = (o - (s.slidesPerView - 1) * S) / s.slidesPerView),
          s.roundLengths && (T = Math.floor(T)),
          d[$] && (d[$].style[t('width')] = `${T}px`);
      d[$] && (d[$].swiperSlideSize = T),
        b.push(T),
        s.centeredSlides
          ? ((A = A + T / 2 + j / 2 + S),
            j === 0 && $ !== 0 && (A = A - o / 2 - S),
            $ === 0 && (A = A - o / 2 - S),
            Math.abs(A) < 1 / 1e3 && (A = 0),
            s.roundLengths && (A = Math.floor(A)),
            B % s.slidesPerGroup === 0 && f.push(A),
            v.push(A))
          : (s.roundLengths && (A = Math.floor(A)),
            (B - Math.min(e.params.slidesPerGroupSkip, B)) %
              e.params.slidesPerGroup ===
              0 && f.push(A),
            v.push(A),
            (A = A + T + S)),
        (e.virtualSize += T + S),
        (j = T),
        (B += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + E),
    a &&
      l &&
      (s.effect === 'slide' || s.effect === 'coverflow') &&
      (i.style.width = `${e.virtualSize + S}px`),
    s.setWrapperSize && (i.style[t('width')] = `${e.virtualSize + S}px`),
    q && e.grid.updateWrapperSize(T, f, t),
    !s.centeredSlides)
  ) {
    const $ = [];
    for (let W = 0; W < f.length; W += 1) {
      let V = f[W];
      s.roundLengths && (V = Math.floor(V)),
        f[W] <= e.virtualSize - o && $.push(V);
    }
    (f = $),
      Math.floor(e.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - o);
  }
  if (u && s.loop) {
    const $ = b[0] + S;
    if (s.slidesPerGroup > 1) {
      const W = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup,
        ),
        V = $ * s.slidesPerGroup;
      for (let se = 0; se < W; se += 1) f.push(f[f.length - 1] + V);
    }
    for (let W = 0; W < e.virtual.slidesBefore + e.virtual.slidesAfter; W += 1)
      s.slidesPerGroup === 1 && f.push(f[f.length - 1] + $),
        v.push(v[v.length - 1] + $),
        (e.virtualSize += $);
  }
  if ((f.length === 0 && (f = [0]), S !== 0)) {
    const $ = e.isHorizontal() && a ? 'marginLeft' : t('marginRight');
    d.filter((W, V) =>
      !s.cssMode || s.loop ? !0 : V !== d.length - 1,
    ).forEach((W) => {
      W.style[$] = `${S}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let $ = 0;
    b.forEach((V) => {
      $ += V + (S || 0);
    }),
      ($ -= S);
    const W = $ - o;
    f = f.map((V) => (V <= 0 ? -I : V > W ? W + E : V));
  }
  if (s.centerInsufficientSlides) {
    let $ = 0;
    if (
      (b.forEach((W) => {
        $ += W + (S || 0);
      }),
      ($ -= S),
      $ < o)
    ) {
      const W = (o - $) / 2;
      f.forEach((V, se) => {
        f[se] = V - W;
      }),
        v.forEach((V, se) => {
          v[se] = V + W;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: f,
      slidesGrid: v,
      slidesSizesGrid: b,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    ns(i, '--swiper-centered-offset-before', `${-f[0]}px`),
      ns(
        i,
        '--swiper-centered-offset-after',
        `${e.size / 2 - b[b.length - 1] / 2}px`,
      );
    const $ = -e.snapGrid[0],
      W = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((V) => V + $)),
      (e.slidesGrid = e.slidesGrid.map((V) => V + W));
  }
  if (
    (p !== c && e.emit('slidesLengthChange'),
    f.length !== g &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    v.length !== _ && e.emit('slidesGridLengthChange'),
    s.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !s.cssMode && (s.effect === 'slide' || s.effect === 'fade'))
  ) {
    const $ = `${s.containerModifierClass}backface-hidden`,
      W = e.el.classList.contains($);
    p <= s.maxBackfaceHiddenSlides
      ? W || e.el.classList.add($)
      : W && e.el.classList.remove($);
  }
}
function rg(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled;
  let i = 0,
    r;
  typeof e == 'number'
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (a) => (s ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const a = t.activeIndex + r;
        if (a > t.slides.length && !s) break;
        n.push(o(a));
      }
  else n.push(o(t.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < 'u') {
      const a = n[r].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function og() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function lg(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
  let o = -e;
  i && (o = e),
    s.forEach((l) => {
      l.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == 'string' && a.indexOf('%') >= 0
    ? (a = (parseFloat(a.replace('%', '')) / 100) * t.size)
    : typeof a == 'string' && (a = parseFloat(a));
  for (let l = 0; l < s.length; l += 1) {
    const u = s[l];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      p =
        (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      f = -(o - c),
      v = f + t.slidesSizesGrid[l];
    ((f >= 0 && f < t.size - 1) ||
      (v > 1 && v <= t.size) ||
      (f <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(l),
      s[l].classList.add(n.slideVisibleClass)),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -p : p);
  }
}
function ag(e) {
  const t = this;
  if (typeof e > 'u') {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: r, isEnd: o, progressLoop: a } = t;
  const l = r,
    u = o;
  if (s === 0) (i = 0), (r = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / s;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (r = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[c],
      f = t.slidesGrid[d],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      b = Math.abs(e);
    b >= p ? (a = (b - p) / v) : (a = (b + v - f) / v), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: r, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !l && t.emit('reachBeginning toEdge'),
    o && !u && t.emit('reachEnd toEdge'),
    ((l && !r) || (u && !o)) && t.emit('fromEdge'),
    t.emit('progress', i);
}
function cg() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: i } = e,
    r = e.virtual && n.virtual.enabled,
    o = (l) => dt(s, `.${n.slideClass}${l}, swiper-slide${l}`)[0];
  t.forEach((l) => {
    l.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let a;
  if (r)
    if (n.loop) {
      let l = i - e.virtual.slidesBefore;
      l < 0 && (l = e.virtual.slides.length + l),
        l >= e.virtual.slides.length && (l -= e.virtual.slides.length),
        (a = o(`[data-swiper-slide-index="${l}"]`));
    } else a = o(`[data-swiper-slide-index="${i}"]`);
  else a = t[i];
  if (a) {
    a.classList.add(n.slideActiveClass);
    let l = Km(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !l && (l = t[0]), l && l.classList.add(n.slideNextClass);
    let u = Ym(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !u === 0 && (u = t[t.length - 1]),
      u && u.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const ls = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      s = t.closest(n());
    if (s) {
      let i = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (s.shadowRoot
          ? (i = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((i = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  ni = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute('loading');
  },
  Ci = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const s =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        a = [o - t];
      a.push(...Array.from({ length: t }).map((l, u) => o + s + u)),
        e.slides.forEach((l, u) => {
          a.includes(l.column) && ni(e, u);
        });
      return;
    }
    const r = i + s - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= r + t; o += 1) {
        const a = ((o % n) + n) % n;
        (a < i || a > r) && ni(e, a);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(r + t, n - 1); o += 1)
        o !== i && (o > r || o < i) && ni(e, o);
  };
function ug(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < 'u'
      ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (i = r)
        : s >= t[r] && s < t[r + 1] && (i = r + 1)
      : s >= t[r] && (i = r);
  return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i;
}
function dg(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: o, snapIndex: a } = t;
  let l = e,
    u;
  const c = (p) => {
    let f = p - t.virtual.slidesBefore;
    return (
      f < 0 && (f = t.virtual.slides.length + f),
      f >= t.virtual.slides.length && (f -= t.virtual.slides.length),
      f
    );
  };
  if ((typeof l > 'u' && (l = ug(t)), s.indexOf(n) >= 0)) u = s.indexOf(n);
  else {
    const p = Math.min(i.slidesPerGroupSkip, l);
    u = p + Math.floor((l - p) / i.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), l === r)) {
    u !== a && ((t.snapIndex = u), t.emit('snapIndexChange')),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = c(l));
    return;
  }
  let d;
  t.virtual && i.virtual.enabled && i.loop
    ? (d = c(l))
    : t.slides[l]
    ? (d = parseInt(
        t.slides[l].getAttribute('data-swiper-slide-index') || l,
        10,
      ))
    : (d = l),
    Object.assign(t, {
      previousSnapIndex: a,
      snapIndex: u,
      previousRealIndex: o,
      realIndex: d,
      previousIndex: r,
      activeIndex: l,
    }),
    t.initialized && Ci(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== d && t.emit('realIndexChange'), t.emit('slideChange'));
}
function fg(e, t) {
  const n = this,
    s = n.params;
  let i = e.closest(`.${s.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${s.slideClass}, swiper-slide`) && (i = a);
    });
  let r = !1,
    o;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (r = !0), (o = a);
        break;
      }
  }
  if (i && r)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute('data-swiper-slide-index'),
            10,
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var pg = {
  updateSize: sg,
  updateSlides: ig,
  updateAutoHeight: rg,
  updateSlidesOffset: og,
  updateSlidesProgress: lg,
  updateProgress: ag,
  updateSlidesClasses: cg,
  updateActiveIndex: dg,
  updateClickedSlide: fg,
};
function hg(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y');
  const t = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = t;
  if (n.virtualTranslate) return s ? -i : i;
  if (n.cssMode) return i;
  let o = Gm(r, e);
  return (o += t.cssOverflowAdjustment()), s && (o = -o), o || 0;
}
function mg(e, t) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: o } = n;
  let a = 0,
    l = 0;
  const u = 0;
  n.isHorizontal() ? (a = s ? -e : e) : (l = e),
    i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    i.cssMode
      ? (r[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
          ? -a
          : -l)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== o && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t);
}
function gg() {
  return -this.snapGrid[0];
}
function _g() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function vg(e, t, n, s, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0);
  const r = this,
    { params: o, wrapperEl: a } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const l = r.minTranslate(),
    u = r.maxTranslate();
  let c;
  if (
    (s && e > l ? (c = l) : s && e < u ? (c = u) : (c = e),
    r.updateProgress(c),
    o.cssMode)
  ) {
    const d = r.isHorizontal();
    if (t === 0) a[d ? 'scrollLeft' : 'scrollTop'] = -c;
    else {
      if (!r.support.smoothScroll)
        return (
          oa({ swiper: r, targetPosition: -c, side: d ? 'left' : 'top' }), !0
        );
      a.scrollTo({ [d ? 'left' : 'top']: -c, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(c),
        n && (r.emit('beforeTransitionStart', t, i), r.emit('transitionEnd')))
      : (r.setTransition(t),
        r.setTranslate(c),
        n && (r.emit('beforeTransitionStart', t, i), r.emit('transitionStart')),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (p) {
              !r ||
                r.destroyed ||
                (p.target === this &&
                  (r.wrapperEl.removeEventListener(
                    'transitionend',
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  n && r.emit('transitionEnd')));
            }),
          r.wrapperEl.addEventListener(
            'transitionend',
            r.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var bg = {
  getTranslate: hg,
  setTranslate: mg,
  minTranslate: gg,
  maxTranslate: _g,
  translateTo: vg,
};
function yg(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t);
}
function ua(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: i } = e;
  const { activeIndex: r, previousIndex: o } = t;
  let a = s;
  if (
    (a || (r > o ? (a = 'next') : r < o ? (a = 'prev') : (a = 'reset')),
    t.emit(`transition${i}`),
    n && r !== o)
  ) {
    if (a === 'reset') {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === 'next'
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function wg(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    ua({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
}
function Sg(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  (n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      ua({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
}
var Eg = { setTransition: yg, transitionStart: wg, transitionEnd: Sg };
function xg(e, t, n, s, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10));
  const r = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: f,
    enabled: v,
  } = r;
  if ((r.animating && a.preventInteractionOnTransition) || (!v && !s && !i))
    return !1;
  const b = Math.min(r.params.slidesPerGroupSkip, o);
  let I = b + Math.floor((o - b) / r.params.slidesPerGroup);
  I >= l.length && (I = l.length - 1);
  const E = -l[I];
  if (a.normalizeSlideIndex)
    for (let _ = 0; _ < u.length; _ += 1) {
      const S = -Math.floor(E * 100),
        A = Math.floor(u[_] * 100),
        j = Math.floor(u[_ + 1] * 100);
      typeof u[_ + 1] < 'u'
        ? S >= A && S < j - (j - A) / 2
          ? (o = _)
          : S >= A && S < j && (o = _ + 1)
        : S >= A && (o = _);
    }
  if (
    r.initialized &&
    o !== d &&
    ((!r.allowSlideNext &&
      (p
        ? E > r.translate && E > r.minTranslate()
        : E < r.translate && E < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        E > r.translate &&
        E > r.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && r.emit('beforeSlideChangeStart'), r.updateProgress(E);
  let g;
  if (
    (o > d ? (g = 'next') : o < d ? (g = 'prev') : (g = 'reset'),
    (p && -E === r.translate) || (!p && E === r.translate))
  )
    return (
      r.updateActiveIndex(o),
      a.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      a.effect !== 'slide' && r.setTranslate(E),
      g !== 'reset' && (r.transitionStart(n, g), r.transitionEnd(n, g)),
      !1
    );
  if (a.cssMode) {
    const _ = r.isHorizontal(),
      S = p ? E : -E;
    if (t === 0) {
      const A = r.virtual && r.params.virtual.enabled;
      A &&
        ((r.wrapperEl.style.scrollSnapType = 'none'),
        (r._immediateVirtual = !0)),
        A && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              f[_ ? 'scrollLeft' : 'scrollTop'] = S;
            }))
          : (f[_ ? 'scrollLeft' : 'scrollTop'] = S),
        A &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ''), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          oa({ swiper: r, targetPosition: S, side: _ ? 'left' : 'top' }), !0
        );
      f.scrollTo({ [_ ? 'left' : 'top']: S, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    r.setTransition(t),
    r.setTranslate(E),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit('beforeTransitionStart', t, s),
    r.transitionStart(n, g),
    t === 0
      ? r.transitionEnd(n, g)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (S) {
            !r ||
              r.destroyed ||
              (S.target === this &&
                (r.wrapperEl.removeEventListener(
                  'transitionend',
                  r.onSlideToWrapperTransitionEnd,
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, g)));
          }),
        r.wrapperEl.addEventListener(
          'transitionend',
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function Tg(e, t, n, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10));
  const i = this;
  let r = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (r = r + i.virtual.slidesBefore)
        : (r = i.getSlideIndexByData(r))),
    i.slideTo(r, t, n, s)
  );
}
function Cg(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const s = this,
    { enabled: i, params: r, animating: o } = s;
  if (!i) return s;
  let a = r.slidesPerGroup;
  r.slidesPerView === 'auto' &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(s.slidesPerViewDynamic('current', !0), 1));
  const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    u = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !u && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: 'next' }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + l, e, t, n);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + l, e, t, n);
}
function Ig(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: a,
      enabled: l,
      animating: u,
    } = s;
  if (!l) return s;
  const c = s.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const d = a ? s.translate : -s.translate;
  function p(E) {
    return E < 0 ? -Math.floor(Math.abs(E)) : Math.floor(E);
  }
  const f = p(d),
    v = r.map((E) => p(E));
  let b = r[v.indexOf(f) - 1];
  if (typeof b > 'u' && i.cssMode) {
    let E;
    r.forEach((g, _) => {
      f >= g && (E = _);
    }),
      typeof E < 'u' && (b = r[E > 0 ? E - 1 : E]);
  }
  let I = 0;
  if (
    (typeof b < 'u' &&
      ((I = o.indexOf(b)),
      I < 0 && (I = s.activeIndex - 1),
      i.slidesPerView === 'auto' &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((I = I - s.slidesPerViewDynamic('previous', !0) + 1),
        (I = Math.max(I, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const E =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(E, e, t, n);
  } else if (i.loop && s.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(I, e, t, n);
      }),
      !0
    );
  return s.slideTo(I, e, t, n);
}
function Pg(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const s = this;
  return s.slideTo(s.activeIndex, e, t, n);
}
function Ag(e, t, n, s) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = 0.5);
  const i = this;
  let r = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, r),
    a = o + Math.floor((r - o) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    l - u > (c - u) * s && (r += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    l - u <= (c - u) * s && (r -= i.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, e, t, n)
  );
}
function Mg() {
  const e = this,
    { params: t, slidesEl: n } = e,
    s = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    r;
  const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (r = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - s / 2 ||
          i > e.slides.length - e.loopedSlides + s / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              dt(n, `${o}[data-swiper-slide-index="${r}"]`)[0],
            )),
            xi(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - s
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            dt(n, `${o}[data-swiper-slide-index="${r}"]`)[0],
          )),
          xi(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var Og = {
  slideTo: xg,
  slideToLoop: Tg,
  slideNext: Cg,
  slidePrev: Ig,
  slideReset: Pg,
  slideToClosest: Ag,
  slideToClickedSlide: Mg,
};
function Lg(e) {
  const t = this,
    { params: n, slidesEl: s } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  dt(s, `.${n.slideClass}, swiper-slide`).forEach((r, o) => {
    r.setAttribute('data-swiper-slide-index', o);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : 'next',
    });
}
function Dg(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const l = this;
  if (!l.params.loop) return;
  l.emit('beforeLoopFix');
  const {
    slides: u,
    allowSlidePrev: c,
    allowSlideNext: d,
    slidesEl: p,
    params: f,
  } = l;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && f.virtual.enabled)
  ) {
    n &&
      (!f.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : f.centeredSlides && l.snapIndex < f.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = d),
      l.emit('loopFix');
    return;
  }
  const v =
    f.slidesPerView === 'auto'
      ? l.slidesPerViewDynamic()
      : Math.ceil(parseFloat(f.slidesPerView, 10));
  let b = f.loopedSlides || v;
  b % f.slidesPerGroup !== 0 &&
    (b += f.slidesPerGroup - (b % f.slidesPerGroup)),
    (l.loopedSlides = b);
  const I = [],
    E = [];
  let g = l.activeIndex;
  typeof r > 'u'
    ? (r = l.getSlideIndex(
        l.slides.filter((B) => B.classList.contains(f.slideActiveClass))[0],
      ))
    : (g = r);
  const _ = s === 'next' || !s,
    S = s === 'prev' || !s;
  let A = 0,
    j = 0;
  if (r < b) {
    A = Math.max(b - r, f.slidesPerGroup);
    for (let B = 0; B < b - r; B += 1) {
      const q = B - Math.floor(B / u.length) * u.length;
      I.push(u.length - q - 1);
    }
  } else if (r > l.slides.length - b * 2) {
    j = Math.max(r - (l.slides.length - b * 2), f.slidesPerGroup);
    for (let B = 0; B < j; B += 1) {
      const q = B - Math.floor(B / u.length) * u.length;
      E.push(q);
    }
  }
  if (
    (S &&
      I.forEach((B) => {
        (l.slides[B].swiperLoopMoveDOM = !0),
          p.prepend(l.slides[B]),
          (l.slides[B].swiperLoopMoveDOM = !1);
      }),
    _ &&
      E.forEach((B) => {
        (l.slides[B].swiperLoopMoveDOM = !0),
          p.append(l.slides[B]),
          (l.slides[B].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    f.slidesPerView === 'auto' && l.updateSlides(),
    f.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (I.length > 0 && S)
      if (typeof t > 'u') {
        const B = l.slidesGrid[g],
          T = l.slidesGrid[g + A] - B;
        a
          ? l.setTranslate(l.translate - T)
          : (l.slideTo(g + A, 0, !1, !0),
            i &&
              ((l.touches[l.isHorizontal() ? 'startX' : 'startY'] += T),
              (l.touchEventsData.currentTranslate = l.translate)));
      } else
        i &&
          (l.slideToLoop(t, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate));
    else if (E.length > 0 && _)
      if (typeof t > 'u') {
        const B = l.slidesGrid[g],
          T = l.slidesGrid[g - j] - B;
        a
          ? l.setTranslate(l.translate - T)
          : (l.slideTo(g - j, 0, !1, !0),
            i &&
              ((l.touches[l.isHorizontal() ? 'startX' : 'startY'] += T),
              (l.touchEventsData.currentTranslate = l.translate)));
      } else l.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((l.allowSlidePrev = c),
    (l.allowSlideNext = d),
    l.controller && l.controller.control && !o)
  ) {
    const B = {
      slideRealIndex: t,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((q) => {
          !q.destroyed &&
            q.params.loop &&
            q.loopFix({
              ...B,
              slideTo: q.params.slidesPerView === f.slidesPerView ? n : !1,
            });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...B,
          slideTo:
            l.controller.control.params.slidesPerView === f.slidesPerView
              ? n
              : !1,
        });
  }
  l.emit('loopFix');
}
function $g() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const s = [];
  e.slides.forEach((i) => {
    const r =
      typeof i.swiperSlideIndex > 'u'
        ? i.getAttribute('data-swiper-slide-index') * 1
        : i.swiperSlideIndex;
    s[r] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute('data-swiper-slide-index');
    }),
    s.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Rg = { loopCreate: Lg, loopFix: Dg, loopDestroy: $g };
function Ng(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function kg() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Bg = { setGrabCursor: Ng, unsetGrabCursor: kg };
function zg(e, t) {
  t === void 0 && (t = this);
  function n(s) {
    if (!s || s === Kt() || s === Ye()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const i = s.closest(e);
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host);
  }
  return n(t);
}
function jg(e) {
  const t = this,
    n = Kt(),
    s = Ye(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: r, touches: o, enabled: a } = t;
  if (
    !a ||
    (!r.simulateTouch && e.pointerType === 'mouse') ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let l = e;
  l.originalEvent && (l = l.originalEvent);
  let u = l.target;
  if (
    (r.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(u)) ||
    ('which' in l && l.which === 3) ||
    ('button' in l && l.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!r.noSwipingClass && r.noSwipingClass !== '',
    d = e.composedPath ? e.composedPath() : e.path;
  c && l.target && l.target.shadowRoot && d && (u = d[0]);
  const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    f = !!(l.target && l.target.shadowRoot);
  if (r.noSwiping && (f ? zg(p, u) : u.closest(p))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !u.closest(r.swipeHandler)) return;
  (o.currentX = l.pageX), (o.currentY = l.pageY);
  const v = o.currentX,
    b = o.currentY,
    I = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    E = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (I && (v <= E || v >= s.innerWidth - E))
    if (I === 'prevent') e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = v),
    (o.startY = b),
    (i.touchStartTime = ys()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1);
  let g = !0;
  u.matches(i.focusableElements) &&
    ((g = !1), u.nodeName === 'SELECT' && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur();
  const _ = g && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || _) &&
    !u.isContentEditable &&
    l.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', l);
}
function Hg(e) {
  const t = Kt(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: o, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === 'mouse')) return;
  let l = e;
  if ((l.originalEvent && (l = l.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && n.emit('touchMoveOpposite', l);
    return;
  }
  const u = s.evCache.findIndex((B) => B.pointerId === l.pointerId);
  u >= 0 && (s.evCache[u] = l);
  const c = s.evCache.length > 1 ? s.evCache[0] : l,
    d = c.pageX,
    p = c.pageY;
  if (l.preventedByNestedSwiper) {
    (r.startX = d), (r.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, {
          startX: d,
          startY: p,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: p,
        }),
        (s.touchStartTime = ys()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (p < r.startY && n.translate <= n.maxTranslate()) ||
        (p > r.startY && n.translate >= n.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (d < r.startX && n.translate <= n.maxTranslate()) ||
      (d > r.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    l.target === t.activeElement &&
    l.target.matches(s.focusableElements)
  ) {
    (s.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (s.allowTouchCallbacks && n.emit('touchMove', l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (r.currentX = d), (r.currentY = p);
  const f = r.currentX - r.startX,
    v = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof s.isScrolling > 'u') {
    let B;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : f * f + v * v >= 25 &&
        ((B = (Math.atan2(Math.abs(v), Math.abs(f)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? B > i.touchAngle
          : 90 - B > i.touchAngle));
  }
  if (
    (s.isScrolling && n.emit('touchMoveOpposite', l),
    typeof s.startMoving > 'u' &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        s.evCache.length > 1))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let b = n.isHorizontal() ? f : v,
    I = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  i.oneWayMovement &&
    ((b = Math.abs(b) * (o ? 1 : -1)), (I = Math.abs(I) * (o ? 1 : -1))),
    (r.diff = b),
    (b *= i.touchRatio),
    o && ((b = -b), (I = -I));
  const E = n.touchesDirection;
  (n.swipeDirection = b > 0 ? 'prev' : 'next'),
    (n.touchesDirection = I > 0 ? 'prev' : 'next');
  const g = n.params.loop && !i.cssMode,
    _ =
      (n.swipeDirection === 'next' && n.allowSlideNext) ||
      (n.swipeDirection === 'prev' && n.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (g && _ && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const B = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(B);
    }
    (s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', l);
  }
  let S;
  s.isMoved &&
    E !== n.touchesDirection &&
    g &&
    _ &&
    Math.abs(b) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (S = !0)),
    n.emit('sliderMove', l),
    (s.isMoved = !0),
    (s.currentTranslate = b + s.startTranslate);
  let A = !0,
    j = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (j = 0),
    b > 0
      ? (g &&
          _ &&
          !S &&
          s.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: 'prev',
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((A = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + b) ** j)))
      : b < 0 &&
        (g &&
          _ &&
          !S &&
          s.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((A = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - b) ** j))),
    A && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(b) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate));
}
function Fg(e) {
  const t = this,
    n = t.touchEventsData,
    s = n.evCache.findIndex((_) => _.pointerId === e.pointerId);
  if (
    (s >= 0 && n.evCache.splice(s, 1),
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      e.type,
    ) &&
      !(
        ['pointercancel', 'contextmenu'].includes(e.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: r,
    rtlTranslate: o,
    slidesGrid: a,
    enabled: l,
  } = t;
  if (!l || (!i.simulateTouch && e.pointerType === 'mouse')) return;
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit('touchEnd', u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = ys(),
    d = c - n.touchStartTime;
  if (t.allowClick) {
    const _ = u.path || (u.composedPath && u.composedPath());
    t.updateClickedSlide((_ && _[0]) || u.target, _),
      t.emit('tap click', u),
      d < 300 &&
        c - n.lastClickTime < 300 &&
        t.emit('doubleTap doubleClick', u);
  }
  if (
    ((n.lastClickTime = ys()),
    xi(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      r.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let p;
  if (
    (i.followFinger
      ? (p = o ? t.translate : -t.translate)
      : (p = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  let f = 0,
    v = t.slidesSizesGrid[0];
  for (
    let _ = 0;
    _ < a.length;
    _ += _ < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const S = _ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof a[_ + S] < 'u'
      ? p >= a[_] && p < a[_ + S] && ((f = _), (v = a[_ + S] - a[_]))
      : p >= a[_] && ((f = _), (v = a[a.length - 1] - a[a.length - 2]));
  }
  let b = null,
    I = null;
  i.rewind &&
    (t.isBeginning
      ? (I =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (b = 0));
  const E = (p - a[f]) / v,
    g = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (d > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === 'next' &&
      (E >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? b : f + g)
        : t.slideTo(f)),
      t.swipeDirection === 'prev' &&
        (E > 1 - i.longSwipesRatio
          ? t.slideTo(f + g)
          : I !== null && E < 0 && Math.abs(E) > i.longSwipesRatio
          ? t.slideTo(I)
          : t.slideTo(f));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(f + g)
        : t.slideTo(f)
      : (t.swipeDirection === 'next' && t.slideTo(b !== null ? b : f + g),
        t.swipeDirection === 'prev' && t.slideTo(I !== null ? I : f));
  }
}
function Io() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = o && t.loop;
  (t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = s),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function Vg(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Wg() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
  if (!s) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / r),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1);
}
function Gg(e) {
  const t = this;
  ls(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update();
}
let Po = !1;
function Ug() {}
const da = (e, t) => {
  const n = Kt(),
    { params: s, el: i, wrapperEl: r, device: o } = e,
    a = !!s.nested,
    l = t === 'on' ? 'addEventListener' : 'removeEventListener',
    u = t;
  i[l]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[l]('pointermove', e.onTouchMove, { passive: !1, capture: a }),
    n[l]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
    n[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[l]('click', e.onClick, !0),
    s.cssMode && r[l]('scroll', e.onScroll),
    s.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          Io,
          !0,
        )
      : e[u]('observerUpdate', Io, !0),
    i[l]('load', e.onLoad, { capture: !0 });
};
function Yg() {
  const e = this,
    t = Kt(),
    { params: n } = e;
  (e.onTouchStart = jg.bind(e)),
    (e.onTouchMove = Hg.bind(e)),
    (e.onTouchEnd = Fg.bind(e)),
    n.cssMode && (e.onScroll = Wg.bind(e)),
    (e.onClick = Vg.bind(e)),
    (e.onLoad = Gg.bind(e)),
    Po || (t.addEventListener('touchstart', Ug), (Po = !0)),
    da(e, 'on');
}
function Kg() {
  da(this, 'off');
}
var qg = { attachEvents: Yg, detachEvents: Kg };
const Ao = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Xg() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: i } = e,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const l = (o in r ? r[o] : void 0) || e.originalParams,
    u = Ao(e, s),
    c = Ao(e, l),
    d = s.enabled;
  u && !c
    ? (i.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${s.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === 'column') ||
        (!l.grid.fill && s.grid.fill === 'column')) &&
        i.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ['navigation', 'pagination', 'scrollbar'].forEach((E) => {
      if (typeof l[E] > 'u') return;
      const g = s[E] && s[E].enabled,
        _ = l[E] && l[E].enabled;
      g && !_ && e[E].disable(), !g && _ && e[E].enable();
    });
  const p = l.direction && l.direction !== s.direction,
    f = s.loop && (l.slidesPerView !== s.slidesPerView || p),
    v = s.loop;
  p && n && e.changeDirection(), Ge(e.params, l);
  const b = e.params.enabled,
    I = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    d && !b ? e.disable() : !d && b && e.enable(),
    (e.currentBreakpoint = o),
    e.emit('_beforeBreakpoint', l),
    n &&
      (f
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !v && I
        ? (e.loopCreate(t), e.updateSlides())
        : v && !I && e.loopDestroy()),
    e.emit('breakpoint', l);
}
function Zg(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return;
  let s = !1;
  const i = Ye(),
    r = t === 'window' ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((a) => {
      if (typeof a == 'string' && a.indexOf('@') === 0) {
        const l = parseFloat(a.substr(1));
        return { value: r * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: u } = o[a];
    t === 'window'
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (s = l)
      : u <= n.clientWidth && (s = l);
  }
  return s || 'max';
}
var Jg = { setBreakpoint: Xg, getBreakpoint: Zg };
function Qg(e, t) {
  const n = [];
  return (
    e.forEach((s) => {
      typeof s == 'object'
        ? Object.keys(s).forEach((i) => {
            s[i] && n.push(t + i);
          })
        : typeof s == 'string' && n.push(t + s);
    }),
    n
  );
}
function e_() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: i, device: r } = e,
    o = Qg(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        {
          'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column',
        },
        { android: r.android },
        { ios: r.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function t_() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var n_ = { addClasses: e_, removeClasses: t_ };
function s_() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n;
  if (s) {
    const i = e.slides.length - 1,
      r = e.slidesGrid[i] + e.slidesSizesGrid[i] + s * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
}
var i_ = { checkOverflow: s_ },
  Ii = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function r_(e, t) {
  return function (s) {
    s === void 0 && (s = {});
    const i = Object.keys(s)[0],
      r = s[i];
    if (typeof r != 'object' || r === null) {
      Ge(t, s);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === 'navigation' &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ['pagination', 'scrollbar'].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && 'enabled' in r))
    ) {
      Ge(t, s);
      return;
    }
    typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Ge(t, s);
  };
}
const si = {
    eventsEmitter: ng,
    update: pg,
    translate: bg,
    transition: Eg,
    slide: Og,
    loop: Rg,
    grabCursor: Bg,
    events: qg,
    breakpoints: Jg,
    checkOverflow: i_,
    classes: n_,
  },
  ii = {};
let cr = class mt {
  constructor() {
    let t, n;
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
      i[r] = arguments[r];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === 'Object'
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Ge({}, n)),
      t && !n.el && (n.el = t);
    const o = Kt();
    if (
      n.el &&
      typeof n.el == 'string' &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const p = Ge({}, n, { el: d });
          c.push(new mt(p));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = ca()),
      (a.device = Zm({ userAgent: n.userAgent })),
      (a.browser = Qm()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: r_(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = Ge({}, Ii, l);
    return (
      (a.params = Ge({}, u, ii, n)),
      (a.originalParams = Ge({}, a.params)),
      (a.passedParams = Ge({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === 'horizontal';
        },
        isVertical() {
          return a.params.direction === 'vertical';
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit('_swiper'),
      a.params.init && a.init(),
      a
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: s } = this,
      i = dt(n, `.${s.slideClass}, swiper-slide`),
      r = ws(i[0]);
    return ws(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute('data-swiper-slide-index') * 1 === t,
      )[0],
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: s } = t;
    t.slides = dt(n, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit('enable'));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit('disable'));
  }
  setProgress(t, n) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = s.minTranslate(),
      o = (s.maxTranslate() - i) * t + i;
    s.translateTo(o, typeof n > 'u' ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(' ')
      .filter(
        (s) =>
          s.indexOf('swiper') === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit('_containerClasses', n.join(' '));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter(
            (s) =>
              s.indexOf('swiper-slide') === 0 ||
              s.indexOf(n.params.slideClass) === 0,
          )
          .join(' ');
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((s) => {
      const i = t.getSlideClasses(s);
      n.push({ slideEl: s, classNames: i }), t.emit('_slideClass', s, i);
    }),
      t.emit('_slideClasses', n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = 'current'), n === void 0 && (n = !1);
    const s = this,
      {
        params: i,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = s;
    let c = 1;
    if (typeof i.slidesPerView == 'number') return i.slidesPerView;
    if (i.centeredSlides) {
      let d = r[u] ? r[u].swiperSlideSize : 0,
        p;
      for (let f = u + 1; f < r.length; f += 1)
        r[f] &&
          !p &&
          ((d += r[f].swiperSlideSize), (c += 1), d > l && (p = !0));
      for (let f = u - 1; f >= 0; f -= 1)
        r[f] &&
          !p &&
          ((d += r[f].swiperSlideSize), (c += 1), d > l && (p = !0));
    } else if (t === 'current')
      for (let d = u + 1; d < r.length; d += 1)
        (n ? o[d] + a[d] - o[u] < l : o[d] - o[u] < l) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < l && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: s } = t;
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && ls(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      i(), s.autoHeight && t.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === 'auto' || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const o = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(o.length - 1, 0, !1, !0);
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || i();
    }
    s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update');
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const s = this,
      i = s.params.direction;
    return (
      t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
      t === i ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((r) => {
          t === 'vertical' ? (r.style.width = '') : (r.style.height = '');
        }),
        s.emit('changeDirection'),
        n && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'ltr')),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let s = t || n.params.el;
    if ((typeof s == 'string' && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName === 'SWIPER-CONTAINER' &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let o = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : dt(s, i())[0])();
    return (
      !o &&
        n.params.createElements &&
        ((o = la('div', n.params.wrapperClass)),
        s.append(o),
        dt(s, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: o,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || It(s, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (s.dir.toLowerCase() === 'rtl' || It(s, 'direction') === 'rtl'),
        wrongRTL: It(o, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit('beforeInit'),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((r) => {
        r.complete
          ? ls(n, r)
          : r.addEventListener('load', (o) => {
              ls(n, o.target);
            });
      }),
      Ci(n),
      (n.initialized = !0),
      Ci(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const s = this,
      { params: i, el: r, wrapperEl: o, slides: a } = s;
    return (
      typeof s.params > 'u' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          r.removeAttribute('style'),
          o.removeAttribute('style'),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                l.removeAttribute('style'),
                l.removeAttribute('data-swiper-slide-index');
            })),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((l) => {
          s.off(l);
        }),
        t !== !1 && ((s.el.swiper = null), Vm(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ge(ii, t);
  }
  static get extendedDefaults() {
    return ii;
  }
  static get defaults() {
    return Ii;
  }
  static installModule(t) {
    mt.prototype.__modules__ || (mt.prototype.__modules__ = []);
    const n = mt.prototype.__modules__;
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => mt.installModule(n)), mt)
      : (mt.installModule(t), mt);
  }
};
Object.keys(si).forEach((e) => {
  Object.keys(si[e]).forEach((t) => {
    cr.prototype[t] = si[e][t];
  });
});
cr.use([eg, tg]);
const fa = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopedSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
];
function Ut(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  );
}
function Ft(e, t) {
  const n = ['__proto__', 'constructor', 'prototype'];
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > 'u'
        ? (e[s] = t[s])
        : Ut(t[s]) && Ut(e[s]) && Object.keys(t[s]).length > 0
        ? t[s].__swiper__
          ? (e[s] = t[s])
          : Ft(e[s], t[s])
        : (e[s] = t[s]);
    });
}
function pa(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > 'u' &&
      typeof e.navigation.prevEl > 'u'
  );
}
function ha(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u';
}
function ma(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u';
}
function ga(e) {
  e === void 0 && (e = '');
  const t = e
      .split(' ')
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = [];
  return (
    t.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s);
    }),
    n.join(' ')
  );
}
function o_(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  );
}
function l_(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l,
  } = e;
  const u = i.filter(
      (T) => T !== 'children' && T !== 'direction' && T !== 'wrapperClass',
    ),
    {
      params: c,
      pagination: d,
      navigation: p,
      scrollbar: f,
      virtual: v,
      thumbs: b,
    } = t;
  let I, E, g, _, S, A, j, B;
  i.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (I = !0),
    i.includes('controller') &&
      s.controller &&
      s.controller.control &&
      c.controller &&
      !c.controller.control &&
      (E = !0),
    i.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (g = !0),
    i.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || a) &&
      (c.scrollbar || c.scrollbar === !1) &&
      f &&
      !f.el &&
      (_ = !0),
    i.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || r) &&
      (c.navigation || c.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (S = !0);
  const q = (T) => {
    t[T] &&
      (t[T].destroy(),
      T === 'navigation'
        ? (t.isElement && (t[T].prevEl.remove(), t[T].nextEl.remove()),
          (c[T].prevEl = void 0),
          (c[T].nextEl = void 0),
          (t[T].prevEl = void 0),
          (t[T].nextEl = void 0))
        : (t.isElement && t[T].el.remove(),
          (c[T].el = void 0),
          (t[T].el = void 0)));
  };
  i.includes('loop') &&
    t.isElement &&
    (c.loop && !s.loop ? (A = !0) : !c.loop && s.loop ? (j = !0) : (B = !0)),
    u.forEach((T) => {
      if (Ut(c[T]) && Ut(s[T]))
        Ft(c[T], s[T]),
          (T === 'navigation' || T === 'pagination' || T === 'scrollbar') &&
            'enabled' in s[T] &&
            !s[T].enabled &&
            q(T);
      else {
        const Q = s[T];
        (Q === !0 || Q === !1) &&
        (T === 'navigation' || T === 'pagination' || T === 'scrollbar')
          ? Q === !1 && q(T)
          : (c[T] = s[T]);
      }
    }),
    u.includes('controller') &&
      !E &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes('children') &&
      n &&
      v &&
      c.virtual.enabled &&
      ((v.slides = n), v.update(!0)),
    i.includes('children') && n && c.loop && (B = !0),
    I && b.init() && b.update(!0),
    E && (t.controller.control = c.controller.control),
    g &&
      (t.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-pagination'),
        l.part.add('pagination'),
        t.el.appendChild(l)),
      l && (c.pagination.el = l),
      d.init(),
      d.render(),
      d.update()),
    _ &&
      (t.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')),
        a.classList.add('swiper-scrollbar'),
        a.part.add('scrollbar'),
        t.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      f.init(),
      f.updateSize(),
      f.setTranslate()),
    S &&
      (t.isElement &&
        ((!r || typeof r == 'string') &&
          ((r = document.createElement('div')),
          r.classList.add('swiper-button-next'),
          (r.innerHTML = t.hostEl.constructor.nextButtonSvg),
          r.part.add('button-next'),
          t.el.appendChild(r)),
        (!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-prev'),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add('button-prev'),
          t.el.appendChild(o))),
      r && (c.navigation.nextEl = r),
      o && (c.navigation.prevEl = o),
      p.init(),
      p.update()),
    i.includes('allowSlideNext') && (t.allowSlideNext = s.allowSlideNext),
    i.includes('allowSlidePrev') && (t.allowSlidePrev = s.allowSlidePrev),
    i.includes('direction') && t.changeDirection(s.direction, !1),
    (A || B) && t.loopDestroy(),
    (j || B) && t.loopCreate(),
    t.update();
}
function Mo(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    s = {},
    i = {};
  Ft(n, Ii), (n._emitClasses = !0), (n.init = !1);
  const r = {},
    o = fa.map((l) => l.replace(/_/, '')),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > 'u' ||
        (o.indexOf(l) >= 0
          ? Ut(e[l])
            ? ((n[l] = {}), (i[l] = {}), Ft(n[l], e[l]), Ft(i[l], e[l]))
            : ((n[l] = e[l]), (i[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == 'function'
          ? t
            ? (s[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (r[l] = e[l]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: i, rest: r, events: s }
  );
}
function a_(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: o,
    swiper: a,
  } = e;
  pa(t) &&
    s &&
    i &&
    ((a.params.navigation.nextEl = s),
    (a.originalParams.navigation.nextEl = s),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    ha(t) &&
      r &&
      ((a.params.pagination.el = r), (a.originalParams.pagination.el = r)),
    ma(t) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n);
}
function c_(e, t, n, s, i) {
  const r = [];
  if (!t) return r;
  const o = (l) => {
    r.indexOf(l) < 0 && r.push(l);
  };
  if (n && s) {
    const l = s.map(i),
      u = n.map(i);
    l.join('') !== u.join('') && o('children'),
      s.length !== n.length && o('children');
  }
  return (
    fa
      .filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in e && l in t)
          if (Ut(e[l]) && Ut(t[l])) {
            const u = Object.keys(e[l]),
              c = Object.keys(t[l]);
            u.length !== c.length
              ? o(l)
              : (u.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }),
                c.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }));
          } else e[l] !== t[l] && o(l);
      }),
    r
  );
}
const u_ = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function ri(e, t, n) {
  e === void 0 && (e = {});
  const s = [],
    i = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    },
    r = (o, a) => {
      Array.isArray(o) &&
        o.forEach((l) => {
          const u = typeof l.type == 'symbol';
          a === 'default' && (a = 'container-end'),
            u && l.children
              ? r(l.children, a)
              : l.type &&
                (l.type.name === 'SwiperSlide' ||
                  l.type.name === 'AsyncComponentWrapper')
              ? s.push(l)
              : i[a] && i[a].push(l);
        });
    };
  return (
    Object.keys(e).forEach((o) => {
      if (typeof e[o] != 'function') return;
      const a = e[o]();
      r(a, o);
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: i }
  );
}
function d_(e, t, n) {
  if (!n) return null;
  const s = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: o } = n,
    a = e.value.params.loop ? -t.length : 0,
    l = e.value.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = a; c < l; c += 1) c >= r && c <= o && u.push(t[s(c)]);
  return u.map(
    (c) => (
      c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = i),
      Ue(c.type, { ...c.props }, c.children)
    ),
  );
}
const _a = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      '_freeModeNoMomentumRelease',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'autoplayTimeLeft',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'breakpointsBase',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'init',
      'keyPress',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'navigationPrev',
      'navigationNext',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'virtualUpdate',
      'zoomChange',
    ],
    setup(e, t) {
      let { slots: n, emit: s } = t;
      const { tag: i, wrapperTag: r } = e,
        o = te('swiper'),
        a = te(null),
        l = te(!1),
        u = te(!1),
        c = te(null),
        d = te(null),
        p = te(null),
        f = { value: [] },
        v = { value: [] },
        b = te(null),
        I = te(null),
        E = te(null),
        g = te(null),
        { params: _, passedParams: S } = Mo(e, !1);
      ri(n, f, v), (p.value = S), (v.value = f.value);
      const A = () => {
        ri(n, f, v), (l.value = !0);
      };
      (_.onAny = function (q) {
        for (
          var T = arguments.length, Q = new Array(T > 1 ? T - 1 : 0), $ = 1;
          $ < T;
          $++
        )
          Q[$ - 1] = arguments[$];
        s(q, ...Q);
      }),
        Object.assign(_.on, {
          _beforeBreakpoint: A,
          _containerClasses(q, T) {
            o.value = T;
          },
        });
      const j = { ..._ };
      if (
        (delete j.wrapperClass,
        (d.value = new cr(j)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = f.value;
        const q = {
          cache: !1,
          slides: f.value,
          renderExternal: (T) => {
            a.value = T;
          },
          renderExternalUpdate: !1,
        };
        Ft(d.value.params.virtual, q), Ft(d.value.originalParams.virtual, q);
      }
      Gi(() => {
        !u.value && d.value && (d.value.emitSlidesClasses(), (u.value = !0));
        const { passedParams: q } = Mo(e, !1),
          T = c_(q, p.value, f.value, v.value, (Q) => Q.props && Q.props.key);
        (p.value = q),
          (T.length || l.value) &&
            d.value &&
            !d.value.destroyed &&
            l_({
              swiper: d.value,
              slides: f.value,
              passedParams: q,
              changedParams: T,
              nextEl: b.value,
              prevEl: I.value,
              scrollbarEl: g.value,
              paginationEl: E.value,
            }),
          (l.value = !1);
      }),
        rn('swiper', d),
        jt(a, () => {
          Hi(() => {
            u_(d.value);
          });
        }),
        yt(() => {
          c.value &&
            (a_(
              {
                el: c.value,
                nextEl: b.value,
                prevEl: I.value,
                paginationEl: E.value,
                scrollbarEl: g.value,
                swiper: d.value,
              },
              _,
            ),
            s('swiper', d.value));
        }),
        Ui(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1);
        });
      function B(q) {
        return _.virtual
          ? d_(d, q, a.value)
          : (q.forEach((T, Q) => {
              T.props || (T.props = {}),
                (T.props.swiperRef = d),
                (T.props.swiperSlideIndex = Q);
            }),
            q);
      }
      return () => {
        const { slides: q, slots: T } = ri(n, f, v);
        return Ue(i, { ref: c, class: ga(o.value) }, [
          T['container-start'],
          Ue(r, { class: o_(_.wrapperClass) }, [
            T['wrapper-start'],
            B(q),
            T['wrapper-end'],
          ]),
          pa(e) && [
            Ue('div', { ref: I, class: 'swiper-button-prev' }),
            Ue('div', { ref: b, class: 'swiper-button-next' }),
          ],
          ma(e) && Ue('div', { ref: g, class: 'swiper-scrollbar' }),
          ha(e) && Ue('div', { ref: E, class: 'swiper-pagination' }),
          T['container-end'],
        ]);
      };
    },
  },
  va = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        s = !1;
      const { swiperRef: i } = e,
        r = te(null),
        o = te('swiper-slide'),
        a = te(!1);
      function l(d, p, f) {
        p === r.value && (o.value = f);
      }
      yt(() => {
        !i || !i.value || (i.value.on('_slideClass', l), (s = !0));
      }),
        ml(() => {
          s || !i || !i.value || (i.value.on('_slideClass', l), (s = !0));
        }),
        Gi(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof e.swiperSlideIndex < 'u' &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            i.value.destroyed &&
              o.value !== 'swiper-slide' &&
              (o.value = 'swiper-slide'));
        }),
        Ui(() => {
          !i || !i.value || i.value.off('_slideClass', l);
        });
      const u = _e(() => ({
        isActive: o.value.indexOf('swiper-slide-active') >= 0,
        isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
        isPrev: o.value.indexOf('swiper-slide-prev') >= 0,
        isNext: o.value.indexOf('swiper-slide-next') >= 0,
      }));
      rn('swiperSlide', u);
      const c = () => {
        a.value = !0;
      };
      return () =>
        Ue(
          e.tag,
          {
            class: ga(`${o.value}`),
            ref: r,
            'data-swiper-slide-index':
              typeof e.virtualIndex > 'u' && i && i.value && i.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? Ue(
                'div',
                {
                  class: 'swiper-zoom-container',
                  'data-swiper-zoom':
                    typeof e.zoom == 'number' ? e.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  e.lazy &&
                    !a.value &&
                    Ue('div', { class: 'swiper-lazy-preloader' }),
                ],
              )
            : [
                n.default && n.default(u.value),
                e.lazy &&
                  !a.value &&
                  Ue('div', { class: 'swiper-lazy-preloader' }),
              ],
        );
    },
  };
function f_(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let r = dt(e.el, `.${s[i]}`)[0];
          r || ((r = la('div', s[i])), (r.className = s[i]), e.el.append(r)),
            (n[i] = r),
            (t[i] = r);
        }
      }),
    n
  );
}
function In(e) {
  return (
    e === void 0 && (e = ''),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  );
}
function ba(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = 'swiper-pagination';
  n({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let o,
    a = 0;
  const l = (g) => (Array.isArray(g) ? g : [g]).filter((_) => !!_);
  function u() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function c(g, _) {
    const { bulletActiveClass: S } = t.params.pagination;
    g &&
      ((g = g[`${_ === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      g &&
        (g.classList.add(`${S}-${_}`),
        (g = g[`${_ === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        g && g.classList.add(`${S}-${_}-${_}`)));
  }
  function d(g) {
    const _ = g.target.closest(In(t.params.pagination.bulletClass));
    if (!_) return;
    g.preventDefault();
    const S = ws(_) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === S) return;
      const A = t.realIndex,
        j = t.getSlideIndexByData(S),
        B = t.getSlideIndexByData(t.realIndex),
        q = (T) => {
          const Q = t.activeIndex;
          t.loopFix({ direction: T, activeSlideIndex: j, slideTo: !1 });
          const $ = t.activeIndex;
          Q === $ && t.slideToLoop(A, 0, !1, !0);
        };
      if (j > t.slides.length - t.loopedSlides) q(j > B ? 'next' : 'prev');
      else if (t.params.centeredSlides) {
        const T =
          t.params.slidesPerView === 'auto'
            ? t.slidesPerViewDynamic()
            : Math.ceil(parseFloat(t.params.slidesPerView, 10));
        j < Math.floor(T / 2) && q('prev');
      }
      t.slideToLoop(S);
    } else t.slideTo(S);
  }
  function p() {
    const g = t.rtl,
      _ = t.params.pagination;
    if (u()) return;
    let S = t.pagination.el;
    S = l(S);
    let A, j;
    const B =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      q = t.params.loop
        ? Math.ceil(B / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((j = t.previousRealIndex || 0),
          (A =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < 'u'
        ? ((A = t.snapIndex), (j = t.previousSnapIndex))
        : ((j = t.previousIndex || 0), (A = t.activeIndex || 0)),
      _.type === 'bullets' &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const T = t.pagination.bullets;
      let Q, $, W;
      if (
        (_.dynamicBullets &&
          ((o = Ti(T[0], t.isHorizontal() ? 'width' : 'height', !0)),
          S.forEach((V) => {
            V.style[t.isHorizontal() ? 'width' : 'height'] = `${
              o * (_.dynamicMainBullets + 4)
            }px`;
          }),
          _.dynamicMainBullets > 1 &&
            j !== void 0 &&
            ((a += A - (j || 0)),
            a > _.dynamicMainBullets - 1
              ? (a = _.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (Q = Math.max(A - a, 0)),
          ($ = Q + (Math.min(T.length, _.dynamicMainBullets) - 1)),
          (W = ($ + Q) / 2)),
        T.forEach((V) => {
          const se = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (ve) => `${_.bulletActiveClass}${ve}`,
            ),
          ]
            .map((ve) =>
              typeof ve == 'string' && ve.includes(' ') ? ve.split(' ') : ve,
            )
            .flat();
          V.classList.remove(...se);
        }),
        S.length > 1)
      )
        T.forEach((V) => {
          const se = ws(V);
          se === A
            ? V.classList.add(..._.bulletActiveClass.split(' '))
            : t.isElement && V.setAttribute('part', 'bullet'),
            _.dynamicBullets &&
              (se >= Q &&
                se <= $ &&
                V.classList.add(...`${_.bulletActiveClass}-main`.split(' ')),
              se === Q && c(V, 'prev'),
              se === $ && c(V, 'next'));
        });
      else {
        const V = T[A];
        if (
          (V && V.classList.add(..._.bulletActiveClass.split(' ')),
          t.isElement &&
            T.forEach((se, ve) => {
              se.setAttribute('part', ve === A ? 'bullet-active' : 'bullet');
            }),
          _.dynamicBullets)
        ) {
          const se = T[Q],
            ve = T[$];
          for (let me = Q; me <= $; me += 1)
            T[me] &&
              T[me].classList.add(...`${_.bulletActiveClass}-main`.split(' '));
          c(se, 'prev'), c(ve, 'next');
        }
      }
      if (_.dynamicBullets) {
        const V = Math.min(T.length, _.dynamicMainBullets + 4),
          se = (o * V - o) / 2 - W * o,
          ve = g ? 'right' : 'left';
        T.forEach((me) => {
          me.style[t.isHorizontal() ? ve : 'top'] = `${se}px`;
        });
      }
    }
    S.forEach((T, Q) => {
      if (
        (_.type === 'fraction' &&
          (T.querySelectorAll(In(_.currentClass)).forEach(($) => {
            $.textContent = _.formatFractionCurrent(A + 1);
          }),
          T.querySelectorAll(In(_.totalClass)).forEach(($) => {
            $.textContent = _.formatFractionTotal(q);
          })),
        _.type === 'progressbar')
      ) {
        let $;
        _.progressbarOpposite
          ? ($ = t.isHorizontal() ? 'vertical' : 'horizontal')
          : ($ = t.isHorizontal() ? 'horizontal' : 'vertical');
        const W = (A + 1) / q;
        let V = 1,
          se = 1;
        $ === 'horizontal' ? (V = W) : (se = W),
          T.querySelectorAll(In(_.progressbarFillClass)).forEach((ve) => {
            (ve.style.transform = `translate3d(0,0,0) scaleX(${V}) scaleY(${se})`),
              (ve.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      _.type === 'custom' && _.renderCustom
        ? ((T.innerHTML = _.renderCustom(t, A + 1, q)),
          Q === 0 && i('paginationRender', T))
        : (Q === 0 && i('paginationRender', T), i('paginationUpdate', T)),
        t.params.watchOverflow &&
          t.enabled &&
          T.classList[t.isLocked ? 'add' : 'remove'](_.lockClass);
    });
  }
  function f() {
    const g = t.params.pagination;
    if (u()) return;
    const _ =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.slides.length;
    let S = t.pagination.el;
    S = l(S);
    let A = '';
    if (g.type === 'bullets') {
      let j = t.params.loop
        ? Math.ceil(_ / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && j > _ && (j = _);
      for (let B = 0; B < j; B += 1)
        g.renderBullet
          ? (A += g.renderBullet.call(t, B, g.bulletClass))
          : (A += `<${g.bulletElement} ${
              t.isElement ? 'part="bullet"' : ''
            } class="${g.bulletClass}"></${g.bulletElement}>`);
    }
    g.type === 'fraction' &&
      (g.renderFraction
        ? (A = g.renderFraction.call(t, g.currentClass, g.totalClass))
        : (A = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`)),
      g.type === 'progressbar' &&
        (g.renderProgressbar
          ? (A = g.renderProgressbar.call(t, g.progressbarFillClass))
          : (A = `<span class="${g.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      S.forEach((j) => {
        g.type !== 'custom' && (j.innerHTML = A || ''),
          g.type === 'bullets' &&
            t.pagination.bullets.push(...j.querySelectorAll(In(g.bulletClass)));
      }),
      g.type !== 'custom' && i('paginationRender', S[0]);
  }
  function v() {
    t.params.pagination = f_(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: 'swiper-pagination' },
    );
    const g = t.params.pagination;
    if (!g.el) return;
    let _;
    typeof g.el == 'string' && t.isElement && (_ = t.el.querySelector(g.el)),
      !_ &&
        typeof g.el == 'string' &&
        (_ = [...document.querySelectorAll(g.el)]),
      _ || (_ = g.el),
      !(!_ || _.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof g.el == 'string' &&
          Array.isArray(_) &&
          _.length > 1 &&
          ((_ = [...t.el.querySelectorAll(g.el)]),
          _.length > 1 &&
            (_ = _.filter((S) => aa(S, '.swiper')[0] === t.el)[0])),
        Array.isArray(_) && _.length === 1 && (_ = _[0]),
        Object.assign(t.pagination, { el: _ }),
        (_ = l(_)),
        _.forEach((S) => {
          g.type === 'bullets' &&
            g.clickable &&
            S.classList.add(...(g.clickableClass || '').split(' ')),
            S.classList.add(g.modifierClass + g.type),
            S.classList.add(
              t.isHorizontal() ? g.horizontalClass : g.verticalClass,
            ),
            g.type === 'bullets' &&
              g.dynamicBullets &&
              (S.classList.add(`${g.modifierClass}${g.type}-dynamic`),
              (a = 0),
              g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)),
            g.type === 'progressbar' &&
              g.progressbarOpposite &&
              S.classList.add(g.progressbarOppositeClass),
            g.clickable && S.addEventListener('click', d),
            t.enabled || S.classList.add(g.lockClass);
        }));
  }
  function b() {
    const g = t.params.pagination;
    if (u()) return;
    let _ = t.pagination.el;
    _ &&
      ((_ = l(_)),
      _.forEach((S) => {
        S.classList.remove(g.hiddenClass),
          S.classList.remove(g.modifierClass + g.type),
          S.classList.remove(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass,
          ),
          g.clickable &&
            (S.classList.remove(...(g.clickableClass || '').split(' ')),
            S.removeEventListener('click', d));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((S) =>
          S.classList.remove(...g.bulletActiveClass.split(' ')),
        );
  }
  s('changeDirection', () => {
    if (!t.pagination || !t.pagination.el) return;
    const g = t.params.pagination;
    let { el: _ } = t.pagination;
    (_ = l(_)),
      _.forEach((S) => {
        S.classList.remove(g.horizontalClass, g.verticalClass),
          S.classList.add(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass,
          );
      });
  }),
    s('init', () => {
      t.params.pagination.enabled === !1 ? E() : (v(), f(), p());
    }),
    s('activeIndexChange', () => {
      typeof t.snapIndex > 'u' && p();
    }),
    s('snapIndexChange', () => {
      p();
    }),
    s('snapGridLengthChange', () => {
      f(), p();
    }),
    s('destroy', () => {
      b();
    }),
    s('enable disable', () => {
      let { el: g } = t.pagination;
      g &&
        ((g = l(g)),
        g.forEach((_) =>
          _.classList[t.enabled ? 'remove' : 'add'](
            t.params.pagination.lockClass,
          ),
        ));
    }),
    s('lock unlock', () => {
      p();
    }),
    s('click', (g, _) => {
      const S = _.target,
        A = l(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        A &&
        A.length > 0 &&
        !S.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && S === t.navigation.nextEl) ||
            (t.navigation.prevEl && S === t.navigation.prevEl))
        )
          return;
        const j = A[0].classList.contains(t.params.pagination.hiddenClass);
        i(j === !0 ? 'paginationShow' : 'paginationHide'),
          A.forEach((B) => B.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const I = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: g } = t.pagination;
      g &&
        ((g = l(g)),
        g.forEach((_) =>
          _.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        v(),
        f(),
        p();
    },
    E = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: g } = t.pagination;
      g &&
        ((g = l(g)),
        g.forEach((_) =>
          _.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        b();
    };
  Object.assign(t.pagination, {
    enable: I,
    disable: E,
    render: f,
    update: p,
    init: v,
    destroy: b,
  });
}
const p_ = {
    __name: 'ReviewsSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e;
      return (n, s) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              X(
                le(_a),
                {
                  class: 'testimonials-swiper px-1',
                  slidesPerView: 3,
                  spaceBetween: 20,
                  pagination: { clickable: !0 },
                  modules: [le(ba)],
                  'grab-cursor': !0,
                  'prevent-clicks-propagation': !0,
                  breakpoints: {
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                  },
                },
                {
                  default: Ie(() => [
                    (O(!0),
                    R(
                      ne,
                      null,
                      Te(
                        t.sectionData.items,
                        (i) => (
                          O(),
                          Me(
                            le(va),
                            null,
                            {
                              default: Ie(() => [
                                X(Hm, { 'testimonial-data': i }, null, 8, [
                                  'testimonial-data',
                                ]),
                              ]),
                              _: 2,
                            },
                            1024,
                          )
                        ),
                      ),
                      256,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ['modules'],
              ),
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  h_ = ue(p_, [['__scopeId', 'data-v-3a403f3c']]);
const m_ = (e) => (ke('data-v-55ae7d72'), (e = e()), Be(), e),
  g_ = { class: 'icon-stack fa-stack' },
  __ = m_(() =>
    y('i', { class: 'fas fa-circle fa-stack-2x text-primary' }, null, -1),
  ),
  v_ = {
    __name: 'CircleIcon',
    props: { faIcon: String },
    setup(e) {
      const t = e;
      return (n, s) => (
        O(),
        R('span', g_, [
          __,
          y('i', { class: he(['fa-stack-1x fa-inverse', t.faIcon]) }, null, 2),
        ])
      );
    },
  },
  b_ = ue(v_, [['__scopeId', 'data-v-55ae7d72']]);
const y_ = { class: 'row text-center gy-4 gy-md-5' },
  w_ = { class: 'col-12 col-sm-6 col-lg-4' },
  S_ = { class: 'service-item mb-lg-4' },
  E_ = { class: 'service-icon-wrapper' },
  x_ = { class: 'service-content-wrapper' },
  T_ = { class: 'text-muted text-4 mb-0' },
  C_ = {
    __name: 'ServicesSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e;
      return (n, s) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              y('div', y_, [
                (O(!0),
                R(
                  ne,
                  null,
                  Te(
                    t.sectionData.items,
                    (i) => (
                      O(),
                      R('div', w_, [
                        y('div', S_, [
                          y('div', E_, [
                            X(b_, { 'fa-icon': i.faIcon }, null, 8, [
                              'fa-icon',
                            ]),
                          ]),
                          y('div', x_, [
                            y('h5', null, re(i.title), 1),
                            y('p', T_, re(i.description), 1),
                          ]),
                        ]),
                      ])
                    ),
                  ),
                  256,
                )),
              ]),
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  I_ = ue(C_, [['__scopeId', 'data-v-a3855ea8']]);
const ur = (e) => (ke('data-v-0934e4a0'), (e = e()), Be(), e),
  P_ = { class: 'px-0 px-lg-3 px-xl-4 mx-auto' },
  A_ = { class: 'balloon' },
  M_ = ur(() => y('div', { class: 'triangle' }, null, -1)),
  O_ = { class: 'text-muted text-2 mt-2 px-3' },
  L_ = ur(() =>
    y('i', { class: 'fa fa-quote-left me-2 text-primary' }, null, -1),
  ),
  D_ = ur(() =>
    y('i', { class: 'fa fa-quote-right ms-2 text-primary' }, null, -1),
  ),
  $_ = { class: 'thumbnail-wrapper' },
  R_ = { class: 'about-wrapper' },
  N_ = { class: 'my-3 mt-2 mt-xxl-3 mb-1' },
  k_ = { class: 'text-muted text-4 fw-bold mb-2 pb-1' },
  B_ = {
    __name: 'TeamMember',
    props: { teamMemberData: Object },
    setup(e) {
      const t = yn();
      return (n, s) => (
        O(),
        R('div', P_, [
          y('div', A_, [
            M_,
            y('p', O_, [L_, Se(re(e.teamMemberData.quote), 1), D_]),
          ]),
          y('div', $_, [
            X(
              Yt,
              {
                src: e.teamMemberData.imageUrl,
                alt: e.teamMemberData.title,
                class: 'img-thumb',
              },
              null,
              8,
              ['src', 'alt'],
            ),
          ]),
          y('div', R_, [
            y('h4', N_, re(e.teamMemberData.title), 1),
            y('p', k_, re(e.teamMemberData.description), 1),
            X(
              _s,
              {
                items: e.teamMemberData.links,
                color: le(t).SocialLinksColor.LIGHT_DARK,
                size: le(t).SocialLinksSize.MD,
                class: 'mb-3',
              },
              null,
              8,
              ['items', 'color', 'size'],
            ),
          ]),
        ])
      );
    },
  },
  z_ = ue(B_, [['__scopeId', 'data-v-0934e4a0']]);
const j_ = {
    __name: 'TeamSection',
    props: { sectionData: Object },
    setup(e) {
      const t = e;
      return (n, s) => (
        O(),
        Me(
          Xe,
          { 'section-data': t.sectionData },
          {
            default: Ie(() => [
              X(
                le(_a),
                {
                  class: 'testimonials-swiper px-1',
                  slidesPerView: 3,
                  spaceBetween: 20,
                  pagination: { clickable: !0 },
                  modules: [le(ba)],
                  'grab-cursor': !0,
                  'prevent-clicks-propagation': !0,
                  breakpoints: {
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  },
                },
                {
                  default: Ie(() => [
                    (O(!0),
                    R(
                      ne,
                      null,
                      Te(
                        t.sectionData.items,
                        (i) => (
                          O(),
                          Me(
                            le(va),
                            null,
                            {
                              default: Ie(() => [
                                X(
                                  z_,
                                  {
                                    'team-member-data': i,
                                    class: 'swiper-team-item',
                                  },
                                  null,
                                  8,
                                  ['team-member-data'],
                                ),
                              ]),
                              _: 2,
                            },
                            1024,
                          )
                        ),
                      ),
                      256,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ['modules'],
              ),
            ]),
            _: 1,
          },
          8,
          ['section-data'],
        )
      );
    },
  },
  H_ = ue(j_, [['__scopeId', 'data-v-c7c6c690']]),
  F_ = 'collapse',
  V_ = 'bs.collapse',
  Gn = `.${V_}`,
  W_ = '.data-api',
  G_ = `show${Gn}`,
  U_ = `shown${Gn}`,
  Y_ = `hide${Gn}`,
  K_ = `hidden${Gn}`,
  q_ = `click${Gn}${W_}`,
  oi = 'show',
  Qt = 'collapse',
  ss = 'collapsing',
  X_ = 'collapsed',
  Z_ = `:scope .${Qt} .${Qt}`,
  J_ = 'collapse-horizontal',
  Q_ = 'width',
  ev = 'height',
  tv = '.collapse.show, .collapse.collapsing',
  Pi = '[data-bs-toggle="collapse"]',
  nv = { parent: null, toggle: !0 },
  sv = { parent: '(null|element)', toggle: 'boolean' };
class hn extends ta {
  constructor(t, n) {
    super(t, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const s = Ce.find(Pi);
    for (const i of s) {
      const r = Ce.getSelectorFromElement(i),
        o = Ce.find(r).filter((a) => a === this._element);
      r !== null && o.length && this._triggerArray.push(i);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return nv;
  }
  static get DefaultType() {
    return sv;
  }
  static get NAME() {
    return F_;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [];
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(tv)
          .filter((a) => a !== this._element)
          .map((a) => hn.getOrCreateInstance(a, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        pe.trigger(this._element, G_).defaultPrevented)
    )
      return;
    for (const a of t) a.hide();
    const s = this._getDimension();
    this._element.classList.remove(Qt),
      this._element.classList.add(ss),
      (this._element.style[s] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const i = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(ss),
          this._element.classList.add(Qt, oi),
          (this._element.style[s] = ''),
          pe.trigger(this._element, U_);
      },
      o = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(i, this._element, !0),
      (this._element.style[s] = `${this._element[o]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      pe.trigger(this._element, Y_).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      rr(this._element),
      this._element.classList.add(ss),
      this._element.classList.remove(Qt, oi);
    for (const i of this._triggerArray) {
      const r = Ce.getElementFromSelector(i);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(ss),
        this._element.classList.add(Qt),
        pe.trigger(this._element, K_);
    };
    (this._element.style[n] = ''), this._queueCallback(s, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(oi);
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = vs(t.parent)), t;
  }
  _getDimension() {
    return this._element.classList.contains(J_) ? Q_ : ev;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = this._getFirstLevelChildren(Pi);
    for (const n of t) {
      const s = Ce.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = Ce.find(Z_, this._config.parent);
    return Ce.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(X_, !n), s.setAttribute('aria-expanded', n);
  }
  static jQueryInterface(t) {
    const n = {};
    return (
      typeof t == 'string' && /show|hide/.test(t) && (n.toggle = !1),
      this.each(function () {
        const s = hn.getOrCreateInstance(this, n);
        if (typeof t == 'string') {
          if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`);
          s[t]();
        }
      })
    );
  }
}
pe.on(document, q_, Pi, function (e) {
  (e.target.tagName === 'A' ||
    (e.delegateTarget && e.delegateTarget.tagName === 'A')) &&
    e.preventDefault();
  for (const t of Ce.getMultipleElementsFromSelector(this))
    hn.getOrCreateInstance(t, { toggle: !1 }).toggle();
});
Yl(hn);
const iv = (e) => (ke('data-v-b7de8b8b'), (e = e()), Be(), e),
  rv = { class: 'container-xxl' },
  ov = { class: 'navbar-brand', href: '#' },
  lv = ['src'],
  av = ['innerHTML'],
  cv = iv(() =>
    y(
      'button',
      { id: 'toggler', class: 'navbar-toggler', type: 'button' },
      [y('i', { class: 'fas fa-bars ms-1 me-1' })],
      -1,
    ),
  ),
  uv = {
    class: 'collapse navbar-collapse mb-1 mb-lg-0',
    id: 'navbar-collapse-container',
  },
  dv = { class: 'navbar-nav text-uppercase ms-auto py-1' },
  fv = ['onClick'],
  pv = { class: 'nav-link-text text-4' },
  hv = {
    __name: 'NavBar',
    props: { navbarData: Object, links: Array, shouldSpyScroll: Boolean },
    emits: ['linkClicked'],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        i = wn(),
        r = nr(),
        o = te(null),
        a = te(null);
      let l = null;
      yt(() => {
        n.shouldSpyScroll && (window.addEventListener('scroll', d), d());
        const f = document.getElementById('navbar'),
          v = f.getElementsByClassName('collapse')[0],
          b = f.getElementsByClassName('navbar-toggler')[0];
        (l = new hn(v, { toggle: !1 })),
          b.addEventListener('click', () => {
            l.toggle();
          }),
          v.addEventListener('show.bs.collapse', () => {
            b.classList.add('navbar-toggler-open');
          }),
          v.addEventListener('hide.bs.collapse', () => {
            b.classList.remove('navbar-toggler-open');
          });
      }),
        Yi(() => {
          window.removeEventListener('scroll', d);
        });
      const u = _e(() =>
          n.shouldSpyScroll
            ? `${a.value ? '' : 'navbar-shrink'}`
            : 'navbar-static navbar-shrink',
        ),
        c = (f) => (n.shouldSpyScroll ? o.value === f : f === r.name),
        d = () => {
          if (!n.shouldSpyScroll) return;
          let f = null;
          a.value = window.scrollY === 0;
          for (let v in n.links) {
            let b = n.links[v],
              I = document.querySelector('#' + b.id);
            if (I) {
              let E = Math.abs(I.getBoundingClientRect().y);
              (f === null || E < f) && ((f = E), (o.value = b.id));
            }
          }
        },
        p = (f) => {
          const v = new Event('click', { bubbles: !0, cancelable: !0 }),
            b = document.getElementById('toggler');
          i.isBootstrapBreakpoint('lg') || b.dispatchEvent(v),
            s('linkClicked', f);
        };
      return (f, v) => (
        O(),
        R(
          'nav',
          {
            id: 'navbar',
            class: he([
              'navbar navbar-expand-lg navbar-dark fixed-top',
              u.value,
            ]),
          },
          [
            y('div', rv, [
              y('a', ov, [
                y(
                  'img',
                  {
                    src: n.navbarData.logo,
                    alt: 'agency-logo',
                    class: 'img img-fluid navbar-brand-img',
                  },
                  null,
                  8,
                  lv,
                ),
                y(
                  'span',
                  { class: 'navbar-brand-text', innerHTML: n.navbarData.brand },
                  null,
                  8,
                  av,
                ),
              ]),
              cv,
              y('div', uv, [
                y('ul', dv, [
                  (O(!0),
                  R(
                    ne,
                    null,
                    Te(
                      n.links,
                      (b) => (
                        O(),
                        R('li', null, [
                          y(
                            'button',
                            {
                              class: he([
                                'nav-link',
                                { active: c(b.id || b.name) },
                              ]),
                              onClick: (I) => p(b.id || b.name),
                            },
                            [
                              y('span', pv, [
                                y(
                                  'i',
                                  {
                                    class: he([
                                      b.navbar ? b.navbar.faIcon : b.faIcon,
                                      'nav-link-icon d-lg-none',
                                    ]),
                                  },
                                  null,
                                  2,
                                ),
                                Se(
                                  ' ' + re(b.navbar ? b.navbar.label : b.label),
                                  1,
                                ),
                              ]),
                            ],
                            10,
                            fv,
                          ),
                        ])
                      ),
                    ),
                    256,
                  )),
                ]),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  },
  ya = ue(hv, [['__scopeId', 'data-v-b7de8b8b']]);
const mv = {
    __name: 'HomePage',
    setup(e) {
      const t = Wn(),
        n = wn(),
        s = {
          DefaultSection: Xe,
          AboutSection: pp,
          ContactSection: Ep,
          FaqSection: $p,
          FeaturedSection: th,
          HistorySection: ph,
          PortfolioSection: Mm,
          ReviewsSection: h_,
          ServicesSection: I_,
          TeamSection: H_,
        },
        i = (o) =>
          s[o]
            ? s[o]
            : (console.warn(
                "Couldn't find component with name: " +
                  o +
                  '. All section components must be registered on HomePage.vue.',
              ),
              Xe),
        r = (o) => {
          n.smoothScrollToElement(o, !1);
        };
      return (o, a) => (
        O(),
        R(
          ne,
          null,
          [
            X(
              ya,
              {
                'navbar-data': le(t).getNavbarData(),
                links: le(t).getSectionsData(),
                'should-spy-scroll': !0,
                onLinkClicked: r,
              },
              null,
              8,
              ['navbar-data', 'links'],
            ),
            X(uf, { 'header-data': le(t).getHeaderData() }, null, 8, [
              'header-data',
            ]),
            (O(!0),
            R(
              ne,
              null,
              Te(
                le(t).getSectionsData(),
                (l) => (
                  O(),
                  Me(_c(i(l.component)), { 'section-data': l }, null, 8, [
                    'section-data',
                  ])
                ),
              ),
              256,
            )),
            X(jl, { 'footer-data': le(t).getFooterData() }, null, 8, [
              'footer-data',
            ]),
          ],
          64,
        )
      );
    },
  },
  gv = ue(mv, [['__scopeId', 'data-v-000aa3a3']]);
const _v = { class: 'agency-secondary-page' },
  vv = { class: 'page-content-wrapper' },
  bv = { class: 'item' },
  yv = { key: 0, class: 'item-heading' },
  wv = { class: 'mb-2 item-title' },
  Sv = { class: 'item-description' },
  Ev = ['innerHTML'],
  xv = {
    __name: 'SecondaryPage',
    props: { contentData: Object },
    setup(e) {
      const t = e,
        n = Wn(),
        s = nr(),
        i = Wd(),
        r = _e(() => i.options.routes.filter((l) => l.hasOwnProperty('label'))),
        o = _e(() => [
          {
            label: i.options.routes.filter((u) => u.name === s.name)[0].label,
            path: s.path,
          },
        ]),
        a = (l) => {
          i.push(l);
        };
      return (l, u) => (
        O(),
        R('div', _v, [
          X(
            ya,
            {
              'navbar-data': le(n).getNavbarData(),
              links: r.value,
              'should-spy-scroll': !1,
              onLinkClicked: a,
            },
            null,
            8,
            ['navbar-data', 'links'],
          ),
          y('div', vv, [
            X(
              Xe,
              { 'section-data': t.contentData, breadcrumbs: o.value },
              {
                default: Ie(() => [
                  (O(!0),
                  R(
                    ne,
                    null,
                    Te(
                      t.contentData.items,
                      (c) => (
                        O(),
                        R('div', null, [
                          y('div', bv, [
                            c.title
                              ? (O(),
                                R('div', yv, [
                                  y('h4', wv, [
                                    y(
                                      'i',
                                      { class: he([c.faIcon, 'me-2']) },
                                      null,
                                      2,
                                    ),
                                    Se(' ' + re(c.title), 1),
                                  ]),
                                ]))
                              : De('', !0),
                            y('div', Sv, [
                              (O(!0),
                              R(
                                ne,
                                null,
                                Te(
                                  c.description,
                                  (d) => (
                                    O(),
                                    R(
                                      'p',
                                      { class: 'text-3', innerHTML: d },
                                      null,
                                      8,
                                      Ev,
                                    )
                                  ),
                                ),
                                256,
                              )),
                            ]),
                          ]),
                        ])
                      ),
                    ),
                    256,
                  )),
                ]),
                _: 1,
              },
              8,
              ['section-data', 'breadcrumbs'],
            ),
          ]),
          X(jl, { 'footer-data': le(n).getFooterData() }, null, 8, [
            'footer-data',
          ]),
        ])
      );
    },
  },
  Oo = ue(xv, [['__scopeId', 'data-v-99333733']]),
  Lo = Wn();
function Tv() {
  const e = [
    {
      path: '/',
      name: 'home',
      component: gv,
      label: 'Home',
      faIcon: 'fa-solid fa-home',
    },
    {
      path: '/policy',
      name: 'policy',
      component: Oo,
      label: 'Privacy Policy',
      faIcon: 'fa-solid fa-hammer',
      props: { contentData: Lo.getPolicyData() },
    },
    {
      path: '/license',
      name: 'license',
      component: Oo,
      label: 'License',
      faIcon: 'fa-solid fa-copy',
      props: { contentData: Lo.getLegalData() },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ];
  return Fd({ history: id('/portfolio-JM'), routes: e });
}
const Cv = { class: 'progress-bar-wrapper' },
  Iv = { class: 'progress' },
  Pv = ['aria-valuenow'],
  Av = {
    __name: 'ProgressBar',
    props: { percentage: Number },
    setup(e) {
      const t = e,
        n = Qi(),
        s = _e(() => n.clamp(t.percentage, 0, 100)),
        i = _e(() => `width: ${s.value}%;`);
      return (r, o) => (
        O(),
        R('div', Cv, [
          y('div', Iv, [
            y(
              'div',
              {
                class: 'progress-bar',
                role: 'progressbar',
                style: Ts(i.value),
                'aria-valuenow': s.value,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
              },
              null,
              12,
              Pv,
            ),
          ]),
        ])
      );
    },
  },
  Mv = ue(Av, [['__scopeId', 'data-v-86da5d66']]);
const Ov = { class: 'loader-full-screen-content' },
  Lv = { class: 'mt-0 mb-1 text-2 text-white' },
  Do = 1 / 60,
  Dv = {
    __name: 'Loader',
    emits: ['willShow', 'shown', 'completed', 'willHide', 'hidden'],
    setup(e, { expose: t, emit: n }) {
      const s = n,
        i = [
          { id: 0, label: 'startingUp', duration: null },
          { id: 1, label: 'logoTweenIn', duration: 0.5 },
          { id: 2, label: 'progressTweenIn', duration: 0.3 },
          { id: 3, label: 'loading', minDuration: 0.3 },
          { id: 4, label: 'waiting', duration: 0.3 },
          { id: 5, label: 'disappearing', duration: 1.2 },
        ],
        r = te(''),
        o = te(0),
        a = te(null),
        l = te(0),
        u = te(-1),
        c = te(0);
      let d = 0,
        p = null;
      yt(() => {
        f();
      });
      const f = () => {
          clearInterval(p), (p = null), (u.value = -1), (d = 0), (l.value = 0);
        },
        v = (A) => {
          f(),
            (r.value = A),
            c.value++,
            c.value > 2 && ((i[1].duration = 0), (i[2].duration = 0)),
            (u.value = 0),
            (p = setInterval(I, Do * 1e3));
        },
        b = (A) => {
          o.value = A;
        },
        I = () => {
          const A = i[u.value];
          d += Do;
          let j = !1;
          switch (A.label) {
            case 'startingUp':
              j = a.value.isLoaded();
              break;
            case 'loading':
              const B = Math.min(Math.max((100 * d) / A.minDuration, 0), 100);
              (l.value = Math.round(Math.min(B, o.value))),
                (j = l.value >= 100);
              break;
            default:
              j = d >= A.duration;
          }
          j && E();
        },
        E = () => {
          if ((u.value++, (d = 0), u.value >= i.length)) {
            s('hidden'), f();
            return;
          }
          switch (i[u.value].label) {
            case 'logoTweenIn':
              s('willShow');
              break;
            case 'loading':
              s('shown');
              break;
            case 'waiting':
              s('completed');
              break;
            case 'disappearing':
              s('willHide');
              break;
          }
        },
        g = (A) => {
          const j = i.find((B) => B.label === A);
          return j && u.value >= j.id;
        },
        _ = () => u.value >= 0 && u.value < i.length,
        S = () =>
          _()
            ? g('disappearing')
              ? 'loader-full-screen-transition'
              : 'loader-full-screen-show'
            : 'd-none';
      return (
        t({ run: v, setTaskProgress: b }),
        (A, j) =>
          _()
            ? (O(),
              R(
                'div',
                { key: 0, class: he(['loader-full-screen', S()]) },
                [
                  zn(
                    y(
                      'div',
                      Ov,
                      [
                        X(
                          Yt,
                          {
                            src: r.value,
                            alt: 'Preloader Logo',
                            'ignore-on-image-count': !0,
                            ref_key: 'logo',
                            ref: a,
                            class: he([
                              'img-fluid img-logo',
                              { 'no-transition': c.value > 2 },
                            ]),
                          },
                          null,
                          8,
                          ['src', 'class'],
                        ),
                        y(
                          'div',
                          {
                            class: he([
                              'progress-display',
                              {
                                'progress-display-expanded':
                                  g('progressTweenIn'),
                                'no-transition': c.value > 2,
                              },
                            ]),
                          },
                          [
                            y('p', Lv, re(l.value) + '%', 1),
                            X(
                              Mv,
                              {
                                ref: 'progressBar',
                                class: 'progress-bar',
                                percentage: l.value,
                              },
                              null,
                              8,
                              ['percentage'],
                            ),
                          ],
                          2,
                        ),
                      ],
                      512,
                    ),
                    [[ms, g('logoTweenIn')]],
                  ),
                ],
                2,
              ))
            : De('', !0)
      );
    },
  },
  $v = ue(Dv, [['__scopeId', 'data-v-34427575']]);
const Rv = (e) => (ke('data-v-3099a2cc'), (e = e()), Be(), e),
  Nv = { class: 'activity-spinner-content text-center' },
  kv = Rv(() =>
    y(
      'img',
      {
        alt: 'loading...',
        class: 'preloader-gif',
        src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2U9IiM1NDUxNTEiIHN0cm9rZS1kYXNoYXJyYXk9IjUwLjI2NTQ4MjQ1NzQzNjY5IDUwLjI2NTQ4MjQ1NzQzNjY5IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMjMiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlPSIjYzNjM2M1IiBzdHJva2UtZGFzaGFycmF5PSIzNi4xMjgzMTU1MTYyODI2MiAzNi4xMjgzMTU1MTYyODI2MiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjM2LjEyODMxNTUxNjI4MjYyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==',
      },
      null,
      -1,
    ),
  ),
  Bv = { class: 'text-light-5 text-uppercase' },
  zv = {
    __name: 'ActivitySpinner',
    setup(e, { expose: t }) {
      const n = te(''),
        s = te(!1);
      return (
        t({
          show: (o) => {
            (n.value = o), (s.value = !0);
          },
          hide: () => {
            s.value = !1;
          },
        }),
        (o, a) => (
          O(),
          R(
            'div',
            { class: he(['activity-spinner', { 'd-none': !s.value }]) },
            [y('div', Nv, [kv, y('h5', Bv, re(n.value), 1)])],
            2,
          )
        )
      );
    },
  },
  jv = ue(zv, [['__scopeId', 'data-v-3099a2cc']]);
const Hv = {
    __name: 'FeedbackView',
    setup(e, { expose: t }) {
      const n = wn(),
        s = te(null),
        i = te(null),
        r = { onShown: null, onComplete: null },
        o = (v) => {
          n.setPageScrollingEnabled(!1), s.value.run(v);
        },
        a = (v, b) => {
          (r.onShown = v), (r.onComplete = b);
        },
        l = (v) => {
          s.value.setTaskProgress(v);
        },
        u = () => {
          r.onShown && r.onShown();
        },
        c = () => {
          r.onComplete && r.onComplete();
        },
        d = () => {
          n.setPageScrollingEnabled(!0),
            (r.onShown = null),
            (r.onComplete = null);
        };
      return (
        t({
          setLoader: o,
          setLoaderListeners: a,
          updateLoaderProgress: l,
          showActivitySpinner: (v) => {
            i.value.show(v);
          },
          hideActivitySpinner: () => {
            i.value.hide();
          },
        }),
        (v, b) => (
          O(),
          R(
            ne,
            null,
            [
              X(
                $v,
                {
                  ref_key: 'loader',
                  ref: s,
                  onShown: u,
                  onCompleted: c,
                  onWillHide: d,
                },
                null,
                512,
              ),
              X(jv, { ref_key: 'activitySpinner', ref: i }, null, 512),
            ],
            64,
          )
        )
      );
    },
  },
  Fv = ue(Hv, [['__scopeId', 'data-v-6fc1ef3d']]),
  Vv = { key: 0 },
  Wv = {
    __name: 'App',
    setup(e) {
      const t = Wn(),
        n = wn(),
        s = nr(),
        i = Qi(),
        r = te(null),
        o = te(!1);
      let a = null;
      yt(() => {
        n.setFeedbackView(r), u();
      }),
        jt(
          () => s.name,
          () => {
            u(), n.instantScrollTo(0, !0);
          },
        );
      const l = _e(() => t.getSettings().preloaderEnabled),
        u = async () => {
          clearInterval(a),
            l.value
              ? (r.value.setLoaderListeners(c, p),
                r.value.setLoader('images/logo/logo.png'))
              : await c();
        },
        c = async () => {
          (a = setInterval(() => {
            d();
          }, 1e3 / 30)),
            l.value || (p(), n.setPageScrollingEnabled(!0));
        },
        d = () => {
          if (!l.value) return;
          const f = t.getLoadProgress(),
            v = n.getImageCount();
          let b = 0;
          v.total > 0
            ? (b = Math.round((100 * v.loaded) / v.total))
            : f === 100 && (b = 100);
          const I = (f + b * 4) / 5;
          r.value.updateLoaderProgress(I);
        },
        p = () => {
          (o.value = !0), clearInterval(a);
        };
      return (f, v) => {
        const b = Wi('router-view');
        return (
          O(),
          R(
            ne,
            null,
            [
              X(Fv, { ref_key: 'feedbackView', ref: r }, null, 512),
              le(t).getLoadProgress() >= 100
                ? zn((O(), R('div', Vv, [X(b)], 512)), [
                    [ms, !le(i).isTouchDevice() || o.value],
                  ])
                : De('', !0),
            ],
            64,
          )
        );
      };
    },
  },
  Gv = Wn();
Gv.fetchData().then((e) => {
  const t = Tv();
  Bu(Wv).use(t).mount('#app');
});

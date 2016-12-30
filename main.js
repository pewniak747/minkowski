if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var h;
function u(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a) {
  return Array.prototype.join.call(arguments, "");
}
;function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = ga.prototype;
h.Ca = "";
h.set = function(a) {
  this.Ca = "" + a;
};
h.append = function(a, b, c) {
  this.Ca += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ca += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.Ca = "";
};
h.toString = function() {
  return this.Ca;
};
function ha(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;if ("undefined" === typeof ia) {
  var ia = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var ka = null;
if ("undefined" === typeof ma) {
  var ma = null
}
function w(a) {
  return null != a && !1 !== a;
}
function oa(a) {
  return a instanceof Array;
}
function z(a, b) {
  return a[u(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function ra(a) {
  return null == a ? null : a.constructor;
}
function B(a, b) {
  var c = ra(b), c = w(w(c) ? c.vb : c) ? c.ub : u(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ta(a) {
  var b = a.ub;
  return w(b) ? b : "" + C(a);
}
var ua = "undefined" !== typeof Symbol && "function" === u(Symbol) ? Symbol.iterator : "@@iterator";
function va(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var xa = function() {
  function a(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return wa.b ? wa.b(c, g, b) : wa.call(null, c, g, b);
  }
  function b(a) {
    return c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, 0, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.a = a;
  return c;
}(), ya = {}, za = {}, Ca = function Ca(b) {
  if (b ? b.Q : b) {
    return b.Q(b);
  }
  var c;
  c = Ca[u(null == b ? null : b)];
  if (!c && (c = Ca._, !c)) {
    throw B("ICounted.-count", b);
  }
  return c.call(null, b);
}, Da = function Da(b, c) {
  if (b ? b.J : b) {
    return b.J(b, c);
  }
  var d;
  d = Da[u(null == b ? null : b)];
  if (!d && (d = Da._, !d)) {
    throw B("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ea = {}, D = function() {
  function a(a, b, f) {
    if (a ? a.Y : a) {
      return a.Y(a, b, f);
    }
    var g;
    g = c[u(null == a ? null : a)];
    if (!g && (g = c._, !g)) {
      throw B("IIndexed.-nth", a);
    }
    return g.call(null, a, b, f);
  }
  function b(a, b) {
    if (a ? a.R : a) {
      return a.R(a, b);
    }
    var f;
    f = c[u(null == a ? null : a)];
    if (!f && (f = c._, !f)) {
      throw B("IIndexed.-nth", a);
    }
    return f.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Fa = {}, E = function E(b) {
  if (b ? b.S : b) {
    return b.S(b);
  }
  var c;
  c = E[u(null == b ? null : b)];
  if (!c && (c = E._, !c)) {
    throw B("ISeq.-first", b);
  }
  return c.call(null, b);
}, F = function F(b) {
  if (b ? b.X : b) {
    return b.X(b);
  }
  var c;
  c = F[u(null == b ? null : b)];
  if (!c && (c = F._, !c)) {
    throw B("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ha = {}, Ia = {}, Ja = function() {
  function a(a, b, f) {
    if (a ? a.C : a) {
      return a.C(a, b, f);
    }
    var g;
    g = c[u(null == a ? null : a)];
    if (!g && (g = c._, !g)) {
      throw B("ILookup.-lookup", a);
    }
    return g.call(null, a, b, f);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var f;
    f = c[u(null == a ? null : a)];
    if (!f && (f = c._, !f)) {
      throw B("ILookup.-lookup", a);
    }
    return f.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Ka = function Ka(b, c, d) {
  if (b ? b.Ia : b) {
    return b.Ia(b, c, d);
  }
  var e;
  e = Ka[u(null == b ? null : b)];
  if (!e && (e = Ka._, !e)) {
    throw B("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, La = {}, Ma = {}, Na = function Na(b) {
  if (b ? b.$a : b) {
    return b.$a();
  }
  var c;
  c = Na[u(null == b ? null : b)];
  if (!c && (c = Na._, !c)) {
    throw B("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Oa = function Oa(b) {
  if (b ? b.ab : b) {
    return b.ab();
  }
  var c;
  c = Oa[u(null == b ? null : b)];
  if (!c && (c = Oa._, !c)) {
    throw B("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Pa = {}, Qa = function Qa(b, c, d) {
  if (b ? b.bb : b) {
    return b.bb(b, c, d);
  }
  var e;
  e = Qa[u(null == b ? null : b)];
  if (!e && (e = Qa._, !e)) {
    throw B("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Ra = function Ra(b) {
  if (b ? b.yb : b) {
    return b.ga;
  }
  var c;
  c = Ra[u(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw B("IDeref.-deref", b);
  }
  return c.call(null, b);
}, Sa = {}, Ua = function Ua(b) {
  if (b ? b.L : b) {
    return b.L(b);
  }
  var c;
  c = Ua[u(null == b ? null : b)];
  if (!c && (c = Ua._, !c)) {
    throw B("IMeta.-meta", b);
  }
  return c.call(null, b);
}, Va = {}, Wa = function Wa(b, c) {
  if (b ? b.P : b) {
    return b.P(b, c);
  }
  var d;
  d = Wa[u(null == b ? null : b)];
  if (!d && (d = Wa._, !d)) {
    throw B("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, Xa = {}, Ya = function() {
  function a(a, b, f) {
    if (a ? a.O : a) {
      return a.O(a, b, f);
    }
    var g;
    g = c[u(null == a ? null : a)];
    if (!g && (g = c._, !g)) {
      throw B("IReduce.-reduce", a);
    }
    return g.call(null, a, b, f);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var f;
    f = c[u(null == a ? null : a)];
    if (!f && (f = c._, !f)) {
      throw B("IReduce.-reduce", a);
    }
    return f.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Za = function Za(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = Za[u(null == b ? null : b)];
  if (!d && (d = Za._, !d)) {
    throw B("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, $a = function $a(b) {
  if (b ? b.G : b) {
    return b.G(b);
  }
  var c;
  c = $a[u(null == b ? null : b)];
  if (!c && (c = $a._, !c)) {
    throw B("IHash.-hash", b);
  }
  return c.call(null, b);
}, ab = {}, bb = function bb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = bb[u(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw B("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, db = {}, H = function H(b, c) {
  if (b ? b.ib : b) {
    return b.ib(0, c);
  }
  var d;
  d = H[u(null == b ? null : b)];
  if (!d && (d = H._, !d)) {
    throw B("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, eb = {}, fb = function fb(b, c, d) {
  if (b ? b.D : b) {
    return b.D(b, c, d);
  }
  var e;
  e = fb[u(null == b ? null : b)];
  if (!e && (e = fb._, !e)) {
    throw B("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, gb = function gb(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = gb[u(null == b ? null : b)];
  if (!c && (c = gb._, !c)) {
    throw B("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, hb = function hb(b, c) {
  if (b ? b.Sa : b) {
    return b.Sa(b, c);
  }
  var d;
  d = hb[u(null == b ? null : b)];
  if (!d && (d = hb._, !d)) {
    throw B("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, ib = function ib(b) {
  if (b ? b.Ta : b) {
    return b.Ta(b);
  }
  var c;
  c = ib[u(null == b ? null : b)];
  if (!c && (c = ib._, !c)) {
    throw B("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, jb = function jb(b, c, d) {
  if (b ? b.Ka : b) {
    return b.Ka(b, c, d);
  }
  var e;
  e = jb[u(null == b ? null : b)];
  if (!e && (e = jb._, !e)) {
    throw B("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, kb = function kb(b, c, d) {
  if (b ? b.hb : b) {
    return b.hb(0, c, d);
  }
  var e;
  e = kb[u(null == b ? null : b)];
  if (!e && (e = kb._, !e)) {
    throw B("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, lb = function lb(b) {
  if (b ? b.fb : b) {
    return b.fb();
  }
  var c;
  c = lb[u(null == b ? null : b)];
  if (!c && (c = lb._, !c)) {
    throw B("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, mb = function mb(b) {
  if (b ? b.Ya : b) {
    return b.Ya(b);
  }
  var c;
  c = mb[u(null == b ? null : b)];
  if (!c && (c = mb._, !c)) {
    throw B("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, nb = function nb(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = nb[u(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw B("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, pb = function pb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = pb[u(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw B("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, qb = function qb(b) {
  if (b ? b.Ja : b) {
    return b.Ja(b);
  }
  var c;
  c = qb[u(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw B("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function rb(a) {
  this.wb = a;
  this.t = 0;
  this.j = 1073741824;
}
rb.prototype.ib = function(a, b) {
  return this.wb.append(b);
};
function sb(a) {
  var b = new ga;
  a.D(null, new rb(b), new tb(null, 5, [ub, !0, vb, !0, wb, !1, xb, !1, yb, null], null));
  return "" + C(b);
}
var zb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Ab(a) {
  a = zb(a | 0, -862048943);
  return zb(a << 15 | a >>> -15, 461845907);
}
function Cb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return zb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Db(a, b) {
  var c = (a | 0) ^ b, c = zb(c ^ c >>> 16, -2048144789), c = zb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Eb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Cb(c, Ab(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Ab(a.charCodeAt(a.length - 1)) : b;
  return Db(b, zb(2, a.length));
}
var Fb = {}, Gb = 0;
function Hb(a) {
  255 < Gb && (Fb = {}, Gb = 0);
  var b = Fb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = zb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Fb[a] = b;
    Gb += 1;
  }
  return a = b;
}
function Ib(a) {
  a && (a.j & 4194304 || a.zb) ? a = a.G(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Hb(a), 0 !== a && (a = Ab(a), a = Cb(0, a), a = Db(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : $a(a);
  return a;
}
function Jb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.j & 8388608 || a.Ab)) {
    return a.H(null);
  }
  if (oa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new J(a, 0);
  }
  if (z(ab, a)) {
    return bb(a);
  }
  throw Error([C(a), C(" is not ISeqable")].join(""));
}
function K(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.j & 64 || a.Ra)) {
    return a.S(null);
  }
  a = I(a);
  return null == a ? null : E(a);
}
function L(a) {
  return null != a ? a && (a.j & 64 || a.Ra) ? a.X(null) : (a = I(a)) ? F(a) : Kb : Kb;
}
function M(a) {
  return null == a ? null : a && (a.j & 128 || a.Qa) ? a.W(null) : I(L(a));
}
var Lb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Za(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new J(m, 0);
      }
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = K(e), e = M(e);
          } else {
            return b.a(d, K(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.w = 2;
    a.p = function(a) {
      var b = K(a);
      a = M(a);
      var d = K(a);
      a = L(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new J(k, 0);
        }
        return c.n(b, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.p = c.p;
  b.g = function() {
    return!0;
  };
  b.a = a;
  b.n = c.n;
  return b;
}();
function Mb(a) {
  this.r = a;
}
Mb.prototype.next = function() {
  if (null != this.r) {
    var a = K(this.r);
    this.r = M(this.r);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function O(a) {
  return new Mb(I(a));
}
function Nb(a, b) {
  var c = Ab(a), c = Cb(0, c);
  return Db(c, b);
}
function Ob(a) {
  var b = 0, c = 1;
  for (a = I(a);;) {
    if (null != a) {
      b += 1, c = zb(31, c) + Ib(K(a)) | 0, a = M(a);
    } else {
      return Nb(c, b);
    }
  }
}
var Pb = Nb(1, 0);
function Qb(a) {
  var b = 0, c = 0;
  for (a = I(a);;) {
    if (null != a) {
      b += 1, c = c + Ib(K(a)) | 0, a = M(a);
    } else {
      return Nb(c, b);
    }
  }
}
var Rb = Nb(0, 0);
za["null"] = !0;
Ca["null"] = function() {
  return 0;
};
Date.prototype.Ma = !0;
Date.prototype.Na = function(a, b) {
  return ha(this.valueOf(), b.valueOf());
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Za.number = function(a, b) {
  return a === b;
};
Sa["function"] = !0;
Ua["function"] = function() {
  return null;
};
ya["function"] = !0;
$a._ = function(a) {
  return a[ca] || (a[ca] = ++da);
};
function Sb(a) {
  return!1;
}
function Tb(a) {
  return Ra(a);
}
var Ub = function() {
  function a(a, b, c, d) {
    for (var l = Ca(a);;) {
      if (d < l) {
        var m = D.a(a, d);
        c = b.a ? b.a(c, m) : b.call(null, c, m);
        if (Sb(c)) {
          return Ra(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = Ca(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = D.a(a, c), l = b.a ? b.a(l, m) : b.call(null, l, m);
        if (Sb(l)) {
          return Ra(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = Ca(a);
    if (0 === c) {
      return b.A ? b.A() : b.call(null);
    }
    for (var d = D.a(a, 0), l = 1;;) {
      if (l < c) {
        var m = D.a(a, l), d = b.a ? b.a(d, m) : b.call(null, d, m);
        if (Sb(d)) {
          return Ra(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), Vb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.a ? b.a(c, m) : b.call(null, c, m);
        if (Sb(c)) {
          return Ra(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = a.length, l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = a[c], l = b.a ? b.a(l, m) : b.call(null, l, m);
        if (Sb(l)) {
          return Ra(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.A ? b.A() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.a ? b.a(d, m) : b.call(null, d, m);
        if (Sb(d)) {
          return Ra(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function Wb(a) {
  return a ? a.j & 2 || a.lb ? !0 : a.j ? !1 : z(za, a) : z(za, a);
}
function Xb(a) {
  return a ? a.j & 16 || a.gb ? !0 : a.j ? !1 : z(Ea, a) : z(Ea, a);
}
function Yb(a, b) {
  this.c = a;
  this.k = b;
}
Yb.prototype.Ua = function() {
  return this.k < this.c.length;
};
Yb.prototype.next = function() {
  var a = this.c[this.k];
  this.k += 1;
  return a;
};
function J(a, b) {
  this.c = a;
  this.k = b;
  this.j = 166199550;
  this.t = 8192;
}
h = J.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.R = function(a, b) {
  var c = b + this.k;
  return c < this.c.length ? this.c[c] : null;
};
h.Y = function(a, b, c) {
  a = b + this.k;
  return a < this.c.length ? this.c[a] : c;
};
h.Ja = function() {
  return new Yb(this.c, this.k);
};
h.W = function() {
  return this.k + 1 < this.c.length ? new J(this.c, this.k + 1) : null;
};
h.Q = function() {
  return this.c.length - this.k;
};
h.G = function() {
  return Ob(this);
};
h.q = function(a, b) {
  return Zb.a ? Zb.a(this, b) : Zb.call(null, this, b);
};
h.N = function(a, b) {
  return Vb.l(this.c, b, this.c[this.k], this.k + 1);
};
h.O = function(a, b, c) {
  return Vb.l(this.c, b, c, this.k);
};
h.S = function() {
  return this.c[this.k];
};
h.X = function() {
  return this.k + 1 < this.c.length ? new J(this.c, this.k + 1) : Kb;
};
h.H = function() {
  return this;
};
h.J = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
J.prototype[ua] = function() {
  return O(this);
};
var $b = function() {
  function a(a, b) {
    return b < a.length ? new J(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.a = a;
  return c;
}(), bc = function() {
  function a(a, b) {
    return $b.a(a, b);
  }
  function b(a) {
    return $b.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.a = a;
  return c;
}();
Za._ = function(a, b) {
  return a === b;
};
var dc = function() {
  function a(a, b) {
    return null != a ? Da(a, b) : Da(Kb, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new J(m, 0);
      }
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (w(e)) {
          a = b.a(a, d), d = K(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.w = 2;
    a.p = function(a) {
      var b = K(a);
      a = M(a);
      var d = K(a);
      a = L(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return cc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new J(k, 0);
        }
        return c.n(b, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.p = c.p;
  b.A = function() {
    return cc;
  };
  b.g = function(a) {
    return a;
  };
  b.a = a;
  b.n = c.n;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.j & 2 || a.lb)) {
      a = a.Q(null);
    } else {
      if (oa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (z(za, a)) {
            a = Ca(a);
          } else {
            a: {
              a = I(a);
              for (var b = 0;;) {
                if (Wb(a)) {
                  a = b + Ca(a);
                  break a;
                }
                a = M(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var ec = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return I(a) ? K(a) : c;
      }
      if (Xb(a)) {
        return D.b(a, b, c);
      }
      if (I(a)) {
        a = M(a), --b;
      } else {
        return c;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (I(a)) {
          return K(a);
        }
        throw Error("Index out of bounds");
      }
      if (Xb(a)) {
        return D.a(a, b);
      }
      if (I(a)) {
        var c = M(a), g = b - 1;
        a = c;
        b = g;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.j & 16 || a.gb)) {
      return a.Y(null, b, c);
    }
    if (oa(a) || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (z(Ea, a)) {
      return D.a(a, b);
    }
    if (a ? a.j & 64 || a.Ra || (a.j ? 0 : z(Fa, a)) : z(Fa, a)) {
      return ec.b(a, b, c);
    }
    throw Error([C("nth not supported on this type "), C(ta(ra(a)))].join(""));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.j & 16 || a.gb)) {
      return a.R(null, b);
    }
    if (oa(a) || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (z(Ea, a)) {
      return D.a(a, b);
    }
    if (a ? a.j & 64 || a.Ra || (a.j ? 0 : z(Fa, a)) : z(Fa, a)) {
      return ec.a(a, b);
    }
    throw Error([C("nth not supported on this type "), C(ta(ra(a)))].join(""));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), fc = function() {
  function a(a, b, c) {
    return null != a ? a && (a.j & 256 || a.ob) ? a.C(null, b, c) : oa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : z(Ia, a) ? Ja.b(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.j & 256 || a.ob) ? a.K(null, b) : oa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : z(Ia, a) ? Ja.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), hc = function() {
  function a(a, b, c) {
    if (null != a) {
      a = Ka(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var g = 0, k;
        for (k = gb(gc);;) {
          if (g < b) {
            var l = g + 1;
            k = k.Ka(null, a[g], c[g]);
            g = l;
          } else {
            a = ib(k);
            break a;
          }
        }
      }
    }
    return a;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      if (3 < arguments.length) {
        for (var m = 0, n = Array(arguments.length - 3);m < n.length;) {
          n[m] = arguments[m + 3], ++m;
        }
        m = new J(n, 0);
      }
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), w(l)) {
          d = K(l), e = K(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.w = 3;
    a.p = function(a) {
      var b = K(a);
      a = M(a);
      var d = K(a);
      a = M(a);
      var l = K(a);
      a = L(a);
      return c(b, d, l, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        var k = null;
        if (3 < arguments.length) {
          for (var k = 0, l = Array(arguments.length - 3);k < l.length;) {
            l[k] = arguments[k + 3], ++k;
          }
          k = new J(l, 0);
        }
        return c.n(b, e, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 3;
  b.p = c.p;
  b.b = a;
  b.n = c.n;
  return b;
}();
function ic(a) {
  var b = "function" == u(a);
  return w(b) ? b : a ? w(w(null) ? null : a.kb) ? !0 : a.Fb ? !1 : z(ya, a) : z(ya, a);
}
function jc(a, b) {
  this.e = a;
  this.o = b;
  this.t = 0;
  this.j = 393217;
}
h = jc.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y, N, ba) {
    a = this.e;
    return kc.Pa ? kc.Pa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y, N, ba) : kc.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y, N, ba);
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y, N) {
    a = this;
    return a.e.ta ? a.e.ta(b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y, N) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y, N);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y) {
    a = this;
    return a.e.sa ? a.e.sa(b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, y);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G) {
    a = this;
    return a.e.ra ? a.e.ra(b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A) {
    a = this;
    return a.e.qa ? a.e.qa(b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x) {
    a = this;
    return a.e.pa ? a.e.pa(b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v) {
    a = this;
    return a.e.oa ? a.e.oa(b, c, d, e, f, g, k, l, m, n, p, q, r, t, v) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
    a = this;
    return a.e.na ? a.e.na(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
    a = this;
    return a.e.ma ? a.e.ma(b, c, d, e, f, g, k, l, m, n, p, q, r) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, p, q) {
    a = this;
    return a.e.la ? a.e.la(b, c, d, e, f, g, k, l, m, n, p, q) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, p) {
    a = this;
    return a.e.ka ? a.e.ka(b, c, d, e, f, g, k, l, m, n, p) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    return a.e.ja ? a.e.ja(b, c, d, e, f, g, k, l, m, n) : a.e.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    return a.e.va ? a.e.va(b, c, d, e, f, g, k, l, m) : a.e.call(null, b, c, d, e, f, g, k, l, m);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.e.ua ? a.e.ua(b, c, d, e, f, g, k, l) : a.e.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, g, k) : a.e.call(null, b, c, d, e, f, g, k);
  }
  function v(a, b, c, d, e, f, g) {
    a = this;
    return a.e.V ? a.e.V(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g);
  }
  function x(a, b, c, d, e, f) {
    a = this;
    return a.e.B ? a.e.B(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function A(a, b, c, d, e) {
    a = this;
    return a.e.l ? a.e.l(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function G(a, b, c, d) {
    a = this;
    return a.e.b ? a.e.b(b, c, d) : a.e.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    return a.e.a ? a.e.a(b, c) : a.e.call(null, b, c);
  }
  function ba(a, b) {
    a = this;
    return a.e.g ? a.e.g(b) : a.e.call(null, b);
  }
  function Ba(a) {
    a = this;
    return a.e.A ? a.e.A() : a.e.call(null);
  }
  var y = null, y = function(y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob, Bb, ac, wc, Sc, Ed, ve) {
    switch(arguments.length) {
      case 1:
        return Ba.call(this, y);
      case 2:
        return ba.call(this, y, V);
      case 3:
        return N.call(this, y, V, X);
      case 4:
        return G.call(this, y, V, X, Z);
      case 5:
        return A.call(this, y, V, X, Z, aa);
      case 6:
        return x.call(this, y, V, X, Z, aa, ja);
      case 7:
        return v.call(this, y, V, X, Z, aa, ja, la);
      case 8:
        return t.call(this, y, V, X, Z, aa, ja, la, na);
      case 9:
        return r.call(this, y, V, X, Z, aa, ja, la, na, pa);
      case 10:
        return q.call(this, y, V, X, Z, aa, ja, la, na, pa, qa);
      case 11:
        return p.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa);
      case 12:
        return n.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa);
      case 13:
        return m.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga);
      case 14:
        return l.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta);
      case 15:
        return k.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb);
      case 16:
        return g.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob);
      case 17:
        return f.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob, Bb);
      case 18:
        return e.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob, Bb, ac);
      case 19:
        return d.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob, Bb, ac, wc);
      case 20:
        return c.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob, Bb, ac, wc, Sc);
      case 21:
        return b.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob, Bb, ac, wc, Sc, Ed);
      case 22:
        return a.call(this, y, V, X, Z, aa, ja, la, na, pa, qa, sa, Aa, Ga, Ta, cb, ob, Bb, ac, wc, Sc, Ed, ve);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.g = Ba;
  y.a = ba;
  y.b = N;
  y.l = G;
  y.B = A;
  y.V = x;
  y.ba = v;
  y.ua = t;
  y.va = r;
  y.ja = q;
  y.ka = p;
  y.la = n;
  y.ma = m;
  y.na = l;
  y.oa = k;
  y.pa = g;
  y.qa = f;
  y.ra = e;
  y.sa = d;
  y.ta = c;
  y.nb = b;
  y.Pa = a;
  return y;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.A = function() {
  return this.e.A ? this.e.A() : this.e.call(null);
};
h.g = function(a) {
  return this.e.g ? this.e.g(a) : this.e.call(null, a);
};
h.a = function(a, b) {
  return this.e.a ? this.e.a(a, b) : this.e.call(null, a, b);
};
h.b = function(a, b, c) {
  return this.e.b ? this.e.b(a, b, c) : this.e.call(null, a, b, c);
};
h.l = function(a, b, c, d) {
  return this.e.l ? this.e.l(a, b, c, d) : this.e.call(null, a, b, c, d);
};
h.B = function(a, b, c, d, e) {
  return this.e.B ? this.e.B(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
h.V = function(a, b, c, d, e, f) {
  return this.e.V ? this.e.V(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
h.ba = function(a, b, c, d, e, f, g) {
  return this.e.ba ? this.e.ba(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g);
};
h.ua = function(a, b, c, d, e, f, g, k) {
  return this.e.ua ? this.e.ua(a, b, c, d, e, f, g, k) : this.e.call(null, a, b, c, d, e, f, g, k);
};
h.va = function(a, b, c, d, e, f, g, k, l) {
  return this.e.va ? this.e.va(a, b, c, d, e, f, g, k, l) : this.e.call(null, a, b, c, d, e, f, g, k, l);
};
h.ja = function(a, b, c, d, e, f, g, k, l, m) {
  return this.e.ja ? this.e.ja(a, b, c, d, e, f, g, k, l, m) : this.e.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.ka = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.e.ka ? this.e.ka(a, b, c, d, e, f, g, k, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.la = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.e.la ? this.e.la(a, b, c, d, e, f, g, k, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.ma = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  return this.e.ma ? this.e.ma(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.na = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  return this.e.na ? this.e.na(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.oa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  return this.e.oa ? this.e.oa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.pa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v) {
  return this.e.pa ? this.e.pa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v);
};
h.qa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x) {
  return this.e.qa ? this.e.qa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x);
};
h.ra = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A) {
  return this.e.ra ? this.e.ra(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A);
};
h.sa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G) {
  return this.e.sa ? this.e.sa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G);
};
h.ta = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N) {
  return this.e.ta ? this.e.ta(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N);
};
h.nb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba) {
  var Ba = this.e;
  return kc.Pa ? kc.Pa(Ba, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba) : kc.call(null, Ba, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba);
};
h.kb = !0;
h.P = function(a, b) {
  return new jc(this.e, b);
};
h.L = function() {
  return this.o;
};
function lc(a, b) {
  return ic(a) && !(a ? a.j & 262144 || a.Db || (a.j ? 0 : z(Va, a)) : z(Va, a)) ? new jc(a, b) : null == a ? null : Wa(a, b);
}
function mc(a) {
  var b = null != a;
  return(b ? a ? a.j & 131072 || a.rb || (a.j ? 0 : z(Sa, a)) : z(Sa, a) : b) ? Ua(a) : null;
}
function nc(a) {
  return null == a ? !1 : a ? a.j & 1024 || a.pb ? !0 : a.j ? !1 : z(La, a) : z(La, a);
}
function oc(a) {
  return a ? a.j & 16384 || a.Cb ? !0 : a.j ? !1 : z(Pa, a) : z(Pa, a);
}
function pc(a) {
  return a ? a.t & 512 || a.xb ? !0 : !1 : !1;
}
function qc(a) {
  var b = [];
  fa(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function rc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
function sc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], --d, --e, --b;
  }
}
var tc = {};
function uc(a) {
  return w(a) ? !0 : !1;
}
function vc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ra(a) === ra(b)) {
    return a && (a.t & 2048 || a.Ma) ? a.Na(null, b) : ha(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var xc = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = vc(R.a(a, g), R.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Q(a), g = Q(b);
    return f < g ? -1 : f > g ? 1 : c.l(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    for (c = I(c);;) {
      if (c) {
        var g = K(c);
        b = a.a ? a.a(b, g) : a.call(null, b, g);
        if (Sb(b)) {
          return Ra(b);
        }
        c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    if (c) {
      var g = K(c), c = M(c);
      return wa.b ? wa.b(a, g, c) : wa.call(null, a, g, c);
    }
    return a.A ? a.A() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), wa = function() {
  function a(a, b, c) {
    return c && (c.j & 524288 || c.tb) ? c.O(null, a, b) : oa(c) ? Vb.b(c, a, b) : "string" === typeof c ? Vb.b(c, a, b) : z(Xa, c) ? Ya.b(c, a, b) : S.b(a, b, c);
  }
  function b(a, b) {
    return b && (b.j & 524288 || b.tb) ? b.N(null, a) : oa(b) ? Vb.a(b, a) : "string" === typeof b ? Vb.a(b, a) : z(Xa, b) ? Ya.a(b, a) : S.a(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function yc(a) {
  return a;
}
var zc = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = wa.b(a, c, g);
    return a.g ? a.g(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.l(a, b, b.A ? b.A() : b.call(null), f);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.l = a;
  return c;
}();
function Ac(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function Bc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var C = function() {
  function a(a) {
    return null == a ? "" : ea(a);
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new J(l, 0);
      }
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.g(a)), l = d;;) {
        if (w(l)) {
          e = e.append(b.g(K(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.w = 1;
    a.p = function(a) {
      var b = K(a);
      a = L(a);
      return c(b, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 1);f < g.length;) {
            g[f] = arguments[f + 1], ++f;
          }
          f = new J(g, 0);
        }
        return c.n(b, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 1;
  b.p = c.p;
  b.A = function() {
    return "";
  };
  b.g = a;
  b.n = c.n;
  return b;
}();
function Zb(a, b) {
  var c;
  if (b ? b.j & 16777216 || b.Bb || (b.j ? 0 : z(db, b)) : z(db, b)) {
    if (Wb(a) && Wb(b) && Q(a) !== Q(b)) {
      c = !1;
    } else {
      a: {
        c = I(a);
        for (var d = I(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Lb.a(K(c), K(d))) {
            c = M(c), d = M(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return uc(c);
}
function Cc(a, b, c, d, e) {
  this.o = a;
  this.first = b;
  this.xa = c;
  this.count = d;
  this.m = e;
  this.j = 65937646;
  this.t = 8192;
}
h = Cc.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.o;
};
h.W = function() {
  return 1 === this.count ? null : this.xa;
};
h.Q = function() {
  return this.count;
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return this.first;
};
h.X = function() {
  return 1 === this.count ? Kb : this.xa;
};
h.H = function() {
  return this;
};
h.P = function(a, b) {
  return new Cc(b, this.first, this.xa, this.count, this.m);
};
h.J = function(a, b) {
  return new Cc(this.o, b, this, this.count + 1, null);
};
Cc.prototype[ua] = function() {
  return O(this);
};
function Dc(a) {
  this.o = a;
  this.j = 65937614;
  this.t = 8192;
}
h = Dc.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.o;
};
h.W = function() {
  return null;
};
h.Q = function() {
  return 0;
};
h.G = function() {
  return Pb;
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return null;
};
h.X = function() {
  return Kb;
};
h.H = function() {
  return null;
};
h.P = function(a, b) {
  return new Dc(b);
};
h.J = function(a, b) {
  return new Cc(this.o, b, null, 1, null);
};
var Kb = new Dc(null);
Dc.prototype[ua] = function() {
  return O(this);
};
function Ec(a, b, c, d) {
  this.o = a;
  this.first = b;
  this.xa = c;
  this.m = d;
  this.j = 65929452;
  this.t = 8192;
}
h = Ec.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.o;
};
h.W = function() {
  return null == this.xa ? null : I(this.xa);
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return this.first;
};
h.X = function() {
  return null == this.xa ? Kb : this.xa;
};
h.H = function() {
  return this;
};
h.P = function(a, b) {
  return new Ec(b, this.first, this.xa, this.m);
};
h.J = function(a, b) {
  return new Ec(null, b, this, this.m);
};
Ec.prototype[ua] = function() {
  return O(this);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.j & 64 || b.Ra)) ? new Ec(null, a, b, null) : new Ec(null, a, I(b), null);
}
function Fc(a, b) {
  if (a.ha === b.ha) {
    return 0;
  }
  var c = w(a.Ba) ? !1 : !0;
  if (w(c ? b.Ba : c)) {
    return-1;
  }
  if (w(a.Ba)) {
    if (!w(b.Ba)) {
      return 1;
    }
    c = ha(a.Ba, b.Ba);
    return 0 === c ? ha(a.name, b.name) : c;
  }
  return ha(a.name, b.name);
}
function T(a, b, c, d) {
  this.Ba = a;
  this.name = b;
  this.ha = c;
  this.eb = d;
  this.j = 2153775105;
  this.t = 4096;
}
h = T.prototype;
h.D = function(a, b) {
  return H(b, [C(":"), C(this.ha)].join(""));
};
h.G = function() {
  var a = this.eb;
  return null != a ? a : this.eb = a = Jb(Eb(this.name), Hb(this.Ba)) + 2654435769 | 0;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return fc.a(c, this);
      case 3:
        return fc.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return fc.a(c, this);
  };
  a.b = function(a, c, d) {
    return fc.b(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.g = function(a) {
  return fc.a(a, this);
};
h.a = function(a, b) {
  return fc.b(a, this, b);
};
h.q = function(a, b) {
  return b instanceof T ? this.ha === b.ha : !1;
};
h.toString = function() {
  return[C(":"), C(this.ha)].join("");
};
h.equiv = function(a) {
  return this.q(null, a);
};
var Gc = function() {
  function a(a, b) {
    return new T(a, b, [C(w(a) ? [C(a), C("/")].join("") : null), C(b)].join(""), null);
  }
  function b(a) {
    var b;
    return a instanceof T ? a : "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new T(b[0], b[1], a, null) : new T(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.a = a;
  return c;
}();
function Hc(a, b, c, d) {
  this.o = a;
  this.Ga = b;
  this.r = c;
  this.m = d;
  this.t = 0;
  this.j = 32374988;
}
h = Hc.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
function Ic(a) {
  null != a.Ga && (a.r = a.Ga.A ? a.Ga.A() : a.Ga.call(null), a.Ga = null);
  return a.r;
}
h.L = function() {
  return this.o;
};
h.W = function() {
  bb(this);
  return null == this.r ? null : M(this.r);
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  bb(this);
  return null == this.r ? null : K(this.r);
};
h.X = function() {
  bb(this);
  return null != this.r ? L(this.r) : Kb;
};
h.H = function() {
  Ic(this);
  if (null == this.r) {
    return null;
  }
  for (var a = this.r;;) {
    if (a instanceof Hc) {
      a = Ic(a);
    } else {
      return this.r = a, I(this.r);
    }
  }
};
h.P = function(a, b) {
  return new Hc(b, this.Ga, this.r, this.m);
};
h.J = function(a, b) {
  return P(b, this);
};
Hc.prototype[ua] = function() {
  return O(this);
};
function Jc(a, b) {
  this.Wa = a;
  this.end = b;
  this.t = 0;
  this.j = 2;
}
Jc.prototype.Q = function() {
  return this.end;
};
Jc.prototype.add = function(a) {
  this.Wa[this.end] = a;
  return this.end += 1;
};
Jc.prototype.Z = function() {
  var a = new Kc(this.Wa, 0, this.end);
  this.Wa = null;
  return a;
};
function Kc(a, b, c) {
  this.c = a;
  this.I = b;
  this.end = c;
  this.t = 0;
  this.j = 524306;
}
h = Kc.prototype;
h.N = function(a, b) {
  return Vb.l(this.c, b, this.c[this.I], this.I + 1);
};
h.O = function(a, b, c) {
  return Vb.l(this.c, b, c, this.I);
};
h.fb = function() {
  if (this.I === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Kc(this.c, this.I + 1, this.end);
};
h.R = function(a, b) {
  return this.c[this.I + b];
};
h.Y = function(a, b, c) {
  return 0 <= b && b < this.end - this.I ? this.c[this.I + b] : c;
};
h.Q = function() {
  return this.end - this.I;
};
var Lc = function() {
  function a(a, b, c) {
    return new Kc(a, b, c);
  }
  function b(a, b) {
    return new Kc(a, b, a.length);
  }
  function c(a) {
    return new Kc(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Mc(a, b, c, d) {
  this.Z = a;
  this.ia = b;
  this.o = c;
  this.m = d;
  this.j = 31850732;
  this.t = 1536;
}
h = Mc.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.o;
};
h.W = function() {
  if (1 < Ca(this.Z)) {
    return new Mc(lb(this.Z), this.ia, this.o, null);
  }
  var a = bb(this.ia);
  return null == a ? null : a;
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.S = function() {
  return D.a(this.Z, 0);
};
h.X = function() {
  return 1 < Ca(this.Z) ? new Mc(lb(this.Z), this.ia, this.o, null) : null == this.ia ? Kb : this.ia;
};
h.H = function() {
  return this;
};
h.Ya = function() {
  return this.Z;
};
h.Za = function() {
  return null == this.ia ? Kb : this.ia;
};
h.P = function(a, b) {
  return new Mc(this.Z, this.ia, b, this.m);
};
h.J = function(a, b) {
  return P(b, this);
};
h.Xa = function() {
  return null == this.ia ? null : this.ia;
};
Mc.prototype[ua] = function() {
  return O(this);
};
function Nc(a, b) {
  return 0 === Ca(a) ? b : new Mc(a, b, null, null);
}
function Oc(a, b) {
  a.add(b);
}
function Pc(a) {
  for (var b = [];;) {
    if (I(a)) {
      b.push(K(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function Qc(a, b) {
  if (Wb(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && I(c)) {
      c = M(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Rc = function Rc(b) {
  return null == b ? null : null == M(b) ? I(K(b)) : P(K(b), Rc(M(b)));
}, Tc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      if (4 < arguments.length) {
        for (var p = 0, q = Array(arguments.length - 4);p < q.length;) {
          q[p] = arguments[p + 4], ++p;
        }
        p = new J(q, 0);
      }
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, Rc(f)))));
    }
    a.w = 4;
    a.p = function(a) {
      var c = K(a);
      a = M(a);
      var d = K(a);
      a = M(a);
      var e = K(a);
      a = M(a);
      var n = K(a);
      a = L(a);
      return b(c, d, e, n, a);
    };
    a.n = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return P(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        var m = null;
        if (4 < arguments.length) {
          for (var m = 0, n = Array(arguments.length - 4);m < n.length;) {
            n[m] = arguments[m + 4], ++m;
          }
          m = new J(n, 0);
        }
        return d.n(c, f, g, k, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.w = 4;
  c.p = d.p;
  c.g = function(a) {
    return I(a);
  };
  c.a = function(a, b) {
    return P(a, b);
  };
  c.b = b;
  c.l = a;
  c.n = d.n;
  return c;
}(), Uc = function() {
  function a() {
    return gb(cc);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new J(m, 0);
      }
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = hb(a, c), w(d)) {
          c = K(d), d = M(d);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.p = function(a) {
      var c = K(a);
      a = M(a);
      var d = K(a);
      a = L(a);
      return b(c, d, a);
    };
    a.n = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return hb(b, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new J(k, 0);
        }
        return c.n(b, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.p = c.p;
  b.A = a;
  b.g = function(a) {
    return a;
  };
  b.a = function(a, b) {
    return hb(a, b);
  };
  b.n = c.n;
  return b;
}(), Vc = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      if (3 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 3);l < m.length;) {
          m[l] = arguments[l + 3], ++l;
        }
        l = new J(m, 0);
      }
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = jb(a, c, d), w(k)) {
          c = K(k), d = K(M(k)), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.w = 3;
    a.p = function(a) {
      var c = K(a);
      a = M(a);
      var g = K(a);
      a = M(a);
      var k = K(a);
      a = L(a);
      return b(c, g, k, a);
    };
    a.n = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return jb(a, d, e);
      default:
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new J(k, 0);
        }
        return b.n(a, d, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 3;
  a.p = b.p;
  a.b = function(a, b, e) {
    return jb(a, b, e);
  };
  a.n = b.n;
  return a;
}();
function Wc(a, b, c) {
  var d = I(c);
  if (0 === b) {
    return a.A ? a.A() : a.call(null);
  }
  c = E(d);
  var e = F(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = E(e), f = F(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = E(f), g = F(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = E(g), k = F(g);
  if (4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = E(k), l = F(k);
  if (5 === b) {
    return a.B ? a.B(c, d, e, f, g) : a.B ? a.B(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = E(l), m = F(l);
  if (6 === b) {
    return a.V ? a.V(c, d, e, f, g, k) : a.V ? a.V(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = E(m), n = F(m);
  if (7 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l) : a.ba ? a.ba(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = E(n), p = F(n);
  if (8 === b) {
    return a.ua ? a.ua(c, d, e, f, g, k, l, m) : a.ua ? a.ua(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = E(p), q = F(p);
  if (9 === b) {
    return a.va ? a.va(c, d, e, f, g, k, l, m, n) : a.va ? a.va(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = E(q), r = F(q);
  if (10 === b) {
    return a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p) : a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = E(r), t = F(r);
  if (11 === b) {
    return a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q) : a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var r = E(t), v = F(t);
  if (12 === b) {
    return a.la ? a.la(c, d, e, f, g, k, l, m, n, p, q, r) : a.la ? a.la(c, d, e, f, g, k, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  var t = E(v), x = F(v);
  if (13 === b) {
    return a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  var v = E(x), A = F(x);
  if (14 === b) {
    return a.na ? a.na(c, d, e, f, g, k, l, m, n, p, q, r, t, v) : a.na ? a.na(c, d, e, f, g, k, l, m, n, p, q, r, t, v) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, v);
  }
  var x = E(A), G = F(A);
  if (15 === b) {
    return a.oa ? a.oa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x) : a.oa ? a.oa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x);
  }
  var A = E(G), N = F(G);
  if (16 === b) {
    return a.pa ? a.pa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A) : a.pa ? a.pa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A);
  }
  var G = E(N), ba = F(N);
  if (17 === b) {
    return a.qa ? a.qa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G) : a.qa ? a.qa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G);
  }
  var N = E(ba), Ba = F(ba);
  if (18 === b) {
    return a.ra ? a.ra(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N) : a.ra ? a.ra(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N);
  }
  ba = E(Ba);
  Ba = F(Ba);
  if (19 === b) {
    return a.sa ? a.sa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba) : a.sa ? a.sa(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba);
  }
  var y = E(Ba);
  F(Ba);
  if (20 === b) {
    return a.ta ? a.ta(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba, y) : a.ta ? a.ta(c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba, y) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, v, x, A, G, N, ba, y);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var kc = function() {
  function a(a, b, c, d, e) {
    b = Tc.l(b, c, d, e);
    c = a.w;
    return a.p ? (d = Qc(b, c + 1), d <= c ? Wc(a, d, b) : a.p(b)) : a.apply(a, Pc(b));
  }
  function b(a, b, c, d) {
    b = Tc.b(b, c, d);
    c = a.w;
    return a.p ? (d = Qc(b, c + 1), d <= c ? Wc(a, d, b) : a.p(b)) : a.apply(a, Pc(b));
  }
  function c(a, b, c) {
    b = Tc.a(b, c);
    c = a.w;
    if (a.p) {
      var d = Qc(b, c + 1);
      return d <= c ? Wc(a, d, b) : a.p(b);
    }
    return a.apply(a, Pc(b));
  }
  function d(a, b) {
    var c = a.w;
    if (a.p) {
      var d = Qc(b, c + 1);
      return d <= c ? Wc(a, d, b) : a.p(b);
    }
    return a.apply(a, Pc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, r) {
      var t = null;
      if (5 < arguments.length) {
        for (var t = 0, v = Array(arguments.length - 5);t < v.length;) {
          v[t] = arguments[t + 5], ++t;
        }
        t = new J(v, 0);
      }
      return b.call(this, c, d, e, f, g, t);
    }
    function b(a, c, d, e, f, g) {
      c = P(c, P(d, P(e, P(f, Rc(g)))));
      d = a.w;
      return a.p ? (e = Qc(c, d + 1), e <= d ? Wc(a, e, c) : a.p(c)) : a.apply(a, Pc(c));
    }
    a.w = 5;
    a.p = function(a) {
      var c = K(a);
      a = M(a);
      var d = K(a);
      a = M(a);
      var e = K(a);
      a = M(a);
      var f = K(a);
      a = M(a);
      var g = K(a);
      a = L(a);
      return b(c, d, e, f, g, a);
    };
    a.n = b;
    return a;
  }(), e = function(e, k, l, m, n, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        var q = null;
        if (5 < arguments.length) {
          for (var q = 0, r = Array(arguments.length - 5);q < r.length;) {
            r[q] = arguments[q + 5], ++q;
          }
          q = new J(r, 0);
        }
        return f.n(e, k, l, m, n, q);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.w = 5;
  e.p = f.p;
  e.a = d;
  e.b = c;
  e.l = b;
  e.B = a;
  e.n = f.n;
  return e;
}();
function Xc(a, b) {
  for (;;) {
    if (null == I(b)) {
      return!0;
    }
    var c;
    c = K(b);
    c = a.g ? a.g(c) : a.call(null, c);
    if (w(c)) {
      c = a;
      var d = M(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
var Yc = function() {
  function a(a, b, c, d) {
    return new Hc(null, function() {
      var f = I(b), p = I(c), q = I(d);
      if (f && p && q) {
        var r = P, t;
        t = K(f);
        var v = K(p), x = K(q);
        t = a.b ? a.b(t, v, x) : a.call(null, t, v, x);
        f = r(t, e.l(a, L(f), L(p), L(q)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Hc(null, function() {
      var d = I(b), f = I(c);
      if (d && f) {
        var p = P, q;
        q = K(d);
        var r = K(f);
        q = a.a ? a.a(q, r) : a.call(null, q, r);
        d = p(q, e.b(a, L(d), L(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Hc(null, function() {
      var c = I(b);
      if (c) {
        if (pc(c)) {
          for (var d = mb(c), f = Q(d), p = new Jc(Array(f), 0), q = 0;;) {
            if (q < f) {
              Oc(p, function() {
                var b = D.a(d, q);
                return a.g ? a.g(b) : a.call(null, b);
              }()), q += 1;
            } else {
              break;
            }
          }
          return Nc(p.Z(), e.a(a, nb(c)));
        }
        return P(function() {
          var b = K(c);
          return a.g ? a.g(b) : a.call(null, b);
        }(), e.a(a, L(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var f = a.g ? a.g(e) : a.call(null, e);
          return b.a ? b.a(d, f) : b.call(null, d, f);
        }
        function d(a) {
          return b.g ? b.g(a) : b.call(null, a);
        }
        function e() {
          return b.A ? b.A() : b.call(null);
        }
        var f = null, q = function() {
          function c(a, b, e) {
            var f = null;
            if (2 < arguments.length) {
              for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
                g[f] = arguments[f + 2], ++f;
              }
              f = new J(g, 0);
            }
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = kc.b(a, e, f);
            return b.a ? b.a(c, e) : b.call(null, c, e);
          }
          c.w = 2;
          c.p = function(a) {
            var b = K(a);
            a = M(a);
            var c = K(a);
            a = L(a);
            return d(b, c, a);
          };
          c.n = d;
          return c;
        }(), f = function(a, b, f) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              var g = null;
              if (2 < arguments.length) {
                for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
                  k[g] = arguments[g + 2], ++g;
                }
                g = new J(k, 0);
              }
              return q.n(a, b, g);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.w = 2;
        f.p = q.p;
        f.A = e;
        f.g = d;
        f.a = c;
        f.n = q.n;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var r = null;
      if (4 < arguments.length) {
        for (var r = 0, t = Array(arguments.length - 4);r < t.length;) {
          t[r] = arguments[r + 4], ++r;
        }
        r = new J(t, 0);
      }
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, d, f, g) {
      var k = function v(a) {
        return new Hc(null, function() {
          var b = e.a(I, a);
          return Xc(yc, b) ? P(e.a(K, b), v(e.a(L, b))) : null;
        }, null, null);
      };
      return e.a(function() {
        return function(b) {
          return kc.a(a, b);
        };
      }(k), k(dc.n(g, f, bc([d, c], 0))));
    }
    a.w = 4;
    a.p = function(a) {
      var c = K(a);
      a = M(a);
      var d = K(a);
      a = M(a);
      var e = K(a);
      a = M(a);
      var f = K(a);
      a = L(a);
      return b(c, d, e, f, a);
    };
    a.n = b;
    return a;
  }(), e = function(e, k, l, m, n) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, m);
      default:
        var p = null;
        if (4 < arguments.length) {
          for (var p = 0, q = Array(arguments.length - 4);p < q.length;) {
            q[p] = arguments[p + 4], ++p;
          }
          p = new J(q, 0);
        }
        return f.n(e, k, l, m, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.w = 4;
  e.p = f.p;
  e.g = d;
  e.a = c;
  e.b = b;
  e.l = a;
  e.n = f.n;
  return e;
}(), Zc = function() {
  function a(a, b, c) {
    a && (a.t & 4 || a.mb) ? (b = zc.l(b, Uc, gb(a), c), b = ib(b), a = lc(b, mc(a))) : a = zc.l(b, dc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.t & 4 || a.mb) ? (c = wa.b(hb, gb(a), b), c = ib(c), c = lc(c, mc(a))) : c = wa.b(Da, a, b) : c = wa.b(dc, Kb, b);
    return c;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function $c(a, b) {
  this.v = a;
  this.c = b;
}
function ad(a) {
  return new $c(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function bd(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function cd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ad(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var dd = function dd(b, c, d, e) {
  var f = new $c(d.v, va(d.c)), g = b.h - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? dd(b, c - 5, d, e) : cd(null, c - 5, e), f.c[g] = b);
  return f;
};
function ed(a, b) {
  throw Error([C("No item "), C(a), C(" in vector of length "), C(b)].join(""));
}
function fd(a, b) {
  if (b >= bd(a)) {
    return a.U;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function gd(a, b) {
  return 0 <= b && b < a.h ? fd(a, b) : ed(b, a.h);
}
var hd = function hd(b, c, d, e, f) {
  var g = new $c(d.v, va(d.c));
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = hd(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
};
function id(a, b, c, d, e, f) {
  this.k = a;
  this.Va = b;
  this.c = c;
  this.ya = d;
  this.start = e;
  this.end = f;
}
id.prototype.Ua = function() {
  return this.k < this.end;
};
id.prototype.next = function() {
  32 === this.k - this.Va && (this.c = fd(this.ya, this.k), this.Va += 32);
  var a = this.c[this.k & 31];
  this.k += 1;
  return a;
};
function U(a, b, c, d, e, f) {
  this.o = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.U = e;
  this.m = f;
  this.j = 167668511;
  this.t = 8196;
}
h = U.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.K = function(a, b) {
  return Ja.b(this, b, null);
};
h.C = function(a, b, c) {
  return "number" === typeof b ? D.b(this, b, c) : c;
};
h.R = function(a, b) {
  return gd(this, b)[b & 31];
};
h.Y = function(a, b, c) {
  return 0 <= b && b < this.h ? fd(this, b)[b & 31] : c;
};
h.bb = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return bd(this) <= b ? (a = va(this.U), a[b & 31] = c, new U(this.o, this.h, this.shift, this.root, a, null)) : new U(this.o, this.h, this.shift, hd(this, this.shift, this.root, b, c), this.U, null);
  }
  if (b === this.h) {
    return Da(this, c);
  }
  throw Error([C("Index "), C(b), C(" out of bounds  [0,"), C(this.h), C("]")].join(""));
};
h.Ja = function() {
  var a = this.h;
  return new id(0, 0, 0 < Q(this) ? fd(this, 0) : null, this, 0, a);
};
h.L = function() {
  return this.o;
};
h.Q = function() {
  return this.h;
};
h.$a = function() {
  return D.a(this, 0);
};
h.ab = function() {
  return D.a(this, 1);
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  if (b instanceof U) {
    if (this.h === Q(b)) {
      for (var c = qb(this), d = qb(b);;) {
        if (w(c.Ua())) {
          var e = c.next(), f = d.next();
          if (!Lb.a(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Zb(this, b);
  }
};
h.Oa = function() {
  var a = this;
  return new jd(a.h, a.shift, function() {
    var b = a.root;
    return kd.g ? kd.g(b) : kd.call(null, b);
  }(), function() {
    var b = a.U;
    return ld.g ? ld.g(b) : ld.call(null, b);
  }());
};
h.N = function(a, b) {
  return Ub.a(this, b);
};
h.O = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.h) {
      var e = fd(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.a ? b.a(d, g) : b.call(null, d, g);
            if (Sb(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (Sb(e)) {
        return b = e, Tb.g ? Tb.g(b) : Tb.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.Ia = function(a, b, c) {
  if ("number" === typeof b) {
    return Qa(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.H = function() {
  if (0 === this.h) {
    return null;
  }
  if (32 >= this.h) {
    return new J(this.U, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return md.l ? md.l(this, a, 0, 0) : md.call(null, this, a, 0, 0);
};
h.P = function(a, b) {
  return new U(b, this.h, this.shift, this.root, this.U, this.m);
};
h.J = function(a, b) {
  if (32 > this.h - bd(this)) {
    for (var c = this.U.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.U[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new U(this.o, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = ad(null), d.c[0] = this.root, e = cd(null, this.shift, new $c(null, this.U)), d.c[1] = e) : d = dd(this, this.shift, this.root, new $c(null, this.U));
  return new U(this.o, this.h + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, c);
      case 3:
        return this.Y(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.R(null, c);
  };
  a.b = function(a, c, d) {
    return this.Y(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.g = function(a) {
  return this.R(null, a);
};
h.a = function(a, b) {
  return this.Y(null, a, b);
};
var nd = new $c(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), cc = new U(null, 0, 5, nd, [], Pb);
U.prototype[ua] = function() {
  return O(this);
};
function od(a, b, c, d, e, f) {
  this.aa = a;
  this.wa = b;
  this.k = c;
  this.I = d;
  this.o = e;
  this.m = f;
  this.j = 32375020;
  this.t = 1536;
}
h = od.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.o;
};
h.W = function() {
  if (this.I + 1 < this.wa.length) {
    var a;
    a = this.aa;
    var b = this.wa, c = this.k, d = this.I + 1;
    a = md.l ? md.l(a, b, c, d) : md.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return pb(this);
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  var c = this;
  return Ub.a(function() {
    var a = c.aa, b = c.k + c.I, f = Q(c.aa);
    return pd.b ? pd.b(a, b, f) : pd.call(null, a, b, f);
  }(), b);
};
h.O = function(a, b, c) {
  var d = this;
  return Ub.b(function() {
    var a = d.aa, b = d.k + d.I, c = Q(d.aa);
    return pd.b ? pd.b(a, b, c) : pd.call(null, a, b, c);
  }(), b, c);
};
h.S = function() {
  return this.wa[this.I];
};
h.X = function() {
  if (this.I + 1 < this.wa.length) {
    var a;
    a = this.aa;
    var b = this.wa, c = this.k, d = this.I + 1;
    a = md.l ? md.l(a, b, c, d) : md.call(null, a, b, c, d);
    return null == a ? Kb : a;
  }
  return nb(this);
};
h.H = function() {
  return this;
};
h.Ya = function() {
  return Lc.a(this.wa, this.I);
};
h.Za = function() {
  var a = this.k + this.wa.length;
  if (a < Ca(this.aa)) {
    var b = this.aa, c = fd(this.aa, a);
    return md.l ? md.l(b, c, a, 0) : md.call(null, b, c, a, 0);
  }
  return Kb;
};
h.P = function(a, b) {
  var c = this.aa, d = this.wa, e = this.k, f = this.I;
  return md.B ? md.B(c, d, e, f, b) : md.call(null, c, d, e, f, b);
};
h.J = function(a, b) {
  return P(b, this);
};
h.Xa = function() {
  var a = this.k + this.wa.length;
  if (a < Ca(this.aa)) {
    var b = this.aa, c = fd(this.aa, a);
    return md.l ? md.l(b, c, a, 0) : md.call(null, b, c, a, 0);
  }
  return null;
};
od.prototype[ua] = function() {
  return O(this);
};
var md = function() {
  function a(a, b, c, d, l) {
    return new od(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new od(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new od(a, gd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.l = b;
  d.B = a;
  return d;
}();
function qd(a, b, c, d, e) {
  this.o = a;
  this.ya = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.j = 167666463;
  this.t = 8192;
}
h = qd.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.K = function(a, b) {
  return Ja.b(this, b, null);
};
h.C = function(a, b, c) {
  return "number" === typeof b ? D.b(this, b, c) : c;
};
h.R = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ed(b, this.end - this.start) : D.a(this.ya, this.start + b);
};
h.Y = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : D.b(this.ya, this.start + b, c);
};
h.bb = function(a, b, c) {
  var d = this.start + b;
  a = this.o;
  c = hc.b(this.ya, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return rd.B ? rd.B(a, c, b, d, null) : rd.call(null, a, c, b, d, null);
};
h.L = function() {
  return this.o;
};
h.Q = function() {
  return this.end - this.start;
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return Ub.a(this, b);
};
h.O = function(a, b, c) {
  return Ub.b(this, b, c);
};
h.Ia = function(a, b, c) {
  if ("number" === typeof b) {
    return Qa(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.H = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(D.a(a.ya, e), new Hc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.P = function(a, b) {
  var c = this.ya, d = this.start, e = this.end, f = this.m;
  return rd.B ? rd.B(b, c, d, e, f) : rd.call(null, b, c, d, e, f);
};
h.J = function(a, b) {
  var c = this.o, d = Qa(this.ya, this.end, b), e = this.start, f = this.end + 1;
  return rd.B ? rd.B(c, d, e, f, null) : rd.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, c);
      case 3:
        return this.Y(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.R(null, c);
  };
  a.b = function(a, c, d) {
    return this.Y(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.g = function(a) {
  return this.R(null, a);
};
h.a = function(a, b) {
  return this.Y(null, a, b);
};
qd.prototype[ua] = function() {
  return O(this);
};
function rd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof qd) {
      c = b.start + c, d = b.start + d, b = b.ya;
    } else {
      var f = Q(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new qd(a, b, c, d, e);
    }
  }
}
var pd = function() {
  function a(a, b, c) {
    return rd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, Q(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function sd(a, b) {
  return a === b.v ? b : new $c(a, va(b.c));
}
function kd(a) {
  return new $c({}, va(a.c));
}
function ld(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  rc(a, 0, b, 0, a.length);
  return b;
}
var td = function td(b, c, d, e) {
  d = sd(b.root.v, d);
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? td(b, c - 5, g, e) : cd(b.root.v, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function jd(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.U = d;
  this.j = 275;
  this.t = 88;
}
h = jd.prototype;
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.C(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.K(null, c);
  };
  a.b = function(a, c, d) {
    return this.C(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.g = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.C(null, a, b);
};
h.K = function(a, b) {
  return Ja.b(this, b, null);
};
h.C = function(a, b, c) {
  return "number" === typeof b ? D.b(this, b, c) : c;
};
h.R = function(a, b) {
  if (this.root.v) {
    return gd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.Y = function(a, b, c) {
  return 0 <= b && b < this.h ? D.a(this, b) : c;
};
h.Q = function() {
  if (this.root.v) {
    return this.h;
  }
  throw Error("count after persistent!");
};
h.hb = function(a, b, c) {
  var d = this;
  if (d.root.v) {
    if (0 <= b && b < d.h) {
      return bd(this) <= b ? d.U[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = sd(d.root.v, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.h) {
      return hb(this, c);
    }
    throw Error([C("Index "), C(b), C(" out of bounds for TransientVector of length"), C(d.h)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.Ka = function(a, b, c) {
  if ("number" === typeof b) {
    return kb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.Sa = function(a, b) {
  if (this.root.v) {
    if (32 > this.h - bd(this)) {
      this.U[this.h & 31] = b;
    } else {
      var c = new $c(this.root.v, this.U), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.U = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = cd(this.root.v, this.shift, c);
        this.root = new $c(this.root.v, d);
        this.shift = e;
      } else {
        this.root = td(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Ta = function() {
  if (this.root.v) {
    this.root.v = null;
    var a = this.h - bd(this), b = Array(a);
    rc(this.U, 0, b, 0, a);
    return new U(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function ud() {
  this.t = 0;
  this.j = 2097152;
}
ud.prototype.q = function() {
  return!1;
};
ud.prototype.equiv = function(a) {
  return this.q(null, a);
};
var vd = new ud;
function wd(a, b) {
  return uc(nc(b) ? Q(a) === Q(b) ? Xc(yc, Yc.a(function(a) {
    return Lb.a(fc.b(b, K(a), vd), K(M(a)));
  }, a)) : null : null);
}
function xd(a) {
  this.r = a;
}
xd.prototype.next = function() {
  if (null != this.r) {
    var a = K(this.r), b = R.b(a, 0, null), a = R.b(a, 1, null);
    this.r = M(this.r);
    return{done:!1, value:[b, a]};
  }
  return{done:!0, value:null};
};
function yd(a) {
  return new xd(I(a));
}
function zd(a, b) {
  var c = a.c;
  if (b instanceof T) {
    a: {
      for (var d = c.length, e = b.ha, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof T && e === g.ha) {
          c = f;
          break a;
        }
        f += 2;
      }
    }
  } else {
    if (d = "string" == typeof b, w(w(d) ? d : "number" === typeof b)) {
      a: {
        for (d = c.length, e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          e += 2;
        }
      }
    } else {
      if (null == b) {
        a: {
          for (d = c.length, e = 0;;) {
            if (d <= e) {
              c = -1;
              break a;
            }
            if (null == c[e]) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        a: {
          for (d = c.length, e = 0;;) {
            if (d <= e) {
              c = -1;
              break a;
            }
            if (Lb.a(b, c[e])) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      }
    }
  }
  return c;
}
function Ad(a, b, c) {
  this.c = a;
  this.k = b;
  this.da = c;
  this.t = 0;
  this.j = 32374990;
}
h = Ad.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.da;
};
h.W = function() {
  return this.k < this.c.length - 2 ? new Ad(this.c, this.k + 2, this.da) : null;
};
h.Q = function() {
  return(this.c.length - this.k) / 2;
};
h.G = function() {
  return Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return new U(null, 2, 5, nd, [this.c[this.k], this.c[this.k + 1]], null);
};
h.X = function() {
  return this.k < this.c.length - 2 ? new Ad(this.c, this.k + 2, this.da) : Kb;
};
h.H = function() {
  return this;
};
h.P = function(a, b) {
  return new Ad(this.c, this.k, b);
};
h.J = function(a, b) {
  return P(b, this);
};
Ad.prototype[ua] = function() {
  return O(this);
};
function Bd(a, b, c) {
  this.c = a;
  this.k = b;
  this.h = c;
}
Bd.prototype.Ua = function() {
  return this.k < this.h;
};
Bd.prototype.next = function() {
  var a = new U(null, 2, 5, nd, [this.c[this.k], this.c[this.k + 1]], null);
  this.k += 2;
  return a;
};
function tb(a, b, c, d) {
  this.o = a;
  this.h = b;
  this.c = c;
  this.m = d;
  this.j = 16647951;
  this.t = 8196;
}
h = tb.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return O(Cd.g ? Cd.g(this) : Cd.call(null, this));
};
h.entries = function() {
  return yd(I(this));
};
h.values = function() {
  return O(Dd.g ? Dd.g(this) : Dd.call(null, this));
};
h.has = function(a) {
  return fc.b(this, a, tc) === tc ? !1 : !0;
};
h.get = function(a, b) {
  return this.C(null, a, b);
};
h.forEach = function(a) {
  for (var b = I(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.R(null, e), g = R.b(f, 0, null), f = R.b(f, 1, null);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = I(b)) {
        pc(b) ? (c = mb(b), b = nb(b), g = c, d = Q(c), c = g) : (c = K(b), g = R.b(c, 0, null), c = f = R.b(c, 1, null), a.a ? a.a(c, g) : a.call(null, c, g), b = M(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.K = function(a, b) {
  return Ja.b(this, b, null);
};
h.C = function(a, b, c) {
  a = zd(this, b);
  return-1 === a ? c : this.c[a + 1];
};
h.Ja = function() {
  return new Bd(this.c, 0, 2 * this.h);
};
h.L = function() {
  return this.o;
};
h.Q = function() {
  return this.h;
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Qb(this);
};
h.q = function(a, b) {
  if (b && (b.j & 1024 || b.pb)) {
    var c = this.c.length;
    if (this.h === b.Q(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.C(null, this.c[d], tc);
          if (e !== tc) {
            if (Lb.a(this.c[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return wd(this, b);
  }
};
h.Oa = function() {
  return new Fd({}, this.c.length, va(this.c));
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.Ia = function(a, b, c) {
  a = zd(this, b);
  if (-1 === a) {
    if (this.h < Gd) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new tb(this.o, this.h + 1, e, null);
    }
    return Wa(Ka(Zc.a(gc, this), b, c), this.o);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = va(this.c);
  b[a + 1] = c;
  return new tb(this.o, this.h, b, null);
};
h.H = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Ad(a, 0, null) : null;
};
h.P = function(a, b) {
  return new tb(b, this.h, this.c, this.m);
};
h.J = function(a, b) {
  if (oc(b)) {
    return Ka(this, D.a(b, 0), D.a(b, 1));
  }
  for (var c = this, d = I(b);;) {
    if (null == d) {
      return c;
    }
    var e = K(d);
    if (oc(e)) {
      c = Ka(c, D.a(e, 0), D.a(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.C(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.K(null, c);
  };
  a.b = function(a, c, d) {
    return this.C(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.g = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.C(null, a, b);
};
var Hd = new tb(null, 0, [], Rb), Gd = 8;
tb.prototype[ua] = function() {
  return O(this);
};
function Fd(a, b, c) {
  this.Ea = a;
  this.Ha = b;
  this.c = c;
  this.t = 56;
  this.j = 258;
}
h = Fd.prototype;
h.Ka = function(a, b, c) {
  var d = this;
  if (w(d.Ea)) {
    a = zd(this, b);
    if (-1 === a) {
      return d.Ha + 2 <= 2 * Gd ? (d.Ha += 2, d.c.push(b), d.c.push(c), this) : Vc.b(function() {
        var a = d.Ha, b = d.c;
        return Id.a ? Id.a(a, b) : Id.call(null, a, b);
      }(), b, c);
    }
    c !== d.c[a + 1] && (d.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.Sa = function(a, b) {
  if (w(this.Ea)) {
    if (b ? b.j & 2048 || b.qb || (b.j ? 0 : z(Ma, b)) : z(Ma, b)) {
      return jb(this, Jd.g ? Jd.g(b) : Jd.call(null, b), Kd.g ? Kd.g(b) : Kd.call(null, b));
    }
    for (var c = I(b), d = this;;) {
      var e = K(c);
      if (w(e)) {
        var f = e, c = M(c), d = jb(d, function() {
          var a = f;
          return Jd.g ? Jd.g(a) : Jd.call(null, a);
        }(), function() {
          var a = f;
          return Kd.g ? Kd.g(a) : Kd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Ta = function() {
  if (w(this.Ea)) {
    return this.Ea = !1, new tb(null, Ac(this.Ha), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.K = function(a, b) {
  return Ja.b(this, b, null);
};
h.C = function(a, b, c) {
  if (w(this.Ea)) {
    return a = zd(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Q = function() {
  if (w(this.Ea)) {
    return Ac(this.Ha);
  }
  throw Error("count after persistent!");
};
function Id(a, b) {
  for (var c = gb(gc), d = 0;;) {
    if (d < a) {
      c = Vc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ld() {
  this.ga = !1;
}
function Md(a, b) {
  return a === b ? !0 : a === b || a instanceof T && b instanceof T && a.ha === b.ha ? !0 : Lb.a(a, b);
}
var Nd = function() {
  function a(a, b, c, g, k) {
    a = va(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = va(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.B = a;
  return c;
}(), Od = function() {
  function a(a, b, c, g, k, l) {
    a = a.Fa(b);
    a.c[c] = g;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Fa(b);
    a.c[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.V = a;
  return c;
}();
function Pd(a, b, c) {
  this.v = a;
  this.F = b;
  this.c = c;
}
h = Pd.prototype;
h.Fa = function(a) {
  if (a === this.v) {
    return this;
  }
  var b = Bc(this.F), c = Array(0 > b ? 4 : 2 * (b + 1));
  rc(this.c, 0, c, 0, 2 * b);
  return new Pd(a, this.F, c);
};
h.La = function() {
  var a = this.c;
  return Qd.g ? Qd.g(a) : Qd.call(null, a);
};
h.Da = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.F & e)) {
    return d;
  }
  var f = Bc(this.F & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Da(a + 5, b, c, d) : Md(c, e) ? f : d;
};
h.fa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Bc(this.F & g - 1);
  if (0 === (this.F & g)) {
    var l = Bc(this.F);
    if (2 * l < this.c.length) {
      var m = this.Fa(a), n = m.c;
      f.ga = !0;
      sc(n, 2 * k, n, 2 * (k + 1), 2 * (l - k));
      n[2 * k] = d;
      n[2 * k + 1] = e;
      m.F |= g;
      return m;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = Rd.fa(a, b + 5, c, d, e, f);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.F >>> k & 1) && (g[k] = null != this.c[m] ? Rd.fa(a, b + 5, Ib(this.c[m]), this.c[m], this.c[m + 1], f) : this.c[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new Sd(a, l + 1, g);
    }
    n = Array(2 * (l + 4));
    rc(this.c, 0, n, 0, 2 * k);
    n[2 * k] = d;
    n[2 * k + 1] = e;
    rc(this.c, 2 * k, n, 2 * (k + 1), 2 * (l - k));
    f.ga = !0;
    m = this.Fa(a);
    m.c = n;
    m.F |= g;
    return m;
  }
  var p = this.c[2 * k], q = this.c[2 * k + 1];
  if (null == p) {
    return l = q.fa(a, b + 5, c, d, e, f), l === q ? this : Od.l(this, a, 2 * k + 1, l);
  }
  if (Md(d, p)) {
    return e === q ? this : Od.l(this, a, 2 * k + 1, e);
  }
  f.ga = !0;
  return Od.V(this, a, 2 * k, null, 2 * k + 1, function() {
    var f = b + 5;
    return Td.ba ? Td.ba(a, f, p, q, c, d, e) : Td.call(null, a, f, p, q, c, d, e);
  }());
};
h.ea = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Bc(this.F & f - 1);
  if (0 === (this.F & f)) {
    var k = Bc(this.F);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = Rd.ea(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.F >>> g & 1) && (f[g] = null != this.c[l] ? Rd.ea(a + 5, Ib(this.c[l]), this.c[l], this.c[l + 1], e) : this.c[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new Sd(null, k + 1, f);
    }
    l = Array(2 * (k + 1));
    rc(this.c, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    rc(this.c, 2 * g, l, 2 * (g + 1), 2 * (k - g));
    e.ga = !0;
    return new Pd(null, this.F | f, l);
  }
  var m = this.c[2 * g], n = this.c[2 * g + 1];
  if (null == m) {
    return k = n.ea(a + 5, b, c, d, e), k === n ? this : new Pd(null, this.F, Nd.b(this.c, 2 * g + 1, k));
  }
  if (Md(c, m)) {
    return d === n ? this : new Pd(null, this.F, Nd.b(this.c, 2 * g + 1, d));
  }
  e.ga = !0;
  return new Pd(null, this.F, Nd.B(this.c, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return Td.V ? Td.V(e, m, n, b, c, d) : Td.call(null, e, m, n, b, c, d);
  }()));
};
var Rd = new Pd(null, 0, []);
function Sd(a, b, c) {
  this.v = a;
  this.h = b;
  this.c = c;
}
h = Sd.prototype;
h.Fa = function(a) {
  return a === this.v ? this : new Sd(a, this.h, va(this.c));
};
h.La = function() {
  var a = this.c;
  return Ud.g ? Ud.g(a) : Ud.call(null, a);
};
h.Da = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Da(a + 5, b, c, d) : d;
};
h.fa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = Od.l(this, a, g, Rd.fa(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = k.fa(a, b + 5, c, d, e, f);
  return b === k ? this : Od.l(this, a, g, b);
};
h.ea = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new Sd(null, this.h + 1, Nd.b(this.c, f, Rd.ea(a + 5, b, c, d, e)));
  }
  a = g.ea(a + 5, b, c, d, e);
  return a === g ? this : new Sd(null, this.h, Nd.b(this.c, f, a));
};
function Vd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Md(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Wd(a, b, c, d) {
  this.v = a;
  this.za = b;
  this.h = c;
  this.c = d;
}
h = Wd.prototype;
h.Fa = function(a) {
  if (a === this.v) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  rc(this.c, 0, b, 0, 2 * this.h);
  return new Wd(a, this.za, this.h, b);
};
h.La = function() {
  var a = this.c;
  return Qd.g ? Qd.g(a) : Qd.call(null, a);
};
h.Da = function(a, b, c, d) {
  a = Vd(this.c, this.h, c);
  return 0 > a ? d : Md(c, this.c[a]) ? this.c[a + 1] : d;
};
h.fa = function(a, b, c, d, e, f) {
  if (c === this.za) {
    b = Vd(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return a = Od.V(this, a, 2 * this.h, d, 2 * this.h + 1, e), f.ga = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      rc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ga = !0;
      f = this.h + 1;
      a === this.v ? (this.c = b, this.h = f, a = this) : a = new Wd(this.v, this.za, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Od.l(this, a, b + 1, e);
  }
  return(new Pd(a, 1 << (this.za >>> b & 31), [null, this, null, null])).fa(a, b, c, d, e, f);
};
h.ea = function(a, b, c, d, e) {
  return b === this.za ? (a = Vd(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), rc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ga = !0, new Wd(null, this.za, this.h + 1, b)) : Lb.a(this.c[a], d) ? this : new Wd(null, this.za, this.h, Nd.b(this.c, a + 1, d))) : (new Pd(null, 1 << (this.za >>> a & 31), [null, this])).ea(a, b, c, d, e);
};
var Td = function() {
  function a(a, b, c, g, k, l, m) {
    var n = Ib(c);
    if (n === k) {
      return new Wd(null, n, 2, [c, g, l, m]);
    }
    var p = new Ld;
    return Rd.fa(a, b, n, c, g, p).fa(a, b, k, l, m, p);
  }
  function b(a, b, c, g, k, l) {
    var m = Ib(b);
    if (m === g) {
      return new Wd(null, m, 2, [b, c, k, l]);
    }
    var n = new Ld;
    return Rd.ea(a, m, b, c, n).ea(a, g, k, l, n);
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.V = b;
  c.ba = a;
  return c;
}();
function Xd(a, b, c, d, e) {
  this.o = a;
  this.Aa = b;
  this.k = c;
  this.r = d;
  this.m = e;
  this.t = 0;
  this.j = 32374860;
}
h = Xd.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.o;
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return null == this.r ? new U(null, 2, 5, nd, [this.Aa[this.k], this.Aa[this.k + 1]], null) : K(this.r);
};
h.X = function() {
  if (null == this.r) {
    var a = this.Aa, b = this.k + 2;
    return Qd.b ? Qd.b(a, b, null) : Qd.call(null, a, b, null);
  }
  var a = this.Aa, b = this.k, c = M(this.r);
  return Qd.b ? Qd.b(a, b, c) : Qd.call(null, a, b, c);
};
h.H = function() {
  return this;
};
h.P = function(a, b) {
  return new Xd(b, this.Aa, this.k, this.r, this.m);
};
h.J = function(a, b) {
  return P(b, this);
};
Xd.prototype[ua] = function() {
  return O(this);
};
var Qd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Xd(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (w(g) && (g = g.La(), w(g))) {
            return new Xd(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Xd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.b = a;
  return c;
}();
function Yd(a, b, c, d, e) {
  this.o = a;
  this.Aa = b;
  this.k = c;
  this.r = d;
  this.m = e;
  this.t = 0;
  this.j = 32374860;
}
h = Yd.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.o;
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return K(this.r);
};
h.X = function() {
  var a = this.Aa, b = this.k, c = M(this.r);
  return Ud.l ? Ud.l(null, a, b, c) : Ud.call(null, null, a, b, c);
};
h.H = function() {
  return this;
};
h.P = function(a, b) {
  return new Yd(b, this.Aa, this.k, this.r, this.m);
};
h.J = function(a, b) {
  return P(b, this);
};
Yd.prototype[ua] = function() {
  return O(this);
};
var Ud = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (w(k) && (k = k.La(), w(k))) {
            return new Yd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Yd(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.l = a;
  return c;
}();
function Zd(a, b, c, d, e, f) {
  this.o = a;
  this.h = b;
  this.root = c;
  this.$ = d;
  this.ca = e;
  this.m = f;
  this.j = 16123663;
  this.t = 8196;
}
h = Zd.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return O(Cd.g ? Cd.g(this) : Cd.call(null, this));
};
h.entries = function() {
  return yd(I(this));
};
h.values = function() {
  return O(Dd.g ? Dd.g(this) : Dd.call(null, this));
};
h.has = function(a) {
  return fc.b(this, a, tc) === tc ? !1 : !0;
};
h.get = function(a, b) {
  return this.C(null, a, b);
};
h.forEach = function(a) {
  for (var b = I(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.R(null, e), g = R.b(f, 0, null), f = R.b(f, 1, null);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = I(b)) {
        pc(b) ? (c = mb(b), b = nb(b), g = c, d = Q(c), c = g) : (c = K(b), g = R.b(c, 0, null), c = f = R.b(c, 1, null), a.a ? a.a(c, g) : a.call(null, c, g), b = M(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.K = function(a, b) {
  return Ja.b(this, b, null);
};
h.C = function(a, b, c) {
  return null == b ? this.$ ? this.ca : c : null == this.root ? c : this.root.Da(0, Ib(b), b, c);
};
h.L = function() {
  return this.o;
};
h.Q = function() {
  return this.h;
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Qb(this);
};
h.q = function(a, b) {
  return wd(this, b);
};
h.Oa = function() {
  return new $d({}, this.root, this.h, this.$, this.ca);
};
h.Ia = function(a, b, c) {
  if (null == b) {
    return this.$ && c === this.ca ? this : new Zd(this.o, this.$ ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new Ld;
  b = (null == this.root ? Rd : this.root).ea(0, Ib(b), b, c, a);
  return b === this.root ? this : new Zd(this.o, a.ga ? this.h + 1 : this.h, b, this.$, this.ca, null);
};
h.H = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.La() : null;
    return this.$ ? P(new U(null, 2, 5, nd, [null, this.ca], null), a) : a;
  }
  return null;
};
h.P = function(a, b) {
  return new Zd(b, this.h, this.root, this.$, this.ca, this.m);
};
h.J = function(a, b) {
  if (oc(b)) {
    return Ka(this, D.a(b, 0), D.a(b, 1));
  }
  for (var c = this, d = I(b);;) {
    if (null == d) {
      return c;
    }
    var e = K(d);
    if (oc(e)) {
      c = Ka(c, D.a(e, 0), D.a(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.C(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.K(null, c);
  };
  a.b = function(a, c, d) {
    return this.C(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.g = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.C(null, a, b);
};
var gc = new Zd(null, 0, null, !1, null, Rb);
Zd.prototype[ua] = function() {
  return O(this);
};
function $d(a, b, c, d, e) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.$ = d;
  this.ca = e;
  this.t = 56;
  this.j = 258;
}
h = $d.prototype;
h.Ka = function(a, b, c) {
  return ae(this, b, c);
};
h.Sa = function(a, b) {
  return be(this, b);
};
h.Ta = function() {
  var a;
  if (this.v) {
    this.v = null, a = new Zd(null, this.count, this.root, this.$, this.ca, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.K = function(a, b) {
  return null == b ? this.$ ? this.ca : null : null == this.root ? null : this.root.Da(0, Ib(b), b);
};
h.C = function(a, b, c) {
  return null == b ? this.$ ? this.ca : c : null == this.root ? c : this.root.Da(0, Ib(b), b, c);
};
h.Q = function() {
  if (this.v) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function be(a, b) {
  if (a.v) {
    if (b ? b.j & 2048 || b.qb || (b.j ? 0 : z(Ma, b)) : z(Ma, b)) {
      return ae(a, Jd.g ? Jd.g(b) : Jd.call(null, b), Kd.g ? Kd.g(b) : Kd.call(null, b));
    }
    for (var c = I(b), d = a;;) {
      var e = K(c);
      if (w(e)) {
        var f = e, c = M(c), d = ae(d, function() {
          var a = f;
          return Jd.g ? Jd.g(a) : Jd.call(null, a);
        }(), function() {
          var a = f;
          return Kd.g ? Kd.g(a) : Kd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function ae(a, b, c) {
  if (a.v) {
    if (null == b) {
      a.ca !== c && (a.ca = c), a.$ || (a.count += 1, a.$ = !0);
    } else {
      var d = new Ld;
      b = (null == a.root ? Rd : a.root).fa(a.v, 0, Ib(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ga && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function ce(a, b) {
  this.T = a;
  this.da = b;
  this.t = 0;
  this.j = 32374988;
}
h = ce.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.da;
};
h.W = function() {
  var a = this.T, a = (a ? a.j & 128 || a.Qa || (a.j ? 0 : z(Ha, a)) : z(Ha, a)) ? this.T.W(null) : M(this.T);
  return null == a ? null : new ce(a, this.da);
};
h.G = function() {
  return Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return this.T.S(null).$a();
};
h.X = function() {
  var a = this.T, a = (a ? a.j & 128 || a.Qa || (a.j ? 0 : z(Ha, a)) : z(Ha, a)) ? this.T.W(null) : M(this.T);
  return null != a ? new ce(a, this.da) : Kb;
};
h.H = function() {
  return this;
};
h.P = function(a, b) {
  return new ce(this.T, b);
};
h.J = function(a, b) {
  return P(b, this);
};
ce.prototype[ua] = function() {
  return O(this);
};
function Cd(a) {
  return(a = I(a)) ? new ce(a, null) : null;
}
function Jd(a) {
  return Na(a);
}
function de(a, b) {
  this.T = a;
  this.da = b;
  this.t = 0;
  this.j = 32374988;
}
h = de.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.L = function() {
  return this.da;
};
h.W = function() {
  var a = this.T, a = (a ? a.j & 128 || a.Qa || (a.j ? 0 : z(Ha, a)) : z(Ha, a)) ? this.T.W(null) : M(this.T);
  return null == a ? null : new de(a, this.da);
};
h.G = function() {
  return Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.b(b, c, this);
};
h.S = function() {
  return this.T.S(null).ab();
};
h.X = function() {
  var a = this.T, a = (a ? a.j & 128 || a.Qa || (a.j ? 0 : z(Ha, a)) : z(Ha, a)) ? this.T.W(null) : M(this.T);
  return null != a ? new de(a, this.da) : Kb;
};
h.H = function() {
  return this;
};
h.P = function(a, b) {
  return new de(this.T, b);
};
h.J = function(a, b) {
  return P(b, this);
};
de.prototype[ua] = function() {
  return O(this);
};
function Dd(a) {
  return(a = I(a)) ? new de(a, null) : null;
}
function Kd(a) {
  return Oa(a);
}
function ee(a) {
  if (a && (a.t & 4096 || a.sb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([C("Doesn't support name: "), C(a)].join(""));
}
function fe(a, b, c) {
  this.k = a;
  this.end = b;
  this.step = c;
}
fe.prototype.Ua = function() {
  return 0 < this.step ? this.k < this.end : this.k > this.end;
};
fe.prototype.next = function() {
  var a = this.k;
  this.k += this.step;
  return a;
};
function ge(a, b, c, d, e) {
  this.o = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.j = 32375006;
  this.t = 8192;
}
h = ge.prototype;
h.toString = function() {
  return sb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.R = function(a, b) {
  if (b < Ca(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.Y = function(a, b, c) {
  return b < Ca(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Ja = function() {
  return new fe(this.start, this.end, this.step);
};
h.L = function() {
  return this.o;
};
h.W = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ge(this.o, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ge(this.o, this.start + this.step, this.end, this.step, null) : null;
};
h.Q = function() {
  var a = bb(this);
  if (!w(a)) {
    return 0;
  }
  a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
h.G = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Ob(this);
};
h.q = function(a, b) {
  return Zb(this, b);
};
h.N = function(a, b) {
  return Ub.a(this, b);
};
h.O = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (Sb(c)) {
        return b = c, Tb.g ? Tb.g(b) : Tb.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
h.S = function() {
  return null == bb(this) ? null : this.start;
};
h.X = function() {
  return null != bb(this) ? new ge(this.o, this.start + this.step, this.end, this.step, null) : Kb;
};
h.H = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.P = function(a, b) {
  return new ge(b, this.start, this.end, this.step, this.m);
};
h.J = function(a, b) {
  return P(b, this);
};
ge.prototype[ua] = function() {
  return O(this);
};
var he = function() {
  function a(a, b, c) {
    return new ge(null, a, b, c, null);
  }
  function b(a, b) {
    return e.b(a, b, 1);
  }
  function c(a) {
    return e.b(0, a, 1);
  }
  function d() {
    return e.b(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.A = d;
  e.g = c;
  e.a = b;
  e.b = a;
  return e;
}(), ie = function() {
  function a(a, b) {
    for (;;) {
      if (I(b) && 0 < a) {
        var c = a - 1, g = M(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (I(a)) {
        a = M(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.a = a;
  return c;
}(), je = function() {
  function a(a, b) {
    ie.a(a, b);
    return b;
  }
  function b(a) {
    ie.g(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.a = a;
  return c;
}();
function ke(a, b, c, d, e, f, g) {
  var k = ka;
  ka = null == ka ? null : ka - 1;
  try {
    if (null != ka && 0 > ka) {
      return H(a, "#");
    }
    H(a, c);
    if (0 === yb.g(f)) {
      I(g) && H(a, function() {
        var a = le.g(f);
        return w(a) ? a : "...";
      }());
    } else {
      if (I(g)) {
        var l = K(g);
        b.b ? b.b(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = M(g), n = yb.g(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          I(m) && 0 === n && (H(a, d), H(a, function() {
            var a = le.g(f);
            return w(a) ? a : "...";
          }()));
          break;
        } else {
          H(a, d);
          var p = K(m);
          c = a;
          g = f;
          b.b ? b.b(p, c, g) : b.call(null, p, c, g);
          var q = M(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return H(a, e);
  } finally {
    ka = k;
  }
}
var me = function() {
  function a(a, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new J(f, 0);
    }
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = I(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.R(null, k);
        H(a, l);
        k += 1;
      } else {
        if (e = I(e)) {
          f = e, pc(f) ? (e = mb(f), g = nb(f), f = e, l = Q(e), e = g, g = l) : (l = K(f), H(a, l), e = M(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.w = 1;
  a.p = function(a) {
    var d = K(a);
    a = L(a);
    return b(d, a);
  };
  a.n = b;
  return a;
}(), ne = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function oe(a) {
  return[C('"'), C(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return ne[a];
  })), C('"')].join("");
}
function pe(a, b, c) {
  if (null == a) {
    return H(b, "nil");
  }
  if (void 0 === a) {
    return H(b, "#\x3cundefined\x3e");
  }
  if (w(function() {
    var b = fc.a(c, wb);
    return w(b) ? (b = a ? a.j & 131072 || a.rb ? !0 : a.j ? !1 : z(Sa, a) : z(Sa, a)) ? mc(a) : b : b;
  }())) {
    H(b, "^");
    var d = mc(a);
    W.b ? W.b(d, b, c) : W.call(null, d, b, c);
    H(b, " ");
  }
  return null == a ? H(b, "nil") : a.vb ? a.Eb(a, b, c) : a && (a.j & 2147483648 || a.M) ? a.D(null, b, c) : ra(a) === Boolean || "number" === typeof a ? H(b, "" + C(a)) : null != a && a.constructor === Object ? (H(b, "#js "), d = Yc.a(function(b) {
    return new U(null, 2, 5, nd, [Gc.g(b), a[b]], null);
  }, qc(a)), qe.l ? qe.l(d, W, b, c) : qe.call(null, d, W, b, c)) : oa(a) ? ke(b, W, "#js [", " ", "]", c, a) : w("string" == typeof a) ? w(vb.g(c)) ? H(b, oe(a)) : H(b, a) : ic(a) ? me.n(b, bc(["#\x3c", "" + C(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + C(a);;) {
      if (Q(c) < b) {
        c = [C("0"), C(c)].join("");
      } else {
        return c;
      }
    }
  }, me.n(b, bc(['#inst "', "" + C(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : a instanceof RegExp ? me.n(b, bc(['#"', a.source, '"'], 0)) : (a ? a.j & 2147483648 || a.M || (a.j ? 0 : z(eb, a)) : z(eb, a)) ? fb(a, b, c) : me.n(b, bc(["#\x3c", "" + C(a), "\x3e"], 0));
}
function W(a, b, c) {
  var d = re.g(c);
  return w(d) ? (c = hc.b(c, se, pe), d.b ? d.b(a, b, c) : d.call(null, a, b, c)) : pe(a, b, c);
}
function qe(a, b, c, d) {
  return ke(c, function(a, c, d) {
    var k = Na(a);
    b.b ? b.b(k, c, d) : b.call(null, k, c, d);
    H(c, " ");
    a = Oa(a);
    return b.b ? b.b(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, I(a));
}
J.prototype.M = !0;
J.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
Hc.prototype.M = !0;
Hc.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
Xd.prototype.M = !0;
Xd.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
Ad.prototype.M = !0;
Ad.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
od.prototype.M = !0;
od.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
Ec.prototype.M = !0;
Ec.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
Zd.prototype.M = !0;
Zd.prototype.D = function(a, b, c) {
  return qe(this, W, b, c);
};
Yd.prototype.M = !0;
Yd.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
qd.prototype.M = !0;
qd.prototype.D = function(a, b, c) {
  return ke(b, W, "[", " ", "]", c, this);
};
Mc.prototype.M = !0;
Mc.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
de.prototype.M = !0;
de.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
U.prototype.M = !0;
U.prototype.D = function(a, b, c) {
  return ke(b, W, "[", " ", "]", c, this);
};
Dc.prototype.M = !0;
Dc.prototype.D = function(a, b) {
  return H(b, "()");
};
tb.prototype.M = !0;
tb.prototype.D = function(a, b, c) {
  return qe(this, W, b, c);
};
ge.prototype.M = !0;
ge.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
ce.prototype.M = !0;
ce.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
Cc.prototype.M = !0;
Cc.prototype.D = function(a, b, c) {
  return ke(b, W, "(", " ", ")", c, this);
};
U.prototype.Ma = !0;
U.prototype.Na = function(a, b) {
  return xc.a(this, b);
};
qd.prototype.Ma = !0;
qd.prototype.Na = function(a, b) {
  return xc.a(this, b);
};
T.prototype.Ma = !0;
T.prototype.Na = function(a, b) {
  return Fc(this, b);
};
var wb = new T(null, "meta", "meta", 1499536964), xb = new T(null, "dup", "dup", 556298533), se = new T(null, "fallback-impl", "fallback-impl", -1501286995), ub = new T(null, "flush-on-newline", "flush-on-newline", -151457939), vb = new T(null, "readably", "readably", 1129599760), le = new T(null, "more-marker", "more-marker", -14717935), yb = new T(null, "print-length", "print-length", 1931866356), re = new T(null, "alt-impl", "alt-impl", 670969595);
var te = {};
function ue(a) {
  var b = R.b(a, 0, null);
  a = R.b(a, 1, null);
  b = Math.abs.g ? Math.abs.g(b) : Math.abs.call(null, b);
  a = Math.abs.g ? Math.abs.g(a) : Math.abs.call(null, a);
  return b > a ? b : a;
}
function we() {
  var a = xe;
  return a !== te.cb ? function(b) {
    var c = R.b(b, 0, null), d = R.b(b, 1, null);
    b = function() {
      var b = Math.abs.g ? Math.abs.g(c) : Math.abs.call(null, c);
      return Math.pow.a ? Math.pow.a(b, a) : Math.pow.call(null, b, a);
    }() + function() {
      var b = Math.abs.g ? Math.abs.g(d) : Math.abs.call(null, d);
      return Math.pow.a ? Math.pow.a(b, a) : Math.pow.call(null, b, a);
    }();
    var e = 1 / a;
    return Math.pow.a ? Math.pow.a(b, e) : Math.pow.call(null, b, e);
  } : ue;
}
;function ye(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, l, m, n, p) {
    if ("%" == m) {
      return "%";
    }
    var q = c.shift();
    if ("undefined" == typeof q) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = q;
    return ze[m].apply(null, arguments);
  });
}
var ze = {s:function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a;
}, f:function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = a.toFixed(e));
  var f;
  f = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = f + d);
  if (isNaN(c) || d.length >= c) {
    return d;
  }
  d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
  a = c - d.length - f.length;
  return d = 0 <= b.indexOf("-", 0) ? f + d + Array(a + 1).join(" ") : f + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d;
}, d:function(a, b, c, d, e, f, g, k) {
  return ze.f(parseInt(a, 10), b, c, d, 0, f, g, k);
}};
ze.i = ze.d;
ze.u = ze.d;
var ia = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new J(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, xa.g ? xa.g(a) : xa.call(null, a));
  }
  a.w = 0;
  a.p = function(a) {
    a = I(a);
    return b(a);
  };
  a.n = b;
  return a;
}(), Ae = 2 * Math.PI, Be = 1600, Ce = 1600, xe = 2, De = we(), Ee = cc, Fe = new U(null, 2, 5, nd, [0, 0], null), Ge = new function(a) {
  for (var b = a.length, c = 0, d = gb(Hd);;) {
    if (c < b) {
      var e = c + 2, d = jb(d, a[c], a[c + 1]), c = e
    } else {
      return ib(d);
    }
  }
}([1, "Miejska", 2, "Euklidesowa", te.cb, "Czebyszewa"]);
function He(a, b) {
  return new U(null, 2, 5, nd, [b * (Math.sin.g ? Math.sin.g(a) : Math.sin.call(null, a)), b * (Math.cos.g ? Math.cos.g(a) : Math.cos.call(null, a))], null);
}
function Ie(a) {
  return Yc.a(function(b) {
    var c;
    c = He(b, a);
    c = De.g ? De.g(c) : De.call(null, c);
    return He(b, a / c * a);
  }, he.b(0, Ae, Ae / 360));
}
function Je() {
  return Ee = Yc.a(function(a) {
    return Ie(a);
  }, he.a(1, 7));
}
var Ke = document.getElementById("visualization"), Le = document.getElementsByTagName("canvas")[0], Me = document.getElementsByTagName("input")[0], Ne = document.getElementById("minkowski-order"), Oe = document.getElementById("metric-name"), Y = Le.getContext("2d");
function Pe() {
  var a = Lb.a(xe, te.cb) ? "\x26infin;" : ye("%.2f", xe);
  Ne.innerHTML = a;
  De = we();
  a = fc.b(Ge, xe, "Minkowskiego");
  Oe.innerHTML = a;
}
function Qe() {
  var a = Ke.clientHeight;
  Be = Ke.clientWidth;
  Ce = a;
  Le.width = Be;
  return Le.height = Ce;
}
function Re(a) {
  var b = R.b(a, 0, null);
  a = R.b(a, 1, null);
  return new U(null, 2, 5, nd, [200 * b + Be / 2, 200 * a + Ce / 2], null);
}
function Se() {
  Y.save();
  Y.strokeStyle = "#dddddd";
  Y.lineWidth = 1;
  Y.beginPath();
  var a = Re(new U(null, 2, 5, nd, [-10, 0], null)), b = R.b(a, 0, null), a = R.b(a, 1, null);
  Y.moveTo(b, a);
  a = Re(new U(null, 2, 5, nd, [10, 0], null));
  b = R.b(a, 0, null);
  a = R.b(a, 1, null);
  Y.lineTo(b, a);
  Y.closePath();
  Y.stroke();
  Y.beginPath();
  a = Re(new U(null, 2, 5, nd, [0, -10], null));
  b = R.b(a, 0, null);
  a = R.b(a, 1, null);
  Y.moveTo(b, a);
  a = Re(new U(null, 2, 5, nd, [0, 10], null));
  b = R.b(a, 0, null);
  a = R.b(a, 1, null);
  Y.lineTo(b, a);
  Y.closePath();
  Y.stroke();
  Y.restore();
}
function Te() {
  Y.save();
  Y.beginPath();
  var a = Re(Fe), b = R.b(a, 0, null), a = R.b(a, 1, null);
  Y.moveTo(b, a);
  a = Re(new U(null, 2, 5, nd, [0, 0], null));
  b = R.b(a, 0, null);
  a = R.b(a, 1, null);
  Y.lineTo(b, a);
  Y.stroke();
  Y.closePath();
  Y.beginPath();
  a = Re(new U(null, 2, 5, nd, [0, 0], null));
  b = R.b(a, 0, null);
  a = R.b(a, 1, null);
  Y.arc(b, a, 3, 0, Ae);
  Y.fillStyle = "white";
  Y.fill();
  Y.stroke();
  Y.closePath();
  Y.beginPath();
  var a = Re(Fe), b = R.b(a, 0, null), a = R.b(a, 1, null), c = b + 10, d = a + 3;
  Y.arc(b, a, 3, 0, Ae);
  Y.fillStyle = "black";
  Y.fillText(function() {
    var a;
    a = Fe;
    a = De.g ? De.g(a) : De.call(null, a);
    return ye("%.2f", a);
  }(), c, d);
  Y.fillStyle = "white";
  Y.fill();
  Y.stroke();
  Y.closePath();
  Y.restore();
}
function Ue(a) {
  Y.save();
  Y.beginPath();
  je.g(function() {
    return function c(a) {
      return new Hc(null, function() {
        for (;;) {
          var e = I(a);
          if (e) {
            if (pc(e)) {
              var f = mb(e), g = Q(f), k = new Jc(Array(g), 0);
              return function() {
                for (var a = 0;;) {
                  if (a < g) {
                    var c = D.a(f, a), d = k, e = Re(c), c = R.b(e, 0, null), e = R.b(e, 1, null), c = Y.lineTo(c, e);
                    d.add(c);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Nc(k.Z(), c(nb(e))) : Nc(k.Z(), null);
            }
            var l = K(e);
            return P(function() {
              var a = Re(l), c = R.b(a, 0, null), a = R.b(a, 1, null);
              return Y.lineTo(c, a);
            }(), c(L(e)));
          }
          return null;
        }
      }, null, null);
    }(a);
  }());
  Y.closePath();
  Y.setLineDash([3, 5]);
  Y.strokeStyle = "gray";
  Y.stroke();
  return Y.restore();
}
function Ve() {
  Y.clearRect(0, 0, Le.width, Le.height);
  Se();
  je.g(function() {
    return function b(c) {
      return new Hc(null, function() {
        for (;;) {
          var d = I(c);
          if (d) {
            if (pc(d)) {
              var e = mb(d), f = Q(e), g = new Jc(Array(f), 0);
              a: {
                for (var k = 0;;) {
                  if (k < f) {
                    var l = D.a(e, k), l = Ue(l);
                    g.add(l);
                    k += 1;
                  } else {
                    e = !0;
                    break a;
                  }
                }
              }
              return e ? Nc(g.Z(), b(nb(d))) : Nc(g.Z(), null);
            }
            g = K(d);
            return P(Ue(g), b(L(d)));
          }
          return null;
        }
      }, null, null);
    }(Ee);
  }());
  Te();
}
Le.width = Be;
Le.height = Ce;
Je();
Pe();
Qe();
Me.addEventListener("input", function() {
  xe = Me.value / 33;
  3 < xe ? xe = te.cb : 2 < xe && (xe = 2 + 20 * (xe - 2));
  Pe();
  return Je();
});
window.addEventListener("resize", Qe);
Le.addEventListener("mousemove", function(a) {
  var b = Le.getBoundingClientRect(), b = new U(null, 2, 5, nd, [a.clientX - b.left, a.clientY - b.top], null);
  a = R.b(b, 0, null);
  b = R.b(b, 1, null);
  return Fe = new U(null, 2, 5, nd, [(a - Be / 2) / 200, (b - Ce / 2) / 200], null);
});
Le.addEventListener("mouseleave", function() {
  return Fe = new U(null, 2, 5, nd, [0, 0], null);
});
(function We() {
  return window.requestAnimationFrame(function() {
    Ve();
    return We();
  });
})();

})();

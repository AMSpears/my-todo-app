(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    252: function (e, n, a) {
      "use strict";
      a.r(n);
      var r = a(0),
        t = a.n(r),
        l = a(46);
      n.default = ({
        onChange: e,
        filter: n,
        field: a,
        innerRef: r,
        value: c,
      }) => {
        if (!n) return null;
        const o = a.getFilterLabel(n);
        return t.a.createElement(l.c, {
          onChange: (n) => {
            const a = n.target.value;
            e(a.replace(/[^\d,\s]/g, ""));
          },
          ref: r,
          placeholder: o,
          value: c,
        });
      };
    },
  },
]);

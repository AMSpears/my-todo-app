(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    253: function (t, e, a) {
      "use strict";
      a.r(e);
      a(82), a(154);
      var i = a(9),
        l = (a(247), a(248));
      class s extends l.a {
        constructor(...t) {
          super(...t),
            Object(i.a)(this, "getFilterGraphQL", ({ type: t, value: e }) => ({
              ["is_i" === t ? this.path + "_i" : `${this.path}_${t}`]: e,
            })),
            Object(i.a)(
              this,
              "getFilterLabel",
              ({ label: t }) => `${this.label} ${t.toLowerCase()}`
            ),
            Object(i.a)(
              this,
              "formatFilter",
              ({ label: t, value: e }) =>
                `${this.getFilterLabel({ label: t })}: "${e}"`
            ),
            Object(i.a)(this, "getFilterTypes", () => [
              {
                type: "contains_i",
                label: "Contains",
                getInitialValue: () => "",
              },
              {
                type: "not_contains_i",
                label: "Does not contain",
                getInitialValue: () => "",
              },
              { type: "is_i", label: "Is exactly", getInitialValue: () => "" },
              {
                type: "not_i",
                label: "Is not exactly",
                getInitialValue: () => "",
              },
              {
                type: "starts_with_i",
                label: "Starts with",
                getInitialValue: () => "",
              },
              {
                type: "not_starts_with_i",
                label: "Does not start with",
                getInitialValue: () => "",
              },
              {
                type: "ends_with_i",
                label: "Ends with",
                getInitialValue: () => "",
              },
              {
                type: "not_ends_with_i",
                label: "Does not end with",
                getInitialValue: () => "",
              },
            ]);
        }
      }
      e.default = s;
    },
  },
]);

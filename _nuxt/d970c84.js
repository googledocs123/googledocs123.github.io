(window.webpackJsonp = window.webpackJsonp || []).push([
  [28, 13, 14],
  {
    1271: function (t, e, n) {
      "use strict";
      n(773);
    },
    1272: function (t, e, n) {
      var o = n(104),
        r = n(201),
        l = n(286),
        d = o(!1),
        c = r(l);
      d.push([
        t.i,
        "@font-face{font-family:RobotoCondensedLight;src:url(" +
          c +
          ")}.container[data-v-37fafb4a]{margin-left:auto;margin-right:auto;color:#000;font-family:RobotoCondensedLight,sans-serif}.follow-block[data-v-37fafb4a]{background-color:#fff;font-size:20px;text-align:center;margin-bottom:37px}.posts[data-v-37fafb4a]{display:grid;margin-top:10px;font-size:0;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;grid-gap:20px 22px;justify-content:center;padding:0 25px;max-width:1400px;width:100%;margin-left:auto;margin-right:auto}.made-by[data-v-37fafb4a]{background:#fff;margin-top:10px;font-size:21px;text-align:center;padding:25px 20px 20px;margin-bottom:40px}.site-title[data-v-37fafb4a]{text-align:center;margin-top:58px;font-weight:700;min-height:55px;max-width:210px;margin-left:auto;margin-right:auto;width:100%;display:block;animation:pulse 1s infinite alternate-reverse}.site-tagline[data-v-37fafb4a]{text-align:center;font-size:21px;margin-top:10px;margin-bottom:47px;opacity:.7}.socials[data-v-37fafb4a]{display:flex;justify-content:center;grid-gap:12px;margin-top:12px}.social-btn[data-v-37fafb4a]{border:1px solid #000;border-radius:12px;padding:10px 18px 8px 12px;display:flex;align-items:center;color:#000;text-decoration:none;cursor:pointer}.social-btn[data-v-37fafb4a]:hover{transform:scale(1.04)}.social-btn-icon[data-v-37fafb4a]{height:26px;margin-right:10px}.social-btn-twitter[data-v-37fafb4a]{padding:1px 0}.contact[data-v-37fafb4a]{margin-top:12px}.contact a[data-v-37fafb4a],.privacy[data-v-37fafb4a]{color:#000;text-decoration:none}.privacy[data-v-37fafb4a]{display:block;margin-top:12px;opacity:.5;font-size:16px}.newsletter-tagline[data-v-37fafb4a]{position:absolute;top:9px;right:10px;font-size:20px;cursor:pointer;display:flex}.newsletter-tagline[data-v-37fafb4a]:hover{transform:scale(1.03)}.newsletter-icon[data-v-37fafb4a]{height:15px;position:relative;top:4px;margin-right:5px}@media only screen and (max-width:1280px){.posts[data-v-37fafb4a]{grid-gap:15px 16px}}@media only screen and (max-width:1130px){.posts[data-v-37fafb4a]{grid-template-columns:1fr 1fr;max-width:900px;grid-gap:15px 18px}}@media only screen and (max-width:700px){.newsletter-tagline[data-v-37fafb4a]{display:none}}@media only screen and (max-width:600px){.posts[data-v-37fafb4a]{grid-template-columns:repeat(1,1fr);grid-gap:7px;padding:0 8px}.site-title[data-v-37fafb4a]{margin-top:55px;font-size:48px}.site-tagline[data-v-37fafb4a]{margin-top:10px}.made-by[data-v-37fafb4a],.site-tagline[data-v-37fafb4a]{margin-bottom:30px}.made-by-desc[data-v-37fafb4a]{max-width:300px;margin-left:auto;margin-right:auto}.socials[data-v-37fafb4a]{display:grid;grid-template-columns:1fr 1fr}.social-btn[data-v-37fafb4a]{justify-content:center;padding:10px 0}.social-full[data-v-37fafb4a]{grid-column:span 2}}",
        "",
      ]),
        (t.exports = d);
    },
    1362: function (t, e, n) {
      "use strict";
      n.r(e);
      n(44), n(15);
      var o = {
          components: { newsletter: n(437).default },
          data: function () {
            return { showNewsletter: !1 };
          },
          computed: {
            posts: function () {
              return this.$store.state.posts.filter(function (t) {
                return !t.hidden;
              });
            },
          },
        },
        r = (n(1271), n(28)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "container" },
              [
                e(
                  "div",
                  {
                    staticClass: "newsletter-tagline",
                    on: {
                      click: function (e) {
                        t.showNewsletter = !0;
                      },
                    },
                  },
                  [
                    e("img", {
                      staticClass: "newsletter-icon",
                      attrs: { src: "/general/mail.svg" },
                    }),
                    t._v("Get new posts\n  "),
                  ],
                ),
                t._v(" "),
                e("img", {
                  staticClass: "site-title",
                  attrs: { alt: "Neal.fun logo", src: "/general/logo.svg" },
                }),
                t._v(" "),
                e("div", { staticClass: "site-tagline" }, [
                  t._v("hope u have a good day"),
                ]),
                t._v(" "),
                t.showNewsletter
                  ? e("Newsletter", {
                      on: {
                        hide: function (e) {
                          t.showNewsletter = !1;
                        },
                      },
                    })
                  : t._e(),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "posts" },
                  t._l(this.posts, function (t) {
                    return e("PageLink", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !t.hidden,
                          expression: "!post.hidden",
                        },
                      ],
                      key: t.path,
                      attrs: {
                        title: t.title,
                        path: t.path,
                        preload: t.preload,
                      },
                    });
                  }),
                  1,
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "made-by" },
                  [
                    e("div", { staticClass: "made-by-desc" }, [
                      t._v(
                        "\n      Hi! I'm Neal. This is where I make stuff on the web. Obligatory links:\n    ",
                      ),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "socials" }, [
                      e(
                        "div",
                        {
                          staticClass: "social-btn social-full",
                          attrs: {
                            href: "https://twitter.com/nealagarwal",
                            target: "_blank",
                          },
                          on: {
                            click: function (e) {
                              t.showNewsletter = !0;
                            },
                          },
                        },
                        [
                          e("img", {
                            staticClass: "social-btn-icon social-btn-twitter",
                            attrs: { src: "/general/mail.svg", alt: "Mail" },
                          }),
                          e("span", {}, [t._v("Newsletter")]),
                        ],
                      ),
                      t._v(" "),
                      t._m(0),
                      t._v(" "),
                      t._m(1),
                    ]),
                    t._v(" "),
                    t._m(2),
                    t._v(" "),
                    e(
                      "nuxt-link",
                      {
                        staticClass: "privacy",
                        attrs: { to: "/privacy-policy/" },
                      },
                      [t._v("Privacy policy")],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            );
          },
          [
            function () {
              var t = this._self._c;
              return t(
                "a",
                {
                  staticClass: "social-btn social-full",
                  attrs: {
                    href: "https://twitter.com/nealagarwal",
                    target: "_blank",
                  },
                },
                [
                  t("img", {
                    staticClass: "social-btn-icon social-btn-twitter",
                    attrs: { src: "/general/twitter.svg", alt: "Twitter" },
                  }),
                  this._v("Twitter\n      "),
                ],
              );
            },
            function () {
              var t = this._self._c;
              return t(
                "a",
                {
                  staticClass: "social-btn social-full",
                  attrs: {
                    target: "_blank",
                    href: "https://buymeacoffee.com/neal",
                  },
                },
                [
                  t("img", {
                    staticClass: "social-btn-icon",
                    attrs: { alt: "Coffee", src: "/general/coffee.svg" },
                  }),
                  this._v("Buy me a coffee\n      "),
                ],
              );
            },
            function () {
              var t = this,
                e = t._self._c;
              return e("div", { staticClass: "contact" }, [
                t._v("\n      Say hello: "),
                e(
                  "a",
                  { attrs: { target: "_blank", href: "mailto:hi@neal.fun" } },
                  [t._v("hi@neal.fun")],
                ),
              ]);
            },
          ],
          !1,
          null,
          "37fafb4a",
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        Newsletter: n(437).default,
        PageLink: n(290).default,
      });
    },
    279: function (t, e, n) {
      var content = n(289);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(105).default)("2f800c84", content, !0, { sourceMap: !1 });
    },
    286: function (t, e, n) {
      t.exports = n.p + "fonts/RobotoCondensed-Light.f982e4a.woff2";
    },
    287: function (t, e, n) {
      "use strict";
      var o =
        /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      e.validate = function (t) {
        if (!t) return !1;
        if (t.length > 254) return !1;
        if (!o.test(t)) return !1;
        var e = t.split("@");
        return (
          !(e[0].length > 64) &&
          !e[1].split(".").some(function (t) {
            return t.length > 63;
          })
        );
      };
    },
    288: function (t, e, n) {
      "use strict";
      n(279);
    },
    289: function (t, e, n) {
      var o = n(104)(!1);
      o.push([
        t.i,
        ".link{border-radius:19px;aspect-ratio:391/145;display:block;z-index:2;width:100%;min-width:100%}.link-img{max-width:100%;cursor:pointer;transition:transform .07s linear,filter .1s ease-out,opacity .15s linear;opacity:0}.link-img:hover{transform:scale(1.02);filter:drop-shadow(3px 3px 5px rgba(0,0,0,.17))}",
        "",
      ]),
        (t.exports = o);
    },
    290: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          props: {
            title: { required: !0, type: String },
            path: { required: !0, type: String },
            preload: { required: !1, type: Boolean, default: !1 },
          },
          data: function () {
            return { imageLoaded: !1 };
          },
        },
        r = (n(288), n(28)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "nuxt-link",
              {
                staticClass: "link",
                style: { background: t.imageLoaded ? "none" : "#f1f2f6" },
                attrs: { prefetch: t.preload, to: "/".concat(t.path, "/") },
              },
              [
                e("img", {
                  staticClass: "link-img",
                  style: { opacity: t.imageLoaded ? 1 : 0 },
                  attrs: {
                    onload: (t.imageLoaded = !0),
                    alt: t.title,
                    src: "/link-images/".concat(t.path, ".svg"),
                    loading: "lazy",
                  },
                }),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    352: function (t, e, n) {
      var content = n(436);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(105).default)("cd68989c", content, !0, { sourceMap: !1 });
    },
    435: function (t, e, n) {
      "use strict";
      n(352);
    },
    436: function (t, e, n) {
      var o = n(104),
        r = n(201),
        l = n(286),
        d = o(!1),
        c = r(l);
      d.push([
        t.i,
        "@font-face{font-family:RobotoCondensedLight;src:url(" +
          c +
          ")}.modal-wrapper[data-v-127253a3]{position:fixed;top:0;left:0;width:100%;height:100%;padding:10px;z-index:999}.modal[data-v-127253a3]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:330px;width:100%;background:#fff;padding:26px 30px 28px;font-size:21px;border-radius:5px;font-family:RobotoCondensedLight}.modal-title[data-v-127253a3]{margin-bottom:19px}.modal-thanks[data-v-127253a3],.modal-title[data-v-127253a3]{text-align:center}.modal-bg[data-v-127253a3]{background:rgba(0,0,0,.55);width:100%;height:100%;position:absolute;top:0;left:0}.subscribe[data-v-127253a3]{background:#fff5d9;display:block;padding:10px;margin-top:6px;font-size:21px;border-radius:5px;width:100%;font-family:RobotoCondensedLight;outline:none;box-shadow:none;cursor:pointer;border:1px solid #000;color:#000}.subscribe[data-v-127253a3]:hover{transform:scale(1.02)}.subscribe[data-v-127253a3]:disabled{opacity:.4;pointer-events:none}.email[data-v-127253a3]:focus{border:1px solid rgba(0,0,0,.5)}.email[data-v-127253a3]{background:#fff;border:1px solid rgba(0,0,0,.25);display:block;padding:10px;margin-top:5px;font-size:20px;border-radius:5px;width:100%;font-family:RobotoCondensedLight;outline:none}.error[data-v-127253a3]{margin-top:8px;margin-bottom:-10px;font-size:14px}.close[data-v-127253a3]{position:absolute;top:11px;right:10px;width:12px;opacity:.8;cursor:pointer}.close[data-v-127253a3]:hover{transform:scale(1.05)}.email-gif[data-v-127253a3]{width:100%;padding:12px}",
        "",
      ]),
        (t.exports = d);
    },
    437: function (t, e, n) {
      "use strict";
      n.r(e);
      var o,
        r = n(10),
        l = (n(60), n(287)),
        d = n(295),
        c = n.n(d),
        f = {
          data: function () {
            return { email: "", error: !1, submitted: !1, submitting: !1 };
          },
          methods: {
            subscribe:
              ((o = Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (this.submitting = !0),
                              (this.error = !1),
                              (t.prev = 2),
                              (t.next = 5),
                              c()({
                                url: "https://neal.fun/api/newsletter/subscribe",
                                method: "POST",
                                data: { email: this.email },
                              })
                            );
                          case 5:
                            (this.submitted = !0), (t.next = 12);
                            break;
                          case 8:
                            (t.prev = 8),
                              (t.t0 = t.catch(2)),
                              console.log(t.t0),
                              (this.error = !0);
                          case 12:
                            this.submitting = !1;
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[2, 8]],
                  );
                }),
              )),
              function () {
                return o.apply(this, arguments);
              }),
          },
          mounted: function () {
            this.$refs.email.focus();
          },
          computed: {
            isValidEmail: function () {
              return l.validate(this.email);
            },
          },
        },
        m = f,
        v = (n(435), n(28)),
        component = Object(v.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "modal-wrapper" }, [
              e("div", {
                staticClass: "modal-bg",
                on: {
                  click: function (e) {
                    return t.$emit("hide");
                  },
                },
              }),
              t._v(" "),
              t.submitted
                ? e("div", { staticClass: "modal" }, [
                    e("img", {
                      staticClass: "close",
                      attrs: { src: "/general/close.svg" },
                      on: {
                        click: function (e) {
                          return t.$emit("hide");
                        },
                      },
                    }),
                    t._v(" "),
                    e("img", {
                      staticClass: "email-gif",
                      attrs: { src: "/general/email.gif" },
                    }),
                    t._v(" "),
                    e("div", { staticClass: "modal-thanks" }, [
                      t._v("Thanks for subscribing!"),
                    ]),
                  ])
                : e("div", { staticClass: "modal" }, [
                    e("div", { staticClass: "modal-title" }, [
                      t._v("Get new posts in your inbox!"),
                    ]),
                    t._v(" "),
                    e(
                      "form",
                      {
                        on: {
                          submit: function (e) {
                            return (
                              e.preventDefault(),
                              t.subscribe.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        e("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.email,
                              expression: "email",
                            },
                          ],
                          ref: "email",
                          staticClass: "email",
                          attrs: { type: "email", placeholder: "Your email" },
                          domProps: { value: t.email },
                          on: {
                            input: function (e) {
                              e.target.composing || (t.email = e.target.value);
                            },
                          },
                        }),
                        t._v(" "),
                        e(
                          "button",
                          {
                            staticClass: "subscribe",
                            attrs: { disabled: !t.isValidEmail },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.submitting ? "Submitting..." : "Subscribe",
                                ) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ],
                    ),
                    t._v(" "),
                    e("img", {
                      staticClass: "close",
                      attrs: { src: "/general/close.svg" },
                      on: {
                        click: function (e) {
                          return t.$emit("hide");
                        },
                      },
                    }),
                    t._v(" "),
                    t.error
                      ? e("div", { staticClass: "error" }, [
                          t._v(
                            "\n      Couldn't submit, please try again later.\n    ",
                          ),
                        ])
                      : t._e(),
                  ]),
            ]);
          },
          [],
          !1,
          null,
          "127253a3",
          null,
        );
      e.default = component.exports;
    },
    773: function (t, e, n) {
      var content = n(1272);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(105).default)("15546ef4", content, !0, { sourceMap: !1 });
    },
  },
]);

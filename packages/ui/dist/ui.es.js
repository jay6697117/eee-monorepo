import { defineComponent as l, openBlock as a, createElementBlock as s, normalizeClass as i, renderSlot as r } from "vue";
const d = ["disabled"], p = /* @__PURE__ */ l({
  __name: "Button",
  props: {
    variant: {},
    disabled: { type: Boolean },
    block: { type: Boolean }
  },
  emits: ["click"],
  setup(e) {
    return (o, n) => (a(), s("button", {
      class: i([
        "btn",
        o.variant === "primary" ? "btn-primary" : "btn-secondary",
        o.disabled ? "opacity-50 cursor-not-allowed" : "",
        o.block ? "w-full" : ""
      ]),
      disabled: o.disabled,
      onClick: n[0] || (n[0] = (t) => o.$emit("click", t))
    }, [
      r(o.$slots, "default")
    ], 10, d));
  }
}), m = {
  install: (e) => {
    e.component("ZjhButton", p);
  }
};
export {
  p as Button,
  m as default
};

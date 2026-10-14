"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CustomSidebar: () => CustomSidebar
});
module.exports = __toCommonJS(index_exports);

// src/components/CustomSidebar/CustomSidebar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function CustomSidebar({
  navigationItems,
  activeHref
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "aside",
    {
      style: {
        width: "240px",
        minHeight: "100vh",
        padding: "20px 12px",
        backgroundColor: "#F8FBFF",
        borderRight: "1px solid #E2E8F0",
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "h2",
          {
            style: {
              fontSize: "20px",
              margin: "0 0 24px",
              padding: "0 12px",
              color: "#1268E8"
            },
            children: "Lewis TMS"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: navigationItems.map((item) => {
          const isActive = item.href.split("?")[0] === activeHref;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "a",
            {
              href: item.href,
              "aria-current": isActive ? "page" : void 0,
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#0000ffa8" : "#334155",
                backgroundColor: isActive ? "#E8F1FF" : "transparent"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })
              ]
            },
            item.href
          );
        }) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomSidebar
});

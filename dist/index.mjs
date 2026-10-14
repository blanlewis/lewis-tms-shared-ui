// src/components/CustomSidebar/CustomSidebar.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function CustomSidebar({
  navigationItems,
  activeHref
}) {
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx("nav", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: navigationItems.map((item) => {
          const isActive = item.href.split("?")[0] === activeHref;
          return /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsx("span", { children: item.icon }),
                /* @__PURE__ */ jsx("span", { children: item.label })
              ]
            },
            item.href
          );
        }) })
      ]
    }
  );
}
export {
  CustomSidebar
};

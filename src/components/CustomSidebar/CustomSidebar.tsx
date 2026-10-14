
type NavigationItem = {
  label: string;
  href: string;
  icon: string;
};

type CustomSidebarProps = {
  readonly navigationItems: NavigationItem[];
  readonly activeHref: string;
};

export default function CustomSidebar({
  navigationItems,
  activeHref,
}: CustomSidebarProps) {
  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        padding: "20px 12px",
        backgroundColor: "#F8FBFF",
        borderRight: "1px solid #E2E8F0",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          margin: "0 0 24px",
          padding: "0 12px",
          color: "#1268E8",
        }}
      >
        Lewis TMS
      </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {navigationItems.map((item) => {
          const isActive = item.href.split("?")[0] === activeHref;

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#0000ffa8" : "#334155",
                backgroundColor: isActive ? "#E8F1FF" : "transparent",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
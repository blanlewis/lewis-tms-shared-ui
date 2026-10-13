
import CustomSidebar from "../components/CustomSidebar/CustomSidebar";

const navigationItems = [
  { label: "Dashboard", href: "/", icon: "🏠" },
  { label: "Bookings", href: "/bookings", icon: "📦" },
  { label: "Fleet", href: "/fleet", icon: "🚚" },
  { label: "Reports", href: "/reports", icon: "📊" },
];

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <CustomSidebar
        navigationItems={navigationItems}
        activeHref="/"
      />
      <main style={{ flex: 1, padding: "32px" }}>
        <h1>Lewis TMS Shared UI</h1>
        <p>Testing our reusable CustomSidebar component.</p>
      </main>
    </div>
  );
}
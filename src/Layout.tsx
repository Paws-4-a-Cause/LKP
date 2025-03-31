// Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./components/menubar";

const Layout: React.FC = () => {
  return (
    <div>
      <MenuBar />

      <main style={{ paddingTop: "60px" }}>
        <Outlet />
      </main>

      {/* Optionally, a footer can be added here */}
      <footer>
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

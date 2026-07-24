import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import DashboardSidebar from "../components/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <DashboardSidebar isOpen={open} setIsOpen={setOpen} />

      <main
        onClick={() => {
          setOpen(false);
        }}
        className="mx-auto max-w-[130PX]/10 "
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

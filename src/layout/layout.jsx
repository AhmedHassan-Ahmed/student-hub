import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
    {location.pathname !== "/dashboard" && (
      <Nav open={open} setOpen={setOpen} />
      )}
      <main
        onClick={() => {
          setOpen(open ? false : false);
        }}
        className="mx-auto max-w-[130PX]/10 p-6"
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

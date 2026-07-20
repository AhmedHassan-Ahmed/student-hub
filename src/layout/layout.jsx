import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[130PX]/10 p-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

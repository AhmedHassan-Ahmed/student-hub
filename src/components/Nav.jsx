import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaTasks,
  FaStickyNote,
  FaUserCircle,
  FaEllipsisV,
} from "react-icons/fa";

const Navbar = ({ open, setOpen }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-100 text-blue-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav
      onClick={() => {
        setOpen(open ? false : false);
      }}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur relative"
    >
      <div className="mx-auto flex h-16 max-w-[114rem] items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-blue-700"
        >
          Student-Hub
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={linkClass} end>
            <FaHome />
            Home
          </NavLink>

          <NavLink to="/resource" className={linkClass}>
            <FaBook />
            Resources
          </NavLink>

          <NavLink to="/tasks" className={linkClass}>
            <FaTasks />
            Tasks
          </NavLink>

          <NavLink to="/notes" className={linkClass}>
            <FaStickyNote />
            Notes
          </NavLink>

          <NavLink to="/profile" className={linkClass}>
            <FaUserCircle />
            Profile
          </NavLink>
        </div>

        <button
          onClick={(e) => {
            setOpen(!open);
            e.stopPropagation();
          }}
          className="rounded-md p-2 text-xl text-gray-700 hover:bg-gray-100 md:hidden"
        >
          <FaEllipsisV />
        </button>
      </div>

      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-6 top-16 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            <NavLink
              to="/"
              className={linkClass}
              end
              onClick={() => setOpen(false)}
            >
              <FaHome />
              Home
            </NavLink>

            <NavLink
              to="/resource"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FaBook />
              Resources
            </NavLink>

            <NavLink
              to="/tasks"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FaTasks />
              Tasks
            </NavLink>

            <NavLink
              to="/notes"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FaStickyNote />
              Notes
            </NavLink>

            <NavLink
              to="/profile"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FaUserCircle />
              Profile
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

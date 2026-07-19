import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaTasks,
  FaStickyNote,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-100 text-blue-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[114rem] items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-blue-700"
        >
          Student-Hub
        </NavLink>

        <div className="flex items-center gap-2">
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
            profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

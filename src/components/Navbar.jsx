import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-[#0C1225] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-[#6C90C3]">Student Hub</h1>
        <ul className="flex gap-8 font-bold">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="/notes">notes</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <Link
          to="/dashboard"
          className="bg-[#6C90C3] text-[#0C1225] px-5 py-2 rounded-lg font-bold shadow-lg shadow-[#6C90C3]/30
                hover:bg-[#0C1225] hover:text-[#6C90C3]"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

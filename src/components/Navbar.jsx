import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-gray-900 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <NavLink to="/">MyApp</NavLink>
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <NavLink to="/" className="hover:text-blue-400 transition">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="hover:text-blue-400 transition">
              About
            </NavLink>
          </li>


          <li>
            <NavLink to="/service" className="hover:text-blue-400 transition">
              service
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="hover:text-blue-400 transition">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 transition"
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/register"
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

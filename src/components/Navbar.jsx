import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-lg">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-lg">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-lg">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <a className="text-2xl font-bold text-blue-400 font-inter">
          Property <span className="text-red-400">Peak</span>
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="gap-4 px-1 menu menu-horizontal">
          <li className="text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="gap-5 navbar-end">
        <Link
          to="/login"
          className="text-white bg-blue-400 btn hover:bg-blue-500"
        >
          Login
        </Link>
        <Link
          to="/sign-up"
          className="text-white bg-red-400 btn hover:bg-red-500"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

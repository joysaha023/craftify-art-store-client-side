import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Result } from "postcss";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch();
  };

  const linkNav = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#5F9EA0] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allartandcraft"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#5F9EA0] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          All Art & Craft
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addartandcraft"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#5F9EA0] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          Add Art & Craft
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/myartandcraft"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#5F9EA0] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          My Art & Craft
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkNav}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost  text-xl">
            CraftiFY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkNav}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    title={user?.displayName}
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName || "User"}
                  </a>
                </li>
                <li>
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                  <Link to={"/updateProfile"} className="justify-between">
                    Update Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={handleSignOut}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to={"/login"}
                className="btn btn-sm md:btn-md rounded-full bg-[#5F9EA0]"
              >
                Log In
              </Link>
              <Link
                to={"/signup"}
                className="btn hidden btn-sm md:flex md:btn-md rounded-full btn-accent"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
const NavBar = () => {
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    setTheme(!theme)
  }
  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className="btn bg-primary hidden text-white  text-3xl lg:flex items-center"
          >
            c
          </NavLink>
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden " tabIndex={0}>
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              className="dropdown-content menu menu-sm bg-base-200 rounded-box w-52 mt-3 p-2 shadow"
              tabIndex={0}
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal">
            <NavLinks />
          </div>
        </div>
        <div className="navbar-end">
          {" "}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink
            to={"/cart"}
            className="btn btn-ghost btn-md btn-circle ml-4"
          >
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-primary barge-small indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

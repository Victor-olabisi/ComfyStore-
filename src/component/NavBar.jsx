import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const NavBar = () => {
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
            <ul className="drowndown-content" tabIndex={0}></ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal">
            <NavLinks />
          </div>
        </div>
        <div className="navbar-end">
          <NavLink to={"/cart"} className="btn btn-ghost btn-md btn-circle">
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

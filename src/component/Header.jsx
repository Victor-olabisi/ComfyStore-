import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="  text-neutral-content  bg-neutral p-2">
      <div className="align-element flex justify-center md:justify-end ">
        <div className=" flex gap-x-6  items-center">
          <Link to={"/login"} className="link link-hover text-xs capitalize sm:text-sm ">
            sign in / guest
          </Link>
          <Link to="/register" className="link link-hover text-xs capitalize sm:text-sm ">
            create account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;

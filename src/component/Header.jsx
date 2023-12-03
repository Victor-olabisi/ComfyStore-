import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="  text-neutral-content  bg-neutral p-2">
      <div className="align-element flex justify-center md:justify-end ">
        <div className=" flex gap-x-4 items-center">
          <Link to={"/login"} className=" text-white text-xs capitalize sm:text-sm ">
            sign in / guest
          </Link>
          <Link to={"/register"} className=" text-white text-xs capitalize sm:text-sm ">
            create account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;

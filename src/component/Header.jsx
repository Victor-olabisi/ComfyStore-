import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch, } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearcart } from "../features/cart/cartSlice";
const Header = () => {
  const { user } = useSelector((store) => store.userState);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logoutUser())
    dispatch(clearcart())
    navigate('/')
  }
  return (
    <header className="  text-neutral-content  bg-neutral p-2">
      <div className="align-element flex justify-center md:justify-end ">
        <div className=" flex gap-x-6  items-center">
          {user ? (
            <>
              <h3 className="capitalize font-md font-semibold">{user.username}</h3>
              <button className="btn-ghost border-primary uppercase p-2 btn-sm rounded-md" onClick={handleLogout}>
                logout
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="link link-hover text-xs capitalize sm:text-sm "
              >
                sign in / guest
              </Link>
              <Link
                to="/register"
                className="link link-hover text-xs capitalize sm:text-sm "
              >
                create account
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;

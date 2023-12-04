import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import { NavBar } from "../component";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar/>
      <section className="align-element">
        {" "}
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;

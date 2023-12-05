import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import { NavBar } from "../component";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar/>
      <section className="align-element py-16">
        {" "}
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;

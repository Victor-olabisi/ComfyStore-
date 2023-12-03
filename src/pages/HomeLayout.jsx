import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <section className="align-element">
        {" "}
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;

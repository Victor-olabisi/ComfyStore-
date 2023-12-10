import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import { NavBar } from "../component";
import { useNavigation } from "react-router-dom";


const HomeLayout = () => {
const navigate = useNavigation()
  const isLoading = navigate.state === 'loading'
  // console.log(isLoading);
  return (
    <>
      <Header />
      <NavBar />
      {isLoading ? (
        <section className="h-screen grid place-items-center -translate-y-20">
          <div className="loading loading-ring loading-lg"></div>
        </section>
      ) : (
        <section className="align-element py-20">
        
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;

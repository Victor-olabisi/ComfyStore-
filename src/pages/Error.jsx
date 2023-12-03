import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="grid place-items-center h-screen mx-6">
      <div className="-translate-y-8 md:-translate-y-14 text-center">
        <h2 className="text-9xl text-primary font-bold ">404</h2>
        <h3 className="font-bold text-6xl capitalize items-center mt-6">
          page not found
        </h3>
        <p className="text-lg font-semibold tracking-wider mt-4">
          sorry we couldn't find the page you are lookin for
        </p>
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="btn bg-secondary text-white text-xl capitalize  mt-10"
          >
            go back home
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Error;

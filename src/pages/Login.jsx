import { Form } from "react-router-dom"
import { FormInput } from "../component";
import {Btn} from '../component'
import { Link } from "react-router-dom";
import { useNavigation } from "react-router-dom";
const Login = () => {
  return (
    <section className="grid place-items-center h-screen">
      <form className="card p-8 shadow-xl w-96  flex flex-col gap-y-4 bg-base-100">
        <h2 className="text-center font-bold text-3xl capitalize">login</h2>
        <FormInput type="text" labelText="email" name="email" />
        <FormInput type="password" labelText="password" name="password" />
        <div className="mt-6">
          <Btn text="login" />
        </div>
        <div>
          <button className="btn btn-block bg-[#3B3087] uppercase text-white font-normal">
            guest user
          </button>
        </div>
        <div className="flex gap-x-4 justify-center">
          <p>not a member yet?</p>
          <Link to='/register' className="link link-primary">register</Link>
        </div>
      </form>
    </section>
  );
}
export default Login
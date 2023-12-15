import { Link, Form, redirect } from "react-router-dom";
import { FormInput, Btn } from "../component";
import customFetch from "../utils";
import { toast } from "react-toastify";
// import { Action } from "@reduxjs/toolkit";

export const action = async({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const resp = await customFetch.post('/auth/local/register', data)
    toast.success('registered successfully')
    return redirect('/login')
    console.log(resp);
  } catch (error) {
    console.log(error);
    return null
  }
}


const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form method="POST" className="card w-96 flex flex-col gap-y-4 bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-bold capitalize text-center">register</h2>
        <FormInput type="text" labelText="username" name="username" />
        <FormInput type={"email"} labelText={"email"} name={"email"} />
        <FormInput type={"password"} labelText={"password"} name={"password"} />
<Btn text='register'/>
        <div className="flex gap-x-4 justify-center"><p>already a member</p>
        <Link to={'/login'} className="link link-primary capitalize">login</Link>
        </div>
      </Form>
    </section>
  );
};
export default Register;

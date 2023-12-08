import { Form } from "react-router-dom"
import FormInput from "./FormInput"
import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import FormSelect from "./FormSelect"
const Filter = () => {
  const { meta } = useLoaderData()
  // console.log(meta);
  const categories = meta.categories
  const companies = meta.companies
  return (
    <Form className="mb-16 rounded-md shadow-lg bg-base-200 px-8 py-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-y-8 gap-x-4">
      <FormInput type='search' name='search' labelText='search' size='input-sm' />
      <FormSelect name='category' labelText='select category' list={categories}  size='select-sm'/>
      <FormSelect name='company' labelText='select company' list={categories}  size='select-sm'/>
      <button className="btn btn-primary btn-sm" type="submit">search</button>
      <Link to='/products' className="btn btn-accent btn-sm">reset</Link>
    </Form>
  )
}
export default Filter
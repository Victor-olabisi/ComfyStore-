import { Form } from "react-router-dom"
import FormInput from "./FormInput"
import Btn from "./Btn"

const CheckoutForm = () => {
  return (
    <Form className="grid gap-y-6 mb-8 " method="post">
      <h3 className="text-2xl capitalize">shipping information</h3>
      <FormInput type={'text'} name='name' labelText={'first name'} />
      <FormInput type='text' name='address' labelText='address' />
      <Btn text='place your order'/>
    </Form>
  )
}
export default CheckoutForm
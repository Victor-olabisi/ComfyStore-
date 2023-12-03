import {
  About,
  Register,
  Landing,
  Order,
  Error,
  SingleProduct,
  Products,
  HomeLayout,
  Login,
  Checkout,
} from "./pages";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Landing/>}></Route>
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>

  );
};
export default App;

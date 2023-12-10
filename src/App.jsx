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
  Cart
} from "./pages";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from "./component";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productLoader } from './pages/Products'
// import {action as productsAction} from './component/Filter'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: ErrorElement,
        loader:landingLoader
      },
      {
        path: 'products',
        element: <Products />,
        loader: productLoader,
        // action:productsAction
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader:singleProductLoader
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Order />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;


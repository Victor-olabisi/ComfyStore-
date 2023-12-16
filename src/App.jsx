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
import {loader as checkoutLoader} from'./pages/Checkout'



import {action as registerAction} from './pages/Register'
import { action as loginAction } from "./pages/Login";

// import {action as productsAction} from './component/Filter'
import store from './store'
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
        loader:checkoutLoader(store)
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
    action:loginAction(store)
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action:registerAction
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;


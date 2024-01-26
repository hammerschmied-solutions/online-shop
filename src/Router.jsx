import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landingpage from './Landingpage';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';

const Router = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Landingpage /> },
    { path: 'shop', element: <Shop /> },
    { path: 'shopping-cart', element: <ShoppingCart /> },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;

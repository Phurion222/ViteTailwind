import { useRoutes } from 'react-router-dom';
import Home from '../../pages/home';
import MyAccount from '../../pages/myAccount';
import MyOrder from '../../pages/myOrder';
import MyOrders from '../../pages/myOrders';
import NotFound from '../../pages/notFound';
import SignIn from '../../pages/signIn';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ]);
  return routes;
}

export default AppRoutes;
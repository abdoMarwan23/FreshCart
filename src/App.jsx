import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import AuthContextProvider from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProtectAuthRoute from './Components/ProtectAuthRoute/ProtectAuthRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import CheckoutDetails from './Components/CheckoutDetails/CheckoutDetails';
import Orders from './Components/Orders/Orders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CatigoryDetails from './Components/CatigoryDetails/CatigoryDetails';
import BrandDetails from './Components/BrandDetails/BrandDetails';
import Wishlist from './Components/Wishlist/Wishlist';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import VerifyResetCode from './Components/VerifyResetCode/VerifyResetCode';
import ResetPassword from './Components/ResetPassword/ResetPassword';

function App() {

  const queryClient = new QueryClient()

  const route = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'rgister', element: <ProtectAuthRoute><Register /></ProtectAuthRoute> },
        { path: 'login', element: <ProtectAuthRoute><Login /></ProtectAuthRoute> },
        { path: 'forgetPassword', element: <ForgetPassword /> },
        { path: 'verifyResetCode', element: <VerifyResetCode /> },
        { path: 'resetPassword', element: <ResetPassword /> },
        { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'catigories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'wishList', element: <ProtectedRoute><Wishlist /></ProtectedRoute> },
        { path: 'checkoutDetails/:cartId', element: <ProtectedRoute> <CheckoutDetails /> </ProtectedRoute> },
        { path: 'allorders', element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: 'catigoryDetails/:id', element: <ProtectedRoute><CatigoryDetails /></ProtectedRoute> },
        { path: 'brandDetails/:id', element: <ProtectedRoute><BrandDetails /></ProtectedRoute> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
            <RouterProvider router={route} ></RouterProvider>
            <ToastContainer />
        </AuthContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App

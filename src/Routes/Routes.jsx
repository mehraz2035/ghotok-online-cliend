import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import BiodatasPage from "../pages/BiodatasPage/BiodatasPage";
import BiodataDetails from "../pages/BiodataDetails/BiodataDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import EditBiodata from "../pages/DashBoard/EditBiodata/EditBiodata";
import ViewBiodata from "../pages/DashBoard/ViewBiodata/ViewBiodata";
import MyContactRequest from "../pages/DashBoard/MyContactRequest/MyContactRequest";
import FavouritesBiodata from "../pages/DashBoard/FavouritesBiodata/FavouritesBiodata";
import AdminDashboard from "../pages/DashBoard/AdminDashboard/AdminDashboard";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers";
import ApprovedContactRequest from "../pages/DashBoard/approvedContactRequest/ApprovedContactRequest";
import CheckoutPage from "../pages/BiodataDetails/CheckoutPage";
import AdminApprovedPremium from "../pages/DashBoard/AdminApprovedPremium/AdminApprovedPremium";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import GotMarried from "../pages/GotMarried/GotMarried";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'biodatasPage',
        element: <BiodatasPage></BiodatasPage>
      },
      {
        path: '/biodataDetails/:id',
        element: <PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>
        // loader: ({params}) => fetch(`https://ghotok-online-server.vercel.app/biodatasAll/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkoutPage/:id',
        element: <CheckoutPage></CheckoutPage>
      },
      {
        path: 'contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'aboutUs',
        element: <AboutUs></AboutUs>
      }

    ]
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'editBiodata',
        element: <EditBiodata></EditBiodata>
      },
      {
        path: 'viewBiodata',
        element: <ViewBiodata></ViewBiodata>
      },
      {
        path: 'myContactRequest',
        element: <MyContactRequest></MyContactRequest>
      },
      {
        path: 'favouritesBiodata',
        element: <FavouritesBiodata></FavouritesBiodata>
      },
      {
        path: 'gotMarried',
        element: <GotMarried></GotMarried>  
      },
      {
        path: 'adminDashboard',
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'adminApprovedPremium',
        element: <AdminApprovedPremium></AdminApprovedPremium>
      },
      {
        path: 'approvedContactRequest',
        element: <ApprovedContactRequest></ApprovedContactRequest>
      }

    ]
  }
]);
import { createBrowserRouter, redirect } from "react-router-dom";
import RootLayout from "./views/layout/rootLayout";
import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Rooms from "./views/Rooms";
import Booking from "./views/Booking";
import MyBooking from "./views/ManageBookings";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect("/home");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect("/");
      }
      return null;
    },
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/booking/:id",
        element: <Booking />,
      },
      {
        path: "/my-bookings",
        element: <MyBooking />,
      },
    ],
  },
]);

export default Router;

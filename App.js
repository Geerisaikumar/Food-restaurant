import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./src/components/Cart";
import Error from "./Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import useContextAPI from "./src/components/utils/useContextAPI";
import { Provider } from "react-redux";
import store from "./src/components/utils/store";
import SignIn from "./SignIn";

let Applayout = () => {
  let [user, setUser] = useState({
    name: "Saikumar",
    email: "saikumargeeri@gmail.com",
  });

  let [deliveryCharges, setDeliveryCharges] = useState();

  const deliveryHandler = (charges) => {
    setDeliveryCharges(charges);
  };
  return (
    <Provider store={store}>
      <useContextAPI.Provider
        value={{ user, setUser, deliveryCharges, deliveryHandler }}
      >
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      </useContextAPI.Provider>
    </Provider>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

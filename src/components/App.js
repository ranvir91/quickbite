import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";

import Body from "./Body";
import About from "./About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import Errorpage from "./Errorpage";
import RestaurantPage from "./RestaurantPage";
import Offlinepage from "./Offlinepage";
import useOnlineStaus from "../utils/useOnlineStatus";


const App = () => {
    const onlineStatus = useOnlineStaus();
    return (!onlineStatus) ? <Offlinepage /> :(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children : [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantPage />
            },
            
        
        ],
        errorElement : <Errorpage />
    },
    // {
    //     path: "/",
    //     // element: <App />,
    //     errorElement: <Errorpage />
    // }
]);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);
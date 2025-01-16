// import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import { useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
        <Header />
        <div className="restaurant-card-shimmer">
            <h3>This is error page. {error.data}</h3>
        </div>
        <Footer />
        </>
    );
}

export default Errorpage;
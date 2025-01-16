// Class based component in React

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Offlinepage = () => {
    return (
        <>
        <Header/>
        <div>
            <h1>This page is currently offline.</h1>
            <p>Please check your internet connection and try again.</p>
        </div>
        <Footer/>
        </>
    );
}

export default Offlinepage;
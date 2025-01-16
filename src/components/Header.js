import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnname, setBtnname] = useState("Login");

    const loginclicked = () => {
        const btn = (btnname==="Login") ? "Logout" : "Login"
        setBtnname(btn);
    }

    return (
        <header>
            <div className="logo">QuickBite</div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact">Contact</Link>
            <a href="#" onClick={loginclicked}>{btnname}</a>
            </nav>
            <div className="username">Hello, Guest ({useOnlineStaus() ? "Online" : "offline"})</div>
        </header>    
    );
}

export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnname, setBtnname] = useState("Login");
    const onlineStatus = useOnlineStaus();
    // console.log(onlineStatus);    

    const loginclicked = () => {
        const btn = (btnname==="Login") ? "Logout" : "Login"
        setBtnname(btn);
    }

    return (
        <header>
            <div className="logo">QuickBite</div>
            <nav>
            {/* <Link key={1} to="/">({onlineStatus ? "Online" : "Offline"})</Link> */}
            <Link key={2} to="/">Home</Link>
            <Link key={3} to="/about" >About</Link>
            <Link key={4} to="/contact">Contact</Link>
            <a href="#" onClick={loginclicked}>{btnname}</a>
            </nav>
            <div className="username">Hello, Guest</div>
        </header>    
    );
}

export default Header;
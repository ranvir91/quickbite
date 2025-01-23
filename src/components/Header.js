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
        <header className="flex px-3 items-center shadow-lg bg-orange-400">
            <div className="flex">
                <Link to="/">QuickBite</Link>
            </div>
            <nav className=" float-right">
            {/* <Link key={1} to="/">({onlineStatus ? "Online" : "Offline"})</Link> */}
            <ul className="flex m-2 p-2 justify-between text-white float-right">
                <li className="mx-3">
                    <Link key={1} to="/grocery">Grocery</Link>
                </li>
            <li className="mx-3">
            <Link key={2} to="/">Home</Link>
            </li>
            <li className="mx-3">
            <Link key={3} to="/about" >About</Link>
            </li>
            <li className="mx-3">
            <Link key={4} to="/contact">Contact</Link>
            </li>
            <li className="mx-3">
            <a href="#" onClick={loginclicked}>{btnname}</a>
            </li>
            </ul>
            </nav>
        </header>    
    );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-4 bg-orange-400 clear-both">
            <p className="items-center text-white">
            © 2023 QuickBite | 
            <Link to="/privacy">Privacy Policy</Link> | 
            <Link to="/terms">Terms & Conditions</Link> | 
            <Link to="/help">Help</Link>
            </p>
        </footer>
    );
}

export default Footer;
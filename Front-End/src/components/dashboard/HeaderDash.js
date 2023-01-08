// import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "./NavBar";

const HeaderDash = () => {

    // const navigate = useNavigate();

    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/login');
    // }

    return (
        <header
            className="header"
        >
            <Navbar className="container elements elements--header-nav" />
        </header>
    );
}

export default HeaderDash;
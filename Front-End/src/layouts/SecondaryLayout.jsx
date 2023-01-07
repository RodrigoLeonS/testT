import { Outlet } from "react-router-dom";
import FooterDash from "../components/dashboard/FooterDash";
import HeaderDash from "../components/dashboard/HeaderDash";
import React, { useEffect, useState } from "react";

const SecondaryLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <>
        <React.Fragment>
                {isLoggedIn &&<HeaderDash />}
                        <Outlet />
                {isLoggedIn &&<FooterDash />}
        </React.Fragment>
        </>

    );
}

export default SecondaryLayout;
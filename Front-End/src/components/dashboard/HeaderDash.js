import { useNavigate } from "react-router-dom";
import React from "react";

const HeaderDash = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div >
                    <button className="button button--primary" onClick={logout}>Logout</button>
        </div>
    );
}

export default HeaderDash;
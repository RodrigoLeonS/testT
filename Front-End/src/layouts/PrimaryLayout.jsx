import { Outlet } from "react-router-dom";
import HeaderNavBarHome from "../components/section/Header";
import FooterHome from "../components/section/Footer";

const PrimaryLayout = () => {
    return (
        <>
            <HeaderNavBarHome />
            <section>
                <Outlet />
            </section>
            <FooterHome />
        </>
    );
}

export default PrimaryLayout;
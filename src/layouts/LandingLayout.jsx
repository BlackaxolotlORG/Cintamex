import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function LandingLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default LandingLayout;

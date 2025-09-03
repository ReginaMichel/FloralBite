import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import NavBar from "./NavBar.tsx";

export default function Header() {

    // Bei jedem Seitenwechsel soll ausgelöst werden, dass ein anderer Header-Hintergrund ausgewählt wird.
    // Dafür braucht es einen useEffect, der ausgelöst wird.
    // Dabei wird useLocation genutzt, um eine Änderung des Pfadnamens anzuzeigen.
    const location = useLocation();
    const [background, setBackground] = useState("header_03");

    useEffect(() => {
        if(location.pathname === "/" || location.pathname === "/about"){
            setBackground("header_03")
        } else if(location.pathname === "/gallery"){
            setBackground("header_02")
        } else if(location.pathname === "/adminlogin" || location.pathname === "/admin" || location.pathname === "/impressum"){
            setBackground("header_04")
        } else if(location.pathname === "/contact" || location.pathname === "/offer"){
            setBackground("header_01")
        }
    }, [location.pathname]);

    return (
        <header className={background}>
            <NavBar/>
        </header>
    )
}
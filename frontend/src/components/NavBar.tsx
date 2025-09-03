import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/offer"}>Angebot</Link>
            <Link to={"/about"}>Über uns</Link>
            <Link to={"/gallery"}>Galerie</Link>
            <Link to={"/contact"}>Kontakt</Link>
        </nav>
    )
}
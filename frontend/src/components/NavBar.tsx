import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/angebot"}>Angebot</Link>
            <Link to={"/ueber-uns"}>Über uns</Link>
            <Link to={"/galerie"}>Galerie</Link>
            <Link to={"/kontakt"}>Kontakt</Link>
        </nav>
    )
}
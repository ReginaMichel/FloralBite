import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className={"left"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/offer"}>Angebot</Link>
                <Link to={"/about"}>Über uns</Link>
                <Link to={"/gallery"}>Galerie</Link>
                <Link to={"/contact"}>Kontakt</Link>
            </div>
            <div className={"right"}>
                <Link to={"/impressum"}>Impressum</Link>
            </div>
        </footer>
    )
}
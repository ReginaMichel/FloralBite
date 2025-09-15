import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className={"left"}>
                <Link to={"/home"}>Home</Link>
                <Link to={"/angebot"}>Angebot</Link>
                <Link to={"/ueber-uns"}>Über uns</Link>
                <Link to={"/galerie"}>Galerie</Link>
                <Link to={"/kontakt"}>Kontakt</Link>
            </div>
            <div className={"right"}>
                <Link to={"/datenschutz"}>Datenschutz</Link>
                <Link to={"/impressum"}>Impressum</Link>
            </div>
        </footer>
    )
}
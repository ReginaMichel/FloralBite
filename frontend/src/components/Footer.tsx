import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className={"left"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/gallery"}>Galerie</Link>
            </div>
            <div className={"right"}>
                <Link to={"/impressum"}>Impressum</Link>
            </div>
        </footer>
    )
}
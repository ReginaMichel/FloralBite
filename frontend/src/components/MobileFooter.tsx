import {Link} from "react-router-dom";
import {Stack} from "@mui/material";

export default function MobileFooter() {
    return (
        <Stack
            spacing={2}
            sx={{ width: '100%' }}>
            <img src={"/assets/Element 95@4x.webp"} alt={"Logo-Schriftzug von FloralBite"}/>
            <footer>
                <div className={"left"}>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/offer"}>Angebot</Link>
                    <Link to={"/about"}>Über uns</Link>
                    <Link to={"/gallery"}>Galerie</Link>
                    <Link to={"/contact"}>Kontakt</Link>
                </div>
                <div className={"right"}>
                    <Link to={"/impressum"}>Impressum</Link>
                </div>
            </footer>
        </Stack>
    )
}
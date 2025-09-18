import {Link} from "react-router-dom";
import {offerCategories} from "../models/OfferCategory.ts";
import PriceList from "../components/PriceList.tsx";
import DesignBar from "../components/DesignBar.tsx";
import {Box} from "@mui/material";

export default function PricePage() {
    return (
        <>
            <h2>Angebote und Preise</h2>
            <p>Hier findest du die aktuellen Angebote und Preise. Für individuelle Angebote, kannst du dich auch
                gerne bei mir melden:</p>
            <Box sx={{textAlign: "center", paddingBottom: 1}}>
                <button className={"contactForm"}>
                    <Link to={"/kontakt"}>Individuelle Anfrage</Link>
                </button>
            </Box>
            <DesignBar/>
            {offerCategories.map((cat) => <PriceList type={cat}/>)}
            <Box sx={{textAlign: "center", py: {xs: '4%', sm: '3%'}}}>
                <h2 style={{marginTop: 0}}>Hungrig geworden?<br/>
                    Kontaktiere mich fürs Catering
                </h2>
                <button className={"contactForm"}>
                    <Link to={"/kontakt"}>Kontakt</Link>
                </button>
            </Box>
        </>
    )
}
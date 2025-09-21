import {Link} from "react-router-dom";
import {priceCategories} from "../models/OfferCategory.ts";
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
            {priceCategories.map((cat) => <PriceList type={cat}/>)}
            <h3>Weiteres Angebot</h3>
            <h4>Individuell für deine Veranstaltung</h4>
            <ul className="icon-list snail">
                <li>Große Torten, Motivtorten nach Absprache (Geburtstag, Hochzeit, besondere Anlässe)</li>
                <li>Catering-Menüs (auch ergänzend zu anderem Catering)</li>
                <li>Anfragen für Beerdigungen und Trauerfeiern</li>
            </ul>
            <h4>Saisonales Angebot</h4>
            <ul className="icon-list carrot">
                <li>Weihnachtsspecials</li>
                <li>Sommerspecials</li>
            </ul>
            <h4>Tipps und Tricks für eine gelungene Veranstaltung</h4>
            <ul className="icon-list apron">
                <li>Nachhaltige Dekoration, kreative Ideen ohne Umweltverschmutzung</li>
                <li>Alles reibungslos geplant?</li>
                <li>Kleines Budget? Kein Problem!</li>
            </ul>
            <DesignBar/>
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
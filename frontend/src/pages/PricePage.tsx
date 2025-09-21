import {Link} from "react-router-dom";
import {offerCategoryTitles, offerCategoryPriceInfo} from "../models/OfferCategory.ts";
import ColdOfferList from "../components/ColdOfferList.tsx";
import MenuOfferList from "../components/MenuOfferList.tsx";
import SavoryOfferList from "../components/SavoryOfferList.tsx";
import SweetOfferList from "../components/SweetOfferList.tsx";
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
            <h3>{offerCategoryTitles["cold"]}</h3>
            <p>{offerCategoryPriceInfo["cold"]}</p>
            <h4>Fingerfood und Streetfood</h4>
            <ColdOfferList subCat={"FINGERFOOD"}/>
            <h4>Salate</h4>
            <ColdOfferList subCat={"SALAD"}/>
            <DesignBar/>
            <h3>{offerCategoryTitles["menu"]}</h3>
            <p>{offerCategoryPriceInfo["menu"]}</p>
            <MenuOfferList/>
            <DesignBar/>
            <h3>{offerCategoryTitles["savory"]}</h3>
            <p>{offerCategoryPriceInfo["savory"]}</p>
            <SavoryOfferList/>
            <DesignBar/>
            <h3>{offerCategoryTitles["sweet"]}</h3>
            <p>{offerCategoryPriceInfo["sweet"]}</p>
            <h4>Cremige Desserts</h4>
            <SweetOfferList subCat={"DESSERT"}/>
            <h4>Kuchen und Schnitten</h4>
            <SweetOfferList subCat={"CAKE"}/>
            <DesignBar/>
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
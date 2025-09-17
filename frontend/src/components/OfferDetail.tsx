import {type OfferCategory, offerCategoryTitles, offerCategoryDescriptions} from "../models/OfferCategory.ts";
import Gallery from "./Gallery.tsx";
import {Link} from "react-router-dom";
import {Stack} from "@mui/material";

type OfferDetailProps = {
    type: OfferCategory;
}

export default function OfferDetail(props: Readonly<OfferDetailProps>) {

    const title = offerCategoryTitles[props.type];
    const description = offerCategoryDescriptions[props.type];

    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Beispiele</h3>
            <Gallery type={props.type} title={""}/>
            <h3>Angebot und Preise</h3>
            <p>Lust auf mehr? Konkrete Angebote und Preise findest du in der Angebotsübersicht oder melde dich bei mir
            für ein individuelles Angebot nach deinen Wünschen. Ich freue mich, von dir zu hören.</p>
            {/* Button-Komponente vom Typ Link ist besser für die Barrierefreiheit als Buttons und Links zu
            verschachteln. */}
            <Stack spacing={2} direction="row">
                <button className={"contactForm"}>
                    <Link to={"/preise"}>Angebotsübersicht</Link>
                </button>
                <button className={"contactForm"}>
                    <Link to={"/kontakt"}>Individuelle Anfrage</Link>
                </button>
            </Stack>
        </>
    )
}
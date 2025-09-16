import type {OfferCategory} from "../models/OfferCategory.ts";
import {Box} from "@mui/material";

type OfferCardProps = {
    type: OfferCategory;
}

export default function OfferCard(props: Readonly<OfferCardProps>) {

    let title = "";
    if (props.type === "cold") {
        title = "Kalte Auswahl";
    } else if (props.type === "menu") {
        title = "Festliche Menüs";
    } else if (props.type === "sweet") {
        title = "Süße Auswahl";
    } else if (props.type === "savory") {
        title = "Süß und salzig";
    } else if (props.type === "special") {
        title = "Specials";
    } else if (props.type === "party") {
        title = "Festbedarf";
    }

    return (
        <Box sx={{borderRadius: "0.4rem", textAlign: "center", backgroundColor: "var(--light-sage-green)", p: 1,
            aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h3>{title}</h3>
        </Box>
    )
}
import type {OfferCategory} from "../models/OfferCategory.ts";
import {Box} from "@mui/material";

type OfferDetailProps = {
    type: OfferCategory;
}

export default function OfferDetail(props: Readonly<OfferDetailProps>) {

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
        <Box
            className="front"
            sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "var(--light-sage-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.4rem",
            }}
        >
            <h3 style={{ margin: 0, padding: "0 8px", textAlign: "center" }}>{title}</h3>
        </Box>
    )
}
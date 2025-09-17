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
    const imageUrl = "/assets/" + props.type + ".webp";

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                boxSizing: "border-box",
                borderRadius: "0.4rem",
                overflow: "hidden",
                '&:hover .front': {
                    opacity: 0,
                },
                '&:hover .back': {
                    opacity: 1,
                },
            }}
        >
            {/* Vorderseite */}
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
                    transition: "opacity 0.5s ease-in-out",
                    opacity: 1,
                    zIndex: 2,
                }}
            >
                <h3 style={{ margin: 0, padding: "0 8px", textAlign: "center" }}>{title}</h3>
            </Box>

            {/* Rückseite */}
            <Box
                className="back"
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    transition: "opacity 0.5s ease-in-out",
                    zIndex: 1,
                }}
            >
                <img
                    src={imageUrl}
                    alt={`Eine Speise der Kategorie ${title}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "0.4rem",
                        display: "block",
                    }}
                />
            </Box>
        </Box>
    )
}
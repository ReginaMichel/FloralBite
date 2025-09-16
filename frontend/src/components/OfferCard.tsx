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
    const imageUrl = "/assets/julia_001.webp"

    /* Aufbau in eine äußere und eine innere Box, damit ein 3D-Effekt möglich ist.
    * perspective: "2000px" bedeutet, dass die "Kamera" für den 3D-Effekt 2000px vom Geschehen entfernt wirkt. Dadurch
    * wirkt es natürlicher und sanfter, als bei einem kleineren Wert.
    * boxSizing: "border-box" ist nötig, damit das spacing vom übergeordneten Grid noch funktioniert. */
    return (
        <Box
            sx={{
                perspective: "2000px",
                width: "100%",
                aspectRatio: "1 / 1",
                boxSizing: "border-box",
            }}
        >
            {/* Die innere Box, die die Transformation durchführt. Wenn man mit der Maus über die Karte hovert, wird
             sie umgedreht. */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transition: "transform 1s",
                    transformStyle: "preserve-3d",
                    borderRadius: "0.4rem",
                    '&:hover': {
                        transform: "rotateY(180deg)",
                    },
                }}
            >
                {/* Vorderseite der Karte, die den Titel zeigt. */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: "0.4rem",
                        backgroundColor: "var(--light-sage-green)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Padding muss direkt in den h3-Tag, da es sonst zu Verzerrungen und Verschiebungen kommt. */}
                    <h3 style={{ margin: 0, padding: "0 8px", textAlign: "center" }}>{title}</h3>
                </Box>
                {/* Rückseite der Karte, die ein Bild zeigt. */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0.4rem",
                        overflow: "hidden",
                        boxSizing: "border-box",
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
        </Box>
    )
}
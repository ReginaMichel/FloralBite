import {type OfferCategory, offerCategoryTitles} from "../models/OfferCategory.ts";
import {Box} from "@mui/material";
import {useIsTouchDevice} from "../utils/useIsTouchDevice.ts";
import {useState} from "react";

type OfferCardProps = {
    type: OfferCategory;
}

export default function OfferCard(props: Readonly<OfferCardProps>) {

    const title = offerCategoryTitles[props.type];
    const imageUrl = "/assets/" + props.type + ".webp";

    // Abfrage, ob das Gerät ein Touch- oder Mausgerät ist:
    const isTouchDevice = useIsTouchDevice();
    // Zustand der Karte:
    const [flipped, setFlipped] = useState(false);
    // Bei Touch-Geräten, soll ein Click die Karte umdrehen:
    const handleClick = () => {
        if (isTouchDevice) {
            setFlipped((prev) => !prev);
        }
    };

    return (
        <Box
            // Bei Touch-Geräten ist klicken möglich:
            onClick={handleClick}
            sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                boxSizing: "border-box",
                borderRadius: "0.4rem",
                overflow: "hidden",
                // Hover-Effekt nur bei Maus-Geräten. Überschreibt die opacity, die durch "flipped" angegeben wird:
                '&:hover .front': {
                    opacity: isTouchDevice ? undefined : 0,
                },
                '&:hover .back': {
                    opacity: isTouchDevice ? undefined : 1,
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
                    transition: "opacity 0.4s ease-in-out",
                    // Opacity und z-Position kann auch durch Anklicken auf einem Smartphone geändert werden
                    opacity: flipped ? 0 : 1,
                    zIndex: flipped ? 1 : 2,
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
                    transition: "opacity 0.4s ease-in-out",
                    // Opacity und z-Position kann auch durch Anklicken auf einem Smartphone geändert werden
                    opacity: flipped ? 1 : 0,
                    zIndex: flipped ? 2 : 1,
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
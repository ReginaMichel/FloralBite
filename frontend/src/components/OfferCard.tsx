import {type OfferCategory, offerCategoryTitles} from "../models/OfferCategory.ts";
import {Box} from "@mui/material";
import {useIsTouchDevice} from "../utils/useIsTouchDevice.ts";
import {useState, type MouseEvent, useEffect} from "react";

type OfferCardProps = {
    type: OfferCategory;
    select: (type: OfferCategory) => void;
}

export default function OfferCard(props: Readonly<OfferCardProps>) {

    const title = offerCategoryTitles[props.type];
    const imageUrl = "/assets/" + props.type + ".webp";

    // Abfrage, ob das Gerät ein Touch- oder Mausgerät ist:
    const isTouchDevice = useIsTouchDevice();
    // Zustand der Karte:
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        // Bei Touch-Geräten, soll ein Klick die Karte umdrehen:
        if (isTouchDevice) {
            setFlipped((prev) => !prev);
        // Bei Maus-Geräten, soll ein Klick die Detailansicht öffnen:
        } else {
            props.select(props.type);
        }
    };
    const handleMobileClick = (event: MouseEvent) => {
        // Verhindert, das zu dem handleMobileClick der inneren Box zusätzlich noch das handleClick der äußeren Box
        // aufgerufen wird.
        event.stopPropagation();
        props.select(props.type);
    }
    // Touch-Geräten soll sich die Karte nach 4 Sekunden von selbst wieder zurückdrehen. Damit User nicht mit den
    // umgedrehten Karten festhängen und nicht mehr wissen, welche Kategorie es überhaupt war. :)
    useEffect(() => {
        if (isTouchDevice && flipped) {
            const timeout = setTimeout(() => {
                setFlipped(false);
            }, 4000);
            // Cleanup, falls die Komponente vorher schon zurückgedreht wird oder gar nicht mehr angezeigt wird.
            // Damit der Timeout nicht mehr eintritt, wenn sie schon weg ist.
            return () => clearTimeout(timeout);
        }
    }, [flipped, isTouchDevice]);

    return (
        <Box
            // Bei Touch-Geräten ist klicken möglich, um die Karte zu drehen und das Bild anzuzeigen,
            // bei Maus-Geräten ist klicken möglichen, um die Detailansicht zu öffnen.
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
                    backgroundColor: "var(--light-sage-green)",
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
                        height: isTouchDevice ? "77%" : "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
                {isTouchDevice ? <Box sx={{display: "flex", justifyContent: "center", height: "23%", alignItems: "center"}}
                    onClick={handleMobileClick}>
                    <p style={{margin: 0, fontWeight: 600}}>Mehr Infos?</p>
                </Box> : null}
            </Box>
        </Box>
    )
}
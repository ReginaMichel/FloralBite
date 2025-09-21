import {Link} from "react-router-dom";
import {Stack} from "@mui/material";

export default function ToPricePage() {
    return (
        <>
            <h3>Angebot und Preise</h3>
            <p>Lust auf mehr? Konkrete Angebote und Preise findest du in der Angebotsübersicht oder melde dich bei mir
                für ein individuelles Angebot nach deinen Wünschen. Ich freue mich, von dir zu hören.</p>
            {/* Button-Komponente vom Typ Link ist besser für die Barrierefreiheit als Buttons und Links zu
            verschachteln. */}
            <Stack spacing={3} direction="row" sx={{py: 1.5}}>
                {/* Bei Bedarf Zeilenumbruch mit automatischem Bindestrich. */}
                <button className={"contactForm wordbreak"}>
                    <Link to={"/preise"} lang={"de"}>Angebotsübersicht</Link>
                </button>
                <button className={"contactForm"}>
                    <Link to={"/kontakt"}>Individuelle Anfrage</Link>
                </button>
            </Stack>
        </>
    )
}
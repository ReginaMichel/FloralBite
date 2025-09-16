import {Link} from "react-router-dom";
import {Stack, Box} from "@mui/material";

export default function MobileFooter() {
    return (
        <Stack
            spacing={0}
            sx={{ width: '100%', color: 'white !important', '& h3': {color: 'white !important'},
                '& a': {color: 'white !important'}, '& p': {color: 'white !important', fontSize: '1rem !important'},
                backgroundColor: 'var(--dark-green)', padding: '2rem'}}>
            <Box sx={{ px: '0' }}>
                <img src={"/assets/Element 95@4x.webp"} alt={"Logo-Schriftzug von FloralBite"} width={'40%'}/>
            </Box>
            <h3>Webangebot</h3>
            <Link to={"/home"}>Home</Link>
            <Link to={"/angebot"}>Angebot</Link>
            <Link to={"/ueber-uns"}>Über uns</Link>
            <Link to={"/galerie"}>Galerie</Link>
            <Link to={"/kontakt"}>Kontakt</Link>
            <h3>Kontakt</h3>
            <p>Julia Schreck<br/>
                FloralBite - Catering<br/>
                Niebergallstraße 11<br/>
                64331 Weiterstadt</p>
            <p>Telefon:<br/>
                E-Mail:{" "}<a href="mailto:info@floralbite.de">info@floralbite.de</a></p>
            <h3>Social Media</h3>
            <a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a>
            <h3>Rechtliches</h3>
            <Link to={"/datenschutz"}>Datenschutz</Link>
            <Link to={"/impressum"}>Impressum</Link>
        </Stack>
    )
}
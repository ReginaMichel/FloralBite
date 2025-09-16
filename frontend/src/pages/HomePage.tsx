import {Grid, Box, IconButton} from "@mui/material";
import Gallery from "../components/Gallery.tsx";
import DesignBar from "../components/DesignBar.tsx";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Grid container spacing={1}>
                <Grid size={{xs: 12, sm: 5}}>
                    <Box sx={{ px: '10%' }}>
                        <img src={"/assets/Element 97@4x.webp"} alt={"Logo von Floral Bite"} className={"logoHome"}/>
                    </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 7}}>
                        <h1>Willkommen bei FloralBite</h1>
                        <p>Schön, dass du hier bist. Ich liebe gutes Essen und genau das möchte ich mit dir teilen.
                        Frisch gekocht, kreativ angerichtet und mit einer Portion Leidenschaft serviert. Ob kleine
                        Feier im Kreis der Familie oder großes Event, ich sorge dafür, dass niemand hungrig nach Hause
                        geht.</p>
                </Grid>
            </Grid>
            <h2>Galerie</h2>
            <div className="galleryPage">
                <Gallery type={"herzh"} title={""}/>
                <Gallery type={"suess"} title={""}/>
            </div>
            <DesignBar/>
            <Grid container spacing={0}>
                <Grid size={{xs: 12, sm: 3}}>
                    <h2 style={{marginTop: 0}}>Info</h2>
                </Grid>
                <Grid size={{xs: 12, sm: 9}}>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                </Grid>
            </Grid>
            <Box sx={{ px: {xs: '0', sm: '30%'}, py: {xs: '4%', sm: '3%'}}}>
                <img src={"/assets/julia_001.webp"} alt={"Julia Schreck von FloralBite präsentiert eine kunstvolle Hochzeitstorte"} className={"pictureJulia"}/>
            </Box>
            <Box sx={{textAlign: "center", py: {xs: '4%', sm: '3%'}}}>
                <h2 style={{marginTop: 0}}>Hungrig geworden?<br/>
                    Kontaktiere mich fürs Catering
                </h2>
                <button className={"contactForm"}>
                    <Link to={"/kontakt"}>Kontakt</Link>
                </button>
            </Box>
            <DesignBar/>
            <Box sx={{textAlign: 'center', py: { xs: '2%', sm: '1.5%' },}}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 0, // Abstand zwischen Text und Icon schon durch den Mindestfreiabstand gegeben
                        flexWrap: 'wrap', // Responsives Verhalten
                    }}
                >
                    <h2 style={{ margin: 0 }}>Du findest mich auch auf Instagram</h2>
                    {/* a -> rendere es als Link und nicht als Button
                    _blank -> öffne es in einem neuem Tab
                    noopener -> für die sicherheit, damit der neue Tab keinen Bezug zum bisherigen bekommt
                    aria_label -> für Screenreader */}
                    <IconButton
                        component="a"
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener"
                        aria-label="Instagram"
                        disableRipple
                        sx={{
                            p: 0,
                            m: 'calc(3.5rem / 2)', // halb so viel wie max. Iconhöhe, von Instagram vorgegeben
                        }}
                    >
                        <Box
                            component="img"
                            src="/assets/Instagram_Glyph_PestoGreen.svg"
                            alt="Instagram"
                            sx={{
                                height: { xs: '2.5rem', sm: '3.5rem' }, // Instagram-Mindestgröße > 29px
                                width: 'auto',
                                display: 'block',
                            }}
                        />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}
import {Grid, Box} from "@mui/material";
import Gallery from "../components/Gallery.tsx";

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
        </>
    )
}
import {Grid, Box} from "@mui/material";
import Gallery from "../components/Gallery.tsx";
import DesignBar from "../components/DesignBar.tsx";

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
                    <h2>Info</h2>
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
        </>
    )
}
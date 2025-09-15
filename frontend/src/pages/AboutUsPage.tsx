import {Box, Grid} from "@mui/material";

export default function AboutUsPage() {
    return (
        <div className="AboutUsPage">
            <Grid container spacing={1} alignItems={"center"}>
                <Grid size={{xs: 12, sm: 5}}>
                    <Box sx={{px: {xs: '0', sm: '12%'}}}>
                        <img src={"/assets/julia_002.webp"}
                             alt={"Julia Schreck von FloralBite präsentiert eine kunstvolle Hochzeitstorte"}
                             className={"pictureJulia"}/>
                    </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 7}}>
                    <h2>Hi, ich bin Julia</h2>
                    <p>Ich habe FloralBite ins Leben gerufen, weil ich wahnsinnig gerne für Menschen koche und backe
                        und weil mir Tierschutz und Nachhaltigkeit am Herzen liegen.</p>
                    <p>Im Hintergrund tragen viele Menschen dazu bei, meinen Traum Wirklichkeit werden zu lassen.
                        Logo und Design wurden von Katharina Konradi geschaffen. Die Webseite wird von Regina Michel
                        gebaut und betrieben.</p>
                </Grid>
            </Grid>
        </div>
    )
}
import {Box, Grid} from "@mui/material";

export default function PlaceholderPage() {

    return (
        <>
            <img src={"/assets/Element 100@4x.webp"} alt={"Logo von Floral Bite"} className={"placeholderLogo"}/>
            <Grid container spacing={1}>
                <Grid size={{xs: 12, sm: 5}}>
                    <Box sx={{ px: '10%' }}>
                        <img src={"/assets/Element 97@4x.webp"} alt={"Logo von Floral Bite"} className={"logoHome"}/>
                    </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 7}}>
                    <h1>Willkommen bei FloralBite</h1>
                    <p>Schön, dass du hier bist. Die Website befindet sich noch im Aufbau. Wenn du Fragen hast, kannst
                        du dich gerne an Julia Schreck wenden.</p>
                </Grid>
            </Grid>
        </>
    );
}
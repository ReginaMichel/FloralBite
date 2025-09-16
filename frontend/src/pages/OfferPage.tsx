import OfferCard from "../components/OfferCard.tsx";
import {Grid} from "@mui/material";

export default function OfferPage() {
    return (
        <>
            <h2>Das Angebot von FloralBite</h2>
            <Grid container spacing={3.5} sx={{py: 0.5}}>
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 2}}><OfferCard type={"cold"}/></Grid>
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 2}}><OfferCard type={"menu"}/></Grid>
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 2}}><OfferCard type={"sweet"}/></Grid>
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 2}}><OfferCard type={"savory"}/></Grid>
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 2}}><OfferCard type={"special"}/></Grid>
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 2}}><OfferCard type={"party"}/></Grid>
            </Grid>
        </>
    )
}
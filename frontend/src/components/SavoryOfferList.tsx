import {type SavoryOffer} from "../models/SavoryOffer.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";

export default function SingleOfferList() {
    
    const [offers, setOffers] = useState<SavoryOffer[]>([]);
    const loadOffers = () => {
        axios
            .get("/api/offers/savory")
            .then((response) => {
                setOffers(response.data);
            })
    }
    useEffect(() => {
        loadOffers();
    },[])

    return(
        <>
            {offers.map((offer) => (
                <>
                    <h4>{offer.name}</h4>
                    <Grid container>
                        <Grid size={{xs: 12, sm: 3, md: 2}}>
                            <p style={{margin: 0}}>Herzhaftes</p>
                        </Grid>
                        <Grid size={{xs: 12, sm: 9, md: 10}}>
                            <p style={{margin: 0}}>{offer.savoryDishes.join(', ')}</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid size={{xs: 12, sm: 3, md: 2}}>
                            <p style={{margin: 0}}>Süßspeisen</p>
                        </Grid>
                        <Grid size={{xs: 12, sm: 9, md: 10}}>
                            <p style={{margin: 0}}>{offer.sweetDishes.join(', ')}</p>
                        </Grid>
                    </Grid>
                </>
            ))}
        </>
    )
}
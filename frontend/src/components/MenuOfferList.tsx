import {type MenuOffer} from "../models/MenuOffer.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";

export default function SingleOfferList() {
    
    const [offers, setOffers] = useState<MenuOffer[]>([]);
    const loadOffers = () => {
        axios
            .get("/api/offers/menu")
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
                            <p style={{margin: 0}}>Vorspeisen</p>
                        </Grid>
                        <Grid size={{xs: 12, sm: 9, md: 10}}>
                            <p style={{margin: 0}}>{offer.starters.join(', ')}</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid size={{xs: 12, sm: 3, md: 2}}>
                            <p style={{margin: 0}}>Hauptspeisen</p>
                        </Grid>
                        <Grid size={{xs: 12, sm: 9, md: 10}}>
                            <p style={{margin: 0}}>{offer.mainDishes.join(', ')}</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid size={{xs: 12, sm: 3, md: 2}}>
                            <p style={{margin: 0}}>Desserts</p>
                        </Grid>
                        <Grid size={{xs: 12, sm: 9, md: 10}}>
                            <p style={{margin: 0}}>{offer.desserts.join(', ')}</p>
                        </Grid>
                    </Grid>
                </>
            ))}
        </>
    )
}
import {type SingleOffer} from "../models/SingleOffer.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";
import type {PriceCategory} from "../models/OfferCategory.ts";
import type {PriceSubcategory} from "../models/OfferCategory.ts";

type SingleOfferListProps = {
    cat: PriceCategory;
    subCat: PriceSubcategory;
}

export default function SingleOfferList(props: Readonly<SingleOfferListProps>) {
    
    const [offers, setOffers] = useState<SingleOffer[]>([]);
    const loadOffers = () => {
        axios
            .get("/api/offers/"+props.cat)
            .then((response) => {
                setOffers(response.data);
            })
    }
    useEffect(() => {
        loadOffers();
    },[])

    return(
        <>
            {offers.filter((offer) => (offer.category === props.subCat))
                .map((offer) => (
                <Grid container>
                    <Grid size={{xs: 12, sm: 3}}>
                        <p style={{fontWeight: "bold", margin: 0}}>{offer.name}</p>
                    </Grid>
                    <Grid size={{xs: 12, sm: 9}}>
                        <p style={{margin: 0}}>{offer.description}</p>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}
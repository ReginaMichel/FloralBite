import {type SingleOffer} from "../models/SingleOffer.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import type {PriceSubcategory} from "../models/OfferCategory.ts";

type SweetOfferListProps = {
    subCat: PriceSubcategory;
}

export default function SweetOfferList(props: Readonly<SweetOfferListProps>) {
    
    const [offers, setOffers] = useState<SingleOffer[]>([]);
    const loadOffers = () => {
        axios
            .get("/api/offers/sweet")
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
                <p style={{fontWeight: "600", margin: 0}}>{offer.name}</p>
            ))}
        </>
    )
}
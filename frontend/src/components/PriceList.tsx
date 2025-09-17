import {type OfferCategory, offerCategoryTitles} from "../models/OfferCategory.ts";
import DesignBar from "../components/DesignBar.tsx";

type PriceListProps = {
    type: OfferCategory;
}

export default function PriceList(props: Readonly<PriceListProps>) {
    return(
        <>
            <h3>{offerCategoryTitles[props.type]}</h3>
            <DesignBar/>
        </>
    )
}
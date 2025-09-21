import {type PriceCategory, offerCategoryTitles, offerCategoryPriceInfo} from "../models/OfferCategory.ts";
import DesignBar from "../components/DesignBar.tsx";

type PriceListProps = {
    type: PriceCategory;
}

export default function PriceList(props: Readonly<PriceListProps>) {
    return(
        <>
            <h3>{offerCategoryTitles[props.type]}</h3>
            <p>{offerCategoryPriceInfo[props.type]}</p>
            <DesignBar/>
        </>
    )
}
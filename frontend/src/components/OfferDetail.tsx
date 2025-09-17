import {type OfferCategory, offerCategoryTitles, offerCategoryDescriptions} from "../models/OfferCategory.ts";

type OfferDetailProps = {
    type: OfferCategory;
}

export default function OfferDetail(props: Readonly<OfferDetailProps>) {

    const title = offerCategoryTitles[props.type];
    const description = offerCategoryDescriptions[props.type];

    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
        </>
    )
}
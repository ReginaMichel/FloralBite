import {type OfferCategory, offerCategoryTitles} from "../models/OfferCategory.ts";
import {Box} from "@mui/material";

type OfferDetailProps = {
    type: OfferCategory;
}

export default function OfferDetail(props: Readonly<OfferDetailProps>) {

    const title = offerCategoryTitles[props.type];

    return (
        <Box
            className="front"
            sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "var(--light-sage-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.4rem",
            }}
        >
            <h3 style={{ margin: 0, padding: "0 8px", textAlign: "center" }}>{title}</h3>
        </Box>
    )
}
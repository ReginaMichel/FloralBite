import OfferCard from "../components/OfferCard.tsx";
import OfferDetail from "../components/OfferDetail.tsx";
import {Grid} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import DesignBar from "../components/DesignBar.tsx";
import {offerCategories, type OfferCategory} from "../models/OfferCategory.ts";

export default function OfferPage() {

    const [selected, setSelected] = useState<OfferCategory | undefined>(undefined);

    // Referenzpunkt für flexibles Scrollen zur Detailansicht
    const detailRef = useRef<HTMLDivElement>(null);
    // Jedes Mal, wenn die Detailansicht geöffnet wird, springt die Ansicht hoch zur Detailansicht
    useEffect(() => {
        if (selected !== undefined) {
            detailRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selected]);

    return (
        <>
            {selected === undefined ? <h2>Das Angebot von FloralBite</h2>
                : <>
                    {/* Referenzpunkt für das Scrollen zur Detailansicht */}
                    <div ref={detailRef}>
                        <OfferDetail type={selected}/>
                    </div>
                    <DesignBar/>
                    <h2>Weitere Angebote</h2>
                </>}
            <Grid container spacing={3} sx={{py: 0.5}}>
                {offerCategories
                    .filter((cat) => cat!== selected)
                    .map((cat) =>
                    (<Grid size={{xs: 6, sm: 6, md: 4, lg: 2}}><OfferCard type={cat} select={setSelected}/></Grid>))}
            </Grid>
        </>
    )
}
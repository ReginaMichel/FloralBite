import {offerCategoryTitles} from "../models/OfferCategory.ts";
import ColdOfferList from "./ColdOfferList.tsx";
import MenuOfferList from "./MenuOfferList.tsx";
import SavoryOfferList from "./SavoryOfferList.tsx";
import SweetOfferList from "./SweetOfferList.tsx";
import {type FormEvent, useState} from "react";
import {Box, MenuItem, Stack, TextField} from "@mui/material";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner.tsx";
import DesignBar from "./DesignBar.tsx";

export default function AdminOfferForm() {

    const [coldName, setColdName] = useState<string>("");
    const [coldCategory, setColdCategory] = useState<string>("");
    const [coldDescription, setColdDescription] = useState<string>("");

    const [sendingCold, setSendingCold] = useState<boolean>(false);

    async function submitCold(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSendingCold(true);
        try {
            await axios.post(`/api/offers/cold`, {
                name: coldName,
                category: coldCategory,
                description: coldDescription
            });
        } finally {
            setColdName("");
            setColdCategory("");
            setColdDescription("");
            setSendingCold(false);
        }
    }

    return(
        <>
            <h2>Speisen auf der Angebotsseite</h2>
            <h3>{offerCategoryTitles["cold"]}</h3>
            <h4>Fingerfood und Streetfood</h4>
            <ColdOfferList subCat={"FINGERFOOD"}/>
            <h4>Salate</h4>
            <ColdOfferList subCat={"SALAD"}/>
            <h4>Kalte Speise hinzufügen</h4>
            <Box sx={{ position: 'relative' }}>
                {/* Lade-Icon Overlay */}
                {sendingCold && (
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0, // Kurzform für top/left/right/bottom: 0
                            backgroundColor: 'rgba(255,255,255,0.7)', // halbtransparentes Weiß
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10, // damit es definitiv über allem anderen liegt
                        }}
                    >
                        <LoadingSpinner />
                    </Box>
                )}
                <Stack component="form" spacing={2} noValidate onSubmit={submitCold}>
                    <TextField
                        label="Kategorie"
                        value={coldCategory}
                        onChange={(e) => setColdCategory(e.target.value)}
                        select
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--dark-green)',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--sage-green)',
                            },
                            '& label.Mui-focused': {
                                color: 'var(--sage-green)',
                            },
                        }}
                        required
                    >
                        <MenuItem value="FINGERFOOD">Fingerfood und Streetfood</MenuItem>
                        <MenuItem value="SALAD">Salat</MenuItem>
                    </TextField>
                    <TextField
                        label="Name"
                        value={coldName}
                        onChange={(e) => setColdName(e.target.value)}
                        required
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--dark-green)',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--sage-green)',
                            },
                            '& label.Mui-focused': {
                                color: 'var(--sage-green)',
                            },
                        }}
                    />
                    <TextField
                        label="Beschreibung"
                        value={coldDescription}
                        onChange={(e) => setColdDescription(e.target.value)}
                        required
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--dark-green)',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--sage-green)',
                            },
                            '& label.Mui-focused': {
                                color: 'var(--sage-green)',
                            },
                        }}
                    />
                    <button disabled={sendingCold} type="submit"
                            className={"contactForm"}>{sendingCold ? "Wird eingetragen…" : "Eintragen"}</button>
                </Stack>
            </Box>
            <DesignBar/>
            <h3>{offerCategoryTitles["menu"]}</h3>
            <MenuOfferList/>
            <DesignBar/>
            <h3>{offerCategoryTitles["savory"]}</h3>
            <SavoryOfferList/>
            <DesignBar/>
            <h3>{offerCategoryTitles["sweet"]}</h3>
            <h4>Cremige Desserts</h4>
            <SweetOfferList subCat={"DESSERT"}/>
            <h4>Kuchen und Schnitten</h4>
            <SweetOfferList subCat={"CAKE"}/>
        </>
    )
}
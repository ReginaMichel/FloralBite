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

    const [menuName, setMenuName] = useState<string>("");
    const [menuStarters, setMenuStarters] = useState<string>("");
    const [menuMainDishes, setMenuMainDishes] = useState<string>("");
    const [menuDesserts, setMenuDesserts] = useState<string>("");
    const [sendingMenu, setSendingMenu] = useState<boolean>(false);
    async function submitMenu(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSendingMenu(true);
        try {
            await axios.post(`/api/offers/menu`, {
                name: menuName,
                starters: menuStarters.split(", "),
                mainDishes: menuMainDishes.split(", "),
                desserts: menuDesserts.split(", "),
                price: ""
            });
        } finally {
            setMenuName("");
            setMenuStarters("");
            setMenuMainDishes("");
            setMenuDesserts("");
            setSendingMenu(false);
        }
    }

    const [savoryName, setSavoryName] = useState<string>("");
    const [savorySavoryDishes, setSavorySavoryDishes] = useState<string>("");
    const [savorySweetDishes, setSavorySweetDishes] = useState<string>("");
    const [sendingSavory, setSendingSavory] = useState<boolean>(false);
    async function submitSavory(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSendingSavory(true);
        try {
            await axios.post(`/api/offers/savory`, {
                name: savoryName,
                savoryDishes: savorySavoryDishes.split(", "),
                sweetDishes: savorySweetDishes.split(", "),
                price: ""
            });
        } finally {
            setSavoryName("");
            setSavorySavoryDishes("");
            setSavorySweetDishes("");
            setSendingSavory(false);
        }
    }

    const [sweetName, setSweetName] = useState<string>("");
    const [sweetCategory, setSweetCategory] = useState<string>("");
    const [sendingSweet, setSendingSweet] = useState<boolean>(false);
    async function submitSweet(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSendingSweet(true);
        try {
            await axios.post(`/api/offers/sweet`, {
                name: sweetName,
                category: sweetCategory,
                description: ""
            });
        } finally {
            setSweetName("");
            setSweetCategory("");
            setSendingSweet(false);
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
                <Stack component="form" spacing={1} noValidate onSubmit={submitCold}>
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
            <h4>Festliches Menü hinzufügen</h4>
            <Box sx={{ position: 'relative' }}>
                {/* Lade-Icon Overlay */}
                {sendingMenu && (
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
                <Stack component="form" spacing={1} noValidate onSubmit={submitMenu}>
                    <TextField
                        label="Name"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
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
                        label="Vorspeisen"
                        placeholder="Vorspeisen (mit Komma und Leerzeichen getrennt)"
                        value={menuStarters}
                        onChange={(e) => setMenuStarters(e.target.value)}
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
                        label="Hauptspeisen"
                        placeholder="Hauptspeisen (mit Komma und Leerzeichen getrennt)"
                        value={menuMainDishes}
                        onChange={(e) => setMenuMainDishes(e.target.value)}
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
                        label="Desserts"
                        placeholder="Desserts (mit Komma und Leerzeichen getrennt)"
                        value={menuDesserts}
                        onChange={(e) => setMenuDesserts(e.target.value)}
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
                    <button disabled={sendingMenu} type="submit"
                            className={"contactForm"}>{sendingMenu ? "Wird eingetragen…" : "Eintragen"}</button>
                </Stack>
            </Box>
            <DesignBar/>
            <h3>{offerCategoryTitles["savory"]}</h3>
            <SavoryOfferList/>
            <h4>Süß und salzige Kombination hinzufügen</h4>
            <Box sx={{ position: 'relative' }}>
                {/* Lade-Icon Overlay */}
                {sendingSavory && (
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
                <Stack component="form" spacing={1} noValidate onSubmit={submitSavory}>
                    <TextField
                        label="Name"
                        value={savoryName}
                        onChange={(e) => setSavoryName(e.target.value)}
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
                        label="Herzhaftes"
                        placeholder="Herzhaftes (mit Komma und Leerzeichen getrennt)"
                        value={savorySavoryDishes}
                        onChange={(e) => setSavorySavoryDishes(e.target.value)}
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
                        label="Süßspeisen"
                        placeholder="Süßspeisen (mit Komma und Leerzeichen getrennt)"
                        value={savorySweetDishes}
                        onChange={(e) => setSavorySweetDishes(e.target.value)}
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
                    <button disabled={sendingSavory} type="submit"
                            className={"contactForm"}>{sendingSavory ? "Wird eingetragen…" : "Eintragen"}</button>
                </Stack>
            </Box>
            <DesignBar/>
            <h3>{offerCategoryTitles["sweet"]}</h3>
            <h4>Cremige Desserts</h4>
            <SweetOfferList subCat={"DESSERT"}/>
            <h4>Kuchen und Schnitten</h4>
            <SweetOfferList subCat={"CAKE"}/>
            <h4>Süßpeise hinzufügen</h4>
            <Box sx={{ position: 'relative' }}>
                {/* Lade-Icon Overlay */}
                {sendingSweet && (
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
                <Stack component="form" spacing={1} noValidate onSubmit={submitSweet}>
                    <TextField
                        label="Kategorie"
                        value={sweetCategory}
                        onChange={(e) => setSweetCategory(e.target.value)}
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
                        <MenuItem value="DESSERT">Cremige Desserts</MenuItem>
                        <MenuItem value="CAKE">Kuchen und Schnitten</MenuItem>
                    </TextField>
                    <TextField
                        label="Name"
                        value={sweetName}
                        onChange={(e) => setSweetName(e.target.value)}
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
                    <button disabled={sendingSweet} type="submit"
                            className={"contactForm"}>{sendingSweet ? "Wird eingetragen…" : "Eintragen"}</button>
                </Stack>
            </Box>
        </>
    )
}
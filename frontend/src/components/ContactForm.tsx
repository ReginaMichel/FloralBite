import {
    Checkbox,
    FormControlLabel,
    MenuItem,
    Stack,
    TextField,
    Grid,
    InputAdornment,
} from "@mui/material";
import {type FormEvent, useState} from "react";
import axios from "axios";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export default function ContactForm() {
    const [agreement, setAgreement] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    // Einträge für Fehler bei den Textfeldern
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    // Methode zur Validierung der Einträge:
    function validate(): boolean {
        const newErrors: typeof errors = { name: "", email: "", phoneNumber: "", message: "" };
        let valid = true;

        if (name.trim() === "") {
            newErrors.name = "Name ist erforderlich.";
            valid = false;
        }
        // Überprüft Inhalt der email Variable:
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Ungültige E-Mail-Adresse.";
            valid = false;
        }
        // Überprüft Telefonnummer nur, wenn der Eintrag nicht leer ist.
        // ^            Start
        // [+0-9]       Mindestens ein Zeichen, das ein + oder eine Zahl ist
        // [0-9\s\-()]* Beliebig viele Zeichen, die eine Ziffer, Leerzeichen, Bindestrich oder Klammer sein dürfen.
        if (!(phoneNumber.trim() === "") && !/^[+0-9][0-9\s\-()]*$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Ungültige Telefonnummer";
        }
        if (message.trim() === "") {
            newErrors.message = "Nachricht darf nicht leer sein.";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Wenn Einträge nicht valide sind, bricht es ab.
        if (!validate()) return;

        setSending(true);
        try {
            await axios.post(`/api/contact`, {
                name,
                subject,
                email,
                phoneNumber,
                message
            });
            // hier könnte man noch follow-ups hinzufügen. z.B. ein "vielen dank für deine nachricht"-irgendwas
        } finally {
            setAgreement(false);
            setName("");
            setEmail("");
            setPhoneNumber("");
            setSubject("");
            setMessage("");
            setErrors({name: "", email: "", phoneNumber: "", message: ""});
            setSending(false);
        }
    }

    return (
        <Stack
            spacing={2}
            sx={{ width: '100%' }}
            component="form"
            onSubmit={handleSubmit}
            noValidate>

            {/* Name & Anliegen */}
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><PersonOutlineOutlinedIcon /></InputAdornment>,
                            },
                        }}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        label="Anliegen"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        select
                        fullWidth
                        required
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><FeedbackOutlinedIcon /></InputAdornment>,
                            },
                        }}
                    >
                        <MenuItem value="request">Anfrage</MenuItem>
                        <MenuItem value="feedback">Feedback</MenuItem>
                        <MenuItem value="other">Sonstiges</MenuItem>
                    </TextField>
                </Grid>
            </Grid>

            {/* E-Mail & Telefonnummer */}
            <Grid container spacing={2}>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        label="E-Mail-Adresse"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><MailOutlinedIcon /></InputAdornment>,
                            },
                        }}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        label="Telefonnummer (optional)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><PhoneInTalkOutlinedIcon /></InputAdornment>,
                            },
                        }}
                    />
                </Grid>
            </Grid>

            {/* Nachricht */}
            <TextField
                label="Nachricht"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                error={!!errors.message}
                helperText={errors.message}
                fullWidth
                multiline
                rows={8}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"><ChatOutlinedIcon /></InputAdornment>,
                    },
                }}
            />

            {/* DSGVO */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                    />
                }
                label="Ich habe die DSGVO-Erklärung gelesen und bin mit der Speicherung und Verarbeitung meiner Daten einverstanden."
            />

            {/* Button */}
            <button disabled={!agreement||sending} type="submit">{sending ? "Wird gesendet…" : "Absenden"}</button>
        </Stack>
    );
}
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField
} from "@mui/material";
import {useState} from "react";

export default function ContactForm() {

    const [telefonisch, setTelefonisch] = useState(false);
    const [telefonnummer, setTelefonnummer] = useState('');

    return(
        <Stack spacing={2}>
                <FormControl fullWidth margin="normal" required>
                    <InputLabel id="anliegen-label">Anliegen</InputLabel>
                    <Select
                        labelId="anliegen-label"
                        label="Anliegen"
                    >
                        <MenuItem value="anfrage">Anfrage</MenuItem>
                        <MenuItem value="feedback">Feedback</MenuItem>
                        <MenuItem value="sonstiges">Sonstiges</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Ihr Name"
                    onChange={(e) => {}}
                    required
                    fullWidth
                />
                <TextField
                    label="Ihre E-Mail-Adresse"
                    onChange={(e) => {}}
                    fullWidth
                    required
                />
                <TextField
                    label="Betreff (optional)"
                    onChange={(e) => {}}
                    fullWidth
                />
                <TextField
                    label="Ihre Nachricht an uns"
                    onChange={(e) => {}}
                    required
                    fullWidth
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={telefonisch}
                            onChange={(e) => setTelefonisch(e.target.checked)}
                        />
                    }
                    label="Ich möchte lieber per Telefon kontaktiert werden"
                />
                {telefonisch && (
                    <TextField
                        label="Telefonnummer"
                        value={telefonnummer}
                        onChange={(e) => setTelefonnummer(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                )}
        </Stack>
    );
}
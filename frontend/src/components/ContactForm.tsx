import {
    Checkbox,
    FormControlLabel,
    MenuItem,
    Stack,
    TextField
} from "@mui/material";
import {useState} from "react";
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function ContactForm() {

    const [agreement, setAgreement] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return(
        <Stack spacing={2}>
                <div className="form">
                    <button className="formIcon" disabled={true}>
                        <FeedbackOutlinedIcon/></button>
                    <TextField
                        label="Anliegen"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        select
                        fullWidth
                        required
                    >
                        <MenuItem value="request">Anfrage</MenuItem>
                        <MenuItem value="feedback">Feedback</MenuItem>
                        <MenuItem value="other">Sonstiges</MenuItem>
                    </TextField>
                </div>
                <div className="form">
                    <button className="formIcon" disabled={true}>
                        <PersonOutlineOutlinedIcon/></button>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        fullWidth
                    />
                </div>
                <div className="form">
                    <button className="formIcon" disabled={true}>
                        <MailOutlinedIcon/></button>
                    <TextField
                        label={"E-Mail-Adresse"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                    />
                </div>
                <div className="form">
                    <button className="formIcon" disabled={true}>
                        <PhoneInTalkOutlinedIcon/></button>
                    <TextField
                        label="Telefonnummer (optional)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        fullWidth
                    />
                </div>
                <div className="form">
                    <button className="formIcon" disabled={true}>
                        <ChatOutlinedIcon/></button>
                    <TextField
                        label="Nachricht"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        fullWidth
                    />
                </div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={agreement}
                            onChange={(e) => setAgreement(e.target.checked)}
                        />
                    }
                    label="Ich habe die DSGVO-Erklärung gelesen und bin mit der Speicherung und Verarbeitung meiner
                    Daten einverstanden."
                />
                <button>
                    Absenden
                </button>
        </Stack>
    );
}
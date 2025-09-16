import ContactForm from "../components/ContactForm.tsx";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import {
    Grid
} from "@mui/material";

export default function ContactPage() {
    return (
        <Grid container spacing={4} alignItems={"center"}>
            <Grid size={{xs: 12, md: 6}}>
                <h2 style={{marginTop:0}}>Hungrig geworden?<br/>
                    Ich freue mich auf deine Nachricht
                </h2>
                <p>Du kannst mich gerne per Telefon, E-Mail oder über das Kontaktformular erreichen.</p>
                <p>Egal ob es sich um Anfragen, Feedback, Wünsche oder Kritik handelt, ich freue mich,
                    von dir zu hören.</p>
                <div className="contactMethod">
                    <button className="contactIcon" disabled={true}>
                        <LocationOnOutlinedIcon/></button>
                    Niebergallstraße 11, 64331 Weiterstadt</div>
                <div className="contactMethod">
                    <button className="contactIcon" disabled={true}>
                        <MailOutlinedIcon/></button>
                    <a href="mailto:info@floralbite.de">info@floralbite.de</a></div>
                <div className="contactMethod">
                    <button className="contactIcon" disabled={true}>
                        <PhoneInTalkOutlinedIcon/></button>
                    +49 xxx</div>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                <ContactForm/>
            </Grid>
        </Grid>
    )
}
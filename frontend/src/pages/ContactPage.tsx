import ContactForm from "../components/ContactForm.tsx";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

export default function ContactPage() {
    return (
        <div className="rowAlignment">
            <div className="contactLeft">
                <h1>Hungrig geworden?<br/>
                    Ich freue mich auf deine Nachricht
                </h1>
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
            </div>
            <ContactForm/>
        </div>
    )
}
import ContactForm from "../components/ContactForm.tsx";

export default function ContactPage() {
    return (
        <>
            <div className="note">
                <h1>Hinweis</h1>
                <h2>Floral Bite und diese Website befinden sich noch im Aufbau. Es werden keine Dienstleistungen angeboten.
                    Falls Sie Fragen haben, können Sie uns über{" "}
                    <a href="mailto:info@floralbite.de">info@floralbite.de</a>
                    {" "}erreichen.
                </h2>
            </div>
            <ContactForm/>
        </>
    )
}
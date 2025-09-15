export default function ImpressumPage() {

    return (
        <div className={"textCentered"}>
            <div className="note">
                <h1>Hinweis</h1>
                <p>Floral Bite und diese Website befinden sich noch im Aufbau. Es werden keine Dienstleistungen angeboten.
                    Falls Sie Fragen haben, können Sie uns über{" "}
                    <a href="mailto:info@floralbite.de">info@floralbite.de</a>
                    {" "}erreichen.
                </p>
            </div>
            <div className="impressum">
                <h1>Impressum</h1>
                <p>
                    Julia Schreck<br/>
                    FloralBite - Catering<br/>
                    Niebergallstraße 11<br/>
                    64331 Weiterstadt
                </p>
                <h2>Kontakt</h2>
                <p>
                    Telefon:<br/>
                    E-Mail:{" "}<a href="mailto:info@floralbite.de">info@floralbite.de</a>
                </p>
            </div>
        </div>
    );
}
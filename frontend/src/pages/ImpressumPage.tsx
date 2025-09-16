export default function ImpressumPage() {

    return (
        <div className={"textCentered"}>
            <div className="note">
                <h2>Hinweis</h2>
                <p>Floral Bite und diese Website befinden sich noch im Aufbau. Es werden keine Dienstleistungen angeboten.
                    Falls Sie Fragen haben, können Sie uns über{" "}
                    <a href="mailto:info@floralbite.de">info@floralbite.de</a>
                    {" "}erreichen.
                </p>
            </div>
            <div className="impressum">
                <h2>Impressum</h2>
                <p>
                    Julia Schreck<br/>
                    FloralBite - Catering<br/>
                    Niebergallstraße 11<br/>
                    64331 Weiterstadt
                </p>
                <h3>Kontakt</h3>
                <p>
                    Telefon:<br/>
                    E-Mail:{" "}<a href="mailto:info@floralbite.de">info@floralbite.de</a>
                </p>
            </div>
        </div>
    );
}
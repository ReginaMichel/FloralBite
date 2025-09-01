export default function PlaceholderPage() {

    return (
        <div>
            <img src={"/assets/placeholderLogo.png"} alt={"Vorläufiges Logo von Floral Bite"} className={"placeholder"}/>
            <img src={"/assets/placeholderTitle.png"} alt={"Vorläufiger Schriftzug von Floral Bite"} className={"placeholder"} width={"50%"}/>
            <h1 className={"placeholder"}>Herzlich Willkommen bei Floral Bite!</h1>
            <h2 className={"placeholder"}>Diese Website befindet sich noch im Aufbau. Bitte wenden Sie sich für Anfragen an Julia Schreck:{" "}
                <a href="mailto:anfrage@floralbite.de">anfrage@floralbite.de</a>
            </h2>
        </div>
    );
}
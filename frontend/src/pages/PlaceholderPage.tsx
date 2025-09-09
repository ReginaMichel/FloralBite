export default function PlaceholderPage() {

    return (
        <div>
            <img src={"/assets/placeholderLogo.png"} alt={"Vorläufiges Logo von Floral Bite"} className={"placeholderLogo"}/>
            <img src={"/assets/placeholderTitle.png"} alt={"Vorläufiger Schriftzug von Floral Bite"} className={"placeholderTitle"} width={"50%"}/>
            <h1 className={"placeholder"}>Herzlich Willkommen bei Floral Bite!</h1>
            <h2 className={"placeholder"}>Diese Website befindet sich noch im Aufbau. Bitte wenden Sie sich bei Fragen an Julia Schreck:{" "}
                <a href="mailto:info@floralbite.de">info@floralbite.de</a>
            </h2>
        </div>
    );
}
export default function LoginPage() {

    function login(){
        const host:string = window.location.host === "localhost:5173" ?
            "http://localhost:8080" : window.location.origin
        window.open(host + "/oauth2/authorization/google", "_self")
    }

    return (
        <div>
            <img src={"/assets/placeholderLogo.png"} alt={"Vorläufiges Logo von Floral Bite"} className={"placeholder"} width={"10%"}/>
            <img src={"/assets/placeholderTitle.png"} alt={"Vorläufiger Schriftzug von Floral Bite"} className={"placeholder"} width={"25%"}/>
            <h2 className={"placeholder"}>Hallo!</h2>
            <h2 className={"placeholder"}>Bitte klicke auf diesen Button, um dich über deinen Google-Account einzuloggen:</h2>
            <button className={"placeholder"} onClick={login}>Anmelden</button>
        </div>
    );
}
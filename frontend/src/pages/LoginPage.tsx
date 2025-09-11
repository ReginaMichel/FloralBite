export default function LoginPage() {

    function login(){
        const host:string = window.location.host === "localhost:5173" ?
            "http://localhost:8080" : window.location.origin
        window.open(host + "/oauth2/authorization/google", "_self")
    }

    return (
        <div>
            <img src={"/assets/Element 100@4x.webp"} alt={"Logo von Floral Bite"} className={"placeholderLogo"}/>
            <h1>Hallo!</h1>
            <p>Bitte klicke auf diesen Button, um dich über deinen Google-Account einzuloggen:</p>
            <button className={"placeholder"} onClick={login}>Anmelden</button>
        </div>
    );
}
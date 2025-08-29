import axios from "axios";
import {useEffect, useState} from "react";

export default function LoginPage() {

    async function login(){
        const host:string = window.location.host === "localhost:5173" ?
            "http://localhost:8080" : window.location.origin
        window.open(host + "/oauth2/authorization/google", "_self")
    }

    const [success, setSuccess] = useState<boolean>(false);
    const [firstName, setFirstName] = useState("");

    async function loadUser(){
        await axios.get("/api/auth/me")
            .then((response) => {
                setSuccess(response.data.role === "ADMIN");
                setFirstName(response.data.firstName);
            })
    }

    useEffect(() => {loadUser()}, []);

    return (
        <div>
            <img src={"/assets/placeholderLogo.png"} alt={"Vorläufiges Logo von Floral Bite"} className={"placeholder"} width={"10%"}/>
            <img src={"/assets/placeholderTitle.png"} alt={"Vorläufiger Schriftzug von Floral Bite"} className={"placeholder"} width={"25%"}/>
            <h2 className={"placeholder"}>Hallo!</h2>
            <h2 className={"placeholder"}>Bitte klicke auf diesen Button, um dich über deinen Google-Account
                als Admin für Floral Bite zu registrieren:</h2>
            <button className={"placeholder"} onClick={login}>Registrieren</button>
            <h2 className={"placeholder"}>{success ?
                "Deine Registrierung als Admin war erfolgreich, "+firstName+". Du musst nichts weiter tun." : ""}</h2>
        </div>
    );
}
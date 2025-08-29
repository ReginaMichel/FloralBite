import axios from "axios";
import {useEffect, useState} from "react";

export default function LoginPage() {

    function login(){
        const host:string = window.location.host === "localhost:5173" ?
            "http://localhost:8080" : window.location.origin
        window.open(host + "/oauth2/authorization/google", "_self")
    }

    function logout() {
        const host:string = window.location.host === "localhost:5173"
            ? "http://localhost:8080"
            : window.location.origin;
        window.open(host + "/logout", "_self")
    }

    const [user, setUser] = useState<string | undefined | null>(undefined);

    const loadUser = () => {
        axios.get("/api/auth/me")
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(() => setUser(null));
    }

    useEffect(() => {loadUser()}, []);

    return (
        <div>
            <img src={"/assets/placeholderLogo.png"} alt={"Vorläufiges Logo von Floral Bite"} className={"placeholder"}/>
            <img src={"/assets/placeholderTitle.png"} alt={"Vorläufiger Schriftzug von Floral Bite"} className={"placeholder"} width={"50%"}/>
            <h1 className={"placeholder"}>Hallo du!</h1>
            <h2 className={"placeholder"}>Du bist erfolgreich auf der Login-Seite gelandet. Bitte klicke auf den
            Button hier, um dich über deinen Google-Account einzuloggen:</h2>
            <button onClick={login}>Anmelden</button>
            <button onClick={logout}>Abmelden</button>
        </div>
    );
}
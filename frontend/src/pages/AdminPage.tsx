import {useEffect, useState} from "react";
import axios from "axios";

export default function AdminPage() {

    const [firstName, setFirstName] = useState("");

    async function loadUser(){
        await axios.get("/api/auth/me")
            .then((response) => {
                setFirstName(response.data.firstName);
            })
    }

    useEffect(() => {loadUser()}, []);

    return (
        <div>
            <img src={"/assets/placeholderLogo.png"} alt={"Vorläufiges Logo von Floral Bite"} className={"placeholder"}/>
            <img src={"/assets/placeholderTitle.png"} alt={"Vorläufiger Schriftzug von Floral Bite"} className={"placeholder"} width={"50%"}/>
            <h1 className={"placeholder"}>{"Hallo " + firstName + "!"}</h1>
            <h2 className={"placeholder"}>Du bist erfolgreich auf der Admin-Seite gelandet.</h2>
        </div>
    );
}
import type {UserModel} from "../models/UserModel.ts";
import {Link} from "react-router-dom";

type AdminPageProps = {
    user: UserModel|undefined|null;
}

export default function AdminPage(props: Readonly<AdminPageProps>) {

    function logout(){
        const host:string = window.location.host === "localhost:5173" ?
            "http://localhost:8080" : window.location.origin
        window.open(host + "/logout", "_self")
    }

    return (
        <div className={"textCentered"}>
            <h1>{"Hallo " + props?.user?.firstName + ","}</h1>
            <p>du bist erfolgreich auf der Admin-Seite gelandet. Hier gibt es aktuell noch
                nicht viel zu sehen, aber du kannst dir gerne schon mal den aktuellen Stand der Website anschauen:</p>
            <button className={"placeholder"}><Link to={"/home"}>Home</Link></button>
            <p>Wenn du dich wieder ausloggen möchtest, kannst du das hier tun:</p>
            <button className={"placeholder"} onClick={logout}>Abmelden</button>
        </div>
    );
}
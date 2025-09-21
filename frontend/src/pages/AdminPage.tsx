import type {UserModel} from "../models/UserModel.ts";
import AdminOfferForm from "../components/AdminOfferForm.tsx";
import DesignBar from "../components/DesignBar.tsx";

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
        <>
            <h2>{"Hallo " + props?.user?.firstName + ","}</h2>
            <p>schön dich zu sehen. Du bist erfolgreich auf der Admin-Seite gelandet.</p>
            <ul className="icon-list snail">
                <li>Wenn du runterscrollst, findest du die aktuellen Angebote deiner Webseite und kannst neue Einträge hinzufügen.</li>
                <li>Über die Links in den Menüs gelangst du zur regulären Seite.</li>
                <li>Wenn du dich wieder abmelden möchtest, kannst du das hier tun: <button className={"contactForm"} onClick={logout}
                style={{marginLeft: "0.7rem"}}>Abmelden</button></li>
                <li>Wenn du Fragen hast, kannst du dich gerne bei mir melden.</li>
            </ul>
            <DesignBar/>
            <AdminOfferForm/>
        </>
    );
}
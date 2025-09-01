import type {UserModel} from "../models/UserModel.ts";

type AdminPageProps = {
    user: UserModel|undefined|null;
}

export default function AdminPage(props: Readonly<AdminPageProps>) {

    return (
        <div>
            <img src={"/assets/placeholderLogo.png"} alt={"Vorläufiges Logo von Floral Bite"} className={"placeholder"}/>
            <img src={"/assets/placeholderTitle.png"} alt={"Vorläufiger Schriftzug von Floral Bite"} className={"placeholder"} width={"50%"}/>
            <h1 className={"placeholder"}>{"Hallo " + props?.user?.firstName + ","}</h1>
            <h2 className={"placeholder"}>du bist erfolgreich auf der Admin-Seite gelandet. Hier gibt es aktuell noch nichts zu
            sehen, aber es wird bestimmt bald sehr toll.</h2>
        </div>
    );
}
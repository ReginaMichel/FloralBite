import {Navigate, Outlet} from "react-router-dom";
import type {UserModel} from "../models/UserModel.ts";

type ProtectedRouteProps = {
    user: UserModel|undefined|null
}

export default function ProtectedRoute(props: Readonly<ProtectedRouteProps>) {

    if (props.user === undefined) {
        <h3>Zugang wird geladen.</h3>
    }
    return (
        props.user?.role === "ADMIN" ? <Outlet/> : <Navigate to = {"/"} />
    )

}
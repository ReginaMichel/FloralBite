import './App.css';
import PlaceHolderPage from "./pages/PlaceholderPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ImpressumPage from "./pages/ImpressumPage.tsx";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ProtectedRoute from "./security/ProtectedRoute.tsx";
import type {UserModel} from "./models/UserModel.ts";
import Footer from "./components/Footer.tsx";

function App() {

    const [user, setUser] = useState<UserModel|undefined|null>(undefined);

    async function loadUser(){
        await axios.get("/api/auth/me")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
                setUser(null);
            });
    }

    useEffect(() => {
        loadUser()
    }, []);

  return (
    <>
        <Routes>
            <Route path="" element={<PlaceHolderPage />}/>
            <Route path="/adminlogin" element={<LoginPage />}/>
            <Route element = {<ProtectedRoute user={user}/>}>
                <Route path="/admin" element={<AdminPage user={user}/>}/>
            </Route>
            <Route path="/impressum" element={<ImpressumPage />}/>
        </Routes>
        <Footer />
    </>
  )
}

export default App

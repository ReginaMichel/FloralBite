import './App.css';
import './styles/colors.css';
import {themes} from "./styles/themeConfig.ts";
import AdminPage from "./pages/AdminPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ImpressumPage from "./pages/ImpressumPage.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ProtectedRoute from "./security/ProtectedRoute.tsx";
import type {UserModel} from "./models/UserModel.ts";
import Footer from "./components/Footer.tsx";
import PlaceholderPage from "./pages/PlaceholderPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import Header from './components/Header.tsx';
import OfferPage from "./pages/OfferPage.tsx";
import PricePage from "./pages/PricePage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {useMediaQuery} from '@mui/material';
import MobileFooter from "./components/MobileFooter.tsx";
import MobileHeader from "./components/MobileHeader.tsx";

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

    // Bei jedem Seitenwechsel soll ausgelöst werden, dass ein anderes Farbthema ausgewählt wird.
    // Dafür braucht es einen useEffect, der ausgelöst wird.
    // Dabei wird useLocation genutzt, um eine Änderung des Pfadnamens anzuzeigen.
    const location = useLocation();
    // Gibt das Theme des jeweiligen Pfads zurück:
    function getCurrentTheme() {
        return themes[location.pathname] || themes.default;
    }
    useEffect(() => {
        const theme = getCurrentTheme();
        const root = document.documentElement;
        // Setzt CSS-Variablen auf die geladenen Werte:
        root.style.setProperty('--link-color', theme.linkColor);
        root.style.setProperty('--nav-bg', theme.background);
        root.style.setProperty('--footer-bg', theme.background);
        root.style.setProperty('--header-bg', `url(${theme.headerBackground})`);
    }, [location.pathname]);

    const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <>
        {location.pathname !== "/" && location.pathname !== "/adminlogin" ?
            (isMobile ? <MobileHeader/> : <Header/>) : null}
        <main>
            <Routes>
                <Route path="/" element={<PlaceholderPage/>}/>
                <Route path="/adminlogin" element={<LoginPage/>}/>

                <Route element={<ProtectedRoute user={user} />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/angebot" element={<OfferPage />} />
                    <Route path="/preise" element={<PricePage />} />
                    <Route path="/ueber-uns" element={<AboutUsPage />} />
                    <Route path="/galerie" element={<GalleryPage />} />
                    <Route path="/kontakt" element={<ContactPage />} />
                    <Route path="/admin" element={<AdminPage user={user} />} />
                    <Route path="/datenschutz" element={<PlaceholderPage />} />
                    <Route path="/impressum" element={<ImpressumPage />} />
                </Route>
            </Routes>
        </main>
        {location.pathname !== "/" && location.pathname !== "/adminlogin" ?
            (isMobile ? <MobileFooter/> : <Footer/>) : null}
    </>
  )
}

export default App

import './App.css';
import PlaceHolderPage from "./pages/PlaceholderPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ProtectedRoute from "./security/ProtectedRoute.tsx";
import type {UserModel} from "./models/UserModel.ts";

function App() {

    const [user, setUser] = useState<UserModel|undefined|null>(undefined);

    async function loadUser(){
        await axios.get("/api/auth/me")
            .then((response) => {
                console.log(response.data);
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
    <Routes>
      <Route path="" element={<PlaceHolderPage />}/>
      <Route path="/adminlogin" element={<LoginPage />}/>
      <Route element = {<ProtectedRoute user={user}/>}>
          <Route path="/admin" element={<AdminPage user={user}/>}/>
      </Route>
    </Routes>
  )
}

export default App

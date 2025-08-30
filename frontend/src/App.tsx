import './App.css';
import PlaceHolderPage from "./pages/PlaceholderPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="" element={<PlaceHolderPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/admin" element={<AdminPage />}/>
    </Routes>
  )
}

export default App

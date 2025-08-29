import './App.css'
import PlaceHolderPage from "./pages/PlaceholderPage.tsx"
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="" element={<PlaceHolderPage />}/>
    </Routes>
  )
}

export default App

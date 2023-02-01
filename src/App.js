import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarLayout } from "./Components/Navbar";
import { PublicationForm } from "./Pages/PublicationForm";
import { ProfilePage } from "./Pages/ProfilePage";
import PublicationCard from "./Components/PublicationCard";
import axios from "axios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicationCard
                publication={{
                  content: "Contenido pasado por props!",
                  userId: "63d29efe9fdab0e31b2d7b0d",
                  id: "63c99d1d62b6db5b8ad22fbc",
                  favedBy: ["10101", "4444", "63d29efe9fdab0e31b2d7b0d"],
                }}
                requestingUser={{ userId: "63d29efe9fdab0e31b2d7b0d" }}
              />
            }
          >
            {/* <Route path="/publication" element={<PublicationForm/>}/>
            <Route path="/profile" element={<ProfilePage/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

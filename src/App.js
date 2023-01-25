import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavbarLayout } from './Components/Navbar';
import { PublicationForm } from "./Pages/PublicationForm";
import { ProfilePage } from './Pages/ProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout/>}>
            <Route path="/publication" element={<PublicationForm/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
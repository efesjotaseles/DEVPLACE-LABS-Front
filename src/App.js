import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavbarLayout } from './Components/Navbar';
import { PublicationForm } from "./Pages/Profile/PublicationForm";
import { ProfilePage } from './Pages/Profile/ProfilePage';
import Login from './Pages/Login/LoginComponents/login';
import SignUp from './Pages/Login/LoginComponents/singup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout/>}>
            <Route path="/publication" element={<PublicationForm/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

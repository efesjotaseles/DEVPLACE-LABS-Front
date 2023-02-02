import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavbarLayout } from './Components/Navbar';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/LoginComponents/login';
import SignUp from './Pages/Login/LoginComponents/singup';
import { Home } from './Pages/Home/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarLayout } from "./Components/Navbar";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/LoginComponents/login";
import SignUp from "./Pages/Login/LoginComponents/singup";
import { Home } from "./Pages/Home/home";
import { PRUEBA } from "./Pages/publicationCardPrueba";
import Feed from "./Components/Feed/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/PRUEBA" element={<PRUEBA />} />
            <Route
              path="/FEED"
              element={
                <Feed
                  userIdArray={["63d29efe9fdab0e31b2d7b0d"]}
                  requestingUser={{ userId: "63d29efe9fdab0e31b2d7b0d" }}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

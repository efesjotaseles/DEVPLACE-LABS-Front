import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Home from "./Pages/Home/index";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import LoginPage from './Pages/LoginPage/login'




function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/sign-in'}>
            Social Media
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
        <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  )
}

export default App

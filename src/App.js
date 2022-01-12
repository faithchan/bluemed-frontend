import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import LoginPage from "./components/LoginPage";
import AccountsPage from "./components/AccountsPage";
import CreateAccountPage from "./components/CreateAccountPage";
import MyAppPage from "./components/MyAppPage";
import React, { useState, useEffect } from "react";
import {
  LoginContext,
  adminContext,
  userIDContext,
  patientData,
} from "./global/Context";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [patientDetails, setPatientDetails] = useState(false);

  const patientDetailsURL = `https://bluemed-backend.herokuapp.com/patient/populated/${userID}`;

  const getPatientDetails = async () => {
    try {
      const response = await fetch(patientDetailsURL);
      const data = await response.json();
      console.log(data)
      setPatientDetails(data);
      setAdmin(data.userID.role === 'admin' ? true : false)
    } catch (error) {
      console.log("error>>>", error);
    }
  };

  useEffect(() => {
    //localStorage.setItem('userID', "61d8fb4d770c3094270135f7")
    if (!loggedIn) {
      const loggedInUser = localStorage.getItem("userID");
      console.log(loggedInUser)
      if (loggedInUser) {
        console.log("found local storage saved userID");
        setUserID(loggedInUser)
        setLoggedIn(true)
      }
      else {
        console.log("no local storage found for userID")
      }
    }
    if(userID) {
      getPatientDetails();
    }
  }, [userID]);

  console.log(admin, loggedIn, userID)

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <userIDContext.Provider value={{ userID, setUserID }}>
        <adminContext.Provider value={{ admin, setAdmin }}>
          <patientData.Provider value={{ patientDetails, setPatientDetails }}>
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/createaccount" element={<CreateAccountPage />} />

                {/* Create Error Page to show forbidden or unauthorised */}
                {loggedIn ? (
                  <Route path="/account" element={<AccountsPage />} />
                ) : (
                  ""
                )}
                {loggedIn ? (
                  <Route path="/myapp" element={<MyAppPage />} />
                ) : (
                  ""
                )}
                {!loggedIn ? (
                  <Route path="/account" element={<LoginPage />} />
                ) : (
                  ""
                )}
                {!loggedIn ? (
                  <Route path="/myapp" element={<LoginPage />} />
                ) : (
                  ""
                )}
              </Routes>
            </main>
            <footer className="">
              <Footer />
            </footer>
          </patientData.Provider>
        </adminContext.Provider>
      </userIDContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;

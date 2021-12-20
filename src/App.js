import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage'
import LoginPage from "./components/LoginPage"

function App() {
  return (
    <div>
      <header><Navbar /></header>
      <main>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<HomePage />} />
    {/* <Route path="/services" element={<ServicesPage />} />
    <Route path="/Login" element={<LoginPage/>} />
    <Navigate to="/"/> */}
    </Routes>
    
    
  </main>
  <footer className=""><Footer/></footer>
    </div>

  )
}

export default App;

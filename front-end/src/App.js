import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import MenuPage from "./components/MenuPage"
import NavBar from "./components/NavBar"
import MobileNavBar from './components/MobileNavBar'
import MobileHeader from './components/MobileHeader'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <MobileHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/About" element={<AboutPage />} />
        <Route exact path="/Menu" element={<MenuPage />} />
      </Routes>
      <MobileNavBar/>
    </BrowserRouter>
  );
}

export default App;

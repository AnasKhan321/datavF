import logo from './logo.svg';
import './App.css';
import Barr from './components/Barr'; 
import Search from './components/search'; 
import Navbar from './components/Navbar'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Barr key="home" />} />
        <Route path="/search" element={<Search   key="search"/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

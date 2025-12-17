import React from 'react';
import {Routes , Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import Products from './Components/Products';
import Solutions from './Components/Solutions';
import Developers from './Components/Developers';
import Resources from './Components/Resources';
import Pricing from './Components/Pricing';



function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path= "/" element = {<MainPage />} />
      <Route path= "/products" element = {<Products/>} />
      <Route path= "/solutions" element = {<Solutions />} />
      <Route path= "/developers" element = {<Developers />} />
      <Route path= "/resources" element = {<Resources />} />
      <Route path= "/pricing" element = {<Pricing />} />
    </Routes>
      
      <Footer />
    </div>
  )
}

export default App


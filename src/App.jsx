import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/Menu.jsx';
import AboutPage from './pages/About.jsx';
import CartPage from './pages/Cart.jsx';
import ContactPage from './pages/Contact.jsx';
import NavBar from './components/navBar.jsx';
import './App.css'
import FooterBar from './components/footerBar.jsx';
import { CartProvider } from './components/CartContext.jsx'

function App() {
  return (

    <CartProvider>
      <div className="App">

        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>



        <FooterBar />
      </div>
    </CartProvider>

  );
}

export default App;


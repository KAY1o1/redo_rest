import React, { useState } from "react";
import '../styles/compStyles.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });


const imageUrls = Object.values(images).map(module => module.default);

const NavBar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };


    const { totalQuantity } = useCart();

    return (
        <nav className="navbar-container">
            <div className="a-item">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={images['../assets/logoImage_ss.png'].default} alt="logo image" />
                    </Link>
                </div>

                <div className="cart-logo">
                    <Link to="/cart" id="cartPage"><span>{totalQuantity}</span>🛒</Link>
                </div>

                <div className="side-icon" onClick={toggleSidebar}>
                    ≡
                </div>
                
                

                <div className={`sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
                    <div className="close-icon" onClick={toggleSidebar}>
                        &times;
                    </div>

                    <ul className="navbar-links">
                        <li className="navitem"><Link to="/" className="nav_itemlink" id="homePage" onClick={closeSidebar}>Home</Link></li>
                        <li className="navitem"><Link to="/menu" className="nav_itemlink" id="menuPage" onClick={closeSidebar}>Menu</Link></li>
                        <li className="navitem"><Link to="/about" className="nav_itemlink" id="aboutPage" onClick={closeSidebar}>About</Link></li>
                        <li className="navitem"><Link to="/contact" className="nav_itemlink" id="contactPage" onClick={closeSidebar}>Contact</Link></li>
                    </ul>

                </div>


            </div>
        </nav>
    );
};

export default NavBar;
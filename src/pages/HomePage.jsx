import React from "react";
import '../styles/HomePage_s.css';
// import React, { useState } from "react";
import { Link } from 'react-router-dom';
// const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });


const HomePage = () => {
    return(
        <div className="home-container">

            {/* Title */}
            <header className="Home_header">
                <h1>Shack Shake</h1>
            </header>


            {/* Items scrolling */}
            <section className="Rec-items">
                <h2>Items</h2>
                <div className="horiz-scroll-container">
                    <div className="item-card" id="item1">Burgers</div>
                    <div className="item-card" id="item2">Chicken Sandwich</div>
                    <div className="item-card" id="item3">Chicken Bites</div>
                    <div className="item-card" id="item4">Mushroom Sandwich</div>
                    <div className="item-card" id="item5">Sides</div>
                    <div className="item-card" id="item6">Shakes</div>
                    <div className="item-card" id="item7">Grilled Cheese</div>

                </div>
            </section>

            {/* Job scrolling */}
            <section className="Rec-items">
                <div className="reg-container">
                    <Link to="/contact" className="nav_itemlink" id="contactPage"><div className="info-card">Contact</div></Link>
                    <Link to="/menu" className="nav_itemlink" id="contactPage"><div className="info-card">Menu</div></Link>
                    <Link to="/about" className="nav_itemlink" id="contactPage"><div className="info-card">About</div></Link>

                </div>
            </section>
            
        </div>

    );
};

export default HomePage;
import React from "react";
import ProductCard from "../components/productCard";
import {useCart} from '../components/CartContext';
import '../styles/menu_cart.css';

const MenuPage = () => {

    const {products} = useCart();

    return(
        <div>
            <h1>Menu</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key ={product.id} product={product}/>

                ))}

            </div>
        </div>
    );
};

export default MenuPage;
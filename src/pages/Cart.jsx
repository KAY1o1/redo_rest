import React from "react";
import { useCart } from '../components/CartContext';
import CartItem from "../components/CartItem.jsx";
import '../styles/menu_cart.css';



const CartPage = () => {
    const { carts, totalPrice } = useCart();

    return (
        <div>
            <div className="cart-items">
                {carts.length > 0 ? (
                    carts.map((cartItem) => (
                        <CartItem key={cartItem.product_id} itemData={cartItem} />
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            <div id="cart-total">
                <strong>Total: ${totalPrice}</strong>
            </div>
        </div>
    );
};

export default CartPage;
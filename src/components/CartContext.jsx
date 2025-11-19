import React, { createContext, useState, useEffect, useContext,  useCallback} from 'react';
import productData from '../data/product_info.json';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
    
    const [products] = useState(productData);
    const [carts, setCarts] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCarts(JSON.parse(storedCart));
        }
    }, []);

    

    const calculateTotals = (currentCarts, currentProducts) => {
        let quantity = 0;
        let price = 0;

        currentCarts.forEach(cartItem => {
            quantity += cartItem.quantity;
            const product = currentProducts.find(p => p.id === parseInt(cartItem.product_id));
            if (product) {
                price += product.price * cartItem.quantity;
            }
        });

        setTotalQuantity(quantity);
        setTotalPrice(price.toFixed(2));
    };

    useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(carts));
            calculateTotals(carts, products);
        }, [carts, products]);
        
    const addToCart = (product_id) => {
        setCarts(prevCarts => {
            const positionThisProductInCart = prevCarts.findIndex(item => item.product_id === parseInt(product_id));
            let newCarts;

            if (positionThisProductInCart === -1) {
                newCarts = [...prevCarts, { product_id: parseInt(product_id), quantity: 1 }];
            } else {
                newCarts = [...prevCarts];
                newCarts[positionThisProductInCart].quantity += 1;
            }
            return newCarts;
        });
    };

    const changeQuantity = (product_id, type) => {
        setCarts(prevCarts => {
            const positionItemInCart = prevCarts.findIndex(item => item.product_id === parseInt(product_id));
            if (positionItemInCart === -1) return prevCarts;

            let newCarts = [...prevCarts];
            if (type === 'plus') {
                newCarts[positionItemInCart].quantity += 1;
            } else if (type === 'minus') {
                newCarts[positionItemInCart].quantity -= 1;
                if (newCarts[positionItemInCart].quantity <= 0) {
                    newCarts.splice(positionItemInCart, 1);
                }
            }
            return newCarts;
        });
    };

    const removeItem = (product_id) => {
        setCarts(prevCarts => prevCarts.filter(item => item.product_id !== parseInt(product_id)));
    };

    return (
        <CartContext.Provider value={{ carts, products, totalQuantity, totalPrice, addToCart, changeQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
import React from 'react';
import { useCart } from './CartContext';

const images = import.meta.glob('../images/*.{png,jpg,jpeg,svg}', { eager: true });

const CartItem = ({ itemData }) => {
    const { products, changeQuantity, removeItem } = useCart();
    const product = products.find(p => p.id === parseInt(itemData.product_id));

    const getImageUrl = (imagePathFromJSON) => {
        const fileName = imagePathFromJSON.substring(imagePathFromJSON.lastIndexOf('/') + 1);
        const keyPath = `../images/${fileName}`; 
        return images[keyPath]?.default;
    };

    if (!product) return null;

    return (
        <div className="item" data-id={itemData.product_id}>
            <div className="image">
                <img src={getImageUrl(product.image)} alt={product.name} />
            </div>
            <div className="name">
                <h2>{product.name}</h2>
            </div>
            <div className="price">${(product.price * itemData.quantity).toFixed(2)}</div>
            <div className="quantity">
                <span className="minus" onClick={() => changeQuantity(itemData.product_id, 'minus')}>＜</span>
                <span>{itemData.quantity}</span>
                <span className="plus" onClick={() => changeQuantity(itemData.product_id, 'plus')}>＞</span>
            </div>
            <button className="remove" onClick={() => removeItem(itemData.product_id)}>
                Remove
            </button>
        </div>
    );
};

export default CartItem;
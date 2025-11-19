import React from "react";
import { useCart } from "./CartContext";
const images = import.meta.glob('../images/*.{png,jpg,jpeg,svg}', { eager: true });


const ProductCard = ({ product }) => {

    const {addToCart} = useCart();

    const getImageUrl = (imageName) => {
        const fileName = imageName.substring(imageName.lastIndexOf('/') + 1);
        const keyPath = `../images/${fileName}`;

        return images[keyPath]?.default;
    };

    return (
        <div className="product-card">
            <img src={getImageUrl(product.image)} alt={product.name} className="product-image" />
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
            </div>

            <button className="addCart" onClick={() => addToCart(product.id)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
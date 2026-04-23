// ProductGrid.jsx
import React from "react";
import "./ProductGrid.css";
import HeadPhone from "../../assets/products/HeadPhone2.jpg";
import bluetoothSpeaker from "../../assets/products/bluetoothSpeaker.jpg";
import GamingMouse from "../../assets/products/GamingMouse.jpg";
import laptopbag from "../../assets/products/laptopbag.jpg";
import SmartWatch from "../../assets/products/SmartWatch.jpg";
import { useDispatch } from "react-redux";
import { addInCart } from "../../cartSlice";

const products = [
    {
        id: 1,
        name: "Wireless Headphone",
        price: "$99",
        image: `${HeadPhone}`,
        qty: 1
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$149",
        image: `${SmartWatch}`,

    },
    {
        id: 3,
        name: "Laptop Bag",
        price: "$79",
        image: `${laptopbag}`,

    },
    {
        id: 4,
        name: "Gaming Mouse",
        price: "$59",
        image: `${GamingMouse}`,

    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: "$129",
        image: `${bluetoothSpeaker}`,

    },
];

const ProductGrid = () => {
    const dispatch = useDispatch();

    return (
        <div className="product-container">
            {products.map((item) => (
                <div className="product-card" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={() => dispatch(addInCart(item))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;

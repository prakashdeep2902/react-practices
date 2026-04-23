import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.css";

const CartIcon = ({ value }) => {
    return (
        <div className="cart-wrapper">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{value}</span>
        </div>
    );
}

export default CartIcon

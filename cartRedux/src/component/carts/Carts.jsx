// Cart.jsx
import React, { useContext, useEffect, useReducer, useState } from "react";
import "./Carts.css";
import CartIcon from "../CartIcon/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../cartSlice";

const Carts = () => {
    const [items, Setitem] = useState([]);
    const [itemLenght, setItemLength] = useState(0)
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    useEffect(() => {
        Setitem(cartItems);
        setItemLength(cartItems.length)
    }, [cartItems]);

    return (
        <div className="cart-page">
            <div className="HeaderAndIcon">
                <h1 className="cart-title">Shopping Cart</h1>
                <CartIcon value={itemLenght} />
            </div>
            <div className="cart-container">
                <div className="cart-items">
                    {items &&
                        items.map((item) => {
                            return (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} alt="Product" className="cart-img" />
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <p>{item.price}</p>

                                        <div className="qty-box">
                                            <button >-</button>
                                            <span>{item.quantity}</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                </div>
                            );
                        })}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹10,497</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>₹99</span>
                    </div>

                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹10,596</span>
                    </div>

                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;

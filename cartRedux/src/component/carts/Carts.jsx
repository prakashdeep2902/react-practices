// Cart.jsx
import React, { useContext, useEffect, useReducer, useState } from "react";
import "./Carts.css";
import CartIcon from "../CartIcon/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { productCount, removeFromCart } from "../../cartSlice";

const Carts = () => {
    const [items, Setitem] = useState([]);
    const [itemLenght, setItemLength] = useState(0);
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        Setitem(cartItems);
        setItemLength(cartItems.length);
    }, [cartItems]);

    const handelCount = (e) => {
        const value = e.target.textContent;

        switch (value) {
            case "-":
                dispatch(productCount(value));
                break;

            case "+":
                dispatch(productCount(value));
                break;

            default:
                console.log("nothing");
        }
    };

    const totalmoney = items?.reduce((sum, val) => {
        const money = val.price.replace("$", "");
        const qty = Number(val.quantity);

        console.log(money);
        console.log(qty);
        sum = sum + Number(money) * qty;
        return sum;
    }, 0);

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
                                            <button
                                                onClick={(e) =>
                                                    dispatch(
                                                        productCount({
                                                            id: item.id,
                                                            text: e.target.textContent,
                                                        }),
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={(e) =>
                                                    dispatch(
                                                        productCount({
                                                            id: item.id,
                                                            text: e.target.textContent,
                                                        }),
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            );
                        })}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>$ {totalmoney}</span>
                    </div>

                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;

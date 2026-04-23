import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../todoSlice";

const Button = ({ userId }) => {
    const dispatch = useDispatch();
    const handelDelete = () => {
        dispatch(deleteTodo(userId));
    };

    return <button onClick={handelDelete}>Delete</button>;
};

export default Button;

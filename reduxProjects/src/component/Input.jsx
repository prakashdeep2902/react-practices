import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";

const Input = () => {
    const [Inputvalue, setInputValue] = useState("");
    const Dispatch = useDispatch()
    const HandelAdd = (e) => {
        Dispatch(addTodo(Inputvalue))
        setInputValue("")
    }
    return (
        <div style={{
            display: "flex",
        }}>
            <input
                type="text"
                placeholder="Enter The task"
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button className="addbtn" onClick={HandelAdd} > Add Task </button>
        </div>
    );
};

export default Input;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { addItem, removeItem } from "../../redux/ducks/cartitems";

export const Cart = () => {
  const disPatch = useDispatch();
  const cartItems = useSelector((state) => state?.cart?.items);
  const [value, setValue] = useState("");

  const onAddItem = () => {
    if (value.trim()) {
      disPatch(addItem(value));
      setValue("");
    }
  };

  const onDeleteItem = (index) => {
    disPatch(removeItem(index));
  };

  return (
    <div className="container">
      <h3>Add and Remove Cart Item</h3>
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={onAddItem}>Add Items</button>
      </div>
      <ul>
        {cartItems &&
          cartItems?.map((item, index) => (
            <div key={index}>
              <li>
                {item}
                <button onClick={() => onDeleteItem(index)}>Remove</button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

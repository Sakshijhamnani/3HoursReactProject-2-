import React, { useContext } from "react";
import classes from "./MedicineList.module.css";
import CartContext from "../store/cart-context";

const MedicineList = (props) => {
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (item, inputId) => {
    const quantity = document.getElementById(inputId).value;

   
    const existingCartItemIndex = cartContext.items.findIndex(
      (cartItem) => cartItem.medicineName === item.medicineName
    );

    if (existingCartItemIndex !== -1) {
      
      const updatedItems = [...cartContext.items];
      updatedItems[existingCartItemIndex].quantity += Number(quantity);
      cartContext.addItem(updatedItems);
    } else {
      
      cartContext.addItem({
        ...item,
        quantity: Number(quantity),
      });
    }

    console.log("cartContext Items", cartContext.items);
  };

  return (
    <div className={classes.div}>
      {props.medicineList.map((item, index) => {
        const inputId = `quantity_${index}`;
        return (
          <li key={index} className={classes.li}>
            <span>{item.medicineName}</span>
            <span>{item.description}</span>
            <span>{item.price}</span>
            <input
              id={inputId}
              min="1"
              max="5"
              defaultValue="1"
              type="number"
            />
            <button
              className={classes.button}
              onClick={() => addItemToCartHandler(item, inputId)}
            >
              + Add To Cart
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default MedicineList;

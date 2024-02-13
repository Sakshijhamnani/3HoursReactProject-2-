import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context'
import classes from './Cart.module.css'



const Cart = (props) => {
  const [quantity,setQuantity]=useState(0)
  const [bill,setBill]=useState(0)
  const cartcontext = useContext(CartContext);
  let totalamount = 0;

  cartcontext.items.forEach((item) => {
   // totalamount = totalamount + Number(item.quantity) * Number(item.price);
   let total=Number(item.quantity) * Number(item.price)
   if(!isNaN(total)){
    totalamount+=total
   }
  });

  const IncQuantityHandler = (index) => {
   setQuantity( cartcontext.items[index].quantity += 1);
  };

  const DecQuantityHandler = (index) => {
    setQuantity(cartcontext.items[index].quantity -= 1);
  };

  const generateBillHandler=()=>{
    let currentTotalAmount=totalamount
    setBill(currentTotalAmount)
     cartcontext.removeItem()
    console.log(bill)
  }

  return (
    <Modal onClose={props.onClose}>
      {cartcontext.items.map((item, index) =>
      !bill &&  item.quantity ? (
          <li className={classes.li} key={index}>
            <p className={classes.p}>
              <span className={classes.name}>{item.medicineName}</span>
              <span className={classes.description}>{item.description}</span>
            </p>
            <span className={classes.price}>₹{item.price}</span>{' '}
            <span className={classes.quantity}>Quantity:{item.quantity}</span>
            <button
              onClick={() => IncQuantityHandler(index)}
              className={classes.button}
            >
              +
            </button>
            <button
              onClick={() => DecQuantityHandler(index)}
              className={classes.button}
            >
              -
            </button>
          </li>
        ) : null
      )}
    { !bill ? <p className={classes.amount}>Total Amount :₹{totalamount}</p>:<p className={classes.amount}>Your Bill is : ₹{bill}</p>}
     {!bill ? <button className={classes.bill} onClick={generateBillHandler}>Generate Bill</button>:''}
      <button className={classes.close} onClick={props.onClose}>
        Close
      </button>
    </Modal>
  );
};

export default Cart;

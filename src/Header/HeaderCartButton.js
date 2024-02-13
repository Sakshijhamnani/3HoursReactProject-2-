import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../store/cart-context'

const HeaderCartButton = (props) => {
  const cartcontext=useContext(CartContext)
  let quantity=0;
  cartcontext.items.forEach((item)=>{
   // quantity=quantity+Number(item.quantity)
   const itemQuantity = Number(item.quantity);
   if (!isNaN(itemQuantity)) {
     quantity = quantity + itemQuantity;
   }
  })
  return (
    <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
    </button>
  )
}

export default HeaderCartButton
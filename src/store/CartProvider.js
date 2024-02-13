import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
  const [items,setItems]=useState([])
    const addItemToCartHandler=(item)=>{
        setItems((prevState)=>[...prevState,item])
    }
    const removeItemFromCartHandler=()=>{
       setItems([])
    }
    const cartContext={
     items: items,
     addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    }
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
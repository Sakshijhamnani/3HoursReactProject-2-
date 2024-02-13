import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Input from './Input/Input';
import { useContext, useState } from 'react';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';

function App() {

  const cartcontext=useContext(CartContext)
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
    
  }
  return (
    // <CartProvider>
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Input/>
      
    </div>
    // </CartProvider>
  );
}

export default App;

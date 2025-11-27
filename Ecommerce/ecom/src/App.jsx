// import React from "react";
// import {Routes, Route} from 'react-router-dom'
// import {PageNotFound} from './Pages/NotFound'
// import HomePage from './Pages/HomePage'
// import {CartPage} from './Pages/CartPage'
// import {NavBar} from './Components/Navbar'
// import { CartContext } from "./ContextApi/CartContext";
// import { useState } from "react";


// function App(){
// const [cart, setCart]=useState([])
// const CartContextValue={cart, setCart}
//   return(<>
//     <CartContext.Provider value={CartContextValue}>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<HomePage/>}/>
//         <Route path='/cart' element={<CartPage/>}/>
//         <Route path='*' element={<PageNotFound/>}/>
//       </Routes>
//     </CartContext.Provider>
//   </>)
// }


// export default App

import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { PageNotFound } from './Pages/NotFound';
import HomePage from './Pages/HomePage';
import { CartPage } from './Pages/CartPage';
import { NavBar } from './Components/Navbar';
import { CartContext } from "./ContextApi/CartContext";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(v => v.DishId === item.DishId);
      if (exists) {
        return prev.map(v =>
          v.DishId === item.DishId
            ? { ...v, quantity: v.quantity + 1 }
            : v
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.DishId !== id));
  };

  const updateQuantity = (id, type) => {
    setCart(prev =>
      prev.map(item =>
        item.DishId === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                    ? item.quantity - 1
                    : 1
            }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const CartContextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;

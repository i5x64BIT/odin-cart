import { createContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log(cart);
    if (cart.filter((i) => i.id === item.id).length) {
      alert("This item is already in the basket!");
    } else setCart([...cart, item]);
  };
  const removeFromCart = (itemID) => {
    setCart(cart.filter((i) => i.id !== itemID));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };

import { createContext, useState } from "react";
import { fetchProducts } from "./Util";

const CartContext = createContext({
  cart: [],
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
});
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = (item) => {
    if (cart.filter((i) => i.id === item.id).length) {
      alert("This item is already in the basket!");
    } else setCart([...cart, item]);
  };
  const removeFromCart = (itemID) => {
    setCart(cart.filter((i) => i.id !== itemID));
  };
  const updateProducts = () => {
    fetchProducts().then(data => setProducts(data));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, products, updateProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };

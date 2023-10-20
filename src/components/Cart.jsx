import { useContext, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const [isCartOpen, setCartOpen] = useState(false);
  const returnValue = [
    <button className="nav-button" onClick={() => setCartOpen(!isCartOpen)}>
      🛒
    </button>,
  ];

  if (cart && cart.length > 0 && !isCartOpen) {
    returnValue.push(<span className="cart-counter">{cart.length}</span>);
  }
  if (isCartOpen) {
    returnValue.push(
      <div className="cart-container">
        {cart && cart.length ? (
          [
            ...cart.map((i) => <CartItem key={i.id} item={i}/>),
            <button className="btn-primary">Procceed to Checkout</button>,
          ]
        ) : (
          <p>Your Cart is Currently Empty</p>
        )}
      </div>
    );
  }
  return returnValue;
}

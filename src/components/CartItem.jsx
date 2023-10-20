import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  const [count, setCount] = useState(1);
  return (
    <div className="cart-item">
      <button className="btn-sub" onClick={() => removeFromCart(item.id)}>
        x
      </button>
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <div className="controls" aria-description="Item quantity controls">
        <button className="btn-add" onClick={() => setCount(count + 1)}>
          +
        </button>
        <p>{count}</p>
        <button
          className="btn-sub"
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            }
          }}
          disabled={count === 1}
        >
          -
        </button>
      </div>
    </div>
  );
}

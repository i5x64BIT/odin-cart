import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function AddToCartButton({ item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <button
      className="btn btn-primary"
      onClick={(e) => {
        e.preventDefault();
        addToCart(item);
      }}
    >
      Add to Cart
    </button>
  );
}

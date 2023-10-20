import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <Link className="card" to={`/products/${product.id}`}>
      {" "}
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p className="card-price">{product.price}$</p>
      <AddToCartButton item={product} />
    </Link>
  );
}

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content content-home">
      <div className="main">
        <h1>Haswell's General Store</h1>
        <p>Supplying all over the world since 1982</p>
      </div>
      <div className="cta">
        <Link to="/products" className="btn">
          View Products
        </Link>
      </div>
    </div>
  );
}

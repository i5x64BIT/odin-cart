import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Sidebar() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li className="nav-cart">
              <Cart />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

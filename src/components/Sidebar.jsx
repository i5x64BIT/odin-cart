import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Sidebar({cart, setCart}) {
  const handleAddCart = (itemID) => {
    setCart([...cart, itemID]);
  };
  const handleCartRemove = (itemID) => {
    setCart(cart.filter(i => i.id !== itemID));
  }

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/products">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-cart">
              <Cart cart={cart}handleCartRemove={handleCartRemove}/>
            </li>
          </ul>
          
        </nav>
      </div>
    </>
  );
}

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";
import { CartContextProvider } from "./CartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContextProvider>
        <Sidebar/>
        <Content cart={cart} setCart={setCart} />
      </CartContextProvider>
    </>
  );
}

export default App;

import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  return (
    <>
      <Sidebar cart={cart} setCart={setCart}/>
      <Content cart={cart} setCart={setCart}/>
    </>
  )
}

export default App

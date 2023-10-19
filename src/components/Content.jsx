import { Outlet } from "react-router-dom";

export default function Content({cart, setCart}) {
  return <Outlet context={[cart, setCart]}/>;
}

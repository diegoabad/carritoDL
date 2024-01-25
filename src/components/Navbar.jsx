import { useContext } from "react";
import { cartContext } from "../context/cartProvider";



const Navbar = () => {
  const {totalCart} = useContext(cartContext);
  return (
    <div>Navbar ${totalCart}</div>
  )
}


export default Navbar;
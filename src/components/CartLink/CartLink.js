import { useContext } from "react";

import "./CartLink.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
export default function CartLink (){
  const {cart} = useContext(AppContext)

  //
  const total = Object.values(cart).reduce(
    (acc,num) => acc + num, 0);

  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <img src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg" alt="icon" className="cartIcon"/> <span className="total">{ total}</span>
      </NavLink>
    </div>
  );
}
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logo from "../../Logo/Logo";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          {Logo}
        </li>
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/history">History</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  );
}

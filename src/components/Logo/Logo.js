import "./Logo.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <div className="Logo">
      <NavLink>
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
}

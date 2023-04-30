import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);


  return (
    <div className="Auth">
      {user ? (
        <span>
        <Link to="/orders">{user.displayName}</Link>
          <img src="https://cdn.onlinewebfonts.com/svg/img_415067.png" alt="icon sign in" onClick={logOut} className="sign"/>
        </span>
      ) : (
        <span>
          <img src="https://cdn.onlinewebfonts.com/svg/img_415067.png" alt="icon sign out"onClick={logIn} className="sign"/>
        </span>
      )}
    </div>
  );
}
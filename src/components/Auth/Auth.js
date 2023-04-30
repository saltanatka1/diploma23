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
        <Link to="/orders">{user.displayName}</Link>!
          <img src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png" ail="icon sign in" onClick={logOut} className="sign"/>
        </span>
      ) : (
        <span>
          <img src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png" alt="icon sign out"onClick={logIn} className="sign"/>
        </span>
      )}
    </div>
  );
}
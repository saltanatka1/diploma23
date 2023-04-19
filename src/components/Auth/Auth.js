import { signIn } from "../../firebase";
import "./Auth.css";

export default function Auth (){
  return (
    <div className="Auth">
      <button onClick={signIn}>Sign in</button>
    </div>
  )
}
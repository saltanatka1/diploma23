import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty.";
  }
  if (!user) {
    return "Please login  to create an order";
  }
  function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <div className="head-form">
        <h2>Create an order</h2>
      </div>
      <div className="content-form">      
        <label>
        Name : <br/> <input type="text" name="name" required />  <br/> 
      </label>
      <label>
        Phone : <br/>  <input type="tel" name="phone" required />  <br/> 
      </label>
      <label>
        Address : <br/>  <input type="text" name="address" required />
      </label></div>

      <button>Submit</button>
    </form>
  );
}

import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
import "./AddToCart.css";
export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart, //положить текущее соержание корзинки
      [product.id]: qty, //добавить текущий товар
    });
  }
  return (
    <div className="AddToCart">
      <button className="btn" onClick={onAddToCartClick}>
        Add to cart <img src="https://cdn-icons-png.flaticon.com/512/5465/5465858.png" alt="icon-btn" className="icon-btn"/>
      </button>
      <div className="total"> {cart[product.id] ? cart[product.id] : 0}</div>
    </div>
  );
}

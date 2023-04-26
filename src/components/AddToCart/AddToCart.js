import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
import "./AddToCart.css";
export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty =cart[product.id] ? cart[product.id]+ 1 : 1;
    setCart({
      ...cart, //положить текущее соержание корзинки
      [product.id]:qty, //добавить текущий товар
    });
  }
  return (
    <div className="AddToCart">
      {cart[product.id] ? cart[product.id] : 0}
      <button className="btn" onClick={onAddToCartClick}>Add to cart</button>
    </div>
  );
}

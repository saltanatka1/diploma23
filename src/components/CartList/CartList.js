import { useContext } from "react";
import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartList() {
  //получить спсиок товров и корзинку
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

function onItemRemove (product){
  const newCart={...cart};
  delete newCart[product.id];
  setCart(newCart)
;}

  //получить только Ид товаров в корзинке
  const productIds = Object.keys(cart);

  //чтобы вывести пройтись по товарам
  const output = products
    //удалить все товары которые не в корзине
    .filter((product) => productIds.includes(product.id))
    //вывести товары и их кол-во
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.id} />
        <Link to={"/product/" + product.slug}>{product.name}</Link>
        <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) =>
            onQuantityChange(product, +event.target.value)
          }
        />
        {cart[product.id]}
        <span>{cart[product.id] * product.price} $</span>
        <button onClick={() => onItemRemove(product)}>Remove</button>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}

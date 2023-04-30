import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";

export default function  ProductList({category}) {
  const {products} = useContext(AppContext);

  const output = products.filter(product => product.category===category.id)
  .map(product => (
    <div key={product.id} className="productItem"> 
      <img src={product.picture} alt={product.name}/>
      <NavLink to={'/products/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price} $</span>
      <AddToCart product={product} />
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct/>
    </div>
  );
}
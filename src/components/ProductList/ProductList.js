import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="productItem">
        <div className="img-content"><img src={product.picture} alt={product.name} /></div>
        <h2>{product.name}</h2>
        <NavLink to={"/products/" + product.slug} >
          {product.name}
        </NavLink>
        <div className="add">
          <span>{product.price} $</span>
          <AddToCart product={product}  />
        </div>
        <div />
        <DeleteProduct product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}

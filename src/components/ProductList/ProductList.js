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
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img src={product.picture} alt={product.name} />
            </div>
            <div className="contentBx">
              <h2>{product.name}</h2>
              <NavLink to={"/products/" + product.slug} className="link">
                {product.name}
              </NavLink>
              <div className="price">
                <span>{product.price} $</span>
                <AddToCart product={product} className="add" />
              </div>
            </div>
          </div>
          <div />
        </div>

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

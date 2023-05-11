import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import "./Product.css";
export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <div className="container">
        <div className="descriptionHeader">
          <h1>{product.name}</h1>
          <img src={product.picture} alt={product.name} />
        </div>
        <div className="descriptionContent">
          <span>{product.price} $</span>
          {<p>{product.description}</p>}
        </div>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        <img src={category.icon} alt={category.name} className="icon" />{" "}
        <span>{category.name}</span>{" "}
      </NavLink>
      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList">
      <h2>Categories</h2>
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}

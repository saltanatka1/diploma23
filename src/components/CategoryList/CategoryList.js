import { NavLink } from "react-router-dom";

export default function CategoryList (){
  const categories = [
    {id:1,name:"Bags", slug:"bags"},
    {id:2,name:"Decorations", slug:"decorations"},
    {id:3,name:"Corsets",slug:"corsets"},
    {id:4,name:"Sleeveless jackets", slug:"sleeveless-jackets"},
    {id:5,name:"Beldemchi",slug:"beldemchi"},
    {id:6,name:"Shoes",slug:"shoes"},
  ];

  const output = categories.map((category) =>(
    <li key={category.id}>
      <NavLink to={"/categories/"+ category.slug}>
        {category.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  )
}
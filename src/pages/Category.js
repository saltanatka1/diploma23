import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {
  const {params}=useMatch("/categories/:slug/");

  const categories = [
    {id:1,name:"Bags", slug:"bags"},
    {id:2,name:"Decorations", slug:"decorations"},
    {id:3,name:"Corsets",slug:"corsets"},
    {id:4,name:"Sleeveless jackets", slug:"sleeveless-jackets"},
    {id:5,name:"Beldemchi",slug:"beldemchi"},
    {id:6,name:"Shoes",slug:"shoes"},
    {id:7,name:"Headdress",slug:"headdress"},
  ];

  const category = categories.find( 
    (category) => category.slug===params.slug
    );

  if (!category) {
    return <NotFound/>
  }
  
  return( 
    <div className="Category">
    <h1>{category.name}</h1>
    </div>
  );
}
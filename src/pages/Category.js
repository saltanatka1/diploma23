export default function Category() {
  const categories = [
    {id:1,name:"Bags", slug:"bags"},
    {id:2,name:"Decorations", slug:"decorations"},
    {id:3,name:"Corsets",slug:"corsets"},
    {id:4,name:"Sleeveless jackets", slug:"sleeveless-jackets"},
    {id:5,name:"Beldemchi",slug:"beldemchi"},
    {id:6,name:"Shoes",slug:"shoes"},
  ];
  
  return(
    <div className="Category">
    <h1>Categories</h1>
    </div>
  );
}
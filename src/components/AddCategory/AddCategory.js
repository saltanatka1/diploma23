import { useState } from "react";

function AddCategory() {
  const [category, setCategory] = useState("")

  function onChangeCategory(event){
    return ( 
      setCategory(event.target.value)
    );
  }

  function onAddCategory(params) {
    
  }
  
  
  return (
  <div className="AddCategory"> 
    <input 
    size="15"
    type="text" 
    value={category}
    placeholder="Category name " 
    onchange={onChangeCategory}/>
    <button onClick={onAddCategory}>+</button>
  </div>
  );
}

export default AddCategory;

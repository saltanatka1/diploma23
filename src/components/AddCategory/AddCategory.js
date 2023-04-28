import { addDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { categoryCollection } from "../../firebase";

function AddCategory() {
  const [category, setCategory] = useState("");

  function onChangeCategory(event) {
    return setCategory(event.target.value);
  }

  function onAddCategory(params) {
    const name = category.trim();

    if (name.length <= 5) {
      alert(
        "Please provide a category name with minimum length of 5 characters"
      );
    }
    addDoc(categoryCollection, {
      name: category.trim(),
      slug: category.trim().replace(" ", "-").toLocaleLowerCase(),
    }).then(() => {
      setCategory("");
    });
  }

  return (
    <div className="AddCategory">
      <input
        size="15"
        type="text"
        value={category}
        placeholder="Category name "
        onchange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
}

export default AddCategory;

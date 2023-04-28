import React, { useState } from "react";
import "./AddCategory.css";
import { addDoc } from "firebase/firestore";
import { categoryCollection } from "../../firebase";

export default function AddCategory() {
  const [category, setCategory] = useState("");

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {
    const name = category.trim();
    if (name.length <= 5) {
      alert(
        "Plase provide a category name with minimum length of 5 characters"
      );
      return;
    }
    addDoc(categoryCollection, {
      name: name,
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
        placeholder="Category Name"
        onChange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
}

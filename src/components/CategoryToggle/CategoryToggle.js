import "./CategoryToggle.css";

function CategoryToggle({ callback }) {
  return (
    <button onClick={callback} className="CategoryToggle">
      <div className="category-button">
        <img
          src="https://cdn.icon-icons.com/icons2/2944/PNG/512/category_icon_184131.png"
          alt="category"
        />
        <h2>Category</h2>
      </div>
    </button>
  );
}

export default CategoryToggle;

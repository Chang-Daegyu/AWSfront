import React from "react";

function CategoryItem({ icon, label, active, onClick }) {
  return (
    <div
      className={`category-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="category-icon">{icon}</span>
      <span className="category-label">{label}</span>
    </div>
  );
}

export default CategoryItem;

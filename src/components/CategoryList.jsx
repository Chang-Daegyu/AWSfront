import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const CATEGORIES = [
  { icon: "📚", label: "전체" },
  { icon: "❤️", label: "로맨스" },
  { icon: "🚀", label: "SF" },
  { icon: "👻", label: "공포" },
  { icon: "🔍", label: "추리" },
  { icon: "🏺", label: "역사" },
  { icon: "✒️", label: "시" },
];

function CategoryList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="category-list">
      {CATEGORIES.map((c, i) => (
        <CategoryItem
          key={c.label}
          icon={c.icon}
          label={c.label}
          active={activeIndex === i}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
}

export default CategoryList;

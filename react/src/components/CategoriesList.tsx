import React from "react";

interface Category {
  name: string;
  description: string;
}

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: React.FC<CategoriesListProps> = (props) => {
  return (
    <ul>
      {props.categories.map((category, index) => (
        <li key={index}>
          {category.name} - {category.description}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;

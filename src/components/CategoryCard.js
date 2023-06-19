import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CategorySelectorContext } from "../contexts/CategorySelectorContext";

const CategoryCard = ({ book }) => {
  const navigate = useNavigate();
  const { categoryName, description } = book;
  const { addToCategoryFilter } = useContext(CategorySelectorContext);
  const handleClick = () => {
    addToCategoryFilter(categoryName);
    navigate("/products");
  };
  return (
    <>
      <div onClick={handleClick}>
        <h3>{categoryName}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};
export { CategoryCard };

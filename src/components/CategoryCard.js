import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CategorySelectorContext } from "../contexts/CategorySelectorContext";

const CategoryCard = ({ book }) => {
  const navigate = useNavigate();
  const { categoryName, description } = book;
  const { selectCategory } = useContext(CategorySelectorContext);
  const handleClick = () => {
    selectCategory(categoryName);
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

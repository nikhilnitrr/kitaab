import { createContext, useState } from "react";

const CategorySelectorContext = createContext();

const CategorySelectorProvider = ({ children }) => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const addToCategoryFilter = (category) => {
    setCategoryFilter((categoryFilter) => {
      return [...categoryFilter, category];
    });
  };
  const removeFromCategoryFilter = (category) => {
    setCategoryFilter((categoryFilter) => {
      return categoryFilter.filter((item) => item !== category);
    });
  };
  return (
    <CategorySelectorContext.Provider
      value={{ categoryFilter, addToCategoryFilter, removeFromCategoryFilter }}
    >
      {children}
    </CategorySelectorContext.Provider>
  );
};

export { CategorySelectorContext, CategorySelectorProvider };

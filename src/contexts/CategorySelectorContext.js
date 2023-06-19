import { createContext, useState } from "react";

const CategorySelectorContext = createContext();

const CategorySelectorProvider = ({ children }) => {
  
    const categorySelection = {
    fiction: false,
    horror: false,
    nonFiction: false,
  };
  
  const [userCategorySelection, setUserCategorySelection] =
    useState(categorySelection);
  
    const selectCategory = (categoryName) => {
    setUserCategorySelection((userCategorySelection) => {
      return { ...userCategorySelection, [categoryName]: true };
    });
  };
  
  const unselectCategory = (categoryName) => {
    setUserCategorySelection((userCategorySelection) => {
      return { ...userCategorySelection, [categoryName]: false };
    });
  };

  return (
    <CategorySelectorContext.Provider
      value={{ userCategorySelection, selectCategory, unselectCategory }}
    >
      {children}
    </CategorySelectorContext.Provider>
  );
};

export { CategorySelectorContext, CategorySelectorProvider };

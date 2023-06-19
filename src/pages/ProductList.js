import { useContext } from "react";

import { CategoryContext } from "../contexts/CategoryContext";
import { CategorySelectorContext } from "../contexts/CategorySelectorContext";
import { ProductContext } from "../contexts/ProductContext";
import { ProductCard } from "../components/ProductCard";

const ProductList = () => {
  const { bookCategories } = useContext(CategoryContext);
  const { bookList } = useContext(ProductContext);
  const { categoryFilter, addToCategoryFilter, removeFromCategoryFilter } =
    useContext(CategorySelectorContext);
  
    const handleChange = (event) => {
    if (event.target.checked) {
      addToCategoryFilter(event.target.name);
    }
    if (!event.target.checked) {
      removeFromCategoryFilter(event.target.name);
    }
  };
  
  const filteredBookList = bookList.filter((book) =>
    categoryFilter.includes(book.categoryName)
  );
  
  return (
    <div>
      <aside>
        {/* category filter */}
        <div>
          {bookCategories.map((category) => (
            <label>
              {category.categoryName}
              <input
                type="checkbox"
                name={category.categoryName}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
      </aside>
      {filteredBookList.length > 0
        ? filteredBookList.map((book) => <ProductCard book={book} />)
        : bookList.map((book) => <ProductCard book={book} />)}
    </div>
  );
};

export { ProductList };

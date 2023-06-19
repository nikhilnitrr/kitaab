import { useParams } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";

const Product = () => {
  const { productId } = useParams();
  const { bookList } = useContext(ProductContext);
  const productDetails = bookList.find((book) => book.id === productId);
  return <div>
      <div>Title: {productDetails.title}</div>
      <div>Price: {productDetails.price}</div>
      <div>Author: {productDetails.author}</div>
      <div>Title: {productDetails.categoryName}</div>
  </div>;
};
export { Product };

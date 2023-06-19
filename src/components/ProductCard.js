import { useNavigate } from "react-router-dom";

const ProductCard = ({ book }) => {
  const navigate = useNavigate();
  const { id, title, price } = book;
  const handleClick = () => {
      navigate(`/products/${id}`)
  }
  return (
    <div onClick={handleClick}>
      <div>Title: {title}</div>
      <div>Price: {price}</div>
    </div>
  );
};
export { ProductCard };

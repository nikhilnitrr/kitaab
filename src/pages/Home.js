import { useContext } from "react";

import { CategoryContext } from "../contexts/CategoryContext";

const Home = () => {
  const { bookCategories } = useContext(CategoryContext);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {bookCategories.map((book) => (
          <li key={book.id}>
            <h3>{book.categoryName}</h3>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export { Home };

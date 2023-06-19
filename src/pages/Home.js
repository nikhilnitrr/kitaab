import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CategoryContext } from "../contexts/CategoryContext";
import { CategoryCard } from "../components/CategoryCard";

const Home = () => {
  const { bookCategories } = useContext(CategoryContext);
  return (
    <div>
      <header>
        <nav>
          <h1>kitaab</h1>
          <ul>
            <li><NavLink>Cart</NavLink></li>
            <li><NavLink>WishList</NavLink></li>
            <li><NavLink>Products</NavLink></li>
            <li><NavLink>Login</NavLink></li>
            <li><NavLink>SignUp</NavLink></li>
          </ul>
        </nav>
      </header>
      {
        bookCategories.map((book) => <CategoryCard book={book}/>)
      }
      <footer></footer>
    </div>
  );
};
export { Home };

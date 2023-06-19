import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./contexts/CategoryContext";
import { CategorySelectorProvider } from "./contexts/CategorySelectorContext";
import { ProductProvider } from "./contexts/ProductContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <CategorySelectorProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CategorySelectorProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

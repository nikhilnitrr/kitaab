import {Routes, Route} from "react-router-dom"
import "./App.css";

import {Home} from "./pages/Home"
import {ProductList} from "./pages/ProductList"
import {Product} from "./pages/Product"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:productId" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;

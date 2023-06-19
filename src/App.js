import {Routes, Route} from "react-router-dom"
import "./App.css";

import {Home} from "./pages/Home"
import {ProductList} from "./pages/ProductList"

function App() {
  return (
    <div className="App">
      <h1>kitaab</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
      </Routes>
    </div>
  );
}

export default App;

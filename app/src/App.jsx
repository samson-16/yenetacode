import "./App.css";
import ListProducts from "./Page/ProductList/ListProducts";
import AddProducts from "./Page/Products/AddProducts";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/register" element={<AddProducts />} />
        
      </Routes>

    </div>
  );
}

export default App;

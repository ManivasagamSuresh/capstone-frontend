import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import Welcome from "./Welcome";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import AdminProducts from "./AdminProducts";
import UserViewProducts from "./UserViewProducts";
// import ProductCard from './ProductCard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Portal";
import AddProducts from "./AddProducts";
import EditProduct from "./Editproduct";
import Productcard from "./Productcard";
import Topbar from "./Topbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>

        <Route path="/portal" element={<Portal />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="addproducts" element={<AddProducts />}></Route>
          <Route path="adminProducts" element={<AdminProducts />}></Route>
          <Route path="editproduct/:id" element={<EditProduct />}></Route>
          <Route path="products" element={<UserViewProducts />}></Route>
          <Route path="productcard" element={<Productcard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

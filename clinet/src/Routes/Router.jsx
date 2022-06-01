import { Navbar } from "../Components/Navbar_Footer/Navbar";
import { Routes, Route } from "react-router";
import { Home } from "../Components/LandingPage/LandingPage";
import { Products } from "../Components/Products/Product";

export const AllRoutes = () => {
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Products />}></Route>
    </Routes>
  </div>;
};

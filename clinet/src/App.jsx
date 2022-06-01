import "./App.css";
// import { AllRoutes } from "./Routes/Router";
import { Navbar } from "./Components/Navbar_Footer/Navbar";
import { Routes, Route } from "react-router";
import { Home } from "./Components/LandingPage/LandingPage";
import { Products } from "./Components/Products/Product";
import { Login } from "./Components/LoginPage/Login";
import { Footer } from "./Components/Navbar_Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

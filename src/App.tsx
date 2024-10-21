import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Sell from "./components/Sell";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product-view/:productId" element={<ProductDetail/>}/>
        
        <Route path="/sell" element={<Sell/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;

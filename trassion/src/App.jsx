import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Market from "./pages/Market.jsx";
import CSR from "./pages/CSR.jsx";
import IMS from "./pages/IMS.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/market" element={<Market />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/ims" element={<IMS />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

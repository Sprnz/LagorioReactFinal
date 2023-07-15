import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./components/pages/Category/Category";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import CartContainer from "./components/pages/Cart/CartContainer";
import CartProvider from "./components/context/CartContext";
import Checkout from "./components/pages/Checkout/Checkout";









function App() {
  return (

    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>

            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/product/:productId" element={<ItemDetail />} />
            <Route path="/about" element={<p>About</p>} />
            <Route path="/contact" element={<p>Contact</p>} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />





            <Route path="*" element={<h1>La ruta no existe.</h1>} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

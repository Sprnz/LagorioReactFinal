import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./components/pages/Category/Category";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";





function App() {
  return (

    <>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:productId" element={<ItemDetail />} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
          <Route path="/cart" element={<p>Carrito</p>} />


          <Route path="*" element={<h1>La ruta no existe.</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

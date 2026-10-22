import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductForm/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";

function App() {
  return (
    <>
      <Header />  
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          {/*filtro por coccion */}
          <Route path="/coccion/:coccion" element={<ItemListContainer />} />

          {/* rutas admin */}
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/admin/products/success/:id" element={<ProductSuccess />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

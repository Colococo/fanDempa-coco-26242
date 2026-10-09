import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <>
      <Header />  
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<h1>Pedido</h1>} />
          <Route path="/cart" element={<ItemDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

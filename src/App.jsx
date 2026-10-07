import './App.css'
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
    <Header />  
      <main>
        <Routes>
          <Route path="/" element={<h1>Bienvenido</h1>} />
          <Route path="/cart" element={<h1>Pedido</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App

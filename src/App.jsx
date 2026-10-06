import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<h1>Bienvenido</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App

import { Navigate, Routes, Route } from "react-router-dom";
import './App.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductForm/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        {/* todas las rutas publicas la envuelvo con <PublicLayout/> */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          {/*filtro por coccion */}
          <Route path="/coccion/:coccion" element={<ItemListContainer />} />
        </Route>

        {/* el login va por fuera de las rutas protegidas, sino me estaria pidiendo un login para el login */}
        <Route path="/admin/login" element={<Login />}/>

        {/* envolvemos las rutas admin con <AdminLayout /> (rutas protegidas) */}
        {/* desde el navegador entro a admin, entra a: ProtectedRoute-> ¿alguien esta logueado? por si, AdminLayout-> Route index -> dashboard */}
        <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute> 
          }
        >
          <Route index element={<Navigate to={"dashboard"} />} /> {/* no hay nadie logueado ir al dashboard */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

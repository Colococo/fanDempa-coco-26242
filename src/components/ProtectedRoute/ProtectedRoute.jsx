import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
// usa el usuario y login que viene del contexto
export const ProtectedRoute = ({ children })=> {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    // si no hay nadie logueado anda a admin->login
    if (!user) return <Navigate to="/admin/login" />;

    return children;
};
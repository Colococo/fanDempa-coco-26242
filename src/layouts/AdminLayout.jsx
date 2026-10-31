import { Outlet } from "react-router-dom";
// aca solo las rutas porque es admin, son privadas
export const AdminLayout = ()=> {
    return (
        <main>
            <Outlet />
        </main>
    );
};
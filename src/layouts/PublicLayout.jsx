import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

// vista para el usuario comun
// aca va el header, main y footer que debe ver el usuario
export const PublicLayout = ()=> {
    return (
        <>
            <Header />  
            <main>
                {/* aca se renderiza dinamicamanete la ruta que se consulte */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
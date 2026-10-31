import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

// context
const AuthContext = createContext();

export const useAuth = ()=> {
    // usamos el context
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }

    return context;
};

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // unsubscribe: se fija si hay un usuario
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
    
        return unsubscribe;
    }, []);

    // tomamos los datos del form
    const login = (email, password)=> {
        //  autenticar usuarios con signInWithEmailAndPassword (funcion de Firebase)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        try {
            // (auth): es el creamos en config de firebase
            // sigOut: funcion de firebase
            await signOut(auth);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
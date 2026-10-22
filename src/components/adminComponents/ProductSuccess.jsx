import { Link, useParams } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h2>Empanada cargada</h2>
      <p>ID de la empanada: {id}</p>
      <p>Para cargar otra variedad, hace click en el botón.</p>

      <div className="success-actions">
        <Link className="btn bg-success primary" to="/admin">
          Cargar otra variedad
        </Link>
      </div>
    </section>
  );
};
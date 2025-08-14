import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';

export default function Dashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      color: "white",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        gap: "40px",
        backgroundColor: "#1c1c1c",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ borderRadius: "10px", maxWidth: "250px" }}
        />

        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>SKU:</strong> {product.sku}</p>

          <button style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "10px"
          }}>
            Comprar
          </button>
        </div>
      </div>

      {/* Botón para volver atrás */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold"
        }}
      >
        Volver
      </button>
    </div>
  );
}

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import products from "../data/products.json";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="title">Productos</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price}</p>
              <Link to={`/product/${product.id}`} className="product-link">
                Ver detalle
              </Link>
              <h6><strong>SKU:</strong> {product.sku}</h6>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
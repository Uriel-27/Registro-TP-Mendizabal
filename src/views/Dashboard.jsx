import { useParams } from 'react-router-dom';
import products from '../data/products.json';

export default function Dashboard() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={200} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Comprar</button>
    </div>
  );
}
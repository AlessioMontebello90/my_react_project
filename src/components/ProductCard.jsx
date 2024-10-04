// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
      <img className="h-48 w-full object-cover mb-4" src={product.image} alt={product.title} />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <Link to={`/product/${product.id}`} className="block bg-blue-500 text-white px-4 py-2 text-center rounded hover:bg-blue-600">
        Vedi Dettagli
      </Link>
    </div>
  );
}

export default ProductCard;

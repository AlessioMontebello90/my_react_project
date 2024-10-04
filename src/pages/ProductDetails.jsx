// src/pages/ProductDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <img className="w-full lg:w-1/2 object-cover" src={product.image} alt={product.title} />
        <div className="flex-1">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-8">Prezzo: ${product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Aggiungi al Carrello
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

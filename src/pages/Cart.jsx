// src/pages/Cart.jsx
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) return <div className="text-center p-8">Il carrello è vuoto</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Il tuo carrello</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="border-b py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-700">${item.price}</p>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">
            Rimuovi
          </button>
        </div>
      ))}
      <p className="text-xl font-bold mt-8">Totale: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
}

export default Cart;

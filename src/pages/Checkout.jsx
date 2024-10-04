import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cartItems, setCartItems } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed by ${name} to ${address}`);
    setCartItems([]);  // Svuota il carrello al termine
  };

  if (cartItems.length === 0) return <div>Your cart is empty</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Checkout</h1>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Address</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default Checkout;

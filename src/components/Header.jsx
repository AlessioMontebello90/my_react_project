// src/components/Header.jsx
function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

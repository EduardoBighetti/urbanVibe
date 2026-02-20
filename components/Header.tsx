
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../store/AppContext';

const Header: React.FC = () => {
  const { cart, wishlist, setCartOpen, searchQuery, setSearchQuery } = useApp();
  const [isSearchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/masculino');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left Side: Brand & Links */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="brand-font text-2xl font-bold tracking-tighter">
            URBAN<span className="text-gray-400">VIBE</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold uppercase tracking-widest">
            <Link to="/ofertas" className="hover:text-red-600 transition-colors">Ofertas</Link>
            <Link to="/masculino" className="hover:text-gray-500 transition-colors">Masculino</Link>
            <Link to="/wishlist" className="hover:text-gray-500 transition-colors">Lista de Desejos</Link>
          </nav>
        </div>

        {/* Right Side: Search & Cart */}
        <div className="flex items-center space-x-6">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`transition-all duration-300 border-b border-black focus:outline-none text-sm py-1 ${isSearchActive ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}
              onBlur={() => !searchQuery && setSearchActive(false)}
            />
            <button 
              type="button"
              onClick={() => setSearchActive(!isSearchActive)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <i className="fa-solid fa-bag-shopping text-xl"></i>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

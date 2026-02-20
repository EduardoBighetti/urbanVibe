
import React from 'react';
import { useApp } from '../store/AppContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const { wishlist } = useApp();

  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh]">
      <div className="mb-12 text-center">
        <h1 className="brand-font text-4xl font-black uppercase mb-2">Lista de Desejos</h1>
        <p className="text-gray-500 uppercase text-xs tracking-widest font-semibold">Seus favoritos guardados em um só lugar</p>
        <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 space-y-6">
          <i className="fa-regular fa-heart text-6xl text-gray-200"></i>
          <p className="text-gray-400 font-bold uppercase tracking-wider">Você ainda não adicionou nenhum favorito.</p>
          <Link 
            to="/masculino" 
            className="inline-block bg-black text-white px-8 py-3 font-bold uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors"
          >
            Explorar Loja
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

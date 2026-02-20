
import React from 'react';
import { Product } from '../types';
import { useApp } from '../store/AppContext';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const isWishlisted = wishlist.some(p => p.id === product.id);

  return (
    <div className="group relative bg-white border border-transparent hover:border-gray-100 transition-all duration-500">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">New</span>
          )}
          {product.isPromo && (
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">Sale</span>
          )}
        </div>

        {/* Action Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-white/90 to-transparent">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800"
          >
            Adicionar ao Carrinho
          </button>
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={() => toggleWishlist(product)}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isWishlisted ? 'bg-black text-white' : 'bg-white/80 hover:bg-black hover:text-white'}`}
        >
          <i className={`${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart text-xs`}></i>
        </button>
      </div>

      <div className="mt-4 p-2">
        <h3 className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">{product.category}</h3>
        <h2 className="text-sm font-bold uppercase truncate">{product.name}</h2>
        <div className="flex items-center space-x-2 mt-1">
          <span className="font-bold text-lg">R$ {product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs italic">R$ {product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import React from 'react';
import { useApp } from '../store/AppContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar: React.FC = () => {
  const { cart, isCartOpen, setCartOpen, updateQuantity, removeFromCart } = useApp();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      ></div>

      {/* Content */}
      <div className="relative w-full md:w-1/3 bg-white h-full shadow-2xl flex flex-col animate-slide-in">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="brand-font text-xl font-bold uppercase">Seu Carrinho</h2>
          <button onClick={() => setCartOpen(false)} className="text-2xl hover:rotate-90 transition-transform">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
              <i className="fa-solid fa-cart-shopping text-5xl"></i>
              <p className="font-semibold uppercase tracking-wider">Seu carrinho está vazio</p>
              <button 
                onClick={() => { setCartOpen(false); navigate('/masculino'); }}
                className="text-black border-b border-black font-bold text-sm"
              >
                VER PRODUTOS
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-4 border-b border-gray-100 pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm uppercase">{item.name}</h4>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-gray-400 hover:text-black"
                      >
                        <i className="fa-solid fa-trash-can text-xs"></i>
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 uppercase">Tamanho: {item.selectedSize}</p>
                    <p className="font-bold mt-1">R$ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                      className="w-6 h-6 border flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                      <i className="fa-solid fa-minus text-[10px]"></i>
                    </button>
                    <span className="text-sm font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                      className="w-6 h-6 border flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                      <i className="fa-solid fa-plus text-[10px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Subtotal</span>
              <span className="text-xl font-bold">R$ {subtotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => { setCartOpen(false); navigate('/checkout'); }}
              className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;

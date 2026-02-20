
import React, { useState } from 'react';
import { useApp } from '../store/AppContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart } = useApp();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 15.00;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => navigate('/'), 3000);
  };

  if (success) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-6">
        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto text-4xl animate-bounce">
          <i className="fa-solid fa-check"></i>
        </div>
        <h1 className="brand-font text-4xl font-black uppercase">Pedido Realizado!</h1>
        <p className="text-gray-500 uppercase font-bold tracking-widest">Obrigado por escolher a UrbanVibe.</p>
        <p className="text-xs text-gray-400">Redirecionando para a página inicial...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
      <div className="flex-1 space-y-12">
        <section>
          <h2 className="brand-font text-xl font-bold uppercase mb-6 flex items-center">
            <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
            Dados de Entrega
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Nome Completo" className="border p-3 text-sm focus:outline-black" required />
            <input placeholder="E-mail" type="email" className="border p-3 text-sm focus:outline-black" required />
            <input placeholder="CEP" className="border p-3 text-sm focus:outline-black" required />
            <input placeholder="Endereço" className="border p-3 text-sm focus:outline-black md:col-span-2" required />
          </form>
        </section>

        <section>
          <h2 className="brand-font text-xl font-bold uppercase mb-6 flex items-center">
            <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
            Pagamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-all font-bold uppercase text-xs">PIX</button>
            <button className="border p-4 text-center hover:bg-black hover:text-white transition-all font-bold uppercase text-xs">Cartão de Crédito</button>
            <button className="border p-4 text-center hover:bg-black hover:text-white transition-all font-bold uppercase text-xs">Boleto</button>
          </div>
        </section>
      </div>

      <div className="w-full lg:w-96 bg-gray-50 p-8 rounded-sm h-fit space-y-6">
        <h3 className="brand-font font-bold uppercase border-b pb-4">Resumo do Pedido</h3>
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-gray-600 truncate mr-2">{item.quantity}x {item.name}</span>
              <span className="font-bold shrink-0">R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
            <span>Frete</span>
            <span>R$ {shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-black border-t pt-4">
            <span>TOTAL</span>
            <span>R$ {(subtotal + shipping).toFixed(2)}</span>
          </div>
        </div>
        <button 
          onClick={handleSubmit}
          className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};

export default Checkout;

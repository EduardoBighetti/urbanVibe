
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/masculino" element={<Catalog mode="all" />} />
              <Route path="/ofertas" element={<Catalog mode="promo" />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          
          <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="brand-font font-bold mb-4">URBANVIBE</h3>
                <p className="text-xs text-gray-400 uppercase leading-loose tracking-widest">
                  A expressão máxima da moda de rua. Minimalismo, qualidade e atitude para a nova geração.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase mb-4 tracking-widest">Loja</h4>
                <ul className="text-xs space-y-2 text-gray-400 uppercase font-semibold">
                  <li><a href="#" className="hover:text-white">Masculino</a></li>
                  <li><a href="#" className="hover:text-white">Novidades</a></li>
                  <li><a href="#" className="hover:text-white">Sale</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase mb-4 tracking-widest">Suporte</h4>
                <ul className="text-xs space-y-2 text-gray-400 uppercase font-semibold">
                  <li><a href="#" className="hover:text-white">Envios</a></li>
                  <li><a href="#" className="hover:text-white">Trocas</a></li>
                  <li><a href="#" className="hover:text-white">Contato</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase mb-4 tracking-widest">Social</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-xl hover:text-gray-400"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="text-xl hover:text-gray-400"><i className="fa-brands fa-tiktok"></i></a>
                  <a href="#" className="text-xl hover:text-gray-400"><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-[10px] text-gray-500 uppercase text-center tracking-widest">
              © 2024 URBANVIBE. Desenvolvido para as ruas.
            </div>
          </footer>

          <CartSidebar />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;

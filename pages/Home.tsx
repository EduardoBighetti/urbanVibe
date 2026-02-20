
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const newArrivals = MOCK_PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="brand-font text-5xl md:text-8xl font-black mb-6 leading-tight uppercase">
            URBAN <br /> <span className="text-transparent border-t-2 border-b-2 border-white px-2">SPIRIT</span>
          </h1>
          <p className="max-w-md text-lg font-light mb-8 text-gray-300 uppercase tracking-widest">
            A nova coleção primavera/verão chegou para redefinir seu estilo urbano.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/masculino" 
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              Ver Coleção
            </Link>
            <Link 
              to="/ofertas" 
              className="border-2 border-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Promoções
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="brand-font text-3xl font-bold uppercase">Lançamentos</h2>
            <div className="w-20 h-1 bg-black mt-2"></div>
          </div>
          <Link to="/masculino" className="text-sm font-bold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500">
            VER TUDO
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group h-96 overflow-hidden bg-black">
            <img 
              src="https://picsum.photos/seed/cat1/800/800" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000"
              alt="Camisas"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="brand-font text-4xl font-bold uppercase mb-4">Camisas</h3>
              <Link to="/masculino?category=camisa" className="bg-white text-black px-6 py-2 font-bold uppercase text-xs tracking-widest">Explorar</Link>
            </div>
          </div>
          <div className="relative group h-96 overflow-hidden bg-black">
            <img 
              src="https://picsum.photos/seed/cat2/800/800" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000"
              alt="Acessórios"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="brand-font text-4xl font-bold uppercase mb-4">Essenciais</h3>
              <Link to="/masculino" className="bg-white text-black px-6 py-2 font-bold uppercase text-xs tracking-widest">Explorar</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

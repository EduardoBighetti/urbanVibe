
import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { useApp } from '../store/AppContext';
import { useLocation } from 'react-router-dom';

const Catalog: React.FC<{ mode?: 'all' | 'promo' }> = ({ mode = 'all' }) => {
  // Added setSearchQuery to the destructuring to fix line 111 error
  const { searchQuery, setSearchQuery } = useApp();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'todos';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'relevant'>('relevant');

  const filteredProducts = useMemo(() => {
    let result = MOCK_PRODUCTS;

    if (mode === 'promo') {
      result = result.filter(p => p.isPromo);
    }

    if (categoryFilter !== 'todos') {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.keywords.some(k => k.toLowerCase().includes(q))
      );
    }

    if (sortOrder === 'asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryFilter, sortOrder, searchQuery, mode]);

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      
      {/* Sidebar Filter */}
      <aside className="w-full md:w-64 space-y-8">
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 border-b pb-2">Categoria</h3>
          <ul className="space-y-2 text-sm">
            {['todos', 'camisa', 'moletom', 'calca', 'acessorio'].map(cat => (
              <li key={cat}>
                <button 
                  onClick={() => setCategoryFilter(cat)}
                  className={`uppercase tracking-tighter hover:pl-2 transition-all ${categoryFilter === cat ? 'font-bold underline' : 'text-gray-500'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 border-b pb-2">Ordenar</h3>
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
            className="w-full bg-white border border-gray-200 text-sm p-2 outline-none focus:border-black"
          >
            <option value="relevant">Mais Relevantes</option>
            <option value="asc">Menor Preço</option>
            <option value="desc">Maior Preço</option>
          </select>
        </div>

        <div className="bg-black p-6 text-white text-center rounded-sm">
          <p className="text-[10px] uppercase font-bold mb-2">Street Assistant</p>
          <p className="text-xs leading-relaxed italic">"O segredo do estilo urbano é o equilíbrio entre o conforto e a ousadia."</p>
        </div>
      </aside>

      {/* Main Grid */}
      <main className="flex-1">
        <div className="flex items-center justify-between mb-8">
          <h1 className="brand-font text-2xl font-bold uppercase">
            {mode === 'promo' ? '🔥 Ofertas Imperdíveis' : 'Catálogo Masculino'}
          </h1>
          <p className="text-xs text-gray-500 font-semibold">{filteredProducts.length} PRODUTOS ENCONTRADOS</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <i className="fa-solid fa-face-frown-open text-4xl text-gray-300 mb-4"></i>
            <h2 className="text-lg font-bold text-gray-500 uppercase">Nenhum produto encontrado</h2>
            <button 
              onClick={() => {setSearchQuery(''); setCategoryFilter('todos');}}
              className="mt-4 text-xs font-bold border-b border-black"
            >
              LIMPAR FILTROS
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Catalog;

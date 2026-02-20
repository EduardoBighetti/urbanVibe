
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Camisa Oversized Black',
    price: 89.90,
    category: 'camisa',
    image: 'https://picsum.photos/seed/urban1/600/800',
    description: 'Corte moderno e confortável para o dia a dia.',
    isNew: true,
    isPromo: false,
    colors: ['Preto'],
    sizes: ['P', 'M', 'G', 'GG'],
    keywords: ['oversized', 'preta', 'camisa', 'urban']
  },
  {
    id: '2',
    name: 'T-Shirt Urban White',
    price: 59.90,
    originalPrice: 79.90,
    category: 'camisa',
    image: 'https://picsum.photos/seed/urban2/600/800',
    description: 'O básico essencial com toque de streetwear.',
    isNew: false,
    isPromo: true,
    colors: ['Branco'],
    sizes: ['P', 'M', 'G'],
    keywords: ['branco', 'camisa', 'basic']
  },
  {
    id: '3',
    name: 'Hoodie Minimalist',
    price: 159.90,
    category: 'moletom',
    image: 'https://picsum.photos/seed/urban3/600/800',
    description: 'Moletom pesado de alta qualidade.',
    isNew: true,
    isPromo: false,
    colors: ['Cinza'],
    sizes: ['M', 'G', 'GG'],
    keywords: ['hoodie', 'moletom', 'frio']
  },
  {
    id: '4',
    name: 'Camisa Cargo Desert',
    price: 110.00,
    originalPrice: 149.90,
    category: 'camisa',
    image: 'https://picsum.photos/seed/urban4/600/800',
    description: 'Estilo utilitário com bolsos frontais.',
    isNew: false,
    isPromo: true,
    colors: ['Bege'],
    sizes: ['P', 'M', 'G'],
    keywords: ['cargo', 'bege', 'camisa']
  },
  {
    id: '5',
    name: 'Grafitti Art Tee',
    price: 95.00,
    category: 'camisa',
    image: 'https://picsum.photos/seed/urban5/600/800',
    description: 'Estampa exclusiva inspirada na arte urbana.',
    isNew: true,
    isPromo: false,
    colors: ['Branco'],
    sizes: ['P', 'M', 'G', 'GG'],
    keywords: ['grafite', 'print', 'branca']
  }
];

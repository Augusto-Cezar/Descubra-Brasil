import { useState } from 'react';
import { Search, Filter, Menu, Heart, Calendar } from 'lucide-react';
import { Input } from './ui/input';
import { Card } from './ui/card';
import BottomNavigation from './BottomNavigation';
import { Event, Screen } from '../App';
import Logo from './Logo';

interface FavoritesScreenProps {
  navigateToScreen: (screen: Screen, event?: Event) => void;
  favorites: string[];
  itinerary: string[];
  toggleFavorite: (eventId: string) => void;
  toggleItinerary: (eventId: string) => void;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Carnaval de Salvador',
    date: '23-26 Fev 2024',
    location: 'Salvador, BA',
    description: 'O maior carnaval de rua do mundo com trios elétricos e blocos tradicionais.',
    image: 'https://images.unsplash.com/photo-1736761427281-8f2b2d55912b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjYXJuaXZhbCUyMGZlc3RpdmFsfGVufDF8fHx8MTc1NjY2MTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cultural',
    isFavorite: false,
    isInItinerary: false
  },
  {
    id: '2',
    title: 'Festival de Inverno de Campos do Jordão',
    date: '15-30 Jul 2024',
    location: 'Campos do Jordão, SP',
    description: 'Festival de música clássica em um dos destinos mais charmosos do Brasil.',
    image: 'https://images.unsplash.com/photo-1753644015628-0d4a199f9577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjdWx0dXJlJTIwbXVzaWN8ZW58MXx8fHwxNzU2NjYxNzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Música',
    isFavorite: false,
    isInItinerary: false
  },
  {
    id: '3',
    title: 'Festival de Parintins',
    date: '28-30 Jun 2024',
    location: 'Parintins, AM',
    description: 'Disputas entre os bois Garantido e Caprichoso na ilha de Parintins.',
    image: 'https://images.unsplash.com/photo-1711510672553-363adca3fbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBiZWFjaCUyMGZlc3RhJTIwanVuaW5hfGVufDF8fHx8MTc1NjY2MTczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Folclore',
    isFavorite: false,
    isInItinerary: false
  },
  {
    id: '4',
    title: 'Festival de Gastronomia de Tiradentes',
    date: '20-23 Ago 2024',
    location: 'Tiradentes, MG',
    description: 'O melhor da culinária mineira em uma cidade histórica encantadora.',
    image: 'https://images.unsplash.com/photo-1640251314219-be6eb294446b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBmb29kJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzU2NjYxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Gastronomia',
    isFavorite: false,
    isInItinerary: false
  },
  {
    id: '5',
    title: 'Festival de Cinema de Gramado',
    date: '10-18 Ago 2024',
    location: 'Gramado, RS',
    description: 'O mais importante festival de cinema nacional do Brasil.',
    image: 'https://images.unsplash.com/photo-1489599735946-c7bf4ef72d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjaW5lbWElMjBmZXN0aXZhbHxlbnwxfHx8fDE3NTY2NjE3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cinema',
    isFavorite: false,
    isInItinerary: false
  },
  {
    id: '6',
    title: 'Rock in Rio',
    date: '13-22 Set 2024',
    location: 'Rio de Janeiro, RJ',
    description: 'O maior festival de música e entretenimento do mundo.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jayUyMGNvbmNlcnQlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NTY2NjE3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Música',
    isFavorite: false,
    isInItinerary: false
  }
];

export default function FavoritesScreen({ 
  navigateToScreen, 
  favorites, 
  itinerary, 
  toggleFavorite, 
  toggleItinerary 
}: FavoritesScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events that are in favorites
  const favoriteEvents = mockEvents.filter(event => favorites.includes(event.id));
  
  // Further filter by search query
  const filteredFavoriteEvents = favoriteEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEventClick = (event: Event) => {
    navigateToScreen('event-details', event);
  };

  return (
    <div className="h-full w-full bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <Logo size="small" showText={false} />
          <h1 className="text-lg font-medium" style={{ color: '#00A859' }}>
            Meus Favoritos
          </h1>
          <button>
            <Menu size={24} color="#666" />
          </button>
        </div>
        
        {favoriteEvents.length > 0 && (
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar nos favoritos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300"
              />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        {favoriteEvents.length === 0 ? (
          // Empty state
          <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
            <div className="mb-6 p-8 rounded-full bg-gray-100">
              <Heart size={64} color="#B0B0B0" />
            </div>
            <h3 className="text-xl mb-3 text-gray-700">
              Nenhum favorito ainda
            </h3>
            <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
              Você ainda não adicionou favoritos. Explore eventos e toque no coração para salvá-los aqui.
            </p>
            <button
              onClick={() => navigateToScreen('home')}
              className="px-8 py-3 rounded-lg text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#00A859' }}
            >
              Explorar Eventos
            </button>
          </div>
        ) : (
          // Events list
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg" style={{ color: '#00A859' }}>
                {filteredFavoriteEvents.length} {filteredFavoriteEvents.length === 1 ? 'Favorito' : 'Favoritos'}
              </h2>
              {favoriteEvents.length !== filteredFavoriteEvents.length && (
                <span className="text-sm text-gray-500">
                  {favoriteEvents.length} total
                </span>
              )}
            </div>

            {filteredFavoriteEvents.length === 0 ? (
              // No search results
              <div className="flex flex-col items-center justify-center text-center py-12">
                <Search size={48} color="#B0B0B0" className="mb-4" />
                <h3 className="text-gray-600 mb-2">
                  Nenhum resultado encontrado
                </h3>
                <p className="text-gray-500 text-sm">
                  Tente buscar por outro termo
                </p>
              </div>
            ) : (
              filteredFavoriteEvents.map((event) => (
                <Card 
                  key={event.id}
                  className="rounded-xl shadow-sm overflow-hidden bg-white cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(event.id);
                        }}
                        className="p-2 bg-white/80 rounded-full backdrop-blur-sm"
                      >
                        <Heart 
                          size={18} 
                          fill="#00A859"
                          color="#00A859"
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleItinerary(event.id);
                        }}
                        className="p-2 bg-white/80 rounded-full backdrop-blur-sm"
                      >
                        <Calendar 
                          size={18} 
                          fill={itinerary.includes(event.id) ? '#FFD500' : 'none'}
                          color={itinerary.includes(event.id) ? '#FFD500' : '#666'}
                        />
                      </button>
                    </div>
                    
                    {/* Favorite indicator badge */}
                    <div className="absolute top-3 left-3">
                      <div 
                        className="px-2 py-1 rounded-full text-xs text-white flex items-center space-x-1"
                        style={{ backgroundColor: '#00A859' }}
                      >
                        <Heart size={12} fill="white" />
                        <span>Favorito</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen="favorites" 
        navigateToScreen={navigateToScreen} 
      />
    </div>
  );
}
import { useState } from 'react';
import { Search, Filter, Menu, Heart, Calendar } from 'lucide-react';
import { Input } from './ui/input';
import { Card } from './ui/card';
import BottomNavigation from './BottomNavigation';
import { Event, Screen } from '../App';
import Logo from './Logo';

interface HomeScreenProps {
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
  }
];

export default function HomeScreen({ 
  navigateToScreen, 
  favorites, 
  itinerary, 
  toggleFavorite, 
  toggleItinerary 
}: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = mockEvents.filter(event =>
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
          <Logo size="small" />
          <button>
            <Menu size={24} color="#666" />
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Buscar eventos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300"
            />
          </div>
          <button 
            onClick={() => navigateToScreen('filter')}
            className="p-2 rounded-lg border border-gray-300 bg-white"
          >
            <Filter size={20} color="#666" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <h2 className="text-lg mb-4" style={{ color: '#00A859' }}>
          Eventos em Destaque
        </h2>
        
        <div className="space-y-5">
          {filteredEvents.map((event) => (
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
                      fill={favorites.includes(event.id) ? '#00A859' : 'none'}
                      color={favorites.includes(event.id) ? '#00A859' : '#666'}
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
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen="home" 
        navigateToScreen={navigateToScreen} 
      />
    </div>
  );
}
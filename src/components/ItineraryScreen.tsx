import { Calendar, MapPin, Trash2, Plus } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import BottomNavigation from './BottomNavigation';
import { Screen } from '../App';
import Logo from './Logo';

interface ItineraryScreenProps {
  navigateToScreen: (screen: Screen) => void;
  itinerary: string[];
  toggleItinerary: (eventId: string) => void;
}

// Mock events data - in a real app this would come from props or context
const mockEvents = [
  {
    id: '1',
    title: 'Carnaval de Salvador',
    date: '23-26 Fev 2024',
    location: 'Salvador, BA',
    image: 'https://images.unsplash.com/photo-1736761427281-8f2b2d55912b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjYXJuaXZhbCUyMGZlc3RpdmFsfGVufDF8fHx8MTc1NjY2MTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cultural'
  },
  {
    id: '2',
    title: 'Festival de Inverno de Campos do Jordão',
    date: '15-30 Jul 2024',
    location: 'Campos do Jordão, SP',
    image: 'https://images.unsplash.com/photo-1753644015628-0d4a199f9577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjdWx0dXJlJTIwbXVzaWN8ZW58MXx8fHwxNzU2NjYxNzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Música'
  },
  {
    id: '3',
    title: 'Festival de Parintins',
    date: '28-30 Jun 2024',
    location: 'Parintins, AM',
    image: 'https://images.unsplash.com/photo-1711510672553-363adca3fbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBiZWFjaCUyMGZlc3RhJTIwanVuaW5hfGVufDF8fHx8MTc1NjY2MTczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Folclore'
  },
  {
    id: '4',
    title: 'Festival de Gastronomia de Tiradentes',
    date: '20-23 Ago 2024',
    location: 'Tiradentes, MG',
    image: 'https://images.unsplash.com/photo-1640251314219-be6eb294446b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBmb29kJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzU2NjYxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Gastronomia'
  }
];

export default function ItineraryScreen({ 
  navigateToScreen, 
  itinerary, 
  toggleItinerary 
}: ItineraryScreenProps) {
  const itineraryEvents = mockEvents.filter(event => itinerary.includes(event.id));

  return (
    <div className="h-full w-full bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <Logo size="small" showText={false} />
          <h1 className="text-lg" style={{ color: '#00A859' }}>
            Meu Itinerário
          </h1>
          <div className="w-8" /> {/* Spacer */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        {itineraryEvents.length === 0 ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <Calendar size={64} color="#B0B0B0" className="mb-4" />
            <h3 className="text-lg mb-2 text-gray-600">
              Seu itinerário está vazio
            </h3>
            <p className="text-gray-500 mb-6 px-8">
              Adicione eventos aos seus favoritos para começar a planejar sua viagem pelo Brasil!
            </p>
            <Button
              onClick={() => navigateToScreen('home')}
              className="px-6 py-3 rounded-lg text-white"
              style={{ backgroundColor: '#00A859' }}
            >
              <Plus size={20} className="mr-2" />
              Explorar Eventos
            </Button>
          </div>
        ) : (
          /* Events list */
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              {itineraryEvents.length} evento{itineraryEvents.length !== 1 ? 's' : ''} no seu itinerário
            </p>
            
            {itineraryEvents.map((event) => (
              <Card 
                key={event.id}
                className="rounded-xl shadow-sm overflow-hidden bg-white"
              >
                <div className="flex">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-24 h-24 object-cover"
                  />
                  
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900 text-sm leading-tight">
                        {event.title}
                      </h3>
                      <button
                        onClick={() => toggleItinerary(event.id)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Trash2 size={16} color="#666" />
                      </button>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} color="#666" />
                        <span className="text-xs text-gray-600">{event.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} color="#666" />
                        <span className="text-xs text-gray-600">{event.location}</span>
                      </div>
                    </div>
                    
                    <span 
                      className="inline-block px-2 py-1 rounded text-xs text-white mt-2"
                      style={{ backgroundColor: '#00A859' }}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}

            {/* Add more events button */}
            <Button
              onClick={() => navigateToScreen('home')}
              variant="outline"
              className="w-full h-12 rounded-lg border-2 border-dashed"
              style={{ borderColor: '#00A859', color: '#00A859' }}
            >
              <Plus size={20} className="mr-2" />
              Adicionar Mais Eventos
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen="itinerary" 
        navigateToScreen={navigateToScreen} 
      />
    </div>
  );
}
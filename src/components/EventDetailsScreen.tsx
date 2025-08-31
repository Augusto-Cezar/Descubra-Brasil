import { ArrowLeft, Heart, Calendar, MapPin, Clock, Share } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Event, Screen } from '../App';

interface EventDetailsScreenProps {
  event: Event | null;
  navigateToScreen: (screen: Screen) => void;
  favorites: string[];
  itinerary: string[];
  toggleFavorite: (eventId: string) => void;
  toggleItinerary: (eventId: string) => void;
}

export default function EventDetailsScreen({
  event,
  navigateToScreen,
  favorites,
  itinerary,
  toggleFavorite,
  toggleItinerary
}: EventDetailsScreenProps) {
  if (!event) {
    return (
      <div className="h-full w-full bg-white flex items-center justify-center">
        <p className="text-gray-500">Evento não encontrado</p>
      </div>
    );
  }

  const isFavorite = favorites.includes(event.id);
  const isInItinerary = itinerary.includes(event.id);

  return (
    <div className="h-full w-full bg-white flex flex-col">
      {/* Header com imagem */}
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-52 object-cover"
        />
        
        {/* Header overlay */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          <button
            onClick={() => navigateToScreen('home')}
            className="p-2 bg-white/80 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} color="#333" />
          </button>
          
          <div className="flex space-x-2">
            <button
              onClick={() => toggleFavorite(event.id)}
              className="p-2 bg-white/80 rounded-full backdrop-blur-sm"
            >
              <Heart 
                size={20} 
                fill={isFavorite ? '#00A859' : 'none'}
                color={isFavorite ? '#00A859' : '#333'}
              />
            </button>
            
            <button className="p-2 bg-white/80 rounded-full backdrop-blur-sm">
              <Share size={20} color="#333" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        {/* Título e informações básicas */}
        <div className="mb-6">
          <h1 className="text-2xl mb-3" style={{ color: '#00A859' }}>
            {event.title}
          </h1>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock size={16} color="#666" />
              <span className="text-gray-600">{event.date}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPin size={16} color="#666" />
              <span className="text-gray-600">{event.location}</span>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <Card className="p-4 mb-6 bg-gray-50">
          <h3 className="mb-3">Sobre o Evento</h3>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>
        </Card>

        {/* Categoria */}
        <Card className="p-4 mb-6">
          <h3 className="mb-3">Categoria</h3>
          <span 
            className="inline-block px-3 py-1 rounded-full text-sm text-white"
            style={{ backgroundColor: '#00A859' }}
          >
            {event.category}
          </span>
        </Card>

        {/* Informações adicionais */}
        <Card className="p-4 mb-6">
          <h3 className="mb-3">Informações Adicionais</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Evento gratuito</p>
            <p>• Recomendado para toda a família</p>
            <p>• Apresentações durante todo o dia</p>
          </div>
        </Card>
      </div>

      {/* Botões de ação */}
      <div className="p-4 space-y-3 bg-white border-t border-gray-200">
        <Button
          onClick={() => toggleItinerary(event.id)}
          className="w-full h-12 rounded-lg text-white"
          style={{ 
            backgroundColor: isInItinerary ? '#FFD500' : '#00A859',
            color: isInItinerary ? '#333' : '#fff'
          }}
        >
          <Calendar size={20} className="mr-2" />
          {isInItinerary ? 'Remover do Itinerário' : 'Adicionar ao Itinerário'}
        </Button>
        
        <Button
          onClick={() => toggleFavorite(event.id)}
          variant="outline"
          className="w-full h-12 rounded-lg border-2"
          style={{ 
            borderColor: '#00A859',
            color: isFavorite ? '#00A859' : '#666'
          }}
        >
          <Heart size={20} className="mr-2" fill={isFavorite ? '#00A859' : 'none'} />
          {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </Button>
      </div>
    </div>
  );
}
import { Settings, Heart, Calendar, MapPin, Edit, LogOut, Bell } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import BottomNavigation from './BottomNavigation';
import { Screen } from '../App';
import Logo from './Logo';

interface ProfileScreenProps {
  user: { name: string; email: string } | null;
  navigateToScreen: (screen: Screen) => void;
  favorites: string[];
  itinerary: string[];
}

export default function ProfileScreen({ 
  user, 
  navigateToScreen, 
  favorites, 
  itinerary 
}: ProfileScreenProps) {
  const stats = [
    {
      label: 'Eventos Visitados',
      value: '12',
      icon: MapPin,
      color: '#00A859'
    },
    {
      label: 'Favoritos',
      value: favorites.length.toString(),
      icon: Heart,
      color: '#00A859'
    },
    {
      label: 'No Itinerário',
      value: itinerary.length.toString(),
      icon: Calendar,
      color: '#FFD500'
    }
  ];

  const menuItems = [
    {
      label: 'Configurações',
      icon: Settings,
       action: () => navigateToScreen('settings')
    },
    {
      label: 'Notificações',
      icon: Bell,
      action: () => {}
    },
    {
      label: 'Editar Perfil',
      icon: Edit,
      action: () => {}
    },
    {
      label: 'Sair',
      icon: LogOut,
      action: () => navigateToScreen('login'),
      danger: true
    }
  ];

  return (
    <div className="h-full w-full bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <Logo size="small" showText={false} />
          <h1 className="text-lg" style={{ color: '#00A859' }}>
            Perfil
          </h1>
          <div className="w-8" /> {/* Spacer */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        {/* User Info */}
        <Card className="p-6 mb-6 bg-white rounded-xl shadow-sm">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1624224416603-c908080780b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBwZXJzb24lMjBhdmF0YXJ8ZW58MXx8fHwxNzU2NjYxODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name */}
            <h2 className="text-xl mb-1" style={{ color: '#00A859' }}>
              {user?.name || 'Usuário'}
            </h2>
            
            {/* Email */}
            <p className="text-gray-600 text-sm mb-4">
              {user?.email || 'usuario@exemplo.com'}
            </p>
            
            {/* Edit button */}
            <Button
              variant="outline"
              className="px-6 py-2 rounded-lg border-2"
              style={{ borderColor: '#00A859', color: '#00A859' }}
            >
              <Edit size={16} className="mr-2" />
              Editar Perfil
            </Button>
          </div>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 bg-white rounded-xl shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <stat.icon size={24} color={stat.color} />
              </div>
              <p className="text-2xl mb-1" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-xs text-gray-600 leading-tight">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="p-4 mb-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg mb-3" style={{ color: '#00A859' }}>
            Atividade Recente
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#00A859] rounded-full"></div>
              <span className="text-sm text-gray-600">
                Adicionou "Carnaval de Salvador" aos favoritos
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#FFD500] rounded-full"></div>
              <span className="text-sm text-gray-600">
                Criou um novo itinerário
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#00A859] rounded-full"></div>
              <span className="text-sm text-gray-600">
                Visitou "Festival de Inverno"
              </span>
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className={`w-full p-4 flex items-center space-x-3 text-left hover:bg-gray-50 transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <item.icon 
                size={20} 
                color={item.danger ? '#d4183d' : '#666'} 
              />
              <span className={item.danger ? 'text-red-600' : 'text-gray-700'}>
                {item.label}
              </span>
            </button>
          ))}
        </Card>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen="profile" 
        navigateToScreen={navigateToScreen} 
      />
    </div>
  );
}
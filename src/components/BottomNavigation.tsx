import { Home, Calendar, Heart, User } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavigationProps {
  currentScreen: Screen;
  navigateToScreen: (screen: Screen) => void;
}

export default function BottomNavigation({ currentScreen, navigateToScreen }: BottomNavigationProps) {
  const navItems = [
    { icon: Home, label: 'Home', screen: 'home' as Screen },
    { icon: Calendar, label: 'Itinerário', screen: 'itinerary' as Screen },
    { icon: Heart, label: 'Favoritos', screen: 'favorites' as Screen },
    { icon: User, label: 'Perfil', screen: 'profile' as Screen },
  ];

  return (
    <div className="h-15 bg-white border-t border-gray-200 flex items-center justify-around px-4">
      {navItems.map(({ icon: Icon, label, screen }) => {
        const isActive = currentScreen === screen;
        return (
          <button
            key={label}
            onClick={() => navigateToScreen(screen)}
            className="flex flex-col items-center justify-center p-2 transition-colors"
          >
            <Icon 
              size={24} 
              color={isActive ? '#00A859' : '#B0B0B0'}
              fill={isActive && label === 'Favoritos' ? '#00A859' : 'none'}
            />
            <span 
              className="text-xs mt-1"
              style={{ color: isActive ? '#00A859' : '#B0B0B0' }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
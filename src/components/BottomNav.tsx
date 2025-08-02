
import React from 'react';
import { Home, Search, ShoppingCart, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BottomNavProps {
  isLoggedIn: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ isLoggedIn, activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart' },
    { 
      id: isLoggedIn ? 'profile' : 'auth', 
      icon: isLoggedIn ? User : UserPlus, 
      label: isLoggedIn ? 'Profile' : 'Join' 
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'animate-pulse-glow' : ''}`} />
              <span className="text-xs">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

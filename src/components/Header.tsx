
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, LogOut, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  isLoggedIn: boolean;
  onToggleMenu: () => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onToggleMenu, cartItemCount }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full border-b glass">
      <div className="container flex h-16 items-center">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2"
          onClick={onToggleMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <div className="flex items-center space-x-2 mr-4">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-display font-bold text-xl gradient-text hidden sm:block">
            Lumakara
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-sm mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-none focus:bg-secondary/80 transition-colors"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-2">
          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount > 9 ? '9+' : cartItemCount}
              </span>
            )}
          </Button>

          {/* User Profile */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          {/* Login/Logout */}
          {isLoggedIn ? (
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon">
              <LogIn className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

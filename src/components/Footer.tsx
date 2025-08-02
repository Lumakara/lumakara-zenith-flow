
import React from 'react';
import { Github, Twitter, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/20 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-display font-bold text-xl gradient-text">
                Lumakara
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium digital products and experiences crafted with Japanese attention to detail.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Settings */}
          <div className="space-y-4">
            <h3 className="font-semibold">Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Globe className="h-4 w-4" />
                <select className="bg-transparent border-none text-muted-foreground">
                  <option value="en">🇬🇧 English</option>
                  <option value="ja">🇯🇵 Japanese</option>
                </select>
              </div>
              <div className="text-sm">
                <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Theme Settings
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Lumakara Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

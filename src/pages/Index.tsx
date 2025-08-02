
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import ProductCard from '@/components/ProductCard';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [cartItemCount, setCartItemCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sample products
  const featuredProducts = [
    {
      id: '1',
      name: 'Digital Art Collection - Neon Dreams',
      price: 2500,
      originalPrice: 3200,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 124,
      category: 'Digital Art',
      isNew: true,
      isFavorite: false
    },
    {
      id: '2',
      name: 'Premium UI Component Library',
      price: 4800,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      category: 'Development',
      isNew: false,
      isFavorite: true
    },
    {
      id: '3',
      name: 'Japanese Typography Pack',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      category: 'Typography',
      isNew: false,
      isFavorite: false
    },
    {
      id: '4',
      name: 'Minimalist Icon Collection',
      price: 1200,
      originalPrice: 1600,
      image: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 203,
      category: 'Icons',
      isNew: true,
      isFavorite: false
    }
  ];

  const handleAddToCart = (productId: string) => {
    setCartItemCount(prev => prev + 1);
    console.log('Added to cart:', productId);
  };

  const handleToggleFavorite = (productId: string) => {
    console.log('Toggled favorite:', productId);
  };

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      
      <Header 
        isLoggedIn={isLoggedIn} 
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        cartItemCount={cartItemCount}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Discover <span className="gradient-text">Premium</span>
                <br />
                Digital Products
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Curated collection of high-quality digital assets, tools, and experiences crafted with Japanese attention to detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="gradient-primary text-white border-none hover:scale-105 transition-transform">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="glass border-white/20 hover:bg-white/10">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                { label: 'Premium Products', value: '1000+' },
                { label: 'Happy Customers', value: '50K+' },
                { label: 'Average Rating', value: '4.9★' },
                { label: 'Countries Served', value: '120+' }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-1">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-20 right-10 w-48 h-48 gradient-secondary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Why Choose <span className="gradient-text">Lumakara</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience the perfect blend of Japanese craftsmanship and modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Handpicked products that meet the highest standards',
                gradient: 'gradient-primary'
              },
              {
                icon: Zap,
                title: 'Instant Download',
                description: 'Get your digital products immediately after purchase',
                gradient: 'gradient-secondary'
              },
              {
                icon: Shield,
                title: 'Secure & Safe',
                description: 'Advanced security measures protect your data',
                gradient: 'gradient-accent'
              },
              {
                icon: Globe,
                title: 'Global Support',
                description: 'Multi-language support and worldwide delivery',
                gradient: 'gradient-gold'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Featured <span className="gradient-text">Products</span>
              </h2>
              <p className="text-muted-foreground">
                Discover our most popular and trending digital products
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Stay Updated
              </h2>
              <p className="text-muted-foreground text-lg">
                Get notified about new products, exclusive offers, and design insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="gradient-primary text-white border-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <BottomNav
        isLoggedIn={isLoggedIn}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default Index;

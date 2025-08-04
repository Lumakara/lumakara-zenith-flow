import React, { useState, useEffect, useMemo } from 'react';
import { Search as SearchIcon, Filter, X, Star, Heart, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

// Mock products data
const mockProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1247,
    category: 'Electronics',
    brand: 'AudioTech',
    image: '/placeholder.svg',
    inStock: true,
    tags: ['wireless', 'premium', 'noise-canceling']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 892,
    category: 'Wearables',
    brand: 'FitPro',
    image: '/placeholder.svg',
    inStock: true,
    tags: ['fitness', 'smart', 'health']
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    price: 799.99,
    originalPrice: 899.99,
    rating: 4.9,
    reviews: 534,
    category: 'Photography',
    brand: 'LensMaster',
    image: '/placeholder.svg',
    inStock: false,
    tags: ['professional', 'photography', 'zoom']
  },
  {
    id: '4',
    name: 'Gaming Mechanical Keyboard',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 2156,
    category: 'Gaming',
    brand: 'GamePro',
    image: '/placeholder.svg',
    inStock: true,
    tags: ['gaming', 'mechanical', 'rgb']
  },
  {
    id: '5',
    name: 'Portable Bluetooth Speaker',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 743,
    category: 'Audio',
    brand: 'SoundWave',
    image: '/placeholder.svg',
    inStock: true,
    tags: ['portable', 'bluetooth', 'waterproof']
  },
  {
    id: '6',
    name: 'Smart Home Hub',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.4,
    reviews: 612,
    category: 'Smart Home',
    brand: 'HomeTech',
    image: '/placeholder.svg',
    inStock: true,
    tags: ['smart-home', 'automation', 'voice-control']
  }
];

const categories = ['All', 'Electronics', 'Wearables', 'Photography', 'Gaming', 'Audio', 'Smart Home'];
const brands = ['All', 'AudioTech', 'FitPro', 'LensMaster', 'GamePro', 'SoundWave', 'HomeTech'];
const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('search');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Handler functions for ProductCard
  const handleAddToCart = (productId: string) => {
    console.log('Adding to cart:', productId);
    // Implement cart functionality
  };

  const handleToggleFavorite = (productId: string) => {
    console.log('Toggling favorite:', productId);
    // Implement favorite functionality
  };

  const handleToggleMenu = () => {
    console.log('Toggle menu');
    // Implement menu toggle functionality
  };

  // Auto-suggestions based on search query
  useEffect(() => {
    if (searchQuery.length > 1) {
      const allTags = mockProducts.flatMap(product => product.tags);
      const productNames = mockProducts.map(product => product.name.toLowerCase());
      const filtered = [...new Set([...allTags, ...productNames])]
        .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrand, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedBrand('All');
    setPriceRange([0, 1000]);
    setSortBy('relevance');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Brand</h3>
        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
          <SelectTrigger>
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            {brands.map(brand => (
              <SelectItem key={brand} value={brand}>{brand}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isLoggedIn={isLoggedIn} 
        onToggleMenu={handleToggleMenu}
        cartItemCount={0}
      />
      
      <main className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        {/* Search Header */}
        <div className="mb-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Discover Products
            </h1>
            <p className="text-muted-foreground font-inter">
              Find exactly what you're looking for with our advanced search
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search products, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg glass"
                onFocus={() => setShowSuggestions(suggestions.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
            </div>

            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 glass border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors border-b border-border/20 last:border-b-0"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center space-x-2">
                      <SearchIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center space-x-4 flex-wrap">
            {/* Mobile Filter Button */}
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Active Filters */}
            {selectedCategory !== 'All' && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>{selectedCategory}</span>
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setSelectedCategory('All')}
                />
              </Badge>
            )}
            {selectedBrand !== 'All' && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>{selectedBrand}</span>
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setSelectedBrand('All')}
                />
              </Badge>
            )}
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-80">
            <div className="glass p-6 rounded-lg sticky top-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Filters</h2>
              <FilterContent />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
                {searchQuery && (
                  <span> for "{searchQuery}"</span>
                )}
              </p>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="glass p-8 rounded-lg inline-block">
                  <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav 
        isLoggedIn={isLoggedIn} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
};

export default Search;

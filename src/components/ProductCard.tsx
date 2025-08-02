
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isFavorite?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  onToggleFavorite: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onToggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1">
            {product.isNew && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-full glass opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                product.isFavorite ? 'text-red-500' : 'text-white hover:text-red-500'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(product.id);
              }}
            >
              <Heart className={`h-4 w-4 ${product.isFavorite ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3">
            <Button
              className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product.id);
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category}
          </div>
          
          <h3 className="font-semibold line-clamp-2 text-sm leading-tight">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">
              ¥{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ¥{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart } from "@/contexts/CartContext";
import businessCard from "@/assets/business-card.jpg";
import canvas from "@/assets/canvas.jpg";

const products = [
  { id: 1, name: "Standard Business Cards", category: "Cards", price: 499, rating: 4.8, reviews: 128, image: businessCard },
  { id: 2, name: "Premium Business Cards", category: "Cards", price: 799, rating: 4.9, reviews: 95, image: businessCard },
  { id: 3, name: "Luxury Business Cards", category: "Cards", price: 1099, rating: 5.0, reviews: 67, image: businessCard },
  { id: 4, name: "Small Photo Canvas", category: "Canvas", price: 899, rating: 4.7, reviews: 143, image: canvas },
  { id: 5, name: "Medium Photo Canvas", category: "Canvas", price: 1299, rating: 4.8, reviews: 201, image: canvas },
  { id: 6, name: "Large Photo Canvas", category: "Canvas", price: 1799, rating: 4.9, reviews: 156, image: canvas },
  { id: 7, name: "Extra Large Canvas", category: "Canvas", price: 2499, rating: 4.8, reviews: 89, image: canvas },
];

const Products = () => {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const { addToCart, addToWishlist } = useCart();

  let filteredProducts = products.filter(
    (product) => category === "All" || product.category === category
  );

  // Apply sorting
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else {
    // popularity - sort by reviews
    filteredProducts = [...filteredProducts].sort((a, b) => b.reviews - a.reviews);
  }

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      finish: "Matte",
      image: product.image,
    });
  };

  const handleWishlist = (product: any) => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-white/90 text-xl">Browse our complete range of customizable products</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
            <div className="flex gap-4">
              <button
                onClick={() => setCategory("All")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category === "All" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setCategory("Cards")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category === "Cards" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Business Cards
              </button>
              <button
                onClick={() => setCategory("Canvas")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category === "Canvas" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Photo Canvas
              </button>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-hover transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-secondary/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                      onClick={() => handleWishlist(product)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-accent text-accent"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <p className="text-xl font-bold text-accent">₹{product.price}</p>
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0 gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link 
                      to={`/customize/${product.id}`}
                      state={{ product }}
                    >
                      Customize
                    </Link>
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-cta"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

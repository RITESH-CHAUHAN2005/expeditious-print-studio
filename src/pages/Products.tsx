import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import businessCard from "@/assets/business-card.jpg";
import mug from "@/assets/mug.jpg";
import tshirt from "@/assets/tshirt.jpg";
import canvas from "@/assets/canvas.jpg";
import stickers from "@/assets/stickers.jpg";
import marketing from "@/assets/marketing.jpg";

const products = [
  { id: 1, name: "Standard Business Cards", category: "cards", price: 499, rating: 4.8, reviews: 128, image: businessCard },
  { id: 2, name: "Premium Business Cards", category: "cards", price: 799, rating: 4.9, reviews: 95, image: businessCard },
  { id: 3, name: "Custom Photo Canvas", category: "canvas", price: 1299, rating: 4.7, reviews: 67, image: canvas },
  { id: 4, name: "Ceramic Coffee Mug", category: "mugs", price: 349, rating: 4.6, reviews: 143, image: mug },
  { id: 5, name: "Custom T-Shirt", category: "tshirts", price: 599, rating: 4.8, reviews: 201, image: tshirt },
  { id: 6, name: "Vinyl Sticker Pack", category: "stickers", price: 199, rating: 4.9, reviews: 312, image: stickers },
  { id: 7, name: "Marketing Flyers", category: "marketing", price: 899, rating: 4.7, reviews: 78, image: marketing },
  { id: 8, name: "Brochure Set", category: "marketing", price: 1199, rating: 4.8, reviews: 56, image: marketing },
];

const Products = () => {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredProducts = products.filter(
    (product) => category === "all" || product.category === category
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
            <p className="text-muted-foreground text-lg">Browse our complete range of customizable products</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="cards">Business Cards</SelectItem>
                <SelectItem value="canvas">Photo Canvas</SelectItem>
                <SelectItem value="mugs">Custom Mugs</SelectItem>
                <SelectItem value="tshirts">T-Shirts</SelectItem>
                <SelectItem value="stickers">Stickers</SelectItem>
                <SelectItem value="marketing">Marketing Materials</SelectItem>
              </SelectContent>
            </Select>

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
                    <Link to={`/customize/${product.id}`}>Customize</Link>
                  </Button>
                  <Button className="flex-1 bg-gradient-cta">
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

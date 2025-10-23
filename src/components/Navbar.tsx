import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { cart, wishlist } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Expeditious Digital Prints" className="h-10" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 mx-auto">
            <Link to="/" className="text-base font-semibold hover:text-accent transition-colors px-4">
              Home
            </Link>
            <Link to="/products?category=cards" className="text-base font-semibold hover:text-accent transition-colors px-4">
              Cards
            </Link>
            <Link to="/products?category=canvas" className="text-base font-semibold hover:text-accent transition-colors px-4">
              Photo Canvas
            </Link>
            <Link to="/about" className="text-base font-semibold hover:text-accent transition-colors px-4">
              About Us
            </Link>
            <Link to="/contact" className="text-base font-semibold hover:text-accent transition-colors px-4">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {wishlist.length}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cart.length}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

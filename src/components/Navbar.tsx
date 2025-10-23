import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { cart, wishlist } = useCart();

  const cardTypes = [
    { name: "Standard Visiting Cards", path: "/products/standard-cards" },
    { name: "Classic Visiting Cards", path: "/products/classic-cards" },
    { name: "Rounded Corner Visiting Cards", path: "/products/rounded-cards" },
    { name: "Square Visiting Cards", path: "/products/square-cards" },
    { name: "Leaf Visiting Cards", path: "/products/leaf-cards", isNew: true },
    { name: "Oval Visiting Cards", path: "/products/oval-cards", isNew: true },
    { name: "Circle Visiting Cards", path: "/products/circle-cards", isNew: true },
    { name: "QR Code Visiting Cards", path: "/products/qr-cards", category: "Digital" },
    { name: "NFC Visiting Cards", path: "/products/nfc-cards", category: "Digital" },
  ];

  const canvasTypes = [
    { name: "Standard Photo Canvas", path: "/products/standard-canvas" },
    { name: "Premium Photo Canvas", path: "/products/premium-canvas" },
    { name: "Gallery Wrapped Canvas", path: "/products/gallery-canvas" },
    { name: "Framed Photo Canvas", path: "/products/framed-canvas" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Expeditious Digital Prints" className="h-10" />
          </Link>

          <nav className="hidden md:flex items-center gap-1 mx-auto">
            <Link to="/" className="text-lg font-semibold hover:text-accent transition-colors px-5 py-2">
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-semibold px-5">
                    Cards
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-background z-50">
                      <div className="mb-4">
                        <h4 className="font-bold text-foreground mb-2 text-sm">Visiting Cards</h4>
                        <ul className="space-y-1">
                          {cardTypes.filter(c => !c.category).map((card) => (
                            <li key={card.path}>
                              <Link
                                to={card.path}
                                className="block px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground text-sm"
                              >
                                {card.name}
                                {card.isNew && (
                                  <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">NEW</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2 text-sm">Digital Visiting Cards</h4>
                        <ul className="space-y-1">
                          {cardTypes.filter(c => c.category === "Digital").map((card) => (
                            <li key={card.path}>
                              <Link
                                to={card.path}
                                className="block px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground text-sm"
                              >
                                {card.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-semibold px-5">
                    Photo Canvas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 bg-background z-50">
                      <ul className="space-y-1">
                        {canvasTypes.map((canvas) => (
                          <li key={canvas.path}>
                            <Link
                              to={canvas.path}
                              className="block px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground text-sm"
                            >
                              {canvas.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/about" className="text-lg font-semibold hover:text-accent transition-colors px-5 py-2">
              About Us
            </Link>
            <Link to="/contact" className="text-lg font-semibold hover:text-accent transition-colors px-5 py-2">
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

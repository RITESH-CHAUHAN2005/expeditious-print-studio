import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const Footer = () => {
  const handleNewsletterSubmit = () => {
    toast.success("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Expeditious Digital Prints" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90 mb-4">
              Print Fast. Print Smart.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary-foreground hover:text-accent"
                asChild
              >
                <a href="https://www.instagram.com/expeditiousdigitalprints/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/products?category=cards" className="hover:text-accent transition-colors">Business Cards</Link></li>
              <li><Link to="/products?category=canvas" className="hover:text-accent transition-colors">Photo Canvas</Link></li>
              <li><Link to="/products?category=mugs" className="hover:text-accent transition-colors">Custom Mugs</Link></li>
              <li><Link to="/products?category=tshirts" className="hover:text-accent transition-colors">T-Shirts</Link></li>
              <li><Link to="/products?category=stickers" className="hover:text-accent transition-colors">Stickers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-accent transition-colors">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm opacity-90 mb-4">
              Get exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="icon" onClick={handleNewsletterSubmit}>
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Expeditious Digital Prints. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

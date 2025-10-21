import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import businessCard from "@/assets/business-card.jpg";
import mug from "@/assets/mug.jpg";

const cartItems = [
  { id: 1, name: "Standard Business Cards", price: 499, quantity: 2, image: businessCard },
  { id: 2, name: "Ceramic Coffee Mug", price: 349, quantity: 1, image: mug },
];

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shopping Cart</h1>
            <p className="text-muted-foreground text-lg">Review your items before checkout</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-6 border-b last:border-0 last:pb-0">
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary/30">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                          <p className="text-accent font-bold mb-3">₹{item.price}</p>
                          
                          <div className="flex items-center gap-2">
                            <div className="flex items-center border rounded-lg">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Minus className="h-3 w-3" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                className="w-12 h-8 text-center border-0"
                                readOnly
                              />
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">₹{shipping}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-bold text-lg text-accent">₹{total}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-cta mb-3" size="lg" asChild>
                    <Link to="/checkout">
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Proceed to Checkout
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

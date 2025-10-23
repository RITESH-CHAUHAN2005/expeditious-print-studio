import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Upload, Palette } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import businessCardImg from "@/assets/business-card.jpg";

const SquareCards = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(100);

  const quantities = [100, 250, 500, 1000];
  const prices = {
    100: 399,
    250: 799,
    500: 1299,
    1000: 2099,
  };

  const features = [
    "Premium 400 GSM card stock",
    "Unique square shape (2.5\" x 2.5\")",
    "Bold and memorable design",
    "Full color printing (both sides)",
    "Luxury matte or glossy finish",
    "Perfect for creative professionals",
  ];

  const handleAddToCart = () => {
    addToCart({
      id: Date.now(),
      name: `Square Visiting Cards (${selectedQuantity} cards)`,
      price: prices[selectedQuantity as keyof typeof prices],
      finish: "Standard",
      image: businessCardImg,
    });
  };

  const handleCustomize = () => {
    navigate("/customize", {
      state: {
        productName: "Square Visiting Cards",
        productImage: businessCardImg,
        basePrice: prices[selectedQuantity as keyof typeof prices],
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <img
              src={businessCardImg}
              alt="Square Visiting Cards"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Square Visiting Cards
              </h1>
              <p className="text-muted-foreground text-lg">
                Bold square-shaped cards that make a unique and memorable impression
              </p>
            </div>

            <Card className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Select Quantity
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {quantities.map((qty) => (
                    <Button
                      key={qty}
                      variant={selectedQuantity === qty ? "default" : "outline"}
                      onClick={() => setSelectedQuantity(qty)}
                      className="h-auto py-4 flex flex-col items-center gap-1"
                    >
                      <span className="text-lg font-bold">{qty} Cards</span>
                      <span className="text-sm">₹{prices[qty as keyof typeof prices]}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    ₹{prices[selectedQuantity as keyof typeof prices]}
                  </span>
                  <span className="text-muted-foreground">for {selectedQuantity} cards</span>
                </div>

                <div className="space-y-3">
                  <Button onClick={handleCustomize} className="w-full" size="lg">
                    <Palette className="mr-2 h-5 w-5" />
                    Customize Your Design
                  </Button>
                  <Button
                    onClick={handleAddToCart}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <h3 className="font-bold text-foreground text-lg">Features & Benefits</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SquareCards;

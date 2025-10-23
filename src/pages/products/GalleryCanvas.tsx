import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Palette } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import canvasImg from "@/assets/canvas.jpg";

const GalleryCanvas = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("16x24");

  const sizes = ["16x24", "20x30", "24x36", "30x40"];
  const prices = {
    "16x24": 1799,
    "20x30": 2699,
    "24x36": 3999,
    "30x40": 5499,
  };

  const features = [
    "Gallery-wrapped edges",
    "Image extends around sides",
    "No frame needed",
    "1.5 inch premium pine stretcher bars",
    "Professional museum quality",
    "Ready to display immediately",
  ];

  const handleAddToCart = () => {
    addToCart({
      id: Date.now(),
      name: `Gallery Wrapped Canvas (${selectedSize}")`,
      price: prices[selectedSize as keyof typeof prices],
      finish: "Gallery Wrapped",
      image: canvasImg,
    });
  };

  const handleCustomize = () => {
    navigate("/customize", {
      state: {
        productName: "Gallery Wrapped Canvas",
        productImage: canvasImg,
        basePrice: prices[selectedSize as keyof typeof prices],
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
              src={canvasImg}
              alt="Gallery Wrapped Canvas"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Gallery Wrapped Canvas
              </h1>
              <p className="text-muted-foreground text-lg">
                Professional gallery-style canvas with image extending around edges for a frameless look
              </p>
            </div>

            <Card className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Select Size (inches)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="h-auto py-4 flex flex-col items-center gap-1"
                    >
                      <span className="text-lg font-bold">{size}</span>
                      <span className="text-sm">₹{prices[size as keyof typeof prices]}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    ₹{prices[selectedSize as keyof typeof prices]}
                  </span>
                  <span className="text-muted-foreground">for {selectedSize}" canvas</span>
                </div>

                <div className="space-y-3">
                  <Button onClick={handleCustomize} className="w-full" size="lg">
                    <Palette className="mr-2 h-5 w-5" />
                    Upload Your Photo
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

export default GalleryCanvas;

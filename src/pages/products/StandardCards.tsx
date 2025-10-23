import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Upload } from "lucide-react";
import businessCard from "@/assets/business-card.jpg";

const StandardCards = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(100);

  const pricePerUnit = {
    100: 200,
    200: 180,
    300: 160,
    400: 150,
    500: 140,
  };

  const calculateTotal = () => {
    return quantity * (pricePerUnit[quantity as keyof typeof pricePerUnit] || 200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <img 
                    src={businessCard} 
                    alt="Standard Visiting Cards" 
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold mb-2 text-foreground">Standard Visiting Cards</h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">(286)</span>
              </div>

              <p className="text-muted-foreground mb-6">
                Personalized cards with a professional look.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">4000+ design options available</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">Standard glossy or matte paper included</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">Same Day Delivery available on select pin codes in Mumbai, Bangalore, Hyderabad & Kolkata</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">Cash on Delivery (COD) is currently not available for Same Day delivery</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2 text-foreground">100 starting at ₹{pricePerUnit[100]}.00</p>
                <p className="text-sm text-muted-foreground">Free shipping to 28 October to 110001</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-foreground">Quantity</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pricePerUnit).map(([qty, price]) => (
                    <Button
                      key={qty}
                      variant={quantity === parseInt(qty) ? "default" : "outline"}
                      onClick={() => setQuantity(parseInt(qty))}
                      className="justify-between"
                    >
                      <span>{qty}</span>
                      <span>₹{parseInt(qty) * price}.00</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => navigate('/customize/standard-cards')}
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Design
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Have a design? Upload and edit it
                </p>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-4 text-foreground">Design Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dimension shown in the design page includes bleed area (safety area)</li>
                  <li>• We recommend a minimum 1mm bleed area for optimal results</li>
                  <li>• Stretch your design up to the bleed area to avoid white borders</li>
                  <li>• Choose bold fonts size 10 and above when using white text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StandardCards;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Upload } from "lucide-react";
import canvas from "@/assets/canvas.jpg";

const StandardCanvas = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState("12x18");

  const pricePerSize = {
    "12x18": 1200,
    "16x24": 1800,
    "20x30": 2500,
    "24x36": 3500,
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
                    src={canvas} 
                    alt="Standard Photo Canvas" 
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold mb-2 text-foreground">Standard Photo Canvas</h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">(156)</span>
              </div>

              <p className="text-muted-foreground mb-6">
                Transform your photos into stunning canvas prints.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">High-quality canvas material</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">Vibrant, fade-resistant inks</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">Ready to hang with mounting hardware</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <p className="text-muted-foreground">Professional finish with gallery-quality results</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2 text-foreground">Starting at ₹{pricePerSize["12x18"]}.00</p>
                <p className="text-sm text-muted-foreground">Free shipping on orders above ₹2000</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-foreground">Size (inches)</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pricePerSize).map(([sizeOption, price]) => (
                    <Button
                      key={sizeOption}
                      variant={size === sizeOption ? "default" : "outline"}
                      onClick={() => setSize(sizeOption)}
                      className="justify-between"
                    >
                      <span>{sizeOption}</span>
                      <span>₹{price}.00</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => navigate('/customize/standard-canvas')}
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Your Photo
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Upload your photo to create your canvas
                </p>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-4 text-foreground">Photo Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use high-resolution images (at least 300 DPI)</li>
                  <li>• Accepted formats: JPG, PNG, PDF</li>
                  <li>• Ensure your photo has good lighting and clarity</li>
                  <li>• Avoid heavily compressed or pixelated images</li>
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

export default StandardCanvas;

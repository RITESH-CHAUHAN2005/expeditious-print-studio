import { useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload, Save, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Customize = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(100);
  const [finish, setFinish] = useState("Matte");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addToCart } = useCart();

  const basePrice = product?.price || 499;
  const finishMultiplier = finish === "Premium" ? 1.6 : finish === "Glossy" ? 1.2 : 1;
  const total = Math.round(basePrice * finishMultiplier * (quantity / 100));

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        toast.success("Image uploaded!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    if (!uploadedImage) {
      toast.error("Please upload a design first");
      return;
    }
    addToCart({
      id: Date.now(),
      name: product?.name || "Custom Design",
      price: total,
      finish,
      image: uploadedImage,
    });
    toast.success("Added to cart!");
  };

  const handleSaveDesign = () => {
    if (!uploadedImage) {
      toast.error("Please upload a design first");
      return;
    }
    toast.success("Design saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Customize Your Design</h1>
            <p className="text-white/90 text-lg">{product?.name || "Create unique designs with our easy-to-use editor"}</p>
            {product && (
              <div className="mt-4 text-white/80">
                <p className="text-sm">Category: {product.category}</p>
                <p className="text-sm">Base Price: ₹{product.price}</p>
                <p className="text-sm">Rating: {product.rating} ⭐ ({product.reviews} reviews)</p>
              </div>
            )}
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/10] bg-gradient-to-br from-secondary/20 to-muted flex items-center justify-center border-b">
                    <div className="text-center p-8 w-full">
                      <h3 className="font-semibold mb-4 text-lg">Preview Area</h3>
                      <div className="max-w-lg mx-auto bg-background rounded-lg shadow-glow p-8 min-h-[300px] flex items-center justify-center">
                        {uploadedImage ? (
                          <img 
                            src={uploadedImage} 
                            alt="Uploaded design" 
                            className="max-w-full max-h-full object-contain rounded"
                          />
                        ) : (
                          <p className="text-muted-foreground">Upload your design to see preview</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-4">Upload Your Design</h3>
                    <input 
                      ref={fileInputRef} 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileUpload} 
                      className="hidden" 
                    />
                    <div 
                      className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary hover:bg-secondary/10 transition-all cursor-pointer" 
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <p className="font-semibold text-lg mb-2">Click to Upload Your Design</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: JPG, PNG, PDF
                      </p>
                      {uploadedImage && (
                        <p className="text-sm text-green-600 mt-4 font-medium">✓ Design uploaded successfully!</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Product Options</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="finish">Finish</Label>
                      <select id="finish" value={finish} onChange={(e) => setFinish(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2">
                        <option>Matte</option>
                        <option>Glossy</option>
                        <option>Premium</option>
                      </select>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Total Price</span>
                        <span className="text-2xl font-bold text-accent">₹{total}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <Button className="w-full bg-gradient-cta" size="lg" onClick={handleAddToCart}>
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" className="w-full" size="lg" onClick={handleSaveDesign}>
                          <Save className="mr-2 h-5 w-5" />
                          Save Design
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our design experts are here to assist you
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Contact Support</Link>
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

export default Customize;

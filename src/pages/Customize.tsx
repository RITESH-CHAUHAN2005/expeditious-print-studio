import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Type, Image as ImageIcon, Shapes, Save, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Customize = () => {
  const [selectedProduct, setSelectedProduct] = useState("business-card");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Customize Your Design</h1>
            <p className="text-muted-foreground text-lg">Create unique designs with our easy-to-use editor</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/10] bg-gradient-hero flex items-center justify-center border-b">
                    <div className="text-center p-8">
                      <div className="w-64 h-40 bg-background rounded-lg shadow-hover mx-auto mb-4 flex items-center justify-center">
                        <p className="text-muted-foreground">Preview Area</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Your design will appear here</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Tabs defaultValue="upload" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="upload">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </TabsTrigger>
                        <TabsTrigger value="text">
                          <Type className="h-4 w-4 mr-2" />
                          Text
                        </TabsTrigger>
                        <TabsTrigger value="images">
                          <ImageIcon className="h-4 w-4 mr-2" />
                          Images
                        </TabsTrigger>
                        <TabsTrigger value="shapes">
                          <Shapes className="h-4 w-4 mr-2" />
                          Shapes
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="upload" className="space-y-4">
                        <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="font-semibold mb-2">Upload Your Design</p>
                          <p className="text-sm text-muted-foreground">
                            Drag and drop or click to browse
                          </p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="text" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="text-content">Add Text</Label>
                          <Textarea
                            id="text-content"
                            placeholder="Enter your text here..."
                            className="min-h-24"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="font-size">Font Size</Label>
                            <Input id="font-size" type="number" defaultValue="16" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="text-color">Color</Label>
                            <Input id="text-color" type="color" defaultValue="#003366" />
                          </div>
                        </div>
                        <Button className="w-full">Add Text</Button>
                      </TabsContent>
                      
                      <TabsContent value="images" className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                              key={i}
                              className="aspect-square rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer flex items-center justify-center"
                            >
                              <ImageIcon className="h-8 w-8 text-muted-foreground" />
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="shapes" className="space-y-4">
                        <div className="grid grid-cols-4 gap-4">
                          {["Rectangle", "Circle", "Triangle", "Star"].map((shape) => (
                            <Button key={shape} variant="outline" className="h-20">
                              {shape}
                            </Button>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
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
                      <Input id="quantity" type="number" defaultValue="100" min="1" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="finish">Finish</Label>
                      <select
                        id="finish"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option>Matte</option>
                        <option>Glossy</option>
                        <option>Premium</option>
                      </select>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Total Price</span>
                        <span className="text-2xl font-bold text-accent">₹499</span>
                      </div>
                      
                      <div className="space-y-2">
                        <Button className="w-full bg-gradient-cta" size="lg">
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" className="w-full" size="lg">
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
                  <Button variant="outline" className="w-full">Contact Support</Button>
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

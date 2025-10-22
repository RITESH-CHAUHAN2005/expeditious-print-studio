import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Mail } from "lucide-react";

const ThankYou = () => {
  const orderNumber = `ORD${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 shadow-glow">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>

                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Your order has been placed successfully
                </p>

                <div className="bg-secondary/30 rounded-lg p-6 mb-8">
                  <p className="text-sm text-muted-foreground mb-2">Order Number</p>
                  <p className="text-2xl font-bold text-accent">{orderNumber}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Order Confirmation</h3>
                      <p className="text-sm text-muted-foreground">
                        Check your email for order details
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Package className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Processing</h3>
                      <p className="text-sm text-muted-foreground">
                        We'll start processing your order
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Truck className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Delivery</h3>
                      <p className="text-sm text-muted-foreground">
                        Estimated 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full bg-gradient-cta">
                    <Link to="/dashboard">View Order Status</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Need help with your order?
                  </p>
                  <a 
                    href="https://wa.me/919718008087" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-semibold"
                  >
                    Contact Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;

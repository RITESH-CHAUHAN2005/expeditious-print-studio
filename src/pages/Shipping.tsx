import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Shipping Information</h1>
            <p className="text-white/90 text-xl">Fast and reliable delivery across India</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Truck className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Standard Delivery</h3>
                      <p className="text-muted-foreground mb-2">3-5 business days</p>
                      <p className="text-sm text-muted-foreground">
                        Free shipping on orders above ₹1,000
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Express Delivery</h3>
                      <p className="text-muted-foreground mb-2">1-2 business days</p>
                      <p className="text-sm text-muted-foreground">
                        Additional ₹200 shipping charges
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Package className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Same Day Printing</h3>
                      <p className="text-muted-foreground mb-2">Available for urgent orders</p>
                      <p className="text-sm text-muted-foreground">
                        Order before 12 PM for same-day printing
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Pan India Delivery</h3>
                      <p className="text-muted-foreground mb-2">All major cities covered</p>
                      <p className="text-sm text-muted-foreground">
                        Reliable courier partners across India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-card to-muted border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Shipping Policy</h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
                    <p>Orders are typically processed within 24-48 hours after proof approval. Custom designs may take an additional 1-2 days for production.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tracking Information</h3>
                    <p>You'll receive a tracking number via email and SMS once your order is dispatched. Track your order anytime through our website or the courier's portal.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery Areas</h3>
                    <p>We currently deliver to all serviceable pin codes across India. Remote areas may take additional 1-2 days for delivery.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Shipping Charges</h3>
                    <p>Standard shipping: ₹99 (Free on orders above ₹1,000)</p>
                    <p>Express shipping: ₹299</p>
                    <p>International shipping: Currently not available</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Failed Delivery Attempts</h3>
                    <p>In case of failed delivery attempts, the courier will make 2-3 attempts. If unsuccessful, the order will be returned to us. You may be charged for re-shipment.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
                    <p>For any shipping-related queries, please contact our support team at +91 97180 08087 or email us at support@expeditiousdigitalprints.com</p>
                  </div>
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

export default Shipping;

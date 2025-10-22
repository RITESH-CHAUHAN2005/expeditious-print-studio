import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Returns & Refunds</h1>
            <p className="text-white/90 text-xl">Your satisfaction is our priority</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-2 border-green-200 dark:border-green-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-100">100% Satisfaction Guarantee</h2>
                    <p className="text-green-800 dark:text-green-200">
                      We stand behind the quality of our work. If you're not completely satisfied with your order, 
                      we'll make it right with a reprint or full refund.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-hover transition-all border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Eligible for Returns</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Printing errors or defects</li>
                        <li>• Wrong product delivered</li>
                        <li>• Damaged during shipping</li>
                        <li>• Color mismatch from approved proof</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-hover transition-all border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                      <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Not Eligible for Returns</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Customer design errors</li>
                        <li>• Change of mind</li>
                        <li>• Customized/personalized items</li>
                        <li>• Items used or altered</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Return Process</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Contact Us Within 7 Days</h3>
                      <p className="text-muted-foreground">
                        Reach out to our customer support team within 7 days of receiving your order. 
                        Contact us at +91 97180 08087 or email support@expeditiousdigitalprints.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Provide Order Details</h3>
                      <p className="text-muted-foreground">
                        Share your order number, photos of the issue, and a brief description of the problem. 
                        This helps us process your return quickly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Get Approval</h3>
                      <p className="text-muted-foreground">
                        Our team will review your request within 24 hours and approve the return if it meets our policy criteria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ship Back or Get Reprint</h3>
                      <p className="text-muted-foreground">
                        If approved, we'll either send a replacement at no extra cost or process a full refund. 
                        Return shipping costs are covered by us for manufacturing defects.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-muted border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Refund Policy</h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Refund Timeline</h3>
                      <p>Approved refunds are processed within 5-7 business days. The amount will be credited to your original payment method.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Partial Refunds</h3>
                      <p>If only a portion of your order has issues, we'll process a partial refund for the affected items only.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Reprint Option</h3>
                      <p>We prefer to reprint your order to ensure you get exactly what you need. Reprints are typically faster than refunds.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center bg-secondary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our customer support team is here to assist you with returns and refunds.
              </p>
              <a 
                href="https://wa.me/919718008087" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-cta text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;

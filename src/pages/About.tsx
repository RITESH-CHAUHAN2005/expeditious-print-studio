import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your trusted partner in professional digital printing and customization
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Expeditious Digital Prints was founded with a simple mission: to make professional printing 
              accessible, fast, and affordable for everyone. Whether you're a startup building your brand 
              or an individual looking to customize unique gifts, we've got you covered.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With state-of-the-art printing technology and a team passionate about quality, we deliver 
              exceptional products that exceed expectations. From business cards that make lasting impressions 
              to personalized merchandise that tells your story, we transform your ideas into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Professional printing standards with attention to every detail
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Quick production and express shipping options available
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Dedicated team ready to help with your printing needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our top priority, always
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground text-lg">
              <p>
                ✓ <strong>Cutting-edge Technology:</strong> Latest printing equipment for superior results
              </p>
              <p>
                ✓ <strong>Eco-Friendly Materials:</strong> Sustainable printing options available
              </p>
              <p>
                ✓ <strong>Custom Solutions:</strong> Tailored services for your unique requirements
              </p>
              <p>
                ✓ <strong>Competitive Pricing:</strong> Best value without compromising on quality
              </p>
              <p>
                ✓ <strong>Satisfaction Guarantee:</strong> We stand behind every product we create
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

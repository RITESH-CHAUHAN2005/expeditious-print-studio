import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Shield, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import businessCard from "@/assets/business-card.jpg";
import mug from "@/assets/mug.jpg";
import tshirt from "@/assets/tshirt.jpg";
import canvas from "@/assets/canvas.jpg";
import stickers from "@/assets/stickers.jpg";
import marketing from "@/assets/marketing.jpg";

const categories = [
  { name: "Business Cards", image: businessCard, link: "/products?category=cards" },
  { name: "Custom Mugs", image: mug, link: "/products?category=mugs" },
  { name: "T-Shirts", image: tshirt, link: "/products?category=tshirts" },
  { name: "Photo Canvas", image: canvas, link: "/products?category=canvas" },
  { name: "Stickers", image: stickers, link: "/products?category=stickers" },
  { name: "Marketing Materials", image: marketing, link: "/products?category=marketing" },
];

const features = [
  { icon: Truck, title: "Fast Delivery", description: "Express shipping available" },
  { icon: Shield, title: "Premium Quality", description: "Professional printing standards" },
  { icon: Headphones, title: "24/7 Support", description: "Always here to help" },
];

const testimonials = [
  { name: "Sarah Johnson", rating: 5, text: "Amazing quality! My business cards look so professional." },
  { name: "Mike Chen", rating: 5, text: "Fast turnaround and excellent customer service." },
  { name: "Emily Davis", rating: 5, text: "The custom mugs turned out perfect. Highly recommend!" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Print Fast. Print Smart.
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Professional digital printing and customization for all your business needs. 
                  From business cards to custom merchandise.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-cta hover:shadow-hover transition-all" asChild>
                    <Link to="/products">Explore Products</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/customize">Start Customizing</Link>
                  </Button>
                </div>
              </div>
              <div className="animate-scale-in">
                <img src={heroBanner} alt="Digital Printing" className="rounded-2xl shadow-hover w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Products
            </h2>
            <p className="text-muted-foreground text-lg">
              High-quality printing solutions for every need
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group"
              >
                <Card className="overflow-hidden border-2 hover:border-accent hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Create custom designs and bring your ideas to life
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/customize">Start Customizing Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

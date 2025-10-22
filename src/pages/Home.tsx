import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Shield, Headphones, Award, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroBanner from "@/assets/hero-banner.jpg";
import businessCard from "@/assets/business-card.jpg";
import canvas from "@/assets/canvas.jpg";
import customer1 from "@/assets/customer1.jpg";
import customer2 from "@/assets/customer2.jpg";
import customer3 from "@/assets/customer3.jpg";

const categories = [
  { 
    name: "Business Cards", 
    image: businessCard, 
    link: "/products?category=cards",
    description: "Premium quality business cards that make lasting impressions"
  },
  { 
    name: "Photo Canvas", 
    image: canvas, 
    link: "/products?category=canvas",
    description: "Transform your photos into stunning wall art"
  },
];

const features = [
  { icon: Truck, title: "Fast Delivery", description: "Express shipping available" },
  { icon: Shield, title: "Premium Quality", description: "Professional printing standards" },
  { icon: Headphones, title: "24/7 Support", description: "Always here to help" },
];

const instagramVideos = [
  "DLp60zUhl6m",
  "DMRyh8bBitE",
  "DMBOUirBNtV",
  "DPjg46PgUM6",
  "DNU51gUBz4y",
  "DOEbT-3gfIw",
  "DM0ERfiBMGZ",
  "DMhOOXqB3oy",
  "DLiDaiPBHn8"
];

const testimonials = [
  { 
    name: "Priya Sharma", 
    rating: 5, 
    text: "Outstanding quality! The business cards are premium and delivered on time. Highly professional service.",
    image: customer1,
    role: "Business Owner"
  },
  { 
    name: "Rahul Mehta", 
    rating: 5, 
    text: "Impressed with the canvas print quality and the team's attention to detail. Will definitely order again!",
    image: customer2,
    role: "Creative Designer"
  },
  { 
    name: "Anjali Kapoor", 
    rating: 5, 
    text: "Fast turnaround, excellent customer support, and the final product exceeded my expectations. Absolutely recommend!",
    image: customer3,
    role: "Marketing Manager"
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroBanner} 
              alt="Digital Printing Background" 
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-20 md:py-32 flex items-center min-h-[90vh]">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Print Fast. <span className="text-transparent bg-clip-text bg-gradient-cta">Print Smart.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed font-medium">
                Professional digital printing and customization for all your business needs. 
                From premium business cards to stunning canvas prints and custom merchandise, 
                we bring your vision to life with exceptional quality and lightning-fast delivery.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8 text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="font-medium">Premium Quality Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="font-medium">Same Day Printing Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="font-medium">Competitive Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="font-medium">Expert Design Support</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-cta hover:shadow-glow transition-all text-lg px-8 py-6 font-bold" asChild>
                  <Link to="/products">Explore Products</Link>
                </Button>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/customize">Start Customizing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-card mb-4">
              Explore Our Products
            </h2>
            <p className="text-muted-foreground text-xl">
              High-quality printing solutions for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group"
              >
                <Card className="overflow-hidden border-2 hover:border-primary hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-card to-muted h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8 text-center flex-1 flex flex-col justify-center">
                      <h3 className="font-bold text-2xl group-hover:text-primary transition-colors mb-2">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Instagram Showcase Section */}
        <section className="bg-gradient-to-br from-muted to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-card mb-4">
                Our Recent Work
              </h2>
              <p className="text-muted-foreground text-xl">
                See what we've created for our customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {instagramVideos.map((videoId, index) => (
                <div key={index} className="group">
                  <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 border-2 hover:border-primary">
                    <CardContent className="p-0">
                      <div className="aspect-[9/16] relative bg-black">
                        <iframe
                          src={`https://www.instagram.com/p/${videoId}/embed`}
                          className="w-full h-full"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency={true}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Company Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-card mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Expeditious Digital Prints is your trusted partner for premium printing solutions. 
                With state-of-the-art technology and a passion for perfection, we transform your ideas 
                into vibrant, high-quality prints.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether it's professional business cards that make lasting impressions or stunning 
                photo canvases that turn your memories into art, we deliver exceptional quality with 
                unmatched speed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-cta flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Industry-Leading Quality</h3>
                    <p className="text-muted-foreground">Premium materials and advanced printing technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-cta flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Lightning-Fast Turnaround</h3>
                    <p className="text-muted-foreground">Same-day printing available for urgent orders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-cta flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Full Customization</h3>
                    <p className="text-muted-foreground">Easy-to-use tools or expert design assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="rounded-xl shadow-hover overflow-hidden">
                <iframe
                  src="https://www.instagram.com/p/DLp60zUhl6m/embed"
                  className="w-full h-64"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                />
              </div>
              <div className="rounded-xl shadow-hover overflow-hidden mt-8">
                <iframe
                  src="https://www.instagram.com/p/DMRyh8bBitE/embed"
                  className="w-full h-64"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Expeditious Digital Prints?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional customer service to deliver 
              printing solutions that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-hover transition-all">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Professional-grade materials and state-of-the-art printing technology
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hover transition-all">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
                <p className="text-muted-foreground text-sm">
                  Same-day printing available with express delivery options
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hover transition-all">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Custom Designs</h3>
                <p className="text-muted-foreground text-sm">
                  Easy-to-use design tools or get help from our expert designers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hover transition-all">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground text-sm">
                  100% satisfaction guarantee or we'll make it right
                </p>
              </CardContent>
            </Card>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create custom designs and bring your ideas to life with our easy-to-use tools
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold shadow-glow" asChild>
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

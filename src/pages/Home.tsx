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
  { name: "Business Cards", image: businessCard, link: "/products?category=cards" },
  { name: "Photo Canvas", image: canvas, link: "/products?category=canvas" },
];

const features = [
  { icon: Truck, title: "Fast Delivery", description: "Express shipping available" },
  { icon: Shield, title: "Premium Quality", description: "Professional printing standards" },
  { icon: Headphones, title: "24/7 Support", description: "Always here to help" },
];

const instagramPosts = [
  { url: "https://www.instagram.com/p/DLp60zUhl6m/", title: "Premium Business Cards" },
  { url: "https://www.instagram.com/reel/DMRyh8bBitE/", title: "Custom Canvas Prints" },
  { url: "https://www.instagram.com/reel/DMBOUirBNtV/", title: "Professional Cards" },
  { url: "https://www.instagram.com/reel/DPjg46PgUM6/", title: "Creative Designs" },
  { url: "https://www.instagram.com/reel/DNU51gUBz4y/", title: "Quality Printing" },
  { url: "https://www.instagram.com/reel/DM2Yy6xBJZB/", title: "Custom Products" },
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
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Print Fast. Print Smart.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                  Professional digital printing and customization for all your business needs. 
                  From premium business cards to stunning canvas prints, we bring your vision to life 
                  with exceptional quality and lightning-fast delivery.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-8">
                  ✓ Premium Quality Materials &nbsp; ✓ Same Day Printing Available &nbsp; ✓ Competitive Pricing &nbsp; ✓ Expert Design Support
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group"
              >
                <Card className="overflow-hidden border-2 hover:border-accent hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">Premium quality printing</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Instagram Showcase Section */}
        <section className="container mx-auto px-4 py-16 bg-secondary/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Recent Work
            </h2>
            <p className="text-muted-foreground text-lg">
              See what we've created for our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="relative z-10 text-white text-center p-6">
                        <Sparkles className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                        <p className="text-sm opacity-90">View on Instagram</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
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

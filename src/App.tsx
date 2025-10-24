import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Customize from "./pages/Customize";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import StandardCards from "./pages/products/StandardCards";
import ClassicCards from "./pages/products/ClassicCards";
import RoundedCards from "./pages/products/RoundedCards";
import SquareCards from "./pages/products/SquareCards";
import LeafCards from "./pages/products/LeafCards";
import OvalCards from "./pages/products/OvalCards";
import CircleCards from "./pages/products/CircleCards";
import QRCards from "./pages/products/QRCards";
import NFCCards from "./pages/products/NFCCards";
import StandardCanvas from "./pages/products/StandardCanvas";
import PremiumCanvas from "./pages/products/PremiumCanvas";
import GalleryCanvas from "./pages/products/GalleryCanvas";
import FramedCanvas from "./pages/products/FramedCanvas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/customize/:id" element={<Customize />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/products/standard-cards" element={<StandardCards />} />
            <Route path="/products/classic-cards" element={<ClassicCards />} />
            <Route path="/products/rounded-cards" element={<RoundedCards />} />
            <Route path="/products/square-cards" element={<SquareCards />} />
            <Route path="/products/leaf-cards" element={<LeafCards />} />
            <Route path="/products/oval-cards" element={<OvalCards />} />
            <Route path="/products/circle-cards" element={<CircleCards />} />
            <Route path="/products/qr-cards" element={<QRCards />} />
            <Route path="/products/nfc-cards" element={<NFCCards />} />
            <Route path="/products/standard-canvas" element={<StandardCanvas />} />
            <Route path="/products/premium-canvas" element={<PremiumCanvas />} />
            <Route path="/products/gallery-canvas" element={<GalleryCanvas />} />
            <Route path="/products/framed-canvas" element={<FramedCanvas />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

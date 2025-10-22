import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Heart, User, FileText } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Dashboard = () => {
  const { wishlist } = useCart();

  const orders = [
    { id: "ORD123456", date: "2025-01-15", status: "Processing", total: 1299, items: 2 },
    { id: "ORD123455", date: "2025-01-10", status: "Delivered", total: 799, items: 1 },
    { id: "ORD123454", date: "2025-01-05", status: "Shipped", total: 2499, items: 3 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">My Dashboard</h1>
            <p className="text-white/90 text-xl">Manage your orders and account</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="orders" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders">
                  <Package className="h-4 w-4 mr-2" />
                  Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="saved">
                  <FileText className="h-4 w-4 mr-2" />
                  Saved Designs
                </TabsTrigger>
                <TabsTrigger value="profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">My Orders</h2>
                {orders.map((order) => (
                  <Card key={order.id} className="hover:shadow-hover transition-all">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-bold text-lg">{order.id}</p>
                          <p className="text-sm text-muted-foreground">Ordered on {order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered" 
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" 
                            : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-muted-foreground">{order.items} items</p>
                          <p className="font-bold text-lg text-accent">₹{order.total}</p>
                        </div>
                        <button className="text-primary hover:underline font-semibold">
                          View Details
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="wishlist" className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
                {wishlist.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Your wishlist is empty</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((item) => (
                      <Card key={item.id} className="hover:shadow-hover transition-all">
                        <CardContent className="p-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full aspect-square object-cover rounded-lg mb-4"
                          />
                          <h3 className="font-semibold mb-2">{item.name}</h3>
                          <p className="text-accent font-bold">₹{item.price}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="saved" className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Saved Designs</h2>
                <Card>
                  <CardContent className="p-12 text-center">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">No saved designs yet</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold text-lg">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">john.doe@example.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-semibold">+91 98765 43210</p>
                      </div>
                      <button className="text-primary hover:underline font-semibold">
                        Edit Profile
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

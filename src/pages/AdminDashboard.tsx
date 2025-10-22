import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Users, FileText, TrendingUp, LogOut } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  const stats = [
    { label: "Total Orders", value: "1,234", icon: Package, color: "text-blue-600" },
    { label: "Total Users", value: "567", icon: Users, color: "text-green-600" },
    { label: "Active Designs", value: "89", icon: FileText, color: "text-purple-600" },
    { label: "Revenue", value: "₹1,23,456", icon: TrendingUp, color: "text-orange-600" },
  ];

  const recentOrders = [
    { id: "ORD123456", customer: "Priya Sharma", amount: 1299, status: "Processing" },
    { id: "ORD123455", customer: "Rahul Mehta", amount: 799, status: "Delivered" },
    { id: "ORD123454", customer: "Anjali Kapoor", amount: 2499, status: "Shipped" },
    { id: "ORD123453", customer: "Vikram Singh", amount: 599, status: "Processing" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-10" />
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-hover transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div>
                        <p className="font-bold">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent">₹{order.amount}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Delivered" 
                            ? "bg-green-100 text-green-700" 
                            : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Product Management</h2>
                <p className="text-muted-foreground">Manage your products, pricing, and inventory here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">User Management</h2>
                <p className="text-muted-foreground">View and manage user accounts and permissions.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Analytics & Reports</h2>
                <p className="text-muted-foreground">View sales trends, revenue reports, and customer insights.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;

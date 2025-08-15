import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductDetails } from "../Utils/Resource";
import { UseAuthStore } from "../store/UseAuthStore";

function Dashboard() {
  const navigate = useNavigate();
  const products = ProductDetails();
  const { auth } = UseAuthStore();

  useEffect(()=>{
    if(auth?.role === 'user'){
      navigate('/')
    }
  },[auth])

  const stats = [
    { title: "Orders Placed", value: "1,245", desc: "↑ 12% from last month" },
    {
      title: "Products in Stock",
      value: products.length,
      desc: "All categories",
    },
    {
      title: "Total Purchases",
      value: "$15,480",
      desc: "↑ 8% from last month",
    },
    { title: "Income", value: "$8,240", desc: "Net profit this month" },
  ];

  const recentOrders = products.slice(0, 5).map((p, i) => ({
    id: i + 1,
    product: p.name,
    customer: [
      "John Doe",
      "Emma Brown",
      "Liam Smith",
      "Sophia Taylor",
      "James Wilson",
    ][i],
    price: `$${p.price.toFixed(2)}`,
    status: ["Shipped", "Pending", "Delivered", "Cancelled", "Processing"][i],
    image: p.imageUrl,
  }));

  return (
    <div className="p-6 space-y-6 bg-base-200 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat bg-base-100 shadow-xl rounded-xl border border-base-300"
          >
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-desc">{stat.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-base-100 shadow-xl rounded-xl border border-base-300 p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={order.image} alt={order.product} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.product}</div>
                        <div className="text-sm opacity-50">
                          Order #{order.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{order.customer}</td>
                  <td>{order.price}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === "Shipped"
                          ? "badge-info"
                          : order.status === "Pending"
                          ? "badge-warning"
                          : order.status === "Delivered"
                          ? "badge-success"
                          : order.status === "Cancelled"
                          ? "badge-error"
                          : "badge-neutral"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import {
  FaUsers,
  FaBox,
  FaClipboardList,
  FaStore,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminSidebar from "./adminSidebar";

const AdminPage = () => {
  const stats = [
    { title: "Revenue", value: "$319.94" },
    { title: "Total Orders", value: "4", link: "orders" },
    { title: "Total Products", value: "40", link: "products" },
  ];

  const orders = [
    {
      id: "67540ced337612b361a0ed0",
      user: "Admin User",
      totalPrice: "$199.96",
      status: "Processing",
    },
    {
      id: "67540d3ca67b4a70e434e092",
      user: "Admin User",
      totalPrice: "$40",
      status: "Processing",
    },
    {
      id: "675bf2c6ca77bd83eefd7a18",
      user: "Admin User",
      totalPrice: "$39.99",
      status: "Processing",
    },
    {
      id: "675c240b988827304bd5cc1",
      user: "Admin User",
      totalPrice: "$39.99",
      status: "Processing",
    },
    {
      id: "675c240b988827304bd5cc2",
      user: "Admin User",
      totalPrice: "$39.99",
      status: "Processing",
    },
    {
      id: "675c240b988827304bd5cc3",
      user: "Admin User",
      totalPrice: "$39.99",
      status: "Processing",
    },
    {
      id: "675c240b988827304bd5cc4",
      user: "Admin User",
      totalPrice: "$39.99",
      status: "Processing",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/*mobile toggle button*/}
      <div className="z-20 flex p-4 text-white bg-gray-900 md:hidden">
        <button>
          <FaBars size={24} />
        </button>
      </div>
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <h2 className="mb-6 text-2xl font-bold">Admin Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
              {stat.link && (
                <Link
                  to={`/admin/${stat.link}`}
                  className="mt-2 text-sm text-blue-500"
                >
                  {stat.link}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="p-6 overflow-x-auto bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-bold">Recent Orders</h3>
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.user}</td>
                  <td className="px-4 py-2">{order.totalPrice}</td>
                  <td className="px-4 py-2 text-gray-500">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

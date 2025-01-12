import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
         
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Key Metrics Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-gray-600">Total Sales</h2>
              <p className="text-3xl font-bold text-gray-800">$45,230</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-gray-600">Orders</h2>
              <p className="text-3xl font-bold text-gray-800">1,205</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-gray-600">Users</h2>
              <p className="text-3xl font-bold text-gray-800">2,320</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-gray-600">Products</h2>
              <p className="text-3xl font-bold text-gray-800">345</p>
            </div>
          </section>

          {/* Recent Orders Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">#12345</td>
                    <td className="px-4 py-3">John Doe</td>
                    <td className="px-4 py-3">$320</td>
                    <td className="px-4 py-3 text-green-500">Completed</td>
                    <td className="px-4 py-3">Jan 8, 2025</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">#12346</td>
                    <td className="px-4 py-3">Jane Smith</td>
                    <td className="px-4 py-3">$150</td>
                    <td className="px-4 py-3 text-yellow-500">Pending</td>
                    <td className="px-4 py-3">Jan 8, 2025</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">#12347</td>
                    <td className="px-4 py-3">Alice Brown</td>
                    <td className="px-4 py-3">$220</td>
                    <td className="px-4 py-3 text-red-500">Canceled</td>
                    <td className="px-4 py-3">Jan 7, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Top Products Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Top Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product 1"
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Product 1</h3>
                  <p className="text-gray-600">Sold: 120</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product 2"
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Product 2</h3>
                  <p className="text-gray-600">Sold: 90</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product 3"
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Product 3</h3>
                  <p className="text-gray-600">Sold: 75</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

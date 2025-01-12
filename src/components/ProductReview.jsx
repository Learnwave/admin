import React, { useState, useEffect } from "react";

const ProductReview = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch("/api/products/pending");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Approve product
  const approveProduct = async (productId) => {
    try {
      await fetch(`/api/products/${productId}/approve`, { method: "POST" });
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      alert("Product approved successfully!");
    } catch (error) {
      console.error("Error approving product:", error);
    }
  };

  // Reject product
  const rejectProduct = async (productId) => {
    try {
      await fetch(`/api/products/${productId}/reject`, { method: "POST" });
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      alert("Product rejected successfully!");
    } catch (error) {
      console.error("Error rejecting product:", error);
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1>Review User Uploaded Products</h1>
      {products.length === 0 ? (
        <p>No products to review.</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    onClick={() => approveProduct(product.id)}
                    style={{ marginRight: "10px", backgroundColor: "green", color: "white" }}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectProduct(product.id)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductReview;

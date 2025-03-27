import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="p-10">
      <h2 className="text-2xl mb-4 text-green-600 font-bold">Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg p-6 flex flex-col items-center bg-white hover:shadow-xl transition-shadow duration-300 hover:border-green-500"
            style={{ transition: "border-color 0.3s ease" }}
          >
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="w-full h-80 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-4 text-green-700">{product.name}</h3>
            <p className="text-green-600 font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

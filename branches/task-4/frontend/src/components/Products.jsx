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
      <h2 className="text-2xl mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 flex flex-col items-center">
            {/* Fix image height to be the same for all */}
            <img 
              src={`http://localhost:5000${product.image}`} 
              alt={product.name} 
              className="w-full h-80 object-cover" // Ensures all images have the same height
            />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

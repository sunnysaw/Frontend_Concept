import React from "react";
import { products } from "../data/product.js";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ addToCart }) {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="w-full flex flex-col items-center py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 max-w-6xl">
        {products.map((values, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-sm text-gray-500 font-medium mb-1">
              ID: {values.id}
            </h3>

            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              {values.name}
            </h1>

            <h2 className="text-lg text-indigo-600 font-bold">
              ₹{values.price}
            </h2>

            <div className="mt-6">
              <button
                onClick={() => handleAddToCart(values)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-200"
              >
                <FaShoppingCart className="inline-block mr-2" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;

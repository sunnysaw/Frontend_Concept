import React from "react";
import CartItem from "./CartItem.jsx";

function Cart({ cart, onUpdateQuantity, onRemoveItem, totalPrice }) {
  if (cart.length === 0) {
    return (
      <div className="w-full flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your Cart is Empty
        </h2>
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}

      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <h3 className="text-xl font-semibold">
          Total: ₹{totalPrice.toFixed(2)}
        </h3>

        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

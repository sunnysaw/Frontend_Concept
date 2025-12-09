import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4">
      <div>
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <p className="text-indigo-600 font-medium">₹{item.price}</p>

        <div className="flex items-center gap-3 mt-2">
          <button
            className="p-2 bg-gray-200 rounded"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            <FaMinus />
          </button>

          <span className="font-medium">{item.quantity}</span>

          <button
            className="p-2 bg-gray-200 rounded"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <button
        className="p-3 bg-red-500 text-white rounded-lg"
        onClick={() => onRemoveItem(item.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;

// src/Components/Counter.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../Features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Counter: <span className="text-blue-600">{count}</span>
        </h1>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            +1 Increase
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            -1 Decrease
          </button>

          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            +5 Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

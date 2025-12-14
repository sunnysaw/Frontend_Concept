import React from "react";
import CounterHoc from "../Utils/CounterHoc";
import NameHoc from "../Utils/NameHoc";

const HoverCounter = ({ count,  incrementCount }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        onMouseOver={incrementCount}
        className="
          px-6 py-2
          bg-indigo-600 text-white font-semibold
          rounded-lg
          shadow-md
          hover:bg-indigo-700 hover:shadow-lg
          active:scale-95
          transition-all duration-200
        "
      >
        Increment
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-500">Current Count</p>
        <h1 className="text-4xl font-bold text-gray-800">{count}</h1>
        {/* <h1 className="text-4xl font-bold text-gray-800">{name = "muskan"}</h1> */}
      </div>
    </div>
  );
};

export default CounterHoc(HoverCounter);

// HoverCounter

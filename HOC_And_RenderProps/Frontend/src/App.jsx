import React from "react";
import StudentPage from "./Components/AccessRenderProps";
import ClickCounterHoc from "./Components/ClickCounterHoc";
import HoverCounterHoc from "./Components/HoverCounterHoc";
import { AnotherComponent } from "./Components/ClickCounterHoc";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* ---------------- RENDER PROPS SECTION ---------------- */}
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-4">
          Render Props
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <StudentPage />
        </div>
      </section>

      {/* ---------------- HOC SECTION ---------------- */}
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-emerald-500 pl-4">
          HOCs – Higher Order Components
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Hover Counter Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">
              Hover Counter
            </h2>
            <HoverCounterHoc />
          </div>

          {/* Click Counter Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Click Counter
            </h2>
            <ClickCounterHoc />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

import React from "react";
import RenderProps from "../Utils/RenderProps";

const StudentPage = () => {
  return (
    <div className="space-y-12 bg-gray-100 min-h-screen p-6">
      {/* ---------------- DEFAULT UI ---------------- */}
      <section>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Default Student UI
        </h1>

        {/* No children → default UI */}
        <RenderProps />
      </section>

      {/* ---------------- RENDER PROPS UI ---------------- */}
      <section>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Custom UI (Render Props)
        </h1>

        <RenderProps>
          {(students) => (
            <div className="grid gap-4 md:grid-cols-2">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="border border-indigo-200 bg-white rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-indigo-600">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {student.eductiona} • {student.age} years
                  </p>
                </div>
              ))}
            </div>
          )}
        </RenderProps>
      </section>
    </div>
  );
};

export default StudentPage;

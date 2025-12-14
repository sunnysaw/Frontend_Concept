import React from "react";

const RenderProps = ({ children }) => {
  const StudentList = [
    {
      name: "Sunny Gupta",
      age: 25,
      address: "Katari Hill",
      mobile_number: "8084401023",
      eductiona: "MCA",
    },
    {
      name: "Sunny Gupta",
      age: 25,
      address: "Katari Hill",
      mobile_number: "8084401023",
      eductiona: "MCA",
    },
  ];

  // Render-props UI (custom)
  if (typeof children === "function") {
    return children(StudentList);
  }

  // Default UI
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {StudentList.map((student, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600">
            {student.name}
          </h2>
          <p>Age: {student.age}</p>
          <p>Address: {student.address}</p>
          <p>Mobile: {student.mobile_number}</p>
          <p>Education: {student.eductiona}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderProps;

import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  email: string;
}

export default function StudentBox({ children }: { children: React.ReactNode }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: Student[]) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch students:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-blue-50 border-2 border-blue-500 rounded-2xl p-6 m-6 shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Student Box</h2>
      <div className="mb-4 text-gray-700">{children}</div>

      {loading ? (
        <p className="text-gray-500 italic">Loading students...</p>
      ) : (
        <ul className="list-none space-y-2">
          {students.map((student) => (
            <li
              key={student.id}
              className="bg-white p-3 rounded-md shadow-sm hover:bg-gray-50 transition"
            >
              <strong className="text-blue-600">{student.name}</strong>
              <span className="text-gray-600 block text-sm">
                {student.email}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

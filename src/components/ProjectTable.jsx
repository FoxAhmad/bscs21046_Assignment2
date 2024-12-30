import React from "react";

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
  },
  {
    id: 2,
    name: "Project Beta",
    status: "In Progress",
    startDate: "2023-02-15",
    endDate: "2023-12-15",
  },
  {
    id: 3,
    name: "Project Gamma",
    status: "Pending",
    startDate: "2023-03-01",
    endDate: "2024-01-01",
  },
  {
    id: 4,
    name: "Project Delta",
    status: "Completed",
    startDate: "2023-05-10",
    endDate: "2023-10-10",
  },
];

const ProjectTable = () => {
  return (
    <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-md p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-cyan-600 text-white text-left">
            <th className="py-3 px-4">Project Name</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Start Date</th>
            <th className="py-3 px-4">End Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="hover:bg-indigo-50 transition-all duration-200"
            >
              <td className="py-3 px-4 border-b">{project.name}</td>
              <td
                className={`py-3 px-4 border-b font-semibold ${
                  project.status === "Completed"
                    ? "text-green-600"
                    : project.status === "In Progress"
                    ? "text-blue-600"
                    : "text-yellow-600"
                }`}
              >
                {project.status}
              </td>
              <td className="py-3 px-4 border-b">{project.startDate}</td>
              <td className="py-3 px-4 border-b">{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;

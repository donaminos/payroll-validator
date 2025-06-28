import { Star, Filter } from "lucide-react";

const taskData = [
  {
    project: "Website Redesign",
    category: "UI/UX Design",
    client: "TechCorp Inc.",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    dueDate: "Sep 20, 2025",
    earnings: "$1,200",
    rating: 4.8,
  },
  {
    project: "Mobile App Development",
    category: "React Native",
    client: "StartupXYZ",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-800",
    dueDate: "Sep 25, 2025",
    earnings: "$2,500",
    rating: null,
  },
  {
    project: "Logo Design",
    category: "Graphic Design",
    client: "Creative Agency",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    dueDate: "Sep 18, 2025",
    earnings: "$450",
    rating: 5.0,
  },
];

export function TasksOverview() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xs">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Task Overview
          </h3>
          <p className="text-gray-500 text-sm">
            Manage and track your ongoing projects
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-xl">
            <Filter size={16} className="text-gray-400" />
            <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none font-medium">
              <option>Filter by Status</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-xl">
            <Filter size={16} className="text-gray-400" />
            <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none font-medium">
              <option>Filter by Earnings</option>
              <option>High to Low</option>
              <option>Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-600 uppercase tracking-wide text-xs">
                Project
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-600 uppercase tracking-wide text-xs">
                Client
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-600 uppercase tracking-wide text-xs">
                Status
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-600 uppercase tracking-wide text-xs">
                Due Date
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-600 uppercase tracking-wide text-xs">
                Earnings
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-600 uppercase tracking-wide text-xs">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {taskData.map((task, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-5 px-6">
                  <div className="font-semibold text-gray-900 mb-1">
                    {task.project}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {task.category}
                  </div>
                </td>
                <td className="py-5 px-6 text-gray-700 font-medium">
                  {task.client}
                </td>
                <td className="py-5 px-6">
                  <span
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full ${task.statusColor}`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="py-5 px-6 text-gray-600 font-medium">
                  {task.dueDate}
                </td>
                <td className="py-5 px-6 font-bold text-gray-900">
                  {task.earnings}
                </td>
                <td className="py-5 px-6">
                  {task.rating ? (
                    <div className="flex items-center space-x-2">
                      <Star size={16} className="text-amber-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">
                        {task.rating}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400 font-medium">
                      Pending
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

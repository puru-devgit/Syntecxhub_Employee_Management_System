import { motion } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function EmployeeTable({
  employees,
  searchTerm,
  setSearchTerm,
  departmentFilter,
  setDepartmentFilter,
  deleteEmployee,
  darkMode,
}) {
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All" ||
      emp.department === departmentFilter;

    return matchesSearch && matchesDepartment;
  });

  const departments = [
    "All",
    ...new Set(employees.map((emp) => emp.department)),
  ];

  return (
    <motion.div
      className={`mt-10 p-6 rounded-2xl shadow-xl transition duration-500 ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-6">
        <input
          type="text"
          placeholder="Search employee..."
          className={`border p-3 rounded-xl w-full lg:w-1/2 outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
              : "bg-white text-black"
          }`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className={`border p-3 rounded-xl outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white text-black"
          }`}
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead
            className={`${
              darkMode
                ? "bg-gray-700 text-white"
                : "bg-indigo-500 text-white"
            }`}
          >
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-left">Salary</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((emp) => (
              <tr
                key={emp._id}
                className={`border-b transition ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <td className="p-4">{emp.name}</td>

                <td className="p-4">{emp.email}</td>

                <td className="p-4">
                  {emp.role}
                </td>

                <td className="p-4 text-green-500 font-semibold">
                  ₹ {emp.salary}
                </td>

                <td className="p-4">
                  {emp.department}
                </td>

                <td className="p-4 flex justify-center gap-4">
                  <Link to={`/edit/${emp._id}`}>
                    <button className="text-blue-500 text-lg">
                      <FaEdit />
                    </button>
                  </Link>

                  <button
                    className="text-red-500 text-lg"
                    onClick={() => deleteEmployee(emp._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default EmployeeTable;
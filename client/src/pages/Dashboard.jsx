import EmployeeTable from "../components/EmployeeTable";
import Analytics from "../components/Analytics";
import StatsCards from "../components/StatsCards";

import { useEffect, useState } from "react";

import {
  FaTrash,
  FaEdit,
  FaPlus,
  FaMoon,
  FaSun,
  FaSearch,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import {
  getEmployees,
  deleteEmployee,
} from "../services/employeeService";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [departmentFilter, setDepartmentFilter] =
    useState("All");

  // FETCH EMPLOYEES
  useEffect(() => {
    fetchEmployees();
  }, []);

  // SAVE DARK MODE
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // FETCH EMPLOYEE FUNCTION
  const fetchEmployees = async () => {
    try {

      const data = await getEmployees();

      setEmployees(data);

    } catch (error) {

      console.log(error);

    }
  };

  // DELETE FUNCTION
  const handleDelete = async (id) => {

    try {

      await deleteEmployee(id);

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }
  };

  // LOGOUT FUNCTION
  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  // SEARCH FILTER
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div
      className={`min-h-screen p-6 transition duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* TOP BAR */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10">

        {/* LEFT SIDE */}
        <div>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Employee <br />
            Dashboard
          </motion.h1>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-wrap items-center gap-5">

          {/* SEARCH */}
          <div
            className={`flex items-center px-5 py-3 rounded-2xl shadow-xl border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >

            <FaSearch
              className={`mr-3 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            />

            <input
              type="text"
              placeholder="Search employee..."
              className={`outline-none bg-transparent ${
                darkMode
                  ? "text-white placeholder-gray-400"
                  : "text-black"
              }`}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl hover:scale-105 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* ADD EMPLOYEE BUTTON */}
          <Link
            to="/add"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-xl font-semibold"
          >

            <FaPlus />

            Add Employee

          </Link>

          {/* USER PROFILE */}
          <div
            className={`flex items-center gap-4 px-5 py-3 rounded-2xl shadow-xl ${
              darkMode
                ? "bg-gray-800"
                : "bg-white"
            }`}
          >

            {/* USER ICON */}
            <div className="text-4xl text-indigo-500">
              <FaUserCircle />
            </div>

            {/* USER INFO */}
            <div className="hidden md:block">

              <h3 className="font-bold text-lg">
                {user?.name || "Admin"}
              </h3>

              <p className="text-sm text-gray-400">
                Administrator
              </p>

            </div>

            {/* LOGOUT BUTTON */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition"
            >
              <FaSignOutAlt />
            </button>

          </div>

        </div>

      </div>

      {/* STATS CARDS */}
      <div className="mb-10">

        <StatsCards
          employees={employees}
          darkMode={darkMode}
        />

      </div>

      {/* MAIN TABLE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`overflow-x-auto rounded-3xl shadow-2xl border ${
          darkMode
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
        }`}
      >

        <table className="w-full">

          <thead
            className={`${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-indigo-600 text-white"
            }`}
          >

            <tr>

              <th className="p-5 text-left">
                Avatar
              </th>

              <th className="p-5 text-left">
                Name
              </th>

              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Role
              </th>

              <th className="p-5 text-left">
                Department
              </th>

              <th className="p-5 text-left">
                Salary
              </th>

              <th className="p-5 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredEmployees.map((emp) => (

              <motion.tr
                key={emp._id}
                whileHover={{ scale: 1.01 }}
                className={`border-b transition duration-300 ${
                  darkMode
                    ? "border-gray-800 hover:bg-gray-800"
                    : "hover:bg-gray-100"
                }`}
              >

                <td className="p-5">

                  <img
                    src={`https://ui-avatars.com/api/?name=${emp.name}`}
                    alt=""
                    className="w-14 h-14 rounded-full border-2 border-indigo-500"
                  />

                </td>

                <td className="p-5 font-semibold">
                  {emp.name}
                </td>

                <td className="p-5">
                  {emp.email}
                </td>

                <td className="p-5">
                  {emp.role}
                </td>

                <td className="p-5">
                  {emp.department}
                </td>

                <td className="p-5 text-green-400 font-bold">
                  ₹{emp.salary}
                </td>

                <td className="p-5">

                  <div className="flex justify-center gap-3">

                    <Link
                      to={`/edit/${emp._id}`}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 rounded-xl shadow-md transition"
                    >
                      <FaEdit />
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(emp._id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl shadow-md transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </motion.div>

      {/* ANALYTICS */}
      <Analytics employees={employees} />

      {/* EMPLOYEE TABLE */}
      <EmployeeTable
        employees={employees}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        departmentFilter={departmentFilter}
        setDepartmentFilter={setDepartmentFilter}
        deleteEmployee={handleDelete}
        darkMode={darkMode}
      />

    </div>
  );
}

export default Dashboard;
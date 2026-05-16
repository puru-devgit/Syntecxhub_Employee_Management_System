import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getEmployees,
  updateEmployee,
} from "../services/employeeService";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    salary: "",
    department: "",
  });

  // FETCH EMPLOYEE
  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const employees = await getEmployees();

      const employee = employees.find((emp) => emp._id === id);

      if (employee) {
        setFormData(employee);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEmployee(id, {
        ...formData,
        salary: Number(formData.salary),
      });

      toast.success("Employee Updated Successfully!");

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error("Failed To Update Employee");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Edit Employee
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Employee Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="role"
            placeholder="Employee Role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold">
            Update Employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
import { toast } from "react-toastify";
import { useState } from "react";
import { addEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    salary: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEmployee({
        ...formData,
        salary: Number(formData.salary),
      });

      toast.success("Employee Added Successfully!");

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error("Failed To Add Employee");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Add Employee
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            className="w-full p-3 border rounded-xl"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Employee Email"
            className="w-full p-3 border rounded-xl"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="role"
            placeholder="Employee Role"
            className="w-full p-3 border rounded-xl"
            value={formData.role}
            onChange={handleChange}
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            className="w-full p-3 border rounded-xl"
            value={formData.salary}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            className="w-full p-3 border rounded-xl"
            value={formData.department}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold"
          >
            Add Employee
          </button>

        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
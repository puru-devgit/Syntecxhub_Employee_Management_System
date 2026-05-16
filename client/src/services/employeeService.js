import axios from "axios";

const API = "http://localhost:5000/api/employees";

// GET ALL EMPLOYEES
export const getEmployees = async () => {
  const response = await axios.get(API);

  return response.data;
};

// ADD EMPLOYEE
export const addEmployee = async (employeeData) => {
  const response = await axios.post(API, employeeData);

  return response.data;
};

// DELETE EMPLOYEE
export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API}/${id}`);

  return response.data;
};

// UPDATE EMPLOYEE
export const updateEmployee = async (id, employeeData) => {
  const response = await axios.put(
    `${API}/${id}`,
    employeeData
  );

  return response.data;
};
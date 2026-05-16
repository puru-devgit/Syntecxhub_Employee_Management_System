const Employee = require("../models/Employee");

// GET ALL EMPLOYEES
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ADD EMPLOYEE
exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      salary: req.body.salary,
      department: req.body.department,
    });

    const savedEmployee = await employee.save();

    res.status(201).json(savedEmployee);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE EMPLOYEE
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.json({
      message: "Employee Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE EMPLOYEE
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
import { motion } from "framer-motion";

function StatsCards({ employees, darkMode }) {

  const totalEmployees = employees.length;

  const totalDepartments =
    new Set(
      employees.map((emp) => emp.department)
    ).size;

  const totalSalary = employees.reduce(
    (acc, emp) => acc + Number(emp.salary),
    0
  );

  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees,
    },

    {
      title: "Departments",
      value: totalDepartments,
    },

    {
      title: "Salary Expense",
      value: `₹ ${totalSalary.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      {cards.map((card, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`p-6 rounded-2xl shadow-xl transition duration-500 ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-white text-black"
          }`}
        >

          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            {card.title}
          </h2>

          <p className="text-3xl font-bold">
            {card.value}
          </p>

        </motion.div>
      ))}

    </div>
  );
}

export default StatsCards;
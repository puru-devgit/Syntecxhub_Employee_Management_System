import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics({ employees }) {

  const departmentData = [];

  const departmentMap = {};

  employees.forEach((emp) => {
    if (departmentMap[emp.department]) {
      departmentMap[emp.department] += 1;
    } else {
      departmentMap[emp.department] = 1;
    }
  });

  for (let dept in departmentMap) {
    departmentData.push({
      department: dept,
      employees: departmentMap[dept],
    });
  }

  const COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
    "#f59e0b",
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      {/* BAR CHART */}
      <div className="bg-white p-6 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-bold mb-6 text-indigo-600">
          Department Analytics
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentData}>
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="employees" fill="#6366f1" radius={[10,10,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div className="bg-white p-6 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-bold mb-6 text-pink-500">
          Employee Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={departmentData}
              dataKey="employees"
              nameKey="department"
              outerRadius={110}
              label
            >
              {departmentData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;
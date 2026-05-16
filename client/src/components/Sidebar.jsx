import { FaUsers, FaPlus, FaMoon } from "react-icons/fa";

const Sidebar = () => {

    return (

        <div className="w-64 min-h-screen bg-indigo-700 text-white p-6">

            <h1 className="text-3xl font-bold mb-10">
                EMS
            </h1>

            <ul className="space-y-6">

                <li className="flex items-center gap-3 hover:text-gray-200 cursor-pointer transition">
                    <FaUsers />
                    Dashboard
                </li>

                <li className="flex items-center gap-3 hover:text-gray-200 cursor-pointer transition">
                    <FaPlus />
                    Add Employee
                </li>

                <li className="flex items-center gap-3 hover:text-gray-200 cursor-pointer transition">
                    <FaMoon />
                    Dark Mode
                </li>

            </ul>

        </div>
    );
};

export default Sidebar;
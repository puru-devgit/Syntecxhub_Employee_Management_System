import { motion } from "framer-motion";

const DashboardCards = () => {

    const cards = [
        {
            title: "Total Employees",
            value: "120"
        },
        {
            title: "Departments",
            value: "8"
        },
        {
            title: "Active Projects",
            value: "25"
        }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            {cards.map((card, index) => (

                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                >

                    <h3 className="text-gray-500 text-lg">
                        {card.title}
                    </h3>

                    <p className="text-4xl font-bold text-indigo-600 mt-4">
                        {card.value}
                    </p>

                </motion.div>

            ))}

        </div>
    );
};

export default DashboardCards;
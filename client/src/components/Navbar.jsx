const Navbar = () => {

    return (

        <div className="bg-white shadow-md p-5 flex justify-between items-center rounded-xl">

            <h2 className="text-2xl font-bold text-gray-700">
                Dashboard
            </h2>

            <div className="flex items-center gap-4">

                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                />

            </div>

        </div>
    );
};

export default Navbar;
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // HANDLE REGISTER
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser({
        name,
        email,
        password,
      });

      toast.success("Registration Successful!");

      navigate("/login");

    } catch (error) {

      console.log(error);

      toast.error("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 shadow-2xl rounded-3xl p-8">

        {/* TITLE */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold text-white mb-2">
            Create Account 
          </h1>

          <p className="text-gray-400">
            Register for EMS Dashboard
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME */}
          <div>

            <label className="block text-gray-300 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
              required
            />

          </div>

          {/* EMAIL */}
          <div>

            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
              required
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
              required
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] transition text-white font-bold py-4 rounded-2xl shadow-xl"
          >
            Register
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-400 mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;
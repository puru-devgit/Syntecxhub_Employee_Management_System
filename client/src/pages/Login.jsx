import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // HANDLE LOGIN
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = await loginUser({
        email,
        password,
      });

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      toast.success("Login Successful!");

      window.location.href = "/";

    } catch (error) {

      console.log(error);

      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 shadow-2xl rounded-3xl p-8">

        {/* TITLE */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold text-white mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-400">
            Login to your EMS Dashboard
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

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
            Login
          </button>

        </form>

        {/* REGISTER LINK */}
        <p className="text-center text-gray-400 mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;
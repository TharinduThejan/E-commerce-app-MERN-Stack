import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginWall from "../assets/login.webp";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) return alert("Please fill all the fields");
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        { email, password }
      );
      localStorage.setItem("token", res.data.token);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.error ||
          "Login failed. Please check your credentials."
      );
    }
  };

  const handleGoogleLogin = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
  };

  return (
    <div className="flex h-screen">
      {/* Left: Form */}
      <div className="flex items-center justify-center w-full bg-white md:w-1/2">
        <div className="w-full max-w-md p-8 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-center">Rabbit</h2>
          <h1 className="mt-2 text-2xl font-bold text-center">Hey there! 👋</h1>
          <p className="mt-1 mb-6 text-center text-gray-600">
            Enter your email and password to login.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && (
              <div className="mt-2 text-sm text-center text-red-500">
                {error}
              </div>
            )}
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full gap-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-100"
          >
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={loginWall}
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;

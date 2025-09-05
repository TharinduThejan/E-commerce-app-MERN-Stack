import React from "react";
import loginWall from "../assets/login.webp";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="flex items-center justify-center w-full bg-white md:w-1/2">
        <div className="w-full max-w-md p-8 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-center">Rabbit</h2>
          <h1 className="mt-2 text-2xl font-bold text-center">Hey there! 👋</h1>
          <p className="mt-1 mb-6 text-center text-gray-600">
            Enter your username and password to Login.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white transition bg-black rounded-md hover:bg-gray-800"
            >
              Sign In
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={loginWall}
          alt="Login Visual"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

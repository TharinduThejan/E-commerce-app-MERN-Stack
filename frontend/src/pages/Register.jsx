import React from "react";
import loginWall from "../assets/login.webp";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (username === "" || email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    e.preventDefault();
    console.log({ email, username, password, confirmPassword });
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Register Form */}
      <div className="flex items-center justify-center w-full bg-white md:w-1/2">
        <div className="w-full max-w-md p-8 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-center">Rabbit</h2>
          <h1 className="mt-2 text-2xl font-bold text-center">
            Create an Account ✨
          </h1>
          <p className="mt-1 mb-6 text-center text-gray-600">
            Fill in your details to register.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={!email || !username || !password || !confirmPassword}
              className="w-full py-2 text-white transition bg-black rounded-md hover:bg-gray-800"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={loginWall}
          alt="Register Visual"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

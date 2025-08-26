// src/Pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import weddingImage from "../assets/images/wedding4.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        navigate("/home");
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${weddingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-md w-full space-y-8 z-10">
        <div className="transparent-effect rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <h2 className="mt-2 text-4xl font-extrabold text-white font-serif">
              Welcome Back
            </h2>
            <p className="mt-4 text-rose-100 text-lg">
              Sign in to continue planning your special day
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-5">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-5 py-4 border border-white/40 bg-white/5 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-5 py-4 border border-white/40 bg-white/5 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-rose-100 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-white hover:text-rose-200 transition-colors duration-300"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="text-center">
          <p className="text-white/80 text-xs">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      <style jsx>{`
        .transparent-effect {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
}

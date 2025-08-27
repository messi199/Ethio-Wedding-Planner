// src/Pages/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import weddingImage from "../assets/images/wedding4.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    type: "couple",
    business_name: "",
    service_category: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const registrationData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        type: formData.type,
      };

      if (formData.type === "vendor") {
        registrationData.business_name = formData.business_name;
        registrationData.service_category = formData.service_category;
      }

      const result = await register(registrationData);

      if (result.success) {
        navigate("/home");
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${weddingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/30"></div>

      <div className="max-w-md w-full space-y-8 z-10">
        <div className="transparent-effect rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <h2 className="mt-2 text-4xl font-extrabold text-white font-serif">
              Begin Your Forever
            </h2>
            <p className="mt-4 text-rose-100 text-lg">
              Create your account to start planning your special day
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-5">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-5 py-4 border border-white/40 bg-white/5 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

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
                  value={formData.email}
                  onChange={handleChange}
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
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password_confirmation" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-5 py-4 border border-white/40 bg-white/5 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"
                  placeholder="••••••••"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="type" className="sr-only">
                  Account Type
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="appearance-none rounded-lg relative block w-full px-5 py-4 border border-white/40 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="couple" className="text-gray-800">
                    Couple
                  </option>
                  <option value="guest" className="text-gray-800">
                    Guest
                  </option>
                  <option value="vendor" className="text-gray-800">
                    Vendor
                  </option>
                  <option value="relative" className="text-gray-800">
                    Relative
                  </option>
                </select>
              </div>

              {formData.type === "vendor" && (
                <>
                  <div className="mb-5">
                    <label htmlFor="business_name" className="sr-only">
                      Business Name
                    </label>
                    <input
                      id="business_name"
                      name="business_name"
                      type="text"
                      required
                      className="appearance-none rounded-lg relative block w-full px-5 py-4 border border-white/40 bg-white/5 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"
                      placeholder="Business Name"
                      value={formData.business_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="service_category" className="sr-only">
                      Service Category
                    </label>
                    <select
                      id="service_category"
                      name="service_category"
                      required
                      className="appearance-none rounded-lg relative block w-full px-5 py-4 border border-white/40 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 focus:z-10 sm:text-sm"
                      value={formData.service_category}
                      onChange={handleChange}
                    >
                      <option value="">Select Service Category</option>
                      <option value="photography" className="text-gray-800">
                        Photography
                      </option>
                      <option value="videography" className="text-gray-800">
                        Videography
                      </option>
                      <option value="catering" className="text-gray-800">
                        Catering
                      </option>
                      <option value="venue" className="text-gray-800">
                        Venue
                      </option>
                      <option value="makeup" className="text-gray-800">
                        Makeup
                      </option>
                      <option value="dressing" className="text-gray-800">
                        Dressing
                      </option>
                      <option value="decoration" className="text-gray-800">
                        Decoration
                      </option>
                      <option value="tent" className="text-gray-800">
                        Tent
                      </option>
                      <option value="transportation" className="text-gray-800">
                        Transportation
                      </option>
                      <option value="other" className="text-gray-800">
                        Other
                      </option>
                    </select>
                  </div>
                </>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Register"}
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-rose-100 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-white hover:text-rose-200 transition-colors duration-300"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="text-center">
          <p className="text-white/80 text-xs">
            By registering, you agree to our Terms of Service and Privacy Policy
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
        select {
          color: white;
        }
        select option {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Register;

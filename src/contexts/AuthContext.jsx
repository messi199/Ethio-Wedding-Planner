import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("weddingPlannerToken")
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_BASE = "http://localhost:8000/api";

  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${API_BASE}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser({
          ...userData,
          accountType: userData.type.toLowerCase(),
        });
      } else {
        logout();
      }
    } catch (error) {
      console.error("Failed to fetch user data", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { user: userData, token: authToken } = data;

        localStorage.setItem("weddingPlannerToken", authToken);
        localStorage.setItem("weddingPlannerUser", JSON.stringify(userData));

        setToken(authToken);
        setUser({
          ...userData,
          accountType: userData.type.toLowerCase(),
        });

        return { success: true };
      } else {
        return { success: false, error: data.message || "Login failed" };
      }
    } catch (error) {
      console.error("Login error", error);
      return { success: false, error: "Network error. Please try again." };
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        const { user: registeredUser, token: authToken } = data;

        // Store token in localStorage
        localStorage.setItem("weddingPlannerToken", authToken);
        localStorage.setItem(
          "weddingPlannerUser",
          JSON.stringify(registeredUser)
        );

        setToken(authToken);
        setUser({
          ...registeredUser,
          accountType: registeredUser.type.toLowerCase(),
        });

        return { success: true };
      } else {
        return {
          success: false,
          error:
            data.message ||
            Object.values(data.errors || {})
              .flat()
              .join(", "),
        };
      }
    } catch (error) {
      console.error("Registration error", error);
      return { success: false, error: "Network error. Please try again." };
    }
  };

  const logout = () => {
    // Call logout API if token exists
    if (token) {
      fetch(`${API_BASE}/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).catch((err) => console.error("Logout API error", err));
    }

    // Clear local storage and state
    localStorage.removeItem("weddingPlannerToken");
    localStorage.removeItem("weddingPlannerUser");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

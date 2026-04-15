import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Signup = ({ theme, toggleTheme }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-primary">
      <PageHeader showSearch={false} theme={theme} toggleTheme={toggleTheme} />
      <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-surface bg-surface p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold text-white">
                R
              </div>
              <h1 className="text-2xl font-semibold text-[var(--text-h)]">
                Sign up to Reddit
              </h1>
              <p className="mt-2 text-sm text-secondary">
                By continuing, you agree to our User Agreement and Privacy
                Policy.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-full border border-surface bg-surface-alt px-4 py-3 text-sm text-primary placeholder:text-secondary focus:border-[#0079d3] focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full rounded-full border border-surface bg-surface-alt px-4 py-3 text-sm text-primary placeholder:text-secondary focus:border-[#0079d3] focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-full border border-surface bg-surface-alt px-4 py-3 text-sm text-primary placeholder:text-secondary focus:border-[#0079d3] focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-full border border-surface bg-surface-alt px-4 py-3 text-sm text-primary placeholder:text-secondary focus:border-[#0079d3] focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#0079d3] py-3 text-sm font-semibold text-white transition hover:bg-[#1781f2]"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-secondary">
                Already have an account?{" "}
                <Link to="/login" className="text-[#0079d3] hover:underline">
                  Log in
                </Link>
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <div className="flex-1 border-t border-surface"></div>
              <span className="px-4 text-sm text-secondary">or</span>
              <div className="flex-1 border-t border-surface"></div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full rounded-full border border-surface bg-surface-alt py-3 text-sm font-semibold text-primary transition hover:bg-surface-strong">
                Continue with Google
              </button>
              <button className="w-full rounded-full border border-surface bg-surface-alt py-3 text-sm font-semibold text-primary transition hover:bg-surface-strong">
                Continue with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

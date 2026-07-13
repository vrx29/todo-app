import axios from "axios";
import { useState } from "react";
import authApi from "../api/axios";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle Input Changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Dedicated API / Action Calls
  const handleLogin = async () => {
    try {
      const res = await authApi.post("/login", {
        username: formData.username,
        password: formData.password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    console.log("Calling Sign Up API with:", formData);
    alert("Sign Up Form Submitted!");
  };

  // Form Submit Router
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  return (
    <>
      <main className="h-screen m-4 rounded-xl flex">
        {/* Left Container */}
        <div className="w-1/2 flex items-center justify-center rounded-l-xl">
          <div className="w-full max-w-md p-8">
            {/* Logo Icon */}
            <div className="flex justify-center mb-4">
              <div className="grid grid-cols-3 gap-1 bg-indigo-600/10 p-3 rounded-2xl">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              </div>
            </div>

            {/* Header Text */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {isLogin ? "Welcome Back" : "Create an Account"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                The best project management powered with AI
              </p>
            </div>

            {/* Tab Toggle (Log In / Sign Up) */}
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  !isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Conditional Name Field (Only on Sign Up) */}
              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="email"
                      placeholder="John@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    placeholder="John Doe"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                    required
                  />
                </div>
              </div>
              {/* Password Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    placeholder={isLogin ? "••••••••" : "Create a password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Requirements Check List (Only visible on Sign Up) */}
              {!isLogin && (
                <div className="space-y-1.5 pt-1 animate-fadeIn">
                  <div className="flex items-center text-xs text-gray-500 gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Must be at least 8 characters</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Must contain at least one number or symbol</span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 mt-2"
              >
                {isLogin ? "Sign In" : "Register"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative bg-white px-3 text-xs text-gray-400 uppercase tracking-wider">
                Continue With
              </span>
            </div>

            {/* Social Login Row */}
            <div className="flex justify-center gap-3">
              {["Google", "X", "LinkedIn", "Facebook", "Slack"].map(
                (platform) => (
                  <button
                    key={platform}
                    type="button"
                    className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-xs font-bold text-gray-700"
                    title={`Sign in with ${platform}`}
                  >
                    {platform[0]}
                  </button>
                ),
              )}
            </div>

            {/* Footer Links */}
            <div className="text-center mt-6 space-y-3">
              <p className="text-xs text-gray-500">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-indigo-600 font-medium hover:underline focus:outline-none"
                >
                  {isLogin ? "Sign Up" : "Log In"}
                </button>
              </p>
              <div className="text-[11px] text-gray-400 space-x-1">
                <a href="#terms" className="hover:underline">
                  Terms & Conditions
                </a>
                <span>·</span>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="w-1/2 bg-slate-50 relative flex items-center justify-center p-12 overflow-hidden border-l border-gray-100">
          {/* Subtle Background Geometric Grid Lines Lines */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Main Visual Content Box */}
          <div className="w-full max-w-lg space-y-10 relative z-10">
            {/* Title Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 leading-tight">
              YOUR CREATIVE HUB:{" "}
              <span className="font-normal text-gray-500">
                Capture, Organize, Create.
              </span>
            </h1>

            {/* Value Propositions Features Column */}
            <div className="space-y-8 pr-12">
              {/* Feature 1: AI Insights */}
              <div className="flex gap-5 items-start">
                <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl shrink-0 shadow-sm border border-orange-100/50">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 21l8.904-4.452M18 7.5V18a2 2 0 01-2 2H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0112.326-.456zM18 7.5a3 3 0 00-3-3H9.75a3 3 0 00-3 3M18 7.5a3 3 0 013 3v3.51c0 .413-.14.81-.395 1.137l-3.05 3.91M15 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                    Generate Insights with AI:
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Smart summarization and automated conceptual idea linking.
                  </p>
                </div>
              </div>

              {/* Feature 2: Folder Structuring */}
              <div className="flex gap-5 items-start">
                <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl shrink-0 shadow-sm border border-emerald-100/50">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 003 15v4.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 19.5V15a2.25 2.25 0 00-2.25-2.25m-19.5 0h19.5M4.5 9.75v-1.5A2.25 2.25 0 016.75 6H9m6.75 3.75V6.75A2.25 2.25 0 0013.5 4.5h-3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                    Organize Seamlessly:
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Flexible customizable folders, context tags, and unified
                    deep search mechanics.
                  </p>
                </div>
              </div>

              {/* Feature 3: Live Workspaces */}
              <div className="flex gap-5 items-start">
                <div className="p-3 bg-purple-50 text-purple-500 rounded-2xl shrink-0 shadow-sm border border-purple-100/50">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.656-5.64 9.034 9.034 0 01-1.214 3.217m-1.214-3.217a4.5 4.5 0 11-6.364 0m6.364 0a6 6 0 01-2.062 4.448m-2.112-4.13a11.95 11.95 0 00-3.049 8.14M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                    Collaborate in Real-Time:
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Shared digital notebooks and real-time canvas interactive
                    whiteboards.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= FLOATING NOTE CARD COMPONENT ================= */}
            <div className="absolute -bottom-6 -right-6 w-72 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/60 p-5 shadow-xl shadow-slate-200/50 space-y-4 pointer-events-none transform rotate-1 scale-105">
              {/* Card Title Bar */}
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-800 tracking-wide">
                  Quick Notes
                </span>
                <span className="text-gray-400 text-xs">•••</span>
              </div>

              {/* List Actions */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 text-xs text-gray-600 bg-white/50 p-2.5 rounded-xl border border-gray-100">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded text-indigo-600 focus:ring-0 w-3.5 h-3.5"
                  />
                  <span className="line-through text-gray-400">
                    Brainstorm: Project Phoenix
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600 bg-white/50 p-2.5 rounded-xl border border-gray-100">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded text-indigo-600 focus:ring-0 w-3.5 h-3.5"
                  />
                  <span className="line-through text-gray-400">
                    Meeting Summary: Q3 Strategy
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-700 bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs font-medium">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>Daily To-Do List</span>
                </div>
              </div>

              {/* Icon Dashboard Tray Actions */}
              <div className="grid grid-cols-3 gap-1.5 pt-1 text-center">
                <div className="flex flex-col items-center gap-1">
                  <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="text-sm font-semibold">+</span>
                  </button>
                  <span className="text-[10px] text-gray-400">New Note</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316A2.192 2.192 0 0013.746 3.75h-3.493c-.472 0-.919.253-1.163.654l-.822 1.316zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                  <span className="text-[10px] text-gray-400">Scan Doc</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                  <span className="text-[10px] text-gray-400">Voice Memo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

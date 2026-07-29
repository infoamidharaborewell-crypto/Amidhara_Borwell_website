import React, { useState, useEffect } from "react";
import logo from "/logo_tejas.png";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Trigger smooth slide-up animation for "Welcome to" from bottom
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hold for 0.5 seconds after typing completes before entering website
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 750);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 65);

    return () => {
      clearTimeout(welcomeTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  // SVG Circular Progress Calculations
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Typewriter effect applied ONLY to AMIDHARA BOREWELL
  const line2Full = "AMIDHARA BOREWELL";
  const typedCount = Math.floor((progress / 100) * line2Full.length);
  const line2Typed = line2Full.substring(0, typedCount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans pointer-events-auto">
      {/* Top Liquid Curtain Sweep (GPU Accelerated) */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 z-40 transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFadingOut ? "-translate-y-full" : "translate-y-0"
        }`}
      ></div>

      {/* Bottom Liquid Curtain Sweep (GPU Accelerated) */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 via-blue-950 to-slate-900 z-40 transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFadingOut ? "translate-y-full" : "translate-y-0"
        }`}
      ></div>

      {/* Main Content Viewport */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transform-gpu transition-all duration-700 ${
          isFadingOut ? "opacity-0 scale-110 blur-xl pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        {/* Background Animated Water Glow & Floating Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>

          <div className="water-bubbles">
            <div className="water-bubble"></div>
            <div className="water-bubble"></div>
            <div className="water-bubble"></div>
            <div className="water-bubble"></div>
            <div className="water-bubble"></div>
          </div>
        </div>

        {/* Top Right Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-bold text-white transition-all transform hover:scale-105 shadow-lg flex items-center space-x-1.5"
          aria-label="Skip splash screen intro"
        >
          <span>Skip Intro</span>
          <span>→</span>
        </button>

        {/* Main Glassmorphic Container Card */}
        <div className="relative z-50 w-11/12 max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-950/90 text-center flex flex-col items-center justify-center space-y-8 transition-all duration-500 min-h-[460px]">
          
          {/* Top: Spinning 3D Logo with Glowing Circular SVG Ring */}
          <div className="relative flex items-center justify-center">
            {/* SVG Progress Circle Ring */}
            <svg className="w-48 h-48 transform -rotate-90 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
              <circle
                cx="96"
                cy="96"
                r={radius}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="96"
                cy="96"
                r={radius}
                stroke="url(#waterGradientSplash)"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-150 ease-out"
              />
              <defs>
                <linearGradient id="waterGradientSplash" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>

            {/* Centered 3D Spinning Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={logo}
                alt="Amidhara Borewell Logo"
                className="h-32 md:h-40 w-auto spin-logo filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* Welcome Typography: "Welcome to" slides up from bottom, "AMIDHARA BOREWELL" has live typewriter effect */}
          <div className="transition-all duration-300 min-h-[90px] flex flex-col justify-center overflow-hidden">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 mb-2 tracking-tight drop-shadow-[0_2px_12px_rgba(245,158,11,0.4)] transition-all duration-700 transform ${
                showWelcome ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Welcome to
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 tracking-wider min-h-[44px]">
              {line2Typed}
              {progress < 100 && (
                <span className="inline-block w-1.5 h-7 bg-cyan-400 ml-1 animate-pulse align-middle"></span>
              )}
            </h2>
          </div>

          {/* Loading Progress Badge */}
          <div className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-bold text-cyan-300 shadow-md flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Loading Pure Water Solutions... {progress}%</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

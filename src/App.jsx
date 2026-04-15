import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import News from "./pages/News";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Advertise from "./pages/Advertise";
import CreatePost from "./pages/CreatePost";
import DeveloperPlatform from "./pages/DeveloperPlatform";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/popular"
              element={<Popular theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/news"
              element={<News theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/explore"
              element={<Explore theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/about"
              element={<About theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/advertise"
              element={<Advertise theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/developer-platform"
              element={
                <DeveloperPlatform theme={theme} toggleTheme={toggleTheme} />
              }
            />
            <Route
              path="/help"
              element={<Help theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/create"
              element={<CreatePost theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/login"
              element={<Login theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/signup"
              element={<Signup theme={theme} toggleTheme={toggleTheme} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

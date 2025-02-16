import React from "react";
import useDarkMode from "@/hooks/useDarkMode";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
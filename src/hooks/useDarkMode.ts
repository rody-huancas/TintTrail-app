import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("dark_mode_tint");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: boolean) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("dark_mode_tint", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const body = document.body;
    isDarkMode ? body.classList.add("dark") : body.classList.remove("dark");
    return () => {
      body.classList.remove("dark");
    };
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

"use client";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function ThemeToggler() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="z-50 my-6">
      <div className="flex justify-center">
        {isLight ? (
          <MdDarkMode
            className="cursor-pointer"
            onClick={toggleTheme}
            size={26}
            color="black"
          />
        ) : (
          <MdLightMode
            className="cursor-pointer"
            onClick={toggleTheme}
            size={26}
            color="white"
          />
        )}
      </div>
    </div>
  );
}

export default ThemeToggler;

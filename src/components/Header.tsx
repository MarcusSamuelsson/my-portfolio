import React from "react";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

const Header = () => {
  return (
    <header className="w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Home Button */}
        <Link href="/" className="text-gray-900 dark:text-white text-lg font-semibold">
          Home
        </Link>

        {/* Right: Dark Mode Toggle & Login Button */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
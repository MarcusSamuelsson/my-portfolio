//pages/index.tsx

import React from "react";
import Header from "@/components/Header";

const HomePage = () => {
    return (
      <div className="bg-white dark:bg-gray-800 min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl font-bold center">Welcome to My Website</h1>
          <p className="mt-2">This is the homepage of your Next.js app.</p>
        </main>
      </div>
    );
  };

export default HomePage;
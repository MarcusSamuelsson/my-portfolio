import React from "react";
import PortfolioSideMenu from "@/components/PortfolioSideMenu";

const PortfolioPage = () => {
    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen">
        <PortfolioSideMenu />
        <main className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <p className="mt-2">This is the portfolio page of your Next.js app.</p>
        </main>
        </div>
    );
};

export default PortfolioPage;
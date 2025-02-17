import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaProjectDiagram, FaTools, FaBriefcase, FaAlignLeft, FaArrowLeft } from 'react-icons/fa'; // Import icons
import DarkModeToggleSideMenu from './DarkModeToggleSideMenu'; // Import the new DarkModeToggle component

const PortfolioSideMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const toggleMenu = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full ${isExpanded ? 'w-64' : 'w-16'} bg-gray-100 dark:bg-gray-900 p-4 space-y-6 transition-all duration-300 flex flex-col`}
    >
      {/* Toggle Button to Expand/Collapse */}
      <div onClick={toggleMenu} className="absolute top-4 right-0 cursor-pointer">
        <FaAlignLeft className={`text-gray-900 dark:text-white ${isExpanded ? 'rotate-180' : ''} transition-transform`} />
      </div>

      {/* Menu Header */}
      {isExpanded && (
        <h2 className="text-2xl text-gray-900 dark:text-white font-semibold">Portfolio</h2>
      )}

      <nav className="space-y-4 flex-grow">
        {/* Overview Link */}
        <Link href="/portfolio/overview" className="flex items-center space-x-2 text-lg text-gray-900 dark:text-white hover:text-blue-500">
          <FaHome />
          {isExpanded && <span>Overview</span>}
        </Link>

        {/* Projects Link */}
        <Link href="/portfolio/projects" className="flex items-center space-x-2 text-lg text-gray-900 dark:text-white hover:text-blue-500">
          <FaProjectDiagram />
          {isExpanded && <span>Projects</span>}
        </Link>

        {/* Skills Link */}
        <Link href="/portfolio/skills" className="flex items-center space-x-2 text-lg text-gray-900 dark:text-white hover:text-blue-500">
          <FaTools />
          {isExpanded && <span>Skills</span>}
        </Link>

        {/* Work Link */}
        <Link href="/portfolio/work" className="flex items-center space-x-2 text-lg text-gray-900 dark:text-white hover:text-blue-500">
          <FaBriefcase />
          {isExpanded && <span>Work</span>}
        </Link>
      </nav>

      {/* Dark Mode Toggle */}
      <div className="absolute bottom-16 left-4 w-full">
        <DarkModeToggleSideMenu isExpanded={isExpanded} />
      </div>

      {/* Home (Return to Home Page) Button at the Bottom */}
      <div className="absolute bottom-4 left-4 w-full">
        <Link href="/" className="flex items-center space-x-2 text-lg text-gray-900 dark:text-white hover:text-blue-500">
          <FaArrowLeft />
          {isExpanded && <span>Return to Home Page</span>}
        </Link>
      </div>
    </aside>
  );
};

export default PortfolioSideMenu;

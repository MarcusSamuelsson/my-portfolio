import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons
import useDarkMode from "@/hooks/useDarkMode";


interface DarkModeToggleProps {
    isExpanded: boolean;
  }
  
const DarkModeToggleSideMenu: React.FC<DarkModeToggleProps> = ({ isExpanded }) => {
    const { darkMode, toggleDarkMode } = useDarkMode(); // Use the darkMode and toggleDarkMode from the hook
  
    return (
        <div
          onClick={toggleDarkMode}
          className={`flex items-center justify-between p-2 cursor-pointer rounded-full transition-all duration-300 
            ${isExpanded ? 'w-56 bg-gray-300 dark:bg-gray-600' : 'w-16'} 
            ${darkMode ? 'justify-end' : 'justify-start'}
            ${!isExpanded ? 'bg-transparent' : ''}`} // Remove background when collapsed
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
          <div className={`text-gray-900 dark:text-white ${!isExpanded ? 'hidden' : ''}`}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </div>
        </div>
      );
};

export default DarkModeToggleSideMenu;

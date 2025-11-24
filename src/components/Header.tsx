import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const navItems = [
    { href: '#accueil', label: 'Accueil', isRoute: false },
    { href: '/ateliers', label: 'Les Ateliers', isRoute: true },
    // { href: '#services', label: 'Tarifs', isRoute: false },
    // { href: '#contact', label: 'Contact', isRoute: false },
  ];

  const handleNavClick = (href, isRoute) => {
    setIsMenuOpen(false);
    
    if (isRoute) {
      navigate(href);
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-400 shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-gray-800">Kids in the kitchen</h2>
          </div>


          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isPreorder = item.label === 'Réservation';
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className={
                    isPreorder
                      ? "bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transform transition-all duration-200 animate-pulse-on-hover"
                      : "text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer"
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </nav>


          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>


        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isPreorder = item.label === 'Précommande';
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className={
                      isPreorder
                        ? "bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transform transition-all duration-200 animate-pulse-on-hover text-left"
                        : "text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer text-left"
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

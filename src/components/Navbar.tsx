import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-off-white-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 min-w-0">
            <Link
              to="/"
              className="flex items-center text-xl font-logo text-light-purple-500 tracking-widest"
            >
              <img
                src="/6.png"
                alt="Periwinkle Perinatal Logo"
                className="w-10 mr-2"
              />
              <span className="hidden sm:inline">Periwinkle Perinatal</span>
              <span className="sm:hidden text-xl tracking-widest">
                Periwinkle Perinatal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-shrink-0">
            <div className="ml-4 lg:ml-10 flex items-center space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-dark-grey-500 hover:text-light-purple-500 px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary text-sm px-4 py-2 whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-grey-500 hover:text-light-purple-500 hover:bg-periwinkle-100"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-off-white-100 border-t border-tan-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-dark-grey-500 hover:text-light-purple-500 block px-3 py-2 text-base font-medium rounded-md hover:bg-tan-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary block text-center mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

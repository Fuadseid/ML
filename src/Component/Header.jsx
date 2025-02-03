import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-800 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Home Link */}
        <div className="text-white text-2xl font-bold hover:text-blue-200 transition-colors">
          <NavLink
            to="/"
            aria-label="Home"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-300" : "text-white hover:text-blue-200"
            }
          >
            Diabet Predicted
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none hover:text-blue-200 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex md:space-x-8 ${
            isMenuOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0">
            <li className="list-none">
              <NavLink
                to="/predict"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive
                      ? "text-blue-300 font-semibold"
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                Predict
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive
                      ? "text-blue-300 font-semibold"
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive
                      ? "text-blue-300 font-semibold"
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
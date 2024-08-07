// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import RegisterModal from './RegisterModal'; // Adjust the path if needed
import { Link } from 'react-router-dom';

const Header = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-transprent">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-100" href="#">
              <span className="sr-only">Home</span>
              <img className="h-12" src="public/Dubailogo.png"/>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-200 transition hover:text-gray-500/75" href="#">    <Link to="/">Home</Link> </a>
                </li>

              
                <li>
                  <a className="text-gray-200 transition hover:text-gray-500/75" href="#"> <Link to="/History" >History</Link> </a>
                </li>

            
                <li>
                  <a className="text-gray-200 transition hover:text-gray-500/75" href="#">  <Link to="/Project" >Projects</Link> </a>
                </li>

               
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <button
                  onClick={handleRegisterClick}
                  className="rounded-md px-5 py-2.5 text-sm font-medium text-teal-600 cursor-pointer bg-transparent"
                >
                  Register
                </button>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;

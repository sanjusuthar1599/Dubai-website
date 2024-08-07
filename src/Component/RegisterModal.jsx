// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './RegisterModal.css'; // Make sure to create this CSS file

const RegisterModal = ({ isOpen, onClose }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 transition-transform transform duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-teal-700 mb-6">Create an Account</h2>
          <form>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              >
                Register
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </CSSTransition>
  );
};

export default RegisterModal;

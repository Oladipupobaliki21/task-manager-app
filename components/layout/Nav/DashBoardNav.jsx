import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiSettings, FiUsers, FiPieChart, FiBell, FiMessageSquare } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const DashboardNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items
  const navItems = [
    { path: '/dashboard', icon: <FiHome size={20} />, label: 'Dashboard' },
    { path: '/analytics', icon: <FiPieChart size={20} />, label: 'Analytics' },
    { path: '/users', icon: <FiUsers size={20} />, label: 'Users' },
    { path: '/messages', icon: <FiMessageSquare size={20} />, label: 'Messages' },
    { path: '/settings', icon: <FiSettings size={20} />, label: 'Settings' },
  ];

  return (
    <>
      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 h-screen border-r border-gray-200 bg-white">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs font-medium text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar - shown only on mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
          
          <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none">
              <FiBell size={20} />
              <span className="sr-only">Notifications</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - shown when menu is open */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu */}
          <div className="absolute inset-y-0 left-0 w-5/6 max-w-sm bg-white">
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              {/* User Profile */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">John Doe</p>
                    <p className="text-xs font-medium text-gray-500">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Bar - app-like navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200">
        <div className="flex justify-around">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 text-xs font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="mb-1">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Padding for mobile top and bottom bars */}
      <div className="md:hidden pt-16 pb-14"></div>
    </>
  );
};

export default DashboardNav;
import React from 'react';

function Header() {
  return (
    <header className="py-4 bg-gray-200">
      <nav className="container mx-auto p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Portfolio Website</h1>
        <ul className="flex justify-end">
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
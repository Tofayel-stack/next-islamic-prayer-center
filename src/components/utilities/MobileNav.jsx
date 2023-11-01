import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { CgMenuGridO } from 'react-icons/cg';

const MobileNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-amber-500 p-2 lg:hidden block">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className='ms-6'>
          <img className='w-16 h-12'
            src='https://i.ibb.co/W3b4PJc/24-242664-islamic-logo-free-png-transparent-png-removebg-preview.png'
            alt="logo" />
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            onClick={toggleDropdown}
          >
            <CgMenuGridO className='text-3xl' />
          </button>
          <div
            className={`${
              isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } z-30 absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 transition-opacity duration-300`}
            id="dropdownMenu"
          >
                 <ul>
                 <li className="px-2 mt-1 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                
                <Link href='/'>Home</Link>
                </li>
                <li className="px-2 mt-1 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/service">Service</Link>
                </li>
                <li className="px-2 mt-1 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/about">About Us</Link>
                </li>
                <li className="px-2 mt-1 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/blog">Blog</Link>
                </li>
                <li className="px-2 mt-1 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/events">Events</Link>
                </li>
                <li className="px-2 mt-1 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link href="/contact">Contact</Link>
                </li>
                 </ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;

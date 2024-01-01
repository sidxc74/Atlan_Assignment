import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [mode]);

  const handleClick = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex justify-between items-center p-10 mx-40 ">
      <Link to="/" className="text-lime-800 text-4xl font-medium font-['Newsreader'] leading-10 dark:text-orange-700">
        ATLAN’S SQL
      </Link>
      <button
        className="rounded-full border-slate-500 border p-1 dark:bg-slate-50"
        onClick={handleClick}
      >
        <img src={`${mode === 'dark' ? './sun.png' : './moon.png'}`} alt="Toggle Theme" />
      </button>

      <div className="flex justify-center gap-10">
        <button className="w-28 h-12 bg-lime-800 rounded-lg text-center text-white text-xl font-semibold font-['Montserrat'] hover:text-white hover:bg-orange-700 leading-relaxed dark:bg-orange-600">
          <Link to="/">Home</Link>
        </button>
        <NavLink
          to="/History"
          className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-black'} text-xl font-normal font-['Montserrat'] leading-relaxed hover:text-orange-600 dark:text-white`}
        >
          History
        </NavLink>
        <NavLink
          to="/PreDefined"
          className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-black'} text-xl font-normal font-['Montserrat'] leading-relaxed hover:text-orange-600 dark:text-white`}
        >
          PreDefined
        </NavLink>
        
      </div>
    </div>
  );
}

export default Navbar;
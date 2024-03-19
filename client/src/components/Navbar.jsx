// import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center  justify-between flex-wrap bg-teal-500 p-8">
      <div className="flex items-center w-[20%] flex-shrink-0 text-white mr-6">
        <p className="font-semibold text-xl tracking-tight" to="/">
          Meeting Room Booking
        </p>
      </div>
      <div className="w-[50%] block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <p to="/book" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Book a Room
          </p>
          <p to="/manage" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Manage Bookings
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

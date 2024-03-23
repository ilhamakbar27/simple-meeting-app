// import React from 'react';

import { Link } from 'react-router-dom';
const handleLogout = () => {
  localStorage.removeItem("access_token");
  window.location.reload();
};

const Navbar = () => {
  return (
    <nav className="flex items-center w-full fixed  z-10  justify-between flex-wrap bg-[#008DDA] px-20 py-7">
      <div className="flex items-center w-[20%] flex-shrink-0 text-white mr-6">
        <Link  className="font-semibold text-xl tracking-tight" to="/">
          Meeting Room Booking
        </Link>
      </div>
      <div className="w-[50%] block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <p
            to="/book"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Book a Room
          </p>
          <p
            to="/manage"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Manage Bookings
          </p>
          {/* <Link
            to={"/my-bookings"}
            className="pl-5 text-teal-200 hover:text-white">
            My Bookings
          </Link> */}
          <button
            onClick={handleLogout}
            className="pl-5 text-teal-200 hover:text-white">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

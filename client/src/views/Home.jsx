// import React from 'react'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="px-12 min-h-screen bg-[#008DDA] justify-center items-center flex ">
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVldGluZyxjb25mZXJlbmNlLG98fHx8fHwxNzEwOTEzNDc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800')",
        }}
        className="flex flex-col bg-gray-200 gap-12 px-24 py-24 rounded-3xl items-center  ">
        <h1 className="text-6xl text-gray-50 tracking-tight font-bold">
          Welcome to Meeting Room Booking
        </h1>
        <p className="text-xl text-center font-[400] text-white ">
          Whether youre managing appointments for your business, scheduling
          meetings with clients, or planning your personal activities, our app
          offers a seamless and user-friendly platform to streamline the entire
          process. With just a few taps, you can access a world of
          possibilities, effortlessly arranging appointments, reservations, and
          bookings with ease.
        </p>
        <Link
          to={"/rooms"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          type="button">
          Book a Room
        </Link>
      </div>
    </main>
  );
};

export default Home;

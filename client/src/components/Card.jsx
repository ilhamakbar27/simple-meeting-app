import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ roomData }) => {
  console.log(roomData);
  return (
    <div className="card shadow-md rounded-xl bg-white overflow-hidden w-full h-[450px] flex flex-col items-center relative">
      <div className="flex-[2] w-full relative">
        <img
          className="object-cover h-[260px] w-full"
          src="https://source.unsplash.com/1600x900/?meetingroom"
          alt="ok"
        />
        <h1 className="text-black first-letter:uppercase text-2xl font-[500] px-6 py-4">
          {roomData?.roomName}
        </h1>
        <p className="text-black font-bold px-6 text-2xl">
          $ {roomData?.costPerHour} / hour
        </p>
        <Link to={`/booking/${roomData?.id}`} >
          <button className="px-8 mx-6 py-2.5 mt-6 rounded-xl bg-blue-500 hover:bg-blue-700 text-white ">
            Book now
          </button>
        </Link>
      </div>
      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-full">
        New
      </div>
    </div>
  );
};

export default Card;

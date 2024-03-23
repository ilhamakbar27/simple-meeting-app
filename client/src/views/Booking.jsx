import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";



const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    startTime: "",
    endTime: "",
    bookingDate: "",
    RoomId: id,
    ClientId: 1,
    quotaUsed: 0,
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/booking", form, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      Swal.fire({
        title: "Success!",
        text: "Booking successfully created",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/home");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data,
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error.response.data);
    }
  };
  return (
    <div className="pt-36 pb-20 bg-[#008DDA]  min-h-screen  max-md:px-10  px-24">
      <form onSubmit={onSubmit} className="flex flex-col  gap-6">
        <div className="flex  justify-between">
          <h1 className="text-5xl max-md:text-3xl text-white font-extrabold">
            Make a booking here
          </h1>
        </div>
        <div className="pt-20 max-md:pt-10 flex max-md:flex-col max-md:gap-5 justify-between ">
          <div className="flex flex-col w-[45%] max-md:w-full gap-2">
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex max-md:flex-col gap-2 justify-between items-center ">
                <label
                  className="text-gray  max-md:text-start text-md font-bold"
                  htmlFor="">
                  <p className="max-md:text-left">Start time</p>
                </label>
                <input
                  placeholder="Start time.."
                  value={form.startTime}
                  onChange={handleChange("startTime")}
                  className="bg-gray-200 py-4 px-20 rounded-2xl"
                  type="text"
                />
              </div>
              <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                <label className="text-gray text-md font-bold" htmlFor="">
                  End time
                </label>
                <input
                  placeholder="End time..."
                  value={form.endTime}
                  onChange={handleChange("endTime")}
                  className="bg-gray-200 py-4 px-20 rounded-2xl"
                  type="text"
                />
              </div>
              <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                <label className="text-gray text-md font-bold" htmlFor="">
                  Booking date
                </label>
                <input
                  placeholder="Enter your distance"
                  value={form.bookingDate}
                  onChange={handleChange("bookingDate")}
                  className="bg-gray-200 py-4 px-20 rounded-2xl"
                  type="date"
                />
              </div>
              <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                <label className="text-gray text-md font-bold" htmlFor="">
                  Quota used
                </label>
                <input
                  placeholder="hour..."
                  className="bg-gray-200 py-4 px-20 rounded-2xl"
                  type="number"
                  value={form.quotaUsed}
                  onChange={handleChange("quotaUsed")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pl-[150px] pt-5 ">
          <button
            type="submit"
            className="text-white py-4 px-10 rounded-xl bg-green-500 hover:bg-blue-700 font-bold">
            Post Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;

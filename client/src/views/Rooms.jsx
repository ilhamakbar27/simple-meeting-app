import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const fetchRooms = async () => {
    try {
      await sleep(1000);
      setLoading(true);
      const { data } = await axios.get("http://localhost:3000/room", {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      setRooms(data);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data,
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <section className="bg-[#008DDA] min-h-screen pb-24 text-white pt-32 flex flex-col gap-12 px-20">
      <h1 className="text-5xl font-semibold tracking-tight"> Our rooms </h1>
      {loading ? (
        <div className="flex justify-center pt-24 items-center">
          <Loading size={24} />
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-3">
          {rooms.map((room) => (
            <Card key={room.id} roomData={room} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Rooms;

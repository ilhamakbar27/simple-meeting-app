import axios from "axios";
import { createContext, useState } from "react";

export const appContext = createContext({
  roomId: null,
  setRoomId: () => {},
  clientId: null,
  setClientId: () => {},
  roomData: null,
  fetchRoomData: () => {},
});

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [roomId, setRoomId] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [roomData, setRoomData] = useState(null);

  async function fetchRoomData() {
    try {
      const { data } = await axios.get(`http://localhost:3000/room`, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      setRoomData(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <appContext.Provider
      value={{
        roomId,
        setRoomId,
        clientId,
        setClientId,
        roomData,
        fetchRoomData,
      }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;

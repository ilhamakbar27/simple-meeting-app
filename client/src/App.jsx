// import './App.css'
import { RouterProvider } from "react-router-dom";

import Router from "./router";
import AppContextProvider from "./context/appContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <RouterProvider router={Router} />
      </AppContextProvider>
    </>
  );
}

export default App;

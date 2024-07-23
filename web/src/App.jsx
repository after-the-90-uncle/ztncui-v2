import React, { useEffect } from "react";
import router from "./router";
import { RouterProvider } from 'react-router-dom'
import "./app.less";
function App() {
  useEffect(() => {
    console.log("App loaded", router);
  }, []);
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;

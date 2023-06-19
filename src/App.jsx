import React from 'react';
import { RouterProvider } from "react-router";
import "./assets/app.scss";
import route from './Routers/Route';

const App = () => {
  return (
    <div id=''>
    <div className=" ">
      <RouterProvider router={route}> </RouterProvider>
    </div>
  </div>
  );
};

export default App;
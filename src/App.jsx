import React from 'react';
import { RouterProvider } from "react-router";
import Route from "./routers/Route";
import "./assets/app.scss";

const App = () => {
  return (
    <div id="app">
    <div className="content">
      <RouterProvider router={Route}> </RouterProvider>
    </div>
  </div>
  );
};

export default App;
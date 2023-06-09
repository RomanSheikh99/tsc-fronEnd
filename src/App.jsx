import { RouterProvider } from "react-router";
import Router from "./Routers/Routers";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="content">
          <RouterProvider router={Router}> </RouterProvider>
        </div>
      </div>
    </>
  );
}

export default App;

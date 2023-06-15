import { RouterProvider } from "react-router";
import Router from "./Routers/Routers";
import "./App.css";

function App() {
  const app = {
    background: "url('assets/image/bg_main.gif')",
    backgroundPosition: "center"

  }
  return (
    <>
      <div id="app" style={app}>
        <div className="content">
          <RouterProvider router={Router}> </RouterProvider>
        </div>
      </div>
    </>
  );
}

export default App;

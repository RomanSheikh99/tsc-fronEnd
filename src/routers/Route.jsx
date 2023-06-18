import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";


const route = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path:'*',
        element: <div> This routes not found ! </div>
    }
])

export default route ;
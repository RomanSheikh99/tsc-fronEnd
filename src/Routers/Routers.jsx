import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import AdminLayout from "../Components/Layout/AdminLayout";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
       path: '/admin-dashboard',
       element: <AdminLayout/>
    },

    {
        path:'*',
        element: <div className="text-3xl text-center mt-4
         font-bold text-red-600"> This routes not found ! </div>
    }
])

export default router ;
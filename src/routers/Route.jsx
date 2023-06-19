import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DashboardNews from "../pages/DashboardNews";
import DashboardTeachers from "../pages/DashboardTeachers";
import DashboardNotice from "../pages/DashboardNotice";


const route = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path: '/dashboard-news',
        element: <DashboardNews/>
     },
     {
        path: '/dashboard-teachers',
        element: <DashboardTeachers/>
     },
     {
        path: '/dashboard-notice',
        element: <DashboardNotice/>
     },
    {
        path:'*',
        element: <div> This routes not found ! </div>
    }
])

export default route ;
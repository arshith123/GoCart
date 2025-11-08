import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import AdminLayout from "../pages/layout/AdminLayout";
import DashBoard from "../pages/admin/DashBoard";



const router = createBrowserRouter([
    {
        path: "/admin/login",
        element: <AdminLogin />
    },
    {
        element: <AdminLayout />,
        children: [
            { path: "/admin/dashboard", element: <DashBoard /> }
        ]
    }
]);

export default router
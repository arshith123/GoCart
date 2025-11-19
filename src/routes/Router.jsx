import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import AdminLayout from "../pages/layout/AdminLayout";
import DashBoard from "../pages/admin/DashBoard";
import ProductList from "../pages/admin/products/ProductList";
import UserList from "../pages/admin/user/UserList";
import UomList from "../pages/admin/products/UomList";
import BrandList from "../pages/admin/products/BrandList";
import CategoryList from "../pages/admin/products/CategoryList";
import AddProduct from "../pages/admin/products/AddProduct";



const router = createBrowserRouter([
    {
        path: "/admin/login",
        element: <AdminLogin />
    },
    {
        element: <AdminLayout />,
        children: [
            { path: "/admin/dashboard", element: <DashBoard /> },
            { path: "/admin/product-list", element: <ProductList /> },
            { path: "/admin/product-add", element: <AddProduct /> },
            { path: "/admin/uom-list", element: <UomList /> },
            { path: "/admin/brand-list", element: <BrandList /> },
            { path: "/admin/category-list", element: <CategoryList /> },
            { path: "/admin/user-managment", element: <UserList /> },

        ]
    }
]);

export default router
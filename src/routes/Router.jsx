import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import AdminSignup from "../pages/auth/AdminSignup";
import AdminLayout from "../pages/layout/AdminLayout";
import DashBoard from "../pages/admin/DashBoard";
import ProductList from "../pages/admin/products/ProductList";
import UserList from "../pages/admin/user/UserList";
import UomList from "../pages/admin/products/UomList";
import BrandList from "../pages/admin/products/BrandList";
import CategoryList from "../pages/admin/products/CategoryList";
import TaxList from "../pages/admin/accounts/TaxList";
import NotFound from "../components/common/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <AdminLogin />,
  },
  {
    path: "/signup",
    element: <AdminSignup />,
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/product-list", element: <ProductList /> },
      { path: "/uom-list", element: <UomList /> },
      { path: "/brand-list", element: <BrandList /> },
      { path: "/category-list", element: <CategoryList /> },
      { path: "/user-managment", element: <UserList /> },
      { path: "/tax-list", element: <TaxList /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

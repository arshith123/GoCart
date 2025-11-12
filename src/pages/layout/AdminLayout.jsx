import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CONSTANT_IMAGES } from "../../assets/assets";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  House,
  LayoutDashboard,
  ListIndentDecrease,
  ListIndentIncrease,
  ShoppingBasket,
  Users,
  Wrench,
} from "lucide-react";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const navigate = useNavigate();

  const navItems = [
    { icon: <LayoutDashboard />, label: "Dashboard", link: "/admin/dashboard" },
    {
      icon: <ShoppingBasket />,
      label: "Manage Products",
      subMenu: [
        { label: "Products", link: "/admin/product-list" },
        { label: "Categories", link: "/admin/category-list" },
        { label: "Brands", link: "/admin/brand-list" },
        { label: "UOM", link: "/admin/uom-list" }
      ]
    },
    { icon: <Users />, label: "User Management", link: "/admin/user-managment" },
    { icon: <House />, label: "Inventory" },
    { icon: <Wrench />, label: "Settings" },
  ];

  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <aside
        className={`
          fixed md:relative top-0 left-0 h-full z-50
          transition-all duration-300 bg-[#f9fafb] flex flex-col
          ${collapsed ? "md:w-20 w-64" : "md:w-64 w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo + Desktop toggle */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400" >
          <div className={`flex gap-6  ${collapsed ? 'flex-col' : ''}`}>

            <div className="flex items-center gap-2">
              <img
                src={CONSTANT_IMAGES.WebLogo}
                className={`${collapsed ? "w-10" : "w-16"}`}
                alt="logo"
              />
              {!collapsed && <h2 className="font-heading font-semibold text-gray-900">GoCart</h2>}
            </div>

            {/* Desktop toggle button */}
            <button
              className="hidden md:block p-1 rounded hover:bg-gray-200"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <ListIndentIncrease /> : <ListIndentDecrease />}
            </button>

          </div>

        </div>

        {/* Nav items */}
        <ul className="flex flex-col mt-10 gap-2 px-2">
          {navItems.map((item, idx) => {
            const [open, setOpen] = useState(false); // for submenu toggle

            return (
              <li key={idx}>
                {/* Main nav item */}
                <div
                  className="flex items-center  gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded"
                  title={collapsed ? item.label : ""}
                  onClick={() => {
                    if (item.subMenu) setOpen(!open);
                    else navigate(item.link);
                  }}
                >
                  <span className="w-6 h-6 flex justify-center">{item.icon}</span>
                  {!collapsed && <span className="font-medium text-sm text-gray-900">{item.label}</span>}
                  {!collapsed && item.subMenu && (
                    <span>{open ? <ChevronUp /> : <ChevronDown />}</span>
                  )}
                </div>

                {/* Submenu */}
                {item.subMenu && open && (
                  <ul className="ml-6 mt-1 flex flex-col gap-1">
                    {item.subMenu.map((sub, i) => (
                      <li
                        key={i}
                        className="p-2 cursor-pointer text-gray-700 text-sm hover:bg-gray-200 rounded"
                        onClick={() => navigate(sub.link)}
                      >
                        {sub.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col md:ml-0">
        <header className="flex items-center justify-between px-4 md:px-10 py-2 shadow-md bg-[#f9fafb]">
          {/* Mobile toggle button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <ListIndentIncrease />
          </button>
          <div>
            {/* empty */}
          </div>

          <div className="flex items-center gap-4">
            <CircleUserRound className="cursor-pointer" />
            <div className="bg-gray-300 p-3 rounded-2xl">
              <p className="font-sans font-medium text-gray-900">Admin</p>
            </div>
            <Bell className="cursor-pointer" />
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

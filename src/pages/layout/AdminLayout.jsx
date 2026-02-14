import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Bell,
  CircleUserRound,
  ListIndentIncrease,
} from "lucide-react";
import SideBar from "../../components/admin/SIdebar/SideBar";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const navigate = useNavigate();



  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <SideBar collapsed={collapsed} mobileOpen={mobileOpen} setCollapsed={setCollapsed}/>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col md:ml-0">
        <header className="flex items-center justify-between px-6 md:px-10 py-4 shadow-md bg-white border-b border-gray-200">
          {/* Mobile toggle button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <ListIndentIncrease color="#374151" />
          </button>
          
          {/* Search or breadcrumb area - currently empty */}
          <div className="flex-1">
            {/* You can add breadcrumbs or search here */}
          </div>

          {/* Right side - Notifications & User */}
          <div className="flex items-center gap-5">
            {/* Notification Bell with Badge */}
            <div className="relative cursor-pointer group">
              <Bell 
                className="transition-colors group-hover:text-indigo-600" 
                strokeWidth={1.5} 
                color="#374151" 
                size={22}
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>

            {/* User Profile Section */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2.5 rounded-lg border border-indigo-100 hover:shadow-md transition-all cursor-pointer">
              <CircleUserRound 
                className="text-indigo-600" 
                strokeWidth={1.5} 
                size={24}
              />
              <div className="hidden sm:block">
                <p className="font-sans font-semibold text-sm text-gray-900">Admin</p>
                <p className="font-sans text-xs text-gray-500">Administrator</p>
              </div>
            </div>
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

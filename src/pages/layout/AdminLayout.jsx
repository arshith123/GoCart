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
        <header className="flex items-center justify-between px-4 md:px-10 py-5 shadow-md bg-[#f9fafb]">
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
            <Bell className="cursor-pointer" strokeWidth={1.5} color="#374151" />
            <CircleUserRound className="cursor-pointer" strokeWidth={1.5} color="#374151" />
            <div className="bg-gray-300 px-4  py-2 rounded-md">
              <p className="font-sans font-medium text-gray-900">Admin</p>
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

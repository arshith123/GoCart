import { useRef, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  CircleUserRound,
  ListIndentIncrease,
  LogOut,
  User,
} from "lucide-react";
import SideBar from "../../components/admin/SIdebar/SideBar";
import authService from "../../services/auth.service";
import { ROLE } from "../../constants/role.constant";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Read user from localStorage (saved on login)
  const user = authService.getUserByLocalStorage();
  const displayName = user?.full_name || "Admin";
  const displayRole = ROLE[user?.role] || "Administrator";
  // Build initials for the avatar (e.g. "John Doe" → "JD")
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        setCollapsed={setCollapsed}
      />

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col md:ml-0 overflow-hidden">
        <header className="flex items-center justify-between px-6 md:px-10 py-4 shadow-md bg-white border-b border-gray-200 shrink-0">
          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <ListIndentIncrease color="#374151" />
          </button>

          {/* Breadcrumb / search area */}
          <div className="flex-1" />

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Notification Bell */}
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

            {/* User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="user-menu-button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-3 bg-linear-to-r from-indigo-50 to-purple-50 px-4 py-2.5 rounded-lg border border-indigo-100 hover:shadow-md transition-all cursor-pointer"
              >
                {/* Avatar circle with initials */}
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {initials}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="font-sans font-semibold text-sm text-gray-900 leading-tight">
                    {displayName}
                  </p>
                  <p className="font-sans text-xs text-gray-500 capitalize leading-tight">
                    {displayRole}
                  </p>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                  {/* User info header */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">
                          {displayName}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.email || ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      <User size={16} />
                      My Profile
                    </button>

                    <div className="border-t border-gray-100 my-1" />

                    <button
                      id="logout-button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
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

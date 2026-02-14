import { CONSTANT_IMAGES } from '../../../assets/assets';
import { ChevronDown, ChevronUp, House, LayoutDashboard, ListIndentDecrease, ListIndentIncrease, ShoppingBasket, Users, Wrench } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = ({ collapsed, mobileOpen, setCollapsed }) => {
    const navItems = [
        { icon: <LayoutDashboard color="#e0e7ff" strokeWidth={1.5} />, label: "Dashboard", link: "/admin/dashboard" },
        {
            icon: <ShoppingBasket color="#e0e7ff" strokeWidth={1.5} />,
            label: "Manage Products",
            subMenu: [
                { label: "Products", link: "/admin/product-list" },
                { label: "Categories", link: "/admin/category-list" },
                { label: "Brands", link: "/admin/brand-list" },
                { label: "UOM", link: "/admin/uom-list" }
            ]
        },
        { icon: <Users strokeWidth={1.5} color="#e0e7ff" />, label: "User Management", link: "/admin/user-managment" },
        { icon: <House strokeWidth={1.5} color="#e0e7ff" />, label: "Inventory" },
        { icon: <Wrench strokeWidth={1.5} color="#e0e7ff" />, label: "Settings" },
    ];
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    // Check if a menu item or its submenu is active
    const isActive = (item) => {
        if (item.link && location.pathname === item.link) return true;
        if (item.subMenu) {
            return item.subMenu.some(sub => location.pathname === sub.link);
        }
        return false;
    };

    // Check if a submenu item is active
    const isSubActive = (link) => location.pathname === link;

    return (
        <aside
            className={`
          fixed md:relative top-0 left-0 h-full z-50
          transition-all duration-300 ease-in-out bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col shadow-xl
          ${collapsed ? "md:w-20 w-64" : "md:w-64 w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
            {/* Logo + Desktop toggle */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 h-20" >
                {/* Logo section - changes based on collapsed state */}
                {collapsed ? (
                    <div className="flex items-center justify-center w-full">
                        <img
                            src={CONSTANT_IMAGES.WebLogo}
                            className="w-10 transition-all duration-300"
                            alt="logo"
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <img
                            src={CONSTANT_IMAGES.WebLogo}
                            className="w-16 transition-all duration-300"
                            alt="logo"
                        />
                        <h2 className="font-heading font-bold text-xl text-white whitespace-nowrap">
                            GoCart
                        </h2>
                    </div>
                )}

                <button
                    className="hidden md:block p-1.5 rounded-lg hover:bg-slate-700 transition-colors"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <ListIndentIncrease color="#e0e7ff" size={20} /> : <ListIndentDecrease color="#e0e7ff" size={20} />}
                </button>

            </div>

            {/* Nav items */}
            <ul className="flex flex-col mt-6 gap-2 px-3">
                {navItems.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    const active = isActive(item);

                    return (
                        <li key={idx}
                            className='relative'
                            onMouseEnter={() => collapsed && item.subMenu && setHoveredIndex(idx)}
                            onMouseLeave={() => collapsed && item.subMenu && setHoveredIndex(null)}

                        >
                            {/* Main nav item */}
                            <div
                                className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition-all duration-200 group ${
                                    active 
                                        ? 'bg-indigo-600 text-white shadow-lg' 
                                        : 'hover:bg-indigo-600/20'
                                } ${isOpen ? 'bg-indigo-600/10' : ''}`}
                                title=""
                                onClick={() => {
                                    if (collapsed) {
                                        // collapsed → don't toggle submenu
                                        if (!item.subMenu) navigate(item.link);
                                        return;
                                    }

                                    if (!item.subMenu) navigate(item.link)
                                    else setOpenIndex(isOpen ? null : idx);
                                }}
                            >
                                <span className={`w-6 h-6 flex justify-center items-center transition-transform ${active ? 'scale-110' : 'group-hover:scale-110'}`}>{item.icon}</span>
                                {!collapsed && <span className={`font-medium text-sm font-sans transition-colors flex-1 ${active ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>{item.label}</span>}
                                {!collapsed && item.subMenu && (
                                    <span className={`transition-colors ${active ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
                                )}
                            </div>

                            {/* Submenu */}
                            {!collapsed && item.subMenu && isOpen && (
                                <ul className="ml-9 mt-1 flex flex-col gap-1 border-l-2 border-indigo-500/30 pl-3">
                                    {item.subMenu.map((sub, i) => (
                                        <li
                                            key={i}
                                            className={`p-2 cursor-pointer text-sm rounded-md transition-all ${
                                                isSubActive(sub.link)
                                                    ? 'bg-indigo-600 text-white font-semibold'
                                                    : 'text-slate-300 hover:bg-indigo-600/20 hover:text-white'
                                            }`}
                                            onClick={() => navigate(sub.link)}
                                        >
                                            {sub.label}
                                        </li>
                                    ))}
                                </ul>
                            )}


                            {/* Tooltip submenu (Collapsed mode on hover) */}
                            {collapsed && hoveredIndex === idx && item.subMenu && (
                                <div className='absolute left-full top-0 ml-2 bg-slate-800 border border-slate-700 shadow-2xl rounded-lg p-2 w-48 z-50'>
                                    {item.subMenu.map((sub, i) => (
                                        <div
                                            key={i}
                                            className={`p-2.5 text-sm rounded-md cursor-pointer transition-all ${
                                                isSubActive(sub.link)
                                                    ? 'bg-indigo-600 text-white font-semibold'
                                                    : 'text-slate-200 hover:bg-indigo-600/30 hover:text-white'
                                            }`}
                                            onClick={() => navigate(sub.link)}
                                        >
                                            {sub.label}
                                        </div>
                                    ))}

                                </div>

                            )}
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}

export default SideBar
import { CONSTANT_IMAGES } from '../../../assets/assets';
import { ChevronDown, ChevronUp, House, LayoutDashboard, ListIndentDecrease, ListIndentIncrease, ShoppingBasket, Users, Wrench } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ collapsed, mobileOpen, setCollapsed }) => {
    const navItems = [
        { icon: <LayoutDashboard color="#374151" strokeWidth={1.5} />, label: "Dashboard", link: "/admin/dashboard" },
        {
            icon: <ShoppingBasket color="#374151" strokeWidth={1.5} />,
            label: "Manage Products",
            subMenu: [
                { label: "Products", link: "/admin/product-list" },
                { label: "Categories", link: "/admin/category-list" },
                { label: "Brands", link: "/admin/brand-list" },
                { label: "UOM", link: "/admin/uom-list" }
            ]
        },
        { icon: <Users strokeWidth={1.5} color="#374151" />, label: "User Management", link: "/admin/user-managment" },
        { icon: <House strokeWidth={1.5} color="#374151" />, label: "Inventory" },
        { icon: <Wrench strokeWidth={1.5} color="#374151" />, label: "Settings" },
    ];
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);


    return (
        <aside
            className={`
          fixed md:relative top-0 left-0 h-full z-50
          transition-all duration-300 bg-gray-300 flex flex-col
          ${collapsed ? "md:w-20 w-64" : "md:w-64 w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
            {/* Logo + Desktop toggle */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400 h-20" >
                {!collapsed && (
                    <div className={`flex gap-6`}>
                        <div className="flex items-center gap-2">
                            <img
                                src={CONSTANT_IMAGES.WebLogo}
                                className={`${collapsed ? "w-10" : "w-16"}`}
                                alt="logo"
                            />
                            {!collapsed && <h2 className="font-heading font-semibold text-gray-900">GoCart</h2>}
                        </div>
                    </div>
                )}

                <button
                    className="hidden md:block p-1 rounded hover:bg-gray-200"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <ListIndentIncrease /> : <ListIndentDecrease />}
                </button>

            </div>

            {/* Nav items */}
            <ul className="flex flex-col mt-10 gap-6 px-2">
                {navItems.map((item, idx) => {
                    const isOpen = openIndex === idx;

                    return (
                        <li key={idx}
                            className='relative'
                            onMouseEnter={() => collapsed && item.subMenu && setHoveredIndex(idx)}
                            onMouseLeave={() => collapsed && item.subMenu && setHoveredIndex(null)}

                        >
                            {/* Main nav item */}
                            <div
                                className={`flex items-center   gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded`}
                                title=""
                                onClick={() => {
                                    if (collapsed) {
                                        // collapsed → don’t toggle submenu
                                        if (!item.subMenu) navigate(item.link);
                                        return;
                                    }

                                    console.log("item.subMenu", item.subMenu);


                                    if (!item.subMenu) navigate(item.link)
                                    else setOpenIndex(isOpen ? null : idx);
                                }}
                            >
                                <span className="w-6 h-6 flex justify-center">{item.icon}</span>
                                {!collapsed && <span className="font-regular text-sm text-gray-700 font-sans hover:font-medium">{item.label}</span>}
                                {!collapsed && item.subMenu && (
                                    <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
                                )}
                            </div>

                            {/* Submenu */}
                            {!collapsed && item.subMenu && isOpen && (
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


                            {/* Tooltip submenu (Collapsed mode on hover) */}
                            {collapsed && hoveredIndex === idx && item.subMenu && (
                                <div className='absolute left-full top-0  bg-white shadow-lg rounded-md p-2 w-40 z-50'>
                                    {item.subMenu.map((sub, i) => (
                                        <div
                                            key={i}
                                            className='p-2 text-sm text-gray-700 hover:bg-gray-200 rounded cursor-pointer'
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
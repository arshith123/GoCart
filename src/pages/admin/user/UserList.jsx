import Heading from '../../../components/common/Heading'
import Container from '../../../components/common/Container'
import { useState } from 'react';
import { ListFilter, Plus, ArrowLeft, Edit2, Trash2, Mail, Phone, Users as UsersIcon, UserCheck, UserX } from 'lucide-react';
import UserAddForm from '../../../components/admin/user/UserAddForm';

const UserList = () => {
    const [searchInput, setsearchInput] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [users, setUsers] = useState([
        {
            id: 1,
            fullName: "Arjun Mehta",
            userName: "arjunm",
            role: "Admin",
            email: "arjun.mehta@example.com",
            mobile: "+91 98765 43210",
            status: "Active",
        },
        {
            id: 2,
            fullName: "Sneha Kapoor",
            userName: "snehak",
            role: "Manager",
            email: "sneha.kapoor@example.com",
            mobile: "+91 99880 11223",
            status: "Active",
        },
        {
            id: 3,
            fullName: "Ravi Sharma",
            userName: "ravis",
            role: "Sales",
            email: "ravi.sharma@example.com",
            mobile: "+91 98123 45678",
            status: "Inactive",
        },
        {
            id: 4,
            fullName: "Priya Nair",
            userName: "priyan",
            role: "Support",
            email: "priya.nair@example.com",
            mobile: "+91 98220 33445",
            status: "Active",
        },
        {
            id: 5,
            fullName: "Karan Patel",
            userName: "karanp",
            role: "Developer",
            email: "karan.patel@example.com",
            mobile: "+91 97777 22334",
            status: "Inactive",
        },
    ])

    // Get role badge color
    const getRoleBadgeColor = (role) => {
        switch(role) {
            case 'Admin': return 'bg-red-100 text-red-700 border-red-200'
            case 'Manager': return 'bg-purple-100 text-purple-700 border-purple-200'
            case 'Sales': return 'bg-blue-100 text-blue-700 border-blue-200'
            case 'Support': return 'bg-green-100 text-green-700 border-green-200'
            case 'Developer': return 'bg-orange-100 text-orange-700 border-orange-200'
            default: return 'bg-gray-100 text-gray-700 border-gray-200'
        }
    }

    // Calculate stats
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.status === 'Active').length;
    const inactiveUsers = users.filter(u => u.status === 'Inactive').length;

    // If showing add form, render it instead of the list
    if (showAddForm) {
        return (
            <Container>
                <div className="mb-4">
                    <button 
                        onClick={() => setShowAddForm(false)}
                        className="flex gap-2 items-center text-gray-600 hover:text-gray-800 transition"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-sans font-medium">Back to User List</span>
                    </button>
                </div>
                <UserAddForm />
            </Container>
        );
    }

    return (
        <Container>
            <Heading value="User Management" />

            {/* Stats Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                <div className='bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-blue-500 p-3 rounded-lg'>
                            <UsersIcon size={24} className='text-white' />
                        </div>
                        <div>
                            <p className='text-sm font-medium text-blue-700'>Total Users</p>
                            <p className='text-2xl font-bold text-blue-900'>{totalUsers}</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-green-500 p-3 rounded-lg'>
                            <UserCheck size={24} className='text-white' />
                        </div>
                        <div>
                            <p className='text-sm font-medium text-green-700'>Active Users</p>
                            <p className='text-2xl font-bold text-green-900'>{activeUsers}</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-red-500 p-3 rounded-lg'>
                            <UserX size={24} className='text-white' />
                        </div>
                        <div>
                            <p className='text-sm font-medium text-red-700'>Inactive Users</p>
                            <p className='text-2xl font-bold text-red-900'>{inactiveUsers}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Actions */}
            <div className='py-5 flex justify-between items-center gap-4 flex-wrap'>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setsearchInput(e.target.value)}
                    className="border rounded-3xl py-2 px-4 border-gray-400 w-full md:w-1/2 font-sans outline-none focus:border-blue-500 transition"
                    placeholder="Search username, email, mobile"
                />
                <div className='flex gap-3'>
                    <button className='flex gap-2 items-center border border-gray-400 py-2 px-4 rounded-3xl hover:bg-gray-100 transition cursor-pointer'>
                        <ListFilter size={18} />
                        <span className='font-sans font-semibold text-sm'>Sort by</span>
                    </button>
                    <button 
                        onClick={() => setShowAddForm(true)}
                        className='flex gap-2 items-center py-2 px-4 rounded-3xl bg-black hover:bg-gray-800 transition cursor-pointer'
                    >
                        <Plus size={18} color='white' />
                        <span className='font-sans font-semibold text-sm text-white'>Add User</span>
                    </button>
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto font-sans">
                <div className="min-w-[1000px] border border-gray-200 rounded-lg shadow-sm bg-white">
                    {/* Header */}
                    <div className="flex w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
                        <div className="w-[20%] p-4 text-left">User</div>
                        <div className="w-[12%] p-4 text-left">Role</div>
                        <div className="w-[25%] p-4 text-left">Email</div>
                        <div className="w-[18%] p-4 text-left">Mobile</div>
                        <div className="w-[10%] p-4 text-center">Status</div>
                        <div className="w-[15%] p-4 text-center">Actions</div>
                    </div>

                    {/* Body */}
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="flex w-full items-center text-sm border-b border-gray-100 text-gray-700 hover:bg-blue-50 transition-colors"
                        >
                            {/* User Info */}
                            <div className="w-[20%] p-4">
                                <div>
                                    <p className='font-semibold text-gray-900'>{user.fullName}</p>
                                    <p className='text-xs text-gray-500'>@{user.userName}</p>
                                </div>
                            </div>

                            {/* Role Badge */}
                            <div className="w-[12%] p-4">
                                <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${getRoleBadgeColor(user.role)}`}>
                                    {user.role}
                                </span>
                            </div>

                            {/* Email */}
                            <div className="w-[25%] p-4">
                                <div className='flex items-center gap-2 text-gray-700'>
                                    <Mail size={14} className='text-gray-400' />
                                    <span className='truncate text-sm'>{user.email}</span>
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="w-[18%] p-4">
                                <div className='flex items-center gap-2 text-gray-700'>
                                    <Phone size={14} className='text-gray-400' />
                                    <span className='text-sm'>{user.mobile}</span>
                                </div>
                            </div>

                            {/* Status */}
                            <div className="w-[10%] p-4 text-center">
                                <span
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${user.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {user.status}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="w-[15%] p-4">
                                <div className='flex items-center justify-center gap-2'>
                                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                                        <Edit2 size={16} />
                                    </button>
                                    <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Container>
    )
}

export default UserList
import Heading from '../../../components/common/Heading'
import Container from '../../../components/common/Container'
import { useState } from 'react';
import { ListFilter } from 'lucide-react';

const UserList = () => {
    const [searchInput, setsearchInput] = useState("");
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
    return (
        <Container>
            <Heading value="User Managment" />

            <div className='py-5 flex justify-between'>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setsearchInput(e.target.value)}
                    className="border rounded-3xl py-2 px-4 border-gray-400 w-1/2 font-sans font-normal outline-none focus:border-blue-500 transition"
                    placeholder="Search username,email,mobile"
                />
                <button className='flex gap-2 items-center border border-gray-400 py-2 px-4 rounded-4xl'>
                    <span><ListFilter /></span> <span className='font-sans font-semibold text-sm'> Sort by</span>
                </button>
            </div>

            <div className="overflow-x-auto font-sans">
                <div className="min-w-[1000px] border border-gray-200 rounded-lg shadow-sm">
                    {/* Header */}
                    <div className="flex w-full bg-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
                        <div className="w-[5%] p-3 text-center">#</div>
                        <div className="w-[15%] p-3 text-left">Full Name</div>
                        <div className="w-[15%] p-3 text-left">User Name</div>
                        <div className="w-[10%] p-3 text-left">Role</div>
                        <div className="w-[20%] p-3 text-left">Email</div>
                        <div className="w-[15%] p-3 text-left">Mobile</div>
                        <div className="w-[10%] p-3 text-center">Status</div>
                        <div className="w-[10%] p-3 text-center">Action</div>
                    </div>

                    {/* Body */}
                    {users.map((user, index) => (
                        <div
                            key={user.id}
                            className={`flex w-full items-center text-sm border-b border-gray-200 text-gray-700 hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                        >
                            <div className="w-[5%] p-3 text-center text-gray-500">
                                {index + 1}
                            </div>
                            <div className="w-[15%] p-3 font-medium text-gray-900">
                                {user.fullName}
                            </div>
                            <div className="w-[15%] p-3 text-gray-600">
                                {user.userName}
                            </div>
                            <div className="w-[10%] p-3 font-medium text-gray-800">
                                {user.role}
                            </div>
                            <div className="w-[20%] p-3 text-gray-700 truncate">
                                {user.email}
                            </div>
                            <div className="w-[15%] p-3 text-gray-700">
                                {user.mobile}
                            </div>
                            <div className="w-[10%] p-3 text-center">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {user.status}
                                </span>
                            </div>
                            <div className="w-[10%] p-3 text-center">
                                <button className="text-blue-600 hover:text-blue-800 font-medium transition">
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>




        </Container>
    )
}

export default UserList
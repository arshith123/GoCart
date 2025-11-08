import { Eye } from 'lucide-react'
import React from 'react'
import { CONSTANT_IMAGES } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/admin/dashboard")
    }
    return (
        <div className="flex h-screen">
            {/* Left side: Blue background */}
            <div
                className="w-2/5 hidden md:flex flex-col text-white p-10 space-y-8"
                style={{ backgroundColor: '#1976d2' }}
            >
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src={CONSTANT_IMAGES.WebLogo} className="w-16" alt="WebLogo" />
                    <h1 className="text-5xl font-bold font-heading">GoCart</h1>
                </div>

                {/* Welcome message */}
                <h2 className="text-2xl font-semi-bold font-heading">Welcome Back!</h2>
                <p className="text-white/80 font-sans font-medium">
                    Manage your store, track orders, and control products easily.
                </p>

                {/* E-commerce related illustrations / icons */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className=" bg-white/30 p-3  rounded-full">
                            <img src={CONSTANT_IMAGES.ManageProducts} className='w-[35px] h-[35px]' alt="manage-products" />
                        </div>
                        <p className="text-white font-medium">Manage Products</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/30 p-3 rounded-full">📦</div>
                        <p className="text-white font-medium">Track Orders</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/30 p-3 rounded-full">💳</div>
                        <p className="text-white font-medium">Manage Payments</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/30 p-3 rounded-full">📊</div>
                        <p className="text-white font-medium">View Reports</p>
                    </div>
                </div>

                {/* Optional tip / tagline */}
                <div className="mt-auto">
                    <p className="text-white/70 italic">
                        “Your e-commerce hub, all in one place.”
                    </p>
                </div>
            </div>


            {/* Right side: Login form */}
            <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-4xl font-bold mb-6 text-center font-heading ">Welcome to Login</h1>
                    <form>
                        <div className="flex flex-col gap-5">
                            {/* Username */}
                            <div className="flex flex-col gap-2">
                                <label className="font-medium">User Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter User Name here"
                                    className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2 relative">
                                <label className="font-medium">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Password here"
                                    className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <Eye className="absolute right-4 top-[41px] cursor-pointer text-gray-500" size={20} />
                            </div>

                            {/* Login button */}
                            <button
                                onClick={handleLogin}
                                className="bg-green-600 px-10 py-2 text-white font-semibold rounded hover:bg-green-700 hover:scale-105 transition cursor-pointer mt-2">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin

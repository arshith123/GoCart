import { ClipboardMinus, Eye, HandCoins, ShoppingBasket, ShoppingCart } from 'lucide-react'
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
                style={{ background: "linear-gradient(135deg, #5B21B6, #9333EA)" }}
            >
                {/* Logo */}
                <div className="flex items-center ">
                    <img src={CONSTANT_IMAGES.WebLogo} className="w-20" alt="WebLogo" />
                    <h1 className="text-5xl font-bold font-heading">GoCart</h1>
                </div>

                {/* Welcome message */}
                <h2 className="text-4xl font-semi-bold font-heading">Welcome Back!</h2>
                <p className="text-white/80 font-sans font-medium">
                    Manage your store, track orders, and control products easily.
                </p>

                {/* E-commerce related illustrations / icons */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className=" bg-white/30 p-3  rounded-full">
                            <ShoppingBasket />
                        </div>
                        <p className="text-white font-sans font-regular text-sm">Manage Products</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/30 p-3 rounded-full"><ShoppingCart /></div>
                        <p className="text-white font-sans font-regular text-sm">Track Orders</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/30 p-3 rounded-full"><HandCoins /></div>
                        <p className="text-white font-sans font-regular text-sm">Manage Payments</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/30 p-3 rounded-full"><ClipboardMinus /></div>
                        <p className="text-white  font-sans font-regular text-sm">View Reports</p>
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
            <div className="flex-1 flex items-center justify-center bg-cover bg-no-repeat 100 p-6" style={{ backgroundImage: `url(${CONSTANT_IMAGES.bgImgLogin})` }}>
                <div className="bg-white py-10 px-5 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-4xl font-bold mb-6 text-center font-heading ">Welcome to Login</h1>
                    <form autoComplete='off'>
                        <div className="flex flex-col gap-5">
                            {/* Username */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-600 font-sans font-regular text-md">Email</label>
                                <input
                                    id='email'
                                    type="text"
                                    placeholder="Enter email here"
                                    className="p-4 border font-sans text-sm border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2 relative">
                                <label className="text-gray-600 font-sans font-regular text-md">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password here"
                                    className="p-4 border font-sans text-sm border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <Eye className="absolute right-4 top-[46px] cursor-pointer text-gray-500" size={20} />
                            </div>

                            {/* Login button */}
                            <button
                                onClick={handleLogin}
                                style={{ background: "linear-gradient(135deg, #5B21B6, #9333EA)" }}
                                className="px-10 py-4 text-white font-semibold rounded-md hover:bg-linear-to-r hover:from-purple-700 hover:to-indigo-500 transition cursor-pointer mt-4"
                            >
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

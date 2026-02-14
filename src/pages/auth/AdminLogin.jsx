import { ClipboardMinus, Eye, EyeOff, HandCoins, ShoppingBasket, ShoppingCart } from 'lucide-react'
import { CONSTANT_IMAGES } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AdminLogin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/admin/dashboard")
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    return (
        <div className="flex h-screen">
            {/* Left side: Purple gradient background */}
            <div
                className="w-2/5 hidden lg:flex flex-col text-white p-12 space-y-8 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #5B21B6, #9333EA, #7C3AED)" }}
            >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Logo */}
                <div className="flex items-center gap-3 relative z-10">
                    <img src={CONSTANT_IMAGES.WebLogo} className="w-20" alt="WebLogo" />
                    <h1 className="text-5xl font-bold font-heading">GoCart</h1>
                </div>

                {/* Welcome message */}
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold font-heading mb-3">Welcome Back!</h2>
                    <p className="text-white/90 font-sans text-lg">
                        Manage your store, track orders, and control products easily.
                    </p>
                </div>

                {/* E-commerce features */}
                <div className="flex flex-col gap-5 relative z-10">
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-all shadow-lg">
                            <ShoppingBasket size={24} />
                        </div>
                        <p className="text-white font-sans font-medium">Manage Products</p>
                    </div>
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-all shadow-lg">
                            <ShoppingCart size={24} />
                        </div>
                        <p className="text-white font-sans font-medium">Track Orders</p>
                    </div>
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-all shadow-lg">
                            <HandCoins size={24} />
                        </div>
                        <p className="text-white font-sans font-medium">Manage Payments</p>
                    </div>
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-all shadow-lg">
                            <ClipboardMinus size={24} />
                        </div>
                        <p className="text-white font-sans font-medium">View Reports</p>
                    </div>
                </div>

                {/* Tagline */}
                <div className="mt-auto relative z-10">
                    <p className="text-white/80 italic text-lg font-sans">
                        "Your e-commerce hub, all in one place."
                    </p>
                </div>
            </div>


            {/* Right side: Login form */}
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <div className="bg-white py-10 px-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
                    {/* Mobile logo */}
                    <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
                        <img src={CONSTANT_IMAGES.WebLogo} className="w-12" alt="WebLogo" />
                        <h1 className="text-3xl font-bold font-heading bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">GoCart</h1>
                    </div>

                    <h1 className="text-3xl font-bold mb-2 text-center font-heading text-gray-800">Welcome Back</h1>
                    <p className="text-center text-gray-500 mb-8 font-sans">Sign in to your admin account</p>
                    
                    <form onSubmit={handleLogin} autoComplete='off'>
                        <div className="flex flex-col gap-5">
                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-sans font-medium text-sm">Email Address</label>
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="admin@example.com"
                                    className="p-4 border font-sans text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-sans font-medium text-sm">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        className="w-full p-4 pr-12 border font-sans text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember me & Forgot password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                                    />
                                    <span className="text-sm text-gray-600 font-sans">Remember me</span>
                                </label>
                                <button
                                    type="button"
                                    className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Login button */}
                            <button
                                type="submit"
                                className="w-full px-10 py-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-2"
                            >
                                Sign In
                            </button>

                            {/* Signup link */}
                            <p className="text-center text-sm text-gray-600 font-sans mt-2">
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => navigate('/admin/signup')}
                                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin

import { ClipboardMinus, Eye, EyeOff, HandCoins, ShoppingBasket, ShoppingCart, User, Mail, Lock, Building } from 'lucide-react'
import { CONSTANT_IMAGES } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AdminSignup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        storeName: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleSignup = (e) => {
        e.preventDefault();
        // Add validation logic here
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!formData.agreeToTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }
        // Navigate to dashboard after successful signup
        navigate("/dashboard")
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
                    <h2 className="text-4xl font-bold font-heading mb-3">Start Your Journey!</h2>
                    <p className="text-white/90 font-sans text-lg">
                        Create your admin account and start managing your e-commerce store today.
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


            {/* Right side: Signup form */}
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 overflow-y-auto">
                <div className="bg-white py-10 px-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 my-6">
                    {/* Mobile logo */}
                    <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
                        <img src={CONSTANT_IMAGES.WebLogo} className="w-12" alt="WebLogo" />
                        <h1 className="text-3xl font-bold font-heading bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">GoCart</h1>
                    </div>

                    <h1 className="text-3xl font-bold mb-2 text-center font-heading text-gray-800">Create Account</h1>
                    <p className="text-center text-gray-500 mb-6 font-sans">Sign up for your admin account</p>
                    
                    <form onSubmit={handleSignup} autoComplete='off'>
                        <div className="flex flex-col gap-4">
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-sans font-medium text-sm">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        name='fullName'
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="w-full p-4 pl-12 border font-sans text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-sans font-medium text-sm">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        name='email'
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="admin@example.com"
                                        className="w-full p-4 pl-12 border font-sans text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Store Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-sans font-medium text-sm">Store Name</label>
                                <div className="relative">
                                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        name='storeName'
                                        type="text"
                                        value={formData.storeName}
                                        onChange={handleInputChange}
                                        placeholder="My Store"
                                        className="w-full p-4 pl-12 border font-sans text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-sans font-medium text-sm">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Create a strong password"
                                        className="w-full p-4 pl-12 pr-12 border font-sans text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-sans font-medium text-sm">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name='confirmPassword'
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm your password"
                                        className="w-full p-4 pl-12 pr-12 border font-sans text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <label className="flex items-start gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 mt-1 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                                    required
                                />
                                <span className="text-sm text-gray-600 font-sans">
                                    I agree to the{' '}
                                    <button type="button" className="text-purple-600 hover:text-purple-700 font-medium">
                                        Terms and Conditions
                                    </button>
                                    {' '}and{' '}
                                    <button type="button" className="text-purple-600 hover:text-purple-700 font-medium">
                                        Privacy Policy
                                    </button>
                                </span>
                            </label>

                            {/* Signup button */}
                            <button
                                type="submit"
                                className="w-full px-10 py-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-2"
                            >
                                Create Account
                            </button>

                            {/* Login link */}
                            <p className="text-center text-sm text-gray-600 font-sans">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => navigate('/login')}
                                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                                >
                                    Sign In
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminSignup

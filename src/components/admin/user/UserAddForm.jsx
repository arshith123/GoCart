import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const UserAddForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        role: 'Staff',
        gender: 'Male',
        status: 'active',
        address: '',
        profileImage: null
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                profileImage: file
            }));
            
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be added later
        console.log('User Form Data:', formData);
    };

    return (
        <div className='w-full'>
            <h3 className='text-2xl font-heading font-semibold mb-6'>Add New User</h3>
            
            <form onSubmit={handleSubmit}>
                {/* Basic Information Section */}
                <div className='mb-6'>
                    <h4 className='text-lg font-heading font-medium mb-4'>Basic Information</h4>
                    <div className='grid grid-cols-2 gap-6'>
                        {/* Full Name */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Full Name <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="e.g., John Doe"
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            />
                        </div>

                        {/* Username */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Username <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                type="text" 
                                name="userName"
                                value={formData.userName}
                                onChange={handleInputChange}
                                placeholder="e.g., johndoe"
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Email <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john.doe@example.com"
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            />
                        </div>

                        {/* Mobile */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Mobile <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                type="tel" 
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="+91 98765 43210"
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Password <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                type="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Confirm Password <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                type="password" 
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Re-enter password"
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            />
                        </div>

                        {/* Role */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Role <span className='text-red-500'>*</span>
                            </label>
                            <select 
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            >
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Staff">Staff</option>
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Developer">Developer</option>
                            </select>
                        </div>

                        {/* Gender */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Gender <span className='text-red-500'>*</span>
                            </label>
                            <select 
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div className='flex flex-col'>
                            <label className='font-sans font-medium text-sm mb-1'>
                                Status <span className='text-red-500'>*</span>
                            </label>
                            <select 
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                required
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>

                    {/* Address - Full Width */}
                    <div className='flex flex-col mt-6'>
                        <label className='font-sans font-medium text-sm mb-1'>
                            Address
                        </label>
                        <textarea 
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Enter full address..."
                            rows="3"
                            className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                        />
                        <span className='text-xs text-gray-500 mt-1'>Optional user address</span>
                    </div>
                </div>

                {/* Profile Image Section */}
                <div className='mb-6'>
                    <h4 className='text-lg font-heading font-medium mb-4'>Profile Image</h4>
                    <div className='border border-dashed border-gray-400 rounded-md p-6 flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer'>
                        <input 
                            type="file" 
                            accept='image/*' 
                            className='hidden' 
                            id='userProfileUpload'
                            onChange={handleImageChange}
                        />
                        <label htmlFor='userProfileUpload' className='cursor-pointer flex flex-col items-center w-full'>
                            {imagePreview ? (
                                <div className='relative'>
                                    <img 
                                        src={imagePreview} 
                                        alt="Profile preview" 
                                        className='w-32 h-32 rounded-full object-cover border-4 border-white shadow-md'
                                    />
                                    <p className="text-gray-600 text-sm font-sans mt-3">Click to change image</p>
                                </div>
                            ) : (
                                <>
                                    <Plus width={40} height={40} className='text-gray-500 mb-3' />
                                    <p className="text-gray-600 text-sm font-sans">Click to Upload or drag file here</p>
                                    <p className="text-gray-400 text-xs font-sans mt-1">Recommended: Square format, JPG or PNG</p>
                                </>
                            )}
                        </label>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-4 justify-end mt-8'>
                    <button 
                        type="button"
                        className='px-6 py-3 border border-gray-300 rounded-sm font-sans font-medium text-sm hover:bg-gray-50 transition'
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        className='px-6 py-3 bg-blue-600 text-white rounded-sm font-sans font-medium text-sm hover:bg-blue-700 transition'
                    >
                        Save User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserAddForm;
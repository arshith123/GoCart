import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const CategoryAdd = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    slug: '',
    parentCategory: '',
    status: 'active',
    sortOrder: 0,
    image: null
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
        image: file
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
    console.log('Form Data:', formData);
  };

  return (
    <div className='w-full'>
      <h3 className='text-2xl font-heading font-semibold mb-6'>Add New Category</h3>
      
      <form onSubmit={handleSubmit}>
        {/* Basic Information Section */}
        <div className='mb-6'>
          <h4 className='text-lg font-heading font-medium mb-4'>Basic Information</h4>
          <div className='grid grid-cols-2 gap-6'>
            {/* Category Name */}
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm mb-1'>
                Category Name <span className='text-red-500'>*</span>
              </label>
              <input 
                type="text" 
                name="categoryName"
                value={formData.categoryName}
                onChange={handleInputChange}
                placeholder="e.g., Electronics, Mobile Phones"
                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
              />
            </div>

            {/* Slug */}
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm mb-1'>
                Slug <span className='text-red-500'>*</span>
              </label>
              <input 
                type="text" 
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                placeholder="e.g., electronics, mobile-phones"
                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
              />
              <span className='text-xs text-gray-500 mt-1'>URL-friendly name (lowercase, hyphens allowed)</span>
            </div>

            {/* Parent Category */}
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm mb-1'>
                Parent Category
              </label>
              <select 
                name="parentCategory"
                value={formData.parentCategory}
                onChange={handleInputChange}
                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value="">None (Main Category)</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home-appliances">Home Appliances</option>
                {/* More categories will be loaded dynamically */}
              </select>
              <span className='text-xs text-gray-500 mt-1'>Leave as "None" for main category</span>
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

            {/* Sort Order / Priority */}
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm mb-1'>
                Sort Order / Priority
              </label>
              <input 
                type="number" 
                name="sortOrder"
                value={formData.sortOrder}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <span className='text-xs text-gray-500 mt-1'>Lower numbers appear first in menu</span>
            </div>
          </div>
        </div>

        {/* Category Image Section */}
        <div className='mb-6'>
          <h4 className='text-lg font-heading font-medium mb-4'>Category Image / Icon</h4>
          <div className='border border-dashed border-gray-400 rounded-md p-6 flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer'>
            <input 
              type="file" 
              accept='image/*' 
              className='hidden' 
              id='categoryImageUpload'
              onChange={handleImageChange}
            />
            <label htmlFor='categoryImageUpload' className='cursor-pointer flex flex-col items-center w-full'>
              {imagePreview ? (
                <div className='relative'>
                  <img 
                    src={imagePreview} 
                    alt="Category preview" 
                    className='max-h-48 rounded-md object-cover'
                  />
                  <p className="text-gray-600 text-sm font-sans mt-3">Click to change image</p>
                </div>
              ) : (
                <>
                  <Plus width={40} height={40} className='text-gray-500 mb-3' />
                  <p className="text-gray-600 text-sm font-sans">Click to Upload or drag file here</p>
                  <p className="text-gray-400 text-xs font-sans mt-1">Recommended: 512x512px, PNG or JPG</p>
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
            Save Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryAdd;

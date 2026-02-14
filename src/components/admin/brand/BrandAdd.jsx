import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const BrandAdd = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    brandDescription: '',
    featuredBrand: 'no',
    sortOrder: 0,
    websiteUrl: '',
    logo: null
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        logo: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Brand Form Data:', formData);
  };

  return (
    <div className='w-full'>
      <h3 className='text-2xl font-heading font-semibold mb-6'>Add New Brand</h3>
      
      <form onSubmit={handleSubmit}>
        {/* Basic Information Section */}
        <div className='mb-6'>
          <h4 className='text-lg font-heading font-medium mb-4'>Basic Information</h4>
          <div className='grid grid-cols-2 gap-6'>
            {/* Brand Name */}
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm mb-1'>
                Brand Name <span className='text-red-500'>*</span>
              </label>
              <input 
                type="text" 
                name="brandName"
                value={formData.brandName}
                onChange={handleInputChange}
                placeholder="e.g., Apple, Samsung, Nike"
                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
              />
            </div>

            {/* Website URL */}
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm mb-1'>
                Website URL
              </label>
              <input 
                type="url" 
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                placeholder="https://www.example.com"
                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <span className='text-xs text-gray-500 mt-1'>Official brand website (optional)</span>
            </div>

            {/* Featured Brand */}
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm mb-1'>
                Featured Brand <span className='text-red-500'>*</span>
              </label>
              <select 
                name="featuredBrand"
                value={formData.featuredBrand}
                onChange={handleInputChange}
                className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              <span className='text-xs text-gray-500 mt-1'>Display on homepage or featured section</span>
            </div>

            {/* Sort Order */}
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
              <span className='text-xs text-gray-500 mt-1'>Lower numbers appear first</span>
            </div>
          </div>

          {/* Brand Description - Full Width */}
          <div className='flex flex-col mt-6'>
            <label className='font-sans font-medium text-sm mb-1'>
              Brand Description
            </label>
            <textarea 
              name="brandDescription"
              value={formData.brandDescription}
              onChange={handleInputChange}
              placeholder="Enter a brief description about the brand..."
              rows="4"
              className='border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
            />
            <span className='text-xs text-gray-500 mt-1'>Optional brand information or tagline</span>
          </div>
        </div>

        {/* Brand Logo Section */}
        <div className='mb-6'>
          <h4 className='text-lg font-heading font-medium mb-4'>Brand Logo</h4>
          <div className='border border-dashed border-gray-400 rounded-md p-6 flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer'>
            <input 
              type="file" 
              accept='image/*' 
              className='hidden' 
              id='brandLogoUpload'
              onChange={handleLogoChange}
            />
            <label htmlFor='brandLogoUpload' className='cursor-pointer flex flex-col items-center w-full'>
              {logoPreview ? (
                <div className='relative'>
                  <img 
                    src={logoPreview} 
                    alt="Brand logo preview" 
                    className='max-h-48 rounded-md object-contain bg-white p-4'
                  />
                  <p className="text-gray-600 text-sm font-sans mt-3">Click to change logo</p>
                </div>
              ) : (
                <>
                  <Plus width={40} height={40} className='text-gray-500 mb-3' />
                  <p className="text-gray-600 text-sm font-sans">Click to Upload or drag file here</p>
                  <p className="text-gray-400 text-xs font-sans mt-1">Recommended: Square format (512x512px), PNG with transparent background</p>
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
            Save Brand
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandAdd;

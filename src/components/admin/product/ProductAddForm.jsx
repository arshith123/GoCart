import React from 'react';
import { Tabs } from 'antd';
import { BRAND, CATEGORY, SUB_CATEGORY, TAX, UOM } from '../../../assets/constant';
import { Plus } from 'lucide-react';

const ProductAddForm = () => {
  return (
    <Tabs defaultActiveKey="1">
      {/* Basic Details */}
      <Tabs.TabPane tab="Basic Details" key="1">
        <div className='first w-full'>
          <h3 className='text-2xl font-heading font-semibold mb-2'>Basic Details</h3>
          <div className='row grid grid-cols-4 gap-6'>
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm'>Product name</label>
              <input type="text" className='border border-gray-300 p-3 rounded-sm' />
            </div>
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm'>SKU / Product Code</label>
              <input type="text" className='border border-gray-300 p-3 rounded-sm' />
            </div>
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm'>Category</label>
              <select className='border border-gray-300 p-3 rounded-sm'>
                {CATEGORY.map((category, index) => (
                  <option key={index}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm'>Sub-Category</label>
              <select className='border border-gray-300 p-3 rounded-sm'>
                {SUB_CATEGORY.map((sub_category, index) => (
                  <option key={index}>{sub_category.name}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm'>Brand</label>
              <select className='border border-gray-300 p-3 rounded-sm'>
                {BRAND.map((brand, index) => (
                  <option key={index}>{brand.name}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='font-sans font-medium text-sm'>Uom</label>
              <select className='border border-gray-300 p-3 rounded-sm'>
                {UOM.map((uom, index) => (
                  <option key={index}>{uom.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* description input  */}
          <div className='flex flex-col mt-2 mb-2'>
            <label className='font-sans font-medium text-sm'>Description</label>
            <textarea type="text" className='border border-gray-300 p-3 rounded-sm' />
          </div>
        </div>
      </Tabs.TabPane>

      {/* Pricing */}
      <Tabs.TabPane tab="Pricing" key="2">
        <div className='grid grid-cols-4 gap-6'>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>MRP / Original Price</label>
            <input type="text" className='border border-gray-300 p-3 rounded-sm' />
          </div>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Selling Price</label>
            <input type="text" className='border border-gray-300 p-3 rounded-sm' />
          </div>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Discount (%)</label>
            <input type="text" className='border border-gray-300 p-3 rounded-sm' />
          </div>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Tax</label>
            <select className='border border-gray-300 p-3 rounded-sm'>
              {TAX.map((tax, index) => (
                <option key={index}>{tax.name}</option>
              ))}
            </select>
          </div>
        </div>
      </Tabs.TabPane>

      {/* Inventory & Variants */}
      <Tabs.TabPane tab="Inventory & Variants" key="3">
        <h3 className='text-2xl font-heading font-semibold mb-2'>Inventory</h3>
        <div className='grid grid-cols-4 gap-6'>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Stock Quantity</label>
            <input type="number" className='border border-gray-300 p-3 rounded-sm' />
          </div>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Low Stock Alert</label>
            <input type="number" className='border border-gray-300 p-3 rounded-sm' />
          </div>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Track Inventory</label>
            <select className='border border-gray-300 p-3 rounded-sm'>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <h3 className='text-2xl font-heading font-semibold mb-2 mt-4'>Variants</h3>
        <div className='grid grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Variant Name</label>
            <input type="text" className='border border-gray-300 p-3 rounded-sm' />
          </div>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Additional Price</label>
            <input type="number" className='border border-gray-300 p-3 rounded-sm' />
          </div>
          <div className='flex flex-col'>
            <label className='font-sans font-medium text-sm'>Variant SKU</label>
            <input type="text" className='border border-gray-300 p-3 rounded-sm' />
          </div>
        </div>
      </Tabs.TabPane>

      {/* Media */}
      <Tabs.TabPane tab="Media" key="4">
        <div className='second w-full'>
          <h3 className='text-2xl font-heading font-semibold mb-2'>Media</h3>
          <div className='border border-dashed border-gray-400 rounded-md p-6 flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer'>
            <input type="file" accept='image/*' className='hidden' id='imageUpload' />
            <label htmlFor='imageUpload' className='cursor-pointer flex flex-col items-center'>
              <Plus width={40} height={40} className=' text-gray-500 mb-3' />
              <p className="text-gray-600 text-sm font-sans">Click to Upload or drag file here</p>
            </label>
          </div>
        </div>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default ProductAddForm;

import  { useState } from 'react';
import Container from '../../../components/common/Container';
import Heading from '../../../components/common/Heading';
import { ListFilter, Plus, ArrowLeft, Edit2, Trash2, Tag, TagIcon, XCircle } from "lucide-react";
import BrandAdd from '../../../components/admin/brand/BrandAdd';

const BrandList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // ✅ Brand Dummy Data
  const [brands, setBrands] = useState([
    { id: 1, name: "Samsung", status: "active" },
    { id: 2, name: "Nike", status: "active" },
    { id: 3, name: "Adidas", status: "inactive" },
    { id: 4, name: "Apple", status: "active" },
    { id: 5, name: "Sony", status: "active" },
  ]);

  // Calculate stats
  const totalBrands = brands.length;
  const activeBrands = brands.filter(b => b.status === 'active').length;
  const inactiveBrands = brands.filter(b => b.status === 'inactive').length;

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
            <span className="font-sans font-medium">Back to Brand List</span>
          </button>
        </div>
        <BrandAdd />
      </Container>
    );
  }

  return (
    <Container>
      <Heading value="Manage Brands" />

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <div className='bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-3'>
            <div className='bg-purple-500 p-3 rounded-lg'>
              <Tag size={24} className='text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-purple-700'>Total Brands</p>
              <p className='text-2xl font-bold text-purple-900'>{totalBrands}</p>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-3'>
            <div className='bg-green-500 p-3 rounded-lg'>
              <TagIcon size={24} className='text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-green-700'>Active Brands</p>
              <p className='text-2xl font-bold text-green-900'>{activeBrands}</p>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-3'>
            <div className='bg-red-500 p-3 rounded-lg'>
              <XCircle size={24} className='text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-red-700'>Inactive Brands</p>
              <p className='text-2xl font-bold text-red-900'>{inactiveBrands}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="py-5 flex justify-between items-center gap-4 flex-wrap">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border rounded-3xl py-2 px-4 border-gray-400 w-full md:w-1/2 font-sans outline-none focus:border-blue-500 transition"
          placeholder="Search Brands"
        />

        <div className="flex gap-3">
          <button className="flex gap-2 items-center border border-gray-400 py-2 px-4 rounded-3xl hover:bg-gray-100 transition">
            <ListFilter size={18} />
            <span className="font-sans font-semibold text-sm">Sort by</span>
          </button>

          <button 
            onClick={() => setShowAddForm(true)}
            className="flex gap-2 items-center py-2 px-4 rounded-3xl bg-black hover:bg-gray-800 transition cursor-pointer"
          >
            <Plus size={18} color="white" />
            <span className="font-sans font-semibold text-sm text-white">Add Brand</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto font-sans">
        <div className="min-w-[900px] border border-gray-200 rounded-lg shadow-sm bg-white">

          {/* Header */}
          <div className="flex w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
            <div className="w-[50%] p-4">Brand Name</div>
            <div className="w-[25%] p-4 text-center">Status</div>
            <div className="w-[25%] p-4 text-center">Actions</div>
          </div>

          {/* Body */}
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex w-full items-center border-b border-gray-100 text-sm text-gray-700 hover:bg-purple-50 transition-colors"
            >
              <div className="w-[50%] p-4 font-semibold text-gray-900">{brand.name}</div>

              {/* Status Badge */}
              <div className="w-[25%] p-4 flex justify-center">
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    brand.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {brand.status}
                </span>
              </div>

              <div className="w-[25%] p-4">
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
  );
};

export default BrandList;


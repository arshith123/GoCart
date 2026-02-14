import { useState } from 'react';
import Container from '../../../components/common/Container';
import Heading from '../../../components/common/Heading';
import { ListFilter, Plus, ArrowLeft, Edit2, Trash2, FolderOpen, FolderCheck, FolderX } from 'lucide-react';
import CategoryAdd from '../../../components/admin/category/CategoryAdd';

const CategoryList = () => {
  const [searchInput, setsearchInput] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [category, setCategory] = useState([
    { id: 1, name: "Electronics", icon: "💻", status: "active" },
    { id: 2, name: "Clothing", icon: "👕", status: "active" },
    { id: 3, name: "Furniture", icon: "🛋️", status: "inactive" },
  ]);

  // Calculate stats
  const totalCategories = category.length;
  const activeCategories = category.filter(c => c.status === 'active').length;
  const inactiveCategories = category.filter(c => c.status === 'inactive').length;

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
            <span className="font-sans font-medium">Back to Category List</span>
          </button>
        </div>
        <CategoryAdd />
      </Container>
    );
  }

  return (
    <Container>
      <Heading value="Manage Category" />

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <div className='bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-3'>
            <div className='bg-indigo-500 p-3 rounded-lg'>
              <FolderOpen size={24} className='text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-indigo-700'>Total Categories</p>
              <p className='text-2xl font-bold text-indigo-900'>{totalCategories}</p>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-3'>
            <div className='bg-green-500 p-3 rounded-lg'>
              <FolderCheck size={24} className='text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-green-700'>Active Categories</p>
              <p className='text-2xl font-bold text-green-900'>{activeCategories}</p>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-3'>
            <div className='bg-red-500 p-3 rounded-lg'>
              <FolderX size={24} className='text-white' />
            </div>
            <div>
              <p className='text-sm font-medium text-red-700'>Inactive Categories</p>
              <p className='text-2xl font-bold text-red-900'>{inactiveCategories}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="py-5 flex justify-between items-center gap-4 flex-wrap">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          className="border rounded-3xl py-2 px-4 border-gray-400 w-full md:w-1/2 font-sans outline-none focus:border-blue-500 transition"
          placeholder="Search Category"
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
            <span className="font-sans font-semibold text-sm text-white">Add Category</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto font-sans">
        <div className="min-w-[900px] border border-gray-200 rounded-lg shadow-sm bg-white">

          {/* Header */}
          <div className="flex w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
            <div className="w-[40%] p-4">Category Name</div>
            <div className="w-[15%] p-4">Icon</div>
            <div className="w-[20%] p-4 text-center">Status</div>
            <div className="w-[25%] p-4 text-center">Actions</div>
          </div>

          {/* Body */}
          {category.map((cat) => (
            <div
              key={cat.id}
              className="flex w-full items-center border-b border-gray-100 text-sm text-gray-700 hover:bg-indigo-50 transition-colors"
            >
              <div className="w-[40%] p-4 font-semibold text-gray-900">{cat.name}</div>

              <div className="w-[15%] p-4 text-2xl">{cat.icon}</div>

              {/* status badge */}
              <div className="w-[20%] p-4 flex justify-center">
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    cat.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {cat.status}
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

export default CategoryList;

import React, { useState, useRef, useEffect } from 'react'
import Container from '../../../components/common/Container'
import { ListFilter, Plus, ArrowLeft, Edit2, Trash2, Package, PackageCheck, AlertTriangle, ChevronDown, Check } from 'lucide-react'
import Heading from '../../../components/common/Heading'
import ProductAddForm from '../../../components/admin/product/ProductAddForm';

const ProductList = () => {
    const [searchInput, setsearchInput] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [sortBy, setSortBy] = useState('name-asc');
    const sortDropdownRef = useRef(null);

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Wireless Mouse",
            sku: "WM-001",
            price: 799,
            stock: 120,
            status: "Active",
        },
        {
            id: 2,
            name: "Mechanical Keyboard",
            sku: "MK-234",
            price: 2999,
            stock: 45,
            status: "Active",
        },
        {
            id: 3,
            name: "USB-C Hub",
            sku: "UH-456",
            price: 1499,
            stock: 32,
            status: "Inactive",
        },
        {
            id: 4,
            name: "Bluetooth Speaker",
            sku: "BS-789",
            price: 2199,
            stock: 10,
            status: "Active",
        },
        {
            id: 5,
            name: "Laptop Stand",
            sku: "LS-102",
            price: 999,
            stock: 0,
            status: "Inactive",
        },
    ])

    // Sort options
    const sortOptions = [
        { value: 'name-asc', label: 'Name (A-Z)' },
        { value: 'name-desc', label: 'Name (Z-A)' },
        { value: 'price-asc', label: 'Price (Low to High)' },
        { value: 'price-desc', label: 'Price (High to Low)' },
        { value: 'stock-asc', label: 'Stock (Low to High)' },
        { value: 'stock-desc', label: 'Stock (High to Low)' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setShowSortDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Sort products based on selected option
    const getSortedProducts = () => {
        const sorted = [...products];
        
        switch (sortBy) {
            case 'name-asc':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case 'price-asc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sorted.sort((a, b) => b.price - a.price);
            case 'stock-asc':
                return sorted.sort((a, b) => a.stock - b.stock);
            case 'stock-desc':
                return sorted.sort((a, b) => b.stock - a.stock);
            default:
                return sorted;
        }
    };

    const sortedProducts = getSortedProducts();

    // Calculate stats
    const totalProducts = products.length;
    const activeProducts = products.filter(p => p.status === 'Active').length;
    const lowStockProducts = products.filter(p => p.stock <= 20 && p.stock > 0).length;

    // Handle sort option selection
    const handleSortSelect = (value) => {
        setSortBy(value);
        setShowSortDropdown(false);
    };

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
                        <span className="font-sans font-medium">Back to Product List</span>
                    </button>
                </div>
                <ProductAddForm />
            </Container>
        );
    }

    return (
        <Container>
            <Heading value="Manage Products" />

            {/* Stats Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                <div className='bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-blue-500 p-3 rounded-lg'>
                            <Package size={24} className='text-white' />
                        </div>
                        <div>
                            <p className='text-sm font-medium text-blue-700'>Total Products</p>
                            <p className='text-2xl font-bold text-blue-900'>{totalProducts}</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-green-500 p-3 rounded-lg'>
                            <PackageCheck size={24} className='text-white' />
                        </div>
                        <div>
                            <p className='text-sm font-medium text-green-700'>Active Products</p>
                            <p className='text-2xl font-bold text-green-900'>{activeProducts}</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-orange-500 p-3 rounded-lg'>
                            <AlertTriangle size={24} className='text-white' />
                        </div>
                        <div>
                            <p className='text-sm font-medium text-orange-700'>Low Stock</p>
                            <p className='text-2xl font-bold text-orange-900'>{lowStockProducts}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5 flex justify-between items-center gap-4 flex-wrap'>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setsearchInput(e.target.value)}
                    className="border rounded-3xl py-2 px-4 border-gray-400 w-full md:w-1/2 font-sans outline-none focus:border-blue-500 transition"
                    placeholder="Search product"
                />
                <div className='flex gap-3'>
                    {/* Sort By Dropdown */}
                    <div className="relative" ref={sortDropdownRef}>
                        <button 
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                            className='flex gap-2 items-center border border-gray-400 py-2 px-4 rounded-3xl hover:bg-gray-100 transition'
                        >
                            <ListFilter size={18} />
                            <span className='font-sans font-semibold text-sm'>Sort by</span>
                            <ChevronDown size={16} className={`transition-transform duration-200 ${showSortDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {showSortDropdown && (
                            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden animate-fadeIn">
                                <div className="py-2">
                                    {sortOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleSortSelect(option.value)}
                                            className={`w-full text-left px-4 py-2.5 text-sm font-sans transition-colors flex items-center justify-between ${
                                                sortBy === option.value
                                                    ? 'bg-blue-50 text-blue-700 font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            <span>{option.label}</span>
                                            {sortBy === option.value && (
                                                <Check size={16} className="text-blue-600" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <button 
                        onClick={() => setShowAddForm(true)}
                        className='flex gap-2 items-center py-2 px-4 rounded-3xl bg-black hover:bg-gray-800 transition cursor-pointer'
                    >
                        <Plus size={18} color='white' />
                        <span className='font-sans font-semibold text-sm text-white'>Add Product</span>
                    </button>
                </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto font-sans">
                <div className="min-w-[900px] border border-gray-200 rounded-lg shadow-sm bg-white">
                    {/* Header */}
                    <div className="flex w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
                        <div className="w-[30%] p-4">Product Name</div>
                        <div className="w-[15%] p-4">SKU</div>
                        <div className="w-[15%] p-4 text-right">Price</div>
                        <div className="w-[12%] p-4 text-center">Stock</div>
                        <div className="w-[13%] p-4 text-center">Status</div>
                        <div className="w-[15%] p-4 text-center">Actions</div>
                    </div>

                    {/* Body */}
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="flex w-full items-center border-b border-gray-100 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                        >
                            <div className="w-[30%] p-4 font-semibold text-gray-900">{product.name}</div>
                            <div className="w-[15%] p-4 text-gray-600">{product.sku}</div>
                            <div className="w-[15%] p-4 text-right font-semibold text-gray-900">
                                ₹{product.price.toLocaleString()}
                            </div>
                            <div className="w-[12%] p-4 text-center">
                                <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                                    product.stock > 50 ? 'bg-green-100 text-green-700 border border-green-200' :
                                    product.stock > 20 ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                    product.stock > 0 ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                                    'bg-red-100 text-red-700 border border-red-200'
                                }`}>
                                    {product.stock} units
                                </span>
                            </div>
                            <div className="w-[13%] p-4 text-center">
                                <span
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${product.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {product.status}
                                </span>
                            </div>
                            <div className="w-[15%] p-4">
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
    )
}

export default ProductList
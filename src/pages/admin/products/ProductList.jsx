import React, { useState } from 'react'
import Container from '../../../components/common/Container'
import { ListFilter, Plus } from 'lucide-react'
import Heading from '../../../components/common/Heading'

const ProductList = () => {
    const [searchInput, setsearchInput] = useState("");
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
    return (
        <Container>
            <Heading value="Manage Products" />

            <div className='py-5 flex justify-between'>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setsearchInput(e.target.value)}
                    className="border rounded-3xl py-2 px-4 border-gray-400 w-1/2 font-sans font-normal outline-none focus:border-blue-500 transition"
                    placeholder="Search product"
                />
                <div className='flex gap-3'>
                    <button className='flex gap-2 items-center border border-gray-400 py-2 px-4 rounded-4xl'>
                        <span><ListFilter /></span> <span className='font-sans font-semibold text-sm'> Sort by</span>
                    </button>
                    <button className='flex gap-2 items-center border border-gray-400 py-2 px-4 rounded-4xl bg-black'>
                        <span><Plus color='white' /></span> <span className='font-sans font-semibold text-sm text-white'> Add Product</span>
                    </button>
                </div>
            </div>

            {/* table item start here */}
            {/* table header  */}
            <div className="overflow-x-auto font-sans">
                <div className="min-w-[900px] border border-gray-200 rounded-lg shadow-sm">
                    {/* Header */}
                    <div className="flex w-full bg-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
                        <div className="w-[5%] p-3 text-center">#</div>
                        <div className="w-[25%] p-3">Product Name</div>
                        <div className="w-[15%] p-3">SKU</div>
                        <div className="w-[15%] p-3 text-right">Price</div>
                        <div className="w-[15%] p-3 text-center">Stock</div>
                        <div className="w-[15%] p-3 text-center">Status</div>
                        <div className="w-[10%] p-3 text-center">Action</div>
                    </div>

                    {/* Body */}
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="flex w-full items-center border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                        >
                            <div className="w-[5%] p-3 text-center text-gray-500">{index + 1}</div>
                            <div className="w-[25%] p-3 font-medium">{product.name}</div>
                            <div className="w-[15%] p-3 text-gray-600">{product.sku}</div>
                            <div className="w-[15%] p-3 text-right font-medium text-gray-800">
                                ₹{product.price.toLocaleString()}
                            </div>
                            <div
                                className={`w-[15%] p-3 text-center font-semibold ${product.stock > 20
                                    ? "text-green-600"
                                    : product.stock > 0
                                        ? "text-yellow-600"
                                        : "text-red-600"
                                    }`}
                            >
                                {product.stock}
                            </div>
                            <div className="w-[15%] p-3 text-center">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${product.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {product.status}
                                </span>
                            </div>
                            <div className="w-[10%] p-3 text-center">
                                <button className="text-blue-600 hover:text-blue-800 font-medium transition">
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* table item end here */}

        </Container>
    )
}

export default ProductList
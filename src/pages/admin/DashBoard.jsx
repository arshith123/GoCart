import React from 'react'
import Container from '../../components/common/Container'
import Heading from '../../components/common/Heading'
import { 
  ShoppingCart, 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  Eye
} from 'lucide-react'

const DashBoard = () => {
  // Stats Data
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹2,45,890',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign size={24} />,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: <ShoppingCart size={24} />,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      title: 'Total Customers',
      value: '892',
      change: '+5.1%',
      trend: 'up',
      icon: <Users size={24} />,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Total Products',
      value: '456',
      change: '-2.4%',
      trend: 'down',
      icon: <Package size={24} />,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    }
  ]

  // Recent Orders
  const recentOrders = [
    { id: '#ORD-001', customer: 'Rahul Sharma', product: 'Wireless Mouse', amount: '₹799', status: 'Delivered', date: '2024-02-14' },
    { id: '#ORD-002', customer: 'Priya Patel', product: 'Mechanical Keyboard', amount: '₹2,999', status: 'Processing', date: '2024-02-14' },
    { id: '#ORD-003', customer: 'Amit Kumar', product: 'USB-C Hub', amount: '₹1,499', status: 'Shipped', date: '2024-02-13' },
    { id: '#ORD-004', customer: 'Sneha Reddy', product: 'Laptop Stand', amount: '₹999', status: 'Pending', date: '2024-02-13' },
    { id: '#ORD-005', customer: 'Vikram Singh', product: 'Bluetooth Speaker', amount: '₹2,199', status: 'Delivered', date: '2024-02-12' },
  ]

  // Top Selling Products
  const topProducts = [
    { name: 'Wireless Mouse', sales: 234, revenue: '₹1,86,966', stock: 45 },
    { name: 'Mechanical Keyboard', sales: 189, revenue: '₹5,66,811', stock: 23 },
    { name: 'USB-C Hub', sales: 156, revenue: '₹2,33,844', stock: 67 },
    { name: 'Laptop Stand', sales: 142, revenue: '₹1,41,858', stock: 12 },
  ]

  // Low Stock Products
  const lowStockProducts = [
    { name: 'Laptop Stand', stock: 5, threshold: 10 },
    { name: 'Mechanical Keyboard', stock: 8, threshold: 15 },
    { name: 'Bluetooth Speaker', stock: 3, threshold: 10 },
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-700'
      case 'Shipped': return 'bg-blue-100 text-blue-700'
      case 'Processing': return 'bg-yellow-100 text-yellow-700'
      case 'Pending': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <Container>
      <Heading value="Dashboard Overview" />

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.bgColor} border ${stat.borderColor} rounded-lg p-6 hover:shadow-lg transition-shadow`}
          >
            <div className='flex items-center justify-between mb-4'>
              <div className={`${stat.iconColor} p-3 bg-white rounded-lg shadow-sm`}>
                {stat.icon}
              </div>
              <div className='flex items-center gap-1'>
                {stat.trend === 'up' ? (
                  <TrendingUp size={16} className='text-green-600' />
                ) : (
                  <TrendingDown size={16} className='text-red-600' />
                )}
                <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <h3 className='text-gray-600 text-sm font-medium mb-1'>{stat.title}</h3>
            <p className='text-3xl font-bold text-gray-900'>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
        {/* Recent Orders - Takes 2 columns */}
        <div className='lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm'>
          <div className='p-6 border-b border-gray-200'>
            <h2 className='text-xl font-heading font-semibold text-gray-900'>Recent Orders</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='text-left p-4 text-sm font-semibold text-gray-700'>Order ID</th>
                  <th className='text-left p-4 text-sm font-semibold text-gray-700'>Customer</th>
                  <th className='text-left p-4 text-sm font-semibold text-gray-700'>Product</th>
                  <th className='text-left p-4 text-sm font-semibold text-gray-700'>Amount</th>
                  <th className='text-left p-4 text-sm font-semibold text-gray-700'>Status</th>
                  <th className='text-left p-4 text-sm font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className='border-b border-gray-100 hover:bg-gray-50 transition'>
                    <td className='p-4 text-sm font-medium text-gray-900'>{order.id}</td>
                    <td className='p-4 text-sm text-gray-700'>{order.customer}</td>
                    <td className='p-4 text-sm text-gray-700'>{order.product}</td>
                    <td className='p-4 text-sm font-semibold text-gray-900'>{order.amount}</td>
                    <td className='p-4'>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className='p-4'>
                      <button className='text-blue-600 hover:text-blue-800 transition'>
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-sm'>
          <div className='p-6 border-b border-gray-200 flex items-center gap-2'>
            <AlertTriangle size={20} className='text-orange-600' />
            <h2 className='text-xl font-heading font-semibold text-gray-900'>Low Stock Alert</h2>
          </div>
          <div className='p-6'>
            {lowStockProducts.map((product, index) => (
              <div key={index} className='mb-4 last:mb-0 p-4 bg-orange-50 border border-orange-200 rounded-lg'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='font-semibold text-gray-900 text-sm'>{product.name}</h3>
                  <span className='text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded'>
                    {product.stock} left
                  </span>
                </div>
                <div className='w-full bg-orange-200 rounded-full h-2'>
                  <div 
                    className='bg-orange-600 h-2 rounded-full transition-all'
                    style={{ width: `${(product.stock / product.threshold) * 100}%` }}
                  ></div>
                </div>
                <p className='text-xs text-gray-600 mt-2'>Threshold: {product.threshold} units</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Selling Products */}
      <div className='bg-white border border-gray-200 rounded-lg shadow-sm'>
        <div className='p-6 border-b border-gray-200'>
          <h2 className='text-xl font-heading font-semibold text-gray-900'>Top Selling Products</h2>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b border-gray-200'>
              <tr>
                <th className='text-left p-4 text-sm font-semibold text-gray-700'>Rank</th>
                <th className='text-left p-4 text-sm font-semibold text-gray-700'>Product Name</th>
                <th className='text-left p-4 text-sm font-semibold text-gray-700'>Sales</th>
                <th className='text-left p-4 text-sm font-semibold text-gray-700'>Revenue</th>
                <th className='text-left p-4 text-sm font-semibold text-gray-700'>Stock</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={index} className='border-b border-gray-100 hover:bg-gray-50 transition'>
                  <td className='p-4'>
                    <div className='w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm'>
                      {index + 1}
                    </div>
                  </td>
                  <td className='p-4 text-sm font-medium text-gray-900'>{product.name}</td>
                  <td className='p-4 text-sm text-gray-700'>{product.sales} units</td>
                  <td className='p-4 text-sm font-semibold text-gray-900'>{product.revenue}</td>
                  <td className='p-4'>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.stock > 50 ? 'bg-green-100 text-green-700' : 
                      product.stock > 20 ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.stock} in stock
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}

export default DashBoard
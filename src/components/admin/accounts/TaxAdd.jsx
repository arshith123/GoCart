import { X } from "lucide-react";
import { useState } from "react";

const TaxAdd = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    taxName: "",
    taxPercentage: "",
    taxType: "percentage",
    applyTaxOn: "product",
    status: "active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    // Reset form
    setFormData({
      taxName: "",
      taxPercentage: "",
      taxType: "percentage",
      applyTaxOn: "product",
      status: "active",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold font-heading text-gray-800">
            Add New Tax
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex flex-col gap-4">
            {/* Tax Name */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-sans font-medium text-sm">
                Tax Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="taxName"
                value={formData.taxName}
                onChange={handleInputChange}
                placeholder="e.g., GST, VAT, Sales Tax"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-sans text-sm"
                required
              />
            </div>

            {/* Tax Percentage */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-sans font-medium text-sm">
                Tax Percentage (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="taxPercentage"
                value={formData.taxPercentage}
                onChange={handleInputChange}
                placeholder="e.g., 18"
                min="0"
                max="100"
                step="0.01"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-sans text-sm"
                required
              />
            </div>

            {/* Tax Type */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-sans font-medium text-sm">
                Tax Type <span className="text-red-500">*</span>
              </label>
              <select
                name="taxType"
                value={formData.taxType}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-sans text-sm"
                required
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
              </select>
            </div>

            {/* Apply Tax On */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-sans font-medium text-sm">
                Apply Tax On <span className="text-red-500">*</span>
              </label>
              <select
                name="applyTaxOn"
                value={formData.applyTaxOn}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-sans text-sm"
                required
              >
                <option value="product">Product</option>
                <option value="service">Service</option>
                <option value="both">Both</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-sans font-medium text-sm">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-sans text-sm"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors font-sans"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-sans"
            >
              Add Tax
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaxAdd;

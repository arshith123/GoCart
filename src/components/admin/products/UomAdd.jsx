import { X } from "lucide-react";
import { useState } from "react";

const UomAdd = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    short: "",
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
      name: "",
      short: "",
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
            Add New UOM
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
            {/* UOM Name */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-sans font-medium text-sm">
                UOM Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Kilogram, Piece, Meter"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-sans text-sm"
                required
              />
            </div>

            {/* Short Code */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-sans font-medium text-sm">
                Short Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="short"
                value={formData.short}
                onChange={handleInputChange}
                placeholder="e.g., KG, PCS, M"
                maxLength="10"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-sans text-sm uppercase"
                required
              />
              <p className="text-xs text-gray-500">Maximum 10 characters</p>
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
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-sans text-sm"
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
              className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl font-sans"
            >
              Add UOM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UomAdd;

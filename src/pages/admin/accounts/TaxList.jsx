import { useState } from "react";
import Container from "../../../components/common/Container";
import Heading from "../../../components/common/Heading";
import { ListFilter, Plus, Edit2, Trash2 } from "lucide-react";
import TaxAdd from "../../../components/admin/accounts/TaxAdd";

const TaxList = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [taxes, setTaxes] = useState([
    {
      id: 1,
      taxName: "GST",
      taxPercentage: 18,
      taxType: "Percentage",
      applyTaxOn: "Product",
      status: "active",
    },
    {
      id: 2,
      taxName: "VAT",
      taxPercentage: 12,
      taxType: "Percentage",
      applyTaxOn: "Service",
      status: "active",
    },
    {
      id: 3,
      taxName: "Sales Tax",
      taxPercentage: 5,
      taxType: "Percentage",
      applyTaxOn: "Both",
      status: "inactive",
    },
  ]);

  const handleAddTax = (newTax) => {
    const tax = {
      id: taxes.length + 1,
      taxName: newTax.taxName,
      taxPercentage: parseFloat(newTax.taxPercentage),
      taxType: newTax.taxType.charAt(0).toUpperCase() + newTax.taxType.slice(1),
      applyTaxOn:
        newTax.applyTaxOn.charAt(0).toUpperCase() + newTax.applyTaxOn.slice(1),
      status: newTax.status,
    };
    setTaxes([...taxes, tax]);
  };

  const handleDeleteTax = (id) => {
    setTaxes(taxes.filter((tax) => tax.id !== id));
  };

  return (
    <Container>
      <Heading value="Manage Tax" />

      {/* Top Section */}
      <div className="py-5 flex justify-between items-center gap-4 flex-wrap">
        <div className="flex gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex gap-2 items-center py-2 px-4 rounded-3xl bg-black hover:bg-gray-800 transition cursor-pointer"
          >
            <Plus size={18} color="white" />
            <span className="font-sans font-semibold text-sm text-white">
              Add Tax
            </span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto font-sans">
        <div className="min-w-[1000px] border border-gray-200 rounded-lg shadow-sm bg-white">
          {/* Header */}
          <div className="flex w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
            <div className="w-[20%] p-4">Tax Name</div>
            <div className="w-[15%] p-4 text-center">Tax Percentage</div>
            <div className="w-[15%] p-4 text-center">Tax Type</div>
            <div className="w-[20%] p-4 text-center">Apply Tax On</div>
            <div className="w-[15%] p-4 text-center">Tax Status</div>
            <div className="w-[15%] p-4 text-center">Actions</div>
          </div>

          {/* Body */}
          {taxes.map((tax) => (
            <div
              key={tax.id}
              className="flex w-full items-center border-b border-gray-100 text-sm text-gray-700 hover:bg-cyan-50 transition-colors"
            >
              <div className="w-[20%] p-4 font-semibold text-gray-900">
                {tax.taxName}
              </div>

              <div className="w-[15%] p-4 text-center">
                <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg font-semibold text-xs border border-indigo-200">
                  {tax.taxPercentage}%
                </span>
              </div>

              <div className="w-[15%] p-4 text-center">
                <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg font-semibold text-xs border border-blue-200">
                  {tax.taxType}
                </span>
              </div>

              <div className="w-[20%] p-4 text-center">
                <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg font-semibold text-xs border border-purple-200">
                  {tax.applyTaxOn}
                </span>
              </div>

              {/* Status Badge */}
              <div className="w-[15%] p-4 flex justify-center">
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    tax.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {tax.status}
                </span>
              </div>

              <div className="w-[15%] p-4">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteTax(tax.id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Tax Modal */}
      <TaxAdd
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTax}
      />
    </Container>
  );
};

export default TaxList;

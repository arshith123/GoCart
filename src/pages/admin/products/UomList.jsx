import React, { useState } from "react";
import Container from "../../../components/common/Container";
import Heading from "../../../components/common/Heading";
import {
  ListFilter,
  Plus,
  Edit2,
  Trash2,
  Ruler,
  RulerIcon,
  XCircle,
} from "lucide-react";
import UomAdd from "../../../components/admin/products/UomAdd";

const UomList = () => {
  const [searchInput, setsearchInput] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // ✅ UOM Dummy Data
  const [uoms, setUoms] = useState([
    { id: 1, name: "Piece", short: "PCS", status: "active" },
    { id: 2, name: "Kilogram", short: "KG", status: "active" },
    { id: 3, name: "Gram", short: "GM", status: "active" },
    { id: 4, name: "Meter", short: "M", status: "inactive" },
    { id: 5, name: "Litre", short: "LTR", status: "active" },
  ]);

  const handleAddUom = (newUom) => {
    const uom = {
      id: uoms.length + 1,
      name: newUom.name,
      short: newUom.short.toUpperCase(),
      status: newUom.status,
    };
    setUoms([...uoms, uom]);
  };

  const handleDeleteUom = (id) => {
    setUoms(uoms.filter((uom) => uom.id !== id));
  };

  // Calculate stats
  const totalUOMs = uoms.length;
  const activeUOMs = uoms.filter((u) => u.status === "active").length;
  const inactiveUOMs = uoms.filter((u) => u.status === "inactive").length;

  return (
    <Container>
      <Heading value="Manage Unit of Measure" />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500 p-3 rounded-lg">
              <Ruler size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-cyan-700">Total UOMs</p>
              <p className="text-2xl font-bold text-cyan-900">{totalUOMs}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 p-3 rounded-lg">
              <RulerIcon size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-700">Active UOMs</p>
              <p className="text-2xl font-bold text-green-900">{activeUOMs}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 p-3 rounded-lg">
              <XCircle size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-red-700">Inactive UOMs</p>
              <p className="text-2xl font-bold text-red-900">{inactiveUOMs}</p>
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
          placeholder="Search UOM"
        />

        <div className="flex gap-3">
          <button className="flex gap-2 items-center border border-gray-400 py-2 px-4 rounded-3xl hover:bg-gray-100 transition">
            <ListFilter size={18} />
            <span className="font-sans font-semibold text-sm">Sort by</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex gap-2 items-center py-2 px-4 rounded-3xl bg-black hover:bg-gray-800 transition cursor-pointer"
          >
            <Plus size={18} color="white" />
            <span className="font-sans font-semibold text-sm text-white">
              Add UOM
            </span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto font-sans">
        <div className="min-w-[900px] border border-gray-200 rounded-lg shadow-sm bg-white">
          {/* Header */}
          <div className="flex w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
            <div className="w-[40%] p-4">UOM Name</div>
            <div className="w-[20%] p-4">Short Code</div>
            <div className="w-[15%] p-4 text-center">Status</div>
            <div className="w-[25%] p-4 text-center">Actions</div>
          </div>

          {/* Body */}
          {uoms.map((uom) => (
            <div
              key={uom.id}
              className="flex w-full items-center border-b border-gray-100 text-sm text-gray-700 hover:bg-cyan-50 transition-colors"
            >
              <div className="w-[40%] p-4 font-semibold text-gray-900">
                {uom.name}
              </div>

              <div className="w-[20%] p-4">
                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg font-semibold text-xs border border-gray-200">
                  {uom.short}
                </span>
              </div>

              {/* Status Badge */}
              <div className="w-[15%] p-4 flex justify-center">
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    uom.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {uom.status}
                </span>
              </div>

              <div className="w-[25%] p-4">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteUom(uom.id)}
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

      {/* Add UOM Modal */}
      <UomAdd
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddUom}
      />
    </Container>
  );
};

export default UomList;

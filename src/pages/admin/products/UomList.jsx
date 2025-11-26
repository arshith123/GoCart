import React, { useState } from 'react';
import Container from '../../../components/common/Container';
import Heading from '../../../components/common/Heading';
import { ListFilter, Plus } from "lucide-react";

const UomList = () => {
  const [searchInput, setsearchInput] = useState("");

  // ✅ UOM Dummy Data
  const [uoms, setUoms] = useState([
    { id: 1, name: "Piece", short: "PCS", status: "active" },
    { id: 2, name: "Kilogram", short: "KG", status: "active" },
    { id: 3, name: "Gram", short: "GM", status: "active" },
    { id: 4, name: "Meter", short: "M", status: "inactive" },
    { id: 5, name: "Litre", short: "LTR", status: "active" },
  ]);

  return (
    <Container>
      <Heading value="Manage Unit of Measure" />

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

          <button className="flex gap-2 items-center py-2 px-4 rounded-3xl bg-black hover:bg-gray-800 transition cursor-pointer">
            <Plus size={18} color="white" />
            <span className="font-sans font-semibold text-sm text-white">Add UOM</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto font-sans">
        <div className="min-w-[900px] border border-gray-200 rounded-lg shadow-sm">

          {/* Header */}
          <div className="flex w-full bg-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
            <div className="w-[5%] p-3 text-center">#</div>
            <div className="w-[35%] p-3">UOM Name</div>
            <div className="w-[20%] p-3">Short Code</div>
            <div className="w-[20%] p-3 text-center">Status</div>
            <div className="w-[10%] p-3 text-center">Action</div>
          </div>

          {/* Body */}
          {uoms.map((uom, index) => (
            <div
              key={uom.id}
              className="flex w-full items-center border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              <div className="w-[5%] p-3 text-center text-gray-500">{index + 1}</div>

              <div className="w-[35%] p-3 font-medium">{uom.name}</div>

              <div className="w-[20%] p-3 font-semibold">{uom.short}</div>

              {/* Status Badge */}
              <div className="w-[20%] p-3 flex justify-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    uom.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {uom.status}
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
    </Container>
  );
};

export default UomList;

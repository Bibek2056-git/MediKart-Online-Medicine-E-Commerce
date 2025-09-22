import React from "react";
import { Link } from "react-router-dom";

const medicines = [
  { id: 1, name: "Paracetamol", description: "Pain reliever", price: "₹50" },
  { id: 2, name: "Ibuprofen", description: "Anti-inflammatory", price: "₹70" },
  { id: 3, name: "Cetirizine", description: "Allergy relief", price: "₹40" },
];

const Products = () => (
  <div className="min-h-screen bg-green-50 py-10 px-4">
    <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
      Our Medicines
    </h1>
    <div className="max-w-3xl mx-auto grid gap-6">
      {medicines.map((med) => (
        <div
          key={med.id}
          className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-semibold text-green-800">{med.name}</h2>
            <p className="text-gray-600">{med.description}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-green-700 mb-2">{med.price}</span>
            <Link
              to={`/product/${med.id}`}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Products;

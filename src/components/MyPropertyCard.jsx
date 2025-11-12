import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Modal from "./Modal"; 

function MyPropertyCard({ property, onDelete,  }) {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/properties/${property._id}?userEmail=${user.email}`,
        { headers: { Authorization: `Bearer ${user.accessToken}` } }
      );

      if (res.status === 200) {
        onDelete(property._id);
        toast.success("Property deleted successfully!");
      } else {
        toast.error("Property deletion failed!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsModalOpen(false); 
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Property Info */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{property.propertyName}</h3>
          <span className="text-xs text-gray-500">{property.category}</span>
        </div>
        <span className="text-xs text-gray-400">{new Date(property.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="flex flex-col gap-2 mb-4 text-gray-700 text-sm">
        <div className="flex items-center gap-2">{property.location}</div>
        <div>Price: ${property.price.toLocaleString()}</div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <Link to={`/properties/${property._id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            View
          </button>
        </Link>
        <Link to={`/properties/update/${property._id}`}>
          <button  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium">
            Update
          </button>
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium"
        >
          Delete
        </button>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Confirm Delete"
      >
        Are you sure you want to delete <strong>{property.propertyName}</strong>?
      </Modal>

    </div>
  );
}

export default MyPropertyCard;

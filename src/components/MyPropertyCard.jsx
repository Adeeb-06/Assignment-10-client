import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function MyPropertyCard({ property, onDelete, properties }) {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    
    console.log(properties);

    
    const handleDelete = async () => {
        const res = await axios.delete(`http://localhost:3000/properties/${property._id}?userEmail=${user.email}`, {
            headers:{ Authorization: `Bearer ${user.accessToken}` }
        });
        if(res.status === 200){
            onDelete(property._id);
            toast.success("Property deleted successfully!");
        }
        else{
            toast.error("Property deletion failed!");
        }
    };
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      
      {/* Header: Title & Category */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{property.propertyName}</h3>
          <span className="text-xs text-gray-500">{property.category}</span>
        </div>
        <span className="text-xs text-gray-400">{new Date(property.createdAt).toLocaleDateString()}</span>
      </div>

      {/* Property Details */}
      <div className="flex flex-col gap-2 mb-4 text-gray-700 text-sm">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{property.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
          <span>Posted on: {new Date(property.createdAt).toLocaleDateString()}</span>
        </div>
        <div>
          <span className="text-gray-500 text-xs">Price</span>
          <p className="text-lg font-bold text-gray-800">${property.price.toLocaleString()}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <Link to={`/properties/${property._id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
            View
          </button>
        </Link>
        <Link to={`/properties/${property._id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
            Update
          </button>
        </Link>
  
          <button onClick={()=> handleDelete()} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
            Delete
          </button>

      </div>
    </div>
  );
}

export default MyPropertyCard;

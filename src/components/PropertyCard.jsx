import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-base-200 to-base-300 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
         <img src={property.imgURL} alt={property.propertyName} className="w-full h-full object-cover"/>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {property.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
          {property.propertyName}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-base-300">
          <div>
            <p className="text-xs text-gray-500 mb-1">Price</p>
            <p className="text-2xl font-bold text-primary">
              ${property.price.toLocaleString()}
            </p>
          </div>
          <Link to={`/properties/${property._id}`}>
          
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
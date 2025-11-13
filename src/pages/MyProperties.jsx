import React, { useContext, useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import MyPropertyCard from "../components/MyPropertyCard";
import { toast } from "react-toastify";
import api from "../api";

export default function MyProperties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const getProperties = async () => {

    try {
      const res = await api.get(
        "/my-properties?userEmail=" + user.email,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      setProperties(res.data);
  
      return res.data;
      
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getProperties();
    }

  }, []);

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property._id !== id));
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.propertyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

    if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }


  return (
    <div className="min-h-screen mt-7 bg-gradient-to-b from-base-200 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary via-secondary to-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center px-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 py-4 text-primary focus:outline-none"
                  />
                </div>
                <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Properties */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-primary">
              {properties.length}
            </span>{" "}
            properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <MyPropertyCard
              key={property.id}
              property={property}
              properties={filteredProperties}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* No Results */}
        {properties.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              No Properties Found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

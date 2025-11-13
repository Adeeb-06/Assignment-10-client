import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropertyCard from "./PropertyCard";
import api from "../api";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProperties = async () => {
    try {
      const res = await api.get(`/featured-properties`);
      setProperties(res.data);
      console.log(res);
      return res.data;
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);


  return (
    <section className="py-16 bg-gradient-to-b from-base-200 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of premium homes, apartments, and
            commercial spaces. Each property is carefully chosen for its
            exceptional location, design, and value.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Place your PropertyCard component here */}
          {/* Example: */}
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

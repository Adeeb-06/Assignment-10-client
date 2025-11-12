import React,{ useState } from "react";
import PropertyCard from "../components/PropertyCard";

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample data
  const properties = [
    {
      id: 1,
      name: "Modern Villa",
      category: "Villa",
      description: "Luxurious 4-bedroom villa with pool, garden, and stunning city views. Perfect for families.",
      location: "Beverly Hills, CA",
      price: 2500000
    },
    {
      id: 2,
      name: "Downtown Apartment",
      category: "Apartment",
      description: "Stylish 2-bedroom apartment in the heart of downtown with modern amenities.",
      location: "New York, NY",
      price: 850000
    },
    {
      id: 3,
      name: "Beach House",
      category: "House",
      description: "Beautiful beachfront property with private beach access and ocean views.",
      location: "Miami, FL",
      price: 1800000
    },
    {
      id: 4,
      name: "Mountain Cabin",
      category: "Cabin",
      description: "Cozy mountain retreat with 3 bedrooms, fireplace, and breathtaking mountain views.",
      location: "Aspen, CO",
      price: 950000
    },
    {
      id: 5,
      name: "Luxury Penthouse",
      category: "Penthouse",
      description: "Exclusive penthouse with panoramic city views, rooftop terrace, and premium finishes.",
      location: "Los Angeles, CA",
      price: 3200000
    },
    {
      id: 6,
      name: "Suburban Home",
      category: "House",
      description: "Spacious family home with 5 bedrooms, large backyard, and excellent school district.",
      location: "Austin, TX",
      price: 650000
    }
  ];

  const categories = ['All', 'Villa', 'Apartment', 'House', 'Cabin', 'Penthouse'];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || property.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen mt-7 bg-gradient-to-b from-base-200 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary via-secondary to-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                Explore Properties
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Find Your Perfect Property
            </h1>
            <p className="text-lg text-base-200 max-w-2xl mx-auto">
              Browse through our curated collection of premium properties across the country
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center px-4">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-white text-primary border border-base-300 hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary">{filteredProperties.length}</span> properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No Properties Found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-12xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
        <div className="flex justify-center items-center">
          {/* Left Content */}
          <div className="space-y-8 w-full mx-auto flex justify-center items-center flex-col">
            <div className="">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                🏡 Find Your Dream Home
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Discover Properties
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-base-200 to-white">
                That Feel Like Home
              </span>
            </h1>
            
            <p className="text-lg text-base-200 text-center leading-relaxed max-w-xl">
              Explore thousands of verified properties with the best deals. Your perfect home is just a click away.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl w-4xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter location or property name..."
                  className="flex-1 px-6 py-4 rounded-xl text-primary focus:outline-none"
                />
                <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                  Search
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-base-200 text-sm">Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5K+</div>
                <div className="text-base-200 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-base-200 text-sm">Locations</div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
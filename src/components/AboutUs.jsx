"use client";
import React from "react";
import { FaHome, FaUsers, FaStar } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-base-200 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About PropertyHub</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PropertyHub is your trusted platform for finding, buying, and managing premium properties across the country. We combine modern technology with reliable service to make property search simple and transparent.
          </p>
        </div>

        {/* Features / Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4 text-primary text-5xl">
              <FaHome />
            </div>
            <h3 className="text-xl font-bold mb-2">Wide Range of Properties</h3>
            <p className="text-gray-600">
              Explore a diverse selection of properties – from modern apartments to luxury villas – all in one platform.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4 text-primary text-5xl">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold mb-2">Trusted by Thousands</h3>
            <p className="text-gray-600">
              Join thousands of happy clients who have found their dream property with PropertyHub’s expert guidance.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4 text-primary text-5xl">
              <FaStar />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality & Reliability</h3>
            <p className="text-gray-600">
              We prioritize quality and transparency, making your property experience smooth, reliable, and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

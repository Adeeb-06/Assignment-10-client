import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Rating } from "@smastrom/react-rating";
import { RatIcon } from "lucide-react";
import Review from "../components/Review";

export default function PropertyDetailsPage() {
  const { propertyId } = useParams();

  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState({});
 


  const getProperty = async () => {
    const res = await axios.get(
      "http://localhost:3000/properties/" + propertyId,
      {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      }
    );
    console.log(res);
    setProperty(res.data);
  };
  useEffect(() => {
    getProperty();
  }, []);



  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button className="mb-6 flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Properties
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Property Image */}
          <div className="relative h-96 bg-gradient-to-br from-primary to-secondary">
            {property.imgURL ? (
              <img
                src={property.imgURL}
                alt={property.propertyName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-white opacity-30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {property.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 pb-8 border-b border-base-300">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
                  {property.propertyName}
                </h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Posted on{" "}
                  {new Date(property.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <div className="text-left md:text-right">
                <p className="text-sm text-gray-500 mb-1">Price</p>
                <p className="text-4xl font-bold text-primary">
                  ${property.price}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                About this property
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Posted By Section */}
            <div className="bg-base-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-primary mb-4">Posted By</h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {property?.userEmail?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-600 text-sm break-all">
                    {property.userEmail}
                  </p>
                </div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact
                </button>
              </div>
            </div>

            {/* Review Section */}
            <Review userEmail={user.email} propertyId={property._id} imgURL={property.imgURL}/>
          
          </div>
        </div>
      </div>
    </div>
  );
}

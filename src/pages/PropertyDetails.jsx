import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import axios from 'axios';

export default function PropertyDetailsPage() {
  const {propertyId} = useParams();
  const [rating, setRating] = useState(3);
    const {user} = useContext(AuthContext);
    const [property, setProperty] = useState({});

    const getProperty = async () => {
        const res = await axios.get('http://localhost:3000/properties/'+propertyId, {
            headers:{ Authorization: `Bearer ${user.accessToken}` }
        });
        console.log(res)
        setProperty(res.data);
    }
    useEffect(() => {
        getProperty();
    }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-white">
      {/* Hero Image Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary to-dark overflow-hidden">
        {property.imgURL ? (
          <img 
            src={property.imgURL} 
            alt={property.propertyName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {property.category}
          </span>
        </div>

        {/* Back Button */}
        <div className="absolute top-8 right-8">
          <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Info Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-base-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-primary mb-2">
                    {property.propertyName}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Price</p>
                  <p className="text-4xl font-bold text-primary">
                    ${property.price}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>
            </div>

        
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Owner Info Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-base-300">
                <h3 className="text-xl font-bold text-primary mb-4">Property Owner</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {property?.userEmail?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 break-all">{property.userEmail}</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Owner
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-base-300">
                <h3 className="text-xl font-bold text-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-base-200 hover:bg-base-300 text-primary px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save Property
                  </button>
                  <button className="w-full bg-base-200 hover:bg-base-300 text-primary px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Property
                  </button>
                  <button className="w-full bg-base-200 hover:bg-base-300 text-primary px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Schedule Visit
                  </button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
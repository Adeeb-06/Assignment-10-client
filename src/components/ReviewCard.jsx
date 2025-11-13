import { Rating } from "@smastrom/react-rating";
import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-base-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Property Thumbnail */}
        <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-secondary">
          {review.propertyIMGURL ? (
            <img
              src={review.propertyIMGURL}
              alt={review.propertyName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white opacity-30"
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
        </div>

        {/* Review Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-1">
                {review.propertyName}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="font-semibold">{review.reviewrName}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>{review.createdAt}</span>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                isDisabled
              />
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-600 leading-relaxed">{review.review}</p>
        </div>
      </div>
    </div>
  );
}

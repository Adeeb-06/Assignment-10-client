import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ReviewCard from "../components/ReviewCard";

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getReviews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/reviews", {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      });
      if (res.status === 201) {
        setReviews(res.data);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (user) {
      getReviews();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Your Reviews
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            My Ratings & Reviews
          </h1>
          <p className="text-lg text-gray-600">
            All your property reviews in one place
          </p>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>

        {/* Empty State */}
        {reviews.length === 0 && (
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              No Reviews Yet
            </h3>
            <p className="text-gray-500">You haven't left any reviews yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRatings;

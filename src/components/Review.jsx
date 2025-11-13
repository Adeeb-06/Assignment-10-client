import { Rating } from '@smastrom/react-rating';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Review = ({userEmail , propertyId ,imgURL}) => {
       const [rating, setRating] = useState(3);
       const { user } = useContext(AuthContext);

       const { register , handleSubmit } = useForm();

       const onsubmit = async (data) => {
        const fullData = {...data, rating , userEmail , propertyId , reviewrName: user.displayName, propertyIMGURL: imgURL}
        const res = await axios.post('http://localhost:3000/review', fullData, { headers: { Authorization: `Bearer ${user.accessToken}` } });

        if(res.status === 201) {
            toast.success('Review submitted successfully!')
        } else{
            toast.error('Something went wrong!')
        }
        console.log(res)
       }
  return (
    <div>
          <div className="bg-base-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">
                Leave a Review
              </h3>

              <form onSubmit={handleSubmit(onsubmit)}>
              {/* Star Rating */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Rating
                </label>
                <div className="flex gap-2">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
              </div>


              {/* Review Text */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  {...register("review")}
                  rows="4"
                  placeholder="Share your thoughts about this property..."
                  className="w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button type='submit'  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Submit Review
              </button>
              </form>

            </div>
    </div>
  )
}

export default Review
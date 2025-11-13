import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProperty() {
  const { propertyId } = useParams();
  const { register, handleSubmit, reset } = useForm({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const getProperty = async () => {
    const res = await axios.get(
      "http://localhost:3000/properties/" + propertyId,
      {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      }
    );
    console.log(res);
    reset({
      propertyName: res.data.propertyName,
      description: res.data.description,
      category: res.data.category,
      price: res.data.price,
      location: res.data.location,
      imgURL: res.data.imgURL,
    });
  };
  useEffect(() => {
    getProperty();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.put(
      `http://localhost:3000/properties/update/${propertyId}`,
      data,
      {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      }
    );
    if (res.status === 201) {
      toast.success("Property updated successfully!");
      navigate("/properties/my-properties");
    } else {
      toast.error("Property creation failed!");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-white py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              List Your Property
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Add New Property
          </h1>
          <p className="text-lg text-gray-600">
            Fill in the details below to list your property on our platform
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-base-300">
          <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Property Name *
                </label>
                <input
                  type="text"
                  {...register("propertyName", {
                    required: {
                      value: true,
                      message: "Property name is required",
                    },
                  })}
                  placeholder="Enter property name"
                  className="w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Description *
                </label>
                <textarea
                  rows="5"
                  placeholder="Describe your property in detail..."
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Category and Price */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Category *
                  </label>
                  <select
                    {...register("category", {
                      required: {
                        value: true,
                        message: "Category is required",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-white"
                  >
                    <option value="">Select category</option>
                    <option value="rent">Rent</option>
                    <option value="sale">Sale</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    placeholder="Enter price"
                    {...register("price", {
                      required: { value: true, message: "Price is required" },
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  placeholder="City, area, or full address"
                  {...register("location", {
                    required: { value: true, message: "Location is required" },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                />
              </div>

              {/* Image Link */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Image Link
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  {...register("imgURL", {
                    required: {
                      value: true,
                      message: "Image link is required",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Provide a direct link to your property image
                </p>
              </div>

              {/* User Info (Read-only) */}
              <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                <h3 className="text-sm font-semibold text-primary mb-4 flex items-center">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  User Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* User Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={user?.displayName}
                      {...register("user_name", {
                        required: { value: true, message: "Name is required" },
                      })}
                      readOnly
                      className="w-full px-4 py-2.5 rounded-lg border border-base-300 bg-gray-50 text-gray-600 cursor-not-allowed"
                    />
                  </div>

                  {/* User Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      {...register("userEmail", {
                        required: { value: true, message: "Email is required" },
                      })}
                      readOnly
                      className="w-full px-4 py-2.5 rounded-lg border border-base-300 bg-gray-50 text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                
                  Update Property
                </button>
              </div>
            </form>
            {/* Property Name */}
          </div>
        </div>
      </div>
    </div>
  );
}

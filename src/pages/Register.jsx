import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerUser, setUser, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onsubmit = async (data) => {
    try {
      const userCredential = await registerUser(data.email, data.password , data.name , data.photoURL);
      if (!userCredential) throw new Error("Registration failed");
      setUser(userCredential.user);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Failed to register");
    }
  };

  const handelGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      console.log(res)
      setUser(res.user);
      toast.success("Signed in with Google successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Google sign-in failed");
    }
  };

  return (
    <div className="min-h-screen mt-7 flex items-center justify-center">
      <div className="w-full mt-20 max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-secondary text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
          <div>
            <label className="block text-dark font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Please enter your name",
              })}
              className="input input-bordered w-full bg-base-300 focus:outline-none focus:border-secondary"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-dark font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Please enter your email",
              })}
              className="input input-bordered w-full bg-base-300 focus:outline-none focus:border-secondary"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-dark font-medium mb-1">Profile Img Url</label>
            <input
              type="text"
              placeholder="Enter your Profile Img Url"
              {...register("photoURL", {
                required: "Please enter your url",
              })}
              className="input input-bordered w-full bg-base-300 focus:outline-none focus:border-secondary"
            />
            {errors.photoUrl && (
              <p className="text-red-500">{errors.photoUrl.message}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-dark font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Please enter your password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                validate: {
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Must have at least one uppercase letter",
                  hasLowercase: (value) =>
                    /[a-z]/.test(value) ||
                    "Must have at least one lowercase letter",
                },
              })}
              className="input input-bordered w-full bg-base-300 focus:outline-none focus:border-secondary pr-12"
            />
            <button
              type="button"
              className="absolute z-10 right-3 top-[38px] text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-secondary text-white w-full hover:bg-dark"
          >
            Register
          </button>
        </form>

        <div className="divider">or</div>

        <button
          onClick={handelGoogleSignIn}
          className="btn w-full border border-secondary bg-white text-secondary hover:bg-base-300 flex items-center justify-center gap-2"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-secondary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

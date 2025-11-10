import React, { useContext, useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const { loginUser, setUser, googleSignIn } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // Form submit
  const onsubmit = (data) => {
    loginUser(data.email, data.password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success("Login successful!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message || "Login failed!");
      });
  };

  // Google Sign In
  const handelGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        toast.success("Signed in with Google!");
          navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message || "Google sign-in failed!");
        console.log(error)
      });
  };

  return (
    <div className="min-h-screen mt-7 flex items-center justify-center">
 
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-secondary text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-dark font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email",
              })}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-base-300 focus:outline-none focus:border-secondary"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-dark font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Please enter your password",
              })}
              placeholder="Enter your password"
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
            Login
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
          <Link
            to="/auth/forgot-password"
            state={{ email: watch("email") || "" }}
            className="text-secondary font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        </p>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-secondary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

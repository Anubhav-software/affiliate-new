import React, { useState } from "react";
import { ClockLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const VerifyOTPPage = ({ setIsAuthenticated }) => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || !email) {
      setError("Please enter both the email and OTP.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setLoading(false);
        setError("Token not found. Please log in again.");
        navigate("/login");
        return;
      }

      console.log("Token sent:", token);

      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { otp, email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setLoading(false);
        setMessage("OTP verified successfully. Redirecting...");

        const { token: newToken } = response.data;

        if (newToken) {
          localStorage.setItem("authToken", newToken);
        }
        setTimeout(() => {
          setIsAuthenticated(true);
          navigate("/dashboard");
        }, 2000);
      } else {
        setLoading(false);
        setError(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again later.");
      console.error("Error verifying OTP:", err);
    }
  };

  return (
    <div className="max-w-[450px] mx-auto">
      <section className="flex min-h-[88vh] justify-center items-center">
        <div className="border-black/10 border-2 shadow-lg shadow-black/10 w-full m-4 md:m-auto p-4 rounded-lg">
          <h1 className="font-semibold text-2xl text-center mb-5">
            Verify OTP
          </h1>

          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2">
              Email
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-2 border-black/20 duration-200 focus:border-green-700 text-black p-2 focus:outline-none rounded-lg"
              />
            </label>

            <label className="flex flex-col gap-2">
              OTP
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-transparent border-2 border-black/20 duration-200 focus:border-green-700 text-black p-2 focus:outline-none rounded-lg"
              />
            </label>

            {loading ? (
              <button
                className="font-semibold flex gap-3 p-3 bg-green-600 text-white rounded-lg items-center justify-center"
                disabled={true}
              >
                <ClockLoader size={20} color="#fff" />
                <span>Verifying OTP...</span>
              </button>
            ) : (
              <button
                type="submit"
                className={`p-3 ${
                  otp.length === 6
                    ? "bg-green-600 text-white cursor-pointer"
                    : "bg-black/30 text-white cursor-not-allowed"
                } rounded-lg mt-3 font-semibold duration-200`}
                disabled={!(otp.length === 6)} // Assuming OTP is 6 digits
              >
                Verify OTP
              </button>
            )}

            {message && (
              <div className="mt-3 text-green-600 font-semibold">{message}</div>
            )}

            {error && (
              <div className="mt-3 text-red-600 font-semibold">{error}</div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

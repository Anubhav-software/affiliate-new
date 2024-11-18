import React, { useState } from "react";
import { ClockLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export const VerifyOTPPage = ({ setIsAuthenticated }) => {
  const [otp, setOtp] = useState("");  // Store OTP input
  const [loading, setLoading] = useState(false);  // For loading spinner
  const [message, setMessage] = useState("");  // Success message
  const [error, setError] = useState("");  // Error message
  const navigate = useNavigate();  // Used for navigation after success

  // Function to get the JWT token from localStorage
  const getToken = () => {
    const token = localStorage.getItem("token");
    console.log("Retrieved token from localStorage:", token);
    return token;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const token = getToken();
      console.log("Token retrieved in handleSubmit:", token);

      if (!token) {
        setLoading(false);
        setError("Authentication token missing. Please login again.");
        console.log("No token found. Exiting...");
        return;
      }

      // Decode the JWT token
      let decodedToken;
      try {
        decodedToken = JSON.parse(atob(token.split(".")[1]));  // Decoding the token
        console.log("Decoded Token:", decodedToken);
      } catch (e) {
        console.error("Failed to decode token:", e);
        setLoading(false);
        setError("Invalid token format.");
        return;
      }

      const email = decodedToken.email;
      console.log("Email extracted from token:", email);

      // Send the request to verify OTP
      const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,  
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, email }),  
        credentials: "include",  
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        setLoading(false);
        setMessage("OTP verified successfully. Redirecting...");
        console.log("OTP verified successfully!");

        setTimeout(() => {
          setIsAuthenticated(true);  // Update auth state
          navigate("/dashboard");  // Redirect to dashboard
        }, 2000);
      } else {
        setLoading(false);
        setError(data.message || "Invalid OTP. Please try again.");
        console.log("Error response from server:", data.message);
      }
    } catch (err) {
      setLoading(false);
      console.error("Error verifying OTP:", err);  // Log full error
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-[450px] mx-auto">
      <section className="flex min-h-[88vh] justify-center items-center">
        <div className="border-black/10 border-2 shadow-lg shadow-black/10 w-full m-4 md:m-auto p-4 rounded-lg">
          <h1 className="font-semibold text-2xl text-center mb-5">Verify OTP</h1>

          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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
                className={`p-3 ${otp.length === 6 ? "bg-green-600 text-white cursor-pointer" : "bg-black/30 text-white cursor-not-allowed"} rounded-lg mt-3 font-semibold duration-200`}
                disabled={!(otp.length === 6)}  // Assuming OTP is 6 digits
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

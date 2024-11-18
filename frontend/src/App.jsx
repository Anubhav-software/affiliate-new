import { Routes, Route } from "react-router-dom";
import { RegisterAffiliate } from "./components/manual/RegisterAffiliate";
import { AffiliateLogin } from "./components/manual/LoginAffiliate";
import { VerifyOTPPage } from "./components/manual/VerifyOtp";
import { Dashboard } from "./components/manual/dashboard/Dashboard";
 
import { useState } from "react"; 
import DashBoardMain from "./components/DashBoardMain";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<AffiliateLogin setIsAuthenticated={setIsAuthenticated} />} />

        {/* Register Route */}
        <Route path="/register" element={<RegisterAffiliate setIsAuthenticated={setIsAuthenticated} />} />

        {/* Verify OTP Route */}
        <Route path="/verify-otp" element={<VerifyOTPPage setIsAuthenticated={setIsAuthenticated} />} />

       
        {isAuthenticated && (
          <Route
            path="/dashboard"
            element={
              <DashBoardMain />
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
// mai dashboard pe jau ar dsahboard pe mera sidha ye page khule  jisme dashboard ar sidebar aa jaaye 

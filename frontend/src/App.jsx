import { Routes, Route, useNavigate } from "react-router-dom";
import { RegisterAffiliate } from "./components/manual/RegisterAffiliate";
import { AffiliateLogin } from "./components/manual/LoginAffiliate";
import { VerifyOTPPage } from "./components/manual/VerifyOtp";

import { useState } from "react";
import DashBoardMain from "./components/DashBoardMain";
import Customer from "./components/manual/Customer";
import Payment from "./components/manual/Payment";
import Calender from "./components/manual/Leads";
import { Dashboard } from "./components/manual/Dashboard/DashBoard";
import Leads from "./components/manual/Leads";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<AffiliateLogin setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/register"
          element={
            <RegisterAffiliate setIsAuthenticated={setIsAuthenticated} />
          }
        />

        <Route
          path="/verify-otp"
          element={<VerifyOTPPage setIsAuthenticated={setIsAuthenticated} />}
        />

        {isAuthenticated && (
          <>
            <>
              <Route path="/dashboard" element={<DashBoardMain />}>
                
                <Route path="customer" element={<Customer />} />
                <Route path="payment" element={<Payment />} />
                <Route path="leads" element={<Leads />} />
              </Route>
            </>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;

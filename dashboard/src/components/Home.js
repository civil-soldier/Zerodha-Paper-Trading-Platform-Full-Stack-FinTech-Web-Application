import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import DashboardLayout from "./DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* Dashboard (protected later) */}
      <Route path="/*" element={ <ProtectedRoute> <GeneralContextProvider><DashboardLayout /></GeneralContextProvider></ProtectedRoute>} />
    </Routes>
  );
};

export default Home;

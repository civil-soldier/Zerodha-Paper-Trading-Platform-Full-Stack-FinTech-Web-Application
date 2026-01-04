import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import DashboardLayout from "./DashboardLayout";

const Home = () => {
  return (
    <Routes>
      {/* Login FIRST */}
      <Route path="/login" element={<Login />} />

      {/* Protected dashboard */}
      <Route path="/*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default Home;

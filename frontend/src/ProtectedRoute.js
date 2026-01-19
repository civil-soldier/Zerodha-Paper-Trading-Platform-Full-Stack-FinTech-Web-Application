import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowSignup = false }) => {
  const token = localStorage.getItem("token");
  const signupMobile = localStorage.getItem("signup_mobile");

  // 🔒 Logged-in users should never access signup pages
  if (token && allowSignup) {
    return <Navigate to="/account/active" replace />;
  }

  // 🔒 Signup pages need active signup flow
  if (allowSignup && !signupMobile) {
    return <Navigate to="/signup" replace />;
  }

  // 🔒 Account pages need auth
  if (!allowSignup && !token) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;

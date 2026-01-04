import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      {/* Minimal Zerodha-style header */}
      <div style={headerStyle}>
        <img
          src="/media/images/logo.svg"
          alt="logo"
          style={{ height: "17px", marginLeft: "80px" }}
        />
      </div>

      <Outlet />
    </>
  );
}

const headerStyle = {
  height: "75px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "40px",
  borderBottom: "1px solid #e6e6e6",
};

export default AuthLayout;

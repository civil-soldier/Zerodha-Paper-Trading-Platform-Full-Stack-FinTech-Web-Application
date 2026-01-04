import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicLayout;

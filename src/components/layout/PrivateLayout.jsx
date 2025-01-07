import { Navigate, Outlet } from "react-router-dom";
import PrivateNavbar from "../PrivateNavbar";
import { useAuth } from "../context/AuthContext";

const PrivateLayout = () => {
  const auth = useAuth();

  if (!auth) {                                             // When a user logs in successfully, the application sets the authentication state to true. This can be managed using various methods, such as React's state management (using hooks like useState or context API) or external libraries like Auth0 or Firebase
    return <Navigate to="/login" />;
  }

  return (
    <>
      <PrivateNavbar />
      <Outlet />
    </>
  );
};

export default PrivateLayout;

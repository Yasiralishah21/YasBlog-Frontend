import { Navigate, Outlet } from "react-router-dom";
import PublicNavbar from "../PublicNavbar";
import { useAuth } from "../context/AuthContext";


const PublicLayout = () => {
  const auth = useAuth();                   //this will return auth funtion from AuthContext.jsx which will return either the information of user or null.

  if (auth) {
    return <Navigate to="/" />;                  // When a user logs in successfully, the application sets the authentication state to true. This can be managed using various methods, such as React's state management (using hooks like useState or context API) or external libraries like Auth0 or Firebase
  }
  return (
    <>
    
    <div >
    <PublicNavbar />
    <Outlet />
    </div>
    
    </>

  );
};

export default PublicLayout;

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateNavbar = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  
  return (
    <nav className="primary-link shadow-lg shadow-black">
       <a href="" to="/Aboutus"><img src="place.jpeg" alt="place" /> </a>
         
          {/* <NavLink style={yasStyle} to="/">YasBlogs</NavLink> */}
      <NavLink to="/"><b>Home</b></NavLink>
      <NavLink to="/Aboutus"><b>About</b></NavLink>
      {(auth.role === 1 || auth.role === 2) && (
        <NavLink to="/categories"><b>Categories</b></NavLink>
      )}
      {/* <NavLink to="/categories"><b>Categories</b></NavLink> */}
      <NavLink to="/posts"><b>Posts</b></NavLink>
      <NavLink to="/profile"><b>Profile</b></NavLink>
      <NavLink to="/setting"><b>Setting</b></NavLink>
      <NavLink to="/Logout" >
       <b>Logout</b> 
      </NavLink>      
    </nav>
  );
};

export default PrivateNavbar

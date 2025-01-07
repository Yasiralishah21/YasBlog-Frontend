import { NavLink } from "react-router-dom";

const PublicNavbar = () => {

  const yasStyle ={
    color: "black",
    fontFamily: "Courier New, Courier, monospace",
    fontWeight: "bold",
    fontSize:"larger",
    textAlign: "left"
  }
  return (
<div> 
    <nav className="primary-link">
    <img src="place.jpeg" alt="place" />
      <NavLink style={yasStyle} to="/">YasBlogs</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
    </div> 
    
  );
};

export default PublicNavbar;

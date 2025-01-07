import { NavLink, useNavigate } from "react-router-dom";

const Logout =() => {

    const navigate = useNavigate();

      const handleLogout = () => {
    window.localStorage.removeItem("blogData");
    toast.success("Logout successfull", {
      position: toast.POSITION.TOP_RIGHT,               //This is what handles the logout funtionality. Passed to Logout button with onclick funtionality.
      autoClose: true,
    });
    navigate("/login");
  };

    const mystyleee = {
        backgroundImage:
            "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
        height: "7vh",
        marginTop: "10px",
        // fontSize:"50px",
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
  return (
    <div>
<button className="button button-block" onClick={() => navigate(-1)} style={mystyleee}>
        Go Back
      </button>
        <button
          className="button button-block"
          style={mystyleee}>
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </button>

      <button style={mystyleee}>
        <NavLink to="/">Go to Homepage</NavLink>
      </button>

    </div>
  )
}

export default Logout;

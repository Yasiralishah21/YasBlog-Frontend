import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utils/axiosInstance";
import loginValidator from "../validators/loginValidator";

const initialFormData = {
  email: "",
  password: "",
};

const initialFormError = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();               //this navigate is used later on in line number 54.

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = loginValidator({
      email: formData.email,
      password: formData.password,
    });

    if (errors.email || errors.password) {
      setFormError(errors);
    } else {
      try {
        setLoading(true);
        // api request
        const response = await axios.post("/auth/signin", formData);
        const data = response.data;
                                                                                    //We'll store users info in local storage.
        window.localStorage.setItem("blogData", JSON.stringify(data.data));  //To store the token and users data in local storage

        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true,
        });
        setFormData(initialFormData);
        setFormError(initialFormError);
        setLoading(false);
        navigate("/");                    //navigate to home route
      } catch (error) {
        setLoading(false);
        setFormError(initialFormError);
        const response = error.response;
        const data = response.data;
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true,
        });
      }
    }
  };

  const myStyle = {
    backgroundImage:
        "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "68vh",
    marginTop: "30px",
    // fontSize: "50px",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};


  return (
    <div className="form-container" style={myStyle}>
      <form className="inner-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Login Form</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="yasir21@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {formError.email && <p className="error">{formError.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="***********"
            value={formData.password}
            onChange={handleChange}
          />
          {formError.password && <p className="error">{formError.password}</p>}
        </div>
 
        <Link className="forgot-password" to="/forgot-password">
          Forgot Password?
          </Link>
  
        <div className="form-group" style={{textColor: "black"}}>
          <input    
            className="button"
            type="submit"
            value={`${loading ? "Loging..." : "Login"}`}
          />
        </div>

        <div className="Signupbelow">
        <label>Don't have an Account?
          <Link className="Signup" to="/signup">
           SignUp here!
          </Link>
        </label>
        </div>
        
      </form>
    </div>
  );
};

export default Login;

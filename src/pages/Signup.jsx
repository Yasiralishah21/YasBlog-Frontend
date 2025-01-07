import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utils/axiosInstance";
import signupValidator from "../validators/signupValidator";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
                                              //Objects which are passed to initial value in UsesState Snippet. 
const initialFormError = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = signupValidator({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });

    if (
      errors.name ||
      errors.email ||
      errors.password ||
      errors.confirmPassword
    ) {
      setFormError(errors);
    } else {
      try {
        setLoading(true);

        // api request
        const requestBody = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };
        const response = await axios.post("/auth/signup", requestBody);
        const data = response.data;

        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: true,
        });
        setFormData(initialFormData);
        setFormError(initialFormError);
        setLoading(false);
        navigate("/login");
      } catch (error) {
        setLoading(false);
        setFormError(initialFormError);
        const response = error.response;
        const data = response.data;
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: true,
        });
      }
    }
  };

  const myStyle = {
    backgroundImage:
        "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "93vh",
    marginTop: "10px",
    // fontSize: "50px",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

  return (
    <div className="form-container" style={myStyle}>
      <form className="inner-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Signup Form</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Yasir Ali"
            value={formData.name}
            onChange={handleChange}
          />
          {formError.name && <p className="error">{formError.name}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Yasir21@gmail.com"
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

        <div className="form-group">
          <label>Confirm password</label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            placeholder="***********"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formError.confirmPassword && (
            <p className="error">{formError.confirmPassword}</p>
          )}
        </div>

        <div className="form-group" >
          <input
            className="button"
            type="submit"
            value={`${loading ? "Saving..." : "Signup"}`}
          />
        </div>

        <div>
        <label>Already have an Account?
          <Link className="Login" to="/login">
           Login here!
          </Link>
        </label>
        </div>
      </form>
    </div>
  );
};

export default Signup;
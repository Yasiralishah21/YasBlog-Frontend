import { NavLink, Outlet } from "react-router-dom";
// import './Style.css';

const Navbarr = () => {


// const Layout = () => {
  // let mystyle = {
  //   back: red
  // }
  return (
    <>
      <nav >    
            <NavLink to="/" >Home</NavLink>
            {/* <NavLink to="/About" >About</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
            <NavLink to="/Posts" >Posts</NavLink>
            <NavLink to="/Productlist" >Products</NavLink> */}
      </nav>
      <Outlet />
    </>
  )
}

export default Navbarr;

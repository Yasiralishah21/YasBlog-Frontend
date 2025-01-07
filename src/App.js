import {
  Route,
  Routes
} from "react-router-dom";
// import './App.css';
import PrivateLayout from './Components/Layout/PrivateLayout';
import PublicLayout from './Components/Layout/PublicLayout';
import CategoryList from "./pages/category/CategoryList";
import Home from './pages/Home';
import Login from "./pages/Login";
import PostList from "./pages/post/PostList";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";

function App(){
  return (
    <Routes>
      <Route element={<PrivateLayout/>} />
      <Route path="/" element={<Home/>} />
      <Route path="categories" element={<CategoryList/>} />
      <Route path="Post" element={<PostList/>} />
      <Route path="Profile" element={<Profile/>} />
      <Route path="Setting" element={<Setting/>} />
      <Route element={<PublicLayout/>}/>
      <Route path="Signup" element={<Signup/>} />
      <Route path="Login" element={<Login/>} />
    </Routes>
  );
};

export default App;

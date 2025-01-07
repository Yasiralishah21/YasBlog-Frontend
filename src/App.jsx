import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./components/layout/PrivateLayout";
import PublicLayout from "./components/layout/PublicLayout";
import Aboutus from "./pages/Aboutus";
import CategoryList from "./pages/category/CategoryList";
import NewCategory from "./pages/category/NewCategory";
import UpdateCategory from "./pages/category/UpdateCategory";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import DetailPost from "./pages/post/DetailPost";
import NewPost from "./pages/post/NewPost";
import PostList from "./pages/post/PostList";
import UpdatePost from "./pages/post/UpdatePost";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import VerifyUser from "./pages/VerifyUser";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="categories" element={<CategoryList />} />
                  <Route path="categories/new-category" element={<NewCategory />} />
                  <Route
                    path="categories/update-category"
                    element={<UpdateCategory />}
                  />
                  <Route path="posts" element={<PostList />} />
                  <Route path="posts/new-post" element={<NewPost />} />
                  <Route path="posts/detail-post/:id" element={<DetailPost />} />
                  <Route path="posts/update-post/:id" element={<UpdatePost />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="setting" element={<Setting />} />
                  <Route path="verify-user" element={<VerifyUser />} />
                  <Route path="aboutus" element={<Aboutus />} />
                  <Route path="logout" element={<Logout />} />
                  
        </Route>
        <Route element={<PublicLayout />}>
                  <Route path="signup" element={<Signup />} />
                  <Route path="login" element={<Login />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
     
    </>
  );
}

export default App;

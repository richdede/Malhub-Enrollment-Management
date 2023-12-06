import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IndexHome from "./IndexHome";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Footer from "./components/Footer/Footer";
import Workspace from "./components/Workspacing/Workspace";
// import PrivateRoute from "./components/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
import { UserContext } from "../context/user";
import Sidebar from "./components/Dashboard/Sidebar";
=======
import Sidebar from "./components/Dashboard/Sidebar";
// import Course from "./components/Dashboard/Course;
import { UserContext } from "../context/user";



>>>>>>> 159d897b209427d598cecc61c45eccd74361adfc
function App() {
  // const isAuthenticated = !!localStorage.getItem("token");
  return (
    <UserContext>
      <BrowserRouter>
        <>
          <User />
          <ToastContainer />
        </>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          {/* <PrivateRoute path="dashboard" element={<Sidebar />} /> */}
          <Route path="workspace" element={<Workspace />} />
          <Route path="workspace" element={<Workspace />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      </UserContext>
    
      );
}


      export default App;
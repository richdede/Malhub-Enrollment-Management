import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IndexHome from "./IndexHome";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Footer from "./components/Footer/Footer";
import Workspace from "./components/Dashboard/Workspacing/Workspace";
// import PrivateRoute from "./components/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Dashboard/Sidebar";
// import Course from "./components/Dashboard/Course;
import { UserContext } from "../context/user";
import Contents from "./components/Contents";
import Courses from "./components/Courses";
import CourseReg from "./components/Dashboard/CourseReg";
import WorkspaceReg from "./components/Dashboard/Workspacing/WorkspaceReg";
import Welcome from "./components/Dashboard/Welcome";
import PaymentHistory from "./components/Dashboard/PaymentHistory";
import { AuthProvider } from "./components/auth/LogAuth";

function App() {
  // const isAuthenticated = !!localStorage.getItem("token");
  return (
    <UserContext>
      <BrowserRouter>
        <>
          {/* <User /> */}
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
          <Route path="sidebar" element={<Sidebar />}>
            <Route
              path="Welcome"
              element={<Contents details={<Welcome />} />}
            />
            <Route
              path="courses"
              element={<Contents details={<Courses />} />}
            />
            <Route
              path="workspace"
              element={<Contents details={<Workspace />} />}
            />
            <Route
              path="payment"
              element={<Contents details={<PaymentHistory />} />}
            />
          </Route>
          <Route path="/courseReg" element={<CourseReg />} />
          <Route path="/workspaceReg" element={<WorkspaceReg />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </UserContext>
  );
}

export default App;

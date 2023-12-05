import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IndexHome from "./IndexHome";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Workspace from "./components/Workspacing/Workspace";
import Sidebar from "./components/Dashboard/Sidebar";
function App() {
  return (
    <BrowserRouter>
      <>
        <User />
        {/* <Home /> */}
      </>
      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="workspace" element={<Workspace />} />
        <Route path="/sidebar" element={<Sidebar/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

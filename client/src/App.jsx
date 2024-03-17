import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Form,
  Navigate,
  Routes,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { temp } from "./User/Login_auth";
import Header from "./Components/Header";
import { loginUser } from "./User/Login_auth";
import Create_Job from "./Pages/Create_Job";

function App() {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isLoggedIn } = useSelector((state) => state.user);
  // const handleLogin = (username, password) => {
  //   setUsername(username);
  //   toast.success("please fill all fields");
  //   setLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setUsername("");
  //   toast.warning("please fill all fields");
  //   setLoggedIn(false);
  // };

  const handleLogout = () => {
    // Dispatch logout action
    // dispatch(logout());
  };

  return (
    <Router>
      <Header />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route
              path="/"
              element={<Home username={username} handleLogout={handleLogout} />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/createjob" element={<Create_Job />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;

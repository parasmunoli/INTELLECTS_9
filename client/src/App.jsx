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
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username, password) => {
    setUsername(username);
    toast.success("please fill all fields");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    toast.warning("please fill all fields");
    setLoggedIn(false);
  };

  return (
    <div>
      <Router>
        <Routes>
          {loggedIn ? (
            <>
              <Route
                path="/"
                element={
                  <Home username={username} handleLogout={handleLogout} />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route
                path="/login"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </Router>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;

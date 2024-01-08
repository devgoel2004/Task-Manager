import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LoginForm";
import Tasks from "./pages/Tasks";
import SignupForm from "./pages/SignupForm";
import NotFound from "./pages/NotFound";
import { saveProfile } from "./redux/actions/authActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    dispatch(saveProfile());
  }, [authState.isLoggedIn, dispatch]);
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              authState.isLoggedIn ? <Navigate to="/" /> : <SignupForm />
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/tasks/add"
            element={
              authState.isLoggedIn ? (
                <Tasks />
              ) : (
                <Navigate to="/login" state={{ redirectUrl: "/tasks/add" }} />
              )
            }
          />
          <Route
            path="/tasks/:taskId"
            element={
              authState.isLoggedIn ? (
                <Tasks />
              ) : (
                <Navigate
                  to="/login"
                  state={{ redirectUrl: window.location.pathname }}
                />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

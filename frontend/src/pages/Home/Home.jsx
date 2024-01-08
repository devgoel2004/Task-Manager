import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Task from "../../components/Task.jsx";
import Mainlayout from "../../layouts/Mainlayout.jsx";

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;
  useEffect(() => {
    document.title = authState.isLoggedIn
      ? `${authState.user.name}'s tasks`
      : `Task Manager`;
  }, [authState]);
  return (
    <Mainlayout>
      {!isLoggedIn ? (
        <>
          <div className="home-page">
            <div>
              <h1 className="bg-primary text-2xl text-red-900  h-[40vh] py-8 text-center">
                {" "}
                Welcome to Task Manager App
              </h1>
              <Link
                to="/signup"
                className="mt-10 text-base block space-x-2 hover:space-x-4">
                <span className="transition-[margin]">
                  Join now to manage your tasks
                </span>
                <span className="relative ml-4 text-base transition-[margin]">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-lg mt-8 mx-8 border-b border-b-gray-300">
            Welcome {authState.user.name}
          </h1>
          <Task />
        </>
      )}
    </Mainlayout>
  );
};
export default Home;

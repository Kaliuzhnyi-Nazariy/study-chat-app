// import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login <span className="text-orange-400   ">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Username..."
              className="w-full input input-bordered h-10 text-gray-100"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password..."
              className="w-full input input-bordered h-10 text-gray-100"
            />
            <Link
              to="/signup"
              className="text-sm text-gray-200 hover:underline hover:text-orange-400 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>

            <div>
              <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

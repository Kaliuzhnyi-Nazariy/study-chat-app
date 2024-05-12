// import React from 'react'

import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    passsword: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChangeCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign Up <span className="text-orange-400   ">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-200">
                Full name
              </span>
            </label>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="w-full input input-bordered h-10 text-gray-100"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="JhDoe"
              className="w-full input input-bordered h-10 text-gray-100"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              placeholder="Enter password"
              className="w-full input input-bordered h-10 text-gray-100"
              value={inputs.passsword}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  passsword: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Confirm password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10 text-gray-100"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  confirmPassword: e.target.value,
                })
              }
            />

            <GenderCheckBox
              onCheckboxChange={handleChangeCheckBox}
              selectedGender={inputs.gender}
            />

            <Link
              to="/login"
              className="text-sm text-gray-200 hover:underline hover:text-orange-400 mt-2 inline-block"
            >
              Already have an account?
            </Link>

            <div>
              <button className="btn btn-block btn-sm mt-2">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

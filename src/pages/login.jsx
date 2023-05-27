import React, { useEffect, useState } from "react";
import { get, post, put, deletes } from "../utils/api";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    const data = {
      user_name: username.value,
      password: password.value,
    };

    const api = await post("signin", data);

    if (api.data.status == 200) {
      window.localStorage.setItem("token", api?.data?.token);

      return navigate("/");
    }

    e.target.reset();
  };

  return (
    <div className="w-25">
      <form className="text-center" onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

import React from "react";
import { post } from "../utils/api";
import {  useNavigate } from "react-router-dom";

export const Regstr = () => {
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const { email, username, password } = e.target;

    const data = {
      email: email.value,
      user_name: username.value,
      password: password.value,
    };

    const api = await post("signup", data);

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
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
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

        <button type="submit" className="btn btn-primary w-100 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

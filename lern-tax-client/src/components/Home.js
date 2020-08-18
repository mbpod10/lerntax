import React, { useState } from "react";
import Registration from "../components/auth/Registration";
import axios from "axios";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import APIConfig from "../APIConfig";

const Home = (props) => {
  const [input, setInput] = useState({
    user: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  });
  const [errorStatus, setErrorStatus] = useState("");

  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);

    props.history.push("/dashboard");
  };

  // const handleLogoutClick = () => {
  //   axios
  //     .delete(`${APIConfig}/logout`, { withCredentials: true })
  //     .then((response) => {
  //       props.handleLogout();
  //       window.location.reload();
  //       props.history.push("/");
  //     })
  //     .catch((error) => {
  //       console.log("Logout error", error);
  //     });
  // };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${APIConfig}/registrations`,
        {
          user: {
            email: input.email,
            password: input.password,
            password_confirmation: input.password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((resonse) => {
        if (resonse.data.status === "created") {
          handleSuccessfulAuth(resonse.data);
          window.location.reload();
          props.history.push(`/`);
        } else {
          setErrorStatus(resonse.data.status);
        }
      })
      .catch((response) => {
        console.log("registration error", response);
      });
  };

  return (
    <>
      {/* {props.email ? <h5>{props.email} </h5> : null}
      <h4>Status: {props.loggedInStatus}</h4> */}
      <h1>Register</h1>
      {props.loggedInStatus === "LOGGED_IN" ? null : (
        <div className="form-div">
          <Registration
            user={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleSuccessfulAuth={handleSuccessfulAuth}
          />
          <br />

          <h5>Already Have An Account?</h5>
          <h5>
            Sign In <Link to="/login">Here</Link>
          </h5>
        </div>
      )}

      <br />
      {props.loggedInStatus === "LOGGED_IN" ? <></> : null}
      {errorStatus ? (
        <ReactBootStrap.ListGroup>
          <ReactBootStrap.ListGroup.Item variant="danger">
            {errorStatus}
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>
      ) : null}
    </>
  );
};

export default Home;

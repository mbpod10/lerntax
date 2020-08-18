import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import APIConfig from "../APIConfig";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [id, setID] = useState(props.user.id);
  const [information, setInfo] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setUser(props.user);
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `${APIConfig}/users/${props.match.params.id}}`
        );
        setInfo(response.data.information);
        setName(response.data.information.name);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const deleteAccount = (event) => {
    event.preventDefault();
    props.handleLogoutClick();
    axios
      .delete(`${APIConfig}/users/${props.match.params.id}.json`)
      .then((response) => {
        props.history.push(`/`);
        window.location.reload();
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  const informationArray = information.map((element, index) => {
    return (
      <div className="info-div" key={element.index}>
        <ReactBootStrap.ListGroup className="list-group2">
          <ReactBootStrap.ListGroup.Item variant="dark">
            Name:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            Marital Status:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            Age:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            Dependent:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            State Of Residence:
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>

        <ReactBootStrap.ListGroup className="list-group2">
          <ReactBootStrap.ListGroup.Item variant="dark">
            {element.name}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            {element.marital_status}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            {element.age}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            {JSON.stringify(element.dependent)}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            {element.state}
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>
      </div>
    );
  });

  return (
    <>
      <h1>Profile</h1>
      {user ? informationArray : null}
      <Link to={`/information/${props.user.id}`}>Edit Profile Here</Link> <br />
      <Link to={`/tax-information`}>Add Tax Information Here</Link> <br />{" "}
      <br />
      <ReactBootStrap.Form onSubmit={deleteAccount}>
        <ReactBootStrap.Button variant="primary" type="submit">
          Delete Account
        </ReactBootStrap.Button>{" "}
      </ReactBootStrap.Form>
    </>
  );
};

export default Profile;

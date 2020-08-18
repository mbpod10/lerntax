import React, { useState, useEffect } from "react";
import AddInfo from "../components/info/AddInfo";
import axios from "axios";
import APIConfig from "../APIConfig";
const EditInformation = (props) => {
  // const [info, setInfo] = useState(null);
  // const [userId, setUserId] = useState(props.user.id);
  // const [error, setError] = useState("");
  const [user, setUser] = useState({});
  //const [userInfo, setUserInfo] = useState([]);

  const [input, setInput] = useState({
    name: "",
    state: "",
    age: null,
    marital_status: "",
    dependent: null,
  });

  useEffect(() => {
    const createUser = () => {
      setUser(props.user);
    };
    createUser();
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(user);
    let parsedAge = parseInt(input.age, 10);
    let dependency;
    if (input.dependent === "true") {
      dependency = true;
    } else if (input.dependent === "false") {
      dependency = false;
    }
    axios
      .put(`${APIConfig}/information/${props.user.information[0].id}.json`, {
        name: input.name,
        state: input.state,
        age: parsedAge,
        marital_status: input.marital_status,
        dependent: dependency,
        user_id: props.user.id,
      })
      .then((resonse) => {
        //console.log("res from  login", resonse);
        props.history.push(`/profile/${props.match.params.id}`);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <>
      <h1>Edit Profile</h1>
      <br />
      <div className="form-div2">
        <AddInfo
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          information={input}
        />
      </div>
      {/* {error ? error : null} */}
    </>
  );
};

export default EditInformation;

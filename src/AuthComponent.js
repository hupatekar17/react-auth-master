import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

export default function AuthComponent() {
  // set an initial state for the message we will receive after the API call
  const [message, setMessage] = useState("");

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://coming-binnie-besc-08ff9d2b.koyeb.app/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }

  return (
    <div className="text-center">
    

      {/* displaying our message from our API call
      <h3 className="text-danger">{message} </h3> */}

      <h1 className="text-left text-teal-500">BES Consultants</h1>

      {/* logout */}
      <button type="submit" className="btn btn-danger" style={{ marginLeft: '83vw' , marginTop: '-38vh' }} onClick={logout}>Logout</button>



     
      </div>
  );
}

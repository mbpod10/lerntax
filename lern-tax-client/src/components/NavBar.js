import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const loggedIn = "LOGGED_I";
  const email = "high";
  const handleLogoutClick = () => {
    console.log("nav");
  };

  const user = {
    id: 1,
  };
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand>
        <Link to="/">LernTax</Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link>
            <Link to="/tax-basics">Basics</Link>
          </ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link>
            <Link to="/calc-tax">Calc</Link>
          </ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link>
            <Link to="/dependents">Dependents</Link>
          </ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link>
            <Link to="/credits">Credits</Link>
          </ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link>
            <Link to="/tax-rates">Rates</Link>
          </ReactBootStrap.Nav.Link>

          {loggedIn === "LOGGED_IN" ? (
            <>
              <ReactBootStrap.Nav.Link>
                <Link to="/dashboard">Dashboard</Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link to={`/profile/${user.id}`}>Profile</Link>
              </ReactBootStrap.Nav.Link>
            </>
          ) : null}
        </ReactBootStrap.Nav>

        <ReactBootStrap.Nav>
          {loggedIn === "LOGGED_IN" ? (
            <>
              <ReactBootStrap.Nav.Link eventKey={2}>
                <Link to="/"> {email}</Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2}>
                <Link to="/" onClick={() => handleLogoutClick()}>
                  {" "}
                  Logout
                </Link>
              </ReactBootStrap.Nav.Link>
            </>
          ) : (
            <ReactBootStrap.Nav.Link eventKey={2}>
              <Link to="/login">Login</Link>
            </ReactBootStrap.Nav.Link>
          )}
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;

import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
    <h1><strong> {props.children}</strong> </h1>
		</a>
		<p>Current Score: <span>{props.score}</span>		Top Score: <span>{props.highScore}</span></p>
  </nav>
);

export default Nav;

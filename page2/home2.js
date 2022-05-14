import React from "react";
import Nav1 from "../Components/nav1";
import Axios from "axios";
import "../App.css";
import { useState } from "react";
import {Det} from "./Det";
import Details from "./details";
// import Table from "react-bootstrap/Table";

import {
  Button,
  Card,
  //Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";



function Home() {
 
  return (
    <div>
      <Nav1 />

      <header className="App-header">
        <div className="Reg">
          <center>
            <p className="card-category">Welcome to Home Page</p>
          </center>
        </div>
      </header>
      
      <Details/>
     
      <br></br>
      <br></br>
      <br></br>
      <Card.Header>
        <Card.Title
          as="h4"
          style={{ justifyContent: "space-around", display: "flex" }}
        >
          Request!
        </Card.Title>
      </Card.Header>
      <Det/>
      <Card.Body
        style={{
          color: "blue",
          fontsize: "50px",
          fontFamily: "Bodoni 72 Oldstyle",
          justifyContent: "space-around",
          display: "flex",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
          borderTop: "1px solid grey",
          borderLeft: "10px solid grey",
          borderRight: "10px solid grey",
        }}
        >

        </Card.Body>
    </div>
  );
}

export default Home;

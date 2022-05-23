import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../../App.css";
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import TextField from '@mui/material/TextField';
import { AppBar, Toolbar } from "@mui/material";
import Button  from '@mui/material/Button';
function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [RoleReg, setRoleReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      role: RoleReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log(response.data);
        // navigate("/");
      } else {
        setLoginStatus(response.data[0].username);
        console.log(setLoginStatus);
        // navigate("/");
      }
    });
  };
  

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
        console.log(response.data.user[0].username);
        // navigate("/");
      }
    });
  }, []);
  const myStyle={
    backgroundImage: 
"url('https://images.pexels.com/photos/1600139/pexels-photo-1600139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

  return (
  <div  style={myStyle}>
    <div className="App">
      {/* <AppBar position="static" > */}
      {/* <div class="Reg"> */}
        <Toolbar>
        {/* <a class="active" href="#home"> */}
        
         </Toolbar>
        {/* </a> */}
        {/* <a href="#news">Home</a> */}
        {/* <a href="#contact">Contact</a> */}
        {/* <a href="#about">About</a> */}
      {/* </div> */}
      {/* </AppBar> */}
      <Card sx={{ marginLeft:"350px",maxWidth: 645 ,background:'rgba(0.5,0,0.5,0)'}}>
      <div className="information">
        <h1>Registration</h1>
        <TextField variant="outlined"
        label="Username"
        input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <TextField variant="outlined"
        label="Password"
        input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <TextField variant="outlined"
        label="Role"
        input
          type="text"
          onChange={(e) => {
            setRoleReg(e.target.value);
          }}
        />
        <br></br>
        <Button variant="outlined"  onClick={register}> Register </Button>
      </div>

      <div className="information">
        <h1>Login</h1>
        <TextField 
        input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
        input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /><br></br>
        <Button variant="outlined" onClick={login}> Login </Button>
        {/* onPress={() => navigation.navigate('Details')} */}
      </div >
      </Card>
      <h1 > WELCOME {loginStatus}</h1>
      
    </div>
   
    </div>
  );
}

export default Registration;

{
  /* <>
  <Form.Group className="mb-3">
    <Form.Label>Disabled input</Form.Label>
    <Form.Control placeholder="Disabled input" disabled />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Disabled select menu</Form.Label>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Can't check this" disabled />
  </Form.Group>
</> */
}

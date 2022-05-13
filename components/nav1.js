import { Login, ShoppingCartOutlined, Typograph, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//import Categories from "./Categories";
import { Person} from 'react-bootstrap-icons';


const Container = styled.div`
  height: 60px;
  padding:10px;
  border:10px;
  colour:black;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 25px;
  ${mobile({ paddingLeft: "0px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Links = styled.h3`
  font-size: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px" })}
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Farm Alive</Logo>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Links>Home</Links>
          </Link>
          <Link to="../profile" style={{ textDecoration: "none", color: "black" }}>
          <Links>Profile</Links>
          </Link>  
        </Center>
        <Right>



          <MenuItem >
          <ul>
                  <Link to="../landing"><Person /></Link>        
                </ul>
          </MenuItem>
          <MenuItem>  
               <ul>
                  <Button><Link to="../register" style={{ textDecoration: "none", color: "black" }}>Register </Link></Button>
                </ul>
                </MenuItem>
 
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

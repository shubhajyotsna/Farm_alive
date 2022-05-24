import React, {useState,useEffect} from "react";
import {AppBar, Toolbar } from "@mui/material";

import Button  from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { items } from "./card.js";
import {
    Card,
    //Navbar,
    Form,
    Row,
    Col,
  } from "react-bootstrap";
const Shop = () => {
    <Card/>
    const [cart,setCart] =useState([]);
    const [cartTotal, setCartTotal] = useState(0);
   
  
      useEffect(() => {
        total();
      }, [cart]);
    
      const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
          totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
      };
    
      const addToCart = (el) => {
          setCart([...cart, el]);
      };
    
      const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
      };
    
      const listItems = items.map((el) => (
        
        <TableRow
            key={el.ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } , bgcolor: 'text.disabled'}}
            >
        <TableCell component="th" scope="row">
         {el.ID} 
        </TableCell>
        <TableCell  align="center" >{el.type}</TableCell>
        <TableCell align="center" >{el.name}</TableCell>
        <TableCell align="center" >{el.area}</TableCell>
        <TableCell align="center" >{el.phone}</TableCell>
        <TableCell align="center">{el.price}</TableCell>
        {/* {`${el.name} ${el.area} ${el.phone} ${el.price}`} */}
        <TableCell align="center">
          <Button input type="submit" value="add" onClick={() => addToCart(el)} variant="contained">Book</Button>
          </TableCell>
       
        
        {/* </Table> */}
        </TableRow>
      
      ));
 

    
      const cartItems = cart.map((el) => (
        <div key={el.ID}>
         <TableCell align="center" >{el.type}</TableCell>
        <TableCell align="center" >{el.name}</TableCell>
        <TableCell align="center" >{el.area}</TableCell>
        <TableCell align="center" >{el.phone}</TableCell>
        <TableCell align="center" >{el.price}</TableCell>
          <Button input type="submit" value="remove" onClick={() => removeFromCart(el)} variant="contained" >Remove</Button>
        </div>
      ));
    
      return (
        <div>
            <AppBar position="static">
      <Card.Header>
        <Card.Title>
          <center>
         <h2>BOOK NOW!</h2>
         </center>
        </Card.Title>
      </Card.Header>
      </AppBar>
      <Card sx={{ marginLeft:"350px",maxWidth: 456 ,background:'rgba(0.5,0.8,0.5,0.5)'}}>
          <div align="center">{listItems}</div>
          <div align="center">BOOKED</div>
          <div align="center">{cartItems}</div>
          <div align="center">Total: Rs{cartTotal}</div>
          </Card>
        </div>
      );
    };
    
    export default Shop;

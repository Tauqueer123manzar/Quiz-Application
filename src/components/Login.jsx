import React, { useState } from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Topbar from './Topbar'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const[user,setUser]=useState({username:"",password:""});
  const navigate=useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(user);
    const Storeduser= JSON.parse(localStorage.getItem('user'));
    if(Storeduser.username===user.username && Storeduser.password===user.password){
         localStorage.setItem("isLoggedIn",true);
         alert("Login Sucessfully");
         navigate("/");
    }else{
      alert("Incorrect username and password");
    }
  }

  return (
    <>
      <Topbar/>
      <Container fluid style={{height:"100%",width:"100%"}}>
        <Row style={{height:"100%",width:"100%"}}>
            <h1 className='text-center mt-5' style={{fontFamily:"initial",fontWeight:"bold"}}>User Login</h1>
          <Col xs={12} md={8} className='d-flex justify-content-center align-items-center mt-2 w-100'>
            <Form className='p-5 bg-white shadow-lg'  style={{width:"500px"}} onSubmit={handlesubmit}>
              <Form.Group className='m-4'>
                 <Form.Label>Username</Form.Label>
                 <Form.Control
                  type='text'
                  placeholder='Username'
                  value={user.username}
                  onChange={(e)=> setUser({...user,username:e.target.value})}
                  style={{width:"100%"}}
                  />
              </Form.Group>
              <Form.Group className='m-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                 type='password'
                 placeholder='Password'
                 value={user.password}
                 onChange={(e)=> setUser({...user,password:e.target.value})}
                 style={{width:"100%"}}
                 />
              </Form.Group>

              <div className='d-flex justify-content-center align-items-center'>
                <Button variant='primary' type='submit' className='w-100 m-4'>
                  Login
                </Button>
              </div>
              <p className='text-center'>If you have a no account? <a href='/register' className='text-decoration-none'>Register</a></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login

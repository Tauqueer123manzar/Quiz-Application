import React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Topbar from './Topbar';
const Register = () => {
  const[user,setUser]=useState({username:"",password:""});
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(user);
    localStorage.setItem("user",JSON.stringify(user));
    navigate("/login");
  }
  return (
  <>
  <Topbar/>
    <Container fluid style={{height:"100%",width:"100%"}}>
      <Row className='bg-white' style={{height:"100%",width:"100%"}}>
          <h1 className='text-center mt-5 text-dark' style={{fontFamily:"initial",fontWeight:"bold"}}>User Register</h1>
          <Col xs={12} md={8} className='d-flex justify-content-center align-items-center mt-4 w-100'>
          <Form className='p-5 bg-rounded shadow-lg' style={{width:"500px"}} onSubmit={handlesubmit}>
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

            <div className=' d-flex justify-content-center align-items-center'>
            <Button variant="primary" type="submit" className="w-100 m-4">
                  Register
            </Button>
            </div>
            <p className='text-center'>If you have already account? <a href='/login' className='text-decoration-none'>Login</a></p>
          </Form>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default Register

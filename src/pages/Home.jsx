import React from 'react';
import Topbar from '../components/Topbar';
import {Container,Row,Col} from 'react-bootstrap';
import Quiz from '../components/Quiz'
const Home = () => {
  return (
   <>
    <Topbar/>
    <Container fluid style={{height:"100%",width:"100%"}}>
       <Row className='bg-primary'>
         <h1 className='text-center mt-2 text-white'>Quiz App</h1>
         <p className='text-center mt-2' style={{fontSize:"30px",fontFamily:"initial"}}>Let's Play</p>
         <Quiz/>
       </Row>
    </Container>
   </>
  )
}

export default Home

import React from 'react';
import Topbar from '../components/Topbar';
import {Container,Row,Col} from 'react-bootstrap';
import Quiz from '../assets/Quiz-image.png';
const Home = () => {
  return (
   <>
    <Topbar/>
    <Container fluid style={{height:"100%",width:"100%"}}>
       <Row className='bg-primary'>
         <Col xs={12} md={12} lg={12} className='d-flex justify-content-center align-items-center mt-5' style={{height:"100%",width:"100%"}}>
          <img src={Quiz} alt='quiz' style={{width:"400px",height:"300px"}}/>
         </Col>
         <h1 className='text-center mt-5 text-white'>Quiz App</h1>
         <p className='text-center mt-5' style={{fontSize:"30px"}}>Let's Play</p>
       </Row>
    </Container>
   </>
  )
}

export default Home

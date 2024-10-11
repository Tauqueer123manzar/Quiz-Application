import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
// import Quizdata from '../Data/Quizdata';
import '../App.css'
import { Quizdata } from '../Data/Quizdata'
const Quiz = () => {
  return (
  <>
   <Container fluid style={{height:"100%",width:"100%"}}>
   <Row>
     <Col xs={10} md={6} className='d-flex justify-content-center align-items-center w-100'>
      <div className='box mb-5 shadow-lg'>
        <div className='question m-4'>
           <p className='p-5' style={{fontSize:"25px"}}>"Which of the following is a JavaScript framework?"</p>
        </div>

        <div className='options-container'>
          {
            Quizdata[0].options.map((option,index)=>{
              return(
                <Button className='option-btn btn btn-light shadow' style={{marginLeft:"70px",marginTop:"15px"}}>

                </Button>
              )
            })
          }
        </div>
        <div className='d-flex justify-content-center'>
       <Button variant="outline-info" type='button' className='w-25 mt-4'>
        Next
       </Button>
       </div>
      </div>
     </Col>
   </Row>
   </Container>
  </>
  )
}

export default Quiz

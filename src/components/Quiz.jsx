import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../App.css'
import { Quizdata } from '../Data/Quizdata'

const Quiz = () => {
   const [currentquestion, setCurrentquestion] = useState(0);

   
   const ChangeQuestion = () => {
    if (currentquestion < Quizdata.length - 1) {
      setCurrentquestion(currentquestion + 1); 
    } else {
      
    }
  };

  return (
    <>
      <Container fluid style={{ height: "100%", width: "100%" }}>
        <Row>
          <Col xs={10} md={6} className='d-flex justify-content-center align-items-center w-100'>
            <div className='box mb-5 shadow-lg'>
              <div className='question m-4 p-4 text-center'>
                <span className='question-number'>{currentquestion + 1}. </span>
                <span className='question-text'>{Quizdata[currentquestion].question}</span>
              </div>

              <div className='options-container mt-5'>
                {
                  Quizdata[currentquestion].options.map((option, index) => {
                    return (
                      <Button 
                        key={index}
                        className='option-btn btn btn-light shadow' 
                        style={{ marginLeft: "70px", marginTop: "15px" }}
                      >
                        {option}
                      </Button>
                    );
                  })
                }
              </div>

              <div className='d-flex justify-content-center mt-4'>
                <Button 
                  variant="outline-info" 
                  type='button' 
                  className='w-25 mt-4' 
                  onClick={ChangeQuestion}
                >
                  Next
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Quiz;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Quizdata } from '../Data/Quizdata';
import '../App.css';

const Quiz = () => {
  const [currentquestion, setCurrentquestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedoption, setClickedoption] = useState(null);
  const [timer, setTimer] = useState(60);
  const [quizFinished, setQuizFinished] = useState(false); 

  // Timer countdown logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    if (timer === 0) {
      handleTimeout();
    }

    return () => clearInterval(countdown);
  }, [timer, currentquestion]);

  useEffect(() => {
    setTimer(60); 
  }, [currentquestion]);


  const ChangeQuestion = () => {
    if (clickedoption != null) {
      updateScore();
    }
    moveToNextQuestion();
  };

  const handleTimeout = () => {
    if (clickedoption === null) {
      alert('Time is up! Moving to the next question.');
    }
    moveToNextQuestion();
  };


  const moveToNextQuestion = () => {
    if (currentquestion < Quizdata.length - 1) {
      setCurrentquestion(currentquestion + 1);
      setClickedoption(null); 
    } else { 
      setQuizFinished(true);
    }
  };

  const updateScore = () => {
    if (clickedoption === Quizdata[currentquestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <>
      {!quizFinished ? (
        <Container fluid style={{ height: '100%', width: '100%' }}>
          <Row>
            <Col xs={10} md={6} className="d-flex justify-content-center align-items-center w-100">
              <div className="box mb-5 shadow-lg">
                <div className="question m-4 p-4 text-center">
                  <span className="question-number">{currentquestion + 1}. </span>
                  <span className="question-text">{Quizdata[currentquestion].question}</span>
                </div>

                <div className="timer text-center">
                  <h4>Time Left: {timer} seconds</h4>
                </div>

                <div className="options-container mt-5">
                  {Quizdata[currentquestion].options.map((option, index) => {
                    return (
                      <Button
                        key={index}
                        variant={clickedoption === index + 1 ? 'success' : 'outline-success'}
                        className={`option-btn btn btn-light shadow ${clickedoption === index + 1 ? 'checked' : ''}`}
                        onClick={() => setClickedoption(index + 1)}
                        style={{ marginLeft: '70px', marginTop: '15px' }}
                      >
                        {option}
                      </Button>
                    );
                  })}
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <Button variant="outline-info" type="button" className="w-25 mt-4" onClick={ChangeQuestion}>
                    Next
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid className="quiz-end-container text-center">
          <div className="congrats-message">
            <h1>Congratulations!</h1>
            <h3>Your Score: {score} / {Quizdata.length}</h3>
          </div>
          <div className="flower-animation">
            <img src="https://media1.tenor.com/m/1IPOZiZ6Z4AAAAAC/congratulations.gif" alt="celebration" className="celebration-gif"/>
          </div>
        </Container>
      )}
    </>
  );
};

export default Quiz;

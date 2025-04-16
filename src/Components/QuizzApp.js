import React, { useState } from "react";

const questions = [
    {
        questionText : "What is the capital of France?",
        answerOptions : [
            {answerText : 'Paris', isCorrect : true},
            {answerText : 'London', isCorrect : false},
            {answerText : 'Berlin', isCorrect : false},
            {answerText : 'Madrid', isCorrect : false}
        ],
    },
    {
        questionText : "Who invented the telephone?",
        answerOptions : [
            {answerText : 'Marie Curie', isCorrect : false},
            {answerText : 'Thomas Edison', isCorrect : false},
            {answerText : 'Nikola Tesla', isCorrect : false},
            {answerText : 'Alexander Graham Bell', isCorrect : true}
        ],
    },
    {
        questionText : "What is the capital of India?",
        answerOptions : [
            {answerText : 'Bengaluru', isCorrect : false},
            {answerText : 'Pune', isCorrect : false},
            {answerText : 'Delhi', isCorrect : true},
            {answerText : 'Hyderabad', isCorrect : false}
        ],
    }
]

const QuizzApp = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [optionClicked, setOptionClicked] = useState(false)

    const nextQuestion = () => {
        setOptionClicked(false)
        const lastQuestion = currentQuestion + 1;
        
        if(lastQuestion < questions.length) {
            setCurrentQuestion(lastQuestion);
        } else {
            setShowScore(true)
        }
    }
    const handleAnsweredOption = (index, isCorrect) => {
        setSelectedAnswer(index);
        setOptionClicked(true)
        if(isCorrect){
            setScore(score + 1)
        }
    }
   

    return <>
        <h3>QUIZ APP</h3>
        {showScore ? <div>
            you scored {score} of {questions.length}
        </div> :
        <div>
            <div>
                {questions[currentQuestion].questionText}
            </div>
            <div>
                {questions[currentQuestion].answerOptions.map((option, index) => (
                    <button onClick={() => {handleAnsweredOption(index, option.isCorrect)}} key={index}>
                        {option.answerText}
                    </button>
                ))}
            </div>
            { optionClicked ? <div>your selected option was {selectedAnswer  + 1} </div> : <div>Please select one of them</div>}
            <button  onClick={nextQuestion}>Next Question</button>
            <p>Question {currentQuestion + 1} / {questions.length}</p>
        </div>
}
    </>
}

export default QuizzApp
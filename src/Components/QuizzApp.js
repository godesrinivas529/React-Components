import React,{useState} from "react";

const quizQuestions = [
    {
      id : 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
        id : 2,
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Marie Curie"],
      answer: "Alexander Graham Bell"
    },
    {
        id : 3,
        question: "What is the capital of India?",
        options: ["Bengaluru", "Hyderabad", "Delhi", "Pune"],
        answer: "Delhi"
      },
      {
        id : 4,
        question: "How many States are there in India?",
        options: ["26", "27", "28", "29"],
        answer: "28"
      },
      {
        id : 5,
        question: "When did India gain independence",
        options: ["Aug 15 1947", "Jan 26 1950", "Aug 16 1947", "Jan 26 1948"],
        answer: "Aug 15 1947"
      }
  ];
  

const QuizzApp = () => {

    const [dispalyQuestins, setDisplayQuestions] = useState(quizQuestions);

    const nextQuestion = (e, id) => {
        e.preventDefault();
        setDisplayQuestions((prev) => prev + id )

    }
    const submitButton = (e) => {
        e.preventDefault()
        
    }


    return <>
        <h3>QUIZ APP -- <i>[Under evelopment]</i></h3>
        <h4>Question</h4>
        {dispalyQuestins.map((eachObj) => {
            const {id, question, options} = eachObj;
            return <li key={id}>{question}
                <div>
                    <input type="radio" name="option" value='option1' />{options[0]}
                    <input type="radio" name="option" value='option2' />{options[1]}
                    <input type="radio" name="option" value='option3' />{options[2]}
                    <input type="radio" name="option" value='option4' />{options[3]}
                </div>
            </li>
        })}
        <button onClick={nextQuestion}>Next</button>
        <button onCanPlay={submitButton}>Submit</button>
    </>
}

export default QuizzApp
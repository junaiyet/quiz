import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import QuestionItem from '../QuestionItem/QuestionItem';

const Question = () => {
    const questionsAll = useLoaderData();
    const questions = questionsAll.data.questions
    const [answer,setAnswer] = useState({currectAnswer:0,wrongAnswer:0})

    const rightAnswer =()=> setAnswer(prev=>({
      ...prev,
      currectAnswer:prev.currectAnswer+1
    }))
    const wrongAnswer =()=> setAnswer(prev=>({
      ...prev,
      wrongAnswer:prev.wrongAnswer+1
    }))
  return (
    <div>
        <div className="container mt-5 d-flex">
        <h2>Question </h2>
        <div className="col-md-10">
        {
            questions.map(ques=><QuestionItem rightAnswer={rightAnswer} wrongAnswer={wrongAnswer} key={ques.id} ques={ques} />)
        }
        </div>
      <div className="col-md-2">
        <div className="d-flex">
          <h3>Total Question :</h3><h3>{questions.length}</h3>
        </div>
        <div className="d-flex">
          <h3>Total Right : </h3><h3>{answer.currectAnswer}</h3>
        </div>
        <div className="d-flex">
          <h3>Total worng : </h3><h3>{answer.wrongAnswer}</h3>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Question

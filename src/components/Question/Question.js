import React from 'react'
import { useLoaderData } from 'react-router-dom'
import QuestionItem from '../QuestionItem/QuestionItem';

const Question = () => {
    const questionsAll = useLoaderData();
    const questions = questionsAll.data.questions
  return (
    <div>
        <div className="container mt-5">
        <h2>Question </h2>
        {
            questions.map(ques=><QuestionItem key={ques.id} ques={ques} />)
        }

        </div>
    </div>
  )
}

export default Question

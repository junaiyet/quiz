import React from 'react'
import { useNavigate } from 'react-router-dom'
import './QuizItem.css'
const QuizItem = ({quiz}) => {
    const {id,name,logo,total}= quiz
    const navigate = useNavigate()
    const handleQuidz =()=>{
        navigate(`/quizItem/${id}`)
    }
  return (
    
        <div className=' col-md-3'>
            <div className="quiz-item">
        <div className="logo">
            <img className='img-fluid' src={logo} alt="" />
        </div>
        <div className="content-area d-flex justify-content-between align-items-center mt-2">
            <div className="content">
            <h4>{name}</h4>
            <p><small>Total Quiz : {total}</small></p>
            </div>
            <div className="button">
                <button onClick={handleQuidz} className='btn btn-sm btn-primary cursor-pointor'>Start Quiz</button>
            </div>
        </div>

            </div>
        </div>

  )
}

export default QuizItem
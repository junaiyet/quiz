import React, { useState } from 'react'
import './QuestionItem.css'
import {AiFillEye} from 'react-icons/ai'
const QuestionItem = ({ques,wrongAnswer,rightAnswer}) => {
    const [currect, setCurrect] = useState(null);
    const [isDesable, setIsDisable] =useState(false)
    const {question,options,correctAnswer} = ques
    const handleCurectAnswer =(answer)=>{
        setIsDisable(true)
        if(answer === correctAnswer){
           rightAnswer()
            return  setCurrect(true)
        }
        wrongAnswer()
        return setCurrect(false)
    }
  const handleAnswer =()=>{
    alert(correctAnswer)
  }
  return (
    <div className='question_items d-flex justify-content-between'>
        <div className="">
        <h3>Qustion : {question}</h3>
        <div className="option">
           {
            options.map((opt,i)=> <ul key={i}>
                <li  onClick={()=>handleCurectAnswer(opt)} className={isDesable ? `disabled` : ''}>{opt}</li>
            </ul>)
           }
           { currect && <div className="alert alert-success"> Your Answer Currect</div> 
            
            }
            
           { currect !== null  && !currect && <div className="alert alert-danger"> Your Answer Currect</div> 
            
            }
            
        </div>
        </div>

        <div className={`eye ${currect ? 'disabled' : ''}`}>
             <AiFillEye onClick={handleAnswer} />
        </div>
     </div>
  )
}

export default QuestionItem
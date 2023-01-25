import React from 'react'
import './BannerContent.css'
import banner from '../../assets/quiz.png'
const BannerContent = () => {
  return (
    <div className='row'>
        <div className="col-md-6">
            <div className="quiz_banner">
                <img className='img-fluid' src={banner} alt="" />
            </div>
        </div>
        <div className="col-md-6">
            <h2>Quiz</h2>
            <p >When You Join Quiz . You Can Improve Yourself</p>
        </div>
    </div>
  )
}

export default BannerContent
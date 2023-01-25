import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BannerContent from '../BannerContent/BannerContent';
import QuizItem from '../QuizItem/QuizItem';
import './Home.css'
const Home = () => {
    const quizzes = useLoaderData();
    const quizs = quizzes.data
  return (
    <div>
        <div className="container">
        <div className="banner-content container mt-5">
           
                <BannerContent/>
         
        </div>
        <div className='quiz-items row mt-5'>
        {
            quizs.map(quiz=><QuizItem key={quiz.id} quiz={quiz} />)
        }
        </div>

        </div>
    </div>
  )
}

export default Home
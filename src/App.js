import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Question from './components/Question/Question';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Main/>,children:[
      {
        path:'/',
         loader: async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
         },
        element:<Home/>     
      },
      {
        path:'/quizItem/:quizItemId',
         loader: async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizItemId}`)
         },
        element:<Question/>     
      },
    ]
  }
])
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;

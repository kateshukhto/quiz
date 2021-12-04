import Header from '../Header/Header';
import Home from '../Pages/Home/Home';
import Quiz from '../Pages/Quiz/Quiz';
import Result from '../Pages/Result/Result';
import {Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchingQuiz } from '../../Data/Categories';
import './App.css'


function App() {
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [questions, setQuestions] = useState([])
  const navigate = useNavigate()

  const getQuestions = (cat, dif) => {
    fetchingQuiz(cat, dif)
    .then((data) => {
      setQuestions(data)
      setTotal(data.length)
      navigate('/quiz')
    })
  }

  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home getQuestions={getQuestions}/>}/>
        <Route exact path='/quiz' 
          element={<Quiz
          total={total}
          score={score}
          questions={questions}
          setScore={setScore}
          setQuestions={setQuestions}/>}/>
        <Route exact path='/result' element={<Result total={total} score={score}/>}/>
      </Routes>
    </div>
  );
}

export default App

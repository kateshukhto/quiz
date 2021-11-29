import Header from '../Header/Header';
import {Routes, Route } from 'react-router-dom';

import axios from 'axios';
import './App.css';
import Home from '../Pages/Home/Home';
import Quiz from '../Pages/Quiz/Quiz';
import Result from '../Pages/Result/Result';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const fetchingQuiz = async (category, difficulty) => {
  const result = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  return await result.data
}

function App() {
  const [name, setName] = useState('')
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([])
  const navigate = useNavigate()


  const getQuestions = (cat, dif) => {
    fetchingQuiz(cat, dif)
    .then((data) => {
      setQuestions(data.results)
      navigate('/quiz')
    })
  }

  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home name={name} setName={setName} getQuestions={getQuestions}/>}/>
        <Route exact path='/quiz' 
          element={<Quiz name={name}
          score={score}
          questions={questions}
          setScore={setScore}
          setQuestions={setQuestions}/>}/>
        <Route exact path='/result' element={<Result
          name={name}
          score={score}
          />}/>
      </Routes>
    </div>
  );
}

export default App

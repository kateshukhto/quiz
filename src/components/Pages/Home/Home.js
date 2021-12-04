import { useState } from 'react';
import ImageQuiz from './quiz.svg';
import './Home.css'
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Categories } from '../../../Data/Categories';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

const Home = ({getQuestions}) => {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if(!difficulty || !category){
      setError(true)
    } else {
      setError(false)
      getQuestions(category, difficulty)
    }
  }

  return (
    <div className='home__container'>
      <img className='home__banner' src={ImageQuiz} alt='Quiz banner'/>  
      <div className='home__setting'>
        <h3 className='home__title'>Quiz Setting</h3>
        <div className='setting__select'>
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            select
            style={{marginBottom: 20}}
            label='Select category'
            variant='outlined'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((category) => (
                <MenuItem key={category.category} value={category.value}>
                  {category.category}
                </MenuItem>
              
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 20 }}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button 
            variant='contained' 
            color='primary'
            size='large'
            onClick={handleSubmit}
            >Start Quiz</Button>
      </div>

      </div>
    </div>
  )
}

export default Home;
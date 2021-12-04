import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router"
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Star from '../../img/star.png'
import './Question.css'

const Question = ({
  currQues,
  setCurrQues,
  star,
  questions, 
  options, 
  total,
  correct,
  setScore,
  score,
  setQuestions
  }) => {

  const [error, setError ] = useState(false)
	const [selected, setSelected] = useState()

  const navigate = useNavigate()
  
  const handleClick = (i) => {
    setSelected(i)
      if(i === correct) {
        setScore(score + 1)
      } 
      setError(false)
    }

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  const handleNext = () => {
    if(currQues > 8) {
      navigate('/result')
    } else if (selected) {
      setCurrQues(currQues + 1)
      setSelected()
    } else {
      setError("Please select an option first")
    }
  }

  return (
    <div className='question'>
      <div className='question__block'>
        <div className='question__count'>{currQues + 1}/{total} </div>
        <span className='question__text' dangerouslySetInnerHTML={{__html: questions[currQues].question}} />
        <div className='question__star'>
            {
              star.map(i => {
                return <img className='star' key={i} src={Star} alt='score'/>
              })
            } 
        </div>
      </div>

      <div className='question__answer'>

        <div className='answer__options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options.map(i => {
              return (
                <button
                  className={`option ${selected && handleSelect(i)}`}
                  key={i}
                  onClick={() => handleClick(i)}
                  disabled={selected}>
                    <span dangerouslySetInnerHTML={{__html: i}} />
                  </button>
              )
            })
          }
        </div>
        <div className='controls'>
          <Button
            className='btn'
            variant='contained'
            color='secondary'
            size='large'
            href='/'
            onClick={() => handleQuit()}>
            Quit
          </Button>
          <Button
            className='btn'
            variant='contained'
            color='primary'
            size='large'
            onClick={() => handleNext()}
            >
              Next Question
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Question;
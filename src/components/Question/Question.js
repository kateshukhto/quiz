import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './Question.css'

const Question = ({
  currQues, 
  setCurrQues, 
  questions, 
  options, 
  correct, 
  score, 
  setScore, 
  setQuestions}) => {
  
  const [selected, setSelected] = useState()
  const [error, setError ] = useState(false)

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
    <div>
      <h2>Question {currQues + 1}</h2>

      <div className='single__option'>
        <span dangerouslySetInnerHTML={{__html: questions[currQues].question}} />

        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options.map(i => {
              return (
                <button
                className={`single__option ${selected && handleSelect(i)}`}
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
            variant='contained'
            color='secondary'
            size='large'
            style={{width: 185}}
            href='/'
            onClick={() => handleQuit()}>
            Quit
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='large'
            style={{width: 185}}
            onClick={() => handleNext()}
            >
            {currQues > 20 ? 'Submit' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Question;
import { useEffect, useState } from 'react'
import Question from '../../Question/Question'

const Quiz = ({questions, score, setQuestions, setScore, total}) => {
	const [options, setOptions] = useState([])
  const [currQues, setCurrQues] = useState(0)

	useEffect(() => {
		setOptions(
			questions &&
          handleShuffle([
          	questions[currQues]?.correct_answer,
          	...questions[currQues]?.incorrect_answers,
          ])
		)
	}, [currQues, questions])

  const star = []

  for(let i = 1; i <= score; i++ ) {
    star.push(i)
  }
  
	const handleShuffle = (options) => {
		return options.sort(() => Math.random() - 0.5)
	}

	return (
			<Question
				currQues={currQues}
				setCurrQues={setCurrQues}
				score={score}
				star={star}
				total={total}
				questions={questions}
				options={options}
				correct={questions[currQues]?.correct_answer}
				setScore={setScore}
				setQuestions={setQuestions}/>
	)
}

export default Quiz
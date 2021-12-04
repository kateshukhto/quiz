import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Star from '../../../img/star.png'
import './Result.css'

const Result = ({total, score}) => {
  const navigator = useNavigate()

  useEffect(() => {
    if(!total) {
      navigator('/')
    }
  }, [total, navigator])

  return (
    <div className='result'>
      <img className='result__img' src={Star} alt='final score'/>
      <span className='result__title'>Final Score : {score}</span>
      <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          href="/">
        Go To Homepage
      </Button>
    </div>
  )
}

export default Result;
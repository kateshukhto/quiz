import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import './Result.css'

const Result = ({name, score}) => {
  const navigator = useNavigate()

  useEffect(() => {
    if(!name) {
      navigator('/')
    }
  }, [name, navigator])

  return (
    <div className='result'>
      <span className='title'>Final Score : {score}</span>
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
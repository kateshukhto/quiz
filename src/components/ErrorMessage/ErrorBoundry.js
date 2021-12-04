import { Component } from "react"
import { Button } from "@material-ui/core";
import ErrorMessage from "./ErrorMessage"

class ErrorBoundry extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{margin: '50px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ErrorMessage>
          <h2>Something went wrong. Try again</h2>
        </ErrorMessage>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: 20, width: 200}}
          href="/">
          Go To Homepage
        </Button>
        </div>
      ) 
    }

    return this.props.children
  }
}

export default ErrorBoundry
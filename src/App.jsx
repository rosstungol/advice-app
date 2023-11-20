import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"

const App = () => {
  const [advice, setAdvice] = useState("")

  useEffect(() => {
    fetchAdvice()
  }, [])

  function fetchAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip
        setAdvice(advice)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>Give me an advice!</span>
        </button>
      </div>
    </div>
  )
}

export default App

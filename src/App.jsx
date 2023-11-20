import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"

const App = () => {
  const [advice, setAdvice] = useState("")
  console.log(advice)
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

  return <h1>Hi</h1>
}

export default App

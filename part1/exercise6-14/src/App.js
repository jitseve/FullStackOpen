import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => setCounter(counter + 1)
  const decrementCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return(
    <div>
      <Display counter={counter}/>
      <Button onClick={incrementCounter} text='plus'/>
      <Button onClick={resetCounter} text='reset'/>
      <Button onClick={decrementCounter} text='minus'/>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

export default App
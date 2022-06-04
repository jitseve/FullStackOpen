import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  return(
    <div>
      <Title text='Give Feedback'/>
      <Button onClick={goodFeedback} text='good'/>
      <Button onClick={neutralFeedback} text='neutral'/>
      <Button onClick={badFeedback} text='bad'/>
      <Title text='Statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} txtGood='Good' txtNeutral='Neutral' txtBad='Bad'
      txtAll='Amount of Feedback' txtAverage='Average score' txtPerc='Percentage of positive feedback'/>
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

const Title = ({text}) => <div><h1>{text}</h1></div>

const Statistics = (props) => {
  let nFeedback = props.good + props.bad + props.neutral
  // *10 /10 for rounding on 1 decimal spot
  let averageScore = Math.round((props.good*1 + props.bad*-1 + props.neutral*0) / nFeedback *10)/10
  let percPositive = Math.round((props.good / nFeedback) * 100 *10)/10 + ' %'

  if(nFeedback === 0){
    return (
      <div><p>"No Feedback has been given"</p></div>
    );
  }
  return(
    <div>
      <table><tbody>
        <StatisticsLine text={props.txtGood} number={props.good}/>
        <StatisticsLine text={props.txtNeutral} number={props.neutral}/>
        <StatisticsLine text={props.txtBad} number={props.bad}/>
        <StatisticsLine text={props.txtAll} number={nFeedback}/>
        <StatisticsLine text={props.txtAverage} number={averageScore}/>
        <StatisticsLine text={props.txtPerc} number={percPositive}/>
      </tbody></table>
    </div>
  )

}

const StatisticsLine = ( {text, number}) =><tr><td>{text}</td><td>{number}</td></tr>

export default App
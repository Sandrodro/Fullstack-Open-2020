import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [goodNum, setGoodNum] = useState(0);
  const [neutralNum, setNeutralNum] = useState(0);
  const [badNum, setBadNum] = useState(0);

  const handleGood = () => { setGoodNum(goodNum + 1) };
  const handleNeutral = () => { setNeutralNum(neutralNum + 1) };
  const handleBadNum = () => { setBadNum(badNum + 1) };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        name="good"
        handleClick={handleGood} />
      <Button
        name="neutral"
        handleClick={handleNeutral} />
      <Button
        name="bad"
        handleClick={handleBadNum} />
      <h1>Statistics</h1>
      <Statistics
        goodNum={goodNum}
        neutralNum={neutralNum}
        badNum={badNum} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const Statistics = (props) => {

  let sum = props.goodNum + props.neutralNum + props.badNum;
  let score = (props.goodNum - props.badNum) / sum;
  let positive = props.goodNum / sum * 100;

  return (
    sum > 0 ?
      <div>
        <table>
          <Statistic
            name="good"
            value={props.goodNum} />
          <Statistic
            name="neutral"
            value={props.neutralNum} />
          <Statistic
            name="bad"
            value={props.badNum} />
          <Statistic
            name="all"
            value={sum} />
          <Statistic
            name="average"
            value={sum > 0 ? score : 0} />
          <Statistic
            name="positive"
            value={sum > 0 ? positive + " %" : 0 + " %"} />
        </table>
      </div> :
      <p>No feedback given</p>
  )
}

const Statistic = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
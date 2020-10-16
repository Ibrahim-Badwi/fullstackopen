import React from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value}) => {
  return (
    <>
      {/* <p>{text} {value}</p> */}
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  </>
  )
};

const Statistics = ({ good, neutral, bad }) => {
  if (good | neutral | bad) {
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <tr><td>all</td><td>{good + neutral + bad}</td></tr>
            <tr><td>average</td><td>{(good + neutral + bad) / 3}</td></tr>
            <tr><td>positive</td><td>{(good / (good + neutral + bad)) * 100}</td></tr>
          </tbody>
        </table>
      </>
    )
  }

  return (<p>No feedback given</p>)
};

const App = () => {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)

  return (
    <>
      <h2>give a feedback</h2>
      <Button text="good" handleClick={handleGoodFeedback} />
      <Button text="neutral" handleClick={handleNeutralFeedback} />
      <Button text="bad" handleClick={handleBadFeedback} />
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

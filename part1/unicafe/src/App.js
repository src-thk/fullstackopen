import { useState } from 'react';

const Button = ({ handleclick, text }) => {
  return <button onClick={handleclick}>{text}</button>;
};


const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;

  if (!total) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={total / 3} />
        <StatisticLine text="positive" value={`${good / total * 100} %`} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button handleclick={() => { setGood(good + 1); }} text={"good"} />
      <Button handleclick={() => { setNeutral(neutral + 1); }} text={"neutral"} />
      <Button handleclick={() => { setBad(bad + 1); }} text={"bad"} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
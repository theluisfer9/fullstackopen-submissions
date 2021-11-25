import React, { useState } from "react";

const Header = () => (
  <div>
    <h1>Unicafe feedback collection</h1>
  </div>
);
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
// The statistics component was here since exercise 1.6
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div>
      <h2>Statistics</h2>
      <div>
        <p>
          Total reviews: <b>{total}</b>
        </p>
      </div>
      <div>
        <p>Good reviews: {good}</p>
      </div>
      <div>
        <p>Neutral Reviews: {neutral}</p>
      </div>
      <div>
        <p>Bad Reviews: {bad}</p>
      </div>
      <div>
        <p>Average: {avg}</p>
      </div>
      <div>
        <p>Positive: {positive} %</p>
      </div>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // Click handlers
  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <Header />
      <Button handleClick={handleGoodClick} text="Good Service" />
      <Button handleClick={handleNeutralClick} text="Neutral Service" />
      <Button handleClick={handleBadClick} text="Bad Service" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;

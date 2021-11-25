import React, { useState } from "react";

const Header = () => (
  <div>
    <h1>Unicafe feedback collection</h1>
  </div>
);
// Button component was already extracted since 1.6
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
// The statistics component was here since exercise 1.6
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good - bad) / total;
  const positive = (good / total) * 100;
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>
          <b>Feedback is yet to be received</b>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <Statline text="Good" value={good} />
      <Statline text="Neutral" value={neutral} />
      <Statline text="Bad" value={bad} />
      <Statline text="Total" value={total} />
      <Statline text="Average" value={avg} />
      <Statline text="Positive" value={positive} />
    </div>
  );
};
const Statline = ({ text, value }) => {
  return (
    <div>
      <p>
        <b>{text}</b> : {value}
      </p>
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

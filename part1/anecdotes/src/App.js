import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(Math.round(Math.random() * 6));
  const [votes, setVotes] = useState([]);
  const [maxVotes, setMaxVotes] = useState({ index: selected, votes: 0 });

  return (
    <>
      <h1>Today's random anecdote:</h1>
      <p>{anecdotes[selected]}</p>
      <h3>
        This anecdote has: <b>{votes[selected] || 0}</b> votes
      </h3>
      <button
        onClick={() => {
          const rnd = Math.round(Math.random() * 6);
          console.log(rnd);
          setSelected(rnd);
        }}
      >
        Click for a new random anecdote
      </button>
      <button
        onClick={() => {
          const copy = [...votes];
          copy[selected] = copy[selected] + 1 || 1;
          setVotes(copy);
          // Check if new vote is the highest
          if (copy[selected] > maxVotes.votes) {
            setMaxVotes({ index: selected, votes: copy[selected] });
          }
        }}
      >
        Click to vote for this anecdote
      </button>
      <h1>Anecdote with the most votes:</h1>
      <p>{anecdotes[maxVotes.index]}</p>
      <h3>
        With <b>{maxVotes.votes}</b> votes
      </h3>
    </>
  );
};

export default App;

import { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);
  const copyVotes = [...votes];

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVotes = () => {
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  const updateMostVoted = () => {
    setMostVoted(copyVotes.indexOf(Math.max(...copyVotes)));
  };

  return (
    <>
      <h1>Anectodes of the day</h1>
      <p>{anecdotes[selected]} <br /> has {votes[selected]} votes</p>
      <div>
        <Button handleClick={() => { handleVotes(); updateMostVoted(); }} text="vote" />
        <Button handleClick={selectRandom} text="next anecdotes" />
      </div>
      <h1>Anectodes with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
    </>
  );
};

export default App;
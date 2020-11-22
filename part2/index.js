import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const onClickSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const onClickVote = () => {
    const state = [...vote];
    state[selected]++;
    setVote(state);
  }

  //return the Anecdotes with the most votes
  const mostVotedAnecdotes = () => {
    var mostVoted = 0;
    for(let i = 1; i < vote.length; i++) {
      if(vote[i] > vote[mostVoted]) mostVoted = i;
    }
    return [anecdotes[mostVoted], mostVoted];
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {props.anecdotes[selected]}<br/>
      <button onClick={onClickVote}>vote</button>
      <button onClick={onClickSelect}>next anecdote</button><br/>
      has {vote[selected]} votes<br/>
      <h1>Anecdotes with most votes</h1>
      {mostVotedAnecdotes()[0]}<br/>
      has {vote[mostVotedAnecdotes()[1]]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [selected, setSelected] = useState({
    currentAnecdote: 'If it hurts, do it more often'
  })

  const [votes, setVote] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  })

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected({
      currentAnecdote: anecdotes[random]
    })
    setVote(votes);
  }


  const handleVote = () => {
    const copy = { ...votes };
    copy[anecdotes.indexOf(selected.currentAnecdote)] = copy[anecdotes.indexOf(selected.currentAnecdote)] + 1;
    setVote(copy)
  }

  let mostVotes = Math.max(votes[0], votes[1], votes[2], votes[3], votes[4], votes[5]);
  let mostPosition = Object.keys(votes).find(x => votes[x] == mostVotes);


  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{selected.currentAnecdote}</p>
      <p>has {votes[anecdotes.indexOf(selected.currentAnecdote)]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{mostVotes == 0 ? 0 : anecdotes[mostPosition]}
        <br />
      has {mostVotes} votes
      </p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
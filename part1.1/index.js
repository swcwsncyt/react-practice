import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import FeedbackButton from './components/FeedbackButton.js';
import Statistics from './components/Statistics.js';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    if(e.target.textContent === 'Good') setGood(good + 1);
    else if(e.target.textContent === 'Neutral') setNeutral(neutral + 1);
    else setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <FeedbackButton text="Good" onClick={handleClick} />
      <FeedbackButton text="Neutral" onClick={handleClick} />
      <FeedbackButton text="Bad" onClick={handleClick} />
      <Statistics stats={{good, neutral, bad}}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
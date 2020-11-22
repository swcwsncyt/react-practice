import React from 'react';
import Statistic from './Statistic.js';

const Statistics = ({stats}) => {
  const {good, neutral, bad} = stats;
  const all = good + neutral + bad;
  return (
    <div>
      <h1>Statistics</h1>
      {
        all?
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={all} />
            <Statistic text="Average" value={(good + (bad*(-1)))/all||0} />
            <Statistic text="Positive" value={`${((good/(good + neutral + bad))*100)||0}%`} />
          </tbody>
        </table>:
        "No Feedback Given"
      }
    </div>
  )
}

export default Statistics;
import React from 'react';

const Total = ({parts}) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)
  return (
    <b>total of {total} exercises</b>
  )
}

export default Total;
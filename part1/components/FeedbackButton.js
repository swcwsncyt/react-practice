import React from 'react';

const FeedbackButton = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default FeedbackButton;
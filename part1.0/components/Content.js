import React from 'react';
import Part from './Part.js';

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(item => <Part part={item}/>)}
    </div>
  )
};

export default Content;
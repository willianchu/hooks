import React, { useState } from 'react';

function countInitial() {
  console.log('runs every time the component is rendered');	
  return 4;
}

function App() {
  const [count, setCount] = useState( () => { // anonymous function runs once on component mount
    console.log('run once');
    return 4;
  });
  const [color, setColor] = useState('red');
  
  function decrementCount() {
    setCount(prevCount => prevCount - 1);
    setColor('blue');
  }
  
  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
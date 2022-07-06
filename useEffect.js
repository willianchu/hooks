import React, { useState, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("useEffect runs every time the component is rendered");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)	// fetching the data from the API
    .then(response => response.json())
    .then(dataJSON => setItems(dataJSON));
  }, [resourceType]); // but only if resourceType changes
  // only runs on mount [] and unmount

  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
      <button onClick={() => setResourceType('users')}>Users</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item => {
      return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
  )
}
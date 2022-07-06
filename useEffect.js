import React, { useState, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');

  useEffect(() => {
    console.log("useEffect runs every time the component is rendered");
  }, [resourceType]);

  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
      <button onClick={() => setResourceType('users')}>Users</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  )
}
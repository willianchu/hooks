import React, { useState } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');

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
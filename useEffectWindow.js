import React, { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    console.log("useEffect runs every time the component is rendered");
    window.addEventListener('resize', handleResize);  

    return () => {
      window.removeEventListener('resize', handleResize); // unsubscribe from the event - clean up
    }
  },  [] ); // but only if resourceType changes
  // only runs on mount [] and unmount

  return (
    <>
    <div>
      {windowWidth}
    </div>
    </>
  )
}
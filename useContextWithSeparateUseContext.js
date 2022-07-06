import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';
import { ThemeProvider } from './ThemeProvider';

export default function App() {
  return (
    <ThemeProvider> {/* essentially is a global variable */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
      <ClassContextComponent />
    </ThemeProvider>
  );
}
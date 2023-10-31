import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('white');
  function colorChange(newColor) {
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  }

  return (
    <>
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button onClick={() => colorChange('black')} class="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300 rounded-l-md">
    BLACK
  </button>
  <button onClick={() => colorChange('blue')} class="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
    BLUE
  </button>
  <button onClick={() => colorChange('red')} class="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300">
    RED
  </button>
  <button onClick={() => colorChange('green')} class="px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300 rounded-r-md">
    GREEN
  </button>
  <button onClick={() => colorChange('yellow')} class="px-4 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring focus:border-blue-300">
    YELLOW
  </button>
  <button onClick={() => colorChange('purple')} class="px-4 py-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300 rounded-r-md">
    PURPLE
  </button>
  </div>

    </>
  );
}

export default App;

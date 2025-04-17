
import { useState } from 'react';
import './App.css';
import json from "./data.json";


function App() {
  
  const [ data, setData ] = useState([json]);

  return (
    
    <div className='App'>
      <h1>File/Folder Explorer</h1>
      <div className='container'>
        { data.map((node) => (
          <div>{ node.name }</div>
        ))}
      </div>
      </div>
  )
}

export default App

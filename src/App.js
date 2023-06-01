import './index.css';
import { Directions } from './Directions';
import { Tooltip } from './Tooltip';
import { useState } from 'react';

function App() {
  const[position,setPosition] = useState('right');
  return (<>
  <h1>ToolTip ReactJS</h1>
  <div className="App">
      <Directions setPosition={setPosition} />
      <Tooltip position={position} /> 
    </div>
  </>
    
  );
}

export default App;

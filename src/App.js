
import {useState } from 'react';
import './App.css';

function App() {
  const [value ,setValue] = useState(0)
  

  function handleAdd() {

    setValue((prev) => prev+1)
    

  }

  function handleDec() {

    setValue((prev) => prev-1)
    
    
  }

 
  return (
    <div className="App">
      <header className="App-header">
        <p>Counter: {value}</p>
        <div>
          <button 
          onClick={handleAdd}
          name='Increment'>Increment</button>
          <button 
          onClick={handleDec}
          name='Decrement'>Decrement</button>
        </div>
       
      </header>
    </div>
  );
}

export default App;

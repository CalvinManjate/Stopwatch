import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [time,settime] = useState(0);
  const [running,setrunning] = useState(false)

  useEffect(()=>{
    let interval;

    if (running) {
      interval = setInterval(() => {
        settime((prevtime)=>prevtime + 10);
      }, 10)
    }else if (!running) {
      clearInterval(interval)
    } 
    return ()=>clearInterval(interval)
  },[running])

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
      </div>
      {running && (
        <div>
          <img src='https://ilovetorun.org/images/memes/ebibs-meme-115.jpg' alt="Dog" style={{ width: '300px', marginTop: '20px' }} />
        </div>
      )};
      <div><span>{("0" + Math.floor((time/6000) % 60)).slice(-2)}: </span>
      <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)} :</span> <span>{("0" + Math.floor((time/100) % 60)).slice(-2)}</span></div>
      
      <div>{running ? <button  onClick={()=>{setrunning(false)}}>stop</button> : <button  onClick={()=>{setrunning(true)}}>start</button>}
      <button  onClick={()=>settime(0)}>reset</button>
      </div>
    </div>
  );
}

export default App;

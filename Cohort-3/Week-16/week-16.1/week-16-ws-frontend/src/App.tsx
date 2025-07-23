


import { useEffect, useState, useRef } from "react";
import './App.css'





function App() {
  const [ws, setWs] = useState();
  const inputRef = useRef();


  function sendMessage() {
    ws.send("ping");
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setWs(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);


  return (
    <div>
        <input ref={inputRef} type="text" placeholder="Message..." />
        <button onClick={(sendMessage)}>Send</button>
    </div>
  )
}

export default App

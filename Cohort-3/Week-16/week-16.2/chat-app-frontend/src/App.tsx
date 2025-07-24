
import './App.css'
import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();
  

  function sendMessage() {
    const inputmsg = inputRef.current.value;
    socket.send(inputmsg);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://loclhost:8080");

    
  })
 

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Send message. .."  />
      <button type="submit" onClick={sendMessage} >Submit</button>
    </>
  )
}

export default App

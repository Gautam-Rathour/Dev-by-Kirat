
import "./App.css"
import { useState, useEffect, useRef } from "react";



function App() {
  const [messages, setMessages] = useState(["hi there..", "hello.."]);
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");

    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = ws;


    // when anyone connect => he will connnect to red room!
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }

      // cleanUp for useEffect
      return () => {
        ws.close()
      }
  }, []);


    return (
      <div className="h-screen bg-black">
        <br/> <br/> <br/>
          <div className="h-[80vh]">
            {messages.map(message => <div className="m-8">
              <span className="bg-white text-black rounded p-4 m-8">
                  {message} 
              </span>
            </div>)}
          </div>
          <div className="w-full bg-white flex">
            <input id="message" className="flex-1 p-4"></input>
            <button onClick={() => {
              const message = document.getElementById("message")?.value;
              wsRef.current.send(JSON.stringify({
                type: "chat",
                payload: {
                  message: message
                }
              }))

            }} className="bg-purple-600 text-white p-4">
              Send message
            </button>

          </div>
      </div>
    )
}

export default App

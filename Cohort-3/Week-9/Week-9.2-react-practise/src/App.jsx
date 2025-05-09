
import { useState, useEffect } from 'react';

// conditinal rendering
function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(function() {
    setInterval(function() {
      setCounterVisible(c => !c)
      let clock = setInterval(function() {
        console.log("from inside setInterval");
        setCount(count => count + 1);
      }, 1000)  
  
      return function () {
        console.log("on unmount");
        clearInterval(clock);
      }
    }, 5000);
    
  }, [])

  return <div>
        hi
        <Counter count={count}></Counter>
        hello
    </div>
}


// mounting, re-rendering, unmounting
function Counter() {




  useEffect(function(props) {
    console.log("on mount");
    
  }, []) // dependency array, cleanup, fetch indide useEffect



  return <div>
    <h1 id="text">{props.count}</h1>
  </div>
}
export default App

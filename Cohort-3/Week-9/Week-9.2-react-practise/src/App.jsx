
import { useState } from 'react';

function App() {

  return ( <div>
        <b>
          hi there..
        </b>
        <Counter></Counter>
    </div>
  )
}

function Counter() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function reset() {
    setCount(count - count);
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count +</button>
    <button onClick={decreaseCount}>Decrease count -</button>

    <button onClick={reset}>Reset</button>

  </div>
}
export default App

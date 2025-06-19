

// import { useState } from 'react'
// import './App.css'

// // custom hook
// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//     // setCount(c => c + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// function App() {

//   return (
//     <div>
//       <Counter/>
//       <Counter/>
//       <Counter/>
//     </div>
//   )
// }


// function Counter() {
// const {count, increaseCount} = useCounter();

//  return (
//     <div>
//       <button onClick={increaseCount}>Increase {count} </button>
//     </div>
//   )
// }



// export default App



// =====================================================================================
// =====================================================================================
// =====================================================================================
// =====================================================================================





// import { useState, useEffect } from 'react'
// import './App.css'
// import { useFetch } from './hooks/useFetch'

// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finalData, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost, 10 );

//   if(loading) {
//     return <div>
//       Lopading...
//     </div>
//   }

//   return (
//     <div>
//       <button onClick={() => setCurrentPost(1)}>1</button>
//       <button onClick={() => setCurrentPost(2)}>2</button>
//       <button onClick={() => setCurrentPost(3)}>3</button>
//       {JSON.stringify(finalData)}
//     </div>
//   )
// }


// export default App



// =====================================================================================
// =====================================================================================
// =====================================================================================
// =====================================================================================



import { useState, useEffect } from 'react'
import './App.css'
import { usePrev } from './hooks/use-prev'

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <>
    <p>{state}</p>
    <button onClick={() => setState((curr) => curr + 1)}>Click me!</button>

    <p>The previous value was { prev }</p>
    </>
  )
}


export default App;



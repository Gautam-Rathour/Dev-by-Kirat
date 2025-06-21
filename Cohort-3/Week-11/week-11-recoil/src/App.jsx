

// Recoil :: ------



// import { useState } from 'react'
// import './App.css'
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
// import {counterAtom} from './store/atoms/counter.js'


// function App() {

//   return (
//     <RecoilRoot>
//       <Counter/>
//     </RecoilRoot>
//   )
// }

// function Counter() {

//   return <div>
//     <CurrentCount />
//     <Increase />
//     <Decrease />
//   </div>
// }

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);
//   return <div>
//     {count}
//   </div>
// }


// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);
  
//   function decrease() {
//     setCount(c => c - 1);
//   }

//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }



// function Increase() {

//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount(c => c + 1);
//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// export default App




// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================




// Memo  :: --



// import { useState, useEffect, memo } from 'react'
// import './App.css'


// function App() {

//   return (
//       <Counter/>
//   )
// }

// function Counter() {
//   const [count , setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount(c => c + 1)
//     }, 3000)
//   }, []);

//   return <div>
//     <CurrentCount />
//     <Increase />
//     <Decrease />
//   </div>
// }


// const CurrentCount = memo(function () {
//   return <div>
//     1
//   </div>
// })


// const Decrease = memo(function () {
  
//   function decrease() {

//   }

//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// })



// const Increase = memo(function () {

//   function increase() {

//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// })

// export default App




// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================




import React from 'react'; 

import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
 import { counterAtom, evenSelector } from './store/atoms/counter'

function App() {
  return <div>
    <RecoilRoot>
      <Buttons/>
      <Counter/>
      <IsEven/>
    </RecoilRoot>
    
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 2);
  }


  function decrease() {
    setCount(c => c - 1);
  }


  return <div>
    <button onClick={increase}>Increase</button> &nbsp;
    <button onClick={decrease}>Decrease</button>
  </div>
}


function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>
    {even ? "Even" : "Odd"}
  </div>

}




export default App;






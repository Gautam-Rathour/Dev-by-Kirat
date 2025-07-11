



// =====================================================================================
// =====================================================================================
// =====================================================================================
// =====================================================================================






// import { useState, createContext, useContext } from 'react'
// import "./App.css"

// const BulbContext = createContext();

// export function BulbProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);

//    return <BulbContext.Provider value={{
//       bulbOn: bulbOn,
//       setBulbOn: setBulbOn
//     }}>

//       {children}

//     </BulbContext.Provider>
// }

// function App() {

//   return <div>
//     <BulbProvider>
//       <Light/>
//     </BulbProvider>
//   </div>
// }

// function Light() {

//   return <div>
//     <LightBulb />
//     <LightSwitch />
//   </div>
// }

// function LightBulb() {
//   const { bulbOn } = useContext(BulbContext);

//   return <div>
//     {bulbOn ? "Bulb On" : "Bulb Off"}
//   </div>
// }

// function LightSwitch() {
//   const { bulbOn, setBulbOn } = useContext(BulbContext);

//   function toggle() {
//     setBulbOn(!bulbOn)
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the bulb</button>
//   </div>
// }



// export default App





// =====================================================================================
// =====================================================================================
// =====================================================================================
// =====================================================================================




import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;



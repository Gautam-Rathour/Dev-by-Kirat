

// import { useState, createContext, useContext } from 'react';

// const BulbContext = createContext();

// export function BulbProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);

//     return <BulbContext.Provider value={{
//       bulbOn : bulbOn,
//       setBulbOn: setBulbOn,
//     }}>
//       {children}
//     </BulbContext.Provider>
  
// }

// function App() {
  
//   return <div>
//     <BulbProvider>
//       <Light />
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
//     {bulbOn ? "Bulb on" : "Bulb off"}
//   </div>
// }


// function LightSwitch() {
//   const { bulbOn , setBulbOn } = useContext(BulbContext);
//   function toggle() {
//     // setBulbOn(currentState => !currentState)
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
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;
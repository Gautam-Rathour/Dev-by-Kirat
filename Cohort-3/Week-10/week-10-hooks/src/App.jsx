


// import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


// function App() {
  
//   return <div>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout/>} >
//             <Route path="/neet/online-coaching-class-11" element={<Class11Program/>} />
//             <Route path="/neet/online-coaching-class-12" element={<Class12Program/>} />
//             <Route path="/" element={<Landing />} />
//             <Route path="*" element={<ErrorPage/>} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
// }

// function Layout () {
//   return <div style={{height: "100vh", backgroundColor: "orange"}}>
       
//       <Header/>

//       <div style={{height: "90vh", backgroundColor: "pink"}}>
//         <Outlet/> 
//       </div>
    
//     Footer | Contact us
//   </div>
// }

// function Header() {
//   return <div>
//             <Link to="/">Allen</Link> |
//       <Link to="/neet/online-coaching-class-11">Class-11</Link> |
//       <Link to="/neet/online-coaching-class-12">Class-12</Link> 
//   </div>
// }

// function ErrorPage () {
//   return <div>
//     Sorry page not found
//   </div>
// }

// function Landing() {
//   return <div>
//     welcome to allen
//   </div>
// }

// function Class11Program() {
//   return <div>
//     NEET programs for Class 11th
//   </div>
// }

// function Class12Program() {
//   const navigate = useNavigate();

//   function redirectUser() {
//     navigate("/");
//   }
//   return <div>
//     NEET programs for Class 12th
//     <button onClick={redirectUser}>Go back to the landing page</button>
//   </div>
// }







// export default App




// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================



// import {useRef } from "react";

// function App() {
//   const inputRef = useRef();

//   function focusOnInput() {
//     inputRef.current.focus();
//   }
  
//   return <div>
//     Sign Up<br/><br/>
//     <input ref={inputRef} type={"text"}></input><br/><br/>
//     <input id="lastName" type={"text"}></input><br/><br/>
//     <button onClick={focusOnInput}>Submit!</button><br/>
//   </div>

//   // function focusOnInput() {
//   //   document.getElementById("firstName").focus();
//   // }


// }

// export default App


// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================


import { useState, useRef } from 'react';

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();



  return <div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>

  function startClock() {
    let value = setInterval(function() {
      setCurrentCount(currentCount => currentCount  + 1);
    }, 1000)
    timer.current = value;
  }

  function stopClock() {
    console.log(timer)
    clearInterval(timer.current);
  }



}


export default App





// import './App.css'

// function App() {

//   return (
//     <>
//       {/* <div style={{display: "flex", justifyContent: "center"}}> */}
//       <div className="grid grid-cols-10">
//         <div className="bg-blue-300 col-span-3">
//           child 1
//         </div>
//         <div className="bg-red-300 col-span-6">
//           child 2
//         </div>
//         <div className="bg-green-300 col-span-1">
//           child 3
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// ================================================================================================================
// ================================================================================================================



// function App() {

//   return (
//     <>
//       {/* <div style={{display: "flex", justifyContent: "center"}}> */}
//       {/* <div className="sm:bg-blue-300 bg-red-300 md:bg-green-300 xl:bg-yellow-300">
//         hi there
//       </div> */}

//       <div className="grid grid-cols-12 ">
//         <div className="bg-blue-300 col-span-12 sm:col-span-4 text-4xl rounded-2xl">
//           child 1
//         </div>
//         <div className="bg-green-300 col-span-12 sm:col-span-4">
//           child 2
//         </div>
//         <div className="bg-red-300 col-span-12 sm:col-span-4">
//           child 3
//         </div>
//       </div>
//     </>
//   )
// }

// export default App




// ================================================================================================================
// ================================================================================================================




// function App() {

//   return (
//     <div>
//       <AllComponents/>
//     </div>
//   )
// }


// function AllComponents() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-blue-[#002b5b] ">
//       <Logo /><br/><br/><br/><br/>
//       <Title /><br/><br/>
//       <Text />
//       <Input /><br/>
//       <Button />
//     </div>
//   )
// }



// function Logo() {
//   return (
//     <div>
//       Logo
//     </div>
//   )
// }



// function Title() {
//   return (
//     <h1 className="font-bold text-2xl">Verify Your Age</h1>
//   )
// }

// function Text() {
//   return (
//     <p className="text-xs">Please confirm your birth year. This data will not be stored.</p>
//   )
// }
// function Input() {
//   return (
//     <input type="number" placeholder="Your Birth Year" className="rounded-md bg-blue-100 px-5"></input>
//   )
// }


// function Button() {
//   return (
//     <button className="bg-blue-300 hover:bg-blue-600 text-white rounded px-19">Continue</button>
//   )
// }


// export default App



// ================================================================================================================
// ================================================================================================================
// ================================================================================================================
// ================================================================================================================
// ================================================================================================================
// ================================================================================================================


import Button from './components/Buttons';
import Input from './components/Input';
import Otp from './components/Otp';



function App() {

  return (
    <div className="h-screen bg-blue-700">
      {/* <Input type='text' placeholder={"Username"}></Input>
      <Button disabled={true}>Sign up</Button> */}


        <br/><br/><br/><br/>
      <Otp />
    </div>
  )
}


export default App
















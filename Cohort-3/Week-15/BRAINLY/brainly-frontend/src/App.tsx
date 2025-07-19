
// // import { Button } from "./components/ui/Button";
// // import { PlusIcon } from "./icons/PlusIcon";
// // import { ShareIcon } from "./icons/ShareIcon";





// function App() {

//   return (
//     <>

//     <Button 
//         variant="primary"
//         startIcon={<PlusIcon size="lg" />} 
//         endIcon={<ShareIcon size="lg" />}
//         size="lg" 
//         title={"Share"}
//         ></Button>
//       </>
//   )
// }

// export default App




// ======================================================================================================
// ======================================================================================================


import { Dashboard } from "../pages/dashboard";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/Signup" element={<Signup />}/>
    <Route path="/Signin" element={<Signin />}/>
    <Route path="/dashboard" element={<Dashboard />}/>

    </Routes>
  </BrowserRouter>

}



export default App;
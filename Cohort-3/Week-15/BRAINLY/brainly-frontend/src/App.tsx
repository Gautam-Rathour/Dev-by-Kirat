
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


import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";


function App() {

  return (
    <div>
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>

        <Card />
        
    </div>
  )
}

export default App




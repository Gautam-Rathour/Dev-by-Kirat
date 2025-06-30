
// // import './App.css'
// import SidebarClass1 from './components/answers/1-basic-project'
// import Sidebar2Transition from './components/answers/sidebars/Sidebar2Transition'
// import { useState } from 'react';




// function App() {

//   return (
//       <div className="h-screen bg-white dark:bg-black">
//           <h1 className="text-black dark:text-white">hi there</h1>

//           <button onClick={() => {
//               document.querySelector("html").classList.toggle("dark")
//           }} className="dark:text-white">Toggle theme</button>
//       </div>
//   )
// }

// export default App




// ======================================================================================================
// ======================================================================================================
// ======================================================================================================





// import './App.css'
import SidebarClass1 from './components/answers/1-basic-project'
import Sidebar2Transition from './components/answers/sidebars/Sidebar2Transition'
import { useEffect, useState } from 'react';
import { SidebarToggle } from './components/icons/SidebarToggle';





function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}


function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  console.error(isDesktop); // just for checking output

  useEffect(() => {
    if (isDesktop === false) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isDesktop]);

  return (
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <MainContent sidebarOpen={sidebarOpen} />
      </div>
  )
}

function Sidebar({sidebarOpen, setSidebarOpen}) {
  if(!sidebarOpen) {
    return <div className={'fixed top-0 left-0'}>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}>
              <SidebarToggle/>
          </div>
    </div>
  }
    return <div className="w-79 h-screen bg-red-100 fixed top-0 left-0 md:relative ">
      <div>
        <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}>
            <SidebarToggle/>
        </div>
      </div>
  </div>
  
}

function MainContent() {
  return <div className="w-full">
    <div className="h-48 bg-black hidden md:block"></div>
    <div className="grid grid-cols-11 gap-8 p-8 ">
      <div className="h-69 rounded-2xl bg-red-200 col-span-11 md:col-span-2 -translate-y-12 shadow-lg hidden md:block">

      </div>
      <div className="h-96 rounded-2xl bg-green-200 col-span-11 md:col-span-6 shadow-lg">

      </div>
      <div className="h-69 rounded-2xl bg-yellow-200 col-span-11 md:col-span-3 shadow-lg">

        </div>
    </div>
  </div>
}
export default App

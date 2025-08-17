
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
import { useState } from 'react';
import { SidebarToggle } from './components/icons/SidebarToggle';
import CenterSection from './components/CenterSection';






function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

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
    return <div className="w-79 h-screen  hidden md:hidden lg:block ">
      <div>
        <div className='cursor-pointer ' onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}>
            

            <div>
                <div className="flex justify-between p-4 bg-blue-50">
                  <SidebarToggle/>
                  <div className="bg-blue-600 p-[6px] rounded-sm mr-14">Webinar.gg</div>
                  <img className="w-8 h-8 rounded mt-[2px]" src="https://imgs.search.brave.com/ZomUHiEYK-tMVuUn8k9ht6d3HKLXQSu3mVhoaPFLHS8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NidWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/NS8xMDAwMDYwNDQ2/LmpwZw"/>
                </div>
                <div className="">
                  <div className="flex justify-between p-2 hover:bg-blue-200 rounded-[8px] m-3">
                    <p>Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>

                  <div className="flex justify-between p-2 hover:bg-blue-200 rounded-[8px] m-3">
                    <p>Webinars</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>

                  <div className="flex justify-between p-2 hover:bg-blue-200 rounded-[8px] m-3">
                    <p>Billing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>

                  </div>
                  <div className="flex justify-between p-2 hover:bg-blue-200 rounded-[8px] m-3">
                    <p>User Management</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>

                  </div>
                  <div className="flex justify-between p-2 hover:bg-blue-200 rounded-[8px] m-3">
                    <p>Settings</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                  </div>  
                </div>
                
            </div>
            
        </div>
      </div>
  </div>
  
}

function MainContent() {
  return <div className="w-full">
    <div className="relative w-full h-48">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 hidden md:block "
        src="data:image/jpeg;base64,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"
        alt="Background"
      />
    </div>
    <div className=" grid grid-cols-14 gap-6 p-6">

      {/* // Part - 1  :: ---- */}
      <div className="relative h-69 rounded-2xl col-span-11 md:col-span-3 -translate-y-12 shadow-lg z-20">
        <div className="p-4 pt-8 md:p-8 flex flex-col items-center justify-center text-center">
          <img 
            className="w-34 h-24 sm:w-28 sm:h-24 md:w-28 md:h-24 rounded-2xl object-cover" 
            src="https://imgs.search.brave.com/ZomUHiEYK-tMVuUn8k9ht6d3HKLXQSu3mVhoaPFLHS8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NidWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/NS8xMDAwMDYwNDQ2/LmpwZw" 
            alt="Profile"
          />

          <h1 className="text-[16px]    mt-4 mb-3">Prabhleen Kaur</h1>
          <p className="text-[12px] sm:text-[12px]">prabhleen@gmail.com</p>
          <p className="text-[12px] sm:text-[12px]">9990009990</p>
          <p className="text-[12px] sm:text-[12px]">Delhi, India</p>
        </div>
      </div>
      
      
      {/* // Part - 2  :: ---- */}
      <div className="h-auto col-span-11 md:col-span-7  rounded-2xl">
        <CenterSection />
      </div>




      {/* // Part - 3  :: ---- */}
      <div className="h-69 rounded-2xl col-span-11 md:col-span-4 shadow-lg grid grid-cols-2 place-items-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-15 h-15 bg-[#3fdece] grid-cols-1 rounded-xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
            </div>
            <p className="text-sm font-medium ">Schedule webinar</p>
        </div>
            
        <div className="flex flex-col items-center space-y-2">
            <div className="w-15 h-15 bg-[#3fdece] grid-cols-1 rounded-xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <p className="text-sm font-medium ">Schedule webinar</p>
        </div>

        <div className="flex flex-col items-center space-y-2 sm:flex-col sm:items-center sm:space-y-2">
            <div className="w-15 h-15 bg-[#3fdece] grid-cols-1 rounded-xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </div>
            <p className="text-sm font-medium ">Schedule webinar</p>
        </div>
        
        </div>
    </div>
  </div>
}
export default App

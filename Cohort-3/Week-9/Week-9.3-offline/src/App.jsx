
// import { useState } from 'react';

// function App() {
//   return ( 
//     <div style={{background: "#dfe6e9", height: "100vh"}}>
//       <ToggleMessage />
//       <ToggleMessage />
//       <ToggleMessage />
//      </div>
//   )
// }


// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount] = useState(0);

//     console.log("re-render");
//     function increment() {
//       setNotificationCount(notificationCount + 1); // false => true, true => false
//     }

//     return (
//         <div>
//             <button onClick={increment}> Toggle Message </button>
//             {notificationCount}
//         </div>
//     );
// };







// // const style = { width: 200, backgroundColor: "black", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

// // function PostComponent({name, subtitle, time, image, description}) {
// //   return <div style={style}> 
// //   <div style={{display: "flex"}}>
// //       <img src={image}
// //       style={{
// //         width: 30,
// //         height: 30,
// //         borderRadius: 20
// //       }}/>
    
// //       <div style={{fontSize: 10, marginLeft: 10}}>
// //         <b>
// //           {name}
// //         </b>
// //         <div>{subtitle}</div>
// //         { time !== undefined && <div style={{display: 'flex'}}>
// //           <div>{time}</div>
// //           <img src={"https://motionarray.imgix.net/motion-array-2187296-XJQinzWRne-high_0005.jpg?w=660&q=60&fit=max&auto=format"}
// //           style={{width: 20, height: 11, borderRadius: 20}} />
// //         </div>}
// //       </div>
// //     </div>

// //       <div style={{fontSize: 12}}>
// //         {description}
// //       </div>

// //     </div>
// // }

// // const Greeting = () => {
// //   <h1 >Hello, raman!</h1>
// // }

// export default App









// /*{ <div style={{display: "flex", justifyContent: "center"}}>
//         <div>
//           <div>
//             <PostComponent 
//               name={"Harkirat"}
//               subtitle = {"279 followers"}
//               time={"3m ago"}
//               image={"https://pbs.twimg.com/profile_images/1877817218244775936/zYaaUHgY_400x400.jpg"}
//               description={"How to get hired in 2024? I lost my Job in 2023 , this is the roadmap I followed to get a job"}
//             />
//           </div> <br/>
//           <div>
//             <PostComponent 
//               name={"raman"}
//               subtitle = {"Promoted"}
//               image={"https://pbs.twimg.com/profile_images/1877817218244775936/zYaaUHgY_400x400.jpg"}
//               description={"How to get hired in 2024? I lost my Job in 2023 , this is the roadmap I followed to get a job"}
//             />
//           </div> <br/>
//         </div>
//       </div> }*/







// // =====================================================================================================================
// // =====================================================================================================================
// // =====================================================================================================================
// // =====================================================================================================================
// // =====================================================================================================================







// import { useState } from "react";
// import { PostComponent } from "./Post";



// function App() {
//   const [posts, setPosts] = useState([]);


//   const postComponents = posts.map(post => <PostComponent
//     name = {post.name}
//     subtitle =  {post.subtitle}
//     time = {post.time}
//     image = {post.image}
//     description = {post.description}
//     />);

//   function addPost() {
//     setPosts([...posts, {
//       name: "harkirat",
//       subtitle: "10000 followers",
//       time: " 2m ago",
//       image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//       description: "What to know how to win big? Check out how these folks won $6000 in bounties."  
//     }]);
//   }

//   return (
//     <div style={{background: "#dfe6e9", height: "100vh", }}>
//       <button onClick={addPost}>Add post</button>
//       <div style={{display: "flex", justifyContent: "center" }}>
//         <div>
//           {postComponents}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App



// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================


// import { useState } from "react";

// function App () {
//   const [count, setCount] = useState(1);

//   function increaseCount() {
//     setCount(count + 1);
//   }

//   console.log("change count!");
//   // setInterval(increaseCount, 1000);
//   console.log("count");

//   return <div> 
//     <div style={{display: "flex"}}>
//       <div style={{background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5}}>
//         {count}
//       </div>
//   </div>
//   <img style={{coursor: "pointer"}}  stc="https://imgs.search.brave.com/HkSkuh3l5WMMAS2QGB4PPujXteptm_xiTFH_N8xVHX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI4LzAyLzI3/LzM2MF9GXzUyODAy/Mjc5MF9lU0VvdHZ2/eXpabHV1R2cxWHFs/c2F0UUszU1VyQ3Zy/Ny5qcGc"/>

//   {/* <button onClick={increaseCount}> Increase the count </button> */}
//   </div>

// }

// export default App


// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================



// import { useState, useEffect } from "react";

// function App () {
//   const [count, setCount] = useState(1);
//   const [count2, setCount2] = useState(1);


//   function increaseCount() {
//     setCount(currentValue => currentValue + 1);
//   }

//    function decreaseCount() {
//     setCount2(currentValue => currentValue - 1);
//   }

//   useEffect(function() {
//     setInterval(increaseCount, 5000);
//     setInterval(decreaseCount, 8000);
//   }, [])  

//   useEffect(function() {
//     console.log("the count has been update to " + count);
//   }, [count, count2]);

//   return <div>
//     {count} {count2}
//   </div>
// }

// export default App


// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================



// import { useState, useEffect } from "react";

// function App () {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);


//   useEffect(function() {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//     .then(async res => {
//       const json = await res.json();
//       setTabData(json);
//       setLoading(false);
//     });
//   }, [currentTab])


//   return <div>
//     <button onClick={function() {
//       setCurrentTab(1);
//     }} style={{color: currentTab == 1 ? "red" : "black" }}>Todo #1</button>
//     <button onClick={function() {
//       setCurrentTab(2);
//     }}  style={{color: currentTab == 2 ? "red" : "black" }}>Todo #2</button>
//     <button onClick={function() {
//       setCurrentTab(3);
//     }}  style={{color: currentTab == 3 ? "red" : "black" }}>Todo #3</button>
//     <button onClick={function() {
//       setCurrentTab(4);
//     }}  style={{color: currentTab == 4 ? "red" : "black" }}>Todo #4</button>


//       <br/><br/>
//     {loading ? "Loading...." : tabData.title}
//   </div>
// }

// export default App


// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================


import { useEffect, useState } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(function() {
      setShowTimer(currentValue => !currentValue);
    }, 5000)
  }, [])
  return <div>
     { showTimer && <Timer/> }
  </div>
}

const Timer = function() {
  const [seconds, setSeconds] = useState(0);

  useEffect(function() {
    let clock = setInterval(function() {
      console.log("from inside clock");
      setSeconds(prev => prev + 1);
    }, 1000);
    // cleanup functions

    return function() {
      clearInterval(clock);
    }
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};

export default App



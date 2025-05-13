
import { useState } from 'react';

function App() {
  return ( 
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
     </div>
  )
}




const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

    console.log("re-render");
    function increment() {
      setNotificationCount(notificationCount + 1); // false => true, true => false
    }

    return (
        <div>
            <button onClick={increment}> Toggle Message </button>
            {notificationCount}
        </div>
    );
};










// const style = { width: 200, backgroundColor: "black", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

// function PostComponent({name, subtitle, time, image, description}) {
//   return <div style={style}> 
//   <div style={{display: "flex"}}>
//       <img src={image}
//       style={{
//         width: 30,
//         height: 30,
//         borderRadius: 20
//       }}/>
    
//       <div style={{fontSize: 10, marginLeft: 10}}>
//         <b>
//           {name}
//         </b>
//         <div>{subtitle}</div>
//         { time !== undefined && <div style={{display: 'flex'}}>
//           <div>{time}</div>
//           <img src={"https://motionarray.imgix.net/motion-array-2187296-XJQinzWRne-high_0005.jpg?w=660&q=60&fit=max&auto=format"}
//           style={{width: 20, height: 11, borderRadius: 20}} />
//         </div>}
//       </div>
//     </div>

//       <div style={{fontSize: 12}}>
//         {description}
//       </div>

//     </div>
// }

// const Greeting = () => {
//   <h1 >Hello, raman!</h1>
// }

export default App









{/* <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent 
              name={"Harkirat"}
              subtitle = {"279 followers"}
              time={"3m ago"}
              image={"https://pbs.twimg.com/profile_images/1877817218244775936/zYaaUHgY_400x400.jpg"}
              description={"How to get hired in 2024? I lost my Job in 2023 , this is the roadmap I followed to get a job"}
            />
          </div> <br/>
          <div>
            <PostComponent 
              name={"raman"}
              subtitle = {"Promoted"}
              image={"https://pbs.twimg.com/profile_images/1877817218244775936/zYaaUHgY_400x400.jpg"}
              description={"How to get hired in 2024? I lost my Job in 2023 , this is the roadmap I followed to get a job"}
            />
          </div> <br/>
        </div>
      </div> */}











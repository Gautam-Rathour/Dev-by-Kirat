
"use client"
import axios from "axios";


export default function() {
    return <div>
        Sign in page <br/>
        <input></input> <br/>
        <input></input> <br/>
        <button onClick={async () => {
            const res = await axios.post("http://localhost:3000/api/signin", {
                username: "sdlk",
                password: "mmnsoietdd"
            })

            localStorage.setItem("token", res.data.token);
        }}>Sign in</button>
    </div>
}




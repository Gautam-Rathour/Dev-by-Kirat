

"use client"

import axios from "axios";
import { useState } from "react";




export default function Signin() {
    return <div className="w-screen h-screen flex justify-center items-center rounded">
                <div className="border p-2">
                    <input type="text" placeholder="username"></input><br/>
                    <input type="password" placeholder="password"></input><br/>

                    <button onClick={() => {
                        axios.post("http://localhost:3000/api/v1/signin")
                    }}>Sign in</button>
                </div>
            </div>

}
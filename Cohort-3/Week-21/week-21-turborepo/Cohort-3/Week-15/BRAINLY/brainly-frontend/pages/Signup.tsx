

import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../src/config";



export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup () {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current);
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
        });
        alert("You have signed up");
    }

    
    return <div className="h-screen w-screen bg-gray-200 flex justify-center 
    items-center">
        <div className="bg-white rounded-xl  min-w-48 p-10 ">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>

            <div className="flex justify-center p-5">
                <Button onClick={signup} loading={false} variant="primary" text="Signup" fullWidth={true}/>
            </div>
        </div>
    </div>
}




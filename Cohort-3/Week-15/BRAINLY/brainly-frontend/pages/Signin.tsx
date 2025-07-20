


import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../src/config";
import { useNavigate } from "react-router-dom";





export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    console.log("SIGNIN", { usernameRef, passwordRef });
    const navigate = useNavigate();



    async function signin () {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current);
        const password = passwordRef.current?.value;

        console.log("Username:", username);
        console.log("Password:", password);
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);

        navigate("/dashboard");
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center 
    items-center">
        <div className="bg-white rounded-xl  min-w-48 p-10 ">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>

            <div className="flex justify-center p-5">
                <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true}/>
            </div>
        </div>
    </div>
}




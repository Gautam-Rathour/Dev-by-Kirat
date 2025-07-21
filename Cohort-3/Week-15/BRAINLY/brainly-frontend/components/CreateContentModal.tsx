

import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { PlusIcon } from "../icons/PlusIcon";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../src/config";



enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
}


//controlled component
export function CreateContentModal({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null); 
    const [type, setType] = useState(ContentType.Youtube);  
    

    function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            type,
            title
        }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        
    }
    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
                
                  
            </div>

            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 flex justify-center">
                <div className="flex flex-cols items-center">
                    <span className="bg-white opacity-100 p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon/>
                            </div>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"Title"} />
                            <Input ref={linkRef} placeholder={"Link"}/>

                        </div>
                        <div>
                            <h1>Type :-</h1>
                            <div className="flex justify-center p-4 gap-5">
                                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Youtube)
                                }}></Button>
                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Twitter)
                                }}></Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="Submit" />
                        </div>
                    </span>
                </div>
            </div>

            

        </div>}
    </div>

}






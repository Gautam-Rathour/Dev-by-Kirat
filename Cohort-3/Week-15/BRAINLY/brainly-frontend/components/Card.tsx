


import { ShareIcon } from "../icons/ShareIcon";



export function Card() {
    return <div>
        <div className="p-8 bg-white rounded-md border-gray-200 max-w-96 border">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <ShareIcon />
                    Project ideas
                </div>
                <div className="flex items-center gap-2">
                    <div>
                    <ShareIcon/>
                    </div>
                    <div>
                        <ShareIcon/>
                    </div>
                </div>
            </div>



            <div className="pt-4">
                <iframe className="w-full" src="https://www.youtube.com/embed/coh4dtY24QM?si=7nWP0fHdsQBkh3FY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    
}